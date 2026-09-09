---
id: "exr-an-prva-epsilon-delta-provjera"
taxon: "exercise"
title: "Prva epsilon-delta provjera"
teaches: [epsilon-delta-continuity]
requires: [limits-of-functions]
language: "hr"
digested_from: "problem/an-prva-epsilon-delta-provjera"
standalone: true
depends: []
x_annotation: "This is a first exercise on the epsilon-delta definition of continuity,\nplaced immediately after the definition is stated. Part (a) asks for a\ndirect verification that an affine function f(x) = 5x - 3 is continuous at\na single point: the solver must produce delta as an explicit function of\nepsilon (here delta = epsilon/5) and run the implication forward. The\ntechnique is the standard one for linear expressions — factor the constant\nout of |f(x) - f(x0)| so the dependence on |x - x0| becomes visible; no\nauxiliary bounding is needed, which is exactly why the item sits at\ndifficulty 1.\n\nPart (b) tests a subtler comprehension point: delta is not just \"any small\nnumber\" but the radius of a neighbourhood, and for a fixed epsilon there is\na sharp threshold. Asking for the largest delta and a proof that nothing\nbigger works forces the solver to negate the implication — exhibit a\nwitness x with |x - x0| < delta' but |f(x) - f(x0)| >= epsilon. This is the\nfirst place a student practises the quantifier structure of the negation,\nwhich is the abstract principle instantiated here: an epsilon-delta claim\nfails by a witness, not by vague largeness.\n\nCommon failure modes: writing delta = epsilon/5 without the verification\ndirection (asserting instead of proving the implication), and in (b)\nclaiming maximality \"because the computation is tight\" without producing\nthe witness point."
---

# Prva epsilon-delta provjera

Funkcija $f\colon \mathbb{R} \to \mathbb{R}$ zadana je s $f(x) = 5x - 3$.

**(a)** Dokažite izravno iz $\varepsilon$–$\delta$ definicije neprekidnosti da je
$f$ neprekidna u točki $x_0 = 2$.

**(b)** Za $\varepsilon = \tfrac{1}{2}$ odredite **najveći** $\delta > 0$ za koji
vrijedi implikacija
$$|x - 2| < \delta \implies |f(x) - f(2)| < \tfrac{1}{2},$$
i obrazložite zašto nijedan veći $\delta$ ne zadovoljava.
