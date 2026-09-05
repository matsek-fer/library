# Proof (via a free group action)

Instead of manipulating cosets by hand, we let the subgroup act and
invoke two general facts about group actions.

## The action

Let $H$ act on the set $G$ (the underlying set of the group) by

$$h \cdot g = gh^{-1}.$$

This is an action of $H$: the identity acts trivially,
$e \cdot g = ge^{-1} = g$, and for $h_1, h_2 \in H$,

$$h_1 \cdot (h_2 \cdot g) = (gh_2^{-1})h_1^{-1} = g(h_1h_2)^{-1}
  = (h_1h_2) \cdot g.$$

(The inverse in the definition is exactly what makes right
multiplication into a *left* action.)

## Fact 1: orbits partition the set

For any action, the relation "lies in the orbit of" is an equivalence
relation — $g' \in \mathrm{Orb}(g)$ iff $g' = h \cdot g$ for some
$h \in H$, and reflexivity, symmetry, transitivity follow from the
identity, inverses and composition of the acting group. Hence the orbits
partition $G$.

Here the orbit of $g$ is $\{gh^{-1} : h \in H\} = gH$ (as $h$ runs over
$H$, so does $h^{-1}$): the orbits are precisely the left cosets of $H$.
We will not need this identification for the count, but it shows the
partition from the classical proof arising with no verification —
it is an instance of the general orbit partition.

## Fact 2: the action is free, so every orbit has |H| elements

The action is **free**: no non-identity element fixes any point. Indeed
if $h \cdot g = g$, then $gh^{-1} = g$, and cancelling $g$ gives
$h = e$. Consequently, for each fixed $g$ the map

$$H \to \mathrm{Orb}(g), \qquad h \mapsto h \cdot g$$

is a bijection: it is surjective by the definition of an orbit, and
injective because $h_1 \cdot g = h_2 \cdot g$ implies that
$h_2^{-1}h_1$ fixes $g$, hence $h_2^{-1}h_1 = e$ by freeness, i.e.
$h_1 = h_2$. So every orbit has exactly $|H|$ elements.

(For those who know the orbit–stabilizer theorem: freeness says every
stabilizer is trivial, and orbit–stabilizer then gives
$|\mathrm{Orb}(g)| = |H| / |\mathrm{Stab}(g)| = |H|$.)

## Conclusion

The set $G$ is partitioned into orbits, each of size $|H|$. If $m$ is
the number of orbits, counting gives

$$|G| = m \cdot |H|,$$

so $|H|$ divides $|G|$. Since the orbits are the left cosets, $m$ is the
index $[G : H]$, recovering $|G| = [G:H] \cdot |H|$. $\blacksquare$
