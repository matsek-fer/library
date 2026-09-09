---
id: "prf-sc-putujuci-brijeg"
taxon: "proof"
title: "Rješenje: Putujući brijeg"
teaches: [uniform-convergence]
requires: [pointwise-convergence, epsilon-delta-continuity]
language: "hr"
digested_from: "problem/sc-putujuci-brijeg"
standalone: true
depends: [exr-sc-putujuci-brijeg]
proves: "exr-sc-putujuci-brijeg"
---

# Rješenje

## (a) Limes po točkama je nulfunkcija

Za $x = 0$ je $h_n(0) = 0$ za svaki $n$, pa je limes $0$.

Za fiksirani $x \in (0,1]$ odbacimo jedinicu u nazivniku:

$$0 \ \le\ h_n(x) = \frac{2nx}{1 + n^{2}x^{2}} \ \le\ \frac{2nx}{n^{2}x^{2}} = \frac{2}{nx} \longrightarrow 0 \quad (n \to \infty),$$

jer je $x > 0$ fiksiran. Po teoremu o sendviču $h_n(x) \to 0$. Dakle
$h_n \to 0$ po točkama na cijelom $[0,1]$.

## (b) Maksimum je $1$, u točki koja putuje

Iz $(nx - 1)^{2} \ge 0$ slijedi nejednakost između aritmetičke i geometrijske
sredine u obliku

$$1 + n^{2}x^{2} \ \ge\ 2nx, \qquad\text{s jednakošću točno za } nx = 1,$$

pa je $h_n(x) \le 1$ za svaki $x \ge 0$, s jednakošću jedino u $x = \tfrac{1}{n}$.
Kako je $\tfrac1n \in (0,1]$ za svaki $n \ge 1$, ta točka leži u segmentu, pa

$$\max_{x\in[0,1]} h_n(x) = h_n\!\left(\tfrac{1}{n}\right) = 1.$$

Stoga je

$$\sup_{x\in[0,1]} |h_n(x) - 0| = 1 \not\longrightarrow 0,$$

pa konvergencija na $[0,1]$ **nije uniformna**. Graf funkcije $h_n$ je
"brijeg" visine $1$ s vrhom u $x = \tfrac1n$: kako $n$ raste, brijeg se ne
snižava nego samo *putuje* prema nuli i sužava se — u svakoj fiksnoj točki
prije ili poslije prođe, ali supremum ostaje $1$.

## (c) Na $[\delta, 1]$ brijeg pobjegne

Neka je $x \in [\delta, 1]$. Ista ocjena kao u (a) sada je uniformna po $x$:

$$0 \ \le\ h_n(x) \ \le\ \frac{2}{nx} \ \le\ \frac{2}{n\delta},$$

a desna strana ne ovisi o $x$ i teži nuli. Dakle

$$\sup_{x\in[\delta,1]} |h_n(x) - 0| \ \le\ \frac{2}{n\delta} \longrightarrow 0,$$

pa je konvergencija na $[\delta,1]$ **uniformna**. (Slikovito: čim je
$n > \tfrac1\delta$, vrh brijega $x = \tfrac1n$ ispadne iz $[\delta,1]$ —
brijeg je pobjegao iz segmenta, a na segmentu ostane samo njegova sve niža
padina.)

## (d) Neprekidnost limesa ništa ne jamči

Ne može. Teorem o uniformnom limesu kaže: *ako* je konvergencija uniformna i
sve su $h_n$ neprekidne, *onda* je granična funkcija neprekidna. To je
implikacija samo u jednom smjeru — neprekidna granična funkcija ne povlači
uniformnost. Ovaj niz je protuprimjer za obrat: sve su $h_n$ neprekidne i
granična funkcija $0$ je neprekidna, a konvergencija po (b) ipak nije
uniformna.

Neprekidnost limesa može, dakle, uniformnost samo **oboriti** (kad limes
ispadne prekidan, kao kod potencija na segmentu), nikad je **potvrditi**:
za potvrdu se mora ocijeniti supremum, kao u (c).
