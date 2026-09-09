---
id: "exr-qd-zbrojevi-oko-stola"
taxon: "exercise"
title: "Zbrojevi oko okruglog stola"
teaches: [pigeonhole]
requires: [modular-arithmetic]
language: "hr"
digested_from: "problem/qd-zbrojevi-oko-stola"
standalone: true
depends: []
x_annotation: "A divisibility problem whose statement mentions only integers around a\ntable and a divisible-by-14 consecutive block — the word \"pigeonhole\" never\nappears, yet the pigeonhole principle does all the work. The intended\nsolution introduces the fourteen-plus-one prefix sums $S_0, \\dots, S_{14}$,\nobserves that only fourteen residues mod 14 exist, and extracts a repeated\nresidue; the difference of the two equal-residue prefix sums is the desired\nconsecutive block.\n\nTechniques: pigeonhole principle (hidden — not named in the statement),\nprefix sums, residues modulo $n$, difference-of-partial-sums telescoping.\nThe circular seating is a deliberate red herring: linear consecutive blocks\nsuffice, and part of the test is noticing that. Generalizes verbatim from\n14 to any $n$.\n\nAbstract principle instantiated: to find a structured substructure (a zero\nsum, a divisible sum), map partial states into a finite set of classes and\nforce a collision; the collision's \"difference\" is the substructure. This\nis the standard bridge from pigeonhole to zero-sum/divisibility results.\nCommon failures: trying to choose the block greedily or by cases on signs;\napplying pigeonhole to the fourteen numbers themselves instead of to the\nfifteen prefix sums; forgetting $S_0 = 0$, without which there are only\nfourteen sums for fourteen residue classes, no collision is forced, and\nthe argument dies."
---

# Zbrojevi oko okruglog stola

Na sastanku Matematičke sekcije $14$ članova sjedi oko okruglog stola.
Svaki je član na papirić napisao po jedan cijeli broj — pozitivan,
negativan ili nulu, potpuno po volji.

Dokažite da postoji neprazna skupina članova koji sjede *uzastopno* (jedan
do drugoga, bez rupa) takva da je zbroj brojeva na njihovim papirićima
djeljiv s $14$.
