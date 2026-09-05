First exercise after the definition of a coset, set in the dihedral group
of the square (order 8) so every claim can be verified by direct
multiplication. Tests whether the solver can compute left cosets from a
presentation ($sr = r^3s$), recognize that cosets partition the group, and
read the index off as the number of cosets, confirming $|G| = |H|[G:H]$
numerically. Parts (c) and (d) plant the seed of normality without naming
it: a subgroup where some left and right coset differ ($H = \{e,s\}$)
versus a central subgroup ($K = \{e, r^2\}$) where they always agree.
Techniques: coset enumeration in a small non-abelian group, using a
commutation relation to normalize words, verifying centrality.
Instantiates the principle that cosets are equal-sized translates tiling
the group, and that left/right coset agreement is a special property of
the subgroup, not a general fact. Common failure: treating $gH$ and $Hg$
as interchangeable, or listing $sH$ as a fifth coset instead of
recognizing it equals $eH$. Bottom rung of the coset-action ladder.
