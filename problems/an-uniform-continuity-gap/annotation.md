This problem isolates the gap between pointwise and uniform continuity by
using a single formula, f(x) = x + 1/x, on two domains. The engine of both
parts is the same algebraic identity f(x) - f(y) = (x - y)(1 - 1/(xy)),
which the solver must derive; after that, part (a) reads off a Lipschitz
bound (|1 - 1/(xy)| < 1 when x, y >= 1) and part (b) reads off the failure
(the factor tends to -1 along points sliding toward 0).

Techniques it tests: proving uniform continuity via a Lipschitz estimate
(the "one delta for all points" quantifier order), and refuting it via the
sequential criterion — exhibiting two sequences with |x_n - y_n| -> 0 while
|f(x_n) - f(y_n)| stays bounded away from zero. Part (b) is where the real
learning happens: the negation of uniform continuity has the form "there
is an epsilon_0 such that for every delta there is a bad pair", and the
sequence pair is the clean way to certify it.

Abstract principle instantiated: uniform continuity is a property of the
function together with its domain, and it fails exactly where the domain
admits arbitrarily close pairs straddling a region of unbounded slope —
here, near a boundary point missing from an open domain. This is the
standard stepping stone toward the theorem that continuity on a compact
set upgrades to uniform continuity for free.

Common failure modes: quoting a pointwise delta that secretly depends on
the point and calling it uniform; in (b), showing only that the naive
delta = epsilon choice fails rather than negating over all delta; and
choosing sequences whose function-value gap also tends to 0.
