---
id: "exr-la-symmetric-square-root"
taxon: "exercise"
title: "The symmetric square root"
teaches: [spectral-theorem]
requires: [diagonalization, inner-product-spaces]
language: "en"
digested_from: "problem/la-symmetric-square-root"
standalone: true
depends: []
x_annotation: "Top rung of the diagonalization ladder, and it genuinely needs the spectral\ntheorem — plain diagonalizability is not enough. Existence of a positive\nsemidefinite square root uses the orthonormal eigenbasis of a symmetric\nmatrix (take square roots of the eigenvalues inside Q Lambda Q^T);\nuniqueness is the hard part and uses the spectral theorem a second time, on\nthe candidate root itself: any symmetric PSD root C diagonalizes\northogonally, its eigenvalues square to eigenvalues of A, and an\ninterpolating polynomial p with p(lambda) = sqrt(lambda) on the spectrum of\nA forces C = p(A), the same matrix for every root. A concrete 2x2 warm-up\ngrounds the construction before the general argument.\n\nTechniques: orthogonal diagonalization, eigenvalue criterion for positive\nsemidefiniteness (lambda = x^T A x / |x|^2 on eigenvectors), functional\ncalculus via Lagrange interpolation on the spectrum, conjugation commuting\nwith polynomials, counterexample construction showing where a hypothesis\nbites (indefinite square roots of the identity).\n\nAbstract principle instantiated: the spectral theorem turns operator\nequations into scalar equations on the spectrum — a well-defined function of\na symmetric matrix is a polynomial in it, which is the finite-dimensional\ngerm of functional calculus and the reason the PSD square root, unlike a\ngeneral square root, is canonical.\n\nCommon failure: proving existence and then asserting uniqueness \"by\nconstruction\", which only shows the construction is deterministic — the\nactual content is that an arbitrary root, built from a possibly different\neigenbasis, coincides with it; also forgetting that uniqueness fails\nentirely once the positivity requirement on the root is dropped."
---

# The symmetric square root

Call a real symmetric $n \times n$ matrix $M$ *positive semidefinite* if
$x^{\mathsf T} M x \ge 0$ for every $x \in \mathbb{R}^n$.

**(a)** Find a symmetric positive semidefinite matrix $B$ with

$$
B^2 = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}.
$$

**(b)** Let $A$ be any real symmetric positive semidefinite $n \times n$
matrix. Prove that all eigenvalues of $A$ are nonnegative, and that there
exists a symmetric positive semidefinite $B$ with $B^2 = A$.

**(c)** Prove that the matrix $B$ from (b) is **unique**: if $B$ and $C$
are both symmetric positive semidefinite with $B^2 = C^2 = A$, then
$B = C$.
