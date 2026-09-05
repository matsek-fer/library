# Solution

## (a) The property forces compactness

By Heine–Borel it suffices to show $K$ is bounded and closed. We prove the
contrapositive of each half: if either fails, we construct a continuous
function on $K$ that is unbounded. The construction is the heart of the
problem — the hypothesis is universally quantified over functions, so to
*use* it we must *build* functions.

**If $K$ is unbounded**, the identity
$$f(x) = x$$
is continuous on $K$ (restriction of a continuous function on
$\mathbb{R}$), and it is unbounded on $K$ by the very definition of $K$
being unbounded: for every $M$ there is $x \in K$ with $|f(x)| = |x| > M$.
This contradicts the hypothesis, so $K$ is bounded.

**If $K$ is not closed**, there is a point $c \in \overline{K} \setminus K$:
some sequence $(x_n)$ in $K$ converges to $c$, but $c \notin K$. Define
$$f(x) = \frac{1}{x - c}, \qquad x \in K.$$

*Continuity on $K$:* the denominator never vanishes on $K$ (that is
exactly $c \notin K$), and quotients of continuous functions are
continuous wherever the denominator is nonzero. Note carefully that $f$
only needs to be continuous **at points of $K$** — the blow-up happens at
$c$, which the domain does not contain, so it is invisible to the
definition of continuity on $K$.

*Unboundedness on $K$:* since $x_n \to c$ with $x_n \in K$ and
$x_n \neq c$, we have $|x_n - c| \to 0$ with $|x_n - c| > 0$, hence
$$|f(x_n)| = \frac{1}{|x_n - c|} \xrightarrow{n \to \infty} \infty.$$
So for every $M$ some $x_n \in K$ has $|f(x_n)| > M$.

Again the hypothesis is contradicted, so $K$ is closed.

Bounded and closed, $K$ is compact by Heine–Borel. $\blacksquare$

**Remark.** Together with the extreme value theorem this is an exact
characterization: a nonempty $K \subseteq \mathbb{R}$ is compact **if and
only if** every continuous real function on it is bounded. Compactness is
precisely the domain property that tames all continuous functions at once.

## (b) Polynomials are not enough witnesses

Take
$$D = (0, 1).$$

**Every polynomial is bounded on $D$:** a polynomial $p$ is continuous on
the compact segment $[0,1]$, so by the extreme value theorem there is $M$
with $|p(x)| \le M$ for all $x \in [0,1]$; in particular $|p| \le M$ on the
subset $(0,1)$. (Alternatively, directly:
$|p(x)| \le |a_0| + |a_1| + \dots + |a_d|$ for $0 < x < 1$, since each
$|x|^k \le 1$.)

**$D$ is not compact:** $D$ is not closed, because $0 \in \overline{D}$
(witnessed by $\tfrac{1}{n} \to 0$, $\tfrac{1}{n} \in D$) while
$0 \notin D$. By Heine–Borel, $D$ is not compact. Equivalently, the
continuous function $x \mapsto \tfrac{1}{x}$ from part (a)'s recipe is
unbounded on $D$ — but it is not a polynomial, which is the whole point.

Polynomials extend continuously across the missing boundary point, so they
cannot detect the hole; the function class in the hypothesis of (a) must
be rich enough to blow up at an absent limit point. $\blacksquare$
