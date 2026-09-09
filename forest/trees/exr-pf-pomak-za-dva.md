---
id: "exr-pf-pomak-za-dva"
taxon: "exercise"
title: "Funkcija koja raste za dva"
teaches: [functional-equations]
requires: [functions, induction]
language: "hr"
digested_from: "problem/pf-pomak-za-dva"
standalone: true
depends: []
x_annotation: "A first functional-equation exercise: the shift relation f(x+1) = f(x) + 2\nwith f(0) = 1, asking for small values, a formula f(n) = 2n+1 on the\nnaturals, and one value below zero. It teaches the two most basic moves of\nthe subject before any solving tricks appear: substituting well-chosen\nconcrete arguments into a functional identity, and propagating a relation\nalong the integers by induction. Part c) tests reading the quantifier — the\nidentity holds for all real x, so x = -1 is legal and pins down f(-1).\n\nAbstract principle instantiated: a functional equation is a machine for\ngenerating equalities, one per substitution; a recurrence-shaped identity\ndetermines values on an orbit of the shift (here Z) but nothing off it, which\nthe closing remark makes explicit so beginners do not overclaim uniqueness on\nall of R. Techniques: direct substitution, induction on n. Common failure\nmode: asserting f(x) = 2x+1 for all real x. Difficulty 1 — the intended first\nexercise after seeing the definition of a functional equation; suitable for\n\"easiest functional equations you have\" queries."
---

# Funkcija koja raste za dva

Funkcija $f \colon \mathbb{R} \to \mathbb{R}$ zadovoljava

$$
f(x + 1) = f(x) + 2 \quad \text{za svaki } x \in \mathbb{R},
$$

i vrijedi $f(0) = 1$.

a) Odredite $f(1)$, $f(2)$ i $f(3)$.

b) Dokažite da je $f(n) = 2n + 1$ za svaki prirodni broj $n$.

c) Odredite $f(-1)$.
