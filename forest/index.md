# MatSek šuma

Zajednička šuma knjižnice (spec D-007): stabla su sloj u koji se spaja.

<!-- bundle-to-trees:begin -->

## Zadatci iz zbirke

- [[exr-an-bounded-implies-compact]]
- [[exr-an-prva-epsilon-delta-provjera]]
- [[exr-an-ravnina-bez-tocke]]
- [[exr-an-shrinking-map-fixed-point]]
- [[exr-an-stepenaste-aproksimacije]]
- [[exr-an-uniform-continuity-gap]]
- [[exr-ga-coset-action]]
- [[exr-ga-fiksni-koset-reda-55]]
- [[exr-ga-koseti-simetrija-kvadrata]]
- [[exr-ga-normal-core]]
- [[exr-ga-ogrlice-mali-fermat]]
- [[exr-ga-orbits-on-cosets]]
- [[exr-ga-podgrupe-reda-35]]
- [[exr-la-diagonalizable-parameter]]
- [[exr-la-dimenzija-rjesenja]]
- [[exr-la-polinomna-jednadzba]]
- [[exr-la-prva-dijagonalizacija]]
- [[exr-la-symmetric-square-root]]
- [[exr-la-three-point-fit]]
- [[exr-pf-kruzni-trio]]
- [[exr-pf-pomak-za-dva]]
- [[exr-pf-slozni-susjedi]]
- [[exr-pf-tombola-dobitnici]]
- [[exr-pf-zamjena-argumenta]]
- [[exr-qd-centar-diedarske]]
- [[exr-qd-rationals-mod-one]]
- [[exr-qd-red-u-kvocijentu]]
- [[exr-qd-thirteen-sensors]]
- [[exr-qd-zbrojevi-oko-stola]]
- [[exr-sc-central-binomial-threshold]]
- [[exr-sc-logaritamske-ljestve]]
- [[exr-sc-potencija-protiv-faktorijele]]
- [[exr-sc-potencije-na-segmentu]]
- [[exr-sc-putujuci-brijeg]]
- [[exr-sc-what-uniformity-buys]]

## Dokazi iz zbirke

- [[thm-an-cauchy-schwarz-inner-product]]
- [[thm-an-cauchy-schwarz-rn]]
- [[thm-ga-lagrange-djelovanje]]
- [[thm-ga-lagrange-particija]]

<!-- bundle-to-trees:end -->

## Blog: Djelovanja koja broje

Probavljen iz `blog/djelovanja-koja-broje`. Put od definicije djelovanja
do dvaju brojanja: malog Fermatova teorema i Burnsideove leme.

- [[mot-brojanje-djelovanjem]] — zašto naivno dijeljenje s $|G|$ zakaže i što ga zamjenjuje
- [[def-djelovanje-grupe]] — dva aksioma vanjskog množenja $G \times X \to X$
- [[prp-djelovanje-kao-permutacije]] — svaki element djeluje kao bijekcija; djelovanje je homomorfizam u $\mathrm{Sym}(X)$
- [[prf-djelovanje-kao-permutacije]] — dokaz: inverz u grupi poništava djelovanje
- [[exm-tri-djelovanja]] — simetrije kvadrata, ciklički pomaci, grupa na samoj sebi
- [[def-orbita-i-stabilizator]] — kamo točka može stići i tko je drži na mjestu
- [[prp-orbite-particioniraju]] — orbite su klase ekvivalencije, pa se $|X|$ zbraja po hrpama
- [[prf-orbite-particioniraju]] — dokaz: refleksivnost, simetričnost i tranzitivnost iz aksioma grupe
- [[prp-stabilizator-je-podgrupa]] — stabilizator je podgrupa, a duž orbite stabilizatori su konjugirani
- [[prf-stabilizator-je-podgrupa]] — dokaz: tri provjere iz kriterija za podgrupu
- [[thm-orbita-stabilizator]] — $|\mathrm{Orb}(x)| \cdot |\mathrm{Stab}(x)| = |G|$
- [[prf-orbita-stabilizator]] — dokaz: bijekcija $gH \mapsto g \cdot x$ plus Lagrange
- [[cor-velicina-orbite-dijeli-red]] — veličina svake orbite dijeli red grupe
- [[prf-velicina-orbite-dijeli-red]] — dokaz: oba su faktora prirodni brojevi
- [[exm-kvadrat-orbita-stabilizator]] — vrhovi kvadrata: $4 \cdot 2 = 8$, provjereno do zadnjeg elementa
- [[thm-mali-fermatov-teorem]] — $p \mid a^p - a$, i $a^{p-1} \equiv 1 \pmod p$ uz $p \nmid a$
- [[prf-mali-fermat-ogrlice]] — dokaz vrtnjom ogrlica: orbite veličine $1$ ili $p$
- [[thm-burnsideova-lema]] — broj orbita je prosječan broj fiksnih točaka
- [[prf-burnsideova-lema]] — dokaz: dvostruko prebrojavanje parova $(g, x)$ s $g \cdot x = x$
- [[exm-ogrlice-tri-perle]] — tri perle u dvije boje: $(8+2+2)/3 = 4$ ogrlice
- [[con-od-fiksnih-tocaka-do-jednadzbe-klasa]] — isti račun na konjugaciji daje jednadžbu klasa

## Blog: Entropy without measure theory

Digested from `blog/pf-entropy-without-measure`. Shannon entropy built
out of finite probability alone: surprise, its expectation, and what the
number buys.

- [[mot-entropy-without-measure]] — what question entropy answers, and why finite sums suffice
- [[def-surprise]] — $s(x) = \log_2 \tfrac{1}{p(x)}$, measured in bits
- [[def-entropy]] — $H(X) = \mathbb{E}[s(X)]$: an ordinary expectation, not a new object
- [[rem-zero-probability-convention]] — why $0 \cdot \log_2 \tfrac10$ is read as $0$
- [[exm-coin-entropies]] — fair, loaded and certain coins: $1$, $\approx 0.47$ and $0$ bits
- [[exp-why-the-logarithm]] — additivity of independent news forces the logarithm
- [[thm-entropy-additive-independent]] — $H(X, Y) = H(X) + H(Y)$ for independent $X$, $Y$
- [[prf-entropy-additive-independent]] — proof: surprise splits pointwise, then linearity
- [[exm-two-fair-dice]] — $\log_2 36 = 2 \log_2 6$, checked both ways
- [[thm-uniform-maximizes-entropy]] — $H(X) \le \log_2 n$, with equality only for the uniform law
- [[prf-uniform-maximizes-entropy]] — proof: Jensen, plus the support-size refinement $H \le \log_2 m$
- [[exp-entropy-as-a-guessing-game]] — entropy as the yes/no question floor, and hence the compression limit

## Blog: Galois connections beyond Galois theory

Digested from `blog/pf-galois-connections-everywhere`. One
order-theoretic definition, three rungs: posets, the field-theoretic
example, adjoint functors.

- [[mot-galois-connections-beyond-galois]] — the same two lines own floor, $\langle S \rangle$ and adjunctions
- [[def-galois-connection]] — $f(p) \le q \iff p \le g(q)$, the whole definition
- [[rem-monotonicity-is-automatic]] — monotonicity is free, and each adjoint determines the other
- [[prp-galois-round-trips]] — $p \le g(f(p))$, $f(g(q)) \le q$, and $gfg = g$
- [[prf-galois-round-trips]] — proof: feed the equivalence a reflexivity, twice
- [[thm-adjoints-preserve-bounds]] — left adjoints preserve suprema, right adjoints infima
- [[prf-adjoints-preserve-bounds]] — proof: ship the question across the equivalence
- [[exm-floor-ceiling-adjunction]] — floor and ceiling as the two adjoints of $\mathbb{Z} \hookrightarrow \mathbb{R}$
- [[rem-floor-fails-suprema]] — the counterexample that shows the one-sidedness is real
- [[exm-galois-correspondence-fields]] — subgroups against intermediate fields: the antitone original
- [[def-closure-operator]] — extensive, monotone, idempotent; closed elements as fixed points
- [[thm-connection-induces-closure]] — $g \circ f$ is a closure operator with closed elements $g(Q)$
- [[prf-connection-induces-closure]] — proof: everything falls out of $gfg = g$
- [[exm-generated-subgroup-closure]] — $S \mapsto \langle S \rangle$, and the same template five times over
- [[con-galois-connections-are-adjunctions]] — posets are thin categories, so connections are adjunctions
- [[exm-abelianization-left-adjoint]] — $(G * H)^{\mathrm{ab}} \cong G^{\mathrm{ab}} \oplus H^{\mathrm{ab}}$, and the limits it drops
