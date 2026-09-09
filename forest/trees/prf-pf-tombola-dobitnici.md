---
id: "prf-pf-tombola-dobitnici"
taxon: "proof"
title: "Rješenje: Koliko različitih dobitnika ima tombola?"
teaches: [linearity-of-expectation]
requires: [probability-basics, random-variables, expectation]
language: "hr"
digested_from: "problem/pf-tombola-dobitnici"
standalone: true
depends: [exr-pf-tombola-dobitnici]
proves: "exr-pf-tombola-dobitnici"
---

# Rješenje

Tražimo očekivani broj *različitih* imena koja se pojave u $k$ izvlačenja.
Umjesto da pratimo cijeli tijek izvlačenja, promatrajmo svakog člana zasebno.

Za člana $i \in \{1, \dots, n\}$ definirajmo

$$
X_i = \begin{cases} 1, & \text{ako član } i \text{ osvoji barem jednu nagradu}, \\ 0, & \text{inače}. \end{cases}
$$

Broj članova s barem jednom nagradom tada je $X = X_1 + \dots + X_n$.

**Vjerojatnost za jednog člana.** Budući da se listić svaki put vraća u
bubanj, svako je izvlačenje neovisno i u svakom je vjerojatnost da bude
izvučen baš član $i$ jednaka $\frac{1}{n}$. Lakše je izračunati suprotan
događaj — da član $i$ *ne osvoji ništa*:

$$
\Pr(X_i = 0) = \left(1 - \frac{1}{n}\right)^{k},
$$

jer član $i$ mora biti promašen u svih $k$ neovisnih izvlačenja. Stoga je

$$
\mathbb{E}[X_i] = \Pr(X_i = 1) = 1 - \left(1 - \frac{1}{n}\right)^{k}.
$$

**Zbrajanje.** Varijable $X_i$ nisu neovisne — ako je prvih $k-1$ nagrada
odnio jedan te isti član, šanse ostalih izgledaju drukčije — ali očekivanje
zbroja je zbroj očekivanja bez obzira na to. Svih $n$ članova je u istom
položaju, pa je

$$
\mathbb{E}[X] = \sum_{i=1}^{n} \mathbb{E}[X_i] = n \left( 1 - \left(1 - \frac{1}{n}\right)^{k} \right).
$$

**Odgovor.** Očekivani broj različitih dobitnika je
$n \left( 1 - \left( 1 - \frac{1}{n} \right)^{k} \right)$.

**Provjera na rubovima.** Za $k = 1$ formula daje $n \cdot \frac{1}{n} = 1$:
jedna nagrada, točno jedan dobitnik. Kad $k \to \infty$, izraz teži prema $n$:
uz dovoljno nagrada svatko na kraju nešto osvoji. Za velike $n$ i $k = n$
očekivani udio dobitnika teži prema $1 - \frac{1}{e} \approx 63\%$ — čak i uz
onoliko nagrada koliko je članova, oko trećine članova prosječno ostane
praznih ruku.
