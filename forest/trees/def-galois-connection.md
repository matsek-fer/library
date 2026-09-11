---
id: "def-galois-connection"
taxon: "definition"
title: "Galois connection"
teaches: [galois-connections]
requires: [partial-orders]
language: "en"
digested_from: "blog/pf-galois-connections-everywhere"
standalone: true
depends: []
---

# Galois connection

Let $(P, \le)$ and $(Q, \le)$ be partially ordered sets — the same
symbol $\le$ is used for both orders, and which one is meant is always
fixed by where the elements live.

**Definition.** A **Galois connection** between $P$ and $Q$ is a pair of
maps $f \colon P \to Q$ and $g \colon Q \to P$ such that
$$f(p) \le q \iff p \le g(q)
  \qquad \text{for all } p \in P, \ q \in Q .$$

We call $f$ the **lower** (or **left**) adjoint and $g$ the **upper**
(or **right**) adjoint, and write $f \dashv g$.

The equivalence says the two maps answer each other's questions: any
question about $f(p)$ from above is a question about $p$ from below
under $g$. It is the whole content of the definition — everything else
in the theory is squeezed out of this one line.

Two immediate comments, both worth stating before any example:

- **Monotonicity is not an extra hypothesis.** It is often included in
  the definition, but the equivalence already forces both maps to be
  monotone, and it also pins each adjoint down from the other; see
  [[rem-monotonicity-is-automatic]].
- **Order matters, both of them.** Swapping $f$ and $g$ generally
  destroys the equivalence: $f \dashv g$ is a directed relationship, not
  a symmetric one.

There is also an **antitone** (order-reversing) variant, in which both
maps reverse order and the defining equivalence reads
$q \le f(p) \iff p \le g(q)$. It is the same notion after turning one of
the two posets upside down, and it is the form Galois theory itself
takes ([[exm-galois-correspondence-fields]]).

What the definition buys: [[prp-galois-round-trips]],
[[thm-adjoints-preserve-bounds]], [[thm-connection-induces-closure]].
