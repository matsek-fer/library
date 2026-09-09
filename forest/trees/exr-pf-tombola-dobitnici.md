---
id: "exr-pf-tombola-dobitnici"
taxon: "exercise"
title: "Koliko različitih dobitnika ima tombola?"
teaches: [linearity-of-expectation]
requires: [probability-basics, random-variables, expectation]
language: "hr"
digested_from: "problem/pf-tombola-dobitnici"
standalone: true
depends: []
x_annotation: "This problem tests whether the solver decomposes an expected count of\ndistinct elements into per-element indicators. The statement — k prizes drawn\nwith replacement among n raffle tickets, expected number of members who win\nat least one prize — never names the technique.\n\nTechnique: one indicator per member, complement trick for the single-member\nprobability (the chance of being missed k times is (1-1/n)^k), then linearity\nof expectation over dependent indicators to get n(1-(1-1/n)^k). The\noccupancy-style structure means the indicators are negatively dependent, and\nthe solution explicitly notes that this does not matter for the expectation.\n\nAbstract principle instantiated: an expected number of distinct \"hit\" cells in\na random allocation is a sum of per-cell hit probabilities; combine linearity\nwith the complement rule when \"at least once\" is easier through its negation.\nCommon failure modes: conditioning on the sequence of draws or attempting the\ndistribution of the number of winners; forgetting the with-replacement\nindependence when computing the miss probability. Middle rung of the\nlinearity-of-expectation ladder (difficulty 3): the indicator probability\nitself takes a short computation, and the limit check 1-1/e rewards a sanity\npass."
---

# Koliko različitih dobitnika ima tombola?

Sekcija na godišnjoj tomboli dijeli $k$ nagrada među $n$ članova. Svaki član
ima točno jedan listić u bubnju. Nagrade se izvlače jedna po jedna: za svaku
nagradu voditelj nasumično izvuče listić, pročita ime, i **vrati listić u
bubanj** prije sljedećeg izvlačenja. Isti član tako može osvojiti i više
nagrada.

Odredite očekivani broj članova koji osvoje barem jednu nagradu.
