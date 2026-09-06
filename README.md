# MatSek library

The community library of the Mathematics Section (Matematička sekcija) at
FER: **problems, proofs and blogs**, written by members with the club's own
tools, published under **CC BY 4.0**, and served as static files — the
search index included — so every MatSek tool can use it with no server
behind it.

**Status: open for submissions.** CI validates every PR against the bundle
spec; merges to `main` rebuild the site and the search index and publish
them to <https://matsek-fer.github.io/library/>.

## Kako doprinijeti

1. **Kloniraj repo** i instaliraj alate:

   ```sh
   git clone https://github.com/matsek-fer/library && cd library
   npm install
   ```

2. **Napiši bundle.** Jedan artefakt = jedna mapa: `problems/<kebab-slug>/`,
   `proofs/<kebab-slug>/` ili `blogs/<kebab-slug>/`. Format (manifest,
   obavezne datoteke, `annotation.md` na engleskom) definiran je u
   [`matsek-fer/spec` → `bundles.md`](https://github.com/matsek-fer/spec/blob/main/bundles.md) —
   pročitaj ga prije prvog bundlea. Svaki `teaches`/`requires` id mora
   postojati u [`concepts/concepts.yaml`](concepts/concepts.yaml); ako
   koncept nedostaje, dodaj ga u istom PR-u.

3. **Validiraj lokalno** (isto što će CI izvršiti):

   ```sh
   # validator živi u spec repou:
   git clone https://github.com/matsek-fer/spec ../spec
   (cd ../spec/validator && npm ci)

   node ../spec/validator/bin/matsek-validate.js problems/moj-zadatak --concepts concepts/concepts.yaml
   npm run check-math                # sva matematika mora proći KaTeX
   SKIP_EMBED=1 npm run build        # proba izgradnje stranice
   ```

4. **Otvori pull request.** Predložak PR-a sadrži izjavu o podrijetlu —
   bez nje se ne merga. Maintainer pregledava i merga; merge automatski
   objavljuje novu verziju stranice i indeksa.

## Iskustva

Osim sadržaja za učenje, knjižnica prima i **iskustva** — izvještaje
članova o korištenju alata sekcije: što je radilo, gdje je bilo trenja,
što bi trebalo poboljšati. Iskustvo je mapa `experiences/<kebab-slug>/` s
jednom datotekom `experience.md` čiji YAML frontmatter nosi sve
metapodatke (nema `manifest.json` — format je u spec-u, odjeljak
*Experience reports*). CI ih validira kao i svaki drugi bundle.

Iskustva su povratna informacija, ne gradivo: ne pojavljuju se u popisu
na stranici, u indeksu pretraživanja ni u `llms-full.txt` — stranica
prikazuje samo koliko ih je zaprimljeno. Javno se smije pojaviti samo
iskustvo koje u frontmatteru ima `consent_public: true`; zadano je
`false` i tada izvještaj služi isključivo maintainerima za poboljšanje
alata.

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
- **`llms-full.txt`** — the entire corpus (concept registry + every
  manifest and markdown file) in one delimited text file, for agents that
  read the library whole;
- the **search index** — `index/index.json` + `index/vectors.i8.bin`,
  embeddings of statement + annotation per the ecosystem convention
  (`Xenova/multilingual-e5-small`, q8, 384 dims, `passage: ` prefix —
  spec `DECISIONS.md` D-003), int8-quantized with a per-item scale.

Pull-request CI runs the same build with `SKIP_EMBED=1`, so PRs never
depend on the embedding model downloading.
