A package of the standard first applications of Lagrange's theorem, run
on a group of order 35 chosen so both prime factors are odd and distinct.
Tests whether the solver can convert "order of a subgroup divides the
order of the group" into statements about element orders ($x^{|G|} = e$,
the possible orders 1/5/7/35), intersections (the order of $H \cap K$
divides both $|H|$ and $|K|$, so coprime orders force trivial
intersection), and structure (a group of prime order is cyclic, generated
by any non-identity element). Techniques: divisor enumeration, applying
Lagrange to the subgroup $\langle x \rangle$ and to $H \cap K$, the
generated-subgroup counting argument $\langle x \rangle = H$ by equal
cardinality. Instantiates the principle that Lagrange turns counting
constraints into algebraic ones — arithmetic of divisors dictates what
subgroups and element orders can exist before any multiplication is done.
Common failure: asserting that a subgroup of every divisor order exists
(the converse of Lagrange, false in general), or forgetting that
$H \cap K$ is itself a subgroup of both. Second rung of the coset-action
ladder, between coset computation and the coset action itself.
