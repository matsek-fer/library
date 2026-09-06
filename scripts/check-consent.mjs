// The public repo must never hold an experience whose author did not
// consent: consent_public is the member's explicit act of submission
// (spec D-006), so CI refuses anything else — the validator alone accepts
// consent_public: false, because locally-kept experiences are the default.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { load } from "js-yaml";

let bad = 0;
if (existsSync("experiences")) {
  for (const dir of readdirSync("experiences", { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    const file = `experiences/${dir.name}/experience.md`;
    const text = readFileSync(file, "utf8");
    const fm = load(text.split(/^---$/m)[1] ?? "");
    if (fm?.consent_public !== true) {
      console.error(`error: ${file}: consent_public must be true to enter the public repo`);
      bad++;
    }
  }
}
process.exit(bad ? 1 : 0);
