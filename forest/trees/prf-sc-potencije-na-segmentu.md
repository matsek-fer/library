---
id: "prf-sc-potencije-na-segmentu"
taxon: "proof"
title: "Rješenje: Potencije na segmentu"
teaches: [pointwise-convergence, uniform-convergence]
requires: [sequence-limits]
language: "hr"
digested_from: "problem/sc-potencije-na-segmentu"
standalone: true
depends: [exr-sc-potencije-na-segmentu]
proves: "exr-sc-potencije-na-segmentu"
---

# Rješenje

## (a) Limes po točkama

Fiksirajmo $x \in [0,1]$ i pustimo $n \to \infty$.

- Za $0 \le x < 1$ vrijedi $x^{n} \to 0$, pa po aritmetici limesa

  $$f_n(x) = \frac{x^{n} - 1}{x^{n} + 1} \longrightarrow \frac{0-1}{0+1} = -1.$$

- Za $x = 1$ je $x^{n} = 1$ za svaki $n$, pa je $f_n(1) = \dfrac{1-1}{1+1} = 0$
  za svaki $n$, dakle i limes je $0$.

Niz $(f_n)$ stoga konvergira po točkama prema funkciji

$$g(x) = \begin{cases} -1, & 0 \le x < 1, \\ 0, & x = 1. \end{cases}$$

## (b) Konvergencija nije uniformna na $[0,1]$

Za $x \in [0,1)$ izračunajmo udaljenost do limesa:

$$|f_n(x) - g(x)| = \left|\frac{x^{n}-1}{x^{n}+1} + 1\right|
= \frac{(x^{n}-1) + (x^{n}+1)}{x^{n}+1} = \frac{2x^{n}}{x^{n}+1}.$$

Uniformna konvergencija zahtijeva da $\sup_{x\in[0,1]} |f_n(x) - g(x)| \to 0$.
No za svaki $n$ smijemo supremum odozdo ocijeniti vrijednošću u dobro odabranoj
točki. Uzmimo $x_n = \left(\tfrac{1}{2}\right)^{1/n} \in (0,1)$; tada je
$x_n^{\,n} = \tfrac{1}{2}$, pa

$$\sup_{x\in[0,1]} |f_n(x) - g(x)| \ \ge\ |f_n(x_n) - g(x_n)|
= \frac{2\cdot\frac12}{\frac12+1} = \frac{2}{3}.$$

Supremum je dakle za svaki $n$ barem $\tfrac23$ i ne teži nuli:
**konvergencija na $[0,1]$ nije uniformna**.

Uočimo što se dogodilo: točka $x_n$ u kojoj je odstupanje veliko *putuje*
prema $1$ kako $n$ raste. Ni u jednoj fiksnoj točki odstupanje ne ostaje
veliko — upravo zato konvergencija po točkama vrijedi — ali supremum po
cijelom segmentu ne popušta.

## (c) Na $\left[0,\tfrac12\right]$ konvergencija jest uniformna

Za $x \in \left[0,\tfrac12\right]$ iz računa u (b) i ocjene $x^{n}+1 \ge 1$
slijedi

$$|f_n(x) - g(x)| = \frac{2x^{n}}{x^{n}+1} \ \le\ 2x^{n} \ \le\ 2\left(\frac{1}{2}\right)^{n} = 2^{\,1-n}.$$

Desna strana ne ovisi o $x$, pa je

$$\sup_{x\in[0,1/2]} |f_n(x) - g(x)| \ \le\ 2^{\,1-n} \longrightarrow 0,$$

što je upravo definicija uniformne konvergencije na
$\left[0,\tfrac12\right]$.

## Napomena

Isti račun daje uniformnu konvergenciju na svakom segmentu $[0,q]$ s
$q < 1$: ocjena postaje $2q^{\,n} \to 0$. Problematičan je jedino "rub"
uz $x = 1$, gdje granična funkcija $g$ naglo skače s $-1$ na $0$ — svaka
$f_n$ je neprekidna, a $g$ nije, i to je prvi nagovještaj dubljeg pravila:
uniformni limes neprekidnih funkcija uvijek je neprekidan, pa bi uniformna
konvergencija na $[0,1]$ ovdje bila nemoguća i bez ikakvog računa.
