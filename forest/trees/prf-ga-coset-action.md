---
id: "prf-ga-coset-action"
taxon: "proof"
title: "Rješenje: The left-multiplication action on cosets"
teaches: [action-on-cosets, group-actions]
requires: [cosets, index, orbits-stabilizers]
language: "en"
digested_from: "problem/ga-coset-action"
standalone: true
depends: [exr-ga-coset-action]
proves: "exr-ga-coset-action"
---

# Solution

## (a) Well-definedness

Suppose $xH = yH$. Then $y^{-1}x \in H$ (this is the standard criterion:
$x \in yH$ means $x = yh$, i.e. $y^{-1}x = h \in H$). Now

$$(gy)^{-1}(gx) = y^{-1}g^{-1}gx = y^{-1}x \in H,$$

so by the same criterion $(gx)H = (gy)H$. The value of $\lambda_g$ does
not depend on the chosen coset representative.

## (b) The action axioms

For the identity: $\lambda_e(xH) = (ex)H = xH$, so $e \cdot xH = xH$.

For compatibility, take $g_1, g_2 \in G$:

$$g_1 \cdot (g_2 \cdot xH) = g_1 \cdot (g_2x)H = (g_1g_2x)H
  = (g_1g_2) \cdot xH.$$

Both axioms hold, so we have an action. Each $\lambda_g$ is a bijection
because it has a two-sided inverse: by the computation above,
$\lambda_{g^{-1}} \circ \lambda_g = \lambda_{g^{-1}g} = \lambda_e =
\mathrm{id}$, and likewise $\lambda_g \circ \lambda_{g^{-1}} =
\mathrm{id}$. (This is the general fact that in any action every element
acts by a bijection, made explicit here.)

## (c) Transitivity

Given cosets $xH$ and $yH$, set $g = yx^{-1}$. Then

$$g \cdot xH = (yx^{-1}x)H = yH.$$

So a single orbit contains every coset: the action is transitive, and the
orbit of any point is all of $G/H$.

## (d) Stabilizers

By definition, $g$ stabilizes $xH$ iff $(gx)H = xH$. By the coset
criterion this holds iff $x^{-1}(gx) \in H$, i.e. iff
$g \in xHx^{-1}$. Hence

$$\mathrm{Stab}(xH) = xHx^{-1},$$

the conjugate of $H$ by $x$. In particular, taking $x = e$:

$$\mathrm{Stab}(H) = H.$$

The stabilizers of the various points are exactly the conjugates of $H$.

## (e) Every subgroup is a stabilizer

Let $H \le G$ have index $n$, so $G/H$ has $n$ elements. Parts (b)–(d)
exhibit a transitive action of $G$ on the $n$-element set $G/H$ in which
the stabilizer of the point $eH$ is exactly $H$. So every subgroup of
index $n$ arises as a point stabilizer of a transitive action on $n$
points — subgroups of index $n$ and "marked points of transitive
$n$-point actions" are two descriptions of the same data.
