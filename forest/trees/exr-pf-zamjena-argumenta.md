---
id: "exr-pf-zamjena-argumenta"
taxon: "exercise"
title: "Dvije jednadžbe iz jedne zamjene"
teaches: [functional-equations]
requires: [functions]
language: "hr"
digested_from: "problem/pf-zamjena-argumenta"
standalone: true
depends: []
x_annotation: "A beginner functional equation solved by the involution-substitution trick:\nin f(x) + 2 f(1-x) = 3x^2 the map x -> 1-x is an involution, so substituting\nit yields a second equation in the same two unknown values f(x) and f(1-x),\nand for each fixed x the pair is solved as a 2x2 linear system, giving\nf(x) = x^2 - 4x + 2.\n\nAbstract principle instantiated: when the arguments appearing in a functional\nequation are permuted by an involution, one substitution closes the system —\nthe functional equation reduces pointwise to linear algebra. The solution\nalso models the verify-the-candidate step: eliminating from the system proves\nuniqueness, and only substitution back into the original equation proves\nexistence. Techniques: substitution by an involution, solving a linear\nsystem, verification. Common failure modes: substituting a second time hoping\nfor a third independent equation, or skipping the final check. Difficulty 2 —\nthe standard second exercise in functional equations, one step past pure\nvalue-chasing; suitable for \"easiest functional equations\" queries."
---

# Dvije jednadžbe iz jedne zamjene

Odredite sve funkcije $f \colon \mathbb{R} \to \mathbb{R}$ za koje vrijedi

$$
f(x) + 2 f(1 - x) = 3x^2 \quad \text{za svaki } x \in \mathbb{R}.
$$
