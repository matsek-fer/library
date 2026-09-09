---
id: "exr-la-three-point-fit"
taxon: "exercise"
title: "Fitting a cubic through three points"
teaches: [rank-nullity]
requires: [vector-spaces, linear-maps]
language: "en"
digested_from: "problem/la-three-point-fit"
standalone: true
depends: []
x_annotation: "Reads like a polynomial-interpolation computation — fit a cubic through three\nprescribed values — but the statement forbids constructing the interpolant,\nwhich forces the real content into the open: this is the rank-nullity theorem\nin disguise. The evaluation map from degree-at-most-3 polynomials to R^3 has\na kernel found by the factor theorem (multiples of x^3 - x, dimension 1), so\nits image has dimension 4 - 1 = 3 and must be all of R^3. Surjectivity —\nexistence of an interpolant — falls out of pure dimension counting.\n\nTechniques: recognizing evaluation as a linear map, factor theorem to compute\na kernel, rank-nullity to get the image dimension, \"full-dimensional subspace\nis the whole space\", solution set as a coset of the kernel.\n\nAbstract principle instantiated: existence theorems by dimension count — to\nprove a linear problem always has a solution, compute the kernel and let\nrank-nullity certify surjectivity, instead of exhibiting solutions. Also\nillustrates the affine structure (particular solution + kernel) shared by\nevery inhomogeneous linear problem.\n\nCommon failure: writing down the Lagrange interpolating polynomial, which\nanswers (b) but misses the point and typically leaves (c) — the full solution\nset and its dimension — unexplained."
---

# Fitting a cubic through three points

Let $P_3$ denote the vector space of real polynomials of degree at most $3$,
and define

$$
T : P_3 \to \mathbb{R}^3, \qquad T(p) = \bigl(p(-1),\ p(0),\ p(1)\bigr).
$$

**(a)** Find all polynomials $p \in P_3$ with $p(-1) = p(0) = p(1) = 0$.

**(b)** Prove that for every triple $(b_1, b_2, b_3) \in \mathbb{R}^3$ there
exists a polynomial $p \in P_3$ with $p(-1) = b_1$, $p(0) = b_2$,
$p(1) = b_3$ — *without constructing any such polynomial*.

**(c)** For a fixed triple $(b_1, b_2, b_3)$, describe the set of *all*
polynomials in $P_3$ taking those three values. What geometric object is it
inside $P_3$?
