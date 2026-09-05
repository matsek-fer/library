This problem tests whether the solver can pick the right objects to index
indicators by when the natural unit is not an individual but a triple. The
statement — a random tournament where every match is a fair independent coin
flip, expected number of cyclic (non-transitive) triples — never names the
technique.

Technique: one indicator per unordered triple of players, a symmetry count of
the 8 equally likely orientations of the triple's three edges (exactly 2 are
cyclic, so each indicator has expectation 1/4), then linearity of expectation
over heavily dependent indicators (triples share edges) to get C(n,3)/4. The
solution also derives the structural fact that a triple is non-cyclic iff it
has a local winner.

Abstract principles instantiated: expectation of a count is the sum of the
probabilities of the counted configurations, independence irrelevant; and the
probabilistic-method corollary noted at the end — some outcome achieves at
least the expectation, so tournaments with many non-transitive triples exist
without construction. Common failure modes: indexing indicators by matches or
players instead of triples, miscounting the cyclic orientations (2 of 8, not
1 of 8), or attempting the distribution of the triple count. Hard end of the
linearity ladder (difficulty 4): the indicator family, the orientation count,
and the dependence structure all require decisions.
