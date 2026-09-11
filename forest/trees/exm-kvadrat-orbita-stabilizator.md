---
id: "exm-kvadrat-orbita-stabilizator"
taxon: "example"
title: "Vrhovi kvadrata: orbita 4, stabilizator 2"
teaches: [orbits-stabilizers]
requires: [permutation-groups]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [thm-orbita-stabilizator]
---

# Vrhovi kvadrata: orbita 4, stabilizator 2

Najmanji primjer na kojem se teorem orbita–stabilizator
($|\mathrm{Orb}(x)| \cdot |\mathrm{Stab}(x)| = |G|$, vidi
[[thm-orbita-stabilizator]]) provjerava do zadnjeg elementa.

**Postava.** Neka je $G$ grupa simetrija kvadrata: četiri rotacije oko
središta (za $0^\circ, 90^\circ, 180^\circ, 270^\circ$) i četiri
zrcaljenja (preko vodoravne osi, okomite osi i dviju dijagonala), dakle
$|G| = 8$. Neka $G$ djeluje na skupu $X = \{v_1, v_2, v_3, v_4\}$
vrhova, označenih redom oko kvadrata, tako da $g \cdot v$ bude vrh u
koji $g$ geometrijski preslika $v$.

**Orbita.** Rotacija za $90^\circ$ šalje $v_1 \mapsto v_2 \mapsto v_3
\mapsto v_4 \mapsto v_1$, pa se iz bilo kojeg vrha rotacijama stiže do
svakog drugog:
$$\mathrm{Orb}(v_1) = \{v_1, v_2, v_3, v_4\}, \qquad
  |\mathrm{Orb}(v_1)| = 4 .$$
Djelovanje je dakle tranzitivno — orbita je jedna jedina.

**Stabilizator.** Koje simetrije ostavljaju $v_1$ na mjestu? Rotacija za
$90^\circ$, $180^\circ$ ili $270^\circ$ pomiče svaki vrh, pa otpada; od
zrcaljenja, ono preko dijagonale kroz $v_1$ (i njemu nasuprotni vrh
$v_3$) fiksira $v_1$, dok zrcaljenja preko osi kroz sredine stranica i
preko druge dijagonale šalju $v_1$ u drugi vrh. Ostaje
$$\mathrm{Stab}(v_1) = \{\,\mathrm{id},\ \text{zrcaljenje preko
  dijagonale } v_1v_3\,\}, \qquad |\mathrm{Stab}(v_1)| = 2 .$$

**Provjera.** $|\mathrm{Orb}(v_1)| \cdot |\mathrm{Stab}(v_1)| =
4 \cdot 2 = 8 = |G|$, kako teorem i traži. Ekvivalentno: orbita ima
$[G : \mathrm{Stab}(v_1)] = 8/2 = 4$ elementa, koliko ima i koseta
dvočlane podgrupe u grupi reda $8$.

Brojevi $4$ i $2$ nisu slučajni ni u jednom smjeru: da orbita ima $3$
elementa, stabilizator bi morao imati $8/3$ elemenata — nemoguće, jer
veličina orbite mora dijeliti $|G|$
([[cor-velicina-orbite-dijeli-red]]).
