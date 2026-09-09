---
id: "prf-sc-what-uniformity-buys"
taxon: "proof"
title: "Rješenje: What uniformity buys"
teaches: [uniform-convergence]
requires: [pointwise-convergence, epsilon-delta-continuity, compactness]
language: "en"
digested_from: "problem/sc-what-uniformity-buys"
standalone: true
depends: [exr-sc-what-uniformity-buys]
proves: "exr-sc-what-uniformity-buys"
---

# Solution

Throughout, write $\|g\|_\infty = \sup_{x \in [0,1]} |g(x)|$, so that uniform
convergence of $f_n$ to $f$ means exactly $\|f_n - f\|_\infty \to 0$.

## (a) The uniform limit of continuous functions is continuous

Fix $c \in [0,1]$ and $\varepsilon > 0$. By uniform convergence there is an
$N$ with $\|f_N - f\|_\infty < \varepsilon/3$. Since $f_N$ is continuous at
$c$, there is a $\delta > 0$ such that $|f_N(t) - f_N(c)| < \varepsilon/3$
for all $t \in [0,1]$ with $|t - c| < \delta$. For such $t$, insert $f_N$
twice:

$$|f(t) - f(c)|
\ \le\ \underbrace{|f(t) - f_N(t)|}_{<\, \varepsilon/3}
\ +\ \underbrace{|f_N(t) - f_N(c)|}_{<\, \varepsilon/3}
\ +\ \underbrace{|f_N(c) - f(c)|}_{<\, \varepsilon/3}
\ <\ \varepsilon.$$

So $f$ is continuous at every $c \in [0,1]$.

The first and third braces are where uniformity is spent: one fixed $N$ must
serve **every** $t$ near $c$ at once. Pointwise convergence would only give an
$N$ depending on $t$, and the argument would collapse — as it must, since a
pointwise limit of continuous functions can be discontinuous (the power
sequence $(x^n - 1)/(x^n + 1)$ on $[0,1]$ is such an example).

*Remark (this is an exchange of limits).* Continuity of $f$ at $c$ says
$\lim_{t \to c} f(t) = f(c)$, i.e.

$$\lim_{t \to c}\ \lim_{n \to \infty} f_n(t)
\ =\ \lim_{n \to \infty}\ \lim_{t \to c} f_n(t),$$

since the inner limit on the right is $f_n(c)$ by continuity of $f_n$. Part
(a) is precisely the statement that uniform convergence licenses swapping the
two limit processes; part (c) will show pointwise convergence does not.

## (b) Uniformity moves the evaluation point

Let $x_n \to x$ in $[0,1]$. Split along the diagonal:

$$|f_n(x_n) - f(x)|
\ \le\ \underbrace{|f_n(x_n) - f(x_n)|}_{\le\, \|f_n - f\|_\infty}
\ +\ \underbrace{|f(x_n) - f(x)|}_{\to\, 0}.$$

The first term is at most $\|f_n - f\|_\infty \to 0$ by uniform convergence
— crucially, the bound does not care *where* $x_n$ sits. The second term
tends to $0$ because $f$ is continuous by part (a) and $x_n \to x$. Hence
$f_n(x_n) \to f(x)$.

## (c) A travelling bump defeats pointwise convergence

Take

$$f_n(x) = \frac{2nx}{1 + n^{2}x^{2}}, \qquad x_n = \frac{1}{n} \to 0.$$

Each $f_n$ is continuous. Pointwise, $f_n \to 0$: at $x = 0$ every
$f_n(0) = 0$, and for fixed $x > 0$ we have
$0 \le f_n(x) \le \tfrac{2nx}{n^2 x^2} = \tfrac{2}{nx} \to 0$. Yet along the
moving points,

$$f_n(x_n) = f_n\!\left(\tfrac1n\right) = \frac{2}{1+1} = 1 \not\longrightarrow 0 = f(0).$$

The bump of height $1$ peaks exactly at $1/n$: every fixed vertical line
eventually misses it, but the moving evaluation point rides its crest.

## (d) The converse, by compactness

Suppose $f$ is continuous, $(f_n)$ converges to $f$ along moving points, and
— for contradiction — the convergence is **not** uniform. Negate
$\|f_n - f\|_\infty \to 0$: there are an $\varepsilon > 0$ and indices
$n_1 < n_2 < n_3 < \cdots$ with $\|f_{n_k} - f\|_\infty \ge \varepsilon$ for
every $k$. A supremum of size at least $\varepsilon$ is approached by actual
values, so for each $k$ we can pick a point $y_k \in [0,1]$ with

$$|f_{n_k}(y_k) - f(y_k)| \ \ge\ \frac{\varepsilon}{2} \qquad \text{for all } k.$$

By the Bolzano–Weierstrass theorem, $[0,1]$ being compact, some subsequence
of $(y_k)$ converges in $[0,1]$; passing to it (and relabelling), we may
assume $y_k \to y \in [0,1]$.

Now build a **single full sequence** to feed the hypothesis. Define

$$x_n = \begin{cases} y_k, & n = n_k \text{ for some } k,\\[2pt] y, & \text{otherwise.} \end{cases}$$

Then $x_n \to y$: given a neighbourhood of $y$, all but finitely many $y_k$
lie in it and the remaining terms equal $y$ itself. Convergence along moving
points therefore gives $f_n(x_n) \to f(y)$, and in particular, reading off
the subsequence $n = n_k$,

$$f_{n_k}(y_k) \longrightarrow f(y).$$

At the same time $f(y_k) \to f(y)$ by continuity of $f$. Subtracting,

$$|f_{n_k}(y_k) - f(y_k)| \longrightarrow |f(y) - f(y)| = 0,$$

contradicting the lower bound $\varepsilon/2$. Hence $f_n \to f$ uniformly on
$[0,1]$. $\blacksquare$

Note where each hypothesis worked: compactness of $[0,1]$ supplied the limit
$y$ of the bad points, continuity of $f$ let $f(y_k)$ chase $f(y)$, and the
moving-points hypothesis was applied to one cleverly interleaved sequence —
no continuity of the $f_n$ was ever used.

## Remark: what uniformity buys, in one line

On a compact segment, for a continuous limit $f$, parts (b) and (d) say that
uniform convergence is **equivalent** to convergence along moving points.
Uniformity is exactly the license to evaluate at a point that changes with
$n$ — and, by (a), the license to exchange $\lim_{t\to c}$ with
$\lim_{n\to\infty}$. Pointwise convergence, as the bump in (c) shows, buys
neither.
