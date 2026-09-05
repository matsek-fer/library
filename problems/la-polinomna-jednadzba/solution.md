# Rješenje

## Prevođenje u jezik linearnih preslikavanja

Definirajmo preslikavanje

$$
T : P_n \to P_n, \qquad T(p) = p + p'.
$$

Ono je dobro definirano: deriviranje snižava stupanj, pa je
$\deg(p + p') \le n$ čim je $\deg p \le n$. Linearno je jer su i identiteta
i deriviranje linearni:

$$
T(\lambda p + \mu r) = \lambda p + \mu r + \lambda p' + \mu r'
= \lambda T(p) + \mu T(r).
$$

Tvrdnja zadatka glasi: $T$ je bijekcija. Dokazat ćemo injektivnost, a
surjektivnost će tada doći besplatno.

## Injektivnost

Neka je $p \in \ker T$, dakle $p + p' = 0$, i pretpostavimo $p \neq 0$.
Neka je $k = \deg p \ge 0$ i neka je $a_k \neq 0$ vodeći koeficijent od
$p$. Polinom $p'$ ima stupanj najviše $k - 1$, pa je koeficijent uz $x^k$
u $p + p'$ jednak upravo $a_k \neq 0$. To proturječi $p + p' = 0$.
Dakle $p = 0$, tj.

$$
\ker T = \{0\}.
$$

## Surjektivnost dolazi iz dimenzije

Prostor $P_n$ ima dimenziju $n + 1$ (baza $1, x, \dots, x^n$). Po teoremu
o rangu i defektu,

$$
\dim \operatorname{im} T = \dim P_n - \dim \ker T = (n+1) - 0 = n + 1,
$$

pa je $\operatorname{im} T$ potprostor od $P_n$ pune dimenzije, dakle
$\operatorname{im} T = P_n$: preslikavanje $T$ je surjektivno.

## Zaključak

Za svaki $q \in P_n$ surjektivnost daje barem jedan $p$ s $T(p) = q$, a
injektivnost kaže da su svaka dva takva $p$ jednaka. Dakle rješenje postoji
i jedinstveno je. $\blacksquare$

## Napomena: eksplicitna formula

Rješenje se može i napisati:

$$
p = q - q' + q'' - \cdots + (-1)^n q^{(n)}.
$$

Zaista, $p' = q' - q'' + \cdots$, pa se u zbroju $p + p'$ svi članovi osim
prvog pokrate i ostaje točno $q$. No dimenzijski argument gore dokazuje
postojanje i jedinstvenost *bez* pogađanja ove formule — i to je poanta
zadatka.
