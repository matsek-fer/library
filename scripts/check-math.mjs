#!/usr/bin/env node
// CI's "LaTeX compiles" gate: render every math segment in every bundle .md
// through KaTeX with throwOnError, so a typo'd \frac fails the PR instead of
// rendering as a red error box on the published site.
import fs from "node:fs";
import path from "node:path";
import katex from "katex";
import { extractMath, findBundleMarkdown, libraryRoot } from "./lib/bundles.mjs";

const root = libraryRoot();
const files = findBundleMarkdown(root);

let checked = 0;
let failures = 0;

for (const file of files) {
  const rel = path.relative(root, file);
  const segments = extractMath(fs.readFileSync(file, "utf8"));
  for (const seg of segments) {
    checked += 1;
    try {
      // strict: false — Croatian text inside \text{} trips KaTeX's unicode
      // strictness warnings-as-errors; those are fine to render.
      katex.renderToString(seg.tex, { throwOnError: true, displayMode: seg.display, strict: false });
    } catch (err) {
      failures += 1;
      const preview = seg.tex.length > 80 ? seg.tex.slice(0, 77) + "..." : seg.tex;
      console.error(`${rel}:${seg.line}  ${seg.display ? "$$" : "$"}${preview}${seg.display ? "$$" : "$"}`);
      console.error(`    ${err.message.replace(/\n/g, "\n    ")}`);
    }
  }
}

if (failures > 0) {
  console.error(`\ncheck-math: ${failures} of ${checked} math segment(s) failed across ${files.length} file(s).`);
  process.exit(1);
}
console.log(`check-math: ${checked} math segment(s) in ${files.length} file(s), all render.`);
