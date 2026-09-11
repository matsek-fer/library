---
id: "thm-orbita-stabilizator"
taxon: "theorem"
title: "Teorem orbita–stabilizator"
teaches: [orbit-stabilizer-theorem]
requires: [cosets, index]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [def-orbita-i-stabilizator, prp-stabilizator-je-podgrupa]
---

# Teorem orbita–stabilizator

Neka konačna grupa $G$ djeluje na skupu $X$ (dakle $e \cdot x = x$ i
$(gh) \cdot x = g \cdot (h \cdot x)$) i neka je $x \in X$. Orbita
$\mathrm{Orb}(x) = \{g \cdot x : g \in G\}$ skup je svih točaka na koje
$x$ putuje, a stabilizator
$\mathrm{Stab}(x) = \{g \in G : g \cdot x = x\}$ podgrupa je svih
elemenata koji $x$ fiksiraju ([[def-orbita-i-stabilizator]],
[[prp-stabilizator-je-podgrupa]]).

**Teorem.** Uz gornje pretpostavke, orbita je u bijekciji sa skupom
lijevih koseta stabilizatora, pa je
$$|\mathrm{Orb}(x)| = [\,G : \mathrm{Stab}(x)\,]
  \qquad\text{i}\qquad
  |\mathrm{Orb}(x)| \cdot |\mathrm{Stab}(x)| = |G|.$$

Ovdje je $[G : H]$ indeks podgrupe $H \le G$, tj. broj lijevih koseta
$gH = \{gh : h \in H\}$.

Formula se čita kao knjigovodstvo: svaki od $|G|$ elemenata grupe šalje
$x$ *negdje* u orbitu, a svako odredište prima **točno**
$|\mathrm{Stab}(x)|$ pošiljatelja — ni više, ni manje. Veliki
stabilizator znači malu orbitu i obrnuto; njihov je produkt nepomičan.

Dokaz: [[prf-orbita-stabilizator]]. Izravna posljedica:
[[cor-velicina-orbite-dijeli-red]]. Brojčana provjera na simetrijama
kvadrata: [[exm-kvadrat-orbita-stabilizator]].
