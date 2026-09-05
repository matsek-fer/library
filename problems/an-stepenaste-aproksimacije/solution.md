# Rješenje

## (a) Jednolika neprekidnost na $[0,1]$

Dokazujemo kontradikcijom. Pretpostavimo da $f$ **nije** jednoliko
neprekidna. Negacija tvrdnje glasi: postoji $\varepsilon_0 > 0$ takav da za
svaki $\delta > 0$ postoje točke $x, y \in [0,1]$ s $|x - y| < \delta$, ali
$|f(x) - f(y)| \ge \varepsilon_0$.

Primijenimo tu negaciju redom na $\delta = \tfrac{1}{n}$ za
$n = 1, 2, 3, \dots$: dobivamo nizove $(x_n)$ i $(y_n)$ u $[0,1]$ takve da
$$|x_n - y_n| < \frac{1}{n} \quad\text{i}\quad |f(x_n) - f(y_n)| \ge \varepsilon_0 \quad \text{za svaki } n. \tag{1}$$

Niz $(x_n)$ je ograničen (leži u $[0,1]$), pa po Bolzano–Weierstrassovu
teoremu ima konvergentan podniz $x_{n_k} \to c$. Kako je $[0,1]$ zatvoren,
granica ostaje unutra: $c \in [0,1]$.

Podniz $(y_{n_k})$ konvergira **istoj** granici, jer je
$$|y_{n_k} - c| \le |y_{n_k} - x_{n_k}| + |x_{n_k} - c| < \frac{1}{n_k} + |x_{n_k} - c| \xrightarrow{k \to \infty} 0.$$

Funkcija $f$ je neprekidna u točki $c$, pa iz $x_{n_k} \to c$ i
$y_{n_k} \to c$ slijedi (nizovna karakterizacija neprekidnosti)
$$f(x_{n_k}) \to f(c) \quad\text{i}\quad f(y_{n_k}) \to f(c),$$
dakle
$$|f(x_{n_k}) - f(y_{n_k})| \le |f(x_{n_k}) - f(c)| + |f(c) - f(y_{n_k})| \xrightarrow{k \to \infty} 0.$$

To je u izravnoj kontradikciji s $(1)$, koje kaže da je taj izraz stalno
$\ge \varepsilon_0 > 0$. Pretpostavka pada, pa je $f$ jednoliko neprekidna
na $[0,1]$. $\blacksquare$

*Napomena.* Dokaz je koristio dvije stvari o domeni: ograničenost (za
Bolzano–Weierstrassa) i zatvorenost (da granica $c$ ostane u domeni, gdje
je $f$ neprekidna). To su točno svojstva koja čine $[0,1]$ kompaktnim — na
domeni $(0,1)$ dokaz puca jer granica može pobjeći u rub.

## (b) Stepenasta aproksimacija

Neka je $\varepsilon > 0$. Po (a) postoji $\delta > 0$ takav da za sve
$x, y \in [0,1]$
$$|x - y| < \delta \implies |f(x) - f(y)| < \varepsilon.$$

Odaberimo $n \in \mathbb{N}$ takav da je $\tfrac{1}{n} < \delta$
(Arhimedovo svojstvo). Definirajmo stepenastu funkciju
$$\varphi(x) = f\!\left(\frac{k}{n}\right) \quad \text{za } x \in \left[\frac{k}{n}, \frac{k+1}{n}\right), \ k = 0, \dots, n-1, \qquad \varphi(1) = f(1).$$

Funkcija $\varphi$ je po konstrukciji konstantna na svakom od $n$ intervala.

**Ocjena pogreške.** Neka je $x \in [0,1)$ proizvoljan i neka je $k$ jedini
indeks za koji je $x \in \left[\tfrac{k}{n}, \tfrac{k+1}{n}\right)$. Tada je
$$\left|x - \frac{k}{n}\right| < \frac{1}{n} < \delta,$$
pa jednolika neprekidnost daje
$$|f(x) - \varphi(x)| = \left|f(x) - f\!\left(\frac{k}{n}\right)\right| < \varepsilon.$$

U točki $x = 1$ je $|f(1) - \varphi(1)| = 0 < \varepsilon$. Dakle
$|f(x) - \varphi(x)| < \varepsilon$ za **sve** $x \in [0,1]$ istodobno.
$\blacksquare$

*Zašto je (a) bilo nužno:* točka $\tfrac{k}{n}$ nije birana blizu nekog
unaprijed zadanog $x$ — isti $\delta$ mora poslužiti u svih $n$ intervala
odjednom. Pointwise neprekidnost dala bi $\delta$ ovisan o točki i
konstrukcija bi se raspala.
