---
id: "prf-an-prva-epsilon-delta-provjera"
taxon: "proof"
title: "Rješenje: Prva epsilon-delta provjera"
teaches: [epsilon-delta-continuity]
requires: [limits-of-functions]
language: "hr"
digested_from: "problem/an-prva-epsilon-delta-provjera"
standalone: true
depends: [exr-an-prva-epsilon-delta-provjera]
proves: "exr-an-prva-epsilon-delta-provjera"
---

# Rješenje

## (a) Neprekidnost u $x_0 = 2$

Treba pokazati: za svaki $\varepsilon > 0$ postoji $\delta > 0$ takav da
$|x - 2| < \delta$ povlači $|f(x) - f(2)| < \varepsilon$.

Prvo izračunamo $f(2) = 5 \cdot 2 - 3 = 7$ i pojednostavnimo izraz koji
trebamo učiniti malim:
$$|f(x) - f(2)| = |5x - 3 - 7| = |5x - 10| = 5\,|x - 2|.$$

Razlika vrijednosti funkcije je točno pet puta veća od razlike argumenata, pa
je prirodan izbor
$$\delta = \frac{\varepsilon}{5}.$$

Provjera: ako je $|x - 2| < \delta = \varepsilon/5$, onda je
$$|f(x) - f(2)| = 5\,|x - 2| < 5 \cdot \frac{\varepsilon}{5} = \varepsilon.$$

Time je za svaki $\varepsilon > 0$ nađen odgovarajući $\delta > 0$, pa je $f$
neprekidna u $2$. $\blacksquare$

## (b) Najveći $\delta$ za $\varepsilon = \tfrac{1}{2}$

Iz računa u (a): $|f(x) - f(2)| = 5\,|x - 2|$, pa je uvjet
$|f(x) - f(2)| < \tfrac{1}{2}$ ekvivalentan uvjetu $|x - 2| < \tfrac{1}{10}$.

**$\delta = \tfrac{1}{10}$ zadovoljava:** ako je $|x - 2| < \tfrac{1}{10}$,
onda je $5\,|x-2| < \tfrac{1}{2}$.

**Veći $\delta$ ne zadovoljava:** neka je $\delta' > \tfrac{1}{10}$. Odaberimo
$$x = 2 + \frac{1}{2}\left(\frac{1}{10} + \min\!\left(\delta', \tfrac{2}{10}\right)\right),$$
dakle točku strogo između $2 + \tfrac{1}{10}$ i $2 + \delta'$. Tada je
$|x - 2| < \delta'$, ali je $|x - 2| > \tfrac{1}{10}$, pa je
$$|f(x) - f(2)| = 5\,|x - 2| > \tfrac{1}{2},$$
čime implikacija za $\delta'$ pada.

Najveći valjani izbor je dakle $\boxed{\delta = \tfrac{1}{10}}$.
