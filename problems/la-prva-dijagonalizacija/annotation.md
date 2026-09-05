Entry rung of the diagonalization ladder: a 2x2 matrix with two distinct real
eigenvalues, done end to end. The solver computes the characteristic
polynomial, factors it, solves each singular system for an eigenvector,
assembles P and D, and verifies AP = PD. Nothing is disguised — this is the
first exercise after the definitions, calibrating the mechanics before the
criteria (algebraic vs geometric multiplicity) and the spectral theorem
appear higher on the ladder.

Techniques: characteristic polynomial of a 2x2 matrix, solving (A - lambda I)v
= 0, building P column-by-column with D's diagonal in matching order,
verifying via AP = PD instead of inverting P.

Abstract principle instantiated: diagonalization is a change of basis to an
eigenbasis — the matrix becomes the list of its eigenvalues once coordinates
are chosen along invariant directions.

Common failure: mismatching the order of eigenvectors in P against the order
of eigenvalues in D, or skipping the AP = PD check that would catch exactly
that mistake.
