---
id: "exm-floor-ceiling-adjunction"
taxon: "example"
title: "Floor and ceiling as the two adjoints of Z into R"
teaches: [galois-connections]
requires: [partial-orders]
language: "en"
digested_from: "blog/pf-galois-connections-everywhere"
standalone: true
depends: [def-galois-connection, thm-adjoints-preserve-bounds]
---

# Floor and ceiling as the two adjoints of Z into R

The smallest interesting Galois connection. Recall the definition: maps
$f \colon P \to Q$, $g \colon Q \to P$ between posets with
$f(p) \le q \iff p \le g(q)$, $f$ lower adjoint, $g$ upper adjoint
([[def-galois-connection]]).

Take the posets $(\mathbb{Z}, \le)$ and $(\mathbb{R}, \le)$ and the
inclusion $\iota \colon \mathbb{Z} \hookrightarrow \mathbb{R}$.

## Floor is the right adjoint of the inclusion

Asking for a right adjoint of $\iota$ means asking: for a real $x$,
which integer $g(x)$ satisfies
$$\iota(n) \le x \iff n \le g(x) \qquad \text{for every integer } n?$$
The integers below $x$ are exactly the integers below its integer part,
so the answer is $g = \lfloor \cdot \rfloor$, and
$$n \le x \iff n \le \lfloor x \rfloor$$
**is** the floor function — one equivalence in place of a case-by-case
definition. So $\iota \dashv \lfloor \cdot \rfloor$.

## Ceiling is the left adjoint of the inclusion

Symmetrically, ask which map $f \colon \mathbb{R} \to \mathbb{Z}$
satisfies $f(x) \le n \iff x \le \iota(n)$ for every integer $n$. The
answer is the ceiling:
$$\lceil x \rceil \le n \iff x \le n,$$
so $\lceil \cdot \rceil \dashv \iota$. The same inclusion is thus a
right adjoint on one side and a left adjoint on the other; that is
possible because the two connections are different pairs, not one pair
read backwards.

## What the preservation theorem pays out

Floor is a right adjoint, so it preserves every infimum that exists
([[thm-adjoints-preserve-bounds]]):
$$\Big\lfloor \min(x, y) \Big\rfloor
  = \min\big(\lfloor x \rfloor, \lfloor y \rfloor\big),$$
and likewise $\lfloor \inf A \rfloor = \inf \{\lfloor a \rfloor : a \in
A\}$ for any $A \subseteq \mathbb{R}$ whose infimum exists. Ceiling, a
left adjoint, preserves suprema:
$\lceil \max(x,y) \rceil = \max(\lceil x \rceil, \lceil y \rceil)$.

Neither identity needs a case analysis on fractional parts; both are the
one-line theorem instantiated. What floor does *not* owe to suprema is
the subject of [[rem-floor-fails-suprema]].
