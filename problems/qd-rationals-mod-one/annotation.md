A capstone problem on computing inside an infinite quotient group by pure
coset arithmetic. In $\mathbb{Q}/\mathbb{Z}$ the solver must: compute the
exact order of a coset (the reduced denominator, via Euclid's lemma),
exhibit elements of every finite order, prove the torsion property, pin
down all finite subgroups ($H_n = \langle 1/n + \mathbb{Z}\rangle$ is the
unique subgroup of order $n$), and show every finitely generated subgroup
is finite and cyclic while the whole group is neither.

Techniques: order of an element in $G/N$ as the least $k$ with the $k$-fold
sum landing in $N$; Euclid's lemma / gcd reduction; Lagrange's theorem
applied inside a finite subgroup of an infinite ambient group; the counting
argument "subgroup contained in a subgroup of the same finite order is
equal to it"; lcm bounding for finitely generated subgroups. The solution
deliberately avoids the first isomorphism theorem — no homomorphism,
kernel, or divisibility structure of $\mathbb{Z}_n$ is imported; everything
is done with cosets, orders and Lagrange. Fits queries that exclude
first-iso-theorem machinery while still demanding real quotient-group
fluency.

Abstract principles instantiated: a quotient of a torsion-free group can be
pure torsion (the quotient forgets exactly the subgroup's worth of
information); uniqueness of subgroups of a given order via "containment
plus equal cardinality"; local properties (every finitely generated
subgroup cyclic) do not globalize. Common failures: taking the order of
$a/b + \mathbb{Z}$ to be $b$ without reducing the fraction; trying to prove
non-cyclicity by picking a specific candidate generator instead of arguing
from finite order; invoking the classification of subgroups of
$\mathbb{Z}_n$ where Lagrange in $H$ suffices.
