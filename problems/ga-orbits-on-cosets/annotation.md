Orbit–stabilizer applied to the coset action, with the acting group cut
down to a subgroup: $H$ acts on $G/K$ by left multiplication, orbits are
the double cosets $HgK$, and their sizes come out as indices
$[H : H \cap gKg^{-1}]$. Tests whether the solver can compute a
stabilizer under a restricted action (intersect the full stabilizer with
the acting subgroup), convert orbit sizes to indices via
orbit–stabilizer, and then convert a count of cosets into a count of
elements by multiplying by $|K|$. The payoff is the product formula
$|HK| = |H||K|/|H \cap K|$ — derived here as a statement about orbits,
not by the usual fiber-counting argument — and the factorization
criterion: coprime orders multiplying to $|G|$ force $G = HK$ with unique
expression. Techniques: restriction of actions, orbit–stabilizer,
Lagrange inside a subgroup, gcd forcing trivial intersection,
injectivity of $(h,k) \mapsto hk$ from $H \cap K = \{e\}$. Instantiates
the principle that counting a subset of a group is often best done by
finding an action whose orbits tile it. Common failure: computing the
orbit size as an index in $G$ instead of in the acting subgroup $H$, or
treating $HK$ as a subgroup (it need not be one). Fourth rung of the
coset-action ladder, after the construction of the action itself.
