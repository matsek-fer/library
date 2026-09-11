---
id: "con-od-fiksnih-tocaka-do-jednadzbe-klasa"
taxon: "connection"
title: "Od brojanja orbita do jednadžbe klasa"
teaches: [conjugation, class-equation]
requires: [subgroups, index]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [thm-orbita-stabilizator, prp-orbite-particioniraju]
---

# Od brojanja orbita do jednadžbe klasa

Ovo je most između dviju stvari: **knjigovodstva orbita** jedne konačne
grupe koja djeluje na skupu (orbite particioniraju skup,
[[prp-orbite-particioniraju]], a veličina svake orbite je indeks
stabilizatora, [[thm-orbita-stabilizator]]) i **jednadžbe klasa**, alata
kojim se dokazuju strukturni teoremi o konačnim grupama. Isti račun, dva
imena — razlika je samo u tome na čemu grupa djeluje.

## Grupa djeluje na samoj sebi konjugacijom

Neka je $G$ konačna grupa. Osim lijevim množenjem, $G$ djeluje na svojem
nosaču $X = G$ i **konjugacijom**:
$$g \cdot x = g x g^{-1}.$$
Aksiomi se provjere u dva retka: $e x e^{-1} = x$, i
$(gh)x(gh)^{-1} = g\,(hxh^{-1})\,g^{-1}$.

Pod tim djelovanjem dva osnovna objekta dobivaju klasična imena:

- orbita točke $x$ je njezina **klasa konjugacije**
  $\{gxg^{-1} : g \in G\}$;
- stabilizator točke $x$ je njezin **centralizator**
  $C_G(x) = \{g \in G : gx = xg\}$ — elementi koji s $x$ komutiraju.

## Ista formula, novo čitanje

Teorem orbita–stabilizator kaže da klasa konjugacije elementa $x$ ima
točno $[G : C_G(x)]$ elemenata. Klase su orbite, pa particioniraju $G$;
zbrajanje po njima daje
$$|G| = \sum_{i=1}^{r} \big[\,G : C_G(x_i)\,\big],$$
gdje su $x_1, \dots, x_r$ predstavnici klasa.

Jednočlane klase su upravo elementi koji komutiraju sa svime, tj.
elementi **centra**
$Z(G) = \{z \in G : zg = gz \ \text{za sve } g \in G\}$. Izdvojimo li
njih, dobivamo **jednadžbu klasa**
$$|G| = |Z(G)| + \sum_{\substack{i \\ [G : C_G(x_i)] > 1}}
  \big[\,G : C_G(x_i)\,\big].$$

## Zašto se to isplati

Za grupu reda $|G| = p^{n}$ ($p$ prost, $n \ge 1$) svaki je pribrojnik u
sumi indeks veće od $1$ koji dijeli $p^n$, dakle djeljiv s $p$. Kako je
i $|G|$ djeljiv s $p$, mora biti $p \mid |Z(G)|$ — a $Z(G)$ sadrži barem
$e$, pa ima barem $p$ elemenata: **grupa reda potencije prostog broja
ima netrivijalan centar.** Iz tog jednog zaključka izrasta struktura
$p$-grupa, a preko brojanja orbita konjugacije na skupovima podgrupa i
Sylowljevi teoremi.

Vrijedi zapamtiti što se točno prenijelo: nijedan novi teorem o grupama,
nego isti račun s orbitama primijenjen na djelovanje grupe na samoj
sebi. Kad se umjesto konjugacije broje fiksne točke *svih* elemenata
grupe odjednom, isti izvor daje broj orbita kao prosjek
([[thm-burnsideova-lema]]).
