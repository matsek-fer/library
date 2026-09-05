Looks like a routine Gaussian-elimination exercise with a parameter, but the
question asked is about *dimension*, not about the solutions themselves — the
problem is the rank-nullity theorem in disguise. The solution space of a
homogeneous system is the kernel of the coefficient matrix, so its dimension
is (number of unknowns) minus rank, and the whole case analysis reduces to
tracking how the parameter changes the rank. Part (b) is the payoff: with
more unknowns than equations the rank is capped by the row count, so the
nullity is forced positive for every parameter value — no elimination needed.

Techniques: row reduction to echelon form, rank as a function of a parameter,
nullity = n − rank, extracting a kernel basis from free variables.

Abstract principle instantiated: dimension counting decides existence — a
linear map from a bigger space to a smaller one can never be injective, so
underdetermined homogeneous systems always have nontrivial solutions.

Common failure: solving the system completely for each parameter value and
reading the dimension off the result, instead of arguing from rank; or
answering (b) by attempting elimination, which the problem explicitly forbids.
