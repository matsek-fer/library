Capstone of the pointwise-vs-uniform ladder: what uniform convergence
actually buys, packaged as the notion of convergence along moving points
(x_n -> x forces f_n(x_n) -> f(x)). Part (a) is the epsilon/3 proof that a
uniform limit of continuous functions is continuous, framed explicitly as the
exchange of limits lim_{t->c} lim_n = lim_n lim_{t->c}; part (b) derives the
moving-points property from uniformity by the diagonal split
|f_n(x_n) - f(x)| <= ||f_n - f||_inf + |f(x_n) - f(x)|; part (c) kills the
pointwise version with a travelling bump peaking at 1/n; part (d), the real
work, proves the CONVERSE on the compact segment [0,1]: for a continuous
limit, convergence along moving points implies uniform convergence. The
converse proof negates uniform convergence into a subsequence n_k and bad
points y_k with |f_{n_k}(y_k) - f(y_k)| >= eps, extracts a convergent
subsequence of (y_k) by Bolzano-Weierstrass, and interleaves the y_k with the
constant y into one full sequence x_n -> y so the hypothesis applies —
continuity of the f_n is never used. Techniques: epsilon/3 insertion,
diagonal splitting, negating a sup statement into witnesses,
Bolzano-Weierstrass extraction, interleaved sequence construction.
Instantiates the principle that uniform convergence is exactly the license to
let the evaluation point move with n, and hence to exchange limit processes;
on a compactum with continuous limit it is equivalent to that license.
Common failures: in (a), letting N depend on t; in (d), applying the
moving-points hypothesis to the subsequence (y_k) alone without embedding it
in a full convergent sequence; assuming continuity of f_n in (d) where none
is given; believing the converse (d) without compactness: on all of R a bump
travelling to infinity (peak at x = n) converges along moving points to the
continuous limit 0 — any convergent x_n is bounded, so it eventually misses
the peak — yet not uniformly, because Bolzano-Weierstrass has no compact
segment to extract the bad points into.
