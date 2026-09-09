---
id: "exr-la-diagonalizable-parameter"
taxon: "exercise"
title: "Diagonalizability with a parameter"
teaches: [diagonalization]
requires: [eigenvalues-eigenvectors]
language: "en"
digested_from: "problem/la-diagonalizable-parameter"
standalone: true
depends: []
x_annotation: "Middle rung of the diagonalization ladder: a 3x3 matrix with a parameter\nwhere the answer hinges on comparing algebraic and geometric multiplicity.\nThe characteristic polynomial gives a repeated eigenvalue for every t, yet\nthe matrix is diagonalizable for all t except one — the rank of A - 2I is\nconstant, so the eigenspace is a plane throughout, and failure occurs only\nwhen the algebraic multiplicity jumps to 3 at t = 2. Designed to break the\nreflex \"repeated eigenvalue means not diagonalizable\".\n\nTechniques: characteristic polynomial via triangular block structure,\nrank computation to get geometric multiplicity, the criterion\n\"diagonalizable iff geometric = algebraic for every eigenvalue\", assembling\nan eigenbasis from a two-dimensional eigenspace plus a simple eigenvalue.\n\nAbstract principle instantiated: diagonalizability is a statement about\neigenspace dimensions, not about the spectrum alone — the characteristic\npolynomial cannot decide it, and the kernel dimensions of A - lambda*I carry\nthe missing information.\n\nCommon failure: declaring the matrix non-diagonalizable for every t upon\nseeing the factor (2 - lambda)^2, or checking only the eigenvalue t and\nforgetting that the collision at t = 2 changes the algebraic multiplicity\nwithout changing the eigenspace."
---

# Diagonalizability with a parameter

For a real parameter $t$, consider the matrix

$$
A_t = \begin{pmatrix} 2 & 1 & 0 \\ 0 & t & 0 \\ 0 & 2 & 2 \end{pmatrix}.
$$

**(a)** Determine the eigenvalues of $A_t$, together with their algebraic
multiplicities, as functions of $t$.

**(b)** Determine **all** values of $t$ for which $A_t$ is diagonalizable
over $\mathbb{R}$. Justify both directions: why your values work and why
every other value fails.

**(c)** For $t = 3$, find an invertible $P$ and a diagonal $D$ with
$A_3 = P D P^{-1}$.
