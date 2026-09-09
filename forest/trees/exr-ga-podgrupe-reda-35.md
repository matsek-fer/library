---
id: "exr-ga-podgrupe-reda-35"
taxon: "exercise"
title: "Podgrupe i redovi elemenata u grupi reda 35"
teaches: [lagrange]
requires: [cosets, index, cyclic-groups]
language: "hr"
digested_from: "problem/ga-podgrupe-reda-35"
standalone: true
depends: []
x_annotation: "A package of the standard first applications of Lagrange's theorem, run\non a group of order 35 chosen so both prime factors are odd and distinct.\nTests whether the solver can convert \"order of a subgroup divides the\norder of the group\" into statements about element orders ($x^{|G|} = e$,\nthe possible orders 1/5/7/35), intersections (the order of $H \\cap K$\ndivides both $|H|$ and $|K|$, so coprime orders force trivial\nintersection), and structure (a group of prime order is cyclic, generated\nby any non-identity element). Techniques: divisor enumeration, applying\nLagrange to the subgroup $\\langle x \\rangle$ and to $H \\cap K$, the\ngenerated-subgroup counting argument $\\langle x \\rangle = H$ by equal\ncardinality. Instantiates the principle that Lagrange turns counting\nconstraints into algebraic ones — arithmetic of divisors dictates what\nsubgroups and element orders can exist before any multiplication is done.\nCommon failure: asserting that a subgroup of every divisor order exists\n(the converse of Lagrange, false in general), or forgetting that\n$H \\cap K$ is itself a subgroup of both. Second rung of the coset-action\nladder, between coset computation and the coset action itself."
---

# Podgrupe i redovi elemenata u grupi reda 35

Neka je $G$ grupa s točno $35$ elemenata.

**(a)** Koje su sve moguće vrijednosti $|H|$ za podgrupu $H \le G$?

**(b)** Dokažite da za svaki $x \in G$ vrijedi $x^{35} = e$.

**(c)** Dokažite da svaki element $x \neq e$ ima red $5$, $7$ ili $35$.

**(d)** Neka su $H$ i $K$ podgrupe od $G$ s $|H| = 5$ i $|K| = 7$.
Dokažite da je $H \cap K = \{e\}$.

**(e)** Dokažite da je svaka *prava* podgrupa od $G$ ciklička.
