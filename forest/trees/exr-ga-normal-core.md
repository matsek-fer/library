---
id: "exr-ga-normal-core"
taxon: "exercise"
title: "The normal core and subgroups of smallest prime index"
teaches: [action-on-cosets, kernels, normal-subgroups]
requires: [group-homomorphisms, permutation-groups, orbit-stabilizer-theorem, lagrange]
language: "en"
digested_from: "problem/ga-normal-core"
standalone: true
depends: [prp-djelovanje-kao-permutacije]
x_annotation: "Top of the coset-action ladder: the permutation representation\n$\\rho : G \\to \\mathrm{Sym}(G/H)$ induced by left multiplication on\ncosets, its kernel computed as $\\bigcap_x xHx^{-1}$, the identification\nof that kernel as the normal core (largest normal subgroup of $G$ inside\n$H$), the embedding $G/\\mathrm{core} \\hookrightarrow S_n$ giving the\ndivisibility $[G : \\ker\\rho] \\mid n!$, and the capstone: a subgroup whose\nindex is the smallest prime dividing $|G|$ is normal. Tests whether the\nsolver can convert an action into a homomorphism and read off its kernel\npointwise, run the \"largest normal subgroup\" universality argument via\nconjugation, and finish with the arithmetic pincer: $[H : N]$ divides\n$(p-1)!$ (from the $S_p$ embedding) while all its prime factors are\n$\\ge p$ (minimality of $p$), forcing $[H:N] = 1$. Techniques:\nkernel-as-intersection-of-conjugates, first isomorphism theorem plus\nLagrange in $S_n$, index multiplicativity in a tower, prime-factor\ncomparison. Instantiates the principle that representing a group on a\nsmall set severely constrains it — divisibility in $S_n$ does the work\nthat direct element manipulation cannot. Subsumes \"index 2 implies\nnormal\" as the case $p = 2$. Common failures: proving only\n$\\ker\\rho \\subseteq H$ and skipping maximality, or applying the argument\nwhen the index is not the smallest prime dividing $|G|$, where the\nconclusion fails ($S_3$ has non-normal subgroups of index 3, but the\nsmallest prime dividing 6 is 2). Difficulty 5: the hardest single\nargument in the group-actions cluster."
---

# The normal core and subgroups of smallest prime index

Let $G$ be a group and $H \le G$ a subgroup of finite index
$[G : H] = n$. The left-multiplication action of $G$ on the coset space
$G/H$ defines a map

$$\rho : G \to \mathrm{Sym}(G/H), \qquad \rho(g)(xH) = (gx)H,$$

into the symmetric group on the $n$-element set $G/H$.

**(a)** Show that $\rho$ is a group homomorphism, and that its kernel is

$$\ker \rho = \bigcap_{x \in G} xHx^{-1}.$$

**(b)** Show that $\ker \rho$ is the *largest* normal subgroup of $G$
contained in $H$: it is normal, it lies in $H$, and it contains every
normal subgroup of $G$ that lies in $H$. (This subgroup is called the
**normal core** of $H$.)

**(c)** Suppose $G$ is finite. Show that $[\,G : \ker \rho\,]$ divides
$n!$.

**(d)** Now let $G$ be finite and let $p$ be the *smallest* prime
dividing $|G|$. Prove: every subgroup $H \le G$ with $[G : H] = p$ is
normal in $G$.

**(e)** Deduce two consequences: every subgroup of index $2$ is normal
(in any finite group), and in a group of order $45$ every subgroup of
order $15$ is normal.
