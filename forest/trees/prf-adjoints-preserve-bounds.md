---
id: "prf-adjoints-preserve-bounds"
taxon: "proof"
title: "Proof: left adjoints preserve suprema, right adjoints preserve infima"
teaches: []
requires: [partial-orders]
language: "en"
digested_from: "blog/pf-galois-connections-everywhere"
standalone: true
depends: [thm-adjoints-preserve-bounds]
proves: "thm-adjoints-preserve-bounds"
---

# Proof: left adjoints preserve suprema, right adjoints preserve infima

Let $f \colon P \to Q$ and $g \colon Q \to P$ satisfy
$f(p) \le q \iff p \le g(q)$ for all $p \in P$, $q \in Q$. The statement
proved is [[thm-adjoints-preserve-bounds]]. Recall that $\sup S$ is the
least upper bound of $S$, characterized by: $s \ge p$ for all $p \in S$,
and $s \le u$ for every upper bound $u$ of $S$ — equivalently, for every
$u$, $\ \sup S \le u \iff (\forall p \in S)\ p \le u$.

## Suprema across the left adjoint

Let $S \subseteq P$ have a supremum $s = \sup S$. For an arbitrary
$q \in Q$:
$$f(s) \le q
  \iff s \le g(q)
  \iff (\forall p \in S)\ p \le g(q)
  \iff (\forall p \in S)\ f(p) \le q .$$

The first and third steps are the defining equivalence (read in the two
directions), and the middle step is the characterization of the
supremum. In words: **$f(s) \le q$ exactly when $q$ is an upper bound of
$f(S)$.**

Two consequences. Taking $q = f(s)$, the left side holds by
reflexivity, so $f(s)$ is an upper bound of $f(S)$. And if $q$ is any
upper bound of $f(S)$, the right side holds, so $f(s) \le q$. Hence
$f(s)$ is the least upper bound: $\sup f(S)$ exists and equals
$f(\sup S)$.

## Infima across the right adjoint

The argument is the mirror image, run through the other half of the
equivalence. Let $T \subseteq Q$ have an infimum $t = \inf T$. For an
arbitrary $p \in P$:
$$p \le g(t)
  \iff f(p) \le t
  \iff (\forall q \in T)\ f(p) \le q
  \iff (\forall q \in T)\ p \le g(q),$$
so $p \le g(t)$ exactly when $p$ is a lower bound of $g(T)$. Taking
$p = g(t)$ shows $g(t)$ is a lower bound; any other lower bound $p$
satisfies $p \le g(t)$; hence $g(t) = \inf g(T)$. $\blacksquare$

Nothing about either poset was used — no lattice structure, no
completeness, not even monotonicity as a separate hypothesis. Only the
equivalence and the definition of a least upper bound.
