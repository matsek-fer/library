---
id: "exr-ga-koseti-simetrija-kvadrata"
taxon: "exercise"
title: "Koseti u grupi simetrija kvadrata"
teaches: [cosets, index]
requires: [subgroups, permutation-groups]
language: "hr"
digested_from: "problem/ga-koseti-simetrija-kvadrata"
standalone: true
depends: []
x_annotation: "First exercise after the definition of a coset, set in the dihedral group\nof the square (order 8) so every claim can be verified by direct\nmultiplication. Tests whether the solver can compute left cosets from a\npresentation ($sr = r^3s$), recognize that cosets partition the group, and\nread the index off as the number of cosets, confirming $|G| = |H|[G:H]$\nnumerically. Parts (c) and (d) plant the seed of normality without naming\nit: a subgroup where some left and right coset differ ($H = \\{e,s\\}$)\nversus a central subgroup ($K = \\{e, r^2\\}$) where they always agree.\nTechniques: coset enumeration in a small non-abelian group, using a\ncommutation relation to normalize words, verifying centrality.\nInstantiates the principle that cosets are equal-sized translates tiling\nthe group, and that left/right coset agreement is a special property of\nthe subgroup, not a general fact. Common failure: treating $gH$ and $Hg$\nas interchangeable, or listing $sH$ as a fifth coset instead of\nrecognizing it equals $eH$. Bottom rung of the coset-action ladder."
---

# Koseti u grupi simetrija kvadrata

Neka je $G$ grupa simetrija kvadrata: $G = \{e, r, r^2, r^3, s, rs, r^2s, r^3s\}$,
gdje je $r$ rotacija za $90^\circ$ u pozitivnom smjeru, $s$ zrcaljenje preko
vodoravne osi, a vrijedi $r^4 = e$, $s^2 = e$ i $sr = r^3 s$.

Neka je $H = \{e, s\}$.

**(a)** Odredite sve lijeve susjedne klase (kosete) $gH$ podgrupe $H$ u $G$.

**(b)** Provjerite da dobivene klase čine particiju skupa $G$ i odredite
indeks $[G : H]$.

**(c)** Izračunajte desnu klasu $Hr$ i usporedite je s lijevom klasom $rH$.
Jesu li jednake?

**(d)** Neka je $K = \{e, r^2\}$. Dokažite da za svaki $g \in G$ vrijedi
$gK = Kg$.
