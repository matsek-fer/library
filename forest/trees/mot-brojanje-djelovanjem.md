---
id: "mot-brojanje-djelovanjem"
taxon: "motivation"
title: "Zašto brojiti djelovanjem grupe"
teaches: [group-actions]
requires: [groups, modular-arithmetic]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: []
---

# Zašto brojiti djelovanjem grupe

Mnogi problemi brojanja imaju simetriju koja smeta. Evo tipičnog:

> Koliko ima ogrlica od $p$ perli u $a$ boja, ako se dvije ogrlice koje
> se razlikuju samo za zakret smatraju istima?

Nizova perli ima točno $a^p$ — svako od $p$ mjesta neovisno prima jednu
od $a$ boja. Ali zakreti lijepe više nizova u istu ogrlicu, i to *ne
uvijek jednako mnogo* njih: jednobojni niz zakret uopće ne mijenja, a
šareni obično ima $p$ različitih zakreta. Naivno dijeljenje $a^p / p$
zato općenito nije ni cijeli broj: za $p = 3$ i $a = 2$ ono daje
$8/3$, a ogrlica je zapravo $4$.

Ideja koja spašava stvar: simetrije problema čine grupu, i ta grupa
*djeluje* na skupu koji brojimo — svaka simetrija premješta elemente
skupa, poštujući množenje u grupi ([[def-djelovanje-grupe]]).
Djelovanje razlaže skup na hrpe ([[def-orbita-i-stabilizator]]), a
veličine tih hrpa nisu proizvoljne: kontrolira ih struktura grupe
([[thm-orbita-stabilizator]]). Kad znaš koje su veličine hrpa
dopuštene, zbrajanje po hrpama daje jednakosti i djeljivosti koje se
izravno ne vide.

Ulog je konkretan. Iz istog onog skupa od $a^p$ nizova, uz grupu
zakreta reda $p$ ($p$ prost), ispada tvrdnja
$$p \mid a^p - a,$$
dakle mali Fermatov teorem ([[thm-mali-fermatov-teorem]]) — dokazan
vrtnjom ogrlica umjesto računanjem ostataka. A pitanje s početka,
„koliko ima ogrlica", dobiva točan odgovor tek kad se naivno dijeljenje
zamijeni prosjekom broja fiksnih točaka ([[thm-burnsideova-lema]]).

Vrijedi zapamtiti oblik argumenta, jer se ponavlja: *nađi skup prave
veličine, nađi grupu koja na njemu djeluje, pa prebroj po hrpama.*
Tvrdnja o djeljivosti ispadne kao usputna posljedica brojanja.
