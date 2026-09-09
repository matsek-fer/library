---
id: "prf-pf-pomak-za-dva"
taxon: "proof"
title: "Rješenje: Funkcija koja raste za dva"
teaches: [functional-equations]
requires: [functions, induction]
language: "hr"
digested_from: "problem/pf-pomak-za-dva"
standalone: true
depends: [exr-pf-pomak-za-dva]
proves: "exr-pf-pomak-za-dva"
---

# Rješenje

Jedina informacija koju imamo jest kako se $f$ ponaša pri pomaku argumenta za
$1$, pa u jednadžbu uvrštavamo konkretne vrijednosti.

**a)** Uvrstimo redom $x = 0$, $x = 1$, $x = 2$:

$$
f(1) = f(0) + 2 = 1 + 2 = 3,
$$
$$
f(2) = f(1) + 2 = 3 + 2 = 5,
$$
$$
f(3) = f(2) + 2 = 5 + 2 = 7.
$$

**b)** Tvrdnju $f(n) = 2n + 1$ dokazujemo matematičkom indukcijom po $n$.

*Baza.* Za $n = 1$ smo u a) dijelu izračunali $f(1) = 3 = 2 \cdot 1 + 1$.

*Korak.* Pretpostavimo da za neki prirodni broj $n$ vrijedi $f(n) = 2n + 1$.
Uvrstimo $x = n$ u jednadžbu:

$$
f(n + 1) = f(n) + 2 = (2n + 1) + 2 = 2(n + 1) + 1.
$$

Tvrdnja dakle vrijedi i za $n + 1$, pa po principu matematičke indukcije
vrijedi za sve prirodne brojeve.

**c)** Jednadžba vrijedi za *svaki* realni $x$, pa smijemo uvrstiti i
$x = -1$:

$$
f(0) = f(-1) + 2 \quad \Longrightarrow \quad f(-1) = f(0) - 2 = 1 - 2 = -1.
$$

**Napomena.** Primijetimo da uvjeti ne određuju $f$ na cijelom $\mathbb{R}$ —
između cijelih brojeva funkcija može biti kakva god želi, dokle god se svaki
pomak za $1$ poklapa s porastom za $2$. Zadatak zato i pita samo za
vrijednosti koje iz uvjeta *slijede*.
