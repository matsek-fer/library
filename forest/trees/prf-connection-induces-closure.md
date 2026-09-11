---
id: "prf-connection-induces-closure"
taxon: "proof"
title: "Proof: every Galois connection induces a closure operator"
teaches: []
requires: [partial-orders]
language: "en"
digested_from: "blog/pf-galois-connections-everywhere"
standalone: true
depends: [thm-connection-induces-closure, prp-galois-round-trips]
proves: "thm-connection-induces-closure"
---

# Proof: every Galois connection induces a closure operator

Let $f \colon P \to Q$, $g \colon Q \to P$ satisfy
$f(p) \le q \iff p \le g(q)$, and put $c = g \circ f$. The statement
proved is [[thm-connection-induces-closure]]. Two facts about round
trips are used throughout ([[prp-galois-round-trips]]):
$$p \le g(f(p)) \quad\text{and}\quad f(g(q)) \le q,
  \qquad\qquad g \circ f \circ g = g .$$

## Extensive

$p \le g(f(p)) = c(p)$ — this is the first round-trip inequality,
verbatim.

## Monotone

Both $f$ and $g$ are monotone (a consequence of the defining
equivalence, [[rem-monotonicity-is-automatic]]), and a composite of
monotone maps is monotone: $p \le p'$ gives $f(p) \le f(p')$, hence
$g(f(p)) \le g(f(p'))$.

## Idempotent

Using $g \circ f \circ g = g$ at the element $q = f(p)$:
$$c(c(p)) = g\big(f(g(f(p)))\big)
  = \big(g \circ f \circ g\big)\big(f(p)\big)
  = g\big(f(p)\big) = c(p).$$

So $c$ is a closure operator.

## The closed elements are the image of g

*Every fixed point is in the image.* If $c(p) = p$, then
$p = g(f(p)) \in g(Q)$.

*Every element of the image is a fixed point.* Let $p = g(q)$ for some
$q \in Q$. Then, using $g \circ f \circ g = g$ again,
$$c(p) = g\big(f(g(q))\big) = \big(g \circ f \circ g\big)(q) = g(q) = p.$$

Hence $\{\, p \in P : c(p) = p \,\} = g(Q)$. $\blacksquare$

Note which hypothesis did the work: idempotence and the fixed-point
description both come from the single identity $gfg = g$, which in turn
came from the two round-trip inequalities and antisymmetry. Nothing
about $P$ or $Q$ beyond their being posets entered anywhere.
