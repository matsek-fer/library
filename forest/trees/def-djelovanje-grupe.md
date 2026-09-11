---
id: "def-djelovanje-grupe"
taxon: "definition"
title: "Djelovanje grupe na skupu"
teaches: [group-actions]
requires: [groups, sets, functions]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: []
---

# Djelovanje grupe na skupu

Neka je $G$ grupa s neutralnim elementom $e$ i neka je $X$ neprazan
skup.

**Definicija.** Grupa $G$ *djeluje* (slijeva) na skupu $X$ ako je zadano
preslikavanje
$$G \times X \to X, \qquad (g, x) \mapsto g \cdot x,$$
koje zadovoljava dva aksioma:

1. $e \cdot x = x$ za svaki $x \in X$ — neutralni element ne radi ništa;
2. $(gh) \cdot x = g \cdot (h \cdot x)$ za sve $g, h \in G$ i svaki
   $x \in X$ — djelovati produktom isto je što i djelovati desnim pa
   lijevim faktorom.

Skup $X$ tada zovemo $G$-skupom. Točka $x$ i element grupe $g$ ne moraju
biti iste vrste objekata: $G$ je grupa, $X$ je goli skup, a $\cdot$ je
vanjsko množenje između njih.

Drugi aksiom je jedini koji povezuje operaciju u grupi s premještanjem
točaka, i on je razlog zašto djelovanje nosi informaciju o grupi. Bez
njega bi „djelovanje" bila proizvoljna funkcija dviju varijabli.

Za fiksni $g \in G$ pišemo
$$\lambda_g : X \to X, \qquad \lambda_g(x) = g \cdot x,$$
pa se aksiomi čitaju kao $\lambda_e = \mathrm{id}_X$ i
$\lambda_{gh} = \lambda_g \circ \lambda_h$. Svaki je $\lambda_g$ zapravo
permutacija skupa $X$, a cijelo je djelovanje isto što i homomorfizam
$G \to \mathrm{Sym}(X)$; tvrdnja i dokaz su u
[[prp-djelovanje-kao-permutacije]].

Konkretni primjeri — simetrije kvadrata na vrhovima, ciklički pomaci na
nizovima, grupa na samoj sebi — razrađeni su u [[exm-tri-djelovanja]].

Postoji i zrcalna definicija *desnog* djelovanja, $x \cdot (gh) =
(x \cdot g) \cdot h$. Ovdje, kao i obično, „djelovanje" bez pridjeva
znači lijevo djelovanje.
