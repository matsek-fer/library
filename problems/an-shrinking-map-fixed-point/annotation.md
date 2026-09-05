A hard compactness problem (difficulty 5): a strictly shrinking self-map
of a compact subset of R has a unique fixed point, even though no
contraction constant is assumed — the Banach fixed point argument is
unavailable, and the solver who reaches for iterating f and summing a
geometric series hits a wall, which is the designed misdirection.

The intended technique is the variational trick: introduce the auxiliary
displacement function g(x) = |f(x) - x|, use the extreme value theorem
(continuous function on a compact set attains its minimum — the solution
also unwinds this via sequential compactness) to get a minimizer x*, and
then feed the point f(x*) back into g to contradict minimality unless
g(x*) = 0. Uniqueness is a one-line strict-inequality argument. Part (c)
demands a certified counterexample on a closed unbounded domain — x + 1/x
on [1, infinity) shrinks strictly, has displacement infimum 0 that is
never attained, and fixes nothing — which shows the theorem consumes
attainment of the infimum, not mere positivity of g, and that closedness
alone is not enough.

Abstract principle instantiated: compactness converts an infimum into a
minimum, and many existence theorems are exactly this conversion applied
to a well-chosen auxiliary functional. Recognizing "define a scalar
function measuring the defect, minimize it, show the minimum is zero" is
a transferable move (it reappears in optimization proofs and in the
standard proof of the fundamental theorem of algebra).

Common failure modes: assuming a contraction constant q < 1 exists and
running the Banach iteration; minimizing g but forgetting that f(x*) lies
in K, which is where "f maps K to K" is consumed; and in (c) offering a
bounded open interval, which is a valid non-compact domain but usually
comes with a much weaker no-fixed-point argument than the closed-domain
example the problem asks for.
