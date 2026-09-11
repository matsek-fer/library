---
id: "def-surprise"
taxon: "definition"
title: "Surprise of an outcome"
teaches: [entropy]
requires: [probability-basics, random-variables]
language: "en"
digested_from: "blog/pf-entropy-without-measure"
standalone: true
depends: []
---

# Surprise of an outcome

Let $X$ be a discrete random variable taking finitely many values, with
$p(x) = \mathbb{P}(X = x)$; so $p$ is a finite list of non-negative
numbers summing to $1$.

**Definition.** The **surprise** (or *information content*) of an
outcome $x$ with $p(x) > 0$ is
$$s(x) = \log_2 \frac{1}{p(x)} .$$

Read it as: *how many times would you have to halve certainty to get
down to $p(x)$?* The unit is the **bit**, because base-$2$ logarithms
count halvings — one fair-coin flip's worth of news is one bit.

Calibration, worth memorizing:

- $p(x) = 1 \Rightarrow s(x) = 0$: a certain outcome is no news at all.
- $p(x) = \tfrac12 \Rightarrow s(x) = 1$: one bit.
- $p(x) = \tfrac{1}{1024} \Rightarrow s(x) = 10$: ten bits, because
  $1024 = 2^{10}$.

Rarer means more surprising, and the growth is logarithmic, not linear:
an outcome a thousand times less likely is ten bits more surprising, not
a thousand times.

Two remarks on the shape of the definition:

- **The base only fixes the unit.** Using $\ln$ measures in *nats* and
  $\log_{10}$ in *bans*; all statements below are the same up to a
  positive constant factor. Base $2$ is chosen so that a fair coin is
  the unit.
- **The logarithm is not an arbitrary choice.** It is forced by
  requiring that independent news add up ([[exp-why-the-logarithm]]).

Surprise is a number attached to each outcome, which makes $s(X)$ a
random variable in its own right — a function of $X$. Averaging it is
what produces entropy ([[def-entropy]]).
