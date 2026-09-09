---
id: "prf-pf-zamjena-argumenta"
taxon: "proof"
title: "Rješenje: Dvije jednadžbe iz jedne zamjene"
teaches: [functional-equations]
requires: [functions]
language: "hr"
digested_from: "problem/pf-zamjena-argumenta"
standalone: true
depends: [exr-pf-zamjena-argumenta]
proves: "exr-pf-zamjena-argumenta"
---

# Rješenje

U jednadžbi se pojavljuju vrijednosti funkcije u dvjema točkama, $x$ i
$1 - x$. Ključno je opažanje da zamjena $x \mapsto 1 - x$ te dvije točke samo
*zamijeni*: iz $1 - x$ ponovno dobivamo $1 - (1 - x) = x$.

**Druga jednadžba.** Jednadžba vrijedi za svaki realni broj, pa smijemo
umjesto $x$ uvrstiti $1 - x$:

$$
f(1 - x) + 2 f(x) = 3(1 - x)^2.
$$

Sada za svaki fiksni $x$ imamo sustav dviju linearnih jednadžbi s dvjema
nepoznanicama $a = f(x)$ i $b = f(1 - x)$:

$$
a + 2b = 3x^2, \qquad b + 2a = 3(1 - x)^2.
$$

**Rješavanje sustava.** Pomnožimo drugu jednadžbu s $2$ pa od nje oduzmimo
prvu:

$$
(2b + 4a) - (a + 2b) = 6(1 - x)^2 - 3x^2 \quad \Longrightarrow \quad 3a = 6(1 - x)^2 - 3x^2,
$$

odakle je

$$
f(x) = a = 2(1 - x)^2 - x^2 = 2 - 4x + 2x^2 - x^2 = x^2 - 4x + 2.
$$

**Provjera.** Rješavanje sustava pokazuje da je ovo *jedini kandidat*, ali
još moramo provjeriti da doista zadovoljava polaznu jednadžbu. Za
$f(x) = x^2 - 4x + 2$ imamo

$$
f(1 - x) = (1 - x)^2 - 4(1 - x) + 2 = 1 - 2x + x^2 - 4 + 4x + 2 = x^2 + 2x - 1,
$$

pa je

$$
f(x) + 2 f(1 - x) = (x^2 - 4x + 2) + (2x^2 + 4x - 2) = 3x^2. \checkmark
$$

**Odgovor.** Jedina takva funkcija je $f(x) = x^2 - 4x + 2$.
