---
id: "prf-ga-podgrupe-reda-35"
taxon: "proof"
title: "Rješenje: Podgrupe i redovi elemenata u grupi reda 35"
teaches: [lagrange]
requires: [cosets, index, cyclic-groups]
language: "hr"
digested_from: "problem/ga-podgrupe-reda-35"
standalone: true
depends: [exr-ga-podgrupe-reda-35]
proves: "exr-ga-podgrupe-reda-35"
---

# Rješenje

Sve se oslanja na Lagrangeov teorem: red podgrupe konačne grupe dijeli
red grupe, a red elementa $x$ (red cikličke podgrupe $\langle x \rangle$)
dijeli $|G|$.

## (a) Mogući redovi podgrupa

Po Lagrangeovom teoremu $|H|$ dijeli $35 = 5 \cdot 7$. Djelitelji broja
$35$ su $1, 5, 7$ i $35$, pa su to jedine moguće vrijednosti. (Sve se i
ostvaruju barem u nekoj grupi reda 35: u cikličkoj grupi $\mathbb{Z}/35$
postoje podgrupe svih tih redova.)

## (b) $x^{35} = e$

Neka je $d$ red elementa $x$, tj. $d = |\langle x \rangle|$. Po (a),
$d \in \{1, 5, 7, 35\}$; u svakom slučaju $d \mid 35$, pa je $35 = dm$
za neki prirodni $m$ i

$$x^{35} = (x^d)^m = e^m = e.$$

## (c) Redovi netrivijalnih elemenata

Red elementa dijeli $35$, dakle iznosi $1$, $5$, $7$ ili $35$. Red $1$
ima jedino neutralni element (jer $x^1 = e$ znači $x = e$). Za $x \neq e$
preostaju $5$, $7$ i $35$.

## (d) Presjek podgrupa redova 5 i 7

Presjek $H \cap K$ je podgrupa i od $H$ i od $K$, pa po Lagrangeovom
teoremu $|H \cap K|$ dijeli $|H| = 5$ i $|K| = 7$. Jedini zajednički
djelitelj brojeva $5$ i $7$ je $1$, dakle $|H \cap K| = 1$, tj.
$H \cap K = \{e\}$.

## (e) Prave podgrupe su cikličke

Neka je $H < G$ prava podgrupa. Po (a) je $|H| \in \{1, 5, 7\}$.

- Ako je $|H| = 1$, tada je $H = \{e\} = \langle e \rangle$, ciklička.
- Ako je $|H| = p$ za $p \in \{5, 7\}$ (prost broj), uzmimo bilo koji
  $x \in H$, $x \neq e$. Red od $x$ dijeli $p$ i nije $1$, pa je jednak
  $p$. Tada ciklička podgrupa $\langle x \rangle \le H$ ima $p$
  elemenata, koliko i $H$, pa je $\langle x \rangle = H$.

U oba slučaja $H$ je ciklička. (Usput smo dokazali općenitu činjenicu:
svaka grupa prostog reda je ciklička i generira je svaki netrivijalni
element.)
