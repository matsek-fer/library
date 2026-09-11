#!/usr/bin/env node
// One command, three artifacts in dist/: the static site, llms-full.txt
// (the whole corpus in one file, for agents), and the search index
// (index.json + vectors.i8.bin, per the ecosystem embedding convention in
// spec DECISIONS.md D-003). SKIP_EMBED=1 — and any model-download failure —
// skips only the vectors: PR CI must be able to gate on the render preview
// without depending on Hugging Face being up.
//
// The communal forest (forest/, spec D-007) rides along in all three: a page
// per tree, a searchable landing page, downloadable vaults, its own
// llms-full.txt sections and its own index items. Every part of it is
// guarded on forest/ existing, so a checkout without the forest builds
// exactly the site that existed before the forest did.
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
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
const bundleById = new Map(bundles.map((b) => [String(b.manifest.id), b]));

// Experiences are feedback about the tools, not learning content: they are
// counted for the index page's note but never listed, embedded, or written
// into llms-full.txt (discoverBundles never walks experiences/).
const experiencesDir = path.join(root, "experiences");
const experienceCount = fs.existsSync(experiencesDir)
  ? fs.readdirSync(experiencesDir, { withFileTypes: true })
      .filter((e) => e.isDirectory() && fs.existsSync(path.join(experiencesDir, e.name, "experience.md")))
      .length
  : 0;
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
.sub { font-size:.8rem; color:var(--muted); font-family:ui-monospace,monospace; }
.tag.taxon { background:var(--accent); border-color:var(--accent); color:#fff; }
.crumb { font-family:ui-monospace,monospace; font-size:.8rem; margin:0 0 .4rem; }
.crumb a { text-decoration:none; }
.provenance { font-size:.85rem; color:var(--muted); border-left:3px solid var(--line);
  padding:.1rem .9rem; margin:0 0 2rem; }
.provenance p { margin:.3rem 0; }
.cta-row { display:flex; flex-wrap:wrap; gap:.5rem 1.2rem; margin:1.4rem 0 2rem;
  font-family:ui-monospace,monospace; font-size:.85rem; }
.relations { margin-top:3rem; border-top:1px solid var(--line); padding-top:1rem; font-size:.9rem; }
.relations dt { font-family:ui-monospace,monospace; font-size:.78rem; color:var(--muted);
  text-transform:uppercase; letter-spacing:.04em; }
.relations dd { margin:.15rem 0 .9rem; }
.search input { width:100%; padding:.6rem .8rem; font:inherit; color:var(--fg);
  background:var(--bg); border:1px solid var(--line); border-radius:.5rem; }
.search input:focus { outline:2px solid var(--accent); outline-offset:1px; }
ol.results { list-style:none; padding:0; margin:1rem 0 0; }
ol.results li { padding:.6rem 0; border-bottom:1px solid var(--line); }
ol.results .snippet { margin:.25rem 0 0; font-size:.85rem; color:var(--muted); }
details.solution { margin-top:2rem; border:1px solid var(--line); border-radius:.5rem;
  padding:.6rem 1rem; background:var(--card); }
details.solution summary { cursor:pointer; font-weight:bold; }
.checkpoint { margin:2rem 0; border-left:3px solid var(--accent); padding:.2rem 1rem;
  background:var(--card); }
.checkpoint ol { margin:.4rem 0; }
.tutor-cta { margin:2.5rem 0 0; border:1px solid var(--accent); border-radius:.5rem;
  padding:.6rem 1rem; background:var(--card); }
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

/* ---------------- the forest: data ---------------- */

const forestDir = path.join(root, "forest");

const TAXON_LABEL_HR = {
  definition: "Definicija", theorem: "Teorem", lemma: "Lema",
  proposition: "Propozicija", corollary: "Korolar", proof: "Dokaz",
  example: "Primjer", exercise: "Zadatak", exposition: "Izlaganje",
  motivation: "Motivacija", intuition: "Intuicija", remark: "Napomena",
  connection: "Veza", axiom: "Aksiom",
};

// index.md is the forest's map: "## " headings with [[id]] bullets beneath
// them, in the order the digester means them to be read. The site groups by
// that map rather than inventing an order of its own — but a tree the map
// forgot still has to be reachable, so the leftovers land in "Ostalo".
function forestSections(md, trees, byId) {
  const sections = [];
  const seen = new Set();
  let current = null;
  for (const line of md.split("\n")) {
    const heading = /^##\s+(.+?)\s*$/.exec(line);
    if (heading) {
      current = { title: heading[1], ids: [] };
      sections.push(current);
      continue;
    }
    if (!current) continue;
    for (const m of line.matchAll(/\[\[([^\]|#]+)(?:\|[^\]]+)?\]\]/g)) {
      const id = m[1].trim();
      if (!byId.has(id) || seen.has(id)) continue;
      seen.add(id);
      current.ids.push(id);
    }
  }
  const rest = trees.filter((t) => !seen.has(t.id)).map((t) => t.id);
  if (rest.length) sections.push({ title: "Ostalo", ids: rest });
  return sections.filter((s) => s.ids.length);
}

function loadForest(dir) {
  const treesDir = path.join(dir, "trees");
  if (!fs.existsSync(path.join(dir, "forest.json")) || !fs.existsSync(treesDir)) return null;
  const manifest = JSON.parse(fs.readFileSync(path.join(dir, "forest.json"), "utf8"));
  const trees = [];
  for (const name of fs.readdirSync(treesDir).sort((a, b) => a.localeCompare(b))) {
    if (!name.endsWith(".md")) continue;
    const file = path.join(treesDir, name);
    const { frontmatter, body } = splitFrontmatter(fs.readFileSync(file, "utf8"));
    let fm = null;
    try { fm = frontmatter ? yaml.load(frontmatter) : null; } catch { fm = null; }
    // Without parseable frontmatter a tree has no id to be addressed by, so
    // it can be neither linked nor indexed: skipping beats emitting a page
    // nothing can reach.
    if (!fm || typeof fm.id !== "string") continue;
    trees.push({ id: fm.id, fm, body, file, name });
  }
  const byId = new Map(trees.map((t) => [t.id, t]));
  const indexPath = path.join(dir, "index.md");
  const indexMd = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, "utf8") : "";
  return { dir, manifest, trees, byId, indexMd, sections: forestSections(indexMd, trees, byId) };
}

const forest = loadForest(forestDir);

// Reading order for anything that lists trees: the position index.md gives
// them, with alphabetical order as the tiebreak for trees it never listed.
const readingRank = new Map(
  (forest?.sections ?? []).flatMap((s) => s.ids).map((id, i) => [id, i]),
);

// digested_from is the pointer from a tree back to the still-canonical
// bundle it was digested out of (spec D-007); inverted, it is how a bundle
// page finds its own trees.
const treesByBundle = new Map();
for (const t of forest?.trees ?? []) {
  const src = t.fm.digested_from;
  if (typeof src !== "string" || !src) continue;
  if (!treesByBundle.has(src)) treesByBundle.set(src, []);
  treesByBundle.get(src).push(t);
}
for (const list of treesByBundle.values()) {
  list.sort((a, b) =>
    (readingRank.get(a.id) ?? Infinity) - (readingRank.get(b.id) ?? Infinity)
    || a.id.localeCompare(b.id));
}

/* ---------------- the forest: rendering ---------------- */

const taxonLabel = (taxon) => TAXON_LABEL_HR[taxon] ?? String(taxon ?? "");

// Croatian number agreement: 1 stablo, 2–4 stabla, 5+ stabala, with 11–14
// counting as 5+ — the same rule experienceNote applies to iskustva.
function treeCountHr(n) {
  const mod10 = n % 10, mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return `${n} stablo`;
  if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `${n} stabla`;
  return `${n} stabala`;
}

// [[id]] and [[id|alias]] are Obsidian's, and the vault is authored to render
// there; on the site they become links between tree pages. A link whose
// target is not in this forest degrades to its own text — the reader still
// reads the sentence, which a dangling href would not give them.
function renderTreeMarkdown(md, hrefBase) {
  const linked = md.replace(/\[\[([^\]|#]+)(?:\|([^\]]+))?\]\]/g, (_m, target, alias) => {
    const id = String(target).trim();
    const tree = forest?.byId.get(id);
    const label = String(alias ?? tree?.fm?.title ?? id).trim();
    return tree ? `<a href="${hrefBase}${esc(id)}/">${esc(label)}</a>` : esc(label);
  });
  return renderMarkdown(linked);
}

// Prose only, for the landing page's search snippets: a preview wants
// sentences, and a half-cut $\frac{a}{b}$ in 300 characters is noise.
function plainText(md) {
  return md
    // Code first: a dollar sign inside a fence must never pair with one in
    // the prose around it.
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`\n]*`/g, " ")
    .replace(/^#{1,6}\s+.*$/gm, " ")
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    // Inline math in these trees wraps a line often enough ($f(p) \le q
    // \iff p \le\ng(q)$ is real, and KaTeX renders it) — but never a blank
    // line, and that boundary is what stops an unpaired $ from eating a
    // paragraph of prose.
    .replace(/\$(?:[^$\n]|\n(?!\s*\n))*\$/g, " ")
    // A wikilink reads as the tree it points at; a bare id in a preview is
    // the one thing a reader cannot do anything with.
    .replace(/\[\[([^\]|#]+)(?:\|([^\]]+))?\]\]/g, (_m, target, alias) =>
      alias ?? forest?.byId.get(String(target).trim())?.fm?.title ?? target)
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`>]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function snippetOf(md, limit = 300) {
  const text = plainText(md);
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const space = cut.lastIndexOf(" ");
  return (space > limit * 0.6 ? cut.slice(0, space) : cut) + "…";
}

function conceptTags(ids) {
  return (ids ?? [])
    .map((c) => `<span class="tag" title="${esc(c)}">${esc(conceptTitle.get(c) ?? c)}</span>`)
    .join(" ");
}

function treeLinks(ids, hrefBase) {
  return (ids ?? [])
    .map((id) => {
      const t = forest?.byId.get(id);
      return t ? `<a href="${hrefBase}${esc(id)}/">${esc(t.fm.title ?? id)}</a>` : esc(id);
    })
    .join(", ");
}

function treeBody(t) {
  const fm = t.fm;
  const here = "../"; // sibling trees live beside this page under forest/
  const meta = [
    `<span class="tag taxon">${esc(taxonLabel(fm.taxon))}</span>`,
    `<span>${esc(t.id)}</span>`,
    `<span>${fm.language === "en" ? "engleski" : "hrvatski"}</span>`,
    conceptTags(fm.teaches),
  ].filter(Boolean);

  const prov = [];
  const src = typeof fm.digested_from === "string" ? bundleById.get(fm.digested_from) : null;
  if (src) {
    prov.push(`<p>Iz bundlea: <a href="../../${src.relDir}/">${esc(src.manifest.title)}</a>
<span class="sub">(${esc(fm.digested_from)})</span></p>`);
  } else if (typeof fm.digested_from === "string" && fm.digested_from) {
    // The bundle was withdrawn or renamed; the pointer is still the honest
    // record of where the tree came from, so it is shown without a link.
    prov.push(`<p>Iz bundlea: <code>${esc(fm.digested_from)}</code></p>`);
  }
  if (typeof fm.adapted_from === "string" && fm.adapted_from) {
    prov.push(`<p>Prilagođeno iz: ${esc(fm.adapted_from)}</p>`);
  }

  // teaches already rides in the meta strip, where a bundle page puts it
  // too; repeating it here would say the same thing twice on one screen.
  const rel = [];
  if ((fm.requires ?? []).length) rel.push(`<dt>Traži predznanje</dt><dd>${conceptTags(fm.requires)}</dd>`);
  if ((fm.depends ?? []).length) rel.push(`<dt>Oslanja se na</dt><dd>${treeLinks(fm.depends, here)}</dd>`);
  if (typeof fm.proves === "string" && fm.proves) rel.push(`<dt>Dokazuje</dt><dd>${treeLinks([fm.proves], here)}</dd>`);

  return `<p class="crumb"><a href="../">← MatSek šuma</a></p>
<h1>${esc(fm.title ?? t.id)}</h1>
<div class="meta">${meta.join("\n")}</div>
${prov.length ? `<div class="provenance">${prov.join("\n")}</div>` : ""}
${stripLeadingH1(renderTreeMarkdown(t.body, here))}
${rel.length ? `<div class="relations"><h2 id="veze">Veze</h2><dl>${rel.join("\n")}</dl></div>` : ""}`;
}

/* ---------------- zip, without a dependency ---------------- */

// A vault is a folder, so "download the vault" is a zip — and the archive is
// written by hand rather than pulling in a packer: node:zlib already supplies
// the two hard parts (raw deflate, CRC-32) and the rest is the 1989 PKZIP
// layout. Timestamps are pinned to the DOS epoch (1980-01-01 00:00) so the
// same content always produces the same bytes.
const DOS_TIME = 0;
const DOS_DATE = 0x0021;

function zipSync(entries) {
  const parts = [];
  const central = [];
  let offset = 0;
  for (const { name, data } of entries) {
    const nameBuf = Buffer.from(name, "utf8");
    const crc = zlib.crc32(data) >>> 0;
    const deflated = zlib.deflateRawSync(data, { level: 9 });
    // Deflate expands incompressible or tiny payloads; store those instead,
    // which every unzip reads and which keeps the archive honest about size.
    const stored = deflated.length >= data.length;
    const body = stored ? data : deflated;
    const method = stored ? 0 : 8;

    const local = Buffer.alloc(30 + nameBuf.length);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);       // version needed to extract: 2.0
    local.writeUInt16LE(0x0800, 6);   // flags: names are UTF-8
    local.writeUInt16LE(method, 8);
    local.writeUInt16LE(DOS_TIME, 10);
    local.writeUInt16LE(DOS_DATE, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(body.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBuf.length, 26);
    local.writeUInt16LE(0, 28);       // no extra field
    nameBuf.copy(local, 30);
    parts.push(local, body);

    const cd = Buffer.alloc(46 + nameBuf.length);
    cd.writeUInt32LE(0x02014b50, 0);
    cd.writeUInt16LE(0x031e, 4);      // made by: UNIX, spec 3.0
    cd.writeUInt16LE(20, 6);
    cd.writeUInt16LE(0x0800, 8);
    cd.writeUInt16LE(method, 10);
    cd.writeUInt16LE(DOS_TIME, 12);
    cd.writeUInt16LE(DOS_DATE, 14);
    cd.writeUInt32LE(crc, 16);
    cd.writeUInt32LE(body.length, 20);
    cd.writeUInt32LE(data.length, 24);
    cd.writeUInt16LE(nameBuf.length, 28);
    cd.writeUInt16LE(0, 30);          // extra
    cd.writeUInt16LE(0, 32);          // comment
    cd.writeUInt16LE(0, 34);          // disk number
    cd.writeUInt16LE(0, 36);          // internal attributes
    // External attributes: the UNIX mode in the high word, -rw-r--r--.
    // Shifted unsigned — a plain << 16 lands past 2^31 and goes negative.
    cd.writeUInt32LE((0o100644 << 16) >>> 0, 38);
    cd.writeUInt32LE(offset, 42);
    nameBuf.copy(cd, 46);
    central.push(cd);

    offset += local.length + body.length;
  }
  const dir = Buffer.concat(central);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(entries.length, 8);
  eocd.writeUInt16LE(entries.length, 10);
  eocd.writeUInt32LE(dir.length, 12);
  eocd.writeUInt32LE(offset, 16);
  eocd.writeUInt16LE(0, 20);
  return Buffer.concat([...parts, dir, eocd]);
}

/** Every file under dir, depth-first and sorted, as zip entries under prefix. */
function dirEntries(dir, prefix) {
  const out = [];
  const walk = (abs, rel) => {
    for (const e of fs.readdirSync(abs, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const child = path.join(abs, e.name);
      const childRel = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) walk(child, childRel);
      else if (e.isFile()) out.push({ name: `${prefix}${childRel}`, data: fs.readFileSync(child) });
    }
  };
  walk(dir, "");
  return out;
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
function degradedCheckpoints(fm) {
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

// x_forest (the blog-writer forest-readiness convention, see
// blog-writer/docs/forest-readiness.md) renders as nothing in v1 — except a
// data-taxon attribute stamped on each tagged section heading, so future
// CSS/JS can pick sections up without a site re-render.
function applyTaxa(html, fm) {
  const xf = fm?.x_forest;
  if (!xf || typeof xf !== "object") return html;
  for (const [anchor, entry] of Object.entries(xf)) {
    const taxon = entry?.taxon;
    if (typeof taxon !== "string") continue;
    // Anchors are kebab-case by spec; stripping anything else keeps the
    // string safe to splice into a RegExp.
    const id = String(anchor).replace(/^#/, "").replace(/[^a-z0-9-]/g, "");
    html = html.replace(
      new RegExp(`(<h[1-6] id="${id}")>`),
      `$1 data-taxon="${esc(taxon)}">`,
    );
  }
  return html;
}

// "Nastavi u tutoru": a blog bundle may ship tutor-stub.json, a minimal
// AI_instructor session state that starts a tutor probe exactly where the
// blog left the reader. The stub is copied beside the page; a blog without
// one simply renders no box.
const TUTOR_CTA = `<div class="tutor-cta">
<p><strong>Nastavi u tutoru</strong> — preuzmi
<a href="tutor-stub.json" download>tutor-stub.json</a>, spremi ga kao
<code>sessions/&lt;ime-bloga&gt;/state.json</code> u svom tutor vaultu i
pokreni <code>/tutor</code>.</p>
</div>`;

// The bundle stays canonical and the trees are the merge layer (D-007), so
// the bundle page is where a reader meets its trees: the same content cut
// into pieces a forest walk can serve one at a time. The noun follows the
// bundle's own type — the section is the same everywhere, "ovog bloga" on a
// problem page is not Croatian.
const TREES_HEADING_HR = {
  blog: "Stabla iz ovog bloga",
  problem: "Stabla iz ovog zadatka",
  proof: "Stabla iz ovog dokaza",
};

function bundleTreesSection(b) {
  const trees = treesByBundle.get(String(b.manifest.id)) ?? [];
  if (trees.length === 0) return "";
  const lis = trees.map((t) => `<li><a href="../../forest/${esc(t.id)}/">${esc(t.fm.title ?? t.id)}</a>
<div class="sub">${esc(taxonLabel(t.fm.taxon))} · ${esc(t.id)}</div></li>`);
  const vault = b.type === "blog"
    ? `\n<p class="sub"><a href="${esc(path.basename(b.relDir))}-vault.zip">Preuzmi kao trezor</a>
— stabla, <code>forest.json</code> i izvorni bundle, spremno za otvaranje u Obsidianu.</p>`
    : "";
  return `<h2 id="stabla">${TREES_HEADING_HR[b.type] ?? "Stabla"}</h2>
<p class="sub">${treeCountHr(trees.length)} u <a href="../../forest/">šumi</a>.</p>
<ul class="bundles">
${lis.join("\n")}
</ul>${vault}`;
}

function bundleBody(b) {
  const m = b.manifest;
  const read = (name) => {
    const p = path.join(b.dir, name);
    return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null;
  };
  const trees = bundleTreesSection(b);
  let body = `<h1>${esc(m.title)}</h1>\n${metaLine(m)}\n`;
  if (b.type === "problem") {
    body += stripLeadingH1(renderMarkdown(read("problem.md") ?? ""));
    const sol = read("solution.md");
    // The solution ships folded so a member can attempt the problem first —
    // the same reason the spec splits statement from proof.
    if (sol) body += `<details class="solution"><summary>Rješenje</summary>\n${stripLeadingH1(renderMarkdown(sol))}</details>`;
    body += trees;
  } else if (b.type === "proof") {
    body += stripLeadingH1(renderMarkdown(read("statement.md") ?? ""));
    const proof = read("proof.md");
    if (proof) body += `<details class="solution"><summary>Dokaz</summary>\n${stripLeadingH1(renderMarkdown(proof))}</details>`;
    body += trees;
  } else {
    const { frontmatter, body: md } = splitFrontmatter(read("blog.md") ?? "");
    // The validator gates frontmatter shape before us; a parse failure here
    // just means the page renders without hooks, not a broken build.
    let fm = null;
    try { fm = frontmatter ? yaml.load(frontmatter) : null; } catch { fm = null; }
    body += applyTaxa(stripLeadingH1(renderMarkdown(md)), fm);
    body += degradedCheckpoints(fm);
    body += trees;
    if (fs.existsSync(path.join(b.dir, "tutor-stub.json"))) body += TUTOR_CTA;
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
  const stub = path.join(b.dir, "tutor-stub.json");
  if (fs.existsSync(stub)) fs.cpSync(stub, path.join(outDir, "tutor-stub.json"));
}

/* ---------------- forest pages, graph and vaults ---------------- */

const TOOL_VERSION = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8")).version;

// forest.json for an exported vault: the blog is the source work, the trees
// are its digest. derivative is false because the bundle is CC BY and the
// library holds the rights it is exporting — so the vault carries no notice,
// which forest-format.md forbids outside a derivative one.
// An export carries a slice of the forest, so edges leaving that slice have no
// target inside the zip. Dropping them keeps the exported vault honest and
// loadable; the dropped relationships still exist upstream, which is what the
// index.md note points readers back to.
function closeSubgraph(t, included) {
  const raw = fs.readFileSync(t.file, "utf8");
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw);
  if (!m) return raw;
  const lines = m[1].split("\n").flatMap((line) => {
    const dep = /^depends:\s*\[(.*)\]\s*$/.exec(line);
    if (dep) {
      const kept = dep[1].split(",").map((s) => s.trim()).filter((s) => s && included.has(s));
      return [`depends: [${kept.join(", ")}]`];
    }
    const proves = /^proves:\s*"?([^"]+)"?\s*$/.exec(line);
    // A proof whose statement stayed behind keeps its prose but loses the
    // anchor claim; asserting it would point at nothing.
    if (proves && !included.has(proves[1].trim())) return [];
    return [line];
  });
  const body = m[2].replace(/\[\[([^\[\]|#]+)(\|[^\]]*)?\]\]/g, (whole, target, label) =>
    included.has(target.trim()) ? whole : (label ? label.slice(1) : target.trim()));
  return `---\n${lines.join("\n")}\n---\n\n${body.trim()}\n`;
}

function vaultManifest(b) {
  const created = String(b.manifest.created ?? "");
  const year = Number(created.slice(0, 4));
  return {
    schema_version: "forest-0.1",
    source: {
      title: b.manifest.title,
      authors: [b.manifest.author].filter(Boolean),
      ...(Number.isInteger(year) && year > 0 ? { year } : {}),
      kind: "notes",
      license: "CC-BY-4.0",
    },
    language: b.manifest.language,
    created,
    tool: "matsek-library-export",
    tool_version: TOOL_VERSION,
    derivative: false,
    // ^x_ is the format's sanctioned extension space, and the bundle id is
    // what lets a reader (or a re-digest) find the canonical source again.
    x_source_bundle: b.manifest.id,
  };
}

function vaultIndexMd(b, trees) {
  const lines = trees.map((t) => `- [[${t.id}]] — ${t.fm.title ?? t.id}`);
  return `# ${b.manifest.title} — trezor

Stabla probavljena iz bundlea \`${b.manifest.id}\` knjižnice Matematičke
sekcije FER, u formatu Forest vault 0.1. Izvorni je bundle u
\`source-bundle/\` i ostaje kanonski: stabla su izvedena iz njega.

Sadržaj je pod licencom CC BY 4.0, autor: ${b.manifest.author ?? "—"}.

Ovo je *početni* trezor: stabla, manifest i izvorni bundle. Veze prema
stablima koja su ostala u zajedničkoj šumi izostavljene su jer ovdje ne bi
vodile nikamo — cijela je šuma u \`matsek-forest.zip\` na stranici knjižnice.
Za graf i pretragu pokreni jednom, uz instaliran \`forest\` dodatak:

    node "$CLAUDE_PLUGIN_ROOT/scripts/build-views.mjs" .
    node "$CLAUDE_PLUGIN_ROOT/scripts/index-vault.mjs" .

## Redoslijed čitanja

${lines.join("\n")}
`;
}

let vaultZipCount = 0;

if (forest) {
  const forestOut = path.join(dist, "forest");
  fs.mkdirSync(forestOut, { recursive: true });

  for (const t of forest.trees) {
    const outDir = path.join(forestOut, t.id);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(
      path.join(outDir, "index.html"),
      page({ title: t.fm.title ?? t.id, body: treeBody(t), depth: 2 }),
    );
  }

  // views/forest.html is already a self-contained document — layout, math and
  // KaTeX's fonts are baked in at generation time — so the site ships it
  // verbatim rather than re-deriving a second, divergent graph.
  const graphSrc = path.join(forest.dir, "views", "forest.html");
  const hasGraph = fs.existsSync(graphSrc);
  if (hasGraph) fs.cpSync(graphSrc, path.join(forestOut, "graph.html"));

  const forestZipEntries = [
    { name: "forest.json", data: fs.readFileSync(path.join(forest.dir, "forest.json")) },
    ...(forest.indexMd ? [{ name: "index.md", data: fs.readFileSync(path.join(forest.dir, "index.md")) }] : []),
    ...forest.trees.map((t) => ({ name: `trees/${t.name}`, data: fs.readFileSync(t.file) })),
  ];
  fs.writeFileSync(path.join(forestOut, "matsek-forest.zip"), zipSync(forestZipEntries));

  // One vault per blog: the blog's own trees, a manifest naming the blog as
  // the source work, and the bundle itself verbatim — enough for a member to
  // unzip it into Obsidian and study offline without the site.
  for (const b of bundles) {
    if (b.type !== "blog") continue;
    const trees = treesByBundle.get(String(b.manifest.id)) ?? [];
    if (trees.length === 0) continue;
    const slug = path.basename(b.relDir);
    const included = new Set(trees.map((x) => x.id));
    const entries = [
      { name: "forest.json", data: Buffer.from(JSON.stringify(vaultManifest(b), null, 2) + "\n", "utf8") },
      { name: "index.md", data: Buffer.from(vaultIndexMd(b, trees), "utf8") },
      ...trees.map((t) => ({ name: `trees/${t.name}`, data: Buffer.from(closeSubgraph(t, included), "utf8") })),
      ...dirEntries(b.dir, "source-bundle/"),
    ];
    fs.writeFileSync(path.join(dist, b.relDir, `${slug}-vault.zip`), zipSync(entries));
    vaultZipCount += 1;
  }

  /* --- the landing page: search over the trees, then the map --- */

  const searchData = forest.trees.map((t) => ({
    id: t.id,
    title: t.fm.title ?? t.id,
    taxon: t.fm.taxon ?? "",
    teaches: t.fm.teaches ?? [],
    lang: t.fm.language ?? forest.manifest.language ?? "hr",
    snippet: snippetOf(t.body),
  }));
  // "<" is escaped so no tree body can close the data island early.
  const embedJson = (value) => JSON.stringify(value).replace(/</g, "\\u003c");

  const searchScript = `<script id="forest-data" type="application/json">${embedJson(searchData)}</script>
<script>
(function () {
  var data = JSON.parse(document.getElementById("forest-data").textContent);
  var LABEL = ${embedJson(TAXON_LABEL_HR)};
  var LIMIT = 40;
  // Both sides are folded to plain ASCII before matching, so a query typed
  // on a keyboard without č/ć/š/ž/đ still finds the tree — the same rule
  // scripts/search.mjs applies to the library index.
  function fold(s) {
    return String(s).toLowerCase().replace(/đ/g, "d")
      .normalize("NFD").replace(/[\\u0300-\\u036f]/g, "");
  }
  function plural(n) {
    var m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return n + " stablo";
    if (m10 >= 2 && m10 <= 4 && !(m100 >= 12 && m100 <= 14)) return n + " stabla";
    return n + " stabala";
  }
  for (var i = 0; i < data.length; i++) {
    var d = data[i];
    d.hayTitle = fold(d.title + " " + d.id);
    d.hay = d.hayTitle + " " + fold((LABEL[d.taxon] || d.taxon) + " "
      + d.teaches.join(" ") + " " + d.snippet);
  }
  var input = document.getElementById("q");
  var out = document.getElementById("qresults");
  var note = document.getElementById("qnote");
  var idle = note.textContent;
  function score(d, phrase, toks) {
    var s = d.hayTitle.indexOf(phrase) !== -1 ? 8 : (d.hay.indexOf(phrase) !== -1 ? 4 : 0);
    for (var i = 0; i < toks.length; i++) {
      if (d.hayTitle.indexOf(toks[i]) !== -1) s += 2;
      else if (d.hay.indexOf(toks[i]) !== -1) s += 1;
    }
    return s;
  }
  function matches(d, phrase, toks) {
    if (d.hay.indexOf(phrase) !== -1) return true;
    for (var i = 0; i < toks.length; i++) if (d.hay.indexOf(toks[i]) === -1) return false;
    return toks.length > 0;
  }
  function row(d) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = d.id + "/";
    a.textContent = d.title;
    li.appendChild(a);
    var sub = document.createElement("div");
    sub.className = "sub";
    sub.textContent = (LABEL[d.taxon] || d.taxon) + " · " + d.id
      + (d.teaches.length ? " · " + d.teaches.join(", ") : "");
    li.appendChild(sub);
    if (d.snippet) {
      var p = document.createElement("p");
      p.className = "snippet";
      p.textContent = d.snippet;
      li.appendChild(p);
    }
    return li;
  }
  function run() {
    var phrase = fold(input.value.trim());
    out.textContent = "";
    if (!phrase) { note.textContent = idle; return; }
    var toks = phrase.split(/[^a-z0-9]+/).filter(Boolean);
    var hits = data.filter(function (d) { return matches(d, phrase, toks); });
    if (hits.length === 0) { note.textContent = "Nema stabla za taj upit."; return; }
    hits.sort(function (a, b) {
      return score(b, phrase, toks) - score(a, phrase, toks) || a.id.localeCompare(b.id);
    });
    note.textContent = plural(hits.length) + " pronađeno.";
    for (var i = 0; i < hits.length && i < LIMIT; i++) out.appendChild(row(hits[i]));
    if (hits.length > LIMIT) {
      var more = document.createElement("li");
      more.className = "sub";
      more.textContent = "… i još " + (hits.length - LIMIT) + ". Suzi upit.";
      out.appendChild(more);
    }
  }
  input.addEventListener("input", run);
  // Enabled only once the script has run, so a reader without JavaScript is
  // never offered a box that cannot answer.
  input.disabled = false;
  run();
})();
</script>`;

  const sectionsHtml = forest.sections.map((s) => {
    const lis = s.ids.map((id) => {
      const t = forest.byId.get(id);
      return `<li><a href="${esc(id)}/">${esc(t.fm.title ?? id)}</a>
<div class="sub">${esc(taxonLabel(t.fm.taxon))} · ${esc(id)}</div></li>`;
    });
    return `<h2 id="${anchorOf(s.title)}">${esc(s.title)}</h2>
<ul class="bundles">
${lis.join("\n")}
</ul>`;
  }).join("\n");

  const hrCount = forest.trees.filter((t) => (t.fm.language ?? forest.manifest.language) !== "en").length;
  const enCount = forest.trees.length - hrCount;

  const forestBody = `<h1>MatSek šuma</h1>
<p>Zajednička šuma knjižnice (spec D-007): svaki je bundle probavljen u mala,
samostalna stabla — jedna definicija, jedan teorem, jedan dokaz po stablu —
povezana DAG-om preduvjeta. Stabla su sloj u koji se spaja, a bundleovi
ostaju kanonski.</p>
<p class="sub">${treeCountHr(forest.trees.length)} · ${hrCount} na hrvatskom, ${enCount} na engleskom</p>
<div class="cta-row">
${hasGraph ? '<a href="graph.html"><strong>Interaktivni graf šume →</strong></a>' : ""}
<a href="matsek-forest.zip">Preuzmi kao trezor (zip)</a>
<a href="../">Natrag na knjižnicu</a>
</div>
<div class="search">
<label class="sub" for="q">Pretraži stabla</label>
<input id="q" type="search" autocomplete="off" spellcheck="false" disabled
  placeholder="naslov, pojam ili koncept — npr. orbita, entropy, koseti">
<p id="qnote" class="sub">${treeCountHr(forest.trees.length)} u šumi.</p>
<noscript><p class="sub">Pretraživanje treba JavaScript; cijeli je popis niže.</p></noscript>
<ol id="qresults" class="results"></ol>
</div>
${sectionsHtml}
${searchScript}`;

  fs.writeFileSync(
    path.join(forestOut, "index.html"),
    page({ title: "Šuma", body: forestBody, depth: 1 }),
  );
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

// Croatian number agreement for the note: 1 iskustvo zaprimljeno,
// 2-4 iskustva zaprimljena, 5+ iskustava zaprimljeno (11-14 count as 5+).
function experienceNote(n) {
  if (n === 0) return "";
  const mod10 = n % 10, mod100 = n % 100;
  const paucal = mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14);
  const noun = mod10 === 1 && mod100 !== 11 ? "iskustvo" : paucal ? "iskustva" : "iskustava";
  const participle = paucal ? "zaprimljena" : "zaprimljeno";
  return `<p class="meta">${n} ${noun} ${participle}</p>`;
}

// The forest is a second way through the same content, so it gets its own
// block on the index rather than a footnote: the landing page to search it,
// the graph to see its shape, the zip to take it away.
const forestSection = forest ? `<h2 id="suma">Šuma</h2>
<p>Isti sadržaj, razrezan na ${treeCountHr(forest.trees.length)} — definicije,
teoreme, dokaze i zadatke koji se čitaju samostalno i povezani su DAG-om
preduvjeta (spec D-007).</p>
<ul class="bundles">
<li><a href="forest/">Pretraži šumu</a>
<div class="sub">pretraživanje po naslovu, pojmu i konceptu + cijela karta</div></li>
${fs.existsSync(path.join(dist, "forest", "graph.html"))
    ? `<li><a href="forest/graph.html">Interaktivni graf</a>
<div class="sub">stabla, sekcije i napredak čitanja u jednoj stranici</div></li>` : ""}
<li><a href="forest/matsek-forest.zip">Preuzmi kao trezor</a>
<div class="sub">zip: forest.json, trees/, index.md — otvara se kao Obsidian vault</div></li>
</ul>` : "";

const indexBody = `<h1>MatSek knjižnica</h1>
<p>Zadaci, dokazi i blogovi Matematičke sekcije FER-a — pišu ih članovi,
objavljeno pod licencom CC BY 4.0. Doprinosi stižu kao pull requestovi u
<a href="https://github.com/matsek-fer/library">matsek-fer/library</a>.</p>
${groups.length ? groups.join("\n") : "<p><em>Knjižnica je još prazna — prvi sadržaj je u pripremi.</em></p>"}
${forestSection}
${experienceNote(experienceCount)}
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
bundle, then one section per forest tree, all delimited by "${DELIM}" lines.

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

// The trees follow the bundles in the same delimiter style. An agent reading
// only this file still sees the DAG: depends/proves name tree ids, and
// digested_from names the bundle a few sections above.
if (forest) {
  const line = (label, value) => (value == null || value === "" ? "" : `\n${label}: ${value}`);
  for (const t of forest.trees) {
    const fm = t.fm;
    llms += `
${DELIM}
TREE ${t.id}
${DELIM}
taxon: ${fm.taxon}
title: ${fm.title}
language: ${fm.language ?? forest.manifest.language ?? ""}
teaches: [${(fm.teaches ?? []).join(", ")}]
requires: [${(fm.requires ?? []).join(", ")}]
depends: [${(fm.depends ?? []).join(", ")}]${line("proves", fm.proves)}${line("digested_from", fm.digested_from)}${line("adapted_from", fm.adapted_from)}
standalone: ${fm.standalone === true}${fm.x_annotation ? `\n\n----- ${t.id} x_annotation -----\n${String(fm.x_annotation).trim()}` : ""}

----- forest/trees/${t.name} -----
${t.body.trim()}
`;
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
    // kind splits the two families a consumer now has to tell apart: a
    // bundle is the canonical artifact, a tree one teaching object cut out
    // of it. Both stay in one index so /ask and problemset search once.
    kind: "bundle",
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

// Same D-003 shape as a bundle's — title, then the body verbatim, markdown
// and math included, exactly as embedText feeds a statement — plus the
// English annotation when the tree carries one: that is what lets an English
// query reach a Croatian tree, the job annotation.md does for a bundle.
function treeEmbedText(t) {
  const base = `passage: ${t.fm.title ?? t.id} — ${t.body.trim()}`;
  const ann = typeof t.fm.x_annotation === "string" ? t.fm.x_annotation.trim() : "";
  return ann ? `${base}\n\n${ann}` : base;
}

function treeItemOf(t, i, scale) {
  const fm = t.fm;
  return {
    kind: "tree",
    id: t.id,
    taxon: fm.taxon,
    title: fm.title ?? t.id,
    language: fm.language ?? forest?.manifest?.language ?? "hr",
    teaches: fm.teaches ?? [],
    requires: fm.requires ?? [],
    ...(fm.digested_from ? { digested_from: fm.digested_from } : {}),
    path: `forest/${t.id}`,
    offset: i * DIMS,
    ...(scale != null ? { scale } : {}),
  };
}

// One flat list, bundles first: the offset scheme is positional, so keeping
// the existing family ahead of the new one leaves published bundle offsets
// where they were.
const indexUnits = [
  ...bundles.map((b) => ({ text: () => embedText(b), item: (i, scale) => itemOf(b, i, scale) })),
  ...(forest?.trees ?? []).map((t) => ({ text: () => treeEmbedText(t), item: (i, scale) => treeItemOf(t, i, scale) })),
];

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
  const vectors = Buffer.alloc(indexUnits.length * DIMS);
  const items = [];
  for (let i = 0; i < indexUnits.length; i++) {
    const out = await extractor(indexUnits[i].text(), { pooling: "mean", normalize: true });
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
    items.push(indexUnits[i].item(i, Number(scale.toPrecision(8))));
  }
  writeIndex(items, vectors, false);
  console.log(`index: embedded ${items.length} item(s), ${vectors.length} bytes of vectors.`);
}

const unembeddedItems = () => indexUnits.map((u, i) => u.item(i, null));

if (process.env.SKIP_EMBED === "1") {
  writeIndex(unembeddedItems(), Buffer.alloc(0), true);
  console.log(`index: SKIP_EMBED=1 — wrote ${indexUnits.length} item(s) unembedded.`);
} else {
  try {
    await embedAll();
  } catch (err) {
    // A HF download hiccup must not fail the whole build: the site and
    // llms-full.txt are still good, and the next merge re-embeds.
    console.warn(`index: embedding failed (${err.message}); writing unembedded index.`);
    writeIndex(unembeddedItems(), Buffer.alloc(0), true);
  }
}

const forestNote = forest
  ? `, ${forest.trees.length} tree(s), ${vaultZipCount + 1} vault zip(s)`
  : "";
console.log(`build: ${bundles.length} bundle(s)${forestNote} → dist/ (site, llms-full.txt, index).`);
