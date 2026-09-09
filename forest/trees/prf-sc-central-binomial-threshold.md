---
id: "prf-sc-central-binomial-threshold"
taxon: "proof"
title: "Rješenje: The central binomial threshold"
teaches: [series-convergence, comparison-test]
requires: [ratio-root-tests]
language: "en"
digested_from: "problem/sc-central-binomial-threshold"
standalone: true
depends: [exr-sc-central-binomial-threshold]
proves: "exr-sc-central-binomial-threshold"
---

# Solution

Throughout, we use the product form of $b_n$. From
$\binom{2n}{n} = \frac{(2n)!}{(n!)^2}$ one checks directly

$$\frac{b_{n+1}}{b_n}
= \frac{1}{4}\cdot\frac{(2n+2)(2n+1)}{(n+1)^2}
= \frac{2n+1}{2n+2},
\qquad\text{hence}\qquad
b_n = \prod_{j=1}^{n} \frac{2j-1}{2j} = \frac{1}{2}\cdot\frac{3}{4}\cdots\frac{2n-1}{2n}.$$

All terms are positive, and $b_1 = \tfrac12$.

## (a) Ratio and root tests both return 1

**Ratio.** For the series $\sum b_n^{\,p}$,

$$\frac{b_{n+1}^{\,p}}{b_n^{\,p}} = \left(\frac{2n+1}{2n+2}\right)^{p} \longrightarrow 1,$$

and the convergence to $1$ is from below, so neither the "$\lim < 1$" nor the
"$\liminf > 1$" clause of the ratio test applies: no verdict, for any $p$.

**Root.** We squeeze $b_n^{1/n}$ elementarily. On one hand $b_n \le 1$. On the
other, comparing factor by factor,

$$b_n = \frac{1}{2}\prod_{j=2}^{n}\frac{2j-1}{2j} \ \ge\ \frac{1}{2}\prod_{j=2}^{n}\frac{2j-2}{2j} = \frac{1}{2}\prod_{j=2}^{n}\frac{j-1}{j} = \frac{1}{2n},$$

the middle product telescoping. Hence

$$\left(\frac{1}{2n}\right)^{1/n} \le\ b_n^{1/n} \ \le 1,$$

and since $(2n)^{1/n} \to 1$, the squeeze gives $b_n^{1/n} \to 1$, so
$\left(b_n^{\,p}\right)^{1/n} \to 1$ as well: the root test is silent for every
$p$.

Both tests fail for the same reason: they detect geometric behaviour, and
$b_n$ decays only polynomially. The whole question is *which* power of $n$
governs that decay — and that is what part (b) extracts.

## (b) The series converges exactly for $p > 2$

**The key device: two monotone companions of $b_n^2$.** Consider the sequences

$$u_n = n\, b_n^{2} \qquad\text{and}\qquad v_n = (2n+1)\, b_n^{2}.$$

Using $\dfrac{b_{n+1}}{b_n} = \dfrac{2n+1}{2n+2}$ we compute their successive
quotients:

$$\frac{u_{n+1}}{u_n}
= \frac{n+1}{n}\left(\frac{2n+1}{2n+2}\right)^{2}
= \frac{(n+1)(2n+1)^2}{n\,(2n+2)^2}
= \frac{(2n+1)^2}{4n(n+1)}
= \frac{4n^2+4n+1}{4n^2+4n} > 1,$$

$$\frac{v_{n+1}}{v_n}
= \frac{2n+3}{2n+1}\left(\frac{2n+1}{2n+2}\right)^{2}
= \frac{(2n+3)(2n+1)}{(2n+2)^2}
= \frac{4n^2+8n+3}{4n^2+8n+4} < 1.$$

So $(u_n)$ is strictly increasing and $(v_n)$ strictly decreasing. Since
$u_1 = \tfrac14$ and $v_1 = \tfrac34$, for every $n \ge 1$

$$\frac{1}{4} \le n\, b_n^{2} \qquad\text{and}\qquad (2n+1)\, b_n^{2} \le \frac{3}{4},$$

which rearranges to the two-sided elementary estimate

$$\frac{1}{2\sqrt{n}} \ \le\ b_n \ \le\ \sqrt{\frac{3}{4(2n+1)}} \ \le\ \sqrt{\frac{3}{8}}\cdot\frac{1}{\sqrt{n}}.$$

(The monotone pair squeezes toward the true constant: both $u_n$ and
$v_n/2$ tend to $1/\pi$, which is Wallis' product — but no limit value is
needed here, only the bounds at $n = 1$.)

**Comparison, now that the order is known.** The estimate says
$b_n \asymp n^{-1/2}$, so $b_n^{\,p} \asymp n^{-p/2}$, and everything reduces
to the $p$-series benchmark $\sum n^{-s}$, convergent exactly for $s > 1$.

- If $p > 2$: then $b_n^{\,p} \le \left(\tfrac{3}{8}\right)^{p/2} n^{-p/2}$
  with $p/2 > 1$, so the series converges by comparison.
- If $0 < p \le 2$: then $b_n^{\,p} \ge 2^{-p}\, n^{-p/2}$ with $p/2 \le 1$,
  so the series diverges by comparison with a divergent $p$-series (the
  harmonic series at $p = 2$).

**Conclusion.** $\displaystyle\sum_{n\ge 1} b_n^{\,p}$ converges **if and only
if $p > 2$**. In particular $\sum b_n$ and $\sum b_n^{2}$ both diverge, even
though $b_n \to 0$.

## Remark

Raabe's test — examining $n\left(\frac{a_n}{a_{n+1}} - 1\right)$, which here
tends to $p/2$ — packages the same information and gives the same threshold
away from the boundary case. The monotone-companion argument above is the
elementary engine behind such refinements: when a limit-based test returns
$1$, the decision has moved from the geometric scale to the polynomial scale,
and multiplying by a trial power of $n$ and checking monotonicity is a
bare-hands way to read off the exact exponent.
