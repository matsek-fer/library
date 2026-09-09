---
id: "exr-qd-rationals-mod-one"
taxon: "exercise"
title: "The rationals modulo one"
teaches: [quotient-groups]
requires: [cosets, normal-subgroups, cyclic-groups, lagrange]
language: "en"
digested_from: "problem/qd-rationals-mod-one"
standalone: true
depends: []
x_annotation: "A capstone problem on computing inside an infinite quotient group by pure\ncoset arithmetic. In $\\mathbb{Q}/\\mathbb{Z}$ the solver must: compute the\nexact order of a coset (the reduced denominator, via Euclid's lemma),\nexhibit elements of every finite order, prove the torsion property, pin\ndown all finite subgroups ($H_n = \\langle 1/n + \\mathbb{Z}\\rangle$ is the\nunique subgroup of order $n$), and show every finitely generated subgroup\nis finite and cyclic while the whole group is neither.\n\nTechniques: order of an element in $G/N$ as the least $k$ with the $k$-fold\nsum landing in $N$; Euclid's lemma / gcd reduction; Lagrange's theorem\napplied inside a finite subgroup of an infinite ambient group; the counting\nargument \"subgroup contained in a subgroup of the same finite order is\nequal to it\"; lcm bounding for finitely generated subgroups. The solution\ndeliberately avoids the first isomorphism theorem — no homomorphism,\nkernel, or divisibility structure of $\\mathbb{Z}_n$ is imported; everything\nis done with cosets, orders and Lagrange. Fits queries that exclude\nfirst-iso-theorem machinery while still demanding real quotient-group\nfluency.\n\nAbstract principles instantiated: a quotient of a torsion-free group can be\npure torsion (the quotient forgets exactly the subgroup's worth of\ninformation); uniqueness of subgroups of a given order via \"containment\nplus equal cardinality\"; local properties (every finitely generated\nsubgroup cyclic) do not globalize. Common failures: taking the order of\n$a/b + \\mathbb{Z}$ to be $b$ without reducing the fraction; trying to prove\nnon-cyclicity by picking a specific candidate generator instead of arguing\nfrom finite order; invoking the classification of subgroups of\n$\\mathbb{Z}_n$ where Lagrange in $H$ suffices."
---

# The rationals modulo one

Consider the additive group $\mathbb{Q}$ of rational numbers and its
subgroup $\mathbb{Z}$. Since $\mathbb{Q}$ is abelian, $\mathbb{Z}$ is
normal, so the quotient group $\mathbb{Q}/\mathbb{Z}$ exists; its elements
are the cosets $q + \mathbb{Z}$.

**(a)** Let $q = a/b$ with $a \in \mathbb{Z}$, $b \geq 1$ and
$\gcd(a, b) = 1$. Prove that the order of $q + \mathbb{Z}$ in
$\mathbb{Q}/\mathbb{Z}$ is exactly $b$.

**(b)** Deduce that $\mathbb{Q}/\mathbb{Z}$ is an infinite group in which
every element has finite order, and conclude that
$\mathbb{Q}/\mathbb{Z}$ is not cyclic.

**(c)** For $n \geq 1$ put
$H_n = \langle \tfrac{1}{n} + \mathbb{Z} \rangle$. Prove that
$$H_n = \left\{ \tfrac{k}{n} + \mathbb{Z} : 0 \leq k < n \right\},
\qquad |H_n| = n,$$
and that $m \mid n$ implies $H_m \subseteq H_n$.

**(d)** Prove that every finite subgroup $H$ of $\mathbb{Q}/\mathbb{Z}$
with $|H| = n$ equals $H_n$. Conclude that for every $n \geq 1$ the group
$\mathbb{Q}/\mathbb{Z}$ has **exactly one** subgroup of order $n$, and that
this subgroup is cyclic.

**(e)** Prove that every finitely generated subgroup of
$\mathbb{Q}/\mathbb{Z}$ is finite, and conclude once more — by a different
argument than in (b) — that $\mathbb{Q}/\mathbb{Z}$ is not cyclic.
