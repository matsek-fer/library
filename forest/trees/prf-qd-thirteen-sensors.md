---
id: "prf-qd-thirteen-sensors"
taxon: "proof"
title: "Rješenje: Thirteen sensors in a workshop"
teaches: [pigeonhole]
requires: [sets]
language: "en"
digested_from: "problem/qd-thirteen-sensors"
standalone: true
depends: [exr-qd-thirteen-sensors]
proves: "exr-qd-thirteen-sensors"
---

# Solution

Cut the $4 \times 3$ rectangle by lines parallel to its sides into unit
squares: four columns and three rows give $4 \cdot 3 = 12$ squares, each of
size $1 \times 1$. (Points on a cutting line may be assigned to either
adjacent square — pick one, it will not matter.)

There are $13$ sensors and only $12$ squares, so some square contains at
least two sensors, say $P$ and $Q$.

It remains to bound the distance between two points of a unit square. If
$P = (x_1, y_1)$ and $Q = (x_2, y_2)$ lie in the same unit square, then
$|x_1 - x_2| \leq 1$ and $|y_1 - y_2| \leq 1$, so
$$|PQ| = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}
      \leq \sqrt{1^2 + 1^2} = \sqrt{2}.$$

Thus $P$ and $Q$ are at distance at most $\sqrt{2}$ and therefore
interfere. $\blacksquare$

**Remark.** The constant $\sqrt{2}$ is exactly the diameter of a unit
square — two points at opposite corners of a cell realize it — so this
partition cannot prove any smaller interference distance. The cell count
is equally rigid: twelve unit squares against thirteen sensors is
precisely the excess of one that the pigeonhole argument needs.
