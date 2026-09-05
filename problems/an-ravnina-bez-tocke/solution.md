# Rješenje

## (a) $\mathbb{R} \setminus \{a\}$ je nepovezan

Stavimo
$$U = (-\infty, a), \qquad V = (a, \infty).$$

Oba su skupa otvorena u $\mathbb{R}$ (otvoreni intervali), disjunktna su,
neprazna su (npr. $a - 1 \in U$, $a + 1 \in V$) i vrijedi
$U \cup V = \mathbb{R} \setminus \{a\}$: svaki realan broj različit od $a$
je ili manji ili veći od $a$. To je upravo rastav koji svjedoči
nepovezanost. $\blacksquare$

## (b) $\mathbb{R}^2 \setminus \{P_0\}$ je povezan putevima

Neka su $A, B \in \mathbb{R}^2 \setminus \{P_0\}$ proizvoljne.

**Slučaj 1: $P_0$ ne leži na segmentu $\overline{AB}$.** Tada je put
$$\gamma(t) = (1 - t)A + tB, \qquad t \in [0,1],$$
neprekidan (svaka koordinata je polinom u $t$), spaja $A$ i $B$, i po
pretpostavci slučaja izbjegava $P_0$.

**Slučaj 2: $P_0$ leži na segmentu $\overline{AB}$.** Tada su $A$, $B$ i
$P_0$ kolinearni; označimo s $\ell$ pravac kroz njih. Odaberimo točku $T$
**izvan** pravca $\ell$ — npr. $T = A + n$, gdje je $n \neq 0$ vektor
okomit na smjer $B - A$; takva točka postoji jer pravac ne iscrpljuje
ravninu (ovdje se bitno koristi da smo u $\mathbb{R}^2$, a ne u
$\mathbb{R}$!).

Tvrdimo da segmenti $\overline{AT}$ i $\overline{TB}$ izbjegavaju $P_0$:
kad bi $P_0$ ležao na $\overline{AT}$, točke $A$, $T$, $P_0$ bile bi
kolinearne; no $A \neq P_0$ i obje leže na $\ell$, pa bi pravac kroz $A$ i
$P_0$ bio upravo $\ell$, dakle $T \in \ell$ — kontradikcija s izborom $T$.
Isti argument (s $B$ umjesto $A$) vrijedi za $\overline{TB}$.

Nadovezani put ($A$ do $T$ pa $T$ do $B$),
$$\gamma(t) = \begin{cases} (1 - 2t)A + 2tT, & t \in [0, \tfrac12],\\[2pt] (2 - 2t)T + (2t - 1)B, & t \in [\tfrac12, 1],\end{cases}$$
neprekidan je (oba su komada neprekidna i podudaraju se u $t = \tfrac12$,
gdje oba daju $T$), spaja $A$ i $B$ i ne prolazi kroz $P_0$.

**Povezanost putevima $\Rightarrow$ povezanost.** Pretpostavimo suprotno:
$X = \mathbb{R}^2 \setminus \{P_0\}$ rastavljen je na neprazne, disjunktne,
otvorene $U$ i $V$. Uzmimo $A \in U$, $B \in V$ i put
$\gamma\colon [0,1] \to X$ od $A$ do $B$. Skupovi
$$U' = \gamma^{-1}(U), \qquad V' = \gamma^{-1}(V)$$
otvoreni su u $[0,1]$ (praslike otvorenih skupova po neprekidnoj
funkciji), disjunktni, neprazni ($0 \in U'$, $1 \in V'$) i pokrivaju
$[0,1]$ jer put leži u $U \cup V$. To bi značilo da je $[0,1]$ nepovezan —
kontradikcija s poznatom činjenicom da je segment povezan. Dakle je $X$
povezan. $\blacksquare$

## (c) $\mathbb{R}$ i $\mathbb{R}^2$ nisu homeomorfni

Pretpostavimo da homeomorfizam $h\colon \mathbb{R} \to \mathbb{R}^2$
postoji. Uklonimo točku $a = 0$ iz domene i promotrimo restrikciju
$$h\big|_{\mathbb{R} \setminus \{0\}}\colon\ \mathbb{R} \setminus \{0\} \ \to\ \mathbb{R}^2 \setminus \{h(0)\}.$$

Ona je bijekcija (jer je $h$ bijekcija, a izbacili smo točku i njezinu
sliku), i ona i njezin inverz su neprekidne (restrikcije neprekidnih
funkcija na potprostore), pa je i to homeomorfizam. Označimo njegov inverz
$$h^{-1}\colon\ \mathbb{R}^2 \setminus \{h(0)\} \ \to\ \mathbb{R} \setminus \{0\}.$$

Po (b), skup $\mathbb{R}^2 \setminus \{h(0)\}$ je povezan. Neprekidna
slika povezanog skupa je povezana, pa bi
$$h^{-1}\big(\mathbb{R}^2 \setminus \{h(0)\}\big) = \mathbb{R} \setminus \{0\}$$
bio povezan skup. No po (a) je $\mathbb{R} \setminus \{0\}$ nepovezan —
kontradikcija.

Dakle homeomorfizam $h$ ne postoji: pravac i ravnina topološki su
različiti prostori. $\blacksquare$

*Napomena.* Sama neprekidna bijekcija $\mathbb{R} \to \mathbb{R}^2$ ovim
argumentom nije isključena — kontradikciju smo izveli kroz neprekidnost
**inverza**. Zato definicija homeomorfizma zahtijeva oba smjera.
