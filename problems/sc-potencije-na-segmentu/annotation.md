First exercise after the definitions of pointwise and uniform convergence: a
concrete power-built sequence f_n(x) = (x^n - 1)/(x^n + 1) on [0,1] whose
pointwise limit is -1 on [0,1) with an isolated jump to 0 at x = 1. The solver
computes the pointwise limit case by case, then measures the deviation
|f_n - g| = 2x^n/(x^n + 1) and bounds the supremum from below by evaluating at
the travelling point x_n = (1/2)^{1/n}, where the deviation is the constant
2/3 — so convergence on [0,1] is not uniform — and from above by 2q^n on any
[0,q] with q < 1, where it is. Techniques: pointwise limit via limit
arithmetic in a frozen variable, disproving uniformity by exhibiting an
n-dependent evaluation point, proving uniformity by an x-free majorant.
Instantiates the principle that pointwise convergence freezes x before
letting n grow while uniform convergence lets them race, and that uniformity
can hold on smaller segments even when it fails on the whole domain; the
discontinuous limit of continuous functions foreshadows the uniform-limit
continuity theorem. Common failures: evaluating the supremum at a fixed x
instead of an n-dependent one and wrongly concluding uniformity; forgetting
the separate x = 1 case in the pointwise limit; bounding 2x^n/(x^n+1) below
by 0 instead of above by 2x^n in part (c).
