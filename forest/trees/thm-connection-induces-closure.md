---
id: "thm-connection-induces-closure"
taxon: "theorem"
title: "Every Galois connection induces a closure operator"
teaches: [closure-operators, galois-connections]
requires: [partial-orders]
language: "en"
digested_from: "blog/pf-galois-connections-everywhere"
standalone: true
depends: [def-galois-connection, def-closure-operator, prp-galois-round-trips]
---

# Every Galois connection induces a closure operator

Let $f \colon P \to Q$ and $g \colon Q \to P$ be a Galois connection
between posets: $f(p) \le q \iff p \le g(q)$ for all $p \in P$,
$q \in Q$ ([[def-galois-connection]]). Recall that a closure operator on
$P$ is a map that is extensive ($p \le c(p)$), monotone and idempotent
($c \circ c = c$) ([[def-closure-operator]]).

**Theorem.** The composite
$$c = g \circ f \colon P \to P$$
is a closure operator on $P$, and its closed elements — the $p$ with
$c(p) = p$ — are exactly the elements of the image $g(Q)$.

Two things are worth separating here. That $c$ is a closure operator is
a statement about $P$ alone; that its closed elements are the image of
$g$ identifies *which* elements they are, and is usually the part one
actually wants — it says the connection's "interesting" side of $P$ is a
copy of the part of $Q$ that $g$ reaches.

By symmetry the other composite $f \circ g \colon Q \to Q$ satisfies
$f(g(q)) \le q$, is monotone and idempotent: an interior operator on
$Q$, with the same fixed-point description, $f(P)$.

This one theorem is where the topological closure, the generated
subgroup, the span, the generated ideal and the deductive closure of a
set of axioms all come from — each a $g \circ f$ for a connection that
takes two lines to write down ([[exm-generated-subgroup-closure]]).

Proof: [[prf-connection-induces-closure]].
