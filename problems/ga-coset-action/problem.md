# The left-multiplication action on cosets

Let $G$ be a group, $H \le G$ a subgroup, and let $G/H$ denote the set of
left cosets $\{xH : x \in G\}$. For $g \in G$ define a map

$$\lambda_g : G/H \to G/H, \qquad \lambda_g(xH) = (gx)H.$$

**(a)** Show that $\lambda_g$ is well defined: if $xH = yH$, then
$(gx)H = (gy)H$.

**(b)** Show that $g \cdot xH := \lambda_g(xH)$ defines an action of $G$
on the set $G/H$, and that each $\lambda_g$ is a bijection of $G/H$.

**(c)** Show that this action is transitive: for any two cosets
$xH, yH$ there is a $g \in G$ with $g \cdot xH = yH$.

**(d)** Determine the stabilizer of the coset $xH$, and in particular of
the coset $eH = H$.

**(e)** Conclude: every subgroup of index $n$ in $G$ is the stabilizer of
a point in some transitive action of $G$ on a set with $n$ elements.
