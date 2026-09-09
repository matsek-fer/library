---
id: "exr-pf-slozni-susjedi"
taxon: "exercise"
title: "Složni susjedi za okruglim stolom"
teaches: [linearity-of-expectation]
requires: [probability-basics, random-variables, expectation]
language: "hr"
digested_from: "problem/pf-slozni-susjedi"
standalone: true
depends: []
x_annotation: "This problem tests whether the solver reaches for indicator variables and\nlinearity of expectation when asked for an expected count. The statement asks\nfor the expected number of matching adjacent pairs around a circle of\nindependent fair coin flips and never names any technique.\n\nTechnique: write the count as a sum of one indicator per adjacent pair,\ncompute each indicator's expectation as a single-pair probability (1/2), and\nsum. The indicators overlap — adjacent pairs share a person — so the count is\nnot binomial, and that is the pedagogical point: linearity of expectation\nholds without independence.\n\nAbstract principle instantiated: the expectation of a count equals the sum of\nthe probabilities of the events being counted, regardless of dependence\nbetween them. Common failure mode: trying to derive the full distribution of\nthe number of matching pairs, or worrying that the dependence between\noverlapping pairs invalidates summing expectations. Entry-level (easy end of\nthe linearity-of-expectation ladder): one symmetric indicator type, constant\nprobability per indicator."
---

# Složni susjedi za okruglim stolom

Na proslavi sekcije $n \ge 3$ članova sjedi za okruglim stolom. Svaki član,
neovisno o svima ostalima, baca simetričan novčić i zapisuje ishod (pismo ili
glava).

Par susjeda za stolom nazovimo **složnim** ako su oba zapisala isti ishod.

Odredite očekivani broj složnih parova susjeda.
