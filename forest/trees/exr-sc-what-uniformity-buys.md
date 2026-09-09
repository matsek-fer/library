---
id: "exr-sc-what-uniformity-buys"
taxon: "exercise"
title: "What uniformity buys"
teaches: [uniform-convergence]
requires: [pointwise-convergence, epsilon-delta-continuity, compactness]
language: "en"
digested_from: "problem/sc-what-uniformity-buys"
standalone: true
depends: []
x_annotation: "Capstone of the pointwise-vs-uniform ladder: what uniform convergence\nactually buys, packaged as the notion of convergence along moving points\n(x_n -> x forces f_n(x_n) -> f(x)). Part (a) is the epsilon/3 proof that a\nuniform limit of continuous functions is continuous, framed explicitly as the\nexchange of limits lim_{t->c} lim_n = lim_n lim_{t->c}; part (b) derives the\nmoving-points property from uniformity by the diagonal split\n|f_n(x_n) - f(x)| <= ||f_n - f||_inf + |f(x_n) - f(x)|; part (c) kills the\npointwise version with a travelling bump peaking at 1/n; part (d), the real\nwork, proves the CONVERSE on the compact segment [0,1]: for a continuous\nlimit, convergence along moving points implies uniform convergence. The\nconverse proof negates uniform convergence into a subsequence n_k and bad\npoints y_k with |f_{n_k}(y_k) - f(y_k)| >= eps, extracts a convergent\nsubsequence of (y_k) by Bolzano-Weierstrass, and interleaves the y_k with the\nconstant y into one full sequence x_n -> y so the hypothesis applies —\ncontinuity of the f_n is never used. Techniques: epsilon/3 insertion,\ndiagonal splitting, negating a sup statement into witnesses,\nBolzano-Weierstrass extraction, interleaved sequence construction.\nInstantiates the principle that uniform convergence is exactly the license to\nlet the evaluation point move with n, and hence to exchange limit processes;\non a compactum with continuous limit it is equivalent to that license.\nCommon failures: in (a), letting N depend on t; in (d), applying the\nmoving-points hypothesis to the subsequence (y_k) alone without embedding it\nin a full convergent sequence; assuming continuity of f_n in (d) where none\nis given; believing the converse (d) without compactness: on all of R a bump\ntravelling to infinity (peak at x = n) converges along moving points to the\ncontinuous limit 0 — any convergent x_n is bounded, so it eventually misses\nthe peak — yet not uniformly, because Bolzano-Weierstrass has no compact\nsegment to extract the bad points into."
---

# What uniformity buys

Let $(f_n)$ be a sequence of functions $f_n \colon [0,1] \to \mathbb{R}$ and
let $f \colon [0,1] \to \mathbb{R}$. Say that $(f_n)$ converges to $f$
**along moving points** if

$$f_n(x_n) \longrightarrow f(x) \qquad \text{for every convergent sequence } x_n \to x \text{ in } [0,1].$$

**(a)** Suppose each $f_n$ is continuous and $f_n \to f$ uniformly on
$[0,1]$. Prove that $f$ is continuous.

**(b)** Under the same hypotheses as (a), prove that $(f_n)$ converges to
$f$ along moving points.

**(c)** Show that pointwise convergence is not enough for (b): exhibit
continuous functions $f_n \colon [0,1] \to \mathbb{R}$ converging pointwise
to some $f$, and a convergent sequence $x_n \to x$, with
$f_n(x_n) \not\to f(x)$.

**(d)** Prove the converse of (b): if $f$ is continuous and $(f_n)$
converges to $f$ along moving points, then $f_n \to f$ uniformly on
$[0,1]$. (No continuity of the $f_n$ may be assumed here.)
