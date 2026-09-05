A hard compactness problem (difficulty 5): the converse of the extreme
value theorem for subsets of R. Given only the abstract hypothesis "every
continuous function on K is bounded", the solver must recover both halves
of Heine-Borel. The conceptual difficulty is the direction of use: the
hypothesis quantifies universally over functions, so it can only be
exploited by constructing specific witness functions — the identity x to
witness unboundedness of the domain, and the reciprocal-distance function
1/(x - c) at a missing closure point c to witness non-closedness. The
second construction contains the key insight of the problem: 1/(x - c) is
perfectly continuous on K because its singularity sits at a point the
domain omits, so a "hole" in the domain is exactly what an unbounded
continuous function can hang on.

Part (b) sharpens the logic: on D = (0,1) every polynomial is bounded
(polynomials extend continuously to the compact closure [0,1]) yet D is
not compact, so the hypothesis class genuinely matters — a function class
whose members all extend across boundary points is too weak to detect
missing ones.

Abstract principle instantiated: compactness of a space is equivalent to
a statement about the function algebra living on it (in modern language,
this is pseudocompactness = compactness for subsets of R, a first taste
of studying a space through C(X)). Also trains contrapositive proof
architecture: to prove "property implies compact", one shows every
failure of compactness is certified by a continuous unbounded function.

Common failure modes: trying to prove compactness directly from open
covers without ever constructing a function, thereby never using the
hypothesis; choosing 1/(x - c) with c a point of K, where the function is
not defined on the domain; forgetting to verify continuity of 1/(x - c)
at points of K (it is continuous there precisely because c is excluded);
and in (b) proposing an unbounded D, on which the polynomial x is already
unbounded.
