# Rješenje

**(a)** Grupa $G = \mathbb{Z}_{36}$ je komutativna, a u komutativnoj grupi
svaka je podgrupa normalna: za svaki $g \in G$ i $n \in N$ vrijedi
$g + n - g = n \in N$. Kvocijentna grupa $G/N$ zato postoji, a broj njezinih
elemenata je indeks podgrupe:
$$|G/N| = \frac{|G|}{|N|} = \frac{36}{4} = 9.$$

Prije dijelova (b) i (d) zabilježimo ključno opažanje. Elementi od $N$ su
upravo oni ostaci iz $\{0, 1, \dots, 35\}$ koji su djeljivi s $9$. Red
elementa $a + N$ u $G/N$ najmanji je prirodni broj $k$ za koji je
$$\underbrace{(a + N) + \dots + (a + N)}_{k} = ka + N = N,$$
dakle najmanji $k$ za koji $ka \bmod 36 \in N$. Kako je $36$ višekratnik
od $9$, broj $ka \bmod 36$ djeljiv je s $9$ točno onda kada je $ka$ djeljiv
s $9$. Red elementa $a + N$ zato je **najmanji $k$ takav da $9 \mid ka$.**

**(b)** Tražimo najmanji $k$ takav da $9 \mid 6k$. Skratimo zajednički
faktor $3$: uvjet $9 \mid 6k$ ekvivalentan je uvjetu $3 \mid 2k$, a kako su
$2$ i $3$ relativno prosti, to znači $3 \mid k$. Najmanji takav $k$ je $3$,
pa je red elementa $6 + N$ jednak $\mathbf{3}$.

Provjera izravnim računom u $G/N$: $6 + N \ne N$, $12 + N \ne N$, ali
$18 + N = N$ jer $18 \in N$.

**(c)** Tražimo najmanji $k$ takav da $9 \mid 10k$. Brojevi $9$ i $10$
relativno su prosti, pa $9 \mid 10k$ povlači $9 \mid k$. Najmanji takav
$k$ je $9$, pa je red elementa $10 + N$ jednak $\mathbf{9}$.

**(d)** Prema (a) grupa $G/N$ ima $9$ elemenata, a prema (c) element
$10 + N$ ima red $9$. Element čiji je red jednak redu grupe generira cijelu
grupu: koseti
$$10 + N,\; 20 + N,\; 30 + N,\; 4 + N,\; 14 + N,\; 24 + N,\; 34 + N,\; 8 + N,\; 18 + N = N$$
međusobno su različiti (da se dva podudaraju, red od $10 + N$ bio bi manji
od $9$) i ima ih točno $9$, dakle iscrpljuju $G/N$. Grupa $G/N$ je stoga
ciklička, a jedan generator je $10 + N$.

Još je jednostavniji generator $1 + N$: najmanji $k$ za koji $9 \mid k \cdot 1$
očito je $k = 9$, pa i $1 + N$ ima red $9$.
