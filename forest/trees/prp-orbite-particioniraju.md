---
id: "prp-orbite-particioniraju"
taxon: "proposition"
title: "Orbite particioniraju skup"
teaches: [orbits-stabilizers]
requires: [sets, functions]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [def-orbita-i-stabilizator]
---

# Orbite particioniraju skup

Neka grupa $G$ djeluje na skupu $X$ ($e \cdot x = x$,
$(gh) \cdot x = g \cdot (h \cdot x)$), i neka je
$\mathrm{Orb}(x) = \{g \cdot x : g \in G\}$ orbita točke $x$
([[def-orbita-i-stabilizator]]).

**Propozicija.** Orbite čine particiju skupa $X$: svaka točka
$x \in X$ leži u točno jednoj orbiti, naime u $\mathrm{Orb}(x)$, a dvije
orbite su ili jednake ili disjunktne.

Posljedica koja se zapravo koristi: ako je $X$ konačan i ako su
$x_1, \dots, x_r$ predstavnici orbita (po jedan iz svake), onda je
$$|X| = \sum_{i=1}^{r} |\mathrm{Orb}(x_i)|.$$

To je knjigovodstvena podloga svakog brojanja djelovanjem: veličina
skupa raspisuje se kao zbroj veličina hrpa, pa svako ograničenje na
dopuštene veličine hrpa postaje aritmetičko ograničenje na $|X|$.

Dokaz: [[prf-orbite-particioniraju]].
