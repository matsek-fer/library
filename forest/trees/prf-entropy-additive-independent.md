---
id: "prf-entropy-additive-independent"
taxon: "proof"
title: "Proof: entropy is additive over independent variables"
teaches: []
requires: [linearity-of-expectation, probability-basics]
language: "en"
digested_from: "blog/pf-entropy-without-measure"
standalone: true
depends: [thm-entropy-additive-independent, def-surprise]
proves: "thm-entropy-additive-independent"
---

# Proof: entropy is additive over independent variables

Let $X$, $Y$ be independent discrete random variables with finitely many
values, $p(x) = \mathbb{P}(X = x)$, $q(y) = \mathbb{P}(Y = y)$. The
statement proved is [[thm-entropy-additive-independent]].

## Surprise splits pointwise

Independence means $\mathbb{P}(X = x,\ Y = y) = p(x) q(y)$ for all
$x, y$. Taking surprises ([[def-surprise]]) of an outcome with
$p(x)q(y) > 0$,
$$s(x, y) = \log_2 \frac{1}{p(x) q(y)}
  = \log_2 \frac{1}{p(x)} + \log_2 \frac{1}{q(y)}
  = s(x) + s(y),$$
which is the defining property of the logarithm, applied once.

## Take expectations

Entropy is the expectation of surprise, and the expectation of a sum is
the sum of the expectations — linearity, which needs no independence of
its own:
$$H(X, Y) = \mathbb{E}\big[s(X) + s(Y)\big]
  = \mathbb{E}\big[s(X)\big] + \mathbb{E}\big[s(Y)\big]
  = H(X) + H(Y).$$

## The same computation written out

For readers who prefer the sums explicit, and to see exactly where
independence is spent:
$$H(X,Y) = \sum_{x, y} p(x) q(y)
  \left[\log_2 \tfrac{1}{p(x)} + \log_2 \tfrac{1}{q(y)}\right]$$
$$= \sum_{x} p(x) \log_2 \tfrac{1}{p(x)} \underbrace{\sum_{y}
  q(y)}_{= \, 1}
  \; + \; \sum_{y} q(y) \log_2 \tfrac{1}{q(y)}
  \underbrace{\sum_{x} p(x)}_{= \, 1}
  \; = \; H(X) + H(Y).$$

Independence is used exactly once, in writing the joint probability as
$p(x)q(y)$; everything after that is rearranging a finite double sum.
Pairs with $p(x)q(y) = 0$ contribute $0$ to every sum above by the
zero-probability convention, so they may be dropped throughout.
$\blacksquare$
