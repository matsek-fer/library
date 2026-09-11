---
id: "prf-orbite-particioniraju"
taxon: "proof"
title: "Dokaz: orbite particioniraju skup"
teaches: []
requires: [sets]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [prp-orbite-particioniraju]
proves: "prp-orbite-particioniraju"
---

# Dokaz: orbite particioniraju skup

Neka grupa $G$ djeluje na skupu $X$ uz aksiome $e \cdot x = x$ i
$(gh) \cdot x = g \cdot (h \cdot x)$, i neka je
$\mathrm{Orb}(x) = \{g \cdot x : g \in G\}$. Dokazuje se
[[prp-orbite-particioniraju]].

Na $X$ definiramo relaciju
$$x \sim y \quad :\Longleftrightarrow \quad
  y = g \cdot x \ \text{ za neki } g \in G.$$

Tvrdimo da je $\sim$ relacija ekvivalencije; svaki od tri uvjeta troši
točno jedno svojstvo grupe.

- *Refleksivnost.* $x = e \cdot x$, pa je $x \sim x$ — prvi aksiom
  djelovanja.
- *Simetričnost.* Ako je $y = g \cdot x$, onda je
  $$g^{-1} \cdot y = g^{-1} \cdot (g \cdot x) = (g^{-1} g) \cdot x
    = e \cdot x = x,$$
  dakle $y \sim x$ — postojanje inverza.
- *Tranzitivnost.* Ako je $y = g \cdot x$ i $z = h \cdot y$, onda je
  $$z = h \cdot (g \cdot x) = (hg) \cdot x,$$
  dakle $x \sim z$ — zatvorenost na množenje.

Klasa ekvivalencije točke $x$ je po definiciji
$\{y : x \sim y\} = \{g \cdot x : g \in G\} = \mathrm{Orb}(x)$. Klase
ekvivalencije jedne relacije ekvivalencije pokrivaju skup i u parovima
su ili jednake ili disjunktne, pa to isto vrijedi za orbite.

Za konačan $X$: odabir po jednog predstavnika $x_1, \dots, x_r$ iz svake
klase daje rastav $X$ na disjunktnu uniju
$\mathrm{Orb}(x_1) \cup \dots \cup \mathrm{Orb}(x_r)$, a veličina
disjunktne unije zbroj je veličina, tj.
$|X| = \sum_{i=1}^r |\mathrm{Orb}(x_i)|$. $\blacksquare$
