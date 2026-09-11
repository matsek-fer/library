---
id: "con-galois-connections-are-adjunctions"
taxon: "connection"
title: "Galois connections are adjunctions between thin categories"
teaches: [adjoint-functors]
requires: [categories-functors, limits-colimits]
language: "en"
digested_from: "blog/pf-galois-connections-everywhere"
standalone: true
depends: [def-galois-connection, thm-adjoints-preserve-bounds]
---

# Galois connections are adjunctions between thin categories

This tree bridges two subjects that are usually taught apart: **Galois
connections** in order theory — pairs $f \colon P \to Q$,
$g \colon Q \to P$ of maps between posets with $f(p) \le q \iff p \le
g(q)$ ([[def-galois-connection]]) — and **adjoint functors** in category
theory. They are not analogous. They are the same definition, read in
categories of two different sizes.

## The dictionary

A poset $(P, \le)$ *is* a category: objects are the elements, and there
is exactly one morphism $p \to p'$ when $p \le p'$ and none otherwise.
Categories of this shape — at most one morphism between any two objects
— are called **thin**. Under that reading:

| order theory | category theory |
|---|---|
| poset | thin category |
| monotone map | functor |
| $p \le p'$ | a morphism $p \to p'$ |
| supremum | colimit (coproduct of a family) |
| infimum | limit (product of a family) |

A monotone map is a functor because it preserves the "morphisms", i.e.
the relations $p \le p'$; functoriality on composition and identities is
automatic, since in a thin category there is nothing to check.

## The definition, translated

In a thin category, $\operatorname{Hom}(a, b)$ has one element if
$a \le b$ and none otherwise, so a bijection
$\operatorname{Hom}(f(p), q) \cong \operatorname{Hom}(p, g(q))$ says
precisely
$$f(p) \le q \iff p \le g(q).$$
The right-hand side is the Galois connection; the left-hand side, asked
of arbitrary categories and required to be natural in both variables, is
the definition of an **adjunction** $f \dashv g$. Galois connections
*are* adjoint pairs between thin categories — naturality being vacuous
there, since a hom-set with at most one element admits at most one
natural family of bijections.

## What the upgrade carries

The preservation theorem crosses with the dictionary. In posets: left
adjoints preserve existing suprema, right adjoints preserve existing
infima ([[thm-adjoints-preserve-bounds]]). In categories: **left
adjoints preserve colimits, right adjoints preserve limits** — and the
proof is the same one-line move of shipping the question across the
adjunction, with hom-set bijections in place of the equivalence of
inequalities.

That is the payoff of the translation: a theorem proved for posets in
four lines is, word for word, one of the load-bearing theorems of
category theory. And it earns its keep outside posets immediately —
free constructions are left adjoints, so they turn coproducts into
coproducts, whether or not any order is in sight
([[exm-abelianization-left-adjoint]]).
