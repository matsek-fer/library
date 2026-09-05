A connectedness problem built as a guided proof that R and R^2 are not
homeomorphic — the standard first example of a topological invariance
argument, and the direct target of the "why are R and R^2 different"
learning path. Part (a) is the definition in action: exhibit the two-open-
set decomposition of the punctured line. Part (b) proves the punctured
plane is path-connected by an explicit two-segment construction (the case
split on whether the removed point blocks the straight segment, and the
collinearity argument showing a detour vertex off the critical line
works), then derives connectedness from path-connectedness by pulling a
hypothetical disconnection back through the path to contradict
connectedness of [0,1]. Part (c) assembles the invariance argument:
restrict the hypothetical homeomorphism to punctured spaces, push the
connected punctured plane through the continuous inverse, and contradict
(a).

Abstract principle instantiated: to distinguish two spaces, find a
property preserved by homeomorphisms (here: connectedness after deleting
a point) on which they differ. The "remove a point and count pieces"
move is the prototype for all invariance-based non-homeomorphism proofs
and previews invariance of domain. Secondary principle: connectedness
transfers along continuous maps, so disconnection witnesses pull back
through preimages.

Techniques: constructing explicit open separations; polygonal paths and
concatenation continuity; preimage arguments reducing connectedness of a
space to connectedness of [0,1]; restriction of a homeomorphism to a
subspace.

Common failure modes: in (b) treating "obviously you can walk around the
point" as a proof without handling the collinear case; forgetting that
path-connected implies connected needs an argument; and in (c) applying
the invariance to h itself rather than to a punctured restriction, or
concluding that no continuous bijection R to R^2 exists (the argument
only rules out a continuous inverse — the solution flags this
explicitly).
