---
id: "prf-pf-slozni-susjedi"
taxon: "proof"
title: "Rješenje: Složni susjedi za okruglim stolom"
teaches: [linearity-of-expectation]
requires: [probability-basics, random-variables, expectation]
language: "hr"
digested_from: "problem/pf-slozni-susjedi"
standalone: true
depends: [exr-pf-slozni-susjedi]
proves: "exr-pf-slozni-susjedi"
---

# Rješenje

Za stolom sjedi $n$ članova, pa postoji točno $n$ parova susjeda: svaki član
čini par sa svojim desnim susjedom, a obilaskom stola svaki se par tako broji
točno jednom.

Označimo parove susjeda redom $P_1, P_2, \dots, P_n$ i za svaki par definirajmo
slučajnu varijablu

$$
X_i = \begin{cases} 1, & \text{ako je par } P_i \text{ složan}, \\ 0, & \text{inače}. \end{cases}
$$

Ukupan broj složnih parova tada je $X = X_1 + X_2 + \dots + X_n$.

**Očekivanje jednog para.** Promotrimo jedan par susjeda. Njihova dva bacanja
su neovisna, pa su sva četiri ishoda $(\text{P},\text{P})$, $(\text{P},\text{G})$,
$(\text{G},\text{P})$, $(\text{G},\text{G})$ jednako vjerojatna. U točno dva od
njih ishodi se podudaraju, pa je

$$
\mathbb{E}[X_i] = \Pr(P_i \text{ je složan}) = \frac{2}{4} = \frac{1}{2}.
$$

**Zbrajanje.** Očekivanje zbroja slučajnih varijabli jednako je zbroju
očekivanja — i to *bez ikakve pretpostavke o neovisnosti*. To je ovdje ključno:
varijable $X_i$ i $X_{i+1}$ nisu neovisne (dijele zajedničkog člana), ali to
očekivanju ne smeta. Dakle,

$$
\mathbb{E}[X] = \sum_{i=1}^{n} \mathbb{E}[X_i] = n \cdot \frac{1}{2} = \frac{n}{2}.
$$

**Odgovor.** Očekivani broj složnih parova susjeda je $\dfrac{n}{2}$.

**Napomena.** Pokušaj izravnog računanja razdiobe od $X$ brzo se zapetlja:
susjedni parovi se preklapaju, pa broj složnih parova nema ni binomnu ni neku
drugu standardnu razdiobu. Rastavljanje na indikatore zaobilazi cijelu tu
poteškoću.
