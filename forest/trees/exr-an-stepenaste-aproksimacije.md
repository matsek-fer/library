---
id: "exr-an-stepenaste-aproksimacije"
taxon: "exercise"
title: "Jednolika neprekidnost na segmentu i stepenaste aproksimacije"
teaches: [uniform-continuity, compactness]
requires: [epsilon-delta-continuity, sequence-limits]
language: "hr"
digested_from: "problem/an-stepenaste-aproksimacije"
standalone: true
depends: []
x_annotation: "The top rung of the epsilon-delta ladder: part (a) has the solver prove\nfrom scratch that continuity on the compact interval [0,1] upgrades to\nuniform continuity (the Heine-Cantor phenomenon), and part (b) cashes the\ntheorem in for a payoff — every continuous function on [0,1] is a uniform\nlimit of step functions on an equispaced grid.\n\nTechniques tested in (a): negating a doubly-quantified statement to\nextract witness sequences at delta = 1/n; applying Bolzano-Weierstrass to\nget a convergent subsequence; the \"shared limit\" estimate forcing the\ncompanion sequence to the same point; closedness of the domain keeping the\nlimit where continuity is available; and the sequential characterization\nof continuity to derive the contradiction. The solution's closing remark\nmakes the mechanism explicit: boundedness feeds Bolzano-Weierstrass and\nclosedness traps the limit — exactly the two halves of compactness in R,\nwhich is why the same proof fails on (0,1).\n\nTechnique tested in (b): converting a uniform delta into a mesh size 1/n\n< delta and bounding the error on every cell of the grid simultaneously.\nThe point the construction drives home is quantifier order: one delta must\nserve all n cells at once, so pointwise continuity is structurally\ninsufficient — this is the standard first place a student sees uniform\ncontinuity actually earn its keep (the same mechanism later powers Riemann\nintegrability of continuous functions).\n\nAbstract principle: compactness converts local information (continuity at\neach point) into global, uniform information (one delta for the whole\ndomain), and uniform information is what discretizations consume.\n\nCommon failure modes: taking a subsequence of (x_n) but forgetting to\nargue (y_n) converges to the same limit; letting the limit point escape\nthe domain when adapting the argument; and in (b) choosing delta after\nfixing x, which silently reintroduces pointwise continuity."
---

# Jednolika neprekidnost na segmentu i stepenaste aproksimacije

Neka je $f\colon [0,1] \to \mathbb{R}$ neprekidna funkcija.

**(a)** Dokažite da je $f$ **jednoliko (uniformno) neprekidna** na $[0,1]$:
za svaki $\varepsilon > 0$ postoji $\delta > 0$ takav da za sve
$x, y \in [0,1]$
$$|x - y| < \delta \implies |f(x) - f(y)| < \varepsilon.$$
Ne pozivajte se na gotov teorem — provedite dokaz. Smijete koristiti
Bolzano–Weierstrassov teorem (svaki ograničen niz realnih brojeva ima
konvergentan podniz).

**(b)** Pomoću (a) dokažite: za svaki $\varepsilon > 0$ postoji
$n \in \mathbb{N}$ i **stepenasta funkcija** $\varphi\colon [0,1] \to \mathbb{R}$,
konstantna na svakom od intervala
$\left[\tfrac{k}{n}, \tfrac{k+1}{n}\right)$ za $k = 0, 1, \dots, n-1$,
takva da je
$$|f(x) - \varphi(x)| < \varepsilon \quad \text{za sve } x \in [0,1].$$
