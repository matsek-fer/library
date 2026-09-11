---
id: "rem-floor-fails-suprema"
taxon: "remark"
title: "Floor shrugs at suprema"
teaches: []
requires: [partial-orders]
language: "en"
digested_from: "blog/pf-galois-connections-everywhere"
standalone: true
depends: [exm-floor-ceiling-adjunction]
---

# Floor shrugs at suprema

The floor function $\lfloor \cdot \rfloor \colon \mathbb{R} \to
\mathbb{Z}$ is the right adjoint of the inclusion
$\mathbb{Z} \hookrightarrow \mathbb{R}$, characterized by
$n \le x \iff n \le \lfloor x \rfloor$ for every integer $n$
([[exm-floor-ceiling-adjunction]]). Being a right adjoint, it preserves
every infimum that exists. It owes nothing to suprema — and it pays
nothing.

**The counterexample.** Take
$$A = \Big\{\, 1 - \tfrac{1}{n} \ : \ n = 1, 2, 3, \dots \,\Big\}
  = \Big\{0, \tfrac12, \tfrac23, \tfrac34, \dots\Big\}.$$
Then $\sup A = 1$, so $\lfloor \sup A \rfloor = 1$. But every element of
$A$ lies in $[0, 1)$, so every floor is $0$, and
$$\sup \{\, \lfloor a \rfloor : a \in A \,\} = 0 \ne 1 .$$

One element short of the supremum, and the floor has not moved; at the
supremum it jumps. That jump is precisely the discontinuity a
sup-preserving map cannot have.

The asymmetry is not a defect of the floor function: it is the signature
of a **one-sided** adjoint. The mirror failure is instructive. Ceiling,
the left adjoint of the same inclusion, preserves suprema and fails
infima: the set $\{1 + \tfrac1n : n \ge 1\}$ has infimum $1$ with
$\lceil 1 \rceil = 1$, while every ceiling in the set equals $2$. Each
map keeps exactly the bounds its side of the adjunction obliges it to,
and neither keeps one more.

The same shrug reappears one level up, where a left adjoint functor
preserves colimits and declines to preserve limits
([[exm-abelianization-left-adjoint]]).
