---
id: "thm-ga-lagrange-particija"
taxon: "theorem"
title: "Lagrangeov teorem: dokaz preko particije na kosete"
teaches: [lagrange]
requires: [subgroups, cosets, index]
language: "hr"
digested_from: "proof/ga-lagrange-particija"
standalone: true
depends: []
x_annotation: "The classical coset-partition proof of Lagrange's theorem, written for a\nreader who has just met the definition of a coset. Structure: define the\nequivalence relation $x \\sim y \\iff x^{-1}y \\in H$, check reflexivity,\nsymmetry and transitivity directly from the subgroup axioms (identity,\ninverses, closure — each axiom powering exactly one property), identify\nthe equivalence classes as the left cosets, then show every coset has\n$|H|$ elements via the bijection $h \\mapsto gh$ whose injectivity is\nleft cancellation. Counting the partition gives\n$|G| = [G:H] \\cdot |H|$. Techniques: equivalence relation from a\nsubgroup, bijection by translation, counting a set by tiling it with\nequal-sized pieces. Instantiates the principle that a subgroup induces a\npartition of the group into translates of itself, so the subgroup's size\ndivides the whole. Introductory difficulty: every step is a one-line\nverification, no actions, no quotients. Pairs with the group-action\nproof of the same theorem (proof/ga-lagrange-djelovanje) as two\ngenuinely different arguments for one statement — this one is the\nhands-on, first-encounter version."
---

# Lagrangeov teorem

**Teorem (Lagrange).** Neka je $G$ konačna grupa i $H \le G$ njezina
podgrupa. Tada $|H|$ dijeli $|G|$; preciznije,

$$|G| = [G : H] \cdot |H|,$$

gdje je $[G : H]$ broj lijevih koseta podgrupe $H$ u $G$.
