---
id: "rem-zero-probability-convention"
taxon: "remark"
title: "Why impossible outcomes contribute zero"
teaches: []
requires: [limits-of-functions]
language: "en"
digested_from: "blog/pf-entropy-without-measure"
standalone: true
depends: [def-entropy]
---

# Why impossible outcomes contribute zero

The entropy of a discrete random variable $X$ with probabilities $p(x)$
is $H(X) = \sum_x p(x) \log_2 \tfrac{1}{p(x)}$
([[def-entropy]]). If some listed value has $p(x) = 0$, its term is the
indeterminate product
$$0 \cdot \log_2 \tfrac{1}{0},$$
since $\log_2 \tfrac{1}{p} \to \infty$ as $p \to 0^{+}$. The standing
convention is to read that term as $0$.

**The justification is a limit.** For $p \in (0, 1]$ put
$\varphi(p) = p \log_2 \tfrac1p = -p \log_2 p$. Then
$$\lim_{p \to 0^{+}} \varphi(p) = 0,$$
because $\log_2 \tfrac1p$ grows without bound but only logarithmically,
while the factor $p$ shrinks linearly — linear decay beats logarithmic
growth. Setting $\varphi(0) = 0$ is therefore the unique choice that
makes $\varphi$ continuous on $[0,1]$, and continuity is what one wants
of a quantity that is supposed to vary smoothly with the distribution.

**What it means.** An outcome that essentially never happens contributes
essentially nothing to an *average*, however dramatic it would be if it
occurred. The infinite surprise is real but is weighted into
irrelevance.

Two consequences used constantly:

- **Padding is free.** Adding impossible values to the list of outcomes
  leaves $H(X)$ unchanged, so entropy depends only on the non-zero
  probabilities. This is what lets one compare distributions with
  different numbers of listed outcomes.
- **Certainty is zero entropy.** If some outcome has probability $1$,
  every other has probability $0$; the certain outcome contributes
  $1 \cdot \log_2 1 = 0$ and every other contributes $0$ by the
  convention, so $H(X) = 0$ — nothing is unknown, so nothing is
  learned.
