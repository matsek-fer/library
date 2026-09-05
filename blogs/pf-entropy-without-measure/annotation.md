An expository blog defining Shannon entropy for a reader who knows basic
finite probability and expectation but no measure theory — everything is a
finite probability-weighted sum, stated explicitly as the post's contract.
It builds entropy in two steps: surprise log2(1/p) as a random variable, then
entropy as its expectation, H(X) = E[log2(1/p(X))], so the definition lands
as an instance of expectation rather than a new object.

Covers: worked entropies of fair and loaded coins, the 0·log(1/0) = 0
convention via the limit p·log(1/p) -> 0, uniform distributions maximizing
entropy, why the logarithm — additivity of surprise over independent events,
H(X,Y) = H(X) + H(Y) via linearity of expectation — and the operational
yes/no guessing-game meaning: entropy as the average-question lower bound and
the intuition for source coding and compression.

Abstract principle instantiated: information measures are expectations of
pointwise quantities, so first-course probability suffices for discrete
entropy; the logarithm is forced by requiring independent experiments to add.
Audience fit: right after a first probability course — requires basic
probability and random variables only, explicitly no measure theory.
Checkpoints test the degenerate-coin entropy and additivity over independent
dice.
