---
id: "thm-an-cauchy-schwarz-inner-product"
taxon: "theorem"
title: "Cauchy-Schwarz inequality in an inner product space via orthogonal projection"
teaches: [cauchy-schwarz]
requires: [inner-product-spaces]
language: "en"
digested_from: "proof/an-cauchy-schwarz-inner-product"
standalone: true
depends: []
x_annotation: "A proof of the Cauchy-Schwarz inequality in a general real inner product\nspace, by the orthogonal projection method: subtract from u its\nprojection lambda v (with lambda = <u,v>/||v||^2 chosen to kill the cross\nterm), apply Pythagoras to the decomposition u = lambda v + w, and read\nthe inequality off the identity ||u||^2 ||v||^2 = <u,v>^2 + ||w||^2\n||v||^2. Nonnegativity of ||w||^2 gives the inequality; positive\ndefiniteness turns the equality case into w = 0, i.e. linear dependence.\n\nTechniques: choosing a parameter to enforce orthogonality (the\nprojection coefficient as the minimizer of ||u - t v||^2), expanding a\nnorm of a sum by bilinearity, the Pythagorean identity, and the\ndegenerate-case split v = 0 before dividing by ||v||^2. The proof is\ncoordinate-free throughout, which is the point: it works verbatim in\nfunction spaces and infinite dimensions, where the coordinate expansion\nof the companion bundle proof/an-cauchy-schwarz-rn (Lagrange's identity,\nsum of squared 2x2 minors) is unavailable. The two bundles are meant to\nbe read as a pair: same theorem, one proof exact-but-coordinate-bound,\none structural-and-general, with the deficit ||w||^2 ||v||^2 here\nmatching the summed squared minors there.\n\nAbstract principle instantiated: to bound a pairing by norms, decompose\none argument orthogonally with respect to the other and discard the\nnonnegative remainder — the prototype of every best-approximation and\nleast-squares argument, and the reason Cauchy-Schwarz is really a\nstatement about one-dimensional orthogonal projection. Secondary\nprinciple: positive definiteness is consumed exactly twice, once for\nthe inequality (||w||^2 >= 0 needs only semidefiniteness) and once for\nthe equality case (w = 0 needs definiteness) — a useful diagnostic for\nwhich half of an argument survives on a semi-inner product.\n\nCommon failure modes: dividing by ||v||^2 without excluding v = 0;\npulling lambda out of the inner product with the wrong sign or forgetting\nthe cross term doubles; and proving only \"dependent implies equality\"\nwhile asserting the converse, which is where definiteness (not just\nsemidefiniteness) is actually needed."
---

# Cauchy–Schwarz inequality in an inner product space

Let $V$ be a real vector space with an inner product
$\langle \cdot, \cdot \rangle$ — a symmetric, bilinear, positive-definite
form — and let $\|u\| = \sqrt{\langle u, u \rangle}$ denote the induced
norm. Then for all $u, v \in V$:

$$|\langle u, v \rangle| \;\le\; \|u\|\,\|v\|,$$

with equality if and only if $u$ and $v$ are linearly dependent.
