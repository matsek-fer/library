---
id: "exr-qd-thirteen-sensors"
taxon: "exercise"
title: "Thirteen sensors in a workshop"
teaches: [pigeonhole]
requires: [sets]
language: "en"
digested_from: "problem/qd-thirteen-sensors"
standalone: true
depends: []
x_annotation: "A geometric problem about points in a rectangle and a guaranteed short\nmutual distance. The statement never mentions the pigeonhole principle,\nbut the intended solution is a pure pigeonhole partition argument: split\nthe $4 \\times 3$ rectangle into twelve unit squares, place thirteen points,\ntwo share a square, and the diameter of a unit square is $\\sqrt{2}$.\n\nTechniques: pigeonhole principle (hidden — named only here, not in the\nstatement), partitioning a region into cells, bounding the diameter of a\ncell with the Pythagorean theorem. A first exercise in choosing the *right*\npartition: the cell count must be one less than the point count, and the\ncell diameter must match the target distance.\n\nAbstract principle instantiated: to force two objects close together,\npartition the space into fewer cells than objects, each cell of small\ndiameter — the guaranteed collision converts a counting fact into a metric\nfact. This is the template for all points-in-regions pigeonhole problems.\nCommon failures: partitioning into too many cells (e.g. sixteen\n$1 \\times 0.75$ cells have diameter $1.25 < \\sqrt{2}$, but sixteen cells\ncannot force a collision among only thirteen points); trying a continuity\nor averaging argument where a finite partition suffices; forgetting to\nhandle points on cell boundaries."
---

# Thirteen sensors in a workshop

The floor of a workshop is a rectangle measuring $4$ metres by $3$ metres.
Thirteen temperature sensors are installed on the floor, at arbitrary
positions.

Two sensors interfere with each other whenever the distance between them is
at most $\sqrt{2}$ metres.

Prove that, no matter how the thirteen sensors are placed, some two of them
interfere.
