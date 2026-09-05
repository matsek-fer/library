Top of the coset-action ladder: the permutation representation
$\rho : G \to \mathrm{Sym}(G/H)$ induced by left multiplication on
cosets, its kernel computed as $\bigcap_x xHx^{-1}$, the identification
of that kernel as the normal core (largest normal subgroup of $G$ inside
$H$), the embedding $G/\mathrm{core} \hookrightarrow S_n$ giving the
divisibility $[G : \ker\rho] \mid n!$, and the capstone: a subgroup whose
index is the smallest prime dividing $|G|$ is normal. Tests whether the
solver can convert an action into a homomorphism and read off its kernel
pointwise, run the "largest normal subgroup" universality argument via
conjugation, and finish with the arithmetic pincer: $[H : N]$ divides
$(p-1)!$ (from the $S_p$ embedding) while all its prime factors are
$\ge p$ (minimality of $p$), forcing $[H:N] = 1$. Techniques:
kernel-as-intersection-of-conjugates, first isomorphism theorem plus
Lagrange in $S_n$, index multiplicativity in a tower, prime-factor
comparison. Instantiates the principle that representing a group on a
small set severely constrains it — divisibility in $S_n$ does the work
that direct element manipulation cannot. Subsumes "index 2 implies
normal" as the case $p = 2$. Common failures: proving only
$\ker\rho \subseteq H$ and skipping maximality, or applying the argument
when the index is not the smallest prime dividing $|G|$, where the
conclusion fails ($S_3$ has non-normal subgroups of index 3, but the
smallest prime dividing 6 is 2). Difficulty 5: the hardest single
argument in the group-actions cluster.
