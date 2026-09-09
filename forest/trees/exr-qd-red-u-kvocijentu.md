---
id: "exr-qd-red-u-kvocijentu"
taxon: "exercise"
title: "Redovi elemenata u kvocijentu grupe Z36"
teaches: [quotient-groups]
requires: [cosets, normal-subgroups, cyclic-groups]
language: "hr"
digested_from: "problem/qd-red-u-kvocijentu"
standalone: true
depends: []
x_annotation: "Tests whether the solver can work inside a quotient group by bare coset\narithmetic: recognizing that the order of a coset $a + N$ is the least $k$\nwith $ka \\in N$, and reducing that membership condition to a divisibility\nstatement ($9 \\mid ka$ in $\\mathbb{Z}_{36}/\\langle 9 \\rangle$). Cyclicity of\nthe quotient is established by exhibiting an element whose order equals the\ngroup order and listing its distinct multiples.\n\nTechniques: coset addition, order of an element in $G/N$ as the least $k$\nwith $g^k \\in N$ (additively $ka \\in N$), gcd/divisibility reduction,\nelement-order-equals-group-order criterion for cyclicity. The solution\ndeliberately avoids the first isomorphism theorem: no homomorphism, kernel,\nor quotient map is invoked anywhere, so the problem is solvable straight\nafter the definition of a quotient group and suits queries that exclude\nfirst-iso-theorem machinery.\n\nAbstract principle instantiated: computations in a quotient reduce to\ndivisibility questions in the parent group — a coset's behaviour is fully\ndetermined by when its multiples land in the subgroup. Common failure:\ncomputing the order of $a$ in $G$ instead of the order of $a + N$ in $G/N$,\nor assuming the order of $a + N$ equals the order of $a$ divided by $|N|$."
---

# Redovi elemenata u kvocijentu grupe $\mathbb{Z}_{36}$

Neka je $G = \mathbb{Z}_{36}$ grupa ostataka modulo $36$ uz zbrajanje i neka je
$N = \langle 9 \rangle = \{0, 9, 18, 27\}$ njezina podgrupa.

**(a)** Objasnite zašto je $N$ normalna podgrupa od $G$ i odredite koliko
elemenata ima kvocijentna grupa $G/N$.

**(b)** Odredite red elementa $6 + N$ u $G/N$.

**(c)** Odredite red elementa $10 + N$ u $G/N$.

**(d)** Dokažite da je $G/N$ ciklička grupa i navedite jedan njezin generator.
