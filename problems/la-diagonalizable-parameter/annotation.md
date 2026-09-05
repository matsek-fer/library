Middle rung of the diagonalization ladder: a 3x3 matrix with a parameter
where the answer hinges on comparing algebraic and geometric multiplicity.
The characteristic polynomial gives a repeated eigenvalue for every t, yet
the matrix is diagonalizable for all t except one — the rank of A - 2I is
constant, so the eigenspace is a plane throughout, and failure occurs only
when the algebraic multiplicity jumps to 3 at t = 2. Designed to break the
reflex "repeated eigenvalue means not diagonalizable".

Techniques: characteristic polynomial via triangular block structure,
rank computation to get geometric multiplicity, the criterion
"diagonalizable iff geometric = algebraic for every eigenvalue", assembling
an eigenbasis from a two-dimensional eigenspace plus a simple eigenvalue.

Abstract principle instantiated: diagonalizability is a statement about
eigenspace dimensions, not about the spectrum alone — the characteristic
polynomial cannot decide it, and the kernel dimensions of A - lambda*I carry
the missing information.

Common failure: declaring the matrix non-diagonalizable for every t upon
seeing the factor (2 - lambda)^2, or checking only the eigenvalue t and
forgetting that the collision at t = 2 changes the algebraic multiplicity
without changing the eigenspace.
