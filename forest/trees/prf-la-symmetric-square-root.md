---
id: "prf-la-symmetric-square-root"
taxon: "proof"
title: "Rješenje: The symmetric square root"
teaches: [spectral-theorem]
requires: [diagonalization, inner-product-spaces]
language: "en"
digested_from: "problem/la-symmetric-square-root"
standalone: true
depends: [exr-la-symmetric-square-root]
proves: "exr-la-symmetric-square-root"
---

# Solution

The engine of the whole problem is the **spectral theorem**: every real
symmetric matrix has real eigenvalues and an orthonormal basis of
eigenvectors, i.e. $M = Q \Lambda Q^{\mathsf T}$ with $Q$ orthogonal and
$\Lambda$ diagonal.

## (a) A concrete square root

Let $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. Its characteristic
polynomial is $(2-\lambda)^2 - 1 = (\lambda - 1)(\lambda - 3)$, so the
eigenvalues are $1$ and $3$, with orthonormal eigenvectors

$$
q_1 = \tfrac{1}{\sqrt 2}(1, -1) \ (\lambda = 1), \qquad
q_2 = \tfrac{1}{\sqrt 2}(1, 1) \ (\lambda = 3).
$$

Writing $A = Q \operatorname{diag}(1, 3) Q^{\mathsf T}$ with
$Q = \frac{1}{\sqrt2}\begin{pmatrix} 1 & 1 \\ -1 & 1\end{pmatrix}$, take
square roots on the diagonal:

$$
B = Q \operatorname{diag}(1, \sqrt 3)\, Q^{\mathsf T}
= \frac{1}{2}\begin{pmatrix} \sqrt 3 + 1 & \sqrt 3 - 1 \\ \sqrt 3 - 1 & \sqrt 3 + 1 \end{pmatrix}.
$$

Check: $B$ is symmetric, its eigenvalues $1$ and $\sqrt 3$ are positive
(so $B$ is positive semidefinite — see the eigenvalue criterion in (b)),
and $B^2 = Q \operatorname{diag}(1, 3) Q^{\mathsf T} = A$.

## (b) Eigenvalues and existence in general

**Eigenvalues are nonnegative.** By the spectral theorem the eigenvalues of
$A$ are real. If $Av = \lambda v$ with $v \neq 0$, then

$$
0 \le v^{\mathsf T} A v = \lambda\, v^{\mathsf T} v = \lambda \lVert v \rVert^2,
$$

and $\lVert v \rVert^2 > 0$ forces $\lambda \ge 0$.

(The same computation read backwards shows: a symmetric matrix whose
eigenvalues are all $\ge 0$ is positive semidefinite, since for
$x = \sum_i c_i q_i$ in an orthonormal eigenbasis,
$x^{\mathsf T} A x = \sum_i \lambda_i c_i^2 \ge 0$. We use this criterion
freely below.)

**Existence.** Write $A = Q \Lambda Q^{\mathsf T}$ with $Q$ orthogonal and
$\Lambda = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$,
$\lambda_i \ge 0$. Define

$$
B = Q\, \operatorname{diag}\!\bigl(\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n}\bigr)\, Q^{\mathsf T}.
$$

Then $B^{\mathsf T} = B$ (conjugating a diagonal matrix by an orthogonal
one preserves symmetry), the eigenvalues of $B$ are the
$\sqrt{\lambda_i} \ge 0$ so $B$ is positive semidefinite by the criterion
above, and

$$
B^2 = Q\, \operatorname{diag}(\sqrt{\lambda_i})\, Q^{\mathsf T} Q\, \operatorname{diag}(\sqrt{\lambda_i})\, Q^{\mathsf T}
= Q \Lambda Q^{\mathsf T} = A,
$$

using $Q^{\mathsf T} Q = I$.

## (c) Uniqueness

The trick is to realize the square root as a **polynomial in $A$**, which
makes it independent of every choice made in (b).

Let $\lambda_1, \dots, \lambda_k$ be the *distinct* eigenvalues of $A$
(all $\ge 0$ by (b)). Choose a real polynomial $p$ with

$$
p(\lambda_j) = \sqrt{\lambda_j}, \qquad j = 1, \dots, k
$$

— for instance the Lagrange interpolation polynomial through the $k$
points, which exists because the $\lambda_j$ are distinct.

**Claim: every symmetric positive semidefinite $C$ with $C^2 = A$ equals
$p(A)$.**

By the spectral theorem, $C = U M U^{\mathsf T}$ with $U$ orthogonal and
$M = \operatorname{diag}(\mu_1, \dots, \mu_n)$, where $\mu_i \ge 0$ since
$C$ is positive semidefinite. Then

$$
A = C^2 = U M^2 U^{\mathsf T},
$$

so each $\mu_i^2$ is an eigenvalue of $A$, i.e. $\mu_i^2 \in \{\lambda_1,
\dots, \lambda_k\}$ for every $i$. Now evaluate $p$ on $A$ in the
$U$-coordinates: since $A = U M^2 U^{\mathsf T}$ and conjugation commutes
with polynomials ($p(UXU^{\mathsf T}) = U p(X) U^{\mathsf T}$),

$$
p(A) = U\, p(M^2)\, U^{\mathsf T}
= U\, \operatorname{diag}\!\bigl(p(\mu_1^2), \dots, p(\mu_n^2)\bigr)\, U^{\mathsf T}.
$$

For each $i$, $\mu_i^2$ is one of the interpolation nodes, so
$p(\mu_i^2) = \sqrt{\mu_i^2} = \mu_i$ — the last equality because
$\mu_i \ge 0$. Hence

$$
p(A) = U M U^{\mathsf T} = C.
$$

The claim applies to both $B$ and $C$: $B = p(A) = C$. $\blacksquare$

**Where positivity was essential.** The step $\sqrt{\mu_i^2} = \mu_i$ fails
for negative $\mu_i$ — and indeed uniqueness is false without the
semidefiniteness requirement on the root: already $I_2$ has the symmetric
square roots $\pm I_2$ and $\operatorname{diag}(1, -1)$, among infinitely
many others. Positivity of the *root* is what pins it down.
