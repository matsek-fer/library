Tests whether the solver reaches for the ratio (d'Alembert) test when the terms
of a series mix a power n^n against a factorial n! and a geometric factor. The
comparison test is insufficient here: direct comparison with a convergent
geometric series requires an a priori bound of the form n^n/n! <= C(4q)^n,
i.e. Stirling-level knowledge of the growth of n^n/n!, which a first course
does not yet have; comparison with a p-series is equally out of reach because
the terms decay geometrically, not polynomially. The ratio test packages the
geometric comparison invisibly: the quotient a_{n+1}/a_n collapses to
(1+1/n)^n / 4 -> e/4, needing only the definition of e, and the two parts
differ exactly in whether that limit falls below or above 1 (e/4 versus e/2) —
the threshold constant between convergence and divergence is e itself. In the
divergent part the cleanest finish is the term test: (1+1/n)^n >= 2 makes the
terms nondecreasing, so they cannot tend to 0. Instantiates the principle that
the ratio test IS comparison with a geometric series, performed through the
recursion of the terms instead of through an explicit benchmark, so it succeeds
precisely where no explicit benchmark is elementarily available. Common
failures: trying direct comparison and getting stuck bounding n^n/n!; in (b),
computing the ratio limit e/2 > 1 but being unable to say why that forces
divergence (terms bounded away from 0).
