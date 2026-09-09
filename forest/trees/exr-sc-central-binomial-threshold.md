---
id: "exr-sc-central-binomial-threshold"
taxon: "exercise"
title: "The central binomial threshold"
teaches: [series-convergence, comparison-test]
requires: [ratio-root-tests]
language: "en"
digested_from: "problem/sc-central-binomial-threshold"
standalone: true
depends: []
x_annotation: "A series built from the normalized central binomial coefficient b_n =\nbinom(2n,n)/4^n, designed so that every limit-based test fails: the ratio of\nconsecutive terms tends to 1 from below and the n-th root tends to 1, so the\nratio and root tests are inconclusive for every exponent p, and the comparison\ntest is insufficient as stated because no usable benchmark is visible until\nthe solver extracts the true polynomial order of decay of b_n. The heart of\nthe solution is an elementary two-sided estimate b_n ~ n^{-1/2} obtained\nWITHOUT Stirling: show that n*b_n^2 is increasing while (2n+1)*b_n^2 is\ndecreasing (one-line quotient computations), trapping b_n between 1/(2 sqrt n)\nand C/sqrt n; comparison with the p-series then gives convergence of\nsum b_n^p exactly for p > 2. Techniques: telescoping product bound for the\nroot test, monotone auxiliary sequences (the device behind Wallis' product),\nreduction to the p-series benchmark. Raabe's test is the packaged alternative\n(the Raabe limit is p/2). Instantiates the principle that when ratio/root\nlimits equal 1 the series lives on the polynomial scale, and the exact\nexponent can be pinned down by multiplying the squared terms by trial powers\nof n and testing monotonicity. Common failures: concluding anything from a\nratio limit of 1; invoking Stirling's formula unproven; comparing with a\ngeometric series that cannot see sub-exponential decay."
---

# The central binomial threshold

For $n \ge 1$ let

$$b_n = \frac{1}{4^{n}}\binom{2n}{n}.$$

**(a)** Show that for every $p > 0$, both the ratio test and the root test are
inconclusive for the series $\displaystyle\sum_{n=1}^{\infty} b_n^{\,p}$.

**(b)** Determine all $p > 0$ for which $\displaystyle\sum_{n=1}^{\infty} b_n^{\,p}$
converges.
