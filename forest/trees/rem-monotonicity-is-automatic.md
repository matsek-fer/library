---
id: "rem-monotonicity-is-automatic"
taxon: "remark"
title: "Monotonicity comes free, and each adjoint determines the other"
teaches: []
requires: [partial-orders]
language: "en"
digested_from: "blog/pf-galois-connections-everywhere"
standalone: true
depends: [def-galois-connection]
---

# Monotonicity comes free, and each adjoint determines the other

Textbook definitions of a Galois connection usually ask for a pair of
**monotone** maps $f \colon P \to Q$, $g \colon Q \to P$ between posets
satisfying $f(p) \le q \iff p \le g(q)$ ([[def-galois-connection]]).
Two small observations save work.

**Monotonicity is redundant.** Suppose only the equivalence holds, and
let $p \le p'$ in $P$. From $f(p') \le f(p')$ the equivalence gives
$p' \le g(f(p'))$, so $p \le p' \le g(f(p'))$, and reading the
equivalence the other way gives $f(p) \le f(p')$. So $f$ is monotone;
the argument for $g$ is the mirror image. In practice this means a
candidate pair needs only the equivalence checked, never three separate
properties.

**Each adjoint determines the other.** For $q \in Q$,
$$\{\, p \in P : f(p) \le q \,\} = \{\, p \in P : p \le g(q) \,\},$$
and the right-hand set is the set of elements below $g(q)$, which has
$g(q)$ as its greatest element. So
$$g(q) = \max \{\, p \in P : f(p) \le q \,\},$$
and symmetrically $f(p) = \min \{\, q \in Q : p \le g(q) \,\}$. An
adjoint is therefore unique when it exists: two right adjoints of the
same $f$ agree at every $q$, because both equal that maximum.

This is why "does this map have an adjoint?" is a sharper question than
it looks — the candidate is forced, and the only thing left to check is
whether the maximum in question exists.
