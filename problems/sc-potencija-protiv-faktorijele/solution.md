# Rješenje

Označimo članove reda iz (a) s $a_n = \dfrac{n^n}{4^n\, n!}$, a članove reda iz
(b) s $c_n = \dfrac{n^n}{2^n\, n!}$. Svi su članovi strogo pozitivni, pa smijemo
promatrati kvocijente uzastopnih članova.

## Ključni račun: kvocijent uzastopnih članova

Za $a_n$ vrijedi

$$\frac{a_{n+1}}{a_n}
= \frac{(n+1)^{n+1}}{4^{n+1}\,(n+1)!} \cdot \frac{4^n\, n!}{n^n}
= \frac{(n+1)^{n+1}}{4\,(n+1)\, n^n}
= \frac{1}{4}\left(\frac{n+1}{n}\right)^{n}
= \frac{1}{4}\left(1+\frac{1}{n}\right)^{n}.$$

Potpuno isti račun za $c_n$ daje

$$\frac{c_{n+1}}{c_n} = \frac{1}{2}\left(1+\frac{1}{n}\right)^{n}.$$

Podsjetimo se dvaju standardnih svojstava niza $e_n = \left(1+\frac1n\right)^n$:
niz $(e_n)$ je rastući i $\lim_{n\to\infty} e_n = e$, pa za svaki $n$ vrijedi

$$2 = e_1 \le \left(1+\frac{1}{n}\right)^{n} < e < 3.$$

## (a) Red konvergira

Iz gornje ocjene slijedi, za **svaki** $n \ge 1$,

$$\frac{a_{n+1}}{a_n} = \frac{1}{4}\left(1+\frac{1}{n}\right)^{n} < \frac{e}{4} < 1.$$

Dakle $\lim_{n\to\infty} \frac{a_{n+1}}{a_n} = \frac{e}{4} < 1$, pa red
konvergira po d'Alembertovom (kvocijentnom) kriteriju.

Vrijedi zapisati i što kvocijentni kriterij ovdje zapravo radi. Iz
$\frac{a_{n+1}}{a_n} \le \frac{e}{4}$ za svaki $n$ indukcijom dobivamo

$$a_n \le a_1 \left(\frac{e}{4}\right)^{n-1} = \frac{1}{4}\left(\frac{e}{4}\right)^{n-1},$$

pa je red odozgo omeđen konvergentnim geometrijskim redom s kvocijentom
$\frac{e}{4} < 1$. Kvocijentni kriterij je, dakle, usporedba s geometrijskim
redom — ali provedena kroz rekurziju članova, bez da smo ikada morali izravno
ocijeniti koliko brzo raste $\frac{n^n}{n!}$.

## (b) Red divergira

Za članove $c_n$ vrijedi, za svaki $n \ge 1$,

$$\frac{c_{n+1}}{c_n} = \frac{1}{2}\left(1+\frac{1}{n}\right)^{n} \ge \frac{2}{2} = 1,$$

jer je $\left(1+\frac1n\right)^n \ge e_1 = 2$ (rastući niz). Niz $(c_n)$ je
stoga neopadajući, pa je $c_n \ge c_1 = \frac{1}{2}$ za svaki $n$. Opći član ne
teži nuli, čime je narušen nužan uvjet konvergencije: red **divergira**.

(Kvocijentni kriterij daje isti zaključak: $\lim \frac{c_{n+1}}{c_n} =
\frac{e}{2} > 1$.)

## Napomena: zašto je izravna usporedba ovdje nezgodna

Da bismo red (a) izravno usporedili s konvergentnim geometrijskim redom
$\sum C q^n$, trebala bi nam ocjena oblika $\frac{n^n}{n!} \le C\,(4q)^n$ za
neki $q < 1$ — a to je upravo pitanje koliko brzo raste $\frac{n^n}{n!}$, na
koje bez Stirlingove formule (ili računa ekvivalentnog gornjem) nemamo odgovor.
Kvocijentni kriterij zaobilazi tu prepreku: umjesto eksplicitne ocjene članova,
geometrijsko ponašanje očitava iz kvocijenta $\frac{a_{n+1}}{a_n}$, u kojem se
faktorijela i potencija pokrate do izraza $\left(1+\frac1n\right)^n$ čiju
granicu znamo iz same definicije broja $e$.
