#!/usr/bin/env node
// One command, three artifacts in dist/: the static site, llms-full.txt
// (the whole corpus in one file, for agents), and the search index
// (index.json + vectors.i8.bin, per the ecosystem embedding convention in
// spec DECISIONS.md D-003). SKIP_EMBED=1 — and any model-download failure —
// skips only the vectors: PR CI must be able to gate on the render preview
// without depending on Hugging Face being up.
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { marked } from "marked";
import {
  TYPE_DIRS, discoverBundles, extractMath, libraryRoot, splitFrontmatter,
} from "./lib/bundles.mjs";

const root = libraryRoot();
const dist = path.join(root, "dist");
const MODEL = "Xenova/multilingual-e5-small";
const DIMS = 384;

const bundles = discoverBundles(root);
const conceptsPath = path.join(root, "concepts", "concepts.yaml");
const conceptsRaw = fs.existsSync(conceptsPath) ? fs.readFileSync(conceptsPath, "utf8") : "";
const concepts = conceptsRaw ? yaml.load(conceptsRaw) : [];
const conceptTitle = new Map((Array.isArray(concepts) ? concepts : []).map((c) => [c.id, c.title]));

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, "index"), { recursive: true });

/* ---------------- markdown → HTML ---------------- */

// Heading anchors follow the spec's algorithm (bundles.md, "Blog hooks") so
// checkpoint goto links resolve on the rendered page.
function anchorOf(text) {
  return text
    .toLowerCase()
    .replace(/[čć]/g, "c").replace(/š/g, "s").replace(/ž/g, "z").replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

marked.use({
  renderer: {
    heading(token) {
      const inner = this.parser.parseInline(token.tokens);
      return `<h${token.depth} id="${anchorOf(token.text)}">${inner}</h${token.depth}>\n`;
    },
  },
});

// Math must survive marked untouched (underscores in $a_1$ would otherwise
// become <em>), so segments are swapped for placeholders before parsing and
// restored — HTML-escaped, delimiters intact — for KaTeX's client-side
// auto-render to find.
function renderMarkdown(md) {
  const segments = extractMath(md);
  const stash = [];
  let out = md;
  // Replace longest-first so an inline segment inside a display one (there
  // are none, extractMath masks) or identical repeats behave predictably.
  const uniq = [...new Set(segments.map((s) => (s.display ? `$$${s.tex}$$` : `$${s.tex}$`)))]
    .sort((a, b) => b.length - a.length);
  for (const lit of uniq) {
    const token = `@@MATH${stash.length}@@`;
    stash.push(lit);
    out = out.split(lit).join(token);
  }
  let html = marked.parse(out);
  stash.forEach((lit, i) => {
    html = html.split(`@@MATH${i}@@`).join(esc(lit));
  });
  return html;
}

/* ---------------- site chrome ---------------- */

const KATEX_VERSION = "0.16.11";
// Client-side rendering keeps every page a self-contained document: no build
// step for readers of the HTML source, and the CDN payload is cached across
// pages.
const katexHead = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/contrib/auto-render.min.js"
  onload="renderMathInElement(document.body,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false})"></script>`;

const css = `
:root { --fg:#1a1a1a; --muted:#6a6a6a; --line:#e2e2e2; --accent:#0b5fa5; --bg:#fdfdfc; --card:#f4f4f2; }
* { box-sizing:border-box; }
body { margin:0; background:var(--bg); color:var(--fg);
  font:17px/1.65 Georgia,'Times New Roman',serif; }
main { max-width:44rem; margin:0 auto; padding:2.5rem 1.25rem 5rem; }
a { color:var(--accent); }
h1,h2,h3 { line-height:1.25; font-family:inherit; }
h1 { font-size:1.9rem; margin:.5rem 0 1rem; }
header.site { font-family:ui-monospace,'Cascadia Mono',monospace; font-size:.85rem;
  border-bottom:1px solid var(--line); padding:.9rem 1.25rem; }
header.site a { text-decoration:none; color:var(--muted); }
.meta { font-family:ui-monospace,monospace; font-size:.8rem; color:var(--muted);
  display:flex; flex-wrap:wrap; gap:.4rem 1.1rem; margin-bottom:2rem; }
.tag { background:var(--card); border:1px solid var(--line); border-radius:.6rem; padding:0 .5rem; }
ul.bundles { list-style:none; padding:0; }
ul.bundles li { padding:.55rem 0; border-bottom:1px solid var(--line); }
ul.bundles .sub { font-size:.8rem; color:var(--muted); font-family:ui-monospace,monospace; }
details.solution { margin-top:2rem; border:1px solid var(--line); border-radius:.5rem;
  padding:.6rem 1rem; background:var(--card); }
details.solution summary { cursor:pointer; font-weight:bold; }
.checkpoint { margin:2rem 0; border-left:3px solid var(--accent); padding:.2rem 1rem;
  background:var(--card); }
.checkpoint ol { margin:.4rem 0; }
pre { background:var(--card); padding:.8rem 1rem; overflow-x:auto; border-radius:.4rem; }
code { font-size:.9em; }
img { max-width:100%; }
footer { margin-top:4rem; font-size:.8rem; color:var(--muted);
  border-top:1px solid var(--line); padding-top:1rem; }`;

function page({ title, body, depth }) {
  const home = depth === 0 ? "./" : "../".repeat(depth);
  return `<!doctype html>
<html lang="hr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} · MatSek knjižnica</title>
<style>${css}</style>${katexHead}
</head>
<body>
<header class="site"><a href="${home}">MatSek knjižnica</a></header>
<main>
${body}
<footer>Matematička sekcija FER · sadržaj pod licencom
<a href="https://creativecommons.org/licenses/by/4.0/deed.hr">CC BY 4.0</a></footer>
</main>
</body>
</html>`;
}

/* ---------------- per-bundle pages ---------------- */

const TYPE_LABEL_HR = { problem: "Zadatak", proof: "Dokaz", blog: "Blog" };
const GROUP_LABEL_HR = { problem: "Zadaci", proof: "Dokazi", blog: "Blogovi" };

function metaLine(m) {
  const bits = [`<span>${TYPE_LABEL_HR[m.type] ?? m.type}</span>`];
  if (m.difficulty) bits.push(`<span title="težina">${"★".repeat(m.difficulty)}${"☆".repeat(5 - m.difficulty)}</span>`);
  bits.push(`<span>${esc(m.author ?? "")}</span>`);
  bits.push(`<span>${esc(m.created ?? "")}</span>`);
  for (const c of m.teaches ?? []) bits.push(`<span class="tag" title="${esc(conceptTitle.get(c) ?? "")}">${esc(c)}</span>`);
  return `<div class="meta">${bits.join("\n")}</div>`;
}

// The static site cannot run a checkpoint, so it degrades per the spec:
// question, visible options (correct one unmarked), and a re-read link.
function degradedCheckpoints(frontmatter) {
  let fm;
  try { fm = yaml.load(frontmatter); } catch { return ""; }
  const cps = fm?.checkpoints;
  if (!Array.isArray(cps) || cps.length === 0) return "";
  const blocks = cps.map((cp) => {
    const opts = (cp.options ?? []).map((o) => `<li>${esc(o)}</li>`).join("\n");
    const goto = cp.if_wrong?.goto ?? cp.after ?? "#";
    return `<div class="checkpoint">
<p><strong>Provjeri se:</strong> ${esc(cp.ask ?? "")}</p>
<ol>${opts}</ol>
<p>Nisi siguran/na? <a href="${esc(goto)}">Ponovno pročitaj odjeljak</a>.</p>
</div>`;
  });
  return `<h2 id="provjeri-razumijevanje">Provjeri razumijevanje</h2>\n${blocks.join("\n")}`;
}

// Authors open their files with their own "# Title" / "# Rješenje" h1; the
// page already supplies both (manifest title, the details summary), so a
// leading h1 in a rendered section is dropped rather than shown twice.
function stripLeadingH1(html) {
  return html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\n?/, "");
}

function bundleBody(b) {
  const m = b.manifest;
  const read = (name) => {
    const p = path.join(b.dir, name);
    return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null;
  };
  let body = `<h1>${esc(m.title)}</h1>\n${metaLine(m)}\n`;
  if (b.type === "problem") {
    body += stripLeadingH1(renderMarkdown(read("problem.md") ?? ""));
    const sol = read("solution.md");
    // The solution ships folded so a member can attempt the problem first —
    // the same reason the spec splits statement from proof.
    if (sol) body += `<details class="solution"><summary>Rješenje</summary>\n${stripLeadingH1(renderMarkdown(sol))}</details>`;
  } else if (b.type === "proof") {
    body += stripLeadingH1(renderMarkdown(read("statement.md") ?? ""));
    const proof = read("proof.md");
    if (proof) body += `<details class="solution"><summary>Dokaz</summary>\n${stripLeadingH1(renderMarkdown(proof))}</details>`;
  } else {
    const { frontmatter, body: md } = splitFrontmatter(read("blog.md") ?? "");
    body += stripLeadingH1(renderMarkdown(md));
    if (frontmatter) body += degradedCheckpoints(frontmatter);
  }
  return body;
}

for (const b of bundles) {
  const outDir = path.join(dist, b.relDir);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(
    path.join(outDir, "index.html"),
    page({ title: b.manifest.title, body: bundleBody(b), depth: 2 }),
  );
  const assets = path.join(b.dir, "assets");
  if (fs.existsSync(assets)) fs.cpSync(assets, path.join(outDir, "assets"), { recursive: true });
}

/* ---------------- index page ---------------- */

const groups = Object.keys(TYPE_DIRS).map((type) => {
  const items = bundles.filter((b) => b.type === type);
  if (items.length === 0) return "";
  const lis = items.map((b) => {
    const m = b.manifest;
    const diff = m.difficulty ? ` · ${"★".repeat(m.difficulty)}` : "";
    return `<li><a href="${b.relDir}/">${esc(m.title)}</a>
<div class="sub">${esc(m.id)}${diff} · ${esc(m.author ?? "")}</div></li>`;
  });
  return `<h2 id="${TYPE_DIRS[type]}">${GROUP_LABEL_HR[type]}</h2>\n<ul class="bundles">\n${lis.join("\n")}\n</ul>`;
}).filter(Boolean);

const indexBody = `<h1>MatSek knjižnica</h1>
<p>Zadaci, dokazi i blogovi Matematičke sekcije FER-a — pišu ih članovi,
objavljeno pod licencom CC BY 4.0. Doprinosi stižu kao pull requestovi u
<a href="https://github.com/matsek-fer/library">matsek-fer/library</a>.</p>
${groups.length ? groups.join("\n") : "<p><em>Knjižnica je još prazna — prvi sadržaj je u pripremi.</em></p>"}
<p style="margin-top:3rem" class="sub"><a href="llms-full.txt">llms-full.txt</a> ·
<a href="index/index.json">indeks pretraživanja</a></p>`;

fs.writeFileSync(path.join(dist, "index.html"), page({ title: "Početna", body: indexBody, depth: 0 }));
// GitHub Pages would otherwise run the site through Jekyll and drop dot-dirs.
fs.writeFileSync(path.join(dist, ".nojekyll"), "");

/* ---------------- llms-full.txt ---------------- */

const DELIM = "=".repeat(72);
let llms = `MatSek library — full corpus for machine consumption
Generated ${new Date().toISOString().slice(0, 10)} from https://github.com/matsek-fer/library
License: CC BY 4.0 (content). Format: concept registry, then one section per
bundle delimited by "${DELIM}" lines.

${DELIM}
CONCEPT REGISTRY (concepts/concepts.yaml)
${DELIM}

${conceptsRaw.trim()}
`;

for (const b of bundles) {
  const m = b.manifest;
  llms += `
${DELIM}
BUNDLE ${m.id}
${DELIM}
type: ${m.type}
title: ${m.title}
language: ${m.language}
author: ${m.author}
license: ${m.license}
provenance: ${m.provenance}${m.adapted_from ? `\nadapted_from: ${m.adapted_from}` : ""}
created: ${m.created}
teaches: [${(m.teaches ?? []).join(", ")}]
requires: [${(m.requires ?? []).join(", ")}]${m.difficulty != null ? `\ndifficulty: ${m.difficulty}` : ""}
`;
  const mdFiles = fs.readdirSync(b.dir).filter((f) => f.endsWith(".md")).sort();
  for (const f of mdFiles) {
    llms += `\n----- ${m.id}/${f} -----\n${fs.readFileSync(path.join(b.dir, f), "utf8").trim()}\n`;
  }
}
fs.writeFileSync(path.join(dist, "llms-full.txt"), llms);

/* ---------------- search index ---------------- */

// D-003: what gets embedded is "passage: " + statement + annotation; title
// prepended because retrieval queries often quote it.
function embedText(b) {
  const statement = b.type === "blog" ? splitFrontmatter(b.statement ?? "").body : b.statement ?? "";
  return `passage: ${b.manifest.title}\n\n${(b.annotation ?? "").trim()}\n\n${statement.trim()}`;
}

function itemOf(b, i, scale) {
  const m = b.manifest;
  return {
    id: m.id,
    type: m.type,
    title: m.title,
    language: m.language,
    ...(m.difficulty != null ? { difficulty: m.difficulty } : {}),
    teaches: m.teaches ?? [],
    requires: m.requires ?? [],
    path: b.relDir,
    // Byte offset of this item's DIMS int8 values in vectors.i8.bin.
    offset: i * DIMS,
    ...(scale != null ? { scale } : {}),
  };
}

function writeIndex(items, vectors, unembedded) {
  const index = {
    schema_version: "1.0",
    model: MODEL,
    dims: DIMS,
    quantization: "int8-per-item-scale",
    ...(unembedded ? { unembedded: true } : {}),
    items,
  };
  fs.writeFileSync(path.join(dist, "index", "index.json"), JSON.stringify(index, null, 2) + "\n");
  fs.writeFileSync(path.join(dist, "index", "vectors.i8.bin"), vectors);
}

async function embedAll() {
  const { pipeline, env } = await import("@huggingface/transformers");
  env.cacheDir = path.join(root, ".model-cache");
  const extractor = await pipeline("feature-extraction", MODEL, { dtype: "q8" });
  const vectors = Buffer.alloc(bundles.length * DIMS);
  const items = [];
  for (let i = 0; i < bundles.length; i++) {
    const out = await extractor(embedText(bundles[i]), { pooling: "mean", normalize: true });
    const v = out.data;
    if (v.length !== DIMS) throw new Error(`model returned ${v.length} dims, expected ${DIMS}`);
    // Per-item scale: symmetric int8, so dot products need only one float
    // multiply per item on the consumer side.
    let maxAbs = 0;
    for (const x of v) maxAbs = Math.max(maxAbs, Math.abs(x));
    const scale = maxAbs > 0 ? maxAbs / 127 : 1;
    for (let d = 0; d < DIMS; d++) {
      vectors.writeInt8(Math.max(-127, Math.min(127, Math.round(v[d] / scale))), i * DIMS + d);
    }
    items.push(itemOf(bundles[i], i, Number(scale.toPrecision(8))));
  }
  writeIndex(items, vectors, false);
  console.log(`index: embedded ${items.length} item(s), ${vectors.length} bytes of vectors.`);
}

if (process.env.SKIP_EMBED === "1") {
  writeIndex(bundles.map((b, i) => itemOf(b, i, null)), Buffer.alloc(0), true);
  console.log(`index: SKIP_EMBED=1 — wrote ${bundles.length} item(s) unembedded.`);
} else {
  try {
    await embedAll();
  } catch (err) {
    // A HF download hiccup must not fail the whole build: the site and
    // llms-full.txt are still good, and the next merge re-embeds.
    console.warn(`index: embedding failed (${err.message}); writing unembedded index.`);
    writeIndex(bundles.map((b, i) => itemOf(b, i, null)), Buffer.alloc(0), true);
  }
}

console.log(`build: ${bundles.length} bundle(s) → dist/ (site, llms-full.txt, index).`);
