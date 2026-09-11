# MatSek library

The community library of the Mathematics Section (Matematička sekcija) at
FER: **problems, proofs and blogs**, written by members with the club's own
tools, published under **CC BY 4.0**, and served as static files — the
search index included — so every MatSek tool can use it with no server
behind it.

**Status: open for submissions.** CI validates every PR against the bundle
spec; merges to `main` rebuild the site and the search index and publish
them to <https://matsek-fer.github.io/library/>.

## How to contribute

1. **Clone the repo** and install the tooling:

   ```sh
   git clone https://github.com/matsek-fer/library && cd library
   npm install
   ```

2. **Write a bundle.** One artifact = one folder: `problems/<kebab-slug>/`,
   `proofs/<kebab-slug>/` or `blogs/<kebab-slug>/`. The format (manifest,
   required files, `annotation.md` in English) is defined in
   [`matsek-fer/spec` → `bundles.md`](https://github.com/matsek-fer/spec/blob/main/bundles.md) —
   read it before your first bundle. Every `teaches`/`requires` id must
   exist in [`concepts/concepts.yaml`](concepts/concepts.yaml); if a
   concept is missing, add it in the same PR.

3. **Validate locally** (the same thing CI will run):

   ```sh
   # the validator lives in the spec repo:
   git clone https://github.com/matsek-fer/spec ../spec
   (cd ../spec/validator && npm ci)

   node ../spec/validator/bin/matsek-validate.js problems/my-problem --concepts concepts/concepts.yaml
   npm run check-math                # every formula must pass KaTeX
   SKIP_EMBED=1 npm run build        # trial build of the site
   ```

4. **Open a pull request.** The PR template contains a provenance
   statement — nothing is merged without it. A maintainer reviews and
   merges; the merge automatically publishes a new version of the site and
   the index.

## Experiences

Besides learning material, the library accepts **experiences** — members'
reports on using the section's tools: what worked, where there was
friction, what should improve. An experience is a folder
`experiences/<kebab-slug>/` with a single `experience.md` whose YAML
frontmatter carries all the metadata (no `manifest.json` — the format is
in the spec, section *Experience reports*). CI validates them like any
other bundle.

Experiences are feedback, not material: they do not appear in the site's
listing, the search index or `llms-full.txt` — the site shows only how
many were received. Only an experience whose frontmatter has
`consent_public: true` may appear publicly; the default is `false`, and
then the report serves maintainers alone, for improving the tools.

## The one rule that is not negotiable

**Original authorship only.** No transcribed textbook or competition
problems, no math.StackExchange imports (license-incompatible), and
AI-assisted content must be marked `provenance: ai-assisted` and is
reviewed before merge. The full policy — and why it exists — is
[`spec/policies/provenance.md`](https://github.com/matsek-fer/spec/blob/main/policies/provenance.md).
By submitting, you accept the contributor agreement described there:
your contribution is licensed to everyone under CC BY 4.0.

## What a merge produces

Every push to `main` runs `scripts/build.mjs`, which writes `dist/`:

- the **static site** — an index page plus one page per bundle, math
  rendered client-side with KaTeX;
- the **forest** — `forest/index.html` (client-side search over every tree,
  then the whole map grouped by `forest/index.md`'s sections), one page per
  tree at `forest/<id>/`, and `forest/graph.html`, the interactive graph
  copied verbatim from `forest/views/forest.html`;
- **vaults to download** — `forest/matsek-forest.zip` (the whole forest) and
  `blogs/<slug>/<slug>-vault.zip` per blog (that blog's trees, a generated
  `forest.json`, a reading-order `index.md`, and the source bundle verbatim
  under `source-bundle/`); both open as Obsidian vaults;
- **`llms-full.txt`** — the entire corpus (concept registry + every
  manifest and markdown file + every forest tree) in one delimited text
  file, for agents that read the library whole;
- the **search index** — `index/index.json` + `index/vectors.i8.bin`,
  embeddings of statement + annotation per the ecosystem convention
  (`Xenova/multilingual-e5-small`, q8, 384 dims, `passage: ` prefix —
  spec `DECISIONS.md` D-003), int8-quantized with a per-item scale. Bundles
  and trees share the one index, told apart by `kind`.

A checkout without `forest/` builds every one of these except the forest
parts, which are skipped whole.

Pull-request CI runs the same build with `SKIP_EMBED=1`, so PRs never
depend on the embedding model downloading.
