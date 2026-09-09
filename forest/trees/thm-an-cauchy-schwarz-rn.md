---
id: "thm-an-cauchy-schwarz-rn"
taxon: "theorem"
title: "Cauchy-Schwarz inequality in R^n via Lagrange's identity"
teaches: [cauchy-schwarz]
requires: [vector-spaces]
language: "en"
digested_from: "proof/an-cauchy-schwarz-rn"
standalone: true
depends: []
x_annotation: "A proof of the Cauchy-Schwarz inequality specialized to R^n, by the\nalgebraic-identity method: the difference of the two sides is computed in\nclosed form (Lagrange's identity) as the sum of the squares\n(a_i b_j - a_j b_i)^2 over index pairs, so nonnegativity — and with it\nthe inequality — is immediate rather than inferred. The equality case\nfalls out structurally: equality iff all 2x2 minors of the pair of\nvectors vanish, which a short pivot argument (divide by a nonzero\ncoordinate of b) converts into proportionality.\n\nTechniques: double-sum expansion over ordered index pairs, cancellation\nof the diagonal, regrouping ordered pairs into unordered ones to complete\na square; and the \"vanishing minors iff rank one\" argument in its most\nconcrete form.\n\nAbstract principle instantiated: an inequality can be proved by\nexhibiting the deficit between its two sides as a manifestly nonnegative\nquantity — a sum of squares certificate. This is strictly stronger than\nbounding: the identity quantifies the slack (as the squared areas of\ncoordinate parallelograms), which is information a soft proof discards.\nContrast with the coordinate-free projection proof of the same statement\nin a general inner product space (companion bundle\nproof/an-cauchy-schwarz-inner-product): that argument generalizes but\nloses the exact formula; this one is exact but tied to coordinates. The\npair is meant to be read together for the comparison.\n\nCommon pitfalls the write-up addresses: sign errors in the double-sum\nexpansion (fixed by tracking ordered vs unordered pairs explicitly), and\nforgetting that the b = 0 case must be split off before dividing by a\ncoordinate in the equality analysis."
---

# Cauchy–Schwarz inequality in $\mathbb{R}^n$

For all real numbers $a_1, \dots, a_n$ and $b_1, \dots, b_n$:

$$\left(\sum_{i=1}^{n} a_i b_i\right)^{2} \;\le\; \left(\sum_{i=1}^{n} a_i^2\right)\left(\sum_{i=1}^{n} b_i^2\right),$$

with equality if and only if the vectors $a = (a_1, \dots, a_n)$ and
$b = (b_1, \dots, b_n)$ are linearly dependent (one is a scalar multiple
of the other).
