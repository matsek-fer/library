---
id: "exr-sc-potencije-na-segmentu"
taxon: "exercise"
title: "Potencije na segmentu"
teaches: [pointwise-convergence, uniform-convergence]
requires: [sequence-limits]
language: "hr"
digested_from: "problem/sc-potencije-na-segmentu"
standalone: true
depends: []
x_annotation: "First exercise after the definitions of pointwise and uniform convergence: a\nconcrete power-built sequence f_n(x) = (x^n - 1)/(x^n + 1) on [0,1] whose\npointwise limit is -1 on [0,1) with an isolated jump to 0 at x = 1. The solver\ncomputes the pointwise limit case by case, then measures the deviation\n|f_n - g| = 2x^n/(x^n + 1) and bounds the supremum from below by evaluating at\nthe travelling point x_n = (1/2)^{1/n}, where the deviation is the constant\n2/3 — so convergence on [0,1] is not uniform — and from above by 2q^n on any\n[0,q] with q < 1, where it is. Techniques: pointwise limit via limit\narithmetic in a frozen variable, disproving uniformity by exhibiting an\nn-dependent evaluation point, proving uniformity by an x-free majorant.\nInstantiates the principle that pointwise convergence freezes x before\nletting n grow while uniform convergence lets them race, and that uniformity\ncan hold on smaller segments even when it fails on the whole domain; the\ndiscontinuous limit of continuous functions foreshadows the uniform-limit\ncontinuity theorem. Common failures: evaluating the supremum at a fixed x\ninstead of an n-dependent one and wrongly concluding uniformity; forgetting\nthe separate x = 1 case in the pointwise limit; bounding 2x^n/(x^n+1) below\nby 0 instead of above by 2x^n in part (c)."
---

# Potencije na segmentu

**Zadatak.** Za $n \ge 1$ definirajmo funkcije $f_n \colon [0,1] \to \mathbb{R}$ s

$$f_n(x) = \frac{x^{n} - 1}{x^{n} + 1}.$$

**(a)** Odredite funkciju $g \colon [0,1] \to \mathbb{R}$ kojoj niz $(f_n)$
konvergira po točkama, tj. izračunajte $\lim_{n\to\infty} f_n(x)$ za svaki
$x \in [0,1]$ posebno.

**(b)** Konvergira li $(f_n)$ prema $g$ uniformno na $[0,1]$? Dokažite svoj
odgovor izravno iz definicije, ocjenjujući $\sup_{x\in[0,1]} |f_n(x) - g(x)|$.

**(c)** Pokažite da $(f_n)$ konvergira prema $g$ uniformno na segmentu
$\left[0, \tfrac{1}{2}\right]$.
