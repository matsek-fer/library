# Rješenje

Kroz cijelo rješenje koristimo relaciju $sr = r^3 s$, iz koje slijedi
$s r^k = r^{4-k} s$ za $k = 1, 2, 3$ (uzastopnom primjenom).

## (a) Lijeve klase

Klasu $gH$ dobivamo množenjem $g$ svakim elementom od $H = \{e, s\}$ slijeva:

- $eH = \{e, s\}$
- $rH = \{r, rs\}$
- $r^2H = \{r^2, r^2s\}$
- $r^3H = \{r^3, r^3s\}$

Preostali elementi grupe ne daju nove klase: npr.
$sH = \{s, s^2\} = \{s, e\} = eH$, i općenito
$(r^k s)H = \{r^k s, r^k s^2\} = \{r^k s, r^k\} = r^k H$.

Dakle, različite lijeve klase su $eH$, $rH$, $r^2H$ i $r^3H$.

## (b) Particija i indeks

Popisane četiri klase su u parovima disjunktne (nijedan element se ne
pojavljuje dvaput) i njihova unija je
$\{e, s\} \cup \{r, rs\} \cup \{r^2, r^2s\} \cup \{r^3, r^3s\} = G$.
Dakle, one čine particiju od $G$.

Broj lijevih klasa je indeks: $[G : H] = 4$. Primijetimo i da je
$|G| = |H| \cdot [G:H] = 2 \cdot 4 = 8$, u skladu s Lagrangeovim teoremom.

## (c) Desna klasa $Hr$

$$Hr = \{er, sr\} = \{r, r^3 s\}.$$

S druge strane, $rH = \{r, rs\}$. Kako je $rs \neq r^3s$ (elementi
$e, r, r^2, r^3, s, rs, r^2s, r^3s$ su međusobno različiti), vrijedi

$$rH \neq Hr.$$

Lijeve i desne klase podgrupe $H$ se, dakle, ne podudaraju — $H$ nije
normalna podgrupa. (Uočite ipak da $rH$ i $Hr$ imaju isti broj elemenata:
klase su uvijek jednakobrojne s podgrupom.)

## (d) Podgrupa $K = \{e, r^2\}$

Tvrdimo da $r^2$ komutira sa svakim elementom grupe. S rotacijama je to
jasno: $r^k r^2 = r^{k+2} = r^2 r^k$. Za elemente oblika $r^k s$ računamo
pomoću $s r^2 = r^{4-2} s = r^2 s$:

$$(r^k s) r^2 = r^k (s r^2) = r^k r^2 s = r^2 (r^k s).$$

Dakle, $r^2$ je u centru grupe $G$, pa za svaki $g \in G$ vrijedi

$$gK = \{g, gr^2\} = \{g, r^2 g\} = Kg.$$

Podgrupa čiji se lijevi i desni koseti podudaraju za svaki $g$ upravo je
normalna podgrupa — $K$ je normalna u $G$, dok $H$ iz dijela (c) nije.
