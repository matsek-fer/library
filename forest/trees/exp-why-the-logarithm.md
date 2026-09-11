---
id: "exp-why-the-logarithm"
taxon: "exposition"
title: "Why the logarithm, and not some simpler formula"
teaches: [entropy]
requires: [functional-equations, probability-basics]
language: "en"
digested_from: "blog/pf-entropy-without-measure"
standalone: true
depends: [def-surprise]
---

# Why the logarithm, and not some simpler formula

The surprise of an outcome of probability $p$ is defined as
$s = \log_2 \tfrac1p$ ([[def-surprise]]). Why not the simpler
candidates $\tfrac1p$, or $1 - p$? Both are decreasing in $p$, both are
$0$ or $1$ at the right places, and both are easier to compute. The
logarithm is not chosen for elegance; it is forced by one demand.

## The demand: independent news adds

Flip two independent fair coins. The outcome $(\text{H}, \text{H})$ has
probability $\tfrac14$. Its surprise ought to be the surprise of the
first heads *plus* the surprise of the second — two separate one-bit
dispatches, arriving independently. In general, for independent events
of probabilities $p$ and $q$, the joint outcome has probability $pq$,
and we want
$$s(pq) = s(p) + s(q).$$

Probabilities multiply; information should add. A function converting
one into the other is exactly what a logarithm is:
$$\log_2 \frac{1}{p\,q} = \log_2 \frac{1}{p} + \log_2 \frac{1}{q}.$$

The candidates fail immediately. For $s(p) = \tfrac1p$ the joint
surprise is $\tfrac{1}{pq} = s(p)\,s(q)$ — multiplicative, not additive:
two independent draws of probability $\tfrac14$ each would carry
surprise $16$ instead of $4 + 4 = 8$. For $s(p) = 1 - p$ the joint
surprise is $1 - pq$, which is neither; two fair coins give $\tfrac34$
against $\tfrac12 + \tfrac12 = 1$.

## The demand forces the logarithm

The requirement is a functional equation on $(0, 1]$:
$$s(pq) = s(p) + s(q).$$
Substituting $p = 2^{-u}$, $q = 2^{-v}$ and writing
$\psi(u) = s(2^{-u})$ turns it into the Cauchy equation
$$\psi(u + v) = \psi(u) + \psi(v), \qquad u, v \ge 0 .$$
Its solutions are wild in general, but any solution that is continuous —
or merely monotone, which surprise certainly should be — is
$\psi(u) = c\,u$ for a constant $c$. Undoing the substitution,
$$s(p) = c \log_2 \frac{1}{p}.$$

So additivity pins surprise down to a single positive constant, and that
constant is only the choice of unit: $c = 1$ gives bits, $c = \ln 2$
gives nats. Up to the base of the logarithm, there is nothing else.

## From outcomes to whole variables

The additivity lifts from single outcomes to random variables. If $X$
and $Y$ are independent, the surprise of the pair splits as
$s(X) + s(Y)$ pointwise, and taking expectations — the expectation of a
sum is the sum of expectations, no independence needed for *that* step —
gives
$$H(X, Y) = H(X) + H(Y),$$
the statement and proof of which are
[[thm-entropy-additive-independent]]. Two independent dice carry exactly
twice the entropy of one ([[exm-two-fair-dice]]).

That is why the definition of entropy looks the way it does, and not
like something simpler.
