Reads like a polynomial-interpolation computation — fit a cubic through three
prescribed values — but the statement forbids constructing the interpolant,
which forces the real content into the open: this is the rank-nullity theorem
in disguise. The evaluation map from degree-at-most-3 polynomials to R^3 has
a kernel found by the factor theorem (multiples of x^3 - x, dimension 1), so
its image has dimension 4 - 1 = 3 and must be all of R^3. Surjectivity —
existence of an interpolant — falls out of pure dimension counting.

Techniques: recognizing evaluation as a linear map, factor theorem to compute
a kernel, rank-nullity to get the image dimension, "full-dimensional subspace
is the whole space", solution set as a coset of the kernel.

Abstract principle instantiated: existence theorems by dimension count — to
prove a linear problem always has a solution, compute the kernel and let
rank-nullity certify surjectivity, instead of exhibiting solutions. Also
illustrates the affine structure (particular solution + kernel) shared by
every inhomogeneous linear problem.

Common failure: writing down the Lagrange interpolating polynomial, which
answers (b) but misses the point and typically leaves (c) — the full solution
set and its dimension — unexplained.
