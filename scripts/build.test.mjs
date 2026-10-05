// The build is one script with no exports, so it is tested the way CI runs
// it: a throwaway library is written to a temp dir, scripts/ is copied in
// beside it, the build runs there with SKIP_EMBED=1, and dist/ is read back.
// The fixture is a forest-0.2 slice around group actions, cut across three
// blogs so that every closure rule in closeSubgraph has an edge to drop.
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import zlib from "node:zlib";
import { execFileSync } from "node:child_process";
import yaml from "js-yaml";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
let lib;
let dist;

const PROBA = "blog/proba";
const DRUGA = "blog/druga";
const TRECA = "blog/treca";

const TREES = [
  ["def-group", "definition", { teaches: ["groups"], depends: [], digested_from: PROBA }, "Grupa je skup s operacijom."],
  ["obj-group", "object", {
    symbol: "G", hom: "Homomorfizam $\\varphi\\colon G\\to H$.", teaches: ["groups"], depends: ["def-group"],
    digested_from: PROBA, nlab: { title: "group", revision: 3 },
  }, "## Definicija\n\nGrupa kao objekt."],
  ["obj-group-action", "object", {
    symbol: "(G, X, \\rho)", hom: "Par $(\\varphi, f)$ uz $f(g\\cdot x)=\\varphi(g)\\cdot f(x)$.",
    teaches: ["groups"], depends: ["def-group"], digested_from: PROBA,
  }, "## Definicija\n\nDjelovanje grupe na skupu."],
  ["obj-set", "object", { symbol: "X", hom: "Funkcija $f\\colon X\\to Y$.", teaches: ["groups"], depends: [], digested_from: DRUGA }, "## Definicija\n\nSkup."],
  ["mor-action-group", "morphism", {
    kind: "data", from: "obj-group-action", to: "obj-group", statement: "(G,X,\\rho)\\mapsto G", acts_on: "all", needs: [],
    on_homomorphisms: "$(\\varphi,f)\\mapsto\\varphi$", functorial: true, teaches: ["groups"], depends: ["obj-group-action"], digested_from: PROBA,
  }, "Grupa koja djeluje."],
  ["mor-action-set", "morphism", {
    kind: "data", from: "obj-group-action", to: "obj-set", statement: "(G,X,\\rho)\\mapsto X", acts_on: "all", needs: [],
    on_homomorphisms: "$(\\varphi,f)\\mapsto f$", functorial: true, teaches: ["groups"], depends: ["obj-group-action"], digested_from: PROBA,
  }, "Skup na kojem se djeluje."],
  ["mor-orbits", "morphism", {
    kind: "extract", from: "obj-group-action", to: "obj-set", statement: "(G,X,\\rho)\\mapsto X/G", acts_on: ["mor-action-set"], needs: [],
    on_homomorphisms: "Inducirano.", functorial: true, teaches: ["groups"], depends: ["obj-group-action"], digested_from: PROBA,
  }, "Orbite."],
  ["mor-stabilizer", "morphism", {
    kind: "property", from: "obj-group-action", to: "obj-group", statement: "(G,X,\\rho),\\ x\\mapsto G_x",
    acts_on: ["mor-action-group", "mor-action-set"], needs: ["odabrana točka $x \\in X$", "napomena: zarez, i dvotočka"],
    on_homomorphisms: "Ovisi o točki.", functorial: false, teaches: ["groups"], depends: ["obj-group-action"], digested_from: PROBA,
  }, "Stabilizator, vidi [[mor-orbits|orbite]] i [[mor-action-group]]."],
  ["mor-curry", "morphism", {
    kind: "transform", from: "obj-group-action", to: "obj-group", statement: "\\rho\\mapsto\\hat\\rho", acts_on: "all", needs: [],
    on_homomorphisms: "Konjugacija.", functorial: true, inverse: "mor-uncurry", teaches: ["groups"], depends: ["obj-group-action"], digested_from: PROBA,
  }, "Curry."],
  ["mor-uncurry", "morphism", {
    kind: "transform", from: "obj-group", to: "obj-group-action", statement: "\\hat\\rho\\mapsto\\rho", acts_on: "all", needs: [],
    on_homomorphisms: "Konjugacija.", functorial: true, inverse: "mor-curry", teaches: ["groups"], depends: ["obj-group"], digested_from: DRUGA,
  }, "Uncurry."],
  ["mor-cayley", "morphism", {
    kind: "transform", from: "obj-group", to: "obj-group-action", statement: "G\\mapsto(G,G,\\lambda)", acts_on: "all", needs: [],
    on_homomorphisms: "Prenosi se.", functorial: true, generalized_by: ["mor-coset-action"], teaches: ["groups"], depends: ["obj-group"], digested_from: PROBA,
  }, "Cayley."],
  ["mor-coset-action", "morphism", {
    kind: "transform", from: "obj-group", to: "obj-group-action", statement: "(H\\le G)\\mapsto(G,G/H,\\cdot)", acts_on: "all", needs: ["podgrupa $H$"],
    on_homomorphisms: "Prenosi se.", functorial: true, teaches: ["groups"], depends: ["obj-group"], digested_from: DRUGA,
  }, "Djelovanje na kosetima."],
  ["mor-ogrlice", "morphism", {
    kind: "instance", from: "pt", to: "obj-group-action", statement: "(\\mathbb{Z}_6, B^6, \\text{rotacija})", needs: [],
    values: { "mor-action-group": "$\\mathbb{Z}_6$", "mor-orbits": "ogrlice; ima ih $14$", "mor-stabilizer": "ovisi o ogrlici" },
    teaches: ["groups"], depends: ["obj-group-action"], digested_from: PROBA,
  }, "Ogrlice."],
  ["thm-burnside", "theorem", {
    about: ["mor-orbits", "mor-stabilizer"], fields: ["kombinatorika"], teaches: ["groups"],
    depends: ["obj-group-action", "mor-orbits"], digested_from: PROBA,
  }, "Broj orbita, vidi [[mor-orbits|orbite]] i [[mor-stabilizer]]."],
  ["prf-burnside", "proof", { proves: "thm-burnside", teaches: ["groups"], depends: ["thm-burnside"], digested_from: PROBA }, "Dokaz."],
  ["prf-orphan", "proof", { proves: "thm-other", teaches: ["groups"], depends: ["thm-other"], digested_from: PROBA }, "Dokaz tuđeg teorema."],
  ["thm-other", "theorem", { teaches: ["groups"], depends: [], digested_from: DRUGA }, "Drugi teorem."],
  ["def-coset", "definition", { teaches: ["groups"], depends: [], digested_from: TRECA }, "Koset."],
  ["thm-lagrange", "theorem", { teaches: ["groups"], depends: ["def-coset", "def-group"], digested_from: TRECA }, "Lagrange."],
];

const sourceFm = new Map();

function writeTree(id, taxon, extra, body) {
  const fm = { id, taxon, title: `Naslov ${id}`, ...extra, requires: [], language: "hr", standalone: true };
  sourceFm.set(id, fm);
  fs.writeFileSync(path.join(lib, "forest", "trees", `${id}.md`), `---\n${yaml.dump(fm)}---\n\n${body}\n`);
}

function writeBlog(slug, id) {
  const dir = path.join(lib, "blogs", slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "manifest.json"), JSON.stringify({
    schema_version: "1.0", type: "blog", id, title: `Blog ${slug}`, language: "hr", author: "Test",
    license: "CC-BY-4.0", provenance: "human", created: "2026-10-05", teaches: ["groups"], requires: [],
  }));
  fs.writeFileSync(path.join(dir, "blog.md"), `---\nschema_version: "1.0"\n---\n\n# Blog ${slug}\n\nTekst.\n`);
  fs.writeFileSync(path.join(dir, "annotation.md"), "An annotation.\n");
}

function unzip(buf) {
  const files = new Map();
  let off = 0;
  while (off + 30 <= buf.length && buf.readUInt32LE(off) === 0x04034b50) {
    const method = buf.readUInt16LE(off + 8);
    const size = buf.readUInt32LE(off + 18);
    const nameLen = buf.readUInt16LE(off + 26);
    const extraLen = buf.readUInt16LE(off + 28);
    const name = buf.toString("utf8", off + 30, off + 30 + nameLen);
    const start = off + 30 + nameLen + extraLen;
    const data = buf.subarray(start, start + size);
    files.set(name, method === 8 ? zlib.inflateRawSync(data) : Buffer.from(data));
    off = start + size;
  }
  return files;
}

function splitTree(text) {
  const m = /^---\n([\s\S]*?)\n---\n\n([\s\S]*)$/.exec(text);
  assert.ok(m, "exported tree has frontmatter, a blank line, then the body");
  return { fm: yaml.load(m[1]), body: m[2] };
}

const read = (rel) => fs.readFileSync(path.join(dist, rel), "utf8");
const vault = (slug) => unzip(fs.readFileSync(path.join(dist, "blogs", slug, `${slug}-vault.zip`)));
const vaultTree = (files, id) => splitTree(files.get(`trees/${id}.md`).toString("utf8"));

before(() => {
  lib = fs.mkdtempSync(path.join(os.tmpdir(), "matsek-library-"));
  dist = path.join(lib, "dist");
  fs.cpSync(path.join(root, "scripts"), path.join(lib, "scripts"), { recursive: true });
  fs.symlinkSync(path.join(root, "node_modules"), path.join(lib, "node_modules"), "dir");
  fs.writeFileSync(path.join(lib, "package.json"), JSON.stringify({ name: "fixture", version: "0.0.0", type: "module" }));
  fs.mkdirSync(path.join(lib, "concepts"));
  fs.writeFileSync(path.join(lib, "concepts", "concepts.yaml"), "- id: groups\n  title: Grupe\n  requires: []\n");
  fs.mkdirSync(path.join(lib, "forest", "trees"), { recursive: true });
  fs.mkdirSync(path.join(lib, "forest", "views"));
  fs.writeFileSync(path.join(lib, "forest", "forest.json"), JSON.stringify({
    schema_version: "forest-0.2", source: { title: "Fixture", authors: ["Test"], kind: "notes", license: "CC-BY-4.0" },
    language: "hr", created: "2026-10-05", tool: "test", tool_version: "0", derivative: false,
  }));
  fs.writeFileSync(path.join(lib, "forest", "views", "forest.html"), "<!doctype html><title>graf</title>\n");
  fs.writeFileSync(path.join(lib, "forest", "index.md"),
    "# Šuma\n\n## Grupe\n\n- [[def-group]]\n- [[thm-burnside]]\n\n## Struktura\n\n- [[obj-group]]\n- [[obj-group-action]]\n- [[obj-set]]\n");
  for (const [id, taxon, extra, body] of TREES) writeTree(id, taxon, extra, body);
  writeBlog("proba", PROBA);
  writeBlog("druga", DRUGA);
  writeBlog("treca", TRECA);
  execFileSync(process.execPath, [path.join(lib, "scripts", "build.mjs")], {
    cwd: lib, env: { ...process.env, SKIP_EMBED: "1" }, stdio: "pipe",
  });
});

after(() => {
  if (lib) fs.rmSync(lib, { recursive: true, force: true });
});

test("a vault export keeps an arrow only with both of its ends, and an instance with its object", () => {
  const files = vault("proba");
  const trees = [...files.keys()].filter((n) => n.startsWith("trees/")).map((n) => n.slice(6, -3)).sort();
  assert.deepEqual(trees, [
    "def-group", "mor-action-group", "mor-cayley", "mor-curry", "mor-ogrlice", "mor-stabilizer",
    "obj-group", "obj-group-action", "prf-burnside", "prf-orphan", "thm-burnside",
  ]);
  assert.equal(JSON.parse(files.get("forest.json")).schema_version, "forest-0.2");
  assert.equal(JSON.parse(files.get("forest.json")).x_source_bundle, PROBA);
});

test("closed keys drop what left the slice and keep everything else byte-for-meaning", () => {
  const files = vault("proba");
  const stab = vaultTree(files, "mor-stabilizer");
  assert.deepEqual(stab.fm.acts_on, ["mor-action-group"]);
  assert.deepEqual(stab.fm.needs, sourceFm.get("mor-stabilizer").needs, "a comma and a colon in needs survive the round trip");
  assert.equal(stab.fm.statement, "(G,X,\\rho),\\ x\\mapsto G_x");
  assert.deepEqual({ ...stab.fm, acts_on: sourceFm.get("mor-stabilizer").acts_on }, sourceFm.get("mor-stabilizer"));
  assert.equal(stab.body, "Stabilizator, vidi orbite i [[mor-action-group]].\n");

  assert.equal("inverse" in vaultTree(files, "mor-curry").fm, false, "an inverse whose partner stayed behind is gone");
  assert.deepEqual(vaultTree(files, "mor-cayley").fm.generalized_by, []);
  assert.deepEqual(Object.keys(vaultTree(files, "mor-ogrlice").fm.values), ["mor-action-group", "mor-stabilizer"]);
  assert.equal(vaultTree(files, "mor-ogrlice").fm.values["mor-stabilizer"], "ovisi o ogrlici");

  const thm = vaultTree(files, "thm-burnside");
  assert.deepEqual(thm.fm.about, ["mor-stabilizer"]);
  assert.deepEqual(thm.fm.depends, ["obj-group-action"]);
  assert.deepEqual(thm.fm.fields, ["kombinatorika"]);
  assert.equal(thm.body, "Broj orbita, vidi orbite i [[mor-stabilizer]].\n");

  assert.equal(vaultTree(files, "prf-burnside").fm.proves, "thm-burnside");
  const orphan = vaultTree(files, "prf-orphan").fm;
  assert.equal("proves" in orphan, false);
  assert.deepEqual(orphan.depends, []);

  assert.deepEqual(vaultTree(files, "def-group").fm, sourceFm.get("def-group"), "an untouched tree's frontmatter is unchanged");
  assert.deepEqual(vaultTree(files, "obj-group").fm, sourceFm.get("obj-group"), "nlab, symbol and hom round-trip");
});

test("the export's index.md lists objects under Struktura and never an arrow", () => {
  const md = vault("proba").get("index.md").toString("utf8");
  assert.match(md, /Forest vault 0\.2\./);
  const [reading, structure] = md.split("## Struktura");
  assert.match(reading, /\[\[def-group\]\]/);
  assert.doesNotMatch(reading, /\[\[obj-/);
  assert.match(structure, /\[\[obj-group\]\]/);
  assert.match(structure, /\[\[obj-group-action\]\]/);
  assert.doesNotMatch(md, /\[\[mor-/);
});

test("a slice without structure is still a forest-0.1 vault", () => {
  const files = vault("treca");
  assert.equal(JSON.parse(files.get("forest.json")).schema_version, "forest-0.1");
  const md = files.get("index.md").toString("utf8");
  assert.match(md, /Forest vault 0\.1\./);
  assert.doesNotMatch(md, /## Struktura/);
  assert.deepEqual(vaultTree(files, "thm-lagrange").fm.depends, ["def-coset"]);
  assert.deepEqual(vaultTree(files, "def-coset").fm, sourceFm.get("def-coset"));
});

test("tree pages carry Strelice and Primjeri, and the structure keys render", () => {
  const action = read("forest/obj-group-action/index.html");
  assert.match(action, /\$\$\(G, X, \\rho\)\$\$/);
  assert.match(action, /Preslikavanje:/);
  assert.match(action, /<h2 id="strelice">Strelice<\/h2>/);
  assert.match(action, /Strelice iz objekta[\s\S]*mor-stabilizer\/[\s\S]*Strelice u objekt[\s\S]*mor-cayley\//);
  assert.match(action, /<h2 id="primjeri-objekta">Primjeri<\/h2>[\s\S]*mor-ogrlice\/[\s\S]*ogrlice; ima ih \$14\$/);
  assert.doesNotMatch(action, /Prema nLab/);
  assert.match(read("forest/obj-group/index.html"), /Prema nLab: group, rev\. 3/);

  const stab = read("forest/mor-stabilizer/index.html");
  assert.match(stab, /<span class="tag taxon">Strelica<\/span>/);
  assert.match(stab, /\$\$\(G,X,\\rho\),\\ x\\mapsto G_x\$\$/);
  assert.match(stab, /Treba još:[\s\S]*odabrana točka \$x \\in X\$; napomena: zarez, i dvotočka/);
  assert.match(stab, /Nije funktorijalna/);
  assert.match(stab, /<dt>Iz → u<\/dt><dd><a href="\.\.\/obj-group-action\/">[^<]*<\/a> → <a href="\.\.\/obj-group\/">/);
  assert.match(stab, /<dt>O ovome govore<\/dt><dd><a href="\.\.\/thm-burnside\/">/);

  assert.match(read("forest/thm-burnside/index.html"), /<dt>Govori o<\/dt><dd><a href="\.\.\/mor-orbits\/">[^<]*<\/a>, <a href="\.\.\/mor-stabilizer\/">/);
  assert.match(read("forest/thm-burnside/index.html"), /<dt>Područja<\/dt><dd><span class="tag">kombinatorika<\/span>/);
  assert.match(read("forest/mor-cayley/index.html"), /<dt>Poopćenje<\/dt><dd><a href="\.\.\/mor-coset-action\/">/);
  assert.match(read("forest/mor-coset-action/index.html"), /<dt>Poseban slučaj<\/dt><dd><a href="\.\.\/mor-cayley\/">/);
  assert.match(read("forest/mor-curry/index.html"), /<dt>Inverz<\/dt><dd><a href="\.\.\/mor-uncurry\/">/);
  assert.match(read("forest/mor-ogrlice/index.html"), /<dt>Primjer za<\/dt><dd><a href="\.\.\/obj-group-action\/">/);
});

test("the landing page hangs unlisted arrows on their object and searches by ends and symbol", () => {
  const html = read("forest/index.html");
  assert.match(html, /"object":"Objekt","morphism":"Strelica"/);
  const structure = html.slice(html.indexOf('id="struktura"'), html.indexOf('id="ostalo"'));
  assert.match(structure, /obj-group-action\/[\s\S]*mor-ogrlice\/[\s\S]*mor-stabilizer\//);
  assert.doesNotMatch(html.slice(html.indexOf('id="ostalo"'), html.indexOf("<script")), /mor-/);
  assert.match(html, /"ends":"primjer za Naslov obj-group-action"/);
  assert.match(html, /"symbol":"\(G, X, \\\\rho\)"/);
  assert.match(html, /Strelica · mor-ogrlice · primjer za Naslov obj-group-action/);
});

test("llms-full.txt prints the structure keys unclosed, and graph.html is the verbatim view", () => {
  const llms = read("llms-full.txt");
  const section = (id) => llms.slice(llms.indexOf(`\nTREE ${id}\n`), llms.indexOf(`----- forest/trees/${id}.md -----`));
  assert.match(section("mor-stabilizer"), /\nkind: property\nfrom: obj-group-action\nto: obj-group\nstatement: /);
  assert.match(section("mor-stabilizer"), /\nacts_on: \[mor-action-group, mor-action-set\]\nneeds: \[odabrana točka \$x \\in X\$, "napomena: zarez, i dvotočka"\]\n/);
  assert.match(section("mor-stabilizer"), /\nfunctorial: false\n/);
  assert.match(section("thm-burnside"), /\nabout: \[mor-orbits, mor-stabilizer\]\nfields: \[kombinatorika\]\n/);
  assert.match(section("obj-group"), /\nnlab: \{title: group, revision: 3\}\n/);
  assert.match(section("mor-ogrlice"), /\nvalues: \{mor-action-group: /);
  assert.doesNotMatch(section("def-group"), /\n(kind|about|fields):/);
  assert.equal(read("forest/graph.html"), fs.readFileSync(path.join(lib, "forest", "views", "forest.html"), "utf8"));
});
