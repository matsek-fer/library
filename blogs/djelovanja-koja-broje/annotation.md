Croatian expository blog turning group actions into a counting tool, for
a reader who knows groups, cosets and Lagrange but has not yet used an
action to prove anything. Teaches the definition of an action (axioms,
each group element acting as a bijection, action = homomorphism into
$\mathrm{Sym}(X)$), orbits as an equivalence-class partition,
stabilizers as subgroups, and the orbit–stabilizer theorem proved via
the well-defined bijection $gH \mapsto g \cdot x$ between cosets of the
stabilizer and the orbit. The framing throughout is bookkeeping: $|X|$
is a sum of orbit sizes, orbit sizes divide $|G|$, so group structure
constrains raw counts. The worked payoff is the necklace proof of
Fermat's little theorem — $\mathbb{Z}/p\mathbb{Z}$ acting on length-$p$
strings by cyclic shift, orbits of size 1 or $p$ because a subgroup of a
prime-order group is trivial or everything, $a^p = a + p k$ — with the
double use of primality (orbit sizes, then Euclid's lemma) made
explicit, and the failure of the composite analogue flagged. The outlook
section derives the Burnside orbit-counting identity (number of orbits =
average number of fixed points) by double-counting incidences
$(g, x)$ with $g \cdot x = x$, and closes the opening puzzle: why
$a^p / p$ is not the necklace count but the fixed-point average is.
Techniques: verifying action axioms, orbit partition via equivalence,
stabilizer-is-a-subgroup checks, representative-independence
(well-definedness) of a coset map, prime order forcing orbit sizes,
double counting. Instantiates the principle that a divisibility or
counting statement can be proved by exhibiting a group action whose
orbit sizes are controlled. Common failure modes addressed: dividing by
the group order as if all orbits were equal-sized, asserting orbit sizes
without the stabilizer argument, and conflating "stabilizer of every
point is H" with "stabilizer of the base point is H". Sections are
self-contained forest objects (see x_forest in the frontmatter); links
into the ga-* problem ladder: problem/ga-koseti-simetrija-kvadrata
(coset refresher), problem/ga-orbits-on-cosets (orbit–stabilizer on
coset spaces), problem/ga-ogrlice-mali-fermat (the necklace argument as
exercises). Answers queries about group actions as counting arguments,
orbit-stabilizer applications, necklace proofs, and Burnside's lemma
motivation.
