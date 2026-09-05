A geometric problem about points in a rectangle and a guaranteed short
mutual distance. The statement never mentions the pigeonhole principle,
but the intended solution is a pure pigeonhole partition argument: split
the $4 \times 3$ rectangle into twelve unit squares, place thirteen points,
two share a square, and the diameter of a unit square is $\sqrt{2}$.

Techniques: pigeonhole principle (hidden — named only here, not in the
statement), partitioning a region into cells, bounding the diameter of a
cell with the Pythagorean theorem. A first exercise in choosing the *right*
partition: the cell count must be one less than the point count, and the
cell diameter must match the target distance.

Abstract principle instantiated: to force two objects close together,
partition the space into fewer cells than objects, each cell of small
diameter — the guaranteed collision converts a counting fact into a metric
fact. This is the template for all points-in-regions pigeonhole problems.
Common failures: partitioning into too many cells (e.g. sixteen
$1 \times 0.75$ cells have diameter $1.25 < \sqrt{2}$, but sixteen cells
cannot force a collision among only thirteen points); trying a continuity
or averaging argument where a finite partition suffices; forgetting to
handle points on cell boundaries.
