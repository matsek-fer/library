---
id: "prf-an-shrinking-map-fixed-point"
taxon: "proof"
title: "Rješenje: A shrinking map on a compact set has a fixed point"
teaches: [compactness]
requires: [epsilon-delta-continuity, sequence-limits, uniform-continuity]
language: "en"
digested_from: "problem/an-shrinking-map-fixed-point"
standalone: true
depends: [exr-an-shrinking-map-fixed-point]
proves: "exr-an-shrinking-map-fixed-point"
---

# Solution

## (a) Continuity

Fix $x_0 \in K$ and $\varepsilon > 0$. Take $\delta = \varepsilon$. For any
$x \in K$ with $0 < |x - x_0| < \delta$, the hypothesis gives
$$|f(x) - f(x_0)| < |x - x_0| < \varepsilon,$$
and for $x = x_0$ the difference is $0$. So $f$ is (indeed $1$-Lipschitz
away from the diagonal, hence uniformly) continuous on $K$. $\blacksquare$

## (b) Existence and uniqueness of the fixed point

**The key auxiliary function.** Define $g\colon K \to \mathbb{R}$ by
$$g(x) = |f(x) - x|.$$
As a composition of the continuous $f$, the identity, subtraction and the
absolute value, $g$ is continuous on $K$.

**Existence.** $K$ is compact and $g$ is continuous, so $g$ attains its
minimum: there is $x^* \in K$ with
$$g(x^*) = \min_{x \in K} g(x).$$
(For completeness, the attainment argument: let $m = \inf_{K} g \ge 0$ and
pick $x_n \in K$ with $g(x_n) \to m$. By sequential compactness of $K$
there is a subsequence $x_{n_k} \to x^* \in K$, and continuity of $g$
forces $g(x^*) = \lim_k g(x_{n_k}) = m$.)

We claim $g(x^*) = 0$, i.e. $f(x^*) = x^*$. Suppose not: $f(x^*) \neq x^*$.
Since $f$ maps $K$ into $K$, the point $f(x^*)$ lies in $K$, so $g$ may be
evaluated there. Applying the strict shrinking hypothesis to the distinct
points $f(x^*)$ and $x^*$:
$$g\big(f(x^*)\big) = \big|f\big(f(x^*)\big) - f(x^*)\big| < \big|f(x^*) - x^*\big| = g(x^*).$$

This exhibits a point of $K$ where $g$ takes a value strictly below its
minimum — a contradiction. Hence $g(x^*) = 0$ and $f(x^*) = x^*$.

**Uniqueness.** If $p \neq q$ were two fixed points, the hypothesis applied
to the pair $(p, q)$ would give
$$|p - q| = |f(p) - f(q)| < |p - q|,$$
which is absurd. So the fixed point is unique. $\blacksquare$

**Where compactness was used — and why nothing weaker suffices.** The
whole existence proof is the single sentence "a continuous function on a
compact set attains its infimum". Without attainment, $\inf g$ could be
$0$ without any point achieving it, and indeed that is exactly how the
counterexample in (c) behaves.

## (c) Compactness cannot be dropped

Take the closed but unbounded (hence non-compact) set
$$D = [1, \infty), \qquad f(x) = x + \frac{1}{x}.$$

**$f$ maps $D$ into $D$:** for $x \ge 1$, $f(x) = x + 1/x \ge x \ge 1$.

**$f$ is strictly shrinking on $D$:** for $x \neq y$ in $D$,
$$|f(x) - f(y)| = \left|(x - y)\left(1 - \frac{1}{xy}\right)\right| = |x - y|\left(1 - \frac{1}{xy}\right) < |x - y|.$$
Indeed $x, y \ge 1$ gives $xy \ge 1$, and $xy = 1$ would force
$x = y = 1$, excluded by $x \neq y$; hence $xy > 1$, so
$0 < 1 - \tfrac{1}{xy} < 1$, and the strict inequality holds.

**No fixed point:** $f(x) = x$ would require $\tfrac{1}{x} = 0$, which no
real $x$ satisfies.

Note also that no contraction constant exists here:
$\frac{|f(x)-f(y)|}{|x-y|} = 1 - \frac{1}{xy} \to 1$ as $x, y \to \infty$,
so the shrinking is genuinely non-uniform — the infimum
$\inf_D |f(x) - x| = \inf_{x \ge 1} \tfrac{1}{x} = 0$ is approached but
never attained, exactly the failure that compactness rules out in (b).
$\blacksquare$
