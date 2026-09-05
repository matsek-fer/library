# Solution

## (a) Eigenvalues

Expanding $\det(A_t - \lambda I)$ along the first column (the matrix is
block upper triangular after a glance at column 1 and row 2):

$$
\det(A_t - \lambda I) = (2 - \lambda)\,(t - \lambda)\,(2 - \lambda)
= (2-\lambda)^2 (t - \lambda).
$$

- If $t \neq 2$: eigenvalues are $2$ with algebraic multiplicity $2$, and
  $t$ with algebraic multiplicity $1$.
- If $t = 2$: the single eigenvalue $2$ with algebraic multiplicity $3$.

## (b) Diagonalizability

$A_t$ is diagonalizable iff for every eigenvalue the geometric multiplicity
equals the algebraic one. Only the eigenvalue $2$ can cause trouble, so we
compute the rank of

$$
A_t - 2I = \begin{pmatrix} 0 & 1 & 0 \\ 0 & t-2 & 0 \\ 0 & 2 & 0 \end{pmatrix}.
$$

Every row is a multiple of $(0, 1, 0)$, and the first row is nonzero, so
$\operatorname{rank}(A_t - 2I) = 1$ **for every** $t$. Hence the eigenspace
for $2$ has dimension $3 - 1 = 2$, for every $t$.

**Case $t \neq 2$.** The eigenvalue $2$ contributes $2$ independent
eigenvectors (geometric $=$ algebraic $= 2$), and the simple eigenvalue $t$
contributes $1$ more; $2 + 1 = 3$ independent eigenvectors, so $A_t$ **is**
diagonalizable.

**Case $t = 2$.** The algebraic multiplicity of $2$ is now $3$, but its
geometric multiplicity is still $2 < 3$. Eigenvectors span only a plane,
no eigenbasis exists, and $A_2$ is **not** diagonalizable.

**Conclusion:** $A_t$ is diagonalizable exactly for $t \neq 2$.

Note the twist: the repeated eigenvalue is harmless for every $t \neq 2$ —
repetition alone does not obstruct diagonalization. What breaks at $t = 2$
is that the algebraic multiplicity grows to $3$ while the eigenspace stays
two-dimensional.

## (c) Diagonalizing $A_3$

For $t = 3$ the eigenvalues are $2, 2, 3$.

**Eigenspace for $2$:** $A_3 - 2I$ has rows proportional to $(0,1,0)$, so
the eigenspace is $\{y = 0\}$ with basis

$$
v_1 = (1, 0, 0), \qquad v_2 = (0, 0, 1).
$$

**Eigenspace for $3$:** solve $(A_3 - 3I)v = 0$:

$$
\begin{pmatrix} -1 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 2 & -1 \end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix} = 0
\;\Longrightarrow\; y = x,\ z = 2y = 2x,
$$

giving $v_3 = (1, 1, 2)$.

Therefore

$$
P = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 0 & 1 \\ 0 & 1 & 2 \end{pmatrix}, \qquad
D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix},
$$

and a direct check confirms $A_3 P = P D$ column by column:
$A_3 v_1 = 2v_1$, $A_3 v_2 = 2v_2$, $A_3 v_3 = (3, 3, 6) = 3 v_3$.
Since the columns of $P$ are three independent eigenvectors, $P$ is
invertible and $A_3 = P D P^{-1}$.
