A proof of the Cauchy-Schwarz inequality in a general real inner product
space, by the orthogonal projection method: subtract from u its
projection lambda v (with lambda = <u,v>/||v||^2 chosen to kill the cross
term), apply Pythagoras to the decomposition u = lambda v + w, and read
the inequality off the identity ||u||^2 ||v||^2 = <u,v>^2 + ||w||^2
||v||^2. Nonnegativity of ||w||^2 gives the inequality; positive
definiteness turns the equality case into w = 0, i.e. linear dependence.

Techniques: choosing a parameter to enforce orthogonality (the
projection coefficient as the minimizer of ||u - t v||^2), expanding a
norm of a sum by bilinearity, the Pythagorean identity, and the
degenerate-case split v = 0 before dividing by ||v||^2. The proof is
coordinate-free throughout, which is the point: it works verbatim in
function spaces and infinite dimensions, where the coordinate expansion
of the companion bundle proof/an-cauchy-schwarz-rn (Lagrange's identity,
sum of squared 2x2 minors) is unavailable. The two bundles are meant to
be read as a pair: same theorem, one proof exact-but-coordinate-bound,
one structural-and-general, with the deficit ||w||^2 ||v||^2 here
matching the summed squared minors there.

Abstract principle instantiated: to bound a pairing by norms, decompose
one argument orthogonally with respect to the other and discard the
nonnegative remainder — the prototype of every best-approximation and
least-squares argument, and the reason Cauchy-Schwarz is really a
statement about one-dimensional orthogonal projection. Secondary
principle: positive definiteness is consumed exactly twice, once for
the inequality (||w||^2 >= 0 needs only semidefiniteness) and once for
the equality case (w = 0 needs definiteness) — a useful diagnostic for
which half of an argument survives on a semi-inner product.

Common failure modes: dividing by ||v||^2 without excluding v = 0;
pulling lambda out of the inner product with the wrong sign or forgetting
the cross term doubles; and proving only "dependent implies equality"
while asserting the converse, which is where definiteness (not just
semidefiniteness) is actually needed.
