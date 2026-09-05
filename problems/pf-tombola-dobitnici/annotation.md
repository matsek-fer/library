This problem tests whether the solver decomposes an expected count of
distinct elements into per-element indicators. The statement — k prizes drawn
with replacement among n raffle tickets, expected number of members who win
at least one prize — never names the technique.

Technique: one indicator per member, complement trick for the single-member
probability (the chance of being missed k times is (1-1/n)^k), then linearity
of expectation over dependent indicators to get n(1-(1-1/n)^k). The
occupancy-style structure means the indicators are negatively dependent, and
the solution explicitly notes that this does not matter for the expectation.

Abstract principle instantiated: an expected number of distinct "hit" cells in
a random allocation is a sum of per-cell hit probabilities; combine linearity
with the complement rule when "at least once" is easier through its negation.
Common failure modes: conditioning on the sequence of draws or attempting the
distribution of the number of winners; forgetting the with-replacement
independence when computing the miss probability. Middle rung of the
linearity-of-expectation ladder (difficulty 3): the indicator probability
itself takes a short computation, and the limit check 1-1/e rewards a sanity
pass.
