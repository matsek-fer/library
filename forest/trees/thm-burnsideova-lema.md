---
id: "thm-burnsideova-lema"
taxon: "theorem"
title: "Burnsideova lema: broj orbita je prosjek fiksnih točaka"
teaches: [orbits-stabilizers, group-actions]
requires: [groups]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [def-orbita-i-stabilizator]
---

# Burnsideova lema: broj orbita je prosjek fiksnih točaka

Neka konačna grupa $G$ djeluje na konačnom skupu $X$ ($e \cdot x = x$,
$(gh) \cdot x = g \cdot (h \cdot x)$). Orbita točke $x$ je
$\mathrm{Orb}(x) = \{g \cdot x : g \in G\}$
([[def-orbita-i-stabilizator]]), a za element grupe $g \in G$ neka je
$$\mathrm{Fix}(g) = \{\, x \in X : g \cdot x = x \,\}$$
skup točaka koje **taj** element ostavlja na miru. (Ne treba ga brkati
sa stabilizatorom: $\mathrm{Fix}(g)$ je podskup od $X$ i uzima fiksni
element grupe, dok je $\mathrm{Stab}(x)$ podskup od $G$ i uzima fiksnu
točku skupa.)

**Teorem (Burnsideova lema).** Uz gornje pretpostavke, broj orbita
djelovanja jednak je prosječnom broju fiksnih točaka elemenata grupe:
$$\#\{\text{orbite}\} \;=\; \frac{1}{|G|} \sum_{g \in G}
  \big|\mathrm{Fix}(g)\big| .$$

Teorem orbita–stabilizator ([[thm-orbita-stabilizator]]) odgovara na
pitanje „koliko je velika *jedna* hrpa?"; Burnsideova lema odgovara na
sljedeće prirodno pitanje, „koliko hrpa ima?". Most između njih je
prebrojavanje parova $(g, x)$ s $g \cdot x = x$ na dva načina —
[[prf-burnsideova-lema]].

Praktična vrijednost leme je u tome što se desna strana računa
*elementom po elementom grupe*, bez ikakvog poznavanja orbita. Zbog toga
ona ispravno dovršava brojanja u kojima naivno dijeljenje s $|G|$
zakaže: [[exm-ogrlice-tri-perle]].

Ime je povijesna nepravda — rezultat je poznat Cauchyju i Frobeniusu
prije nego što ga je Burnside uvrstio u svoj udžbenik — pa se u
literaturi sreće i kao *lema koja nije Burnsideova*.
