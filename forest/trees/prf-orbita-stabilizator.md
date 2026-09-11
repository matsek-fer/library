---
id: "prf-orbita-stabilizator"
taxon: "proof"
title: "Dokaz: teorem orbita–stabilizator"
teaches: [orbit-stabilizer-theorem]
requires: [cosets, index]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [thm-orbita-stabilizator, prp-stabilizator-je-podgrupa, thm-ga-lagrange-particija]
proves: "thm-orbita-stabilizator"
---

# Dokaz: teorem orbita–stabilizator

Neka konačna grupa $G$ djeluje na skupu $X$ ($e \cdot x = x$,
$(gh) \cdot x = g \cdot (h \cdot x)$), neka je $x \in X$ i označimo
$H = \mathrm{Stab}(x) = \{g \in G : g \cdot x = x\}$, što je podgrupa od
$G$ ([[prp-stabilizator-je-podgrupa]]). Dokazuje se
[[thm-orbita-stabilizator]].

Cijeli je dokaz jedna dobro definirana bijekcija između skupa lijevih
koseta $gH = \{gh : h \in H\}$ i orbite. (Za računsku vježbu s kosetima
u maloj nekomutativnoj grupi vidi [[exr-ga-koseti-simetrija-kvadrata]].)

## Preslikavanje

Definiramo
$$\varphi : \{\,gH : g \in G\,\} \to \mathrm{Orb}(x), \qquad
  \varphi(gH) = g \cdot x.$$

Formula je zapisana pomoću predstavnika $g$, pa treba provjeriti da o
izboru predstavnika ne ovisi.

## Dobra definiranost i injektivnost

Za $g, g' \in G$ vrijedi lanac ekvivalencija
$$gH = g'H
  \iff g'^{-1} g \in H
  \iff (g'^{-1}g) \cdot x = x
  \iff g \cdot x = g' \cdot x .$$

Prva je ekvivalencija standardni kriterij jednakosti koseta, druga je
definicija stabilizatora, a treća se dobije djelovanjem elementom $g'$,
odnosno $g'^{-1}$, na obje strane.

Pročitan slijeva nadesno, lanac kaže: ako je $gH = g'H$, onda je
$\varphi(gH) = \varphi(g'H)$ — preslikavanje je dobro definirano.
Pročitan zdesna nalijevo kaže: ako je $g \cdot x = g' \cdot x$, onda je
$gH = g'H$ — preslikavanje je injektivno. Jedan lanac, dvije tvrdnje.

## Surjektivnost

Svaki element orbite po definiciji ima oblik $g \cdot x$ za neki
$g \in G$, a to je $\varphi(gH)$.

## Zaključak

Dakle je $\varphi$ bijekcija, pa je
$|\mathrm{Orb}(x)| = [G : H]$. Lagrangeov teorem
([[thm-ga-lagrange-particija]]) za konačnu grupu daje
$|G| = [G : H] \cdot |H|$, pa je
$$|\mathrm{Orb}(x)| \cdot |\mathrm{Stab}(x)| = [G:H] \cdot |H| = |G|.
\qquad \blacksquare$$

Konačnost grupe koristi se samo u posljednjem koraku; bijekcija
$\varphi$ postoji i za beskonačan $G$ i tvrdi jednakost
$|\mathrm{Orb}(x)| = [G : \mathrm{Stab}(x)]$ i tada.
