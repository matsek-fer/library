---
id: "prf-la-prva-dijagonalizacija"
taxon: "proof"
title: "Rješenje: Prva dijagonalizacija"
teaches: [eigenvalues-eigenvectors, diagonalization]
requires: [vector-spaces, linear-maps]
language: "hr"
digested_from: "problem/la-prva-dijagonalizacija"
standalone: true
depends: [exr-la-prva-dijagonalizacija]
proves: "exr-la-prva-dijagonalizacija"
---

# Rješenje

## (a) Svojstvene vrijednosti

Karakteristični polinom:

$$
\det(A - \lambda I)
= \det \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix}
= (4-\lambda)(3-\lambda) - 2
= \lambda^2 - 7\lambda + 10
= (\lambda - 2)(\lambda - 5).
$$

Svojstvene vrijednosti su $\lambda_1 = 2$ i $\lambda_2 = 5$.

## (b) Svojstveni vektori

**Za $\lambda_1 = 2$:** rješavamo $(A - 2I)v = 0$, tj.

$$
\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}
\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
\;\Longrightarrow\; 2x + y = 0.
$$

Uzmimo $x = 1$, $y = -2$: svojstveni vektor je $v_1 = (1, -2)$.

**Za $\lambda_2 = 5$:** rješavamo $(A - 5I)v = 0$, tj.

$$
\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}
\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
\;\Longrightarrow\; x = y.
$$

Uzmimo $v_2 = (1, 1)$.

## (c) Matrice $P$ i $D$ te provjera

Stupci matrice $P$ su svojstveni vektori, a $D$ na dijagonali nosi
odgovarajuće svojstvene vrijednosti **istim redom**:

$$
P = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}, \qquad
D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}.
$$

Kako je $\det P = 1 \cdot 1 - 1 \cdot (-2) = 3 \neq 0$, matrica $P$ je
regularna, pa je $A = P D P^{-1}$ ekvivalentno s $AP = PD$. Provjera:

$$
AP = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}
\begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}
= \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}, \qquad
PD = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}
\begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}
= \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}.
$$

Matrice se podudaraju, dakle $A = P D P^{-1}$ uz

$$
P^{-1} = \frac{1}{3}\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}.
$$
