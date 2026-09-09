---
id: "exr-ga-orbits-on-cosets"
taxon: "exercise"
title: "Orbits of one subgroup on the cosets of another"
teaches: [orbit-stabilizer-theorem, action-on-cosets]
requires: [orbits-stabilizers, lagrange, index]
language: "en"
digested_from: "problem/ga-orbits-on-cosets"
standalone: true
depends: []
x_annotation: "Orbit–stabilizer applied to the coset action, with the acting group cut\ndown to a subgroup: $H$ acts on $G/K$ by left multiplication, orbits are\nthe double cosets $HgK$, and their sizes come out as indices\n$[H : H \\cap gKg^{-1}]$. Tests whether the solver can compute a\nstabilizer under a restricted action (intersect the full stabilizer with\nthe acting subgroup), convert orbit sizes to indices via\norbit–stabilizer, and then convert a count of cosets into a count of\nelements by multiplying by $|K|$. The payoff is the product formula\n$|HK| = |H||K|/|H \\cap K|$ — derived here as a statement about orbits,\nnot by the usual fiber-counting argument — and the factorization\ncriterion: coprime orders multiplying to $|G|$ force $G = HK$ with unique\nexpression. Techniques: restriction of actions, orbit–stabilizer,\nLagrange inside a subgroup, gcd forcing trivial intersection,\ninjectivity of $(h,k) \\mapsto hk$ from $H \\cap K = \\{e\\}$. Instantiates\nthe principle that counting a subset of a group is often best done by\nfinding an action whose orbits tile it. Common failure: computing the\norbit size as an index in $G$ instead of in the acting subgroup $H$, or\ntreating $HK$ as a subgroup (it need not be one). Fourth rung of the\ncoset-action ladder, after the construction of the action itself."
---

# Orbits of one subgroup on the cosets of another

Let $G$ be a finite group and $H, K \le G$ subgroups. Restrict the
left-multiplication action of $G$ on $G/K$ to the subgroup $H$: so $H$
acts on the set of cosets $G/K$ by $h \cdot gK = (hg)K$.

**(a)** Show that the stabilizer in $H$ of the point $gK$ is
$H \cap gKg^{-1}$.

**(b)** Using the orbit–stabilizer theorem, show that the orbit of $gK$
under $H$ has exactly $[\,H : H \cap gKg^{-1}\,]$ elements.

**(c)** Show that the union of the cosets in the orbit of $gK$ is the set
$HgK = \{hgk : h \in H,\ k \in K\}$, and deduce the counting formula

$$|HgK| = \frac{|H| \cdot |K|}{|H \cap gKg^{-1}|}.$$

**(d)** Specialize $g = e$ to obtain the product formula
$|HK| = |H||K| / |H \cap K|$, and use it to prove: if
$|H| \cdot |K| = |G|$ and $\gcd(|H|, |K|) = 1$, then $G = HK$, and every
element of $G$ is uniquely a product $hk$ with $h \in H$, $k \in K$.
