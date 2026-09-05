A divisibility problem whose statement mentions only integers around a
table and a divisible-by-14 consecutive block — the word "pigeonhole" never
appears, yet the pigeonhole principle does all the work. The intended
solution introduces the fourteen-plus-one prefix sums $S_0, \dots, S_{14}$,
observes that only fourteen residues mod 14 exist, and extracts a repeated
residue; the difference of the two equal-residue prefix sums is the desired
consecutive block.

Techniques: pigeonhole principle (hidden — not named in the statement),
prefix sums, residues modulo $n$, difference-of-partial-sums telescoping.
The circular seating is a deliberate red herring: linear consecutive blocks
suffice, and part of the test is noticing that. Generalizes verbatim from
14 to any $n$.

Abstract principle instantiated: to find a structured substructure (a zero
sum, a divisible sum), map partial states into a finite set of classes and
force a collision; the collision's "difference" is the substructure. This
is the standard bridge from pigeonhole to zero-sum/divisibility results.
Common failures: trying to choose the block greedily or by cases on signs;
applying pigeonhole to the fourteen numbers themselves instead of to the
fifteen prefix sums; forgetting $S_0 = 0$, without which there are only
fourteen sums for fourteen residue classes, no collision is forced, and
the argument dies.
