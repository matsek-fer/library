---
id: "exr-la-dimenzija-rjesenja"
taxon: "exercise"
title: "Dimenzija prostora rješenja"
teaches: [rank-nullity]
requires: [vector-spaces, linear-maps]
language: "hr"
digested_from: "problem/la-dimenzija-rjesenja"
standalone: true
depends: []
x_annotation: "Looks like a routine Gaussian-elimination exercise with a parameter, but the\nquestion asked is about *dimension*, not about the solutions themselves — the\nproblem is the rank-nullity theorem in disguise. The solution space of a\nhomogeneous system is the kernel of the coefficient matrix, so its dimension\nis (number of unknowns) minus rank, and the whole case analysis reduces to\ntracking how the parameter changes the rank. Part (b) is the payoff: with\nmore unknowns than equations the rank is capped by the row count, so the\nnullity is forced positive for every parameter value — no elimination needed.\n\nTechniques: row reduction to echelon form, rank as a function of a parameter,\nnullity = n − rank, extracting a kernel basis from free variables.\n\nAbstract principle instantiated: dimension counting decides existence — a\nlinear map from a bigger space to a smaller one can never be injective, so\nunderdetermined homogeneous systems always have nontrivial solutions.\n\nCommon failure: solving the system completely for each parameter value and\nreading the dimension off the result, instead of arguing from rank; or\nanswering (b) by attempting elimination, which the problem explicitly forbids."
---

# Dimenzija prostora rješenja

Zadan je homogeni sustav linearnih jednadžbi s realnim parametrom $\alpha$:

$$
\begin{aligned}
x_1 + 2x_2 - x_3 + x_4 &= 0\\
2x_1 + 4x_2 + \alpha x_3 + 3x_4 &= 0\\
-x_1 - 2x_2 + 3x_3 &= 0
\end{aligned}
$$

**(a)** Za svaki $\alpha \in \mathbb{R}$ odredite dimenziju prostora rješenja i nađite jednu njegovu bazu.

**(b)** Postoji li $\alpha$ za koji sustav ima samo trivijalno rješenje? Odgovor obrazložite jednom rečenicom, bez ikakvog računanja.
