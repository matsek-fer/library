# MatSek library

The community library of the Mathematics Section (Matematička sekcija) at
FER: **problems, proofs and blogs**, written by members with the club's own
tools, published under **CC BY 4.0**, and served as static files — the
search index included — so every MatSek tool can use it with no server
behind it.

**Status: Phase 0 — structure reserved, accepting nothing yet.**
Submissions open in Phase 3, when CI validation and the index build land.

## How it will work

- One folder per artifact (problem / proof / blog), in the bundle format
  defined in [`matsek-fer/spec`](https://github.com/matsek-fer/spec).
- Submissions are pull requests. CI validates the bundle (schema, LaTeX,
  provenance block, render preview); the maintainer merges.
- Every merge rebuilds the static site and the search index
  (embedded with the ecosystem convention — see spec `DECISIONS.md` D-003)
  and publishes them to Pages/Releases.

## The one rule that is not negotiable

**Original authorship only.** No transcribed textbook or competition
problems, no math.StackExchange imports (license-incompatible), and
AI-assisted content must be marked and is reviewed before merge. The full
policy — and why it exists — is
[`spec/policies/provenance.md`](https://github.com/matsek-fer/spec/blob/main/policies/provenance.md).
By submitting, you accept the contributor agreement described there:
your contribution is licensed to everyone under CC BY 4.0.
