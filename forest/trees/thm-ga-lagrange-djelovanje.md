---
id: "thm-ga-lagrange-djelovanje"
taxon: "theorem"
title: "Lagrange's theorem via a free group action"
teaches: [lagrange, orbits-stabilizers]
requires: [group-actions, cosets]
language: "en"
digested_from: "proof/ga-lagrange-djelovanje"
standalone: true
depends: []
x_annotation: "A second, genuinely different proof of Lagrange's theorem: the subgroup\n$H$ acts on the underlying set of $G$ by $h \\cdot g = gh^{-1}$, and the\ntheorem falls out of two general facts about actions — orbits partition\nthe set, and a free action has all orbits of size $|H|$. The coset\nbookkeeping of the classical proof (equivalence relation, translation\nbijection) is revealed as an instance of general orbit machinery: the\norbits are exactly the left cosets, but the count never uses that\nidentification. Tests/teaches: checking action axioms when the formula\nneeds an inverse to make right multiplication a left action, the orbit\nrelation as an equivalence relation, freeness (trivial stabilizers) via\ncancellation, and the bijection $h \\mapsto h \\cdot g$ from freeness —\noptionally phrased through orbit–stabilizer. Instantiates the principle\nthat a free action of $H$ on a finite set forces $|H|$ to divide the\nset's size, of which Lagrange is the self-action special case; the same\ntemplate later proves Cauchy's theorem and the necklace proof of\nFermat's little theorem. Deliberately paired with the coset-partition\nproof (proof/ga-lagrange-particija) to answer requests for two distinct\nproofs of Lagrange: same theorem, different conceptual engine.\nDifficulty 2 — needs the definition of an action but nothing beyond it."
---

# Lagrange's theorem

**Theorem (Lagrange).** Let $G$ be a finite group and $H \le G$ a
subgroup. Then $|H|$ divides $|G|$; more precisely,

$$|G| = [G : H] \cdot |H|,$$

where $[G : H]$ is the number of left cosets of $H$ in $G$.
