---
id: "prp-djelovanje-kao-permutacije"
taxon: "proposition"
title: "Djelovanje je isto što i homomorfizam u Sym(X)"
teaches: [group-actions, permutation-groups]
requires: [group-homomorphisms, functions]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [def-djelovanje-grupe]
---

# Djelovanje je isto što i homomorfizam u Sym(X)

Neka grupa $G$ djeluje na skupu $X$, tj. neka je zadano preslikavanje
$(g, x) \mapsto g \cdot x$ s $e \cdot x = x$ i
$(gh) \cdot x = g \cdot (h \cdot x)$ ([[def-djelovanje-grupe]]). Neka
$\mathrm{Sym}(X)$ označava grupu svih bijekcija $X \to X$ uz
kompoziciju.

**Propozicija.** Uz gornje oznake:

1. za svaki $g \in G$ preslikavanje $\lambda_g : X \to X$,
   $\lambda_g(x) = g \cdot x$, **bijekcija** je skupa $X$, s inverzom
   $\lambda_{g^{-1}}$;
2. preslikavanje $\rho : G \to \mathrm{Sym}(X)$, $\rho(g) = \lambda_g$,
   **homomorfizam** je grupa;
3. obrnuto, svaki homomorfizam $\rho : G \to \mathrm{Sym}(X)$ zadaje
   djelovanje formulom $g \cdot x := \rho(g)(x)$, i te su dvije
   konstrukcije međusobno inverzne.

Djelovanja grupe $G$ na skupu $X$ i homomorfizmi $G \to \mathrm{Sym}(X)$
dakle su isti podatak u dva zapisa. Zato se o elementima grupe smije
govoriti kao o permutacijama skupa $X$, čak i kada $G$ nije zadana kao
grupa permutacija.

Dokaz: [[prf-djelovanje-kao-permutacije]].
