A beginner functional equation solved by the involution-substitution trick:
in f(x) + 2 f(1-x) = 3x^2 the map x -> 1-x is an involution, so substituting
it yields a second equation in the same two unknown values f(x) and f(1-x),
and for each fixed x the pair is solved as a 2x2 linear system, giving
f(x) = x^2 - 4x + 2.

Abstract principle instantiated: when the arguments appearing in a functional
equation are permuted by an involution, one substitution closes the system —
the functional equation reduces pointwise to linear algebra. The solution
also models the verify-the-candidate step: eliminating from the system proves
uniqueness, and only substitution back into the original equation proves
existence. Techniques: substitution by an involution, solving a linear
system, verification. Common failure modes: substituting a second time hoping
for a third independent equation, or skipping the final check. Difficulty 2 —
the standard second exercise in functional equations, one step past pure
value-chasing; suitable for "easiest functional equations" queries.
