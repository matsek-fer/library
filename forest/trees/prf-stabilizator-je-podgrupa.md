---
id: "prf-stabilizator-je-podgrupa"
taxon: "proof"
title: "Dokaz: stabilizator je podgrupa"
teaches: []
requires: [subgroups]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [prp-stabilizator-je-podgrupa]
proves: "prp-stabilizator-je-podgrupa"
---

# Dokaz: stabilizator je podgrupa

Neka grupa $G$ djeluje na skupu $X$ uz $e \cdot x = x$ i
$(gh) \cdot x = g \cdot (h \cdot x)$, neka je $x \in X$ i
$H = \mathrm{Stab}(x) = \{g \in G : g \cdot x = x\}$. Dokazuje se
[[prp-stabilizator-je-podgrupa]].

Provjeravamo tri uvjeta iz kriterija za podgrupu.

**Neutralni element.** $e \cdot x = x$ po prvom aksiomu djelovanja,
dakle $e \in H$ i $H$ je neprazan.

**Zatvorenost na množenje.** Neka su $g, h \in H$, dakle $g \cdot x = x$
i $h \cdot x = x$. Tada je
$$(gh) \cdot x = g \cdot (h \cdot x) = g \cdot x = x,$$
pa je $gh \in H$.

**Zatvorenost na inverz.** Neka je $g \in H$, dakle $g \cdot x = x$.
Djelovanjem elementom $g^{-1}$ na obje strane te jednakosti dobivamo
$$g^{-1} \cdot x = g^{-1} \cdot (g \cdot x) = (g^{-1} g) \cdot x
  = e \cdot x = x,$$
pa je $g^{-1} \in H$.

Dakle je $H \le G$. $\blacksquare$

**Dodatak (konjugiranost unutar orbite).** Ako je $y = g \cdot x$, onda
za $u \in G$ vrijedi
$$u \cdot y = y \iff u \cdot (g \cdot x) = g \cdot x
  \iff (g^{-1}ug) \cdot x = x \iff g^{-1}ug \in \mathrm{Stab}(x),$$
gdje se u srednjem koraku na obje strane djeluje elementom $g^{-1}$.
Dakle je $\mathrm{Stab}(y) = g\,\mathrm{Stab}(x)\,g^{-1}$; posebno su
redovi stabilizatora duž jedne orbite jednaki.
