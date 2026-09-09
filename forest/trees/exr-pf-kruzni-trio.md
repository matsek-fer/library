---
id: "exr-pf-kruzni-trio"
taxon: "exercise"
title: "Kružne trojke na turniru bez remija"
teaches: [linearity-of-expectation]
requires: [probability-basics, random-variables, expectation]
language: "hr"
digested_from: "problem/pf-kruzni-trio"
standalone: true
depends: []
x_annotation: "This problem tests whether the solver can pick the right objects to index\nindicators by when the natural unit is not an individual but a triple. The\nstatement — a random tournament where every match is a fair independent coin\nflip, expected number of cyclic (non-transitive) triples — never names the\ntechnique.\n\nTechnique: one indicator per unordered triple of players, a symmetry count of\nthe 8 equally likely orientations of the triple's three edges (exactly 2 are\ncyclic, so each indicator has expectation 1/4), then linearity of expectation\nover heavily dependent indicators (triples share edges) to get C(n,3)/4. The\nsolution also derives the structural fact that a triple is non-cyclic iff it\nhas a local winner.\n\nAbstract principles instantiated: expectation of a count is the sum of the\nprobabilities of the counted configurations, independence irrelevant; and the\nprobabilistic-method corollary noted at the end — some outcome achieves at\nleast the expectation, so tournaments with many non-transitive triples exist\nwithout construction. Common failure modes: indexing indicators by matches or\nplayers instead of triples, miscounting the cyclic orientations (2 of 8, not\n1 of 8), or attempting the distribution of the triple count. Hard end of the\nlinearity ladder (difficulty 4): the indicator family, the orientation count,\nand the dependence structure all require decisions."
---

# Kružne trojke na turniru bez remija

Sekcija organizira turnir u stolnom nogometu za $n \ge 3$ igrača. Svaki par
igrača odigra točno jedan meč i remi nije moguć. Igrači su toliko
izjednačeni da svaki meč, neovisno o svim ostalima, s vjerojatnošću
$\frac{1}{2}$ dobiva jedan, a s vjerojatnošću $\frac{1}{2}$ drugi igrač.

Trojku igrača $\{A, B, C\}$ nazovimo **kružnom** ako je $A$ pobijedio $B$,
$B$ pobijedio $C$, a $C$ pobijedio $A$ (u nekom označavanju te trojice).
Kružna trojka nema ni najboljeg ni najgoreg: svatko je nekoga dobio i od
nekoga izgubio.

Odredite očekivani broj kružnih trojki na turniru.
