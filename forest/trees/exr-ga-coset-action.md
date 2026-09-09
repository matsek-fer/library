---
id: "exr-ga-coset-action"
taxon: "exercise"
title: "The left-multiplication action on cosets"
teaches: [action-on-cosets, group-actions]
requires: [cosets, index, orbits-stabilizers]
language: "en"
digested_from: "problem/ga-coset-action"
standalone: true
depends: []
x_annotation: "The central construction of the coset-action ladder: turning the coset\nspace $G/H$ from a passive partition into a $G$-set via left\nmultiplication. Tests whether the solver can (1) run a well-definedness\nargument on coset representatives using the criterion $xH = yH \\iff\ny^{-1}x \\in H$, (2) verify the two action axioms and extract bijectivity\nfrom them, (3) prove transitivity by solving $g \\cdot xH = yH$\nexplicitly, and (4) compute that the stabilizer of $xH$ is the conjugate\n$xHx^{-1}$, so the stabilizer of the base point $eH$ is $H$ itself.\nTechniques: representative-independence checks, inverse-as-witness for\nbijectivity, conjugation appearing naturally as a change of base point.\nInstantiates the principle that subgroups of index $n$ are exactly point\nstabilizers of transitive actions on $n$ points — the dictionary between\ninternal data (a subgroup) and external data (an action). Common\nfailures: skipping well-definedness entirely, or claiming the stabilizer\nof every coset is $H$ rather than a conjugate of $H$. Prerequisite for\nthe homomorphism $G \\to \\mathrm{Sym}(G/H)$ and the normal-core argument\nhigher up the ladder."
---

# The left-multiplication action on cosets

Let $G$ be a group, $H \le G$ a subgroup, and let $G/H$ denote the set of
left cosets $\{xH : x \in G\}$. For $g \in G$ define a map

$$\lambda_g : G/H \to G/H, \qquad \lambda_g(xH) = (gx)H.$$

**(a)** Show that $\lambda_g$ is well defined: if $xH = yH$, then
$(gx)H = (gy)H$.

**(b)** Show that $g \cdot xH := \lambda_g(xH)$ defines an action of $G$
on the set $G/H$, and that each $\lambda_g$ is a bijection of $G/H$.

**(c)** Show that this action is transitive: for any two cosets
$xH, yH$ there is a $g \in G$ with $g \cdot xH = yH$.

**(d)** Determine the stabilizer of the coset $xH$, and in particular of
the coset $eH = H$.

**(e)** Conclude: every subgroup of index $n$ in $G$ is the stabilizer of
a point in some transitive action of $G$ on a set with $n$ elements.
