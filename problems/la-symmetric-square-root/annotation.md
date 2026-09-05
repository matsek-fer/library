Top rung of the diagonalization ladder, and it genuinely needs the spectral
theorem — plain diagonalizability is not enough. Existence of a positive
semidefinite square root uses the orthonormal eigenbasis of a symmetric
matrix (take square roots of the eigenvalues inside Q Lambda Q^T);
uniqueness is the hard part and uses the spectral theorem a second time, on
the candidate root itself: any symmetric PSD root C diagonalizes
orthogonally, its eigenvalues square to eigenvalues of A, and an
interpolating polynomial p with p(lambda) = sqrt(lambda) on the spectrum of
A forces C = p(A), the same matrix for every root. A concrete 2x2 warm-up
grounds the construction before the general argument.

Techniques: orthogonal diagonalization, eigenvalue criterion for positive
semidefiniteness (lambda = x^T A x / |x|^2 on eigenvectors), functional
calculus via Lagrange interpolation on the spectrum, conjugation commuting
with polynomials, counterexample construction showing where a hypothesis
bites (indefinite square roots of the identity).

Abstract principle instantiated: the spectral theorem turns operator
equations into scalar equations on the spectrum — a well-defined function of
a symmetric matrix is a polynomial in it, which is the finite-dimensional
germ of functional calculus and the reason the PSD square root, unlike a
general square root, is canonical.

Common failure: proving existence and then asserting uniqueness "by
construction", which only shows the construction is deterministic — the
actual content is that an arbitrary root, built from a possibly different
eigenbasis, coincides with it; also forgetting that uniqueness fails
entirely once the positivity requirement on the root is dropped.
