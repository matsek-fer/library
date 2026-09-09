---
id: "exr-an-ravnina-bez-tocke"
taxon: "exercise"
title: "Ravnina bez točke ostaje u jednom komadu"
teaches: [connectedness]
requires: [epsilon-delta-continuity]
language: "hr"
digested_from: "problem/an-ravnina-bez-tocke"
standalone: true
depends: []
x_annotation: "A connectedness problem built as a guided proof that R and R^2 are not\nhomeomorphic — the standard first example of a topological invariance\nargument, and the direct target of the \"why are R and R^2 different\"\nlearning path. Part (a) is the definition in action: exhibit the two-open-\nset decomposition of the punctured line. Part (b) proves the punctured\nplane is path-connected by an explicit two-segment construction (the case\nsplit on whether the removed point blocks the straight segment, and the\ncollinearity argument showing a detour vertex off the critical line\nworks), then derives connectedness from path-connectedness by pulling a\nhypothetical disconnection back through the path to contradict\nconnectedness of [0,1]. Part (c) assembles the invariance argument:\nrestrict the hypothetical homeomorphism to punctured spaces, push the\nconnected punctured plane through the continuous inverse, and contradict\n(a).\n\nAbstract principle instantiated: to distinguish two spaces, find a\nproperty preserved by homeomorphisms (here: connectedness after deleting\na point) on which they differ. The \"remove a point and count pieces\"\nmove is the prototype for all invariance-based non-homeomorphism proofs\nand previews invariance of domain. Secondary principle: connectedness\ntransfers along continuous maps, so disconnection witnesses pull back\nthrough preimages.\n\nTechniques: constructing explicit open separations; polygonal paths and\nconcatenation continuity; preimage arguments reducing connectedness of a\nspace to connectedness of [0,1]; restriction of a homeomorphism to a\nsubspace.\n\nCommon failure modes: in (b) treating \"obviously you can walk around the\npoint\" as a proof without handling the collinear case; forgetting that\npath-connected implies connected needs an argument; and in (c) applying\nthe invariance to h itself rather than to a punctured restriction, or\nconcluding that no continuous bijection R to R^2 exists (the argument\nonly rules out a continuous inverse — the solution flags this\nexplicitly)."
---

# Ravnina bez točke ostaje u jednom komadu

Uklonimo li iz pravca jednu točku, on se raspadne. Uklonimo li točku iz
ravnine, ne dogodi se ništa. U ovom zadatku tu razliku pretvaramo u dokaz
da pravac i ravnina nisu "isti prostor".

**(a)** Dokažite da je skup $\mathbb{R} \setminus \{a\}$ **nepovezan**, za
bilo koji $a \in \mathbb{R}$: nađite rastav na dva neprazna, disjunktna,
otvorena skupa.

**(b)** Dokažite da je $\mathbb{R}^2 \setminus \{P_0\}$ **povezan
putevima** za bilo koju točku $P_0 \in \mathbb{R}^2$: svake dvije točke
$A, B \neq P_0$ mogu se spojiti neprekidnim putom koji ne prolazi kroz
$P_0$. Zatim dokažite (ili pažljivo citirajte) da povezanost putevima
povlači povezanost. Smijete koristiti da je segment $[0,1]$ povezan.

**(c)** Zaključite: **ne postoji homeomorfizam** $h\colon \mathbb{R} \to \mathbb{R}^2$
(neprekidna bijekcija s neprekidnim inverzom). Smijete koristiti da je
neprekidna slika povezanog skupa povezana.
