# Solution

## (a) The stabilizer

An element $h \in H$ stabilizes $gK$ iff $(hg)K = gK$, which by the coset
criterion holds iff $g^{-1}hg \in K$, i.e. iff $h \in gKg^{-1}$. Since we
also require $h \in H$,

$$\mathrm{Stab}_H(gK) = H \cap gKg^{-1}.$$

(This is the stabilizer $gKg^{-1}$ from the full $G$-action, intersected
with the acting subgroup $H$ — restricting an action intersects its
stabilizers.)

## (b) The orbit size

The orbit–stabilizer theorem for the action of the finite group $H$ says

$$|\mathrm{Orb}_H(gK)| = [\,H : \mathrm{Stab}_H(gK)\,]
  = [\,H : H \cap gKg^{-1}\,],$$

using part (a). Note the orbit size is an index in $H$, not in $G$ — only
the acting group matters.

## (c) Double cosets and their size

A coset lies in the orbit of $gK$ iff it has the form $(hg)K$ for some
$h \in H$. The union of these cosets is

$$\bigcup_{h \in H} (hg)K = \{hgk : h \in H,\ k \in K\} = HgK.$$

The cosets in the orbit are pairwise disjoint (distinct cosets of $K$
always are) and each has $|K|$ elements, so

$$|HgK| = |\mathrm{Orb}_H(gK)| \cdot |K|
  = [\,H : H \cap gKg^{-1}\,] \cdot |K|
  = \frac{|H|}{|H \cap gKg^{-1}|} \cdot |K|,$$

where the last step writes the index as a quotient of orders (Lagrange
applied inside $H$). This is the claimed formula.

## (d) The product formula and a factorization criterion

For $g = e$ we get $HeK = HK$ and $H \cap eKe^{-1} = H \cap K$, so

$$|HK| = \frac{|H| \cdot |K|}{|H \cap K|}.$$

Now assume $|H||K| = |G|$ and $\gcd(|H|,|K|) = 1$. The subgroup
$H \cap K$ has order dividing both $|H|$ and $|K|$ (Lagrange), hence
dividing their gcd, so $|H \cap K| = 1$. The product formula gives

$$|HK| = |H||K| = |G|,$$

and since $HK \subseteq G$, this forces $HK = G$: every element of $G$ is
a product $hk$.

Uniqueness: if $h_1k_1 = h_2k_2$, then $h_2^{-1}h_1 = k_2k_1^{-1}$ lies
in $H \cap K = \{e\}$, so $h_1 = h_2$ and $k_1 = k_2$. Thus the
multiplication map $H \times K \to G$, $(h,k) \mapsto hk$, is a
bijection.
