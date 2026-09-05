Statement looks analytic — solve the functional equation p + p' = q in
polynomials — and invites solving for coefficients or guessing a series; the
truth is the rank-nullity theorem in disguise. The map T(p) = p + p' is a
linear endomorphism of the (n+1)-dimensional space P_n; a leading-coefficient
argument shows the kernel is trivial, and rank-nullity then upgrades
injectivity to surjectivity for free, giving existence and uniqueness at
once. A closing remark exhibits the explicit inverse (alternating sum of
derivatives, a terminating Neumann series) to contrast computation with the
structural argument.

Techniques: modeling an equation as a linear operator, kernel computation via
degree/leading-coefficient comparison, injective-iff-surjective for
endomorphisms of finite-dimensional spaces, rank-nullity.

Abstract principle instantiated: on a finite-dimensional space, injectivity,
surjectivity and bijectivity of a linear endomorphism coincide — proving the
cheapest one buys the others. This is the linear-algebra ancestor of many
"existence via injectivity" arguments and fails in infinite dimension, which
is why the hypothesis deg <= n carries all the weight.

Common failure: attacking coefficients directly with an (n+1)x(n+1)
triangular system, which works but obscures why the result holds; or citing
injectivity-implies-surjectivity without noting it needs finite dimension.
