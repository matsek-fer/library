---
id: "exr-la-polinomna-jednadzba"
taxon: "exercise"
title: "Polinomna jednadžba s derivacijom"
teaches: [rank-nullity]
requires: [vector-spaces, linear-maps]
language: "hr"
digested_from: "problem/la-polinomna-jednadzba"
standalone: true
depends: []
x_annotation: "Statement looks analytic — solve the functional equation p + p' = q in\npolynomials — and invites solving for coefficients or guessing a series; the\ntruth is the rank-nullity theorem in disguise. The map T(p) = p + p' is a\nlinear endomorphism of the (n+1)-dimensional space P_n; a leading-coefficient\nargument shows the kernel is trivial, and rank-nullity then upgrades\ninjectivity to surjectivity for free, giving existence and uniqueness at\nonce. A closing remark exhibits the explicit inverse (alternating sum of\nderivatives, a terminating Neumann series) to contrast computation with the\nstructural argument.\n\nTechniques: modeling an equation as a linear operator, kernel computation via\ndegree/leading-coefficient comparison, injective-iff-surjective for\nendomorphisms of finite-dimensional spaces, rank-nullity.\n\nAbstract principle instantiated: on a finite-dimensional space, injectivity,\nsurjectivity and bijectivity of a linear endomorphism coincide — proving the\ncheapest one buys the others. This is the linear-algebra ancestor of many\n\"existence via injectivity\" arguments and fails in infinite dimension, which\nis why the hypothesis deg <= n carries all the weight.\n\nCommon failure: attacking coefficients directly with an (n+1)x(n+1)\ntriangular system, which works but obscures why the result holds; or citing\ninjectivity-implies-surjectivity without noting it needs finite dimension."
---

# Polinomna jednadžba s derivacijom

Neka je $n$ prirodan broj i neka je $P_n$ vektorski prostor svih realnih
polinoma stupnja najviše $n$.

Dokažite da za svaki polinom $q \in P_n$ postoji **točno jedan** polinom
$p \in P_n$ takav da

$$
p(x) + p'(x) = q(x) \quad \text{za sve } x \in \mathbb{R}.
$$
