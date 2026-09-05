# Proof (via Lagrange's identity)

The strategy: instead of merely bounding the difference between the two
sides, we compute it **exactly** and observe it is a sum of squares.

## The identity

**Claim (Lagrange's identity).**
$$\left(\sum_{i=1}^{n} a_i^2\right)\left(\sum_{i=1}^{n} b_i^2\right) - \left(\sum_{i=1}^{n} a_i b_i\right)^{2} \;=\; \sum_{1 \le i < j \le n} (a_i b_j - a_j b_i)^2. \tag{L}$$

**Proof of (L).** Expand each side over pairs of indices.

Left side, term by term:
$$\left(\sum_i a_i^2\right)\left(\sum_j b_j^2\right) = \sum_{i,j} a_i^2 b_j^2,
\qquad
\left(\sum_i a_i b_i\right)^{2} = \sum_{i,j} a_i b_i\, a_j b_j,$$
so
$$\text{LHS of (L)} = \sum_{i,j} \left(a_i^2 b_j^2 - a_i b_i a_j b_j\right).$$

The diagonal terms $i = j$ vanish: $a_i^2 b_i^2 - a_i b_i a_i b_i = 0$.
Each off-diagonal unordered pair $\{i, j\}$, $i < j$, contributes its two
ordered terms:
$$\left(a_i^2 b_j^2 - a_i b_i a_j b_j\right) + \left(a_j^2 b_i^2 - a_j b_j a_i b_i\right)
= a_i^2 b_j^2 - 2\, a_i b_j\, a_j b_i + a_j^2 b_i^2
= (a_i b_j - a_j b_i)^2.$$

Summing over all pairs $i < j$ gives exactly the right side of (L). $\square$

## The inequality

The right side of (L) is a sum of squares of real numbers, hence
$\ge 0$. Therefore
$$\left(\sum_i a_i b_i\right)^{2} \le \left(\sum_i a_i^2\right)\left(\sum_i b_i^2\right).$$

## The equality case

Equality holds in the inequality **iff** the sum of squares in (L) is
zero, i.e. iff
$$a_i b_j = a_j b_i \qquad \text{for all } i < j$$
(and trivially for $i = j$), which says every $2 \times 2$ "determinant"
of the pair $(a, b)$ vanishes. We show this is equivalent to linear
dependence.

**If $b = 0$:** then $a$ and $b$ are dependent ($b = 0 \cdot a$), and all
the determinants vanish; both sides of the equivalence hold.

**If $b \neq 0$:** pick $k$ with $b_k \neq 0$ and set
$\lambda = \dfrac{a_k}{b_k}$. For every $i$, the vanishing determinant
condition for the pair $\{i, k\}$ reads $a_i b_k = a_k b_i$, hence
$$a_i = \frac{a_k}{b_k}\, b_i = \lambda\, b_i,$$
so $a = \lambda b$: the vectors are dependent. Conversely, if
$a = \lambda b$ then $a_i b_j - a_j b_i = \lambda b_i b_j - \lambda b_j b_i = 0$
for all $i, j$, so equality holds in the inequality. $\blacksquare$

## Remark

Identity (L) says more than the inequality: the deficit
$\|a\|^2\|b\|^2 - \langle a, b\rangle^2$ is exactly the summed squared
area of the parallelograms spanned by the coordinate pairs — a
quantitative measure of how far $(a, b)$ is from linear dependence. This
exactness is special to the coordinate setting; the companion proof for
abstract inner product spaces must work coordinate-free.
