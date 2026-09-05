The travelling-bump counterexample, second rung of the pointwise-vs-uniform
ladder: h_n(x) = 2nx/(1 + n^2 x^2) on [0,1] converges pointwise to 0, yet
sup h_n = 1 for every n because the bump of constant height 1 peaks at the
travelling point x = 1/n. The peak is located without calculus: the AM-GM
inequality 1 + n^2 x^2 >= 2nx, with equality exactly at nx = 1, gives
h_n <= 1 attained at 1/n. Off the origin the convergence is uniform: on
[delta, 1] the x-free majorant 2/(n delta) works, i.e. the bump escapes every
such segment. Part (d) makes the logical point explicit: since the limit here
IS continuous while convergence is NOT uniform, continuity of the limit is a
necessary but never sufficient condition — the uniform-limit continuity
theorem cannot be run in reverse. Techniques: sandwich bound 2/(nx) for the
pointwise limit, AM-GM for a derivative-free maximum, n-dependent evaluation
point defeating uniformity, x-free majorant proving it on subsegments.
Instantiates the principle that pointwise convergence controls each vertical
line while uniform convergence controls a whole horizontal band, and that mass
can escape through a shrinking neighbourhood of a single point. Common
failures: differentiating to find the maximum and mishandling the endpoint;
concluding uniformity from continuity of the limit (the converse error);
bounding 2nx/(1 + n^2 x^2) by 2nx and losing the decay.
