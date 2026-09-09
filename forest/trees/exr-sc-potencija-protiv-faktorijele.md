---
id: "exr-sc-potencija-protiv-faktorijele"
taxon: "exercise"
title: "Potencija protiv faktorijele"
teaches: [ratio-root-tests]
requires: [series-convergence, comparison-test]
language: "hr"
digested_from: "problem/sc-potencija-protiv-faktorijele"
standalone: true
depends: []
x_annotation: "Tests whether the solver reaches for the ratio (d'Alembert) test when the terms\nof a series mix a power n^n against a factorial n! and a geometric factor. The\ncomparison test is insufficient here: direct comparison with a convergent\ngeometric series requires an a priori bound of the form n^n/n! <= C(4q)^n,\ni.e. Stirling-level knowledge of the growth of n^n/n!, which a first course\ndoes not yet have; comparison with a p-series is equally out of reach because\nthe terms decay geometrically, not polynomially. The ratio test packages the\ngeometric comparison invisibly: the quotient a_{n+1}/a_n collapses to\n(1+1/n)^n / 4 -> e/4, needing only the definition of e, and the two parts\ndiffer exactly in whether that limit falls below or above 1 (e/4 versus e/2) —\nthe threshold constant between convergence and divergence is e itself. In the\ndivergent part the cleanest finish is the term test: (1+1/n)^n >= 2 makes the\nterms nondecreasing, so they cannot tend to 0. Instantiates the principle that\nthe ratio test IS comparison with a geometric series, performed through the\nrecursion of the terms instead of through an explicit benchmark, so it succeeds\nprecisely where no explicit benchmark is elementarily available. Common\nfailures: trying direct comparison and getting stuck bounding n^n/n!; in (b),\ncomputing the ratio limit e/2 > 1 but being unable to say why that forces\ndivergence (terms bounded away from 0)."
---

# Potencija protiv faktorijele

**Zadatak.** Ispitajte konvergenciju sljedećih redova:

**(a)**
$$\sum_{n=1}^{\infty} \frac{n^n}{4^n \, n!},$$

**(b)**
$$\sum_{n=1}^{\infty} \frac{n^n}{2^n \, n!}.$$
