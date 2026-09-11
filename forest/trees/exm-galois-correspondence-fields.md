---
id: "exm-galois-correspondence-fields"
taxon: "example"
title: "Subgroups and fixed fields: the eponymous connection"
teaches: [galois-connections]
requires: [subgroups, partial-orders]
language: "en"
digested_from: "blog/pf-galois-connections-everywhere"
standalone: true
depends: [def-galois-connection]
---

# Subgroups and fixed fields: the eponymous connection

The example the name comes from — and, read correctly, only an instance
of the general definition ([[def-galois-connection]]).

## The two posets and the two maps

Let $L/K$ be a finite Galois extension of fields with group
$G = \operatorname{Gal}(L/K)$, the group of field automorphisms of $L$
fixing $K$ pointwise. Put

- $\mathcal{H}$ = the subgroups $H \le G$, ordered by inclusion;
- $\mathcal{M}$ = the intermediate fields $K \subseteq M \subseteq L$,
  ordered by inclusion.

The two maps are
$$H \mapsto L^{H} = \{\, a \in L : \sigma(a) = a \ \text{for all}\
  \sigma \in H \,\} \quad (\text{the fixed field}),$$
$$M \mapsto \operatorname{Gal}(L/M) = \{\, \sigma \in G :
  \sigma(a) = a \ \text{for all}\ a \in M \,\} \quad
  (\text{the fixing group}).$$

They satisfy, for every $H \in \mathcal{H}$ and $M \in \mathcal{M}$,
$$M \subseteq L^{H} \iff H \subseteq \operatorname{Gal}(L/M),$$
because both sides say precisely the same thing: *every element of $H$
fixes every element of $M$.* That single symmetric sentence is the whole
verification.

## The wrinkle: this pair is antitone

Both maps **reverse** order — a bigger subgroup fixes a smaller field.
This is an *antitone* Galois connection, and the displayed equivalence
is its defining form (compare the monotone one,
$f(p) \le q \iff p \le g(q)$). It is the same notion after turning one
of the two posets upside down, so the whole theory applies with suprema
and infima swapped on the flipped side. Both composites
$$H \mapsto \operatorname{Gal}(L / L^{H}), \qquad
  M \mapsto L^{\operatorname{Gal}(L/M)}$$
are then closure operators, one on each side
([[thm-connection-induces-closure]]).

## Where the famous theorem sits

The connection itself needs **no hypotheses at all**: every relation of
the form "$\sigma$ fixes $a$" between two sets produces one, by exactly
this recipe. What the fundamental theorem of Galois theory adds, for a
*finite Galois* extension, is that the two maps are mutually inverse
**bijections** between all subgroups and all intermediate fields — that
is, that everything on both sides is already closed and the closure
operators are the identity.

So the correspondence splits into a cheap half and an expensive half.
The cheap half — the connection — is order theory and costs one line.
The expensive half — bijectivity — is field theory and needs
separability and normality. Calling the whole package "the Galois
correspondence" hides which half a given argument is actually using;
the exportable skeleton is the cheap one.
