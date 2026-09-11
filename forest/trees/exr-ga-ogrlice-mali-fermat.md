---
id: "exr-ga-ogrlice-mali-fermat"
taxon: "exercise"
title: "Ogrlice, orbite i mali Fermatov teorem"
teaches: [orbits-stabilizers, modular-arithmetic]
requires: [group-actions, cyclic-groups, lagrange]
language: "hr"
digested_from: "problem/ga-ogrlice-mali-fermat"
standalone: true
depends: [def-djelovanje-grupe, prp-orbite-particioniraju, cor-velicina-orbite-dijeli-red]
x_annotation: "Bridge item between group actions and number theory: Fermat's little\ntheorem proved by letting the cyclic group $\\mathbb{Z}/p\\mathbb{Z}$ act\non length-$p$ strings over $a$ colours by cyclic rotation (the necklace\nargument). Tests whether the solver can verify an action given by an\nindex-shift formula, characterize the fixed points (one-element orbits\nare exactly the constant strings, $a$ of them), and use Lagrange plus\norbit–stabilizer to show every orbit has size 1 or $p$ because a\nstabilizer inside a group of prime order is trivial or everything.\nCounting $a^p = a + mp$ over the orbit partition yields\n$p \\mid a^p - a$, and Euclid's lemma converts this to\n$a^{p-1} \\equiv 1 \\pmod p$. Techniques: orbit counting, fixed-point\ncharacterization, prime order forcing orbit sizes, class equation in\nminiature. Instantiates the principle that a divisibility statement can\nbe proved by exhibiting a set of the right cardinality and a group\naction whose orbit sizes are controlled — congruences become geometry.\nAlso flags where primality is used twice (orbit sizes, Euclid's lemma)\nand that the composite analogue $n \\mid a^n - a$ fails. Common failure:\nasserting all non-fixed orbits have size $p$ without the stabilizer\nargument. Croatian-language item; answers queries linking group actions\nto number theory (Fermat/Euler via orbits, necklace counting)."
---

# Ogrlice, orbite i mali Fermatov teorem

Neka je $p$ prost broj i $a \ge 1$ prirodan broj. Promatramo *niske*:
nizove duljine $p$ čiji su članovi boje iz skupa od $a$ boja, dakle skup

$$X = \{1, 2, \dots, a\}^p, \qquad |X| = a^p.$$

Neka ciklička grupa $C_p = \mathbb{Z}/p\mathbb{Z}$ djeluje na $X$
cikličkim pomakom: generator $\sigma$ šalje nisku
$(x_1, x_2, \dots, x_p)$ u $(x_2, \dots, x_p, x_1)$, a klasa
$k \in \mathbb{Z}/p\mathbb{Z}$ djeluje kao $k$-terostruki pomak.
(Orbite ovog djelovanja zovemo *ogrlicama*: niska postaje ogrlica kad
zaboravimo gdje počinje.)

**(a)** Provjerite da je ovime zaista zadano djelovanje grupe
$\mathbb{Z}/p\mathbb{Z}$ na $X$.

**(b)** Dokažite da niska ima jednočlanu orbitu ako i samo ako je
*jednobojna*, tj. oblika $(x, x, \dots, x)$.

**(c)** Dokažite da svaka orbita ima ili $1$ ili $p$ elemenata.
(Uputa: koliko elemenata može imati stabilizator?)

**(d)** Prebrojavanjem elemenata skupa $X$ po orbitama dokažite

$$p \mid a^p - a.$$

**(e)** Izvedite mali Fermatov teorem: ako $p \nmid a$, onda

$$a^{p-1} \equiv 1 \pmod{p}.$$
