---
id: "exr-qd-centar-diedarske"
taxon: "exercise"
title: "Kvocijent diedarske grupe po njezinu središtu"
teaches: [quotient-groups, normal-subgroups]
requires: [groups, cosets, conjugation]
language: "hr"
digested_from: "problem/qd-centar-diedarske"
standalone: true
depends: []
x_annotation: "Tests hands-on quotient-group technique in a small non-abelian setting: a\nnormality check done by explicit conjugation (not by citing a theorem), the\nconstruction of a coset multiplication table via representatives, and the\nidentification of a quotient's isomorphism type purely from element orders.\nThe group is the dihedral group of the square, the subgroup its center.\n\nTechniques: the rewriting rule $sr^k = r^{-k}s$ for dihedral computations,\ncenter computation by checking commutation with generators, normality\nverified elementwise by conjugation, coset arithmetic with well-definedness\njustified by normality, detecting the Klein four-group by the criterion\n\"every element squares to the identity, hence no element of order 4, hence\nnot cyclic\". The solution deliberately avoids the first isomorphism\ntheorem — no homomorphism or kernel appears; the isomorphism type is read\noff the coset table directly. Suitable for queries that exclude\nfirst-iso-theorem machinery.\n\nAbstract principle instantiated: quotienting by the center collapses\nexactly the failure of commutativity — the coset table of $D_4/Z(D_4)$ is\nsymmetric although $D_4$ is non-abelian. Also illustrates that central\nsubgroups are normal for the trivial reason that conjugation fixes them.\nCommon failures: multiplying cosets without checking well-definedness;\nconcluding cyclicity from the group being generated \"by one coset and its\npowers\" without computing orders; mis-applying $sr = rs$ in a dihedral\ngroup."
---

# Kvocijent diedarske grupe po njezinu središtu

Neka je $D_4$ grupa simetrija kvadrata: $r$ je rotacija za $90^\circ$, $s$
zrcaljenje preko jedne osi simetrije, a vrijede relacije
$$r^4 = s^2 = e, \qquad sr = r^{-1}s.$$
Grupa ima $8$ elemenata: $e, r, r^2, r^3, s, rs, r^2s, r^3s$.

Neka je $N = \{e, r^2\}$.

**(a)** Dokažite da je $N$ upravo središte grupe $D_4$, tj. da su $e$ i $r^2$
jedini elementi koji komutiraju sa svim elementima grupe.

**(b)** Dokažite izravnim računom s konjugiranjem da je $N$ normalna
podgrupa od $D_4$.

**(c)** Popišite sve elemente kvocijentne grupe $D_4/N$ i sastavite njezinu
tablicu množenja.

**(d)** Dokažite da $D_4/N$ nije ciklička. Zaključite da je $D_4/N$
Kleinova četvorna grupa: grupa reda $4$ u kojoj svaki element zadovoljava
$x^2 = e$.
