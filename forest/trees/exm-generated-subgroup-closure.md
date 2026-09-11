---
id: "exm-generated-subgroup-closure"
taxon: "example"
title: "Generated subgroups as a closure operator"
teaches: [closure-operators]
requires: [subgroups, partial-orders]
language: "en"
digested_from: "blog/pf-galois-connections-everywhere"
standalone: true
depends: [thm-connection-induces-closure, def-galois-connection, thm-adjoints-preserve-bounds]
---

# Generated subgroups as a closure operator

A worked instance of the machinery: a Galois connection whose induced
closure operator is one every algebra course already uses.

## The connection

Let $G$ be a group. Take the two posets

- $P = $ all subsets $S \subseteq G$, ordered by inclusion;
- $Q = $ all subgroups $H \le G$, ordered by inclusion,

and the two maps
$$f(S) = \langle S \rangle \quad
  (\text{the smallest subgroup of } G \text{ containing } S),
  \qquad
  g(H) = H \ \text{regarded as a subset}.$$

The defining equivalence of a Galois connection
([[def-galois-connection]]) reads
$$\langle S \rangle \subseteq H \iff S \subseteq g(H),$$
and this is exactly the universal property of the generated subgroup:
$\langle S \rangle$ is contained in a subgroup $H$ precisely when $S$
is. So $f \dashv g$, with $f$ the lower adjoint and the forgetful map
$g$ the upper one.

(The "smallest subgroup containing $S$" exists because an intersection
of subgroups is a subgroup, so
$\langle S \rangle = \bigcap \{H \le G : S \subseteq H\}$; the
intersection is over a non-empty family, since $G$ itself qualifies.)

## What the theorem hands back

The composite $c = g \circ f$ is a closure operator on the subsets of
$G$ ([[thm-connection-induces-closure]]):
$$c(S) = \langle S \rangle \ \text{as a subset}.$$
Extensive: $S \subseteq \langle S \rangle$. Monotone: a bigger subset
generates a bigger subgroup. Idempotent:
$\langle \langle S \rangle \rangle = \langle S \rangle$. The closed
subsets — the fixed points of $c$ — are, by the theorem, exactly the
image of $g$: **the subsets that are subgroups**. All three properties,
plus the identification of the closed sets, arrive without a single
group-theoretic computation.

The preservation theorem contributes its half too
([[thm-adjoints-preserve-bounds]]): $f$ is a lower adjoint, so it
carries suprema to suprema. The supremum of subsets is their union; the
supremum of subgroups is the subgroup they jointly generate. So
$$\Big\langle \bigcup_i S_i \Big\rangle
  = \bigvee_i \langle S_i \rangle,$$
the join of the generated subgroups — which is *not* their union, and
the formula is a reminder of why joins of subgroups are defined the way
they are.

## The same template elsewhere

Replace (subsets, subgroups) by (subsets of a vector space, subspaces)
and $c$ is the span; by (subsets of a ring, ideals) and $c$ is the
generated ideal; by (subsets of a topological space, closed sets) and
$c$ is the topological closure; by (sets of formulas, deductively closed
theories) and $c$ is deductive closure. One theorem, many syllabi — and
in each case the closed elements are read off the same way
([[def-closure-operator]]).
