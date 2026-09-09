---
id: "prf-la-three-point-fit"
taxon: "proof"
title: "Rješenje: Fitting a cubic through three points"
teaches: [rank-nullity]
requires: [vector-spaces, linear-maps]
language: "en"
digested_from: "problem/la-three-point-fit"
standalone: true
depends: [exr-la-three-point-fit]
proves: "exr-la-three-point-fit"
---

# Solution

Throughout, note that $T$ is linear: evaluation at a point is linear in the
polynomial, and $T$ is a triple of evaluations.

## (a) The kernel

Suppose $p \in P_3$ satisfies $p(-1) = p(0) = p(1) = 0$. By the factor
theorem, $x + 1$, $x$ and $x - 1$ all divide $p$, so $x(x-1)(x+1) = x^3 - x$
divides $p$. Since $\deg p \le 3$, the quotient is a constant:

$$
\ker T = \{\, c\,(x^3 - x) : c \in \mathbb{R} \,\}.
$$

Conversely every such polynomial clearly vanishes at $-1, 0, 1$. Hence
$\dim \ker T = 1$, with basis $\{x^3 - x\}$.

## (b) Surjectivity by dimension count

We have $\dim P_3 = 4$ (basis $1, x, x^2, x^3$). By the rank-nullity theorem,

$$
\dim \operatorname{im} T = \dim P_3 - \dim \ker T = 4 - 1 = 3.
$$

So $\operatorname{im} T$ is a $3$-dimensional subspace of $\mathbb{R}^3$,
which has dimension $3$; a subspace of full dimension is the whole space,
hence $\operatorname{im} T = \mathbb{R}^3$. In other words, $T$ is
surjective: every triple of values $(b_1, b_2, b_3)$ is attained by some
$p \in P_3$. No interpolating polynomial was ever written down.

## (c) The full solution set

Fix one polynomial $p_0$ with $T(p_0) = (b_1, b_2, b_3)$ — part (b)
guarantees it exists. For any other solution $p$, linearity gives
$T(p - p_0) = 0$, so $p - p_0 \in \ker T$; conversely adding any kernel
element to $p_0$ preserves the three values. Therefore the solution set is
the coset

$$
p_0 + \ker T = \{\, p_0 + c\,(x^3 - x) : c \in \mathbb{R} \,\},
$$

an **affine line** in the $4$-dimensional space $P_3$: a one-parameter family
of cubics all passing through the same three points.
