---
id: "thm-entropy-additive-independent"
taxon: "theorem"
title: "Entropy is additive over independent variables"
teaches: [entropy]
requires: [probability-basics, random-variables]
language: "en"
digested_from: "blog/pf-entropy-without-measure"
standalone: true
depends: [def-entropy]
---

# Entropy is additive over independent variables

Let $X$ and $Y$ be discrete random variables with finitely many values,
and let $H$ denote entropy in bits,
$H(Z) = \sum_z \mathbb{P}(Z = z) \log_2 \tfrac{1}{\mathbb{P}(Z = z)}$
([[def-entropy]]). Write $(X, Y)$ for the pair, a random variable taking
values in the product of the two value sets, and $H(X, Y)$ for its
entropy — the **joint entropy**.

**Theorem.** If $X$ and $Y$ are independent, then
$$H(X, Y) = H(X) + H(Y).$$

Independence is essential, not decoration: if $Y = X$ then
$H(X, Y) = H(X)$, which is strictly less than $H(X) + H(Y) = 2H(X)$
whenever $H(X) > 0$. In general $H(X,Y) \le H(X) + H(Y)$ always holds,
with equality exactly in the independent case; what a shared dependence
buys is a *discount*, and measuring that discount is what mutual
information does.

Proof: [[prf-entropy-additive-independent]]. Numerically:
[[exm-two-fair-dice]]. Why additivity is the property that forced the
logarithm into the definition in the first place:
[[exp-why-the-logarithm]].

Additivity is what makes entropy an extensive, per-symbol quantity: a
source emitting $n$ independent symbols of entropy $H$ each has joint
entropy $nH$, so "bits per symbol" is a meaningful rate rather than an
artefact of block length.
