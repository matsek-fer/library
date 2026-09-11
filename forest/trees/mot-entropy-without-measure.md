---
id: "mot-entropy-without-measure"
taxon: "motivation"
title: "What entropy is for, and why finite probability suffices"
teaches: [entropy]
requires: [probability-basics, random-variables]
language: "en"
digested_from: "blog/pf-entropy-without-measure"
standalone: true
depends: []
---

# What entropy is for, and why finite probability suffices

"Entropy" is used to mean anything from disorder to doom, and the word
arrives from physics carrying luggage. The mathematical object is far
smaller than its reputation, and it needs nothing beyond a finite list
of probabilities summing to $1$ — no measure theory, no integrals, no
thermodynamics.

**The question it answers.** Given a discrete random variable $X$, how
much do you *not* know about its value before you see it? Any honest
answer has to depend only on the probabilities $p(x)$, not on the values
$x$ themselves: a fair coin labelled heads/tails and a fair coin
labelled $0/1$ leave you equally ignorant. So the quantity being sought
is a number attached to a probability distribution.

**The shape of the answer.** Two ordinary steps get there. First attach
a number to each *outcome*, measuring how much news that outcome would
be ([[def-surprise]]). That number is a function of $X$, hence itself a
random variable — and the one summary of a random variable a first
probability course already trusts is its expectation. Entropy is exactly
that expectation ([[def-entropy]]). Nothing new is being defined; an old
tool is pointed at a new question.

**Why anyone outside a probability course cares.** The same number has
an operational meaning with no reference to information at all: it is
the average number of yes/no questions needed to pin down the value of
$X$, up to one question ([[exp-entropy-as-a-guessing-game]]). That makes
entropy the exact floor on how far a stream of symbols can be
compressed — a statement engineers can hold you to, derived from a
probability-weighted sum.

Two facts calibrate the scale before any formula: a certain outcome
carries zero entropy, and among distributions on $n$ values the uniform
one carries the most, $\log_2 n$
([[thm-uniform-maximizes-entropy]]). Everything between those poles is
an average.
