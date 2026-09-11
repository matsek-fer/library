---
id: "exm-two-fair-dice"
taxon: "example"
title: "Two dice carry twice the entropy of one"
teaches: [entropy]
requires: [probability-basics]
language: "en"
digested_from: "blog/pf-entropy-without-measure"
standalone: true
depends: [thm-entropy-additive-independent]
---

# Two dice carry twice the entropy of one

A numerical check of additivity, done twice: once from the definition
and once from the theorem.

## One fair die

Let $X$ be the result of a fair six-sided die, so $p(x) = \tfrac16$ for
each of six values. Entropy in bits is
$H(X) = \sum_x p(x)\log_2\tfrac{1}{p(x)}$ ([[def-entropy]]), and every
term is the same:
$$H(X) = 6 \cdot \tfrac16 \log_2 6 = \log_2 6 \approx 2.585 \
  \text{bits}.$$

Not an integer, and that is the point: entropy is an average, not a
count of questions in any single run. Two questions cannot always
suffice ($2^2 = 4 < 6$) and three are sometimes wasteful.

## A pair of independent dice, from the definition

Let $Y$ be a second, independent fair die. The pair $(X, Y)$ has $36$
equally likely outcomes, so
$$H(X, Y) = \log_2 36 = \log_2 (6^2) = 2 \log_2 6 \approx 5.170 \
  \text{bits}.$$

## The same number, from additivity

$X$ and $Y$ are independent, so
$H(X, Y) = H(X) + H(Y) = \log_2 6 + \log_2 6 = 2\log_2 6$
([[thm-entropy-additive-independent]]) — the same value, obtained
without listing $36$ outcomes.

## Why it is exactly twice, not less

A tempting objection: the two rolls might "collide" (come out equal), so
surely some information is shared? No — a collision is an event, not a
dependence. Independence is about the joint distribution, and here every
pair $(i, j)$ has probability $\tfrac{1}{36} = \tfrac16 \cdot \tfrac16$.
Knowing $X$ tells you nothing about $Y$, so the news from the second die
is undiminished and the entropies add.

The same computation with $n$ independent dice gives $n \log_2 6$: the
entropy of a block of independent symbols grows linearly in the block
length, which is what makes "bits per symbol" a meaningful rate
([[exp-entropy-as-a-guessing-game]]).
