---
schema_version: "1.0"
section_concepts:
  "#surprise-as-a-number": [probability-basics, random-variables]
  "#entropy-is-an-expected-value": [entropy, expectation]
  "#why-the-logarithm": [entropy]
  "#entropy-as-a-guessing-game": [entropy]
checkpoints:
  - after: "#entropy-is-an-expected-value"
    ask: "A fair coin has entropy 1 bit. What is the entropy of a coin that lands heads with probability 1?"
    options:
      - "0 bits — the outcome is certain, so on average it carries no surprise."
      - "1 bit — it is still a coin with two sides."
      - "Infinite — the surprise of the impossible tails outcome is infinite."
    correct: 0
    if_wrong:
      goto: "#entropy-is-an-expected-value"
      note: "Entropy averages surprise weighted by probability — an outcome with probability 0 contributes 0 times its surprise, and we saw why that product is taken to be 0."
  - after: "#why-the-logarithm"
    ask: "You roll two independent fair dice. How does the entropy of the pair relate to the entropy of one die?"
    options:
      - "It is the square of one die's entropy."
      - "It is exactly twice one die's entropy."
      - "It is less than twice, because the rolls might collide."
    correct: 1
    if_wrong:
      goto: "#why-the-logarithm"
      note: "The logarithm was chosen precisely so that independent experiments add their entropies."
---

# Entropy without measure theory

You know what a sample space is, you can compute the expectation of a die
roll, and you have heard the word "entropy" used to mean anything from
disorder to doom. This post defines entropy honestly using nothing beyond
finite probability — no measure theory, no integrals, no physics. By the end
you will be able to compute it, and, more importantly, you will know what
question it answers.

## Surprise as a number

Start with a discrete random variable $X$ that takes finitely many values,
value $x$ with probability $p(x)$. Some outcomes are more newsworthy than
others: learning that a fair coin landed heads is mildly informative,
learning that your friend won the lottery is front-page news. The difference
is the probability — rare outcomes carry more information when they happen.

We quantify this with the **surprise** (or *information content*) of an
outcome:

$$
s(x) = \log_2 \frac{1}{p(x)}.
$$

Read it as "how many times would you have to halve certainty to get down to
$p(x)$". An outcome with probability $1$ has surprise $0$: you learned
nothing. Probability $\tfrac12$ gives surprise $1$; probability
$\tfrac{1}{1024}$ gives surprise $10$. The unit is the **bit**, because
base-2 logarithms count halvings — one fair-coin flip's worth of news is one
bit. Nothing here needs measure theory: $p$ is a finite list of numbers
summing to $1$.

## Entropy is an expected value

Surprise is a number attached to each outcome — which makes $s(X)$ itself a
random variable, a function of $X$. And the one summary of a random variable
you already trust is its expectation. The **entropy** of $X$ is exactly
that: the expected surprise,

$$
H(X) = \mathbb{E}\big[s(X)\big] = \sum_{x} p(x) \log_2 \frac{1}{p(x)}.
$$

Entropy is not a new kind of object. It is an ordinary expectation, computed
by the probability-weighted sum you already know — the whole definition sits
inside first-course probability.

Two computations to calibrate on:

- **Fair coin.** $H = \tfrac12 \log_2 2 + \tfrac12 \log_2 2 = 1$ bit.
- **Loaded coin**, heads with probability $0.9$:
  $H = 0.9 \log_2 \tfrac{1}{0.9} + 0.1 \log_2 \tfrac{1}{0.1} \approx 0.47$
  bits. Less than the fair coin: the outcome is more predictable, so on
  average there is less news in it.

One convention needs stating. If some value has $p(x) = 0$, its term is
$0 \cdot \log_2 \tfrac{1}{0}$, which we define to be $0$ — justified because
$p \log_2 \tfrac1p \to 0$ as $p \to 0^+$: outcomes that essentially never
happen contribute essentially nothing to the *average*, however dramatic
they would be. With this convention, a certain event has entropy $0$, and
among all distributions on $n$ values the uniform one has the largest
entropy, $\log_2 n$ — maximal ignorance about which outcome comes.

## Why the logarithm

Why not define surprise as $\tfrac{1}{p(x)}$, or $1 - p(x)$? Because of how
independent news combines. Flip two independent fair coins: the outcome
$(\text{H}, \text{H})$ has probability $\tfrac14$, and its surprise should
be the surprise of the first heads *plus* the surprise of the second — two
separate one-bit dispatches. The logarithm is what turns the
multiplication of probabilities into addition of information:

$$
\log_2 \frac{1}{p \, q} = \log_2 \frac{1}{p} + \log_2 \frac{1}{q}.
$$

This additivity lifts from outcomes to whole variables. For independent $X$
and $Y$, the surprise of the pair $(X, Y)$ splits as $s(X) + s(Y)$, and
taking expectations — expectation of a sum is the sum of expectations —
gives

$$
H(X, Y) = H(X) + H(Y).
$$

Two independent dice carry exactly twice the entropy of one. Up to the
choice of base (which only fixes the unit), the logarithm is essentially the
only choice that makes independent experiments add, which is why the
definition looks the way it does and not like a simpler formula.

## Entropy as a guessing game

Here is the operational meaning, and the reason engineers care. Suppose I
draw $X$ and you must identify the value by asking yes/no questions. How
few questions can you get away with *on average*?

Each answer you receive is worth at most one bit — one halving of the
possibilities. So no strategy can beat $H(X)$ questions on average:
entropy is the price floor of identification. And a good strategy — always
ask a question that splits the remaining probability as close to half-half
as you can — gets within one question of that floor.

The loaded coin shows the floor in action. With heads at probability $0.9$
you still need one question per flip — but for a *sequence* of flips you can
do better, asking first about cheap likely patterns ("were the next two both
heads?"). On average this identifies a long sequence with about $0.47$
questions per flip, matching $H$. That is the idea behind data compression:
a file of predictable symbols is a low-entropy source, and entropy tells you
in advance how far it can possibly be squeezed. Same expectation you have
always computed — pointed at the question "how much do I not know?".
