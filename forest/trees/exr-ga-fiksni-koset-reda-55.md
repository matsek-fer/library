---
id: "exr-ga-fiksni-koset-reda-55"
taxon: "exercise"
title: "Fiksni koset djelovanja u grupi reda 55"
teaches: [action-on-cosets]
requires: [conjugation, cosets, group-actions, index, lagrange, orbits-stabilizers]
language: "hr"
digested_from: "problem/ga-fiksni-koset-reda-55"
standalone: true
depends: []
x_annotation: "Connects cosets to group actions through the fixed-point counting\nargument, staged in a group of order 55 with a subgroup of order 5\n(index 11). Tests whether the solver can (a) read the size of a coset\nspace off Lagrange's theorem, (b) apply orbit–stabilizer to a subgroup\nof prime order acting on the coset space, so every orbit has size 1 or\np, (c) run the counting step: orbits partition a set of 11 elements,\n11 is not divisible by 5, so a fixed point must exist, and (d) translate\n\"the coset xH is fixed\" back into algebra as containment in a conjugate,\na in xHx^{-1}. Techniques: left-multiplication action restricted to a\ncyclic subgroup, orbit sizes divide the acting group's order,\npartition-plus-divisibility counting, the fixed-coset-to-conjugate\ndictionary. Instantiates the principle that a p-group acting on a set of\nsize coprime to p must fix a point — the counting engine inside the\nproofs of the Sylow theorems, met here in its smallest honest instance.\nCommon failures: quoting orbit–stabilizer without noting that primality\nof 5 forbids intermediate orbit sizes; concluding only that *some* orbit\nhas size 1 (the mod-5 congruence in the solution is one clean route, not the only one); and in (d) unwinding\nthe action in the wrong direction, obtaining x^{-1}ax in H but placing a\nin x^{-1}Hx instead of xHx^{-1}."
---

# Fiksni koset djelovanja u grupi reda 55

Neka je $G$ grupa s točno $55$ elemenata i $H \le G$ podgrupa reda $5$.
Grupa $G$ djeluje na skupu lijevih koseta
$G/H = \{xH : x \in G\}$ lijevim množenjem: $g \cdot (xH) = (gx)H$.
Orbita koseta $xH$ pri djelovanju podgrupe $K \le G$ je skup
$\{k \cdot (xH) : k \in K\}$, a koset je *fiksan* za $K$ ako mu je
orbita jednočlana.

**(a)** Koliko elemenata ima skup $G/H$?

**(b)** Neka je $a \in G$ element reda $5$ i $K = \langle a \rangle$.
Pokažite da svaka orbita djelovanja $K$ na $G/H$ ima $1$ ili $5$
elemenata.

**(c)** Zaključite da postoji koset $xH$ fiksan za $K$, tj. takav da je
$a \cdot (xH) = xH$.

**(d)** Pokažite da iz (c) slijedi $a \in xHx^{-1}$, pa je svaki
element reda $5$ u $G$ sadržan u nekom konjugatu podgrupe $H$.
