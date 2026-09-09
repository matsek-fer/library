---
id: "prf-ga-ogrlice-mali-fermat"
taxon: "proof"
title: "Rješenje: Ogrlice, orbite i mali Fermatov teorem"
teaches: [orbits-stabilizers, modular-arithmetic]
requires: [group-actions, cyclic-groups, lagrange]
language: "hr"
digested_from: "problem/ga-ogrlice-mali-fermat"
standalone: true
depends: [exr-ga-ogrlice-mali-fermat]
proves: "exr-ga-ogrlice-mali-fermat"
---

# Rješenje

## (a) Djelovanje je dobro zadano

Pišimo indekse niski kao elemente skupa $\{1, \dots, p\}$ i računajmo s
njima modulo $p$. Djelovanje klase $k$ na nisku $x = (x_1, \dots, x_p)$
zadano je s $(k \cdot x)_i = x_{i+k}$, gdje se indeks $i + k$ uzima
modulo $p$. Prvo, definicija ne ovisi o predstavniku klase $k$: ako je
$k' = k + mp$, indeksi $i + k'$ i $i + k$ podudaraju se modulo $p$.

Aksiomi djelovanja: klasa $0$ djeluje kao identiteta jer je
$(0 \cdot x)_i = x_i$. Za kompatibilnost,

$$(k \cdot (l \cdot x))_i = (l \cdot x)_{i+k} = x_{i+k+l}
  = ((k+l) \cdot x)_i,$$

dakle $k \cdot (l \cdot x) = (k + l) \cdot x$. Time je zadano djelovanje
grupe $\mathbb{Z}/p\mathbb{Z}$ na $X$.

## (b) Jednočlane orbite su jednobojne niske

Orbita niske $x$ jednočlana je ako i samo ako svaki pomak fiksira $x$;
dovoljno je (i nužno) da je fiksira generator: $1 \cdot x = x$, tj.
$x_{i+1} = x_i$ za svaki $i$. Lančano slijedi $x_1 = x_2 = \dots = x_p$,
dakle $x$ je jednobojna. Obratno, jednobojnu nisku svaki pomak očito
ostavlja na mjestu, pa joj je orbita $\{x\}$. Jednobojnih niski ima
točno $a$ — po jedna za svaku boju.

## (c) Orbite imaju 1 ili p elemenata

Stabilizator $\mathrm{Stab}(x)$ podgrupa je grupe
$\mathbb{Z}/p\mathbb{Z}$, koja ima $p$ elemenata. Po Lagrangeovom
teoremu $|\mathrm{Stab}(x)|$ dijeli $p$, a kako je $p$ prost, vrijedi
$|\mathrm{Stab}(x)| \in \{1, p\}$. Teorem o orbiti i stabilizatoru daje

$$|\mathrm{Orb}(x)| = \frac{|\mathbb{Z}/p\mathbb{Z}|}{|\mathrm{Stab}(x)|}
  = \frac{p}{|\mathrm{Stab}(x)|} \in \{p, 1\}.$$

## (d) Prebrojavanje po orbitama

Orbite čine particiju skupa $X$. Po (b) i (c), jednočlanih orbita ima
točno $a$ (jednobojne niske), a sve ostale orbite imaju po $p$
elemenata. Označimo li broj $p$-članih orbita s $m$, prebrojavanje
elemenata skupa $X$ po orbitama daje

$$a^p = |X| = a + mp,$$

odakle je $a^p - a = mp$, tj. $p \mid a^p - a$.

## (e) Mali Fermatov teorem

Iz (d) je $p \mid a(a^{p-1} - 1)$. Ako $p \nmid a$, tada je (jer je $p$
prost) $p$ relativno prost s $a$, pa iz Euklidove leme slijedi
$p \mid a^{p-1} - 1$, to jest

$$a^{p-1} \equiv 1 \pmod{p}. \qquad \blacksquare$$

Primijetimo gdje je prostost broja $p$ upotrijebljena dvaput: u (c), da
orbite nemaju međuveličina, i u (e), u Euklidovoj lemi. Za složeni $n$
tvrdnja $n \mid a^n - a$ doista može pasti (npr. $4 \nmid 2^4 - 2 = 14$).
