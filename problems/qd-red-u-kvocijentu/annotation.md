Tests whether the solver can work inside a quotient group by bare coset
arithmetic: recognizing that the order of a coset $a + N$ is the least $k$
with $ka \in N$, and reducing that membership condition to a divisibility
statement ($9 \mid ka$ in $\mathbb{Z}_{36}/\langle 9 \rangle$). Cyclicity of
the quotient is established by exhibiting an element whose order equals the
group order and listing its distinct multiples.

Techniques: coset addition, order of an element in $G/N$ as the least $k$
with $g^k \in N$ (additively $ka \in N$), gcd/divisibility reduction,
element-order-equals-group-order criterion for cyclicity. The solution
deliberately avoids the first isomorphism theorem: no homomorphism, kernel,
or quotient map is invoked anywhere, so the problem is solvable straight
after the definition of a quotient group and suits queries that exclude
first-iso-theorem machinery.

Abstract principle instantiated: computations in a quotient reduce to
divisibility questions in the parent group — a coset's behaviour is fully
determined by when its multiples land in the subgroup. Common failure:
computing the order of $a$ in $G$ instead of the order of $a + N$ in $G/N$,
or assuming the order of $a + N$ equals the order of $a$ divided by $|N|$.
