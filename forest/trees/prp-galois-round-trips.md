---
id: "prp-galois-round-trips"
taxon: "proposition"
title: "Round trips in a Galois connection"
teaches: [galois-connections]
requires: [partial-orders]
language: "en"
digested_from: "blog/pf-galois-connections-everywhere"
standalone: true
depends: [def-galois-connection]
---

# Round trips in a Galois connection

Let $f \colon P \to Q$ and $g \colon Q \to P$ be a Galois connection
between posets: $f(p) \le q \iff p \le g(q)$ for all $p \in P$,
$q \in Q$ ([[def-galois-connection]]).

**Proposition.** For all $p \in P$ and $q \in Q$:

1. $p \le g(f(p))$ and $f(g(q)) \le q$ — a round trip pushes you *up* on
   the $P$ side and *down* on the $Q$ side;
2. $f(g(f(p))) = f(p)$ and $g(f(g(q))) = g(q)$ — a second round trip
   changes nothing.

Part 1 is the reason a Galois connection is not an isomorphism: the two
maps need not undo each other, and the failure is one-directional and
predictable. Part 2 says the failure stabilizes immediately — one round
trip is as far from the start as you ever get. It is exactly what makes
$g \circ f$ idempotent, hence a closure operator
([[thm-connection-induces-closure]]).

Proof: [[prf-galois-round-trips]].
