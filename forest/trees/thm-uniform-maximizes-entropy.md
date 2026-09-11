---
id: "thm-uniform-maximizes-entropy"
taxon: "theorem"
title: "The uniform distribution maximizes entropy"
teaches: [entropy]
requires: [expectation]
language: "en"
digested_from: "blog/pf-entropy-without-measure"
standalone: true
depends: [def-entropy]
---

# The uniform distribution maximizes entropy

Let $X$ be a discrete random variable taking at most $n$ values, with
probabilities $p_1, \dots, p_n \ge 0$ summing to $1$, and let
$$H(X) = \sum_{i=1}^{n} p_i \log_2 \frac{1}{p_i}$$
be its entropy in bits, terms with $p_i = 0$ read as $0$
([[def-entropy]], [[rem-zero-probability-convention]]).

**Theorem.** $H(X) \le \log_2 n$, with equality if and only if
$p_i = \tfrac1n$ for every $i$ — that is, exactly when $X$ is uniform on
all $n$ values.

Together with the lower bound $H(X) \ge 0$ (every term is
non-negative, with equality exactly when some outcome has probability
$1$), this brackets entropy:
$$0 \le H(X) \le \log_2 n,$$
certainty at the bottom, maximal ignorance at the top. A fair coin sits
at $\log_2 2 = 1$ bit and a fair die at $\log_2 6 \approx 2.585$ bits
([[exm-coin-entropies]], [[exm-two-fair-dice]]).

The upper bound also explains the familiar rule of thumb that $n$ equally
likely possibilities cost $\log_2 n$ bits to specify: the uniform case is
the worst case, and any bias is a discount.

Proof: [[prf-uniform-maximizes-entropy]].
