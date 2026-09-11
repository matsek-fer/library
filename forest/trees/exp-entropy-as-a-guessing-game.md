---
id: "exp-entropy-as-a-guessing-game"
taxon: "exposition"
title: "Entropy as a guessing game: the price of identification"
teaches: [entropy]
requires: [expectation]
language: "en"
digested_from: "blog/pf-entropy-without-measure"
standalone: true
depends: [def-entropy, thm-entropy-additive-independent]
---

# Entropy as a guessing game: the price of identification

Entropy of a discrete random variable $X$ is the expected surprise
$H(X) = \sum_x p(x) \log_2 \tfrac{1}{p(x)}$, measured in bits
([[def-entropy]]). That formula is a definition; this is what it
*means*, and the reason engineers care.

**The game.** I draw a value of $X$ and keep it hidden. You must
identify it by asking yes/no questions about it — any questions you
like, chosen adaptively. How few questions can you get away with *on
average*?

## The floor

Each answer you receive is worth at most one bit: it splits the
remaining possibilities into two groups and tells you which one holds.
A strategy is thus a binary decision tree, and identifying the value
means reaching a leaf — so each value $x$ gets a distinct binary string,
namely the sequence of answers that leads to it, and no such string is a
prefix of another.

Shannon's source-coding bound turns that observation into an inequality:
for **every** strategy, the expected number of questions $L$ satisfies
$$L \ \ge \ H(X).$$
No cleverness beats it; entropy is the price floor of identification.

## The ceiling

And the floor is nearly attained. A good strategy — at each step, ask a
question that splits the remaining probability as close to half-and-half
as possible — achieves
$$L \ < \ H(X) + 1 .$$
(Shannon–Fano coding gives exactly this; Huffman coding is optimal and
so does at least as well.) The gap of at most one question is the cost
of the answers being whole questions while $H(X)$ generally is not.

## Why the slack disappears in bulk

The loaded coin makes the slack visible. With heads at probability
$0.9$ we have $H \approx 0.469$ bits ([[exm-coin-entropies]]), but a
single flip still costs one question — there is no such thing as half a
question.

Ask instead about *blocks*: play the game on $n$ consecutive independent
flips at once, with cheap questions first ("were the next two both
heads?"). Entropy is additive over independent variables, so the block
has entropy $nH$ ([[thm-entropy-additive-independent]]), and the bounds
above give
$$nH \ \le \ L_n \ < \ nH + 1
  \qquad\Longrightarrow\qquad
  H \ \le \ \frac{L_n}{n} \ < \ H + \frac1n .$$
Per flip, the cost converges to $H \approx 0.469$ questions. The
constant $+1$ is amortized away.

## Why this is compression

Replace "questions" by "bits written to a file" — the decision tree's
answer string *is* the encoding of the value — and the same two bounds
say: a source of independent symbols of entropy $H$ can be encoded in
about $H$ bits per symbol and in no fewer. A file of predictable symbols
is a low-entropy source, and entropy tells you in advance how far it can
possibly be squeezed.

That is the whole payoff of the definition. The same expectation you
have always computed, pointed at the question *how much do I not know?*,
answers a question about file sizes.
