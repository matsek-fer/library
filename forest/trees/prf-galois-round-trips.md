---
id: "prf-galois-round-trips"
taxon: "proof"
title: "Proof: round trips in a Galois connection"
teaches: []
requires: [partial-orders]
language: "en"
digested_from: "blog/pf-galois-connections-everywhere"
standalone: true
depends: [prp-galois-round-trips]
proves: "prp-galois-round-trips"
---

# Proof: round trips in a Galois connection

Let $f \colon P \to Q$ and $g \colon Q \to P$ satisfy
$f(p) \le q \iff p \le g(q)$ for all $p \in P$, $q \in Q$. The
statement proved is [[prp-galois-round-trips]].

## Part 1: the two inequalities

Both come from feeding the equivalence a reflexivity.

Fix $p \in P$ and take $q = f(p)$. The left side of the equivalence,
$f(p) \le f(p)$, holds by reflexivity, so the right side holds too:
$$p \le g(f(p)).$$

Fix $q \in Q$ and take $p = g(q)$. Now the right side,
$g(q) \le g(q)$, holds by reflexivity, so the left side holds:
$$f(g(q)) \le q.$$

No property of the posets beyond reflexivity was used.

## Part 2: the two identities

Both maps are monotone (this follows from the equivalence alone; see
[[rem-monotonicity-is-automatic]]).

Fix $p \in P$. Applying the monotone map $f$ to $p \le g(f(p))$ gives
$$f(p) \le f(g(f(p))).$$
On the other hand, Part 1 applied to the element $q = f(p)$ gives
$$f(g(f(p))) \le f(p).$$
Antisymmetry of the order on $Q$ turns the two inequalities into
$f(g(f(p))) = f(p)$.

The other identity is the mirror image. Fix $q \in Q$. Applying the
monotone map $g$ to $f(g(q)) \le q$ gives $g(f(g(q))) \le g(q)$, while
Part 1 applied to the element $p = g(q)$ gives $g(q) \le g(f(g(q)))$.
Antisymmetry in $P$ gives $g(f(g(q))) = g(q)$. $\blacksquare$
