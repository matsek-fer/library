A series built from the normalized central binomial coefficient b_n =
binom(2n,n)/4^n, designed so that every limit-based test fails: the ratio of
consecutive terms tends to 1 from below and the n-th root tends to 1, so the
ratio and root tests are inconclusive for every exponent p, and the comparison
test is insufficient as stated because no usable benchmark is visible until
the solver extracts the true polynomial order of decay of b_n. The heart of
the solution is an elementary two-sided estimate b_n ~ n^{-1/2} obtained
WITHOUT Stirling: show that n*b_n^2 is increasing while (2n+1)*b_n^2 is
decreasing (one-line quotient computations), trapping b_n between 1/(2 sqrt n)
and C/sqrt n; comparison with the p-series then gives convergence of
sum b_n^p exactly for p > 2. Techniques: telescoping product bound for the
root test, monotone auxiliary sequences (the device behind Wallis' product),
reduction to the p-series benchmark. Raabe's test is the packaged alternative
(the Raabe limit is p/2). Instantiates the principle that when ratio/root
limits equal 1 the series lives on the polynomial scale, and the exact
exponent can be pinned down by multiplying the squared terms by trial powers
of n and testing monotonicity. Common failures: concluding anything from a
ratio limit of 1; invoking Stirling's formula unproven; comparing with a
geometric series that cannot see sub-exponential decay.
