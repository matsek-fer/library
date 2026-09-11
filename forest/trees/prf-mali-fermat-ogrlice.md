---
id: "prf-mali-fermat-ogrlice"
taxon: "proof"
title: "Dokaz malog Fermatova teorema vrtnjom ogrlica"
teaches: [orbits-stabilizers, modular-arithmetic]
requires: [cyclic-groups, modular-arithmetic]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [thm-mali-fermatov-teorem, thm-orbita-stabilizator, prp-orbite-particioniraju, thm-ga-lagrange-particija]
proves: "thm-mali-fermatov-teorem"
---

# Dokaz malog Fermatova teorema vrtnjom ogrlica

Dokazuje se [[thm-mali-fermatov-teorem]]: za prost $p$ i cijeli
$a \ge 1$ vrijedi $p \mid a^p - a$, a uz $p \nmid a$ i
$a^{p-1} \equiv 1 \pmod p$.

## Skup i grupa

Neka je $A$ skup od $a$ boja i neka je
$$X = A^{p} = \{\, s = (s_0, s_1, \dots, s_{p-1}) : s_i \in A \,\},
  \qquad |X| = a^{p},$$
skup svih nizova duljine $p$. Grupa $\mathbb{Z}/p\mathbb{Z}$ (zbrajanje
ostataka modulo $p$, red $p$) djeluje na $X$ cikličkim pomakom:
$$(k \cdot s)_i = s_{\,i + k \bmod p}.$$
To jest djelovanje: $(0 \cdot s)_i = s_i$, a
$\big((k+l) \cdot s\big)_i = s_{i+k+l} = (l \cdot s)_{i+k}
= \big(k \cdot (l \cdot s)\big)_i$, dakle vrijede oba aksioma.

## Koje su veličine orbita dopuštene

Za niz $s \in X$ teorem orbita–stabilizator
([[thm-orbita-stabilizator]]) daje
$$|\mathrm{Orb}(s)| \cdot |\mathrm{Stab}(s)| = |\mathbb{Z}/p\mathbb{Z}|
  = p,$$
gdje je $\mathrm{Stab}(s)$ podgrupa svih pomaka koji $s$ ostavljaju na
miru. Po Lagrangeovu teoremu ([[thm-ga-lagrange-particija]]) red te
podgrupe dijeli $p$, a $p$ je prost, pa je $\mathrm{Stab}(s)$ ili
trivijalan ili cijela grupa. Slučajeve čitamo ovako:

- **$\mathrm{Stab}(s)$ je cijela grupa.** Tada $s$ ostaje na miru i pod
  pomakom za $1$, tj. $s_{i+1} = s_i$ za sve $i$ (indeksi modulo $p$),
  pa su svi znakovi jednaki: $s$ je *konstantan*. Obrnuto, konstantan
  niz očito je fiksan za svaki pomak. Takvih nizova ima točno $a$ — po
  jedan za svaku boju — i svaki čini orbitu veličine $1$.
- **$\mathrm{Stab}(s)$ je trivijalan.** Tada orbita ima $p/1 = p$
  elemenata.

Drugih mogućnosti nema. Ovdje je prostost broja $p$ upotrijebljena prvi
put.

## Prebrojavanje

Orbite particioniraju $X$ ([[prp-orbite-particioniraju]]), pa je $|X|$
zbroj veličina orbita. Ako je $m$ broj orbita veličine $p$, tada je
$$a^{p} = |X| = \underbrace{a}_{\text{konstantni nizovi}} + p\,m,$$
dakle $a^{p} - a = p\,m$ i $p \mid a^{p} - a$.

## Drugi oblik

Neka je $p \nmid a$. Iz $a^{p} - a = a\,(a^{\,p-1} - 1)$ i
$p \mid a(a^{p-1} - 1)$ slijedi, jer je $p$ prost i ne dijeli $a$
(Euklidova lema), da $p \mid a^{\,p-1} - 1$, tj.
$$a^{\,p-1} \equiv 1 \pmod{p}. \qquad \blacksquare$$

Prostost broja $p$ upotrijebljena je dakle **dvaput**, i to na dva
različita mjesta: jednom da orbite budu veličine $1$ ili $p$, i drugi
put u Euklidovoj lemi. Zato dokaz ne preživljava prijelaz na složeni
modul, kao što ne preživljava ni sam teorem.

Korak po korak, kao zadatak s uputama: [[exr-ga-ogrlice-mali-fermat]].
