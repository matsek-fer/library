---
id: "exm-tri-djelovanja"
taxon: "example"
title: "Tri djelovanja za kalibraciju"
teaches: [group-actions]
requires: [permutation-groups, cyclic-groups, modular-arithmetic]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [def-djelovanje-grupe]
---

# Tri djelovanja za kalibraciju

Podsjetnik na definiciju: grupa $G$ djeluje na skupu $X$ ako je zadano
$(g, x) \mapsto g \cdot x$ uz $e \cdot x = x$ i
$(gh) \cdot x = g \cdot (h \cdot x)$ ([[def-djelovanje-grupe]]). Tri
primjera pokazuju raspon: geometrija, kombinatorika i sama grupa.

## 1. Simetrije kvadrata na vrhovima

Neka je $G$ grupa simetrija kvadrata: četiri rotacije (za $0^\circ$,
$90^\circ$, $180^\circ$, $270^\circ$) i četiri zrcaljenja (preko dviju
osi kroz sredine stranica i dviju dijagonala), ukupno $|G| = 8$
elemenata. Neka je $X = \{v_1, v_2, v_3, v_4\}$ skup vrhova, označenih
redom oko kvadrata.

Simetrija $g$ preslikava kvadrat na sebe, pa vrh šalje u vrh; stavimo
$g \cdot v$ := vrh u koji $g$ geometrijski preslika $v$. Prvi aksiom
vrijedi jer identiteta ne miče ništa, a drugi jer je kompozicija
simetrija opet simetrija i djeluje kao kompozicija preslikavanja vrhova.

Skup $X$ ima samo $4$ elementa, a grupa $8$: djelovanje je alat za
prijenos pitanja o grupi na mnogo manji skup.

## 2. Ciklički pomaci na nizovima

Neka je $n \ge 1$, neka je $A$ konačan skup „boja" i neka je
$X = A^n$ skup svih nizova $s = (s_0, s_1, \dots, s_{n-1})$ duljine $n$.
Grupa $\mathbb{Z}/n\mathbb{Z}$ (zbrajanje ostataka modulo $n$) djeluje
na $X$ cikličkim pomakom: klasa $k$ šalje niz $s$ u niz $k \cdot s$
zadan s
$$(k \cdot s)_i = s_{i + k \bmod n}.$$

Provjera aksioma: $(0 \cdot s)_i = s_i$, dakle $0 \cdot s = s$; i
$$\big((k + l) \cdot s\big)_i = s_{i + k + l}
  = (l \cdot s)_{i+k} = \big(k \cdot (l \cdot s)\big)_i,$$
pa je $(k+l) \cdot s = k \cdot (l \cdot s)$. Indeksi se računaju modulo
$n$, što je jedini razlog zbog kojeg pomak uopće ostaje unutar $X$.

Ovo je djelovanje koje pretvara ogrlice u orbite: niz postaje ogrlica
kad se zaboravi gdje počinje.

## 3. Grupa na samoj sebi

Svaka grupa $G$ djeluje na skupu $X = G$ (svojem vlastitom nosaču)
lijevim množenjem, $g \cdot x = gx$. Aksiomi su doslovno svojstvo
neutralnog elementa, $ex = x$, i asocijativnost, $(gh)x = g(hx)$.

Ovdje $X$ nije „vanjski" skup nego sama grupa gledana bez svoje
strukture; upravo je to trik koji dopušta da se tvrdnje o grupi dokazuju
brojanjem orbita.
