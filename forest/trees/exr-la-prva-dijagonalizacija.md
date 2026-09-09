---
id: "exr-la-prva-dijagonalizacija"
taxon: "exercise"
title: "Prva dijagonalizacija"
teaches: [eigenvalues-eigenvectors, diagonalization]
requires: [vector-spaces, linear-maps]
language: "hr"
digested_from: "problem/la-prva-dijagonalizacija"
standalone: true
depends: []
x_annotation: "Entry rung of the diagonalization ladder: a 2x2 matrix with two distinct real\neigenvalues, done end to end. The solver computes the characteristic\npolynomial, factors it, solves each singular system for an eigenvector,\nassembles P and D, and verifies AP = PD. Nothing is disguised — this is the\nfirst exercise after the definitions, calibrating the mechanics before the\ncriteria (algebraic vs geometric multiplicity) and the spectral theorem\nappear higher on the ladder.\n\nTechniques: characteristic polynomial of a 2x2 matrix, solving (A - lambda I)v\n= 0, building P column-by-column with D's diagonal in matching order,\nverifying via AP = PD instead of inverting P.\n\nAbstract principle instantiated: diagonalization is a change of basis to an\neigenbasis — the matrix becomes the list of its eigenvalues once coordinates\nare chosen along invariant directions.\n\nCommon failure: mismatching the order of eigenvectors in P against the order\nof eigenvalues in D, or skipping the AP = PD check that would catch exactly\nthat mistake."
---

# Prva dijagonalizacija

Zadana je matrica

$$
A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}.
$$

**(a)** Odredite sve svojstvene vrijednosti matrice $A$.

**(b)** Za svaku svojstvenu vrijednost odredite pripadni svojstveni vektor.

**(c)** Napišite dijagonalnu matricu $D$ i regularnu matricu $P$ takve da je
$A = P D P^{-1}$, te provjerite svoj rezultat tako da izračunate $AP$ i $PD$.
