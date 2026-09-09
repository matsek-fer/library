---
id: "exr-an-uniform-continuity-gap"
taxon: "exercise"
title: "One function, two domains: the uniform continuity gap"
teaches: [uniform-continuity]
requires: [epsilon-delta-continuity, sequence-limits]
language: "en"
digested_from: "problem/an-uniform-continuity-gap"
standalone: true
depends: []
x_annotation: "This problem isolates the gap between pointwise and uniform continuity by\nusing a single formula, f(x) = x + 1/x, on two domains. The engine of both\nparts is the same algebraic identity f(x) - f(y) = (x - y)(1 - 1/(xy)),\nwhich the solver must derive; after that, part (a) reads off a Lipschitz\nbound (|1 - 1/(xy)| < 1 when x, y >= 1) and part (b) reads off the failure\n(the factor tends to -1 along points sliding toward 0).\n\nTechniques it tests: proving uniform continuity via a Lipschitz estimate\n(the \"one delta for all points\" quantifier order), and refuting it via the\nsequential criterion — exhibiting two sequences with |x_n - y_n| -> 0 while\n|f(x_n) - f(y_n)| stays bounded away from zero. Part (b) is where the real\nlearning happens: the negation of uniform continuity has the form \"there\nis an epsilon_0 such that for every delta there is a bad pair\", and the\nsequence pair is the clean way to certify it.\n\nAbstract principle instantiated: uniform continuity is a property of the\nfunction together with its domain, and it fails exactly where the domain\nadmits arbitrarily close pairs straddling a region of unbounded slope —\nhere, near a boundary point missing from an open domain. This is the\nstandard stepping stone toward the theorem that continuity on a compact\nset upgrades to uniform continuity for free.\n\nCommon failure modes: quoting a pointwise delta that secretly depends on\nthe point and calling it uniform; in (b), showing only that the naive\ndelta = epsilon choice fails rather than negating over all delta; and\nchoosing sequences whose function-value gap also tends to 0."
---

# One function, two domains: the uniform continuity gap

Let $f(x) = x + \dfrac{1}{x}$.

**(a)** Prove that $f$ is uniformly continuous on $[1, \infty)$.

**(b)** Prove that $f$ is **not** uniformly continuous on $(0, 1)$, even
though it is continuous at every point of $(0,1)$.

**(c)** In one or two sentences: which feature of the domain, not of the
formula, is responsible for the difference?
