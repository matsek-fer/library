A proof of the Cauchy-Schwarz inequality specialized to R^n, by the
algebraic-identity method: the difference of the two sides is computed in
closed form (Lagrange's identity) as the sum of the squares
(a_i b_j - a_j b_i)^2 over index pairs, so nonnegativity — and with it
the inequality — is immediate rather than inferred. The equality case
falls out structurally: equality iff all 2x2 minors of the pair of
vectors vanish, which a short pivot argument (divide by a nonzero
coordinate of b) converts into proportionality.

Techniques: double-sum expansion over ordered index pairs, cancellation
of the diagonal, regrouping ordered pairs into unordered ones to complete
a square; and the "vanishing minors iff rank one" argument in its most
concrete form.

Abstract principle instantiated: an inequality can be proved by
exhibiting the deficit between its two sides as a manifestly nonnegative
quantity — a sum of squares certificate. This is strictly stronger than
bounding: the identity quantifies the slack (as the squared areas of
coordinate parallelograms), which is information a soft proof discards.
Contrast with the coordinate-free projection proof of the same statement
in a general inner product space (companion bundle
proof/an-cauchy-schwarz-inner-product): that argument generalizes but
loses the exact formula; this one is exact but tied to coordinates. The
pair is meant to be read together for the comparison.

Common pitfalls the write-up addresses: sign errors in the double-sum
expansion (fixed by tracking ordered vs unordered pairs explicitly), and
forgetting that the b = 0 case must be split off before dividing by a
coordinate in the equality analysis.
