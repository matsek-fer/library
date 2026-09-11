---
id: "def-orbita-i-stabilizator"
taxon: "definition"
title: "Orbita i stabilizator"
teaches: [orbits-stabilizers]
requires: [groups, subgroups]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [def-djelovanje-grupe]
---

# Orbita i stabilizator

Neka grupa $G$ djeluje na skupu $X$: zadano je $(g, x) \mapsto g \cdot x$
uz $e \cdot x = x$ i $(gh) \cdot x = g \cdot (h \cdot x)$
([[def-djelovanje-grupe]]). Djelovanju pridružujemo dva osnovna objekta,
jedan u skupu $X$ i jedan u grupi $G$.

**Definicija (orbita).** *Orbita* točke $x \in X$ je skup svih mjesta na
koja $x$ može stići:
$$\mathrm{Orb}(x) = \{\, g \cdot x : g \in G \,\} \subseteq X.$$

**Definicija (stabilizator).** *Stabilizator* točke $x \in X$ je skup
svih elemenata grupe koji je ostavljaju na miru:
$$\mathrm{Stab}(x) = \{\, g \in G : g \cdot x = x \,\} \subseteq G.$$

Dvije su veličine komplementarne: orbita mjeri koliko se $x$ *miče*,
stabilizator koliko ga grupa *ne miče*. Obje ovise o točki $x$, ne samo
o grupi — različite točke istog skupa mogu imati orbite različitih
veličina.

Ako se $X$ sastoji od jedne jedine orbite, tj. ako za sve $x, y \in X$
postoji $g \in G$ s $g \cdot x = y$, kažemo da je djelovanje
**tranzitivno**. Točku $x$ sa $\mathrm{Orb}(x) = \{x\}$ zovemo
**fiksnom** točkom djelovanja; to je isto što i
$\mathrm{Stab}(x) = G$.

Oba objekta imaju strukturu koju definicija ne izriče, a koja je razlog
zašto su korisni:

- orbite čine particiju skupa $X$ ([[prp-orbite-particioniraju]]), pa se
  $|X|$ smije računati zbrajanjem po orbitama;
- stabilizator je podgrupa od $G$ ([[prp-stabilizator-je-podgrupa]]), pa
  Lagrangeov teorem ograničava njegovu veličinu.

Te dvije činjenice zajedno daju vezu između veličine orbite i reda grupe
([[thm-orbita-stabilizator]]).
