# Solution

## (a) The homomorphism and its kernel

Write $\lambda_g = \rho(g)$. Each $\lambda_g$ is well defined and a
bijection of $G/H$, and $\lambda_{g_1} \circ \lambda_{g_2} =
\lambda_{g_1g_2}$: indeed

$$\lambda_{g_1}(\lambda_{g_2}(xH)) = (g_1(g_2x))H = ((g_1g_2)x)H
  = \lambda_{g_1g_2}(xH).$$

So $\rho(g_1g_2) = \rho(g_1)\rho(g_2)$ and $\rho$ is a homomorphism into
$\mathrm{Sym}(G/H)$.

An element $g$ lies in $\ker \rho$ iff $\lambda_g$ is the identity
permutation, i.e. iff $(gx)H = xH$ for **every** $x \in G$. By the coset
criterion, $(gx)H = xH \iff x^{-1}gx \in H \iff g \in xHx^{-1}$.
Requiring this for all $x$ gives exactly

$$\ker \rho = \bigcap_{x \in G} xHx^{-1}.$$

## (b) Largest normal subgroup inside H

Write $N = \ker \rho$.

*Normal:* kernels of homomorphisms are always normal.

*Contained in $H$:* the intersection defining $N$ includes the term with
$x = e$, namely $eHe^{-1} = H$, so $N \le H$.

*Largest:* let $M \trianglelefteq G$ with $M \le H$. For any $x \in G$,
normality gives $M = xMx^{-1} \le xHx^{-1}$. As this holds for every
$x$, $M$ lies in the intersection: $M \le N$.

So $N$ is a normal subgroup of $G$ inside $H$ containing all others —
the normal core of $H$.

## (c) The index of the core divides n!

By the first isomorphism theorem (or directly: $\rho$ induces an
injective homomorphism $G/\ker\rho \hookrightarrow \mathrm{Sym}(G/H)$),
the quotient $G/\ker\rho$ is isomorphic to a subgroup of
$\mathrm{Sym}(G/H) \cong S_n$. By Lagrange's theorem its order divides
$|S_n| = n!$:

$$[\,G : \ker\rho\,] \;\big|\; n!.$$

## (d) Index equal to the smallest prime forces normality

Let $[G : H] = p$, the smallest prime dividing $|G|$, and let
$N = \ker\rho \le H$ be the core. The index is multiplicative in the
tower $N \le H \le G$:

$$[\,G : N\,] = [\,G : H\,] \cdot [\,H : N\,] = p \cdot [\,H : N\,].$$

By part (c), $[G : N]$ divides $p!$, so $p \cdot [H : N]$ divides
$p! = p \cdot (p-1)!$, hence

$$[\,H : N\,] \;\big|\; (p-1)!.$$

On the other hand $[H : N]$ divides $|G|$ (it divides $[G:N]$, which
divides $|G|$ by Lagrange). Suppose $[H : N] > 1$ and let $q$ be a prime
dividing it. Then $q$ divides $|G|$, so $q \ge p$ by minimality of $p$.
But $q$ also divides $(p-1)!$, and every prime factor of $(p-1)!$ is at
most $p - 1$ — contradiction. Therefore $[H : N] = 1$, i.e. $H = N =
\ker\rho$, which is normal in $G$. $\blacksquare$

## (e) Consequences

*Index 2:* the prime $2$ is the smallest prime full stop, so whenever
$[G : H] = 2$ (which forces $2 \mid |G|$), $2$ is the smallest prime
dividing $|G|$, and (d) applies: $H \trianglelefteq G$.

*Order 45:* if $|G| = 45 = 3^2 \cdot 5$ and $|H| = 15$, then
$[G : H] = 45/15 = 3$, and $3$ is the smallest prime dividing $45$
(the only smaller prime, $2$, does not divide $45$). By (d),
$H \trianglelefteq G$.
