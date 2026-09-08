Connects cosets to group actions through the fixed-point counting
argument, staged in a group of order 55 with a subgroup of order 5
(index 11). Tests whether the solver can (a) read the size of a coset
space off Lagrange's theorem, (b) apply orbit–stabilizer to a subgroup
of prime order acting on the coset space, so every orbit has size 1 or
p, (c) run the counting step: orbits partition a set of 11 elements,
11 is not divisible by 5, so a fixed point must exist, and (d) translate
"the coset xH is fixed" back into algebra as containment in a conjugate,
a in xHx^{-1}. Techniques: left-multiplication action restricted to a
cyclic subgroup, orbit sizes divide the acting group's order,
partition-plus-divisibility counting, the fixed-coset-to-conjugate
dictionary. Instantiates the principle that a p-group acting on a set of
size coprime to p must fix a point — the counting engine inside the
proofs of the Sylow theorems, met here in its smallest honest instance.
Common failures: quoting orbit–stabilizer without noting that primality
of 5 forbids intermediate orbit sizes; concluding only that *some* orbit
has size 1 (the mod-5 congruence in the solution is one clean route, not the only one); and in (d) unwinding
the action in the wrong direction, obtaining x^{-1}ax in H but placing a
in x^{-1}Hx instead of xHx^{-1}.
