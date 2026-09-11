---
id: "cor-velicina-orbite-dijeli-red"
taxon: "corollary"
title: "Veličina orbite dijeli red grupe"
teaches: [orbit-stabilizer-theorem]
requires: [index]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [thm-orbita-stabilizator]
---

# Veličina orbite dijeli red grupe

Neka konačna grupa $G$ djeluje na skupu $X$ ($e \cdot x = x$,
$(gh) \cdot x = g \cdot (h \cdot x)$) i neka je
$\mathrm{Orb}(x) = \{g \cdot x : g \in G\}$ orbita točke $x \in X$.

**Korolar.** Za svaki $x \in X$ broj $|\mathrm{Orb}(x)|$ dijeli $|G|$.
Posebno, sve su orbite konačne i nijedna nije veća od $|G|$.

To je oblik u kojem se teorem orbita–stabilizator
([[thm-orbita-stabilizator]]) najčešće koristi u brojanju: prije nego
išta izračunamo, znamo da su dopuštene veličine hrpa isključivo
djelitelji reda grupe. Ako je $|G| = p$ prost, dopuštene veličine orbita
su samo $1$ i $p$ — a to je cijeli mehanizam dokaza malog Fermatova
teorema vrtnjom ogrlica ([[prf-mali-fermat-ogrlice]]).

Dokaz: [[prf-velicina-orbite-dijeli-red]].
