# Rješenje

Postava: $G$ je grupa reda $55$, $H \le G$ podgrupa reda $5$, a $G$
djeluje na skupu lijevih koseta $G/H = \{xH : x \in G\}$ s
$g \cdot (xH) = (gx)H$.

## (a) Broj koseta

Po Lagrangeovu teoremu broj lijevih koseta jednak je indeksu:

$$[G : H] = \frac{|G|}{|H|} = \frac{55}{5} = 11.$$

## (b) Orbite imaju 1 ili 5 elemenata

Podgrupa $K = \langle a \rangle$ ima red $5$. Po teoremu o orbiti i
stabilizatoru, broj elemenata orbite koseta $xH$ pri djelovanju $K$
jednak je indeksu stabilizatora, $[K : K_{xH}]$, pa dijeli $|K| = 5$.
Kako je $5$ prost, orbita ima $1$ ili $5$ elemenata.

## (c) Postoji fiksni koset

Orbite particioniraju $G/H$, skup od $11$ elemenata. Kad bi svaka
orbita imala $5$ elemenata, vrijedilo bi $5 \mid 11$ — kontradikcija.
Dakle postoji jednočlana orbita $\{xH\}$: za svaki $k \in K$ je
$k \cdot (xH) = xH$, posebno $a \cdot (xH) = xH$. (Štoviše, broj
fiksnih koseta kongruentan je $11 \equiv 1 \pmod 5$, pa ih je barem
jedan.)

## (d) Fiksni koset daje konjugat

Iz $(ax)H = xH$ slijedi $ax \in xH$, dakle $ax = xh$ za neki $h \in H$,
pa je $a = xhx^{-1} \in xHx^{-1}$. Skup $xHx^{-1}$ je podgrupa reda $5$
— konjugat od $H$ — pa je svaki element reda $5$ u $G$ sadržan u nekom
konjugatu podgrupe $H$. $\blacksquare$

*Doseg argumenta:* isto brojanje — orbite čije veličine dijele
potenciju prostog broja $p$, na skupu čiji broj elemenata nije djeljiv
s $p$, ostavljaju fiksnu točku — jedan je od ključnih koraka u
dokazima Sylowljevih teorema.
