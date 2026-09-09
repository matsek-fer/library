---
id: "prf-qd-zbrojevi-oko-stola"
taxon: "proof"
title: "Rješenje: Zbrojevi oko okruglog stola"
teaches: [pigeonhole]
requires: [modular-arithmetic]
language: "hr"
digested_from: "problem/qd-zbrojevi-oko-stola"
standalone: true
depends: [exr-qd-zbrojevi-oko-stola]
proves: "exr-qd-zbrojevi-oko-stola"
---

# Rješenje

Odaberimo bilo kojeg člana i od njega krenimo obilaziti stol u smjeru
kazaljke na satu: dobivamo poredak članova $1, 2, \dots, 14$ i njihove
brojeve $a_1, a_2, \dots, a_{14}$. Primijetimo odmah: svaki blok
$a_{i+1}, a_{i+2}, \dots, a_j$ uzastopnih indeksa odgovara skupini članova
koji sjede uzastopno (okruglost stola ovdje je samo scenografija — svaki
"ravni" blok ujedno je i uzastopan oko stola).

Promotrimo početne zbrojeve
$$S_0 = 0, \quad S_1 = a_1, \quad S_2 = a_1 + a_2, \quad \dots, \quad
S_{14} = a_1 + \dots + a_{14}.$$

To je $15$ brojeva, a pri dijeljenju s $14$ svaki od njih daje jedan od
samo $14$ mogućih ostataka $0, 1, \dots, 13$. Brojeva je više nego
mogućih ostataka, pa neka dva od njih daju isti ostatak: postoje indeksi
$i < j$ takvi da
$$S_i \equiv S_j \pmod{14}.$$

No tada je razlika
$$S_j - S_i = a_{i+1} + a_{i+2} + \dots + a_j$$
djeljiva s $14$, a upravo je to zbroj brojeva članova $i+1, i+2, \dots, j$
— neprazne skupine (jer $i < j$) koja sjedi uzastopno. Time je tvrdnja
dokazana. $\blacksquare$

**Napomena.** Broj $14$ nije poseban: isti dokaz, riječ po riječ, pokazuje
da među $n$ ljudi oko stola uvijek postoji uzastopni blok čiji je zbroj
djeljiv s $n$. Ključna je količina informacija: $n + 1$ početnih zbrojeva,
a samo $n$ mogućih ostataka.
