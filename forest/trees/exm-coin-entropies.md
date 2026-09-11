---
id: "exm-coin-entropies"
taxon: "example"
title: "Three coins: 1 bit, 0.47 bits, 0 bits"
teaches: [entropy]
requires: [expectation]
language: "en"
digested_from: "blog/pf-entropy-without-measure"
standalone: true
depends: [def-entropy]
---

# Three coins: 1 bit, 0.47 bits, 0 bits

Entropy of a discrete random variable $X$ is the probability-weighted
sum $H(X) = \sum_x p(x) \log_2 \tfrac{1}{p(x)}$, in bits
([[def-entropy]]). Three coins fix the scale.

## Fair coin

$p(\text{H}) = p(\text{T}) = \tfrac12$, so each outcome has surprise
$\log_2 2 = 1$:
$$H = \tfrac12 \cdot 1 + \tfrac12 \cdot 1 = 1 \ \text{bit}.$$
This is the definition of the unit: one fair flip is one bit of news.

## Loaded coin, heads with probability 0.9

$$H = 0.9 \log_2 \tfrac{1}{0.9} + 0.1 \log_2 \tfrac{1}{0.1}
  \approx 0.9 \cdot 0.152 + 0.1 \cdot 3.322
  \approx 0.469 \ \text{bits}.$$

Less than the fair coin, as it must be: the outcome is more
predictable, so on average there is less news in it. Note where the
weight sits — the rare outcome carries $3.32$ bits of surprise, seven
times more than the fair coin's, but it happens one time in ten, so its
contribution to the average is the smaller of the two.

## Certain coin, heads with probability 1

The heads term is $1 \cdot \log_2 1 = 0$; the tails term is
$0 \cdot \log_2 \tfrac{1}{0}$, read as $0$ by the standing convention
([[rem-zero-probability-convention]]). So
$$H = 0 \ \text{bits}.$$
Nothing is unknown, so nothing is learned. This is the bottom of the
scale; the top, for a two-valued variable, is the fair coin's $1$ bit
([[thm-uniform-maximizes-entropy]]).

## The shape of the curve

Writing $H(p) = p\log_2\tfrac1p + (1-p)\log_2\tfrac{1}{1-p}$ for a coin
with bias $p$, the three values above are $H(0.5) = 1$,
$H(0.9) \approx 0.469$ and $H(1) = 0$. The function is symmetric about
$p = \tfrac12$ — $H(0.1) = H(0.9)$, since entropy sees only the
multiset of probabilities, not which face is which — and falls to $0$ at
both ends.
