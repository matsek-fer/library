---
id: "prf-an-cauchy-schwarz-inner-product"
taxon: "proof"
title: "Dokaz: Cauchy-Schwarz inequality in an inner product space via orthogonal projection"
teaches: [cauchy-schwarz]
requires: [inner-product-spaces]
language: "en"
digested_from: "proof/an-cauchy-schwarz-inner-product"
standalone: true
depends: [thm-an-cauchy-schwarz-inner-product]
proves: "thm-an-cauchy-schwarz-inner-product"
---

# Proof (via orthogonal projection)

The strategy: split $u$ into a component along $v$ and a component
orthogonal to $v$, and let positive definiteness of the inner product do
the rest. No basis, no coordinates — every step uses only the three
axioms of the inner product.

## The degenerate case

If $v = 0$, then bilinearity gives
$\langle u, 0 \rangle = \langle u, 0 + 0 \rangle = 2\langle u, 0 \rangle$,
so $\langle u, v \rangle = 0$, and $\|v\| = 0$: both sides of the
inequality are $0$. The pair $(u, 0)$ is always linearly dependent
($0 = 0 \cdot u$), so the equality case is consistent as well. Assume
from now on $v \neq 0$; positive definiteness then gives
$\|v\|^2 = \langle v, v \rangle > 0$, so we may divide by it.

## The projection

Set
$$\lambda = \frac{\langle u, v \rangle}{\|v\|^2},
\qquad w = u - \lambda v.$$

The scalar $\lambda$ is chosen precisely so that $w$ is orthogonal
to $v$:
$$\langle w, v \rangle
  = \langle u, v \rangle - \lambda \langle v, v \rangle
  = \langle u, v \rangle - \frac{\langle u, v \rangle}{\|v\|^2}\,\|v\|^2
  = 0.$$

Thus $u = \lambda v + w$ decomposes $u$ into its projection onto the
line spanned by $v$ and an orthogonal remainder.

## Pythagoras, then the inequality

Expanding $\|u\|^2$ by bilinearity and using $\langle w, v \rangle = 0$:
$$\|u\|^2 = \langle \lambda v + w,\ \lambda v + w \rangle
         = \lambda^2 \|v\|^2 + 2\lambda \underbrace{\langle w, v \rangle}_{=\,0} + \|w\|^2
         = \lambda^2 \|v\|^2 + \|w\|^2.$$

Multiply by $\|v\|^2$ and substitute $\lambda$:
$$\|u\|^2 \|v\|^2
  = \lambda^2 \|v\|^4 + \|w\|^2 \|v\|^2
  = \langle u, v \rangle^2 + \|w\|^2 \|v\|^2. \tag{P}$$

Since $\|w\|^2 \ge 0$ (positive semidefiniteness of the form on the
remainder) and $\|v\|^2 > 0$, the second summand is nonnegative, hence
$$\langle u, v \rangle^2 \le \|u\|^2 \|v\|^2,$$
and taking square roots gives $|\langle u, v \rangle| \le \|u\|\,\|v\|$.

## The equality case

By (P), equality holds **iff** $\|w\|^2 \|v\|^2 = 0$, and since
$\|v\|^2 > 0$, iff $\|w\| = 0$. Positive definiteness upgrades this to
$w = 0$, i.e.
$$u = \lambda v,$$
so $u$ and $v$ are linearly dependent. Conversely, suppose $u$ and $v$
are dependent with $v \neq 0$; then $u = \mu v$ for some scalar $\mu$
(if instead $v = \mu u$, then $\mu \neq 0$ because $v \neq 0$, and
$u = \tfrac{1}{\mu} v$). Then
$$|\langle u, v \rangle| = |\mu|\,\|v\|^2 = \|\mu v\|\,\|v\| = \|u\|\,\|v\|,$$
so equality holds. Together with the degenerate case this proves the
full statement. $\blacksquare$

## Remark

Identity (P) is this proof's quantitative bonus: the deficit
$\|u\|^2\|v\|^2 - \langle u, v \rangle^2$ equals $\|w\|^2\|v\|^2$ — the
squared area of the parallelogram spanned by $u$ and $v$, expressed
through the orthogonal remainder rather than through coordinates. In
$\mathbb{R}^n$ this quantity agrees with the sum of squared $2 \times 2$
minors from Lagrange's identity (companion bundle
`proof/an-cauchy-schwarz-rn`), but the present argument never mentions a
coordinate, which is why it survives unchanged in any inner product
space — including infinite-dimensional ones like $C[0,1]$ with
$\langle f, g \rangle = \int_0^1 fg$, where "expand over index pairs"
has no meaning. In a complex inner product space the same argument runs
with $\lambda = \langle u, v \rangle / \|v\|^2$ and sesquilinearity; the
cross term becomes $2\,\mathrm{Re}\,\overline{\lambda}\langle u, v \rangle$
and the conclusion is $|\langle u, v \rangle| \le \|u\|\,\|v\|$ verbatim.
