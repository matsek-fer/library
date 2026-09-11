---
id: "exm-ogrlice-tri-perle"
taxon: "example"
title: "Ogrlice od tri perle u dvije boje"
teaches: [orbits-stabilizers]
requires: [cyclic-groups]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [thm-burnsideova-lema]
---

# Ogrlice od tri perle u dvije boje

Primjer u kojem naivno dijeljenje zakaže, a prosjek fiksnih točaka
pogodi.

**Pitanje.** Koliko ima ogrlica od $3$ perle u $2$ boje (recimo crnoj i
bijeloj), ako se ogrlice koje se razlikuju samo za zakret smatraju
istima?

**Postava.** Neka je $X$ skup nizova duljine $3$ u dvije boje, dakle
$|X| = 2^3 = 8$. Neka ciklička grupa $G = \mathbb{Z}/3\mathbb{Z}$
(zakreti za $0$, $1$ i $2$ mjesta) djeluje na $X$ cikličkim pomakom;
ogrlice su upravo orbite tog djelovanja.

**Naivni pokušaj.** $8 / 3$ nije cijeli broj, pa dijeljenje s $|G|$ ne
može biti odgovor. Razlog je što orbite nisu jednako velike: jednobojni
nizovi imaju orbitu veličine $1$, ostali veličine $3$.

**Burnsideova lema** ([[thm-burnsideova-lema]]) kaže da je broj orbita
prosječan broj fiksnih točaka, $\frac{1}{|G|}\sum_{g}|\mathrm{Fix}(g)|$,
gdje je $\mathrm{Fix}(g)$ skup nizova koje zakret $g$ ostavlja na miru.
Zbrajamo po trima elementima grupe:

- zakret za $0$ (identiteta) fiksira **sve** nizove, dakle $8$;
- zakret za $1$ fiksira samo jednobojne nizove, dakle $2$;
- zakret za $2$ fiksira samo jednobojne nizove, dakle $2$.

Zakret za jedno mjesto fiksira niz točno kad su mu svi znakovi jednaki,
a isto vrijedi i za zakret za dva mjesta (jer je i on generator grupe
reda $3$). Dakle
$$\#\{\text{ogrlice}\} = \frac{8 + 2 + 2}{3} = 4 .$$

**Provjera popisom.** Ogrlice su: tri bijele, dvije bijele i jedna crna,
jedna bijela i dvije crne, tri crne — točno $4$. Dijeljenje koje isprva
nije imalo smisla postalo je prosjek koji ga ima.

Isto se brojanje može provesti i orbitu po orbitu: dvije orbite
veličine $1$ (jednobojni nizovi) i dvije veličine $3$ daju
$2 \cdot 1 + 2 \cdot 3 = 8 = |X|$, dakle $4$ orbite. Prednost
Burnsideove leme je što se njezina desna strana računa bez ikakvog
poznavanja orbita — a za veće grupe to je jedina izvediva strana.
