# Rješenje

Rezultat turnira možemo zamisliti kao usmjeravanje svih $\binom{n}{2}$
bridova potpunog grafa: svaki meč je brid usmjeren od pobjednika prema
poraženom, a svih $\binom{n}{2}$ smjerova bira se neovisno i ravnopravno.

**Indikatori po trojkama.** Za svaku trojku igrača $T = \{A, B, C\}$ (ima ih
$\binom{n}{3}$) definirajmo

$$
X_T = \begin{cases} 1, & \text{ako je trojka } T \text{ kružna}, \\ 0, & \text{inače}, \end{cases}
$$

pa je ukupan broj kružnih trojki $X = \sum_{T} X_T$.

**Vjerojatnost da je jedna trojka kružna.** Fiksirajmo trojku $\{A, B, C\}$.
Njezina tri međusobna meča imaju $2^3 = 8$ jednako vjerojatnih ishoda.
Prebrojimo one koji trojku čine kružnom. Ako trojka *nije* kružna, netko je u
njoj dobio oba svoja meča (postoji „lokalni pobjednik”): zaista, ako nitko
nije dobio oba meča, svaki od trojice ima točno po jednu pobjedu i jedan
poraz unutar trojke, a takav raspored pobjeda upravo zatvara krug. Kružni su
dakle točno oni ishodi u kojima pobjede unutar trojke idu „ukrug”, a krug na
tri igrača može se obići u točno dva smjera:

$$
A \to B \to C \to A \qquad \text{i} \qquad A \to C \to B \to A.
$$

Stoga je

$$
\mathbb{E}[X_T] = \Pr(T \text{ je kružna}) = \frac{2}{8} = \frac{1}{4}.
$$

**Zbrajanje.** Trojke dijele mečeve — recimo, trojke $\{A,B,C\}$ i
$\{A,B,D\}$ obje ovise o meču $A$–$B$ — pa indikatori $X_T$ *nisu* neovisni.
Očekivanju to ne smeta: očekivanje zbroja jednako je zbroju očekivanja bez
ikakvih pretpostavki o neovisnosti. Dakle,

$$
\mathbb{E}[X] = \sum_{T} \mathbb{E}[X_T] = \binom{n}{3} \cdot \frac{1}{4}.
$$

**Odgovor.** Očekivani broj kružnih trojki je $\dfrac{1}{4}\dbinom{n}{3}$.

**Provjera i komentar.** Za $n = 3$ dobivamo $\frac{1}{4}$: jedna trojka,
kružna u 2 od 8 ishoda. Već za $n = 10$ očekivanje iznosi
$\frac{120}{4} = 30$ — na sasvim ravnopravnom turniru kružne trojke nisu
iznimka nego pravilo, pa poredak „tko je bolji od koga” u prosjeku uopće
nije tranzitivan. Budući da slučajni turnir postiže očekivanje
$\frac{1}{4}\binom{n}{3}$, postoji i konkretan turnir s barem toliko kružnih
trojki — zaključak do kojeg bi se izravnim konstruiranjem bilo znatno teže
probiti.
