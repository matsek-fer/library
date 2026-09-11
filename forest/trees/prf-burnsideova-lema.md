---
id: "prf-burnsideova-lema"
taxon: "proof"
title: "Dokaz Burnsideove leme dvostrukim prebrojavanjem"
teaches: [orbits-stabilizers]
requires: [groups]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [thm-burnsideova-lema, thm-orbita-stabilizator, prp-orbite-particioniraju]
proves: "thm-burnsideova-lema"
---

# Dokaz Burnsideove leme dvostrukim prebrojavanjem

Neka konačna grupa $G$ djeluje na konačnom skupu $X$, neka je
$\mathrm{Stab}(x) = \{g \in G : g \cdot x = x\}$ i
$\mathrm{Fix}(g) = \{x \in X : g \cdot x = x\}$. Dokazuje se
[[thm-burnsideova-lema]].

Promotrimo skup *incidencija*
$$I = \{\, (g, x) \in G \times X : g \cdot x = x \,\}$$
i prebrojimo ga dvaput, jednom po elementima grupe i jednom po točkama
skupa. Isti broj, dva izraza — odatle cijela lema.

## Brojanje po elementima grupe

Grupiramo parove po prvoj koordinati. Za fiksni $g$ parovi u $I$ s tim
$g$ odgovaraju točkama koje $g$ fiksira, pa je
$$|I| = \sum_{g \in G} \big|\mathrm{Fix}(g)\big| .$$

## Brojanje po točkama skupa

Grupiramo parove po drugoj koordinati. Za fiksni $x$ parovi u $I$ s tim
$x$ odgovaraju elementima grupe koji $x$ fiksiraju, pa je
$$|I| = \sum_{x \in X} \big|\mathrm{Stab}(x)\big| .$$

Teorem orbita–stabilizator ([[thm-orbita-stabilizator]]) daje
$|\mathrm{Stab}(x)| = |G| / |\mathrm{Orb}(x)|$. Orbite particioniraju
$X$ ([[prp-orbite-particioniraju]]), pa zadnju sumu smijemo razbiti po
orbitama. Za jednu orbitu $O$ svaka njezina točka $x$ ima
$\mathrm{Orb}(x) = O$, dakle
$$\sum_{x \in O} \big|\mathrm{Stab}(x)\big|
  = \sum_{x \in O} \frac{|G|}{|O|}
  = |O| \cdot \frac{|G|}{|O|} = |G| .$$

Svaka orbita, velika ili mala, doprinosi točno $|G|$ — veličina orbite
pokrati se sa stabilizatorom. Ako je $r$ broj orbita, ukupno je dakle
$|I| = r \cdot |G|$.

## Izjednačavanje

Iz dvaju izraza za $|I|$ slijedi
$$r \cdot |G| = \sum_{g \in G} \big|\mathrm{Fix}(g)\big|,
  \qquad\text{tj.}\qquad
  r = \frac{1}{|G|} \sum_{g \in G} \big|\mathrm{Fix}(g)\big| .
  \qquad \blacksquare$$

Vrijedi primijetiti gdje je koja pretpostavka ušla: konačnost grupe i
skupa da suma ima smisla, orbita–stabilizator da se stabilizatori
pretvore u razlomke $|G|/|O|$, i particija da se ti razlomci zbroje
orbitu po orbitu.
