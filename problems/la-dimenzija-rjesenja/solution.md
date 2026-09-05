# Rješenje

## (a) Gaussove eliminacije i dimenzija

Matrica sustava je

$$
A = \begin{pmatrix} 1 & 2 & -1 & 1\\ 2 & 4 & \alpha & 3\\ -1 & -2 & 3 & 0 \end{pmatrix}.
$$

Eliminiramo prvi stupac: $R_2 \leftarrow R_2 - 2R_1$ i $R_3 \leftarrow R_3 + R_1$ daju

$$
\begin{pmatrix} 1 & 2 & -1 & 1\\ 0 & 0 & \alpha+2 & 1\\ 0 & 0 & 2 & 1 \end{pmatrix},
$$

a zatim $R_2 \leftarrow R_2 - R_3$:

$$
\begin{pmatrix} 1 & 2 & -1 & 1\\ 0 & 0 & \alpha & 0\\ 0 & 0 & 2 & 1 \end{pmatrix}.
$$

Prostor rješenja je jezgra preslikavanja $x \mapsto Ax$, pa po teoremu o rangu i defektu vrijedi

$$
\dim(\text{prostora rješenja}) = 4 - \operatorname{rang}(A).
$$

**Slučaj $\alpha \neq 0$.** Redci $(1,2,-1,1)$, $(0,0,\alpha,0)$ i $(0,0,2,1)$ su linearno nezavisni, pa je $\operatorname{rang}(A) = 3$ i dimenzija prostora rješenja je $4 - 3 = 1$. Iz drugog retka je $x_3 = 0$, iz trećeg tada $x_4 = -2x_3 = 0$, a iz prvog $x_1 = -2x_2$. Baza:

$$
\{(-2, 1, 0, 0)\}.
$$

**Slučaj $\alpha = 0$.** Drugi redak nestaje, ostaju dva nezavisna retka, pa je $\operatorname{rang}(A) = 2$ i dimenzija je $4 - 2 = 2$. Sustav se svodi na $x_1 + 2x_2 - x_3 + x_4 = 0$ i $2x_3 + x_4 = 0$. Slobodne su $x_2$ i $x_3$: iz drugog je $x_4 = -2x_3$, a iz prvog $x_1 = -2x_2 + x_3 - x_4 = -2x_2 + 3x_3$. Baza:

$$
\{(-2, 1, 0, 0),\ (3, 0, 1, -2)\}.
$$

Provjera: obje četvorke poništavaju sve tri jednadžbe uz $\alpha = 0$.

## (b) Bez računanja

Ne postoji. Matrica ima samo tri retka, pa je $\operatorname{rang}(A) \le 3 < 4$; po teoremu o rangu i defektu jezgra ima dimenziju barem $4 - 3 = 1$, dakle netrivijalno rješenje postoji za svaki $\alpha$.
