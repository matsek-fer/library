The top rung of the epsilon-delta ladder: part (a) has the solver prove
from scratch that continuity on the compact interval [0,1] upgrades to
uniform continuity (the Heine-Cantor phenomenon), and part (b) cashes the
theorem in for a payoff — every continuous function on [0,1] is a uniform
limit of step functions on an equispaced grid.

Techniques tested in (a): negating a doubly-quantified statement to
extract witness sequences at delta = 1/n; applying Bolzano-Weierstrass to
get a convergent subsequence; the "shared limit" estimate forcing the
companion sequence to the same point; closedness of the domain keeping the
limit where continuity is available; and the sequential characterization
of continuity to derive the contradiction. The solution's closing remark
makes the mechanism explicit: boundedness feeds Bolzano-Weierstrass and
closedness traps the limit — exactly the two halves of compactness in R,
which is why the same proof fails on (0,1).

Technique tested in (b): converting a uniform delta into a mesh size 1/n
< delta and bounding the error on every cell of the grid simultaneously.
The point the construction drives home is quantifier order: one delta must
serve all n cells at once, so pointwise continuity is structurally
insufficient — this is the standard first place a student sees uniform
continuity actually earn its keep (the same mechanism later powers Riemann
integrability of continuous functions).

Abstract principle: compactness converts local information (continuity at
each point) into global, uniform information (one delta for the whole
domain), and uniform information is what discretizations consume.

Common failure modes: taking a subsequence of (x_n) but forgetting to
argue (y_n) converges to the same limit; letting the limit point escape
the domain when adapting the argument; and in (b) choosing delta after
fixing x, which silently reintroduces pointwise continuity.
