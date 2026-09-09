---
id: "exr-an-shrinking-map-fixed-point"
taxon: "exercise"
title: "A shrinking map on a compact set has a fixed point"
teaches: [compactness]
requires: [epsilon-delta-continuity, sequence-limits, uniform-continuity]
language: "en"
digested_from: "problem/an-shrinking-map-fixed-point"
standalone: true
depends: []
x_annotation: "A hard compactness problem (difficulty 5): a strictly shrinking self-map\nof a compact subset of R has a unique fixed point, even though no\ncontraction constant is assumed — the Banach fixed point argument is\nunavailable, and the solver who reaches for iterating f and summing a\ngeometric series hits a wall, which is the designed misdirection.\n\nThe intended technique is the variational trick: introduce the auxiliary\ndisplacement function g(x) = |f(x) - x|, use the extreme value theorem\n(continuous function on a compact set attains its minimum — the solution\nalso unwinds this via sequential compactness) to get a minimizer x*, and\nthen feed the point f(x*) back into g to contradict minimality unless\ng(x*) = 0. Uniqueness is a one-line strict-inequality argument. Part (c)\ndemands a certified counterexample on a closed unbounded domain — x + 1/x\non [1, infinity) shrinks strictly, has displacement infimum 0 that is\nnever attained, and fixes nothing — which shows the theorem consumes\nattainment of the infimum, not mere positivity of g, and that closedness\nalone is not enough.\n\nAbstract principle instantiated: compactness converts an infimum into a\nminimum, and many existence theorems are exactly this conversion applied\nto a well-chosen auxiliary functional. Recognizing \"define a scalar\nfunction measuring the defect, minimize it, show the minimum is zero\" is\na transferable move (it reappears in optimization proofs and in the\nstandard proof of the fundamental theorem of algebra).\n\nCommon failure modes: assuming a contraction constant q < 1 exists and\nrunning the Banach iteration; minimizing g but forgetting that f(x*) lies\nin K, which is where \"f maps K to K\" is consumed; and in (c) offering a\nbounded open interval, which is a valid non-compact domain but usually\ncomes with a much weaker no-fixed-point argument than the closed-domain\nexample the problem asks for."
---

# A shrinking map on a compact set has a fixed point

Let $K \subseteq \mathbb{R}$ be a nonempty **compact** set, and let
$f\colon K \to K$ satisfy
$$|f(x) - f(y)| < |x - y| \qquad \text{for all } x, y \in K,\ x \neq y.$$

(Note: this is strictly weaker than being a contraction — no constant
$q < 1$ with $|f(x)-f(y)| \le q\,|x-y|$ is assumed.)

**(a)** Prove that $f$ is continuous on $K$.

**(b)** Prove that $f$ has **exactly one** fixed point, i.e. there is a
unique $x^* \in K$ with $f(x^*) = x^*$.

**(c)** Show that compactness cannot be dropped: exhibit a closed,
non-compact set $D \subseteq \mathbb{R}$ and a map $f\colon D \to D$
satisfying the same strict inequality but having **no** fixed point.
Prove both claims for your example.
