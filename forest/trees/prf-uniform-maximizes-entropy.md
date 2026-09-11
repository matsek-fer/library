---
id: "prf-uniform-maximizes-entropy"
taxon: "proof"
title: "Proof: the uniform distribution maximizes entropy"
teaches: []
requires: [expectation]
language: "en"
digested_from: "blog/pf-entropy-without-measure"
standalone: true
depends: [thm-uniform-maximizes-entropy]
proves: "thm-uniform-maximizes-entropy"
---

# Proof: the uniform distribution maximizes entropy

Let $p_1, \dots, p_n \ge 0$ sum to $1$ and let
$H = \sum_{i} p_i \log_2 \tfrac{1}{p_i}$, terms with $p_i = 0$ read as
$0$. The statement proved is [[thm-uniform-maximizes-entropy]]:
$H \le \log_2 n$ with equality exactly for the uniform distribution.

**The one external fact used** is Jensen's inequality for the concave
function $\log_2$: for weights $w_i > 0$ summing to $1$ and any
$t_i > 0$,
$$\sum_i w_i \log_2 t_i \;\le\; \log_2 \Big( \sum_i w_i t_i \Big),$$
with equality if and only if all the $t_i$ are equal, since $\log_2$ is
*strictly* concave.

## The computation

Let $S = \{ i : p_i > 0 \}$ be the support and $m = |S| \le n$. Only
indices in $S$ contribute to $H$. Insert $n$ artificially:
$$H = \sum_{i \in S} p_i \log_2 \frac{1}{p_i}
    = \sum_{i \in S} p_i \log_2 \frac{n}{n \, p_i}
    = \log_2 n + \sum_{i \in S} p_i \log_2 \frac{1}{n \, p_i},$$
using $\sum_{i \in S} p_i = 1$ to pull the constant $\log_2 n$ out.

Now apply Jensen with weights $w_i = p_i$ and values
$t_i = \tfrac{1}{n p_i} > 0$ for $i \in S$:
$$\sum_{i \in S} p_i \log_2 \frac{1}{n \, p_i}
  \;\le\; \log_2 \Big( \sum_{i \in S} p_i \cdot \frac{1}{n\,p_i} \Big)
  = \log_2 \frac{m}{n},$$
because each term of the inner sum is $\tfrac1n$ and there are $m$ of
them. Hence
$$H \;\le\; \log_2 n + \log_2 \frac{m}{n} \;=\; \log_2 m
  \;\le\; \log_2 n .$$

## The equality case

The chain has two inequalities, so equality in $H = \log_2 n$ forces
equality in both.

- Equality in Jensen requires all $t_i = \tfrac{1}{n p_i}$ equal for
  $i \in S$, i.e. all non-zero $p_i$ equal; since they sum to $1$, each
  equals $\tfrac1m$.
- Equality in $\log_2 m \le \log_2 n$ requires $m = n$, i.e. no outcome
  has probability $0$.

Together: $p_i = \tfrac1n$ for every $i$. Conversely the uniform
distribution gives $H = \sum_i \tfrac1n \log_2 n = \log_2 n$, so the
bound is attained. $\blacksquare$

The intermediate line is worth keeping: $H \le \log_2 m$, where $m$ is
the number of outcomes that can actually occur. Entropy never exceeds
the logarithm of the size of the support, which is the precise sense in
which "at most $\log_2 m$ bits" is the cost of naming one of $m$
possibilities.
