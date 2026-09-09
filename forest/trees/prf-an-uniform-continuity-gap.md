---
id: "prf-an-uniform-continuity-gap"
taxon: "proof"
title: "Rješenje: One function, two domains: the uniform continuity gap"
teaches: [uniform-continuity]
requires: [epsilon-delta-continuity, sequence-limits]
language: "en"
digested_from: "problem/an-uniform-continuity-gap"
standalone: true
depends: [exr-an-uniform-continuity-gap]
proves: "exr-an-uniform-continuity-gap"
---

# Solution

Throughout we use the identity, valid for $x, y > 0$:
$$f(x) - f(y) = (x - y) + \left(\frac{1}{x} - \frac{1}{y}\right)
             = (x - y) - \frac{x - y}{xy}
             = (x - y)\left(1 - \frac{1}{xy}\right).$$

## (a) Uniform continuity on $[1, \infty)$

For $x, y \ge 1$ we have $xy \ge 1$, hence $0 < \dfrac{1}{xy} \le 1$ and
therefore
$$0 \le 1 - \frac{1}{xy} < 1.$$

Combining with the identity above,
$$|f(x) - f(y)| = |x - y| \cdot \left|1 - \frac{1}{xy}\right| \le |x - y|.$$

So $f$ is $1$-Lipschitz on $[1,\infty)$, and Lipschitz implies uniformly
continuous: given $\varepsilon > 0$, take $\delta = \varepsilon$. For any
$x, y \ge 1$ with $|x - y| < \delta$,
$$|f(x) - f(y)| \le |x - y| < \varepsilon.$$

The same $\delta$ works at every pair of points, which is exactly the
uniform statement. $\blacksquare$

## (b) Failure on $(0, 1)$

We prove the negation: there exists $\varepsilon_0 > 0$ such that for every
$\delta > 0$ there are points $x, y \in (0,1)$ with $|x - y| < \delta$ but
$|f(x) - f(y)| \ge \varepsilon_0$. Take $\varepsilon_0 = \tfrac{1}{2}$.

Consider the two sequences in $(0,1)$
$$x_n = \frac{1}{n+1}, \qquad y_n = \frac{1}{n+2} \qquad (n \ge 1).$$

Their distance tends to zero:
$$|x_n - y_n| = \frac{1}{n+1} - \frac{1}{n+2} = \frac{1}{(n+1)(n+2)} \xrightarrow{n \to \infty} 0,$$

but the function values stay far apart:
$$f(x_n) - f(y_n) = \left(\frac{1}{n+1} + (n+1)\right) - \left(\frac{1}{n+2} + (n+2)\right)
                  = \underbrace{\frac{1}{(n+1)(n+2)}}_{\to\, 0} - 1
                  \xrightarrow{n \to \infty} -1.$$

Hence $|f(x_n) - f(y_n)| \to 1$, so there is $N$ with
$|f(x_n) - f(y_n)| \ge \tfrac{1}{2}$ for all $n \ge N$.

Now let $\delta > 0$ be arbitrary. Choose $n \ge N$ large enough that
$|x_n - y_n| < \delta$ (possible since $|x_n - y_n| \to 0$). Then
$|x_n - y_n| < \delta$ yet $|f(x_n) - f(y_n)| \ge \tfrac{1}{2} = \varepsilon_0$.

No single $\delta$ can serve every pair of points, so $f$ is not uniformly
continuous on $(0,1)$. (Pointwise continuity on $(0,1)$ is clear: on a
neighbourhood of any $a \in (0,1)$ the factor $|1 - \tfrac{1}{xy}|$ is
bounded, so a pointwise $\delta$ depending on $a$ exists.) $\blacksquare$

## (c) The feature responsible

The domain, not the formula, decides: on $[1,\infty)$ the term $1/x$ has
bounded slope, while $(0,1)$ lets points approach the missing endpoint
$0$, where the slope of $1/x$ blows up. Uniform continuity fails precisely
because the domain contains pairs of arbitrarily close points on which the
function still changes by a fixed amount — a phenomenon possible only near
the "hole" at $0$ that the domain does not contain.
