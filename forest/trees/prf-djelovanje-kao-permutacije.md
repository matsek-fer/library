---
id: "prf-djelovanje-kao-permutacije"
taxon: "proof"
title: "Dokaz: djelovanje je isto što i homomorfizam u Sym(X)"
teaches: []
requires: [group-homomorphisms, functions]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [prp-djelovanje-kao-permutacije]
proves: "prp-djelovanje-kao-permutacije"
---

# Dokaz: djelovanje je isto što i homomorfizam u Sym(X)

Neka grupa $G$ djeluje na skupu $X$, s aksiomima $e \cdot x = x$ i
$(gh) \cdot x = g \cdot (h \cdot x)$, i neka je
$\lambda_g(x) = g \cdot x$. Tvrdnja koja se dokazuje je
[[prp-djelovanje-kao-permutacije]].

## 1. Svaki $\lambda_g$ je bijekcija

Za $g \in G$ i $x \in X$ oba aksioma daju
$$\lambda_{g^{-1}}\big(\lambda_g(x)\big) = g^{-1} \cdot (g \cdot x)
  = (g^{-1}g) \cdot x = e \cdot x = x,$$
i posve jednako $\lambda_g\big(\lambda_{g^{-1}}(x)\big) = x$. Dakle je
$\lambda_{g^{-1}}$ dvostrani inverz preslikavanja $\lambda_g$, pa je
$\lambda_g$ bijekcija i $\lambda_g^{-1} = \lambda_{g^{-1}}$.

Primijeti da je za bijektivnost nužan upravo inverz *u grupi*: nijedan
aksiom sam za sebe ne daje injektivnost.

## 2. $\rho(g) = \lambda_g$ je homomorfizam

Budući da je svaki $\lambda_g$ bijekcija, $\rho$ zaista pada u
$\mathrm{Sym}(X)$. Za $g, h \in G$ i svaki $x \in X$ drugi aksiom daje
$$\lambda_{gh}(x) = (gh) \cdot x = g \cdot (h \cdot x)
  = \lambda_g\big(\lambda_h(x)\big) = (\lambda_g \circ \lambda_h)(x),$$
dakle $\rho(gh) = \rho(g) \circ \rho(h)$, što je upravo svojstvo
homomorfizma u $\mathrm{Sym}(X)$.

## 3. Obrat i uzajamna inverznost

Neka je $\rho : G \to \mathrm{Sym}(X)$ homomorfizam i stavimo
$g \cdot x := \rho(g)(x)$. Tada je $e \cdot x = \rho(e)(x) =
\mathrm{id}_X(x) = x$ (homomorfizam čuva neutralni element), i
$$(gh) \cdot x = \rho(gh)(x) = \big(\rho(g) \circ \rho(h)\big)(x)
  = g \cdot (h \cdot x),$$
pa su oba aksioma djelovanja ispunjena.

Obje su konstrukcije očito jedna drugoj inverzne: krenemo li od
djelovanja, pa prijeđemo na $\rho$ i natrag, dobivamo
$\rho(g)(x) = \lambda_g(x) = g \cdot x$ — polazno djelovanje; krenemo li
od homomorfizma, pa na djelovanje i natrag, dobivamo $\lambda_g =
\rho(g)$. $\blacksquare$
