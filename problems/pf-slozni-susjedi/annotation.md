This problem tests whether the solver reaches for indicator variables and
linearity of expectation when asked for an expected count. The statement asks
for the expected number of matching adjacent pairs around a circle of
independent fair coin flips and never names any technique.

Technique: write the count as a sum of one indicator per adjacent pair,
compute each indicator's expectation as a single-pair probability (1/2), and
sum. The indicators overlap — adjacent pairs share a person — so the count is
not binomial, and that is the pedagogical point: linearity of expectation
holds without independence.

Abstract principle instantiated: the expectation of a count equals the sum of
the probabilities of the events being counted, regardless of dependence
between them. Common failure mode: trying to derive the full distribution of
the number of matching pairs, or worrying that the dependence between
overlapping pairs invalidates summing expectations. Entry-level (easy end of
the linearity-of-expectation ladder): one symmetric indicator type, constant
probability per indicator.
