# Jednolika neprekidnost na segmentu i stepenaste aproksimacije

Neka je $f\colon [0,1] \to \mathbb{R}$ neprekidna funkcija.

**(a)** Dokažite da je $f$ **jednoliko (uniformno) neprekidna** na $[0,1]$:
za svaki $\varepsilon > 0$ postoji $\delta > 0$ takav da za sve
$x, y \in [0,1]$
$$|x - y| < \delta \implies |f(x) - f(y)| < \varepsilon.$$
Ne pozivajte se na gotov teorem — provedite dokaz. Smijete koristiti
Bolzano–Weierstrassov teorem (svaki ograničen niz realnih brojeva ima
konvergentan podniz).

**(b)** Pomoću (a) dokažite: za svaki $\varepsilon > 0$ postoji
$n \in \mathbb{N}$ i **stepenasta funkcija** $\varphi\colon [0,1] \to \mathbb{R}$,
konstantna na svakom od intervala
$\left[\tfrac{k}{n}, \tfrac{k+1}{n}\right)$ za $k = 0, 1, \dots, n-1$,
takva da je
$$|f(x) - \varphi(x)| < \varepsilon \quad \text{za sve } x \in [0,1].$$
