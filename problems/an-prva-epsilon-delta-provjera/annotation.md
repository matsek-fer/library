This is a first exercise on the epsilon-delta definition of continuity,
placed immediately after the definition is stated. Part (a) asks for a
direct verification that an affine function f(x) = 5x - 3 is continuous at
a single point: the solver must produce delta as an explicit function of
epsilon (here delta = epsilon/5) and run the implication forward. The
technique is the standard one for linear expressions — factor the constant
out of |f(x) - f(x0)| so the dependence on |x - x0| becomes visible; no
auxiliary bounding is needed, which is exactly why the item sits at
difficulty 1.

Part (b) tests a subtler comprehension point: delta is not just "any small
number" but the radius of a neighbourhood, and for a fixed epsilon there is
a sharp threshold. Asking for the largest delta and a proof that nothing
bigger works forces the solver to negate the implication — exhibit a
witness x with |x - x0| < delta' but |f(x) - f(x0)| >= epsilon. This is the
first place a student practises the quantifier structure of the negation,
which is the abstract principle instantiated here: an epsilon-delta claim
fails by a witness, not by vague largeness.

Common failure modes: writing delta = epsilon/5 without the verification
direction (asserting instead of proving the implication), and in (b)
claiming maximality "because the computation is tight" without producing
the witness point.
