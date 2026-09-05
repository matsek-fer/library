// Shared plumbing for the build scripts. Discovery is filesystem-driven and
// tolerant of an empty library: Phase 3 lands this machinery while the first
// content PRs are still open, so every consumer must work for zero bundles.
import fs from "node:fs";
import path from "node:path";

// Folder names are plural on disk, singular in ids (problem/zeta-telescoping
// lives in problems/zeta-telescoping/) — a deliberate spec/repo split.
export const TYPE_DIRS = { problem: "problems", proof: "proofs", blog: "blogs" };

// Which .md carries the member-facing statement, per type. The statement plus
// annotation.md is the embedded retrieval text (spec DECISIONS.md D-003).
const STATEMENT_FILE = { problem: "problem.md", proof: "statement.md", blog: "blog.md" };

export function libraryRoot() {
  // scripts/lib/ is two levels below the repo root.
  return path.resolve(path.dirname(new URL(import.meta.url).pathname), "..", "..");
}

/** Every *.md under the bundle trees, for the LaTeX gate. */
export function findBundleMarkdown(root) {
  const files = [];
  for (const dir of Object.values(TYPE_DIRS)) {
    const abs = path.join(root, dir);
    if (!fs.existsSync(abs)) continue;
    walk(abs, files);
  }
  return files;
}

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name.endsWith(".md")) out.push(p);
  }
}

/**
 * All bundles with a parseable manifest, sorted by id. Throws on a manifest
 * that is not valid JSON — the validator gate runs before us in CI, so a
 * broken manifest here is a real error, not something to paper over.
 */
export function discoverBundles(root) {
  const bundles = [];
  for (const [type, dirName] of Object.entries(TYPE_DIRS)) {
    const typeDir = path.join(root, dirName);
    if (!fs.existsSync(typeDir)) continue;
    for (const entry of fs.readdirSync(typeDir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      if (!entry.isDirectory()) continue;
      const dir = path.join(typeDir, entry.name);
      const manifestPath = path.join(dir, "manifest.json");
      if (!fs.existsSync(manifestPath)) continue;
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      bundles.push({
        type,
        dir,
        relDir: `${dirName}/${entry.name}`,
        manifest,
        statement: readIfExists(path.join(dir, STATEMENT_FILE[type] ?? "")),
        annotation: readIfExists(path.join(dir, "annotation.md")),
      });
    }
  }
  bundles.sort((a, b) => String(a.manifest.id).localeCompare(String(b.manifest.id)));
  return bundles;
}

function readIfExists(p) {
  return p && fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null;
}

/** Split YAML frontmatter off a markdown body. Returns { frontmatter, body }. */
export function splitFrontmatter(md) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(md);
  if (!m) return { frontmatter: null, body: md };
  return { frontmatter: m[1], body: md.slice(m[0].length) };
}

/**
 * Every $...$ / $$...$$ segment with its line number. Code fences, inline
 * code and frontmatter are masked first so a dollar sign in code or YAML is
 * never mistaken for math; the mask preserves offsets, so line numbers refer
 * to the original file.
 */
export function extractMath(md) {
  let masked = md;
  const blank = (m) => m.replace(/[^\n]/g, " ");
  const fm = /^---\r?\n[\s\S]*?\r?\n---(\r?\n|$)/.exec(masked);
  if (fm) masked = blank(fm[0]) + masked.slice(fm[0].length);
  masked = masked.replace(/```[\s\S]*?(```|$)/g, blank);
  masked = masked.replace(/`[^`\n]*`/g, blank);

  const segments = [];
  const lineOf = (idx) => md.slice(0, idx).split("\n").length;

  masked = masked.replace(/\$\$([\s\S]+?)\$\$/g, (m, tex, idx) => {
    segments.push({ tex: md.slice(idx + 2, idx + m.length - 2), display: true, line: lineOf(idx) });
    return blank(m);
  });
  // Inline math is kept single-line: a $ that opens across a paragraph break
  // is almost always a typo, and KaTeX's own auto-render treats it the same.
  const inline = /(?<![\\$])\$([^$\n]+?)(?<!\\)\$/g;
  let m;
  while ((m = inline.exec(masked)) !== null) {
    segments.push({ tex: md.slice(m.index + 1, m.index + m[0].length - 1), display: false, line: lineOf(m.index) });
  }
  segments.sort((a, b) => a.line - b.line);
  return segments;
}
