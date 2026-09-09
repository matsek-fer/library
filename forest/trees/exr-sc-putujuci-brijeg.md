---
id: "exr-sc-putujuci-brijeg"
taxon: "exercise"
title: "Putujući brijeg"
teaches: [uniform-convergence]
requires: [pointwise-convergence, epsilon-delta-continuity]
language: "hr"
digested_from: "problem/sc-putujuci-brijeg"
standalone: true
depends: []
x_annotation: "The travelling-bump counterexample, second rung of the pointwise-vs-uniform\nladder: h_n(x) = 2nx/(1 + n^2 x^2) on [0,1] converges pointwise to 0, yet\nsup h_n = 1 for every n because the bump of constant height 1 peaks at the\ntravelling point x = 1/n. The peak is located without calculus: the AM-GM\ninequality 1 + n^2 x^2 >= 2nx, with equality exactly at nx = 1, gives\nh_n <= 1 attained at 1/n. Off the origin the convergence is uniform: on\n[delta, 1] the x-free majorant 2/(n delta) works, i.e. the bump escapes every\nsuch segment. Part (d) makes the logical point explicit: since the limit here\nIS continuous while convergence is NOT uniform, continuity of the limit is a\nnecessary but never sufficient condition — the uniform-limit continuity\ntheorem cannot be run in reverse. Techniques: sandwich bound 2/(nx) for the\npointwise limit, AM-GM for a derivative-free maximum, n-dependent evaluation\npoint defeating uniformity, x-free majorant proving it on subsegments.\nInstantiates the principle that pointwise convergence controls each vertical\nline while uniform convergence controls a whole horizontal band, and that mass\ncan escape through a shrinking neighbourhood of a single point. Common\nfailures: differentiating to find the maximum and mishandling the endpoint;\nconcluding uniformity from continuity of the limit (the converse error);\nbounding 2nx/(1 + n^2 x^2) by 2nx and losing the decay."
---

# Putujući brijeg

**Zadatak.** Za $n \ge 1$ definirajmo funkcije $h_n \colon [0,1] \to \mathbb{R}$ s

$$h_n(x) = \frac{2nx}{1 + n^{2}x^{2}}.$$

**(a)** Pokažite da niz $(h_n)$ konvergira po točkama prema nulfunkciji na
$[0,1]$.

**(b)** Bez deriviranja odredite $\displaystyle\max_{x\in[0,1]} h_n(x)$ i
točku u kojoj se postiže, pa zaključite konvergira li $(h_n)$ uniformno na
$[0,1]$.

**(c)** Neka je $0 < \delta < 1$. Pokažite da $(h_n)$ konvergira uniformno na
segmentu $[\delta, 1]$.

**(d)** Granična funkcija u (a) je neprekidna, a svaka $h_n$ je neprekidna.
Može li se, dakle, uniformnost konvergencije na $[0,1]$ provjeriti tako da se
pogleda je li granična funkcija neprekidna? Obrazložite na ovom primjeru.
