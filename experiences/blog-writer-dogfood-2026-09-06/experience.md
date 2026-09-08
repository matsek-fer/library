---
schema_version: "1.0"
type: experience
tool: blog-writer
tool_version: "0.1.0"
duration_minutes: 40
rating: 4
consent_public: true
---

Dogfood run of the blog-writer skill, end to end, producing
`blog/djelovanja-koja-broje` (group actions as counting arguments, hr,
six sections, three checkpoints, x_forest, tutor stub). The bundle
validated clean on the second run; the only re-run was for a Croatian
wording fix, not a structural error. What worked and where the friction
was:

**The phase order is right.** Reading the existing blogs before writing
(phase 2) genuinely set the voice — the "contract with the reader in the
first paragraph" pattern from pf-entropy-without-measure transferred
directly, and reading the ga-* annotations first meant the problem links
placed themselves: the coset refresher, the orbit-on-cosets workout and
the necklace problem each had one obvious section to live in.

**Friction 1 — the tutor stub's `created_at` invents a time.** The
manifest carries only a date (`2026-09-06`), but the convention requires
`YYYY-MM-DD HH:MM UTC`. Nothing says which HH:MM to use; the
forest-readiness example happens to show 12:00 and I cargo-culted it.
One sentence in the convention ("use 12:00 when deriving from a
date-only manifest") would remove the guess.

**Friction 2 — the `connection` taxon cannot name its far end.** The
forest-readiness table says a connection section "must name both ends
explicitly", and the prose does — but the metadata cannot: the Burnside
outlook section connects orbit counting to fixed-point averaging, and
Burnside's lemma has no registry concept id, so `section_concepts` lists
only the near end and the forest edge exists solely in prose. An
optional `connects:` field on x_forest entries (concept id or free text
per end) would make the edge machine-readable; worth considering for the
v2 promotion.

**Friction 3 — anchors are computed by hand with no confirmation.** The
skill says "compute them, don't eyeball them", but ships no tool, and
the validator passing is silent about anchors (a mismatch is only a
warning, and a clean run prints just "ok"). My heading "Teorem
orbita–stabilizator" contains an en-dash — exactly the character class
the transliteration rule exists for — and I had to trace the spec rule
manually to trust `#teorem-orbita-stabilizator`. Either a ten-line
anchor script in the skill, or the validator printing "6/6 checkpoint
and x_forest anchors matched headings", would turn silent correctness
into visible correctness.

**Friction 4 — phase 4 names the folder `blog/<slug>/`, the repo wants
`blogs/<slug>/`.** The skill does explain the singular/plural split, but
only inside phase 6 (SUBMIT), which an author who is not submitting yet
never reads. Moving the "repo folders are plural; the id stays singular"
sentence up to phase 4 would prevent a misplaced bundle.

**Friction 5 — llms-full.txt is fetched whole for its header.** Phase 1
says to fetch the full corpus file to read the concept registry at the
top. The fetch worked, but the file is the entire library; when a local
clone exists (the skill already knows the path — it uses it as the
fallback) reading `concepts/concepts.yaml` directly is strictly better.
Suggest inverting the preference: local clone first, fetch as fallback.

Small positives worth keeping: the "treat anchor warnings as errors"
instruction is the right paranoia; the checkpoint rule "answerable
purely from the section it follows" doubled as a section-scope linter —
drafting the stabilizer-size question was what confirmed the D4 numbers
belonged in the theorem section; and the build script appending the
tutor CTA automatically meant the body never had to mention the stub.
