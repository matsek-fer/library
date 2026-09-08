---
schema_version: "1.0"
section_concepts:
  "#zasto-brojiti-djelovanjem": [group-actions]
  "#sto-je-djelovanje-grupe": [group-actions, permutation-groups]
  "#orbite-i-stabilizatori": [orbits-stabilizers]
  "#teorem-orbita-stabilizator": [orbit-stabilizer-theorem, cosets, lagrange]
  "#ogrlice-i-mali-fermatov-teorem": [orbits-stabilizers, modular-arithmetic]
  "#pogled-prema-burnsideu": [orbits-stabilizers, group-actions]
checkpoints:
  - after: "#sto-je-djelovanje-grupe"
    ask: "Fiksiraj element g grupe G koja djeluje na skupu X. Kakvo je preslikavanje x ↦ g · x iz X u X?"
    options:
      - "Bijekcija — element g⁻¹ ga poništava."
      - "Injekcija, ali ne nužno surjekcija."
      - "Homomorfizam grupa."
    correct: 0
    if_wrong:
      goto: "#sto-je-djelovanje-grupe"
      note: "Iz aksioma djelovanja slijedi da g⁻¹ vraća sve na mjesto — pogledaj izvod još jednom."
  - after: "#teorem-orbita-stabilizator"
    ask: "Grupa simetrija kvadrata ima 8 elemenata, a četiri vrha kvadrata čine jednu orbitu. Koliko elemenata ima stabilizator jednog vrha?"
    options:
      - "4"
      - "2"
      - "8"
    correct: 1
    if_wrong:
      goto: "#teorem-orbita-stabilizator"
      note: "Teorem kaže |orbita| · |stabilizator| = |G| — uvrsti brojeve 4 i 8."
  - after: "#ogrlice-i-mali-fermatov-teorem"
    ask: "Zašto orbita nekonstantnog niza duljine p (p prost) pod cikličkim pomacima ima točno p elemenata?"
    options:
      - "Jer su sve orbite jednako velike."
      - "Jer stabilizator, kao podgrupa grupe prostog reda p, mora biti trivijalan čim niz nije konstantan."
      - "Jer nekonstantnih nizova ima višekratnik od p."
    correct: 1
    if_wrong:
      goto: "#ogrlice-i-mali-fermatov-teorem"
      note: "Ključ je Lagrange u grupi reda p: stabilizator je ili trivijalan ili cijela grupa, a cijela grupa fiksira samo konstantne nizove."
x_forest:
  "#zasto-brojiti-djelovanjem":
    taxon: motivation
    standalone: true
  "#sto-je-djelovanje-grupe":
    taxon: exposition
    standalone: true
  "#orbite-i-stabilizatori":
    taxon: exposition
    standalone: true
  "#teorem-orbita-stabilizator":
    taxon: exposition
    standalone: true
  "#ogrlice-i-mali-fermatov-teorem":
    taxon: example
    standalone: true
  "#pogled-prema-burnsideu":
    taxon: connection
    standalone: true
---

# Djelovanja koja broje

Znaš što je grupa, znaš da koseti podgrupe $H$ dijele grupu $G$ na
jednako velike komade i da zato $|H|$ dijeli $|G|$ (Lagrangeov teorem).
Ovaj post pokazuje čemu to služi izvan same teorije grupa: kako se
*djelovanjem* grupe na skupu brojanje pretvara u knjigovodstvo. Na kraju
ćeš istim računom dokazati mali Fermatov teorem — i vidjeti kamo taj račun
vodi dalje.

## Zašto brojiti djelovanjem

Mnogi problemi brojanja imaju simetriju koja smeta. Koliko ima ogrlica od
$p$ perli u $a$ boja, ako se ogrlice koje se razlikuju samo za zakret
smatraju istima? Nizova perli ima točno $a^p$ — to je lako — ali zakreti
lijepe više nizova u istu ogrlicu, i to *ne uvijek jednako mnogo* njih.
Naivno dijeljenje $a^p / p$ općenito nije ni cijeli broj.

Ideja koja spašava stvar: simetrije problema čine grupu, i ta grupa
*djeluje* na skupu koji brojimo — svaka simetrija premješta elemente
skupa. Djelovanje razlaže skup na hrpe (orbite), a veličine tih hrpa nisu
proizvoljne: kontrolira ih struktura grupe. Kad znaš koje su veličine
hrpa dopuštene, zbrajanje po hrpama daje jednakosti i djeljivosti koje se
izravno ne vide. U ovom postu tako iz $a^p$ nizova ispada tvrdnja
$p \mid a^p - a$ — mali Fermatov teorem, dokazan vrtnjom ogrlica umjesto
računanjem ostataka.

## Što je djelovanje grupe

**Definicija.** Grupa $G$ *djeluje* na skupu $X$ ako je zadano
preslikavanje $G \times X \to X$, pisano $(g, x) \mapsto g \cdot x$, koje
poštuje strukturu grupe:

1. $e \cdot x = x$ za svaki $x \in X$ (neutralni element ne radi ništa);
2. $(gh) \cdot x = g \cdot (h \cdot x)$ za sve $g, h \in G$, $x \in X$
   (djelovati produktom isto je što i djelovati jednim pa drugim).

Iz ta dva aksioma odmah slijedi nešto važno: za fiksni $g$ preslikavanje
$x \mapsto g \cdot x$ je **bijekcija** skupa $X$. Naime,
$g^{-1} \cdot (g \cdot x) = (g^{-1}g) \cdot x = e \cdot x = x$, i jednako
tako $g \cdot (g^{-1} \cdot x) = x$ — element $g^{-1}$ poništava $g$.
Svaki element grupe je, dakle, *permutacija* skupa $X$, i djelovanje je
isto što i homomorfizam $G \to \mathrm{Sym}(X)$ u grupu svih permutacija
od $X$.

Tri primjera za kalibraciju:

- **Simetrije kvadrata na vrhovima.** Grupa simetrija kvadrata (4
  rotacije i 4 zrcaljenja, ukupno 8 elemenata) djeluje na skupu od 4
  vrha: simetrija $g$ šalje vrh $v$ u vrh $g \cdot v$ na koji ga
  geometrijski preslika.
- **Ciklički pomaci na nizovima.** Grupa $\mathbb{Z}/n\mathbb{Z}$ djeluje
  na nizovima duljine $n$: klasa $k$ pomiče niz ciklički za $k$ mjesta.
- **Grupa na samoj sebi.** Svaka grupa $G$ djeluje na skupu $X = G$
  lijevim množenjem, $g \cdot x = gx$; aksiomi su upravo svojstva
  neutralnog elementa i asocijativnost.

## Orbite i stabilizatori

Neka grupa $G$ djeluje na skupu $X$ (dakle $g \cdot x \in X$, uz
$e \cdot x = x$ i $(gh) \cdot x = g \cdot (h \cdot x)$). Djelovanju
pridružujemo dva osnovna objekta.

**Orbita** točke $x \in X$ je sve kamo $x$ može stići:

$$
\mathrm{Orb}(x) = \{ g \cdot x : g \in G \} \subseteq X.
$$

Orbite **particioniraju** $X$. Provjera: relacija „$y$ se dobije iz $x$
nekim elementom grupe" je relacija ekvivalencije — refleksivna jer
$e \cdot x = x$, simetrična jer iz $y = g \cdot x$ slijedi
$x = g^{-1} \cdot y$, tranzitivna jer iz $y = g \cdot x$ i
$z = h \cdot y$ slijedi $z = (hg) \cdot x$. Klase te ekvivalencije upravo
su orbite: svaka točka leži u točno jednoj, pa se $|X|$ može računati
zbrajanjem veličina orbita. To je knjigovodstvena podloga svega dalje.

**Stabilizator** točke $x$ su svi elementi grupe koji je ne miču:

$$
\mathrm{Stab}(x) = \{ g \in G : g \cdot x = x \}.
$$

Stabilizator je **podgrupa** od $G$: sadrži $e$, zatvoren je na produkt
(ako $g$ i $h$ fiksiraju $x$, fiksira ga i $gh$, jer
$(gh) \cdot x = g \cdot (h \cdot x) = g \cdot x = x$) i na inverz (ako
$g \cdot x = x$, primjena $g^{-1}$ na obje strane daje
$x = g^{-1} \cdot x$).

Primjer: simetrije kvadrata (8 elemenata) na 4 vrha. Orbita bilo kojeg
vrha su sva 4 vrha — rotacijama se od svakog vrha stiže do svakog.
Stabilizator vrha $v$ ima 2 elementa: identitetu i zrcaljenje preko
dijagonale kroz $v$. Zapamti brojeve $4$ i $2$ — nisu slučajni.

## Teorem orbita–stabilizator

Neka konačna grupa $G$ djeluje na skupu $X$, i neka je $x \in X$. Orbita
$\mathrm{Orb}(x) = \{g \cdot x : g \in G\}$ je sve kamo $x$ putuje;
stabilizator $\mathrm{Stab}(x) = \{g : g \cdot x = x\}$ podgrupa je svih
elemenata koji $x$ fiksiraju. Teorem kaže da su te dvije veličine u
savršenoj ravnoteži:

$$
|\mathrm{Orb}(x)| \cdot |\mathrm{Stab}(x)| = |G|.
$$

Dokaz je jedna dobro definirana bijekcija. Označimo
$H = \mathrm{Stab}(x)$ i pogledajmo lijeve kosete $gH = \{gh : h \in H\}$
— jednako velike translate podgrupe $H$ koje particioniraju $G$
(podsjetnik za vježbu: **problem/ga-koseti-simetrija-kvadrata**,
[u knjižnici](https://matsek-fer.github.io/library/problems/ga-koseti-simetrija-kvadrata/)).
Definiramo

$$
\varphi : \{\text{koseti od } H\} \to \mathrm{Orb}(x), \qquad
\varphi(gH) = g \cdot x.
$$

- *Dobro definirano i injektivno:* $gH = g'H$ vrijedi točno kada je
  $g'^{-1}g \in H$, dakle točno kada $g'^{-1}g$ fiksira $x$, dakle točno
  kada je $g \cdot x = g' \cdot x$. Ista ekvivalencija pročitana slijeva
  nadesno daje dobru definiranost, a zdesna nalijevo injektivnost.
- *Surjektivno:* svaki element orbite po definiciji jest $g \cdot x$ za
  neki $g$.

Orbita je dakle u bijekciji s kosetima stabilizatora: broj elemenata
orbite jednak je indeksu $[G : \mathrm{Stab}(x)]$, pa Lagrangeov teorem
($|G| = [G:H] \cdot |H|$) daje gornju formulu.

Čitaj to kao knjigovodstvo: svaki od $|G|$ elemenata grupe šalje $x$
*negdje*, a svako odredište u orbiti prima **točno**
$|\mathrm{Stab}(x)|$ pošiljatelja — ni više, ni manje. Provjera na
kvadratu: $8$ simetrija, orbita vrha ima $4$ elementa, stabilizator $2$,
i zaista $4 \cdot 2 = 8$. Odmah slijedi i korisna posljedica: **veličina
svake orbite dijeli $|G|$**.

Za ozbiljniji trening istog računa — orbite jedne podgrupe na kosetima
druge, s formulom $|HK| = |H||K| / |H \cap K|$ kao nagradom — isprobaj:
**problem/ga-orbits-on-cosets**
([u knjižnici](https://matsek-fer.github.io/library/problems/ga-orbits-on-cosets/)).

## Ogrlice i mali Fermatov teorem

Dokažimo prebrojavanjem ogrlica jedan klasičan rezultat. **Mali Fermatov teorem:** za prost broj $p$ i cijeli
broj $a \ge 1$ vrijedi $p \mid a^p - a$; ako usto $p \nmid a$, onda
$a^{p-1} \equiv 1 \pmod p$.

Neka je $X$ skup svih nizova duljine $p$ sa znakovima iz $a$ boja; očito
$|X| = a^p$. Grupa $\mathbb{Z}/p\mathbb{Z}$ (ciklička, reda $p$) djeluje
na $X$ cikličkim pomakom: klasa $k$ pomiče niz za $k$ mjesta,
$(k \cdot s)_i = s_{i+k \bmod p}$. To jest djelovanje: pomak za $0$ ne
radi ništa, a pomak za $k+l$ isto je što i pomak za $l$ pa za $k$.

Koje veličine orbita to djelovanje dopušta? Teorem orbita–stabilizator
kaže da je $|\mathrm{Orb}(s)| \cdot |\mathrm{Stab}(s)| = p$, gdje je
$\mathrm{Stab}(s)$ podgrupa svih pomaka koji niz $s$ ostavljaju na miru.
Podgrupa grupe reda $p$ ima, po Lagrangeu, red koji dijeli $p$ — a $p$ je
prost, pa je stabilizator ili cijela grupa ili trivijalan. Ta dva slučaja
čitamo ovako:

- **Stabilizator je cijela grupa** točno kada $s$ ostaje na miru i pod
  pomakom za $1$, a niz nepomičan na pomak za jedno mjesto ima sve znakove jednake:
  $s$ je *konstantan*. Takvih je nizova točno $a$ (po jedan za svaku
  boju) i svaki čini orbitu veličine $1$.
- **Inače je stabilizator trivijalan**, pa orbita ima točno
  $p / 1 = p$ elemenata.

Orbite particioniraju $X$, pa zbrajanje po orbitama daje

$$
a^p = |X| = \underbrace{a}_{\text{konstantni nizovi}} +
p \cdot (\text{broj orbita veličine } p),
$$

dakle $p \mid a^p - a$. Kad $p \nmid a$, iz
$a^p - a = a\,(a^{p-1} - 1)$ i prostosti od $p$ slijedi
$p \mid a^{p-1} - 1$, tj. $a^{p-1} \equiv 1 \pmod p$. $\blacksquare$

Primijeti gdje je prostost upotrijebljena *dvaput*: jednom da orbite budu
veličine $1$ ili $p$, i drugi put da se iz $p \mid a(a^{p-1}-1)$ smije
izvući $p \mid a^{p-1}-1$. Za složeni $n$ analogon $n \mid a^n - a$
općenito *ne vrijedi*. Cijeli argument, s tim zamkama razrađenim kao
zadaci, čeka te u: **problem/ga-ogrlice-mali-fermat**
([u knjižnici](https://matsek-fer.github.io/library/problems/ga-ogrlice-mali-fermat/)).

## Pogled prema Burnsideu

Teorem orbita–stabilizator (za konačnu grupu $G$ na skupu $X$:
$|\mathrm{Orb}(x)| \cdot |\mathrm{Stab}(x)| = |G|$, gdje je stabilizator
podgrupa elemenata koji $x$ fiksiraju) odgovara na pitanje „koliko je
velika *jedna* hrpa?". Sljedeće prirodno pitanje je: **koliko hrpa ima?**
Most između ta dva pitanja je prebrojavanje *fiksnih točaka*: za
$g \in G$ neka je $\mathrm{Fix}(g) = \{x \in X : g \cdot x = x\}$.

Prebrojimo parove $(g, x)$ sa svojstvom $g \cdot x = x$ na dva načina.
Po elementima grupe, takvih je parova $\sum_{g} |\mathrm{Fix}(g)|$. Po
točkama skupa, ima ih $\sum_{x} |\mathrm{Stab}(x)|$ — a orbita–stabilizator
kaže $|\mathrm{Stab}(x)| = |G| / |\mathrm{Orb}(x)|$, pa svaka orbita $O$
doprinosi $\sum_{x \in O} |G|/|O| = |G|$. Ukupno: $|G|$ puta broj orbita.
Izjednačimo li oba brojanja,

$$
\text{broj orbita} \;=\; \frac{1}{|G|} \sum_{g \in G} |\mathrm{Fix}(g)|
$$

— broj orbita je *prosječan broj fiksnih točaka*. To je Burnsideova lema,
i upravo ona ispravno dovršava brojanje ogrlica (primjer iz odjeljka o
ogrlicama i malom Fermatovom teoremu): za $3$ perle u
$2$ boje pod rotacijama, identiteta fiksira svih $2^3 = 8$ nizova, a
svaka od dviju netrivijalnih rotacija samo $2$ konstantna, pa je ogrlica
$(8 + 2 + 2)/3 = 4$ — a ne $8/3$. Dijeljenje koje isprva nije imalo
smisla postalo je prosjek koji ima. Kamo dalje: ista logika brojanja
fiksnih točaka, primijenjena na djelovanje grupe *na samoj sebi*
konjugacijom, vodi do jednadžbe klasa i Sylowljevih teorema — sljedeće
stepenice u knjižnici.
