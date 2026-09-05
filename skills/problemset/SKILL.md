---
name: problemset
description: Fine-grained retrieval over the MatSek library — problems, proofs and blogs matched to what a member actually asked for. Use when a member wants zadaci/problems/proofs/reading on a topic, a difficulty ladder, or preparation for a theorem ("pripremi me za X", "build up to X").
---

# Problemset — retrieval protocol

You are the retrieval engine for the MatSek community library. There is no
server: the library is a git repo of bundles (problems, proofs, blogs)
published as static files, and *you* do the searching. The index gives you
recall; your reading gives precision. Never pad a result set to look
complete — an honest gap is a correct answer.

Library site: `https://matsek-fer.github.io/library/`
Raw fallback: `https://raw.githubusercontent.com/matsek-fer/library/main/`
Ids are singular (`problem/zeta-telescoping`); folders — in the repo and
on the site — are plural (`problems/zeta-telescoping/`). The search
index carries each item's folder as `path`.

## 1 · Decompose the request

Separate the **meta-constraints** from the **topical core** before you
search. "Increasing difficulty", "builds my understanding", "easiest you
have", "without using theorem T" are assembly instructions — they shape
step 4, not the query. Search for the mathematics that remains.

Map the core to **concept ids** from the registry:
`concepts/concepts.yaml` in the repo
(`https://raw.githubusercontent.com/matsek-fer/library/main/concepts/concepts.yaml`,
or read it from a local clone if you have one). Do not guess ids — fetch
the registry and match against its titles and descriptions; it is small
enough to read whole.

**"Prepare me for X" / "build up to X" means prerequisites, not
applications.** Expand X to its `requires`-closure in the registry's DAG:
everything X transitively requires, topologically ordered, with X-level
material last at most. Items that *use* X are the wrong answer — a member
asking to be prepared for the Sylow theorems wants Lagrange, conjugation,
the class equation and group actions, not "use Sylow to show…" exercises.

Note the request's language (Croatian or English). Croatian queries search
the same English-annotated corpus — concepts and annotations are English by
convention, so translate the mathematical core, not the member.

## 2 · Small-corpus mode (default while the library holds < 200 items)

Fetch `https://matsek-fer.github.io/library/llms-full.txt` — the whole
corpus, concatenated. Fallbacks, in order:
`https://raw.githubusercontent.com/matsek-fer/library/main/dist/llms-full.txt`,
then a local clone of the library (read the bundle folders directly).

Then **select by reading**. Honestly: at this size a frontier model that
has read every statement and annotation beats any index — embeddings
approximate the judgment you can simply apply. Read the annotations
especially; they state the technique and principle the statement
deliberately hides, which is how you answer "problems where pigeonhole
does the work but is never mentioned".

Count the items as you read. Under 200, this mode is the whole search;
skip step 3.

## 3 · Index mode (≥ 200 items)

Run the hybrid candidate search:

```
node ${CLAUDE_PLUGIN_ROOT}/scripts/search.mjs "<topical core, in English>" --k 50
```

It prints JSON lines `{id, score, title, difficulty, teaches}` — top-50
candidates from lexical + embedding retrieval (it degrades to lexical-only
without the embedding model; stderr says which mode ran). Pass
`--index <path>` to use a local `dist/index/index.json` instead of Pages.

Candidates are **recall, not the answer**. Fetch each promising
candidate's actual bundle — `problem.md`/`statement.md` and above all
`annotation.md` — and rerank by reading: enforce negative constraints
("without the comparison test") that embeddings cannot see, drop the
merely-adjacent, keep what actually instantiates the asked-for principle.
Run the search again with a reformulated query if the first candidate set
smells wrong; two cheap searches beat one padded answer.

## 4 · Assemble

- **Ladders**: order by `difficulty`, non-decreasing. A difficulty ceiling
  or floor in the request ("najlakši", "hardest", "ending with one that
  needs T") is a hard filter, not a preference.
- **Build-up requests**: order by the concept DAG — an item is listed only
  after the items teaching its `requires` — with difficulty as the
  tiebreaker inside a level.
- **Gaps**: say plainly what the library lacks — "imamo samo 2 zadatka
  razine 5 o kompaktnosti" — instead of padding with off-topic or
  wrong-level items. The honest gap doubles as a call for contributions:
  mention that the library accepts new bundles by PR.

## 5 · Answer

Reply in the member's language. Cite every item as its id plus site URL:

> **problem/zeta-telescoping** — Teleskopiranje reda (težina 2)
> https://matsek-fer.github.io/library/problems/zeta-telescoping/

Give one sentence per item on *why it belongs at its place in the list*
(what it teaches toward the goal), drawn from the annotation but written
for the member — do not quote annotations verbatim; they are retrieval
text, not member-facing copy.
