---
id: "prp-stabilizator-je-podgrupa"
taxon: "proposition"
title: "Stabilizator je podgrupa"
teaches: [orbits-stabilizers]
requires: [subgroups]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [def-orbita-i-stabilizator]
---

# Stabilizator je podgrupa

Neka grupa $G$ djeluje na skupu $X$ ($e \cdot x = x$,
$(gh) \cdot x = g \cdot (h \cdot x)$) i neka je $x \in X$. Stabilizator
te točke je $\mathrm{Stab}(x) = \{g \in G : g \cdot x = x\}$
([[def-orbita-i-stabilizator]]).

**Propozicija.** $\mathrm{Stab}(x)$ je podgrupa grupe $G$.

Tvrdnja je ono što stabilizatoru daje aritmetičku težinu: kao podgrupa,
$\mathrm{Stab}(x)$ ima red koji po Lagrangeovu teoremu dijeli $|G|$ i
ima indeks $[G : \mathrm{Stab}(x)]$ — a upravo je taj indeks veličina
orbite ([[thm-orbita-stabilizator]]).

Dokaz: [[prf-stabilizator-je-podgrupa]].

Napomena o ovisnosti o točki: različite točke iste orbite imaju
različite (ali konjugirane) stabilizatore — iz $y = g \cdot x$ slijedi
$\mathrm{Stab}(y) = g\,\mathrm{Stab}(x)\,g^{-1}$. Redovi su im dakle
jednaki, što je i nužno jer im je orbita ista.
