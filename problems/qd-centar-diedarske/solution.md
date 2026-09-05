# Rješenje

Iz relacije $sr = r^{-1}s$ indukcijom slijedi opće pravilo prebacivanja:
$$s r^k = r^{-k} s \quad \text{za svaki } k,$$
koje koristimo kroz cijelo rješenje.

**(a)** Provjeravamo element po element. Dovoljno je provjeriti komutira li
kandidat s generatorima $r$ i $s$, jer element koji komutira s generatorima
komutira i sa svakim produktom generatora.

*Element $r^2$:* s rotacijama komutira jer su potencije istog elementa. Sa
zrcaljenjem: $s r^2 = r^{-2} s = r^2 s$, budući da je $r^{-2} = r^2$ (jer
$r^4 = e$). Dakle $r^2$ je u središtu.

*Elementi $r$ i $r^3$:* $sr = r^{-1}s = r^3 s \ne rs$ jer bi $r^3s = rs$
povlačilo $r^2 = e$. Jednako tako $sr^3 = r s \ne r^3 s$. Nisu u središtu.

*Zrcaljenja $r^k s$:* pokazujemo da nijedno ne komutira s $r$. Vrijedi
$$r \cdot r^k s = r^{k+1} s, \qquad r^k s \cdot r = r^k r^{-1} s = r^{k-1} s,$$
pa bi komutiranje značilo $r^{k+1} = r^{k-1}$, tj. $r^2 = e$ — kontradikcija.

Dakle središte je točno $\{e, r^2\} = N$.

**(b)** Treba pokazati $gng^{-1} \in N$ za sve $g \in D_4$, $n \in N$. Za
$n = e$ tvrdnja je trivijalna. Za $n = r^2$ računamo po tipu elementa $g$:

- $g = r^k$: $\; r^k r^2 r^{-k} = r^2$.
- $g = r^k s$: $\; (r^k s) r^2 (r^k s)^{-1} = r^k (s r^2 s^{-1}) r^{-k}
  = r^k r^{-2} (s s^{-1}) r^{-k} = r^{-2} = r^2$,
  gdje smo upotrijebili $s r^2 = r^{-2} s$.

U oba slučaja $g r^2 g^{-1} = r^2 \in N$, pa je $N$ normalna. (To je i
očekivano: element središta konjugiranjem uvijek ostaje na mjestu.)

**(c)** Koseti su
$$N = \{e, r^2\}, \quad rN = \{r, r^3\}, \quad sN = \{s, r^2s\}, \quad rsN = \{rs, r^3s\},$$
i to su sva $8/2 = 4$ elementa od $D_4/N$. Množenje koseta računamo preko
predstavnika (normalnost iz (b) jamči da rezultat ne ovisi o izboru):

- $(rN)(rN) = r^2 N = N$
- $(rN)(sN) = rsN$
- $(sN)(rN) = srN = r^{-1}sN = r^3 s N = rsN$ (jer $r^3s \in rsN$)
- $(sN)(sN) = s^2 N = N$
- $(rN)(rsN) = r^2 s N = sN$ (jer $r^2 s \in sN$)
- $(rsN)(rN) = rsrN = r \cdot r^{-1} s N = sN$
- $(sN)(rsN) = s r s N = r^{-1} s s N = r^3 N = rN$
- $(rsN)(sN) = r s s N = rN$
- $(rsN)(rsN) = rsrsN = r r^{-1} s s N = N$

Tablica množenja (redak $\cdot$ stupac):

| $\cdot$ | $N$ | $rN$ | $sN$ | $rsN$ |
|---|---|---|---|---|
| $N$    | $N$    | $rN$   | $sN$   | $rsN$ |
| $rN$   | $rN$   | $N$    | $rsN$  | $sN$  |
| $sN$   | $sN$   | $rsN$  | $N$    | $rN$  |
| $rsN$  | $rsN$  | $sN$   | $rN$   | $N$   |

**(d)** Iz dijagonale tablice čitamo da svaki element $x \in D_4/N$
zadovoljava $x^2 = N$, tj. svaki element različit od neutralnog ima red
$2$. Ciklička grupa reda $4$ mora imati element reda $4$, pa $D_4/N$ nije
ciklička. Grupa reda $4$ u kojoj je $x^2 = e$ za svaki $x$ upravo je
Kleinova četvorna grupa, što se vidi i iz tablice: uz neutralni element
$N$, bilo koja dva različita neneutralna elementa množe se u treći.

Primijetimo usput da je kvocijent komutativan (tablica je simetrična), iako
$D_4$ nije — kvocijentiranjem po središtu grupa je "izgubila" upravo svoju
nekomutativnost.
