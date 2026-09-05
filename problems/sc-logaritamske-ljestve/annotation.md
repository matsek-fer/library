Tests Cauchy condensation on the logarithmic scale, in exactly the regime where
the comparison test is insufficient and something stronger is required: the
terms 1/(n (ln n)^p) are eventually SMALLER than 1/n (the divergent harmonic
benchmark, so no conclusion) and eventually LARGER than 1/n^s for every s > 1
(so comparison with every convergent p-series fails in the needed direction) —
part (c) has the solver prove this failure outright, via log-versus-power
growth. Techniques: verify monotonicity of the terms, condense n -> 2^k to turn
logarithmic decay into polynomial decay, land on a p-series; for the doubly
logarithmic ladder in (b), condense once and finish with limit comparison
against part (a), absorbing the constant ln(ln 2) shift inside the logarithm.
Instantiates the principle that condensation is a change of scale that moves
borderline series (the Abel/Bertrand log-ladder between the harmonic series
and the p-series) back into the reach of standard benchmarks, and that each
extra level of logarithm condenses down to the previous one. Common failures:
forgetting to check the monotone-decreasing hypothesis before condensing;
trying comparison with 1/n^{1+eps} and not noticing the inequality points the
wrong way; mishandling ln(k ln 2) = ln k + ln ln 2 where the added constant is
negative.
