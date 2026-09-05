# Rješenje

Alat cijelog zadatka je **Cauchyjev kondenzacijski kriterij**: ako je $(a_n)$
nerastući niz nenegativnih brojeva, tada

$$\sum_{n} a_n \ \text{konvergira} \iff \sum_{k} 2^{k} a_{2^{k}} \ \text{konvergira}.$$

Budući da konvergencija reda ovisi samo o repu, kriterij smijemo primijeniti na
red od bilo kojeg mjesta nadalje, čim su članovi od tog mjesta nerastući.

Usput ćemo koristiti i standardnu činjenicu o **$p$-redu**: $\sum_{k\ge 1}
k^{-s}$ konvergira ako i samo ako je $s > 1$. (I ona sama izlazi iz
kondenzacije: $2^{k}\cdot 2^{-ks} = (2^{\,1-s})^{k}$ je geometrijski red s
kvocijentom $2^{\,1-s}$, koji je manji od $1$ točno kada je $s > 1$.)

## (a) Konvergira točno za $p > 1$

Neka je $a_n = \dfrac{1}{n(\ln n)^{p}}$ za $n \ge 2$. Funkcija
$x \mapsto x(\ln x)^{p}$ ima na $(1,\infty)$ derivaciju
$(\ln x)^{p-1}\left(\ln x + p\right) > 0$, pa je rastuća; članovi $a_n$ su zato
padajući za $n \ge 2$ i kondenzacija je dopuštena.

Kondenzirani članovi glase

$$2^{k} a_{2^{k}} = \frac{2^{k}}{2^{k}\,(\ln 2^{k})^{p}} = \frac{1}{(k \ln 2)^{p}} = \frac{1}{(\ln 2)^{p}}\cdot\frac{1}{k^{p}},$$

pa je kondenzirani red konstantni višekratnik $p$-reda $\sum k^{-p}$. On
konvergira ako i samo ako je $p > 1$, dakle i polazni red **konvergira točno za
$p > 1$**, a divergira za $0 < p \le 1$.

Uočimo što se dogodilo: zamjena $n \mapsto 2^{k}$ pretvorila je logaritamsko
trnjenje $(\ln n)^{-p}$ u polinomno trnjenje $k^{-p}$ — kondenzacija je
promjena skale koja granični red vraća u doseg poznatih usporedbi.

## (b) Konvergira točno za $p > 1$

Neka je $b_n = \dfrac{1}{n \ln n\, (\ln\ln n)^{p}}$ za $n \ge 3$. Za $x \ge 3$
sva su tri faktora $x$, $\ln x$ i $(\ln\ln x)^{p}$ pozitivna i rastuća
(jer je $\ln\ln 3 > 0$), pa su članovi $b_n$ padajući i kondenzacija je opet
dopuštena (na repu $n \ge 4$, što je dovoljno).

Kondenzirani članovi za $k \ge 2$ glase

$$2^{k} b_{2^{k}} = \frac{1}{\ln 2^{k}\,\bigl(\ln\ln 2^{k}\bigr)^{p}} = \frac{1}{k \ln 2\,\bigl(\ln (k\ln 2)\bigr)^{p}}.$$

To je red istog tipa kao u (a), samo s pomaknutim logaritmom. Precizno, usporedimo
ga graničnom usporedbom s $c_k = \dfrac{1}{k(\ln k)^{p}}$:

$$\frac{2^{k} b_{2^{k}}}{c_k} = \frac{1}{\ln 2}\left(\frac{\ln k}{\ln k + \ln\ln 2}\right)^{p} \xrightarrow[k\to\infty]{} \frac{1}{\ln 2} \in (0,\infty),$$

jer je $\ln(k\ln 2) = \ln k + \ln\ln 2$, a konstanta $\ln\ln 2$ postaje
zanemariva prema $\ln k \to \infty$. (Za $k \ge 3$ je $\ln k + \ln\ln 2 > 0$,
pa su svi članovi pozitivni i granična usporedba je legitimna.)

Po graničnoj usporedbi, kondenzirani red konvergira ako i samo ako konvergira
$\sum_k \frac{1}{k(\ln k)^{p}}$ — a to je po dijelu (a) točno za $p > 1$.
Dakle i red iz (b) **konvergira točno za $p > 1$**.

Ljestve se očito nastavljaju: svaka nova razina logaritma kondenzacijom spadne
na prethodnu.

## (c) Zašto usporedba s $p$-redovima ne može odlučiti

Neka je $p > 0$ proizvoljan i $s > 1$. Tvrdimo da je za sve dovoljno velike $n$

$$\frac{1}{n(\ln n)^{p}} \ \ge\ \frac{1}{n^{s}}, \qquad\text{tj.}\qquad (\ln n)^{p} \le n^{\,s-1}.$$

Zaista, uz supstituciju $n = e^{t}$ kvocijent glasi
$\dfrac{(\ln n)^{p}}{n^{\,s-1}} = \dfrac{t^{p}}{e^{(s-1)t}} \to 0$ kad
$t \to \infty$, jer eksponencijalna funkcija raste brže od svake potencije.
Dakle su članovi našeg reda **eventualno veći** od članova svakog konvergentnog
$p$-reda: usporedba s $\sum n^{-s}$ daje donju, a ne gornju ocjenu, pa o
konvergenciji ne govori ništa.

S druge strane, jedina usporedba koja članove ocjenjuje odozgo jest
$\frac{1}{n(\ln n)^{p}} \le \frac{1}{n}$ (za $n \ge 3$ jer je tada $\ln n \ge 1$) —
ali $\sum \frac1n$ divergira, pa ni ta ocjena ne zaključuje ništa.

Red iz (a) živi, dakle, strogo **između** svih standardnih referentnih redova:
ispod divergentnog harmonijskog, iznad svakog konvergentnog $p$-reda. Upravo
za takve granične slučajeve i postoji kondenzacijski kriterij.
