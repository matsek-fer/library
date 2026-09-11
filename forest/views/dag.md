# Graf ovisnosti

> [!TIP] Ovo je statični Obsidian-prikaz. **Interaktivni prikaz** — sklopive cjeline, označavanje napretka (savladano / spremno / nije spremno), pretraga — je `views/forest.html`: otvori ga **u pregledniku** (dvoklik u file manageru), ne u Obsidianu.

Bridovi su `depends` veze: strelica vodi od preduvjeta prema stablu
koje ga treba. Graf je tranzitivno reduciran — brid koji slijedi iz
duljeg puta je izostavljen. Dokazi (`prf-`) i zadatci (`exr-`) su
izostavljeni radi čitljivosti; potpuni interaktivni prikaz je
`views/forest.html`.

*(Generirano 2026-09-09 alatom forest-digest.)*

## Pregled po cjelinama

```mermaid
graph TD
    g0["Zadatci iz zbirke (70)"]
    g1["Dokazi iz zbirke (8)"]
    g2["Blog: Djelovanja koja broje (21)"]
    g3["Blog: Entropy without measure theory (12)"]
    g4["Blog: Galois connections beyond Galois theory (16)"]
    g1 --> g2
    g2 --> g0
    g2 --> g1
```

## Zadatci iz zbirke

*(samo dokazi/zadatci — vidi forest.html)*

## Dokazi iz zbirke

```mermaid
graph TD
    thm_an_cauchy_schwarz_inner_product["thm-an-cauchy-schwarz-inner-product"]
    thm_an_cauchy_schwarz_rn["thm-an-cauchy-schwarz-rn"]
    thm_ga_lagrange_djelovanje["thm-ga-lagrange-djelovanje"]
    thm_ga_lagrange_particija["thm-ga-lagrange-particija"]
```

- [[thm-an-cauchy-schwarz-inner-product]] — Cauchy-Schwarz inequality in an inner product space via orthogonal projection
- [[thm-an-cauchy-schwarz-rn]] — Cauchy-Schwarz inequality in R^n via Lagrange's identity
- [[thm-ga-lagrange-djelovanje]] — Lagrange's theorem via a free group action
- [[thm-ga-lagrange-particija]] — Lagrangeov teorem: dokaz preko particije na kosete

## Blog: Djelovanja koja broje

```mermaid
graph TD
    mot_brojanje_djelovanjem["mot-brojanje-djelovanjem"]
    def_djelovanje_grupe["def-djelovanje-grupe"]
    prp_djelovanje_kao_permutacije["prp-djelovanje-kao-permutacije"]
    exm_tri_djelovanja["exm-tri-djelovanja"]
    def_orbita_i_stabilizator["def-orbita-i-stabilizator"]
    prp_orbite_particioniraju["prp-orbite-particioniraju"]
    prp_stabilizator_je_podgrupa["prp-stabilizator-je-podgrupa"]
    thm_orbita_stabilizator["thm-orbita-stabilizator"]
    cor_velicina_orbite_dijeli_red["cor-velicina-orbite-dijeli-red"]
    exm_kvadrat_orbita_stabilizator["exm-kvadrat-orbita-stabilizator"]
    thm_mali_fermatov_teorem["thm-mali-fermatov-teorem"]
    thm_burnsideova_lema["thm-burnsideova-lema"]
    exm_ogrlice_tri_perle["exm-ogrlice-tri-perle"]
    con_od_fiksnih_tocaka_do_jednadzbe_klasa["con-od-fiksnih-tocaka-do-jednadzbe-klasa"]
    prp_orbite_particioniraju --> con_od_fiksnih_tocaka_do_jednadzbe_klasa
    thm_orbita_stabilizator --> con_od_fiksnih_tocaka_do_jednadzbe_klasa
    thm_orbita_stabilizator --> cor_velicina_orbite_dijeli_red
    def_djelovanje_grupe --> def_orbita_i_stabilizator
    thm_orbita_stabilizator --> exm_kvadrat_orbita_stabilizator
    thm_burnsideova_lema --> exm_ogrlice_tri_perle
    def_djelovanje_grupe --> exm_tri_djelovanja
    def_djelovanje_grupe --> prp_djelovanje_kao_permutacije
    def_orbita_i_stabilizator --> prp_orbite_particioniraju
    def_orbita_i_stabilizator --> prp_stabilizator_je_podgrupa
    def_orbita_i_stabilizator --> thm_burnsideova_lema
    prp_stabilizator_je_podgrupa --> thm_orbita_stabilizator
```

- [[mot-brojanje-djelovanjem]] — Zašto brojiti djelovanjem grupe
- [[def-djelovanje-grupe]] — Djelovanje grupe na skupu
- [[prp-djelovanje-kao-permutacije]] — Djelovanje je isto što i homomorfizam u Sym(X)
- [[exm-tri-djelovanja]] — Tri djelovanja za kalibraciju
- [[def-orbita-i-stabilizator]] — Orbita i stabilizator
- [[prp-orbite-particioniraju]] — Orbite particioniraju skup
- [[prp-stabilizator-je-podgrupa]] — Stabilizator je podgrupa
- [[thm-orbita-stabilizator]] — Teorem orbita–stabilizator
- [[cor-velicina-orbite-dijeli-red]] — Veličina orbite dijeli red grupe
- [[exm-kvadrat-orbita-stabilizator]] — Vrhovi kvadrata: orbita 4, stabilizator 2
- [[thm-mali-fermatov-teorem]] — Mali Fermatov teorem
- [[thm-burnsideova-lema]] — Burnsideova lema: broj orbita je prosjek fiksnih točaka
- [[exm-ogrlice-tri-perle]] — Ogrlice od tri perle u dvije boje
- [[con-od-fiksnih-tocaka-do-jednadzbe-klasa]] — Od brojanja orbita do jednadžbe klasa

## Blog: Entropy without measure theory

```mermaid
graph TD
    mot_entropy_without_measure["mot-entropy-without-measure"]
    def_surprise["def-surprise"]
    def_entropy["def-entropy"]
    rem_zero_probability_convention["rem-zero-probability-convention"]
    exm_coin_entropies["exm-coin-entropies"]
    exp_why_the_logarithm["exp-why-the-logarithm"]
    thm_entropy_additive_independent["thm-entropy-additive-independent"]
    exm_two_fair_dice["exm-two-fair-dice"]
    thm_uniform_maximizes_entropy["thm-uniform-maximizes-entropy"]
    exp_entropy_as_a_guessing_game["exp-entropy-as-a-guessing-game"]
    def_surprise --> def_entropy
    def_entropy --> exm_coin_entropies
    thm_entropy_additive_independent --> exm_two_fair_dice
    thm_entropy_additive_independent --> exp_entropy_as_a_guessing_game
    def_surprise --> exp_why_the_logarithm
    def_entropy --> rem_zero_probability_convention
    def_entropy --> thm_entropy_additive_independent
    def_entropy --> thm_uniform_maximizes_entropy
```

- [[mot-entropy-without-measure]] — What entropy is for, and why finite probability suffices
- [[def-surprise]] — Surprise of an outcome
- [[def-entropy]] — Entropy of a discrete random variable
- [[rem-zero-probability-convention]] — Why impossible outcomes contribute zero
- [[exm-coin-entropies]] — Three coins: 1 bit, 0.47 bits, 0 bits
- [[exp-why-the-logarithm]] — Why the logarithm, and not some simpler formula
- [[thm-entropy-additive-independent]] — Entropy is additive over independent variables
- [[exm-two-fair-dice]] — Two dice carry twice the entropy of one
- [[thm-uniform-maximizes-entropy]] — The uniform distribution maximizes entropy
- [[exp-entropy-as-a-guessing-game]] — Entropy as a guessing game: the price of identification

## Blog: Galois connections beyond Galois theory

```mermaid
graph TD
    mot_galois_connections_beyond_galois["mot-galois-connections-beyond-galois"]
    def_galois_connection["def-galois-connection"]
    rem_monotonicity_is_automatic["rem-monotonicity-is-automatic"]
    prp_galois_round_trips["prp-galois-round-trips"]
    thm_adjoints_preserve_bounds["thm-adjoints-preserve-bounds"]
    exm_floor_ceiling_adjunction["exm-floor-ceiling-adjunction"]
    rem_floor_fails_suprema["rem-floor-fails-suprema"]
    exm_galois_correspondence_fields["exm-galois-correspondence-fields"]
    def_closure_operator["def-closure-operator"]
    thm_connection_induces_closure["thm-connection-induces-closure"]
    exm_generated_subgroup_closure["exm-generated-subgroup-closure"]
    con_galois_connections_are_adjunctions["con-galois-connections-are-adjunctions"]
    exm_abelianization_left_adjoint["exm-abelianization-left-adjoint"]
    thm_adjoints_preserve_bounds --> con_galois_connections_are_adjunctions
    con_galois_connections_are_adjunctions --> exm_abelianization_left_adjoint
    thm_adjoints_preserve_bounds --> exm_floor_ceiling_adjunction
    def_galois_connection --> exm_galois_correspondence_fields
    thm_adjoints_preserve_bounds --> exm_generated_subgroup_closure
    thm_connection_induces_closure --> exm_generated_subgroup_closure
    def_galois_connection --> prp_galois_round_trips
    exm_floor_ceiling_adjunction --> rem_floor_fails_suprema
    def_galois_connection --> rem_monotonicity_is_automatic
    def_galois_connection --> thm_adjoints_preserve_bounds
    def_closure_operator --> thm_connection_induces_closure
    prp_galois_round_trips --> thm_connection_induces_closure
```

- [[mot-galois-connections-beyond-galois]] — Why Galois connections are not about fields
- [[def-galois-connection]] — Galois connection
- [[rem-monotonicity-is-automatic]] — Monotonicity comes free, and each adjoint determines the other
- [[prp-galois-round-trips]] — Round trips in a Galois connection
- [[thm-adjoints-preserve-bounds]] — Left adjoints preserve suprema, right adjoints preserve infima
- [[exm-floor-ceiling-adjunction]] — Floor and ceiling as the two adjoints of Z into R
- [[rem-floor-fails-suprema]] — Floor shrugs at suprema
- [[exm-galois-correspondence-fields]] — Subgroups and fixed fields: the eponymous connection
- [[def-closure-operator]] — Closure operator
- [[thm-connection-induces-closure]] — Every Galois connection induces a closure operator
- [[exm-generated-subgroup-closure]] — Generated subgroups as a closure operator
- [[con-galois-connections-are-adjunctions]] — Galois connections are adjunctions between thin categories
- [[exm-abelianization-left-adjoint]] — Abelianization: a left adjoint earning its keep
