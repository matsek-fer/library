---
id: "exr-sc-logaritamske-ljestve"
taxon: "exercise"
title: "Logaritamske ljestve"
teaches: [cauchy-condensation]
requires: [series-convergence, comparison-test]
language: "hr"
digested_from: "problem/sc-logaritamske-ljestve"
standalone: true
depends: []
x_annotation: "Tests Cauchy condensation on the logarithmic scale, in exactly the regime where\nthe comparison test is insufficient and something stronger is required: the\nterms 1/(n (ln n)^p) are eventually SMALLER than 1/n (the divergent harmonic\nbenchmark, so no conclusion) and eventually LARGER than 1/n^s for every s > 1\n(so comparison with every convergent p-series fails in the needed direction) —\npart (c) has the solver prove this failure outright, via log-versus-power\ngrowth. Techniques: verify monotonicity of the terms, condense n -> 2^k to turn\nlogarithmic decay into polynomial decay, land on a p-series; for the doubly\nlogarithmic ladder in (b), condense once and finish with limit comparison\nagainst part (a), absorbing the constant ln(ln 2) shift inside the logarithm.\nInstantiates the principle that condensation is a change of scale that moves\nborderline series (the Abel/Bertrand log-ladder between the harmonic series\nand the p-series) back into the reach of standard benchmarks, and that each\nextra level of logarithm condenses down to the previous one. Common failures:\nforgetting to check the monotone-decreasing hypothesis before condensing;\ntrying comparison with 1/n^{1+eps} and not noticing the inequality points the\nwrong way; mishandling ln(k ln 2) = ln k + ln ln 2 where the added constant is\nnegative."
---

# Logaritamske ljestve

**Zadatak.**

**(a)** Odredite sve $p > 0$ za koje red
$$\sum_{n=2}^{\infty} \frac{1}{n \,(\ln n)^{p}}$$
konvergira.

**(b)** Odredite sve $p > 0$ za koje red
$$\sum_{n=3}^{\infty} \frac{1}{n \,\ln n\, (\ln\ln n)^{p}}$$
konvergira.

**(c)** Objasnite zašto se ni za jedan $p$ konvergencija reda iz (a) ne može
dokazati usporedbom s konvergentnim redom $\displaystyle\sum \frac{1}{n^{s}}$,
$s > 1$.
