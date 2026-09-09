---
id: "exr-an-bounded-implies-compact"
taxon: "exercise"
title: "When every continuous function is bounded"
teaches: [compactness]
requires: [epsilon-delta-continuity, sequence-limits]
language: "en"
digested_from: "problem/an-bounded-implies-compact"
standalone: true
depends: []
x_annotation: "A hard compactness problem (difficulty 5): the converse of the extreme\nvalue theorem for subsets of R. Given only the abstract hypothesis \"every\ncontinuous function on K is bounded\", the solver must recover both halves\nof Heine-Borel. The conceptual difficulty is the direction of use: the\nhypothesis quantifies universally over functions, so it can only be\nexploited by constructing specific witness functions — the identity x to\nwitness unboundedness of the domain, and the reciprocal-distance function\n1/(x - c) at a missing closure point c to witness non-closedness. The\nsecond construction contains the key insight of the problem: 1/(x - c) is\nperfectly continuous on K because its singularity sits at a point the\ndomain omits, so a \"hole\" in the domain is exactly what an unbounded\ncontinuous function can hang on.\n\nPart (b) sharpens the logic: on D = (0,1) every polynomial is bounded\n(polynomials extend continuously to the compact closure [0,1]) yet D is\nnot compact, so the hypothesis class genuinely matters — a function class\nwhose members all extend across boundary points is too weak to detect\nmissing ones.\n\nAbstract principle instantiated: compactness of a space is equivalent to\na statement about the function algebra living on it (in modern language,\nthis is pseudocompactness = compactness for subsets of R, a first taste\nof studying a space through C(X)). Also trains contrapositive proof\narchitecture: to prove \"property implies compact\", one shows every\nfailure of compactness is certified by a continuous unbounded function.\n\nCommon failure modes: trying to prove compactness directly from open\ncovers without ever constructing a function, thereby never using the\nhypothesis; choosing 1/(x - c) with c a point of K, where the function is\nnot defined on the domain; forgetting to verify continuity of 1/(x - c)\nat points of K (it is continuous there precisely because c is excluded);\nand in (b) proposing an unbounded D, on which the polynomial x is already\nunbounded."
---

# When every continuous function is bounded

The extreme value theorem says that on a compact $K \subseteq \mathbb{R}$
every continuous real function is bounded. This problem is about the
**converse**.

Let $K \subseteq \mathbb{R}$ be a nonempty set with the property:

> every continuous function $f\colon K \to \mathbb{R}$ is bounded.

**(a)** Prove that $K$ is compact. (You may use the Heine–Borel
characterization: a subset of $\mathbb{R}$ is compact if and only if it is
closed and bounded.)

**(b)** Show that the hypothesis genuinely needs *all* continuous
functions: exhibit a non-compact set $D \subseteq \mathbb{R}$ on which
every **polynomial** is bounded, and prove both claims for your $D$.
