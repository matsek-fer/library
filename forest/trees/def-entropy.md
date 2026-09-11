---
id: "def-entropy"
taxon: "definition"
title: "Entropy of a discrete random variable"
teaches: [entropy]
requires: [expectation, random-variables, probability-basics]
language: "en"
digested_from: "blog/pf-entropy-without-measure"
standalone: true
depends: [def-surprise]
---

# Entropy of a discrete random variable

Let $X$ be a discrete random variable taking finitely many values, with
$p(x) = \mathbb{P}(X = x)$, and let
$s(x) = \log_2 \tfrac{1}{p(x)}$ be the surprise of the outcome $x$,
measured in bits ([[def-surprise]]). Since $s(X)$ is a function of $X$,
it is itself a random variable, and it has an expectation.

**Definition.** The **entropy** of $X$ is the expected surprise
$$H(X) \;=\; \mathbb{E}\big[s(X)\big]
  \;=\; \sum_{x} p(x) \log_2 \frac{1}{p(x)}
  \;=\; -\sum_{x} p(x) \log_2 p(x),$$
with the convention that any term with $p(x) = 0$ contributes $0$.

Three things this definition is *not*: it is not a new kind of object,
not an integral, and not a property of the values $X$ takes. It is an
ordinary expectation — the probability-weighted sum of a first
probability course — of one particular function of $X$. Relabelling the
outcomes leaves $H(X)$ unchanged, since only the list of probabilities
enters; this is why one speaks interchangeably of the entropy of a
random variable and of its distribution.

The unit is the bit, inherited from base $2$ in the surprise; entropy in
nats uses $\ln$ throughout and differs by the constant factor
$\ln 2$.

About the convention: the term for an impossible outcome is the
indeterminate product $0 \cdot \log_2 \tfrac{1}{0}$, defined to be $0$
for a reason worth stating once ([[rem-zero-probability-convention]]).
Its effect is that padding a distribution with impossible outcomes does
not change its entropy.

Worked values for coins: [[exm-coin-entropies]]. The two structural
facts that make the definition useful are additivity over independent
variables ([[thm-entropy-additive-independent]]) and the uniform upper
bound ([[thm-uniform-maximizes-entropy]]).
