---
id: "thm-mali-fermatov-teorem"
taxon: "theorem"
title: "Mali Fermatov teorem"
teaches: []
requires: [modular-arithmetic]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: []
---

# Mali Fermatov teorem

U cijelom iskazu $p$ je prost broj, a zapis $u \equiv v \pmod{p}$ znači
da $p$ dijeli razliku $u - v$.

**Teorem (mali Fermatov teorem).** Neka je $p$ prost i $a \ge 1$ cijeli
broj. Tada je
$$p \mid a^{p} - a .$$
Ako usto $p \nmid a$, onda je
$$a^{\,p-1} \equiv 1 \pmod{p}.$$

Dvije su tvrdnje ekvivalentne uz uvjet $p \nmid a$, a prva vrijedi bez
ikakvog uvjeta na $a$ — uključujući i slučaj $p \mid a$, kada su oba
pribrojnika djeljiva s $p$.

Pretpostavka da je $p$ prost bitna je: za složeni $n$ analogon
$n \mid a^{n} - a$ općenito **ne vrijedi**. Najmanji protuprimjer je
$n = 4$, $a = 2$: $2^4 - 2 = 14$, a $4 \nmid 14$.

Dokaz brojanjem ogrlica, tj. orbita cikličkog pomaka na nizovima duljine
$p$: [[prf-mali-fermat-ogrlice]]. Isti argument razrađen kao niz zadataka
za samostalan rad: [[exr-ga-ogrlice-mali-fermat]].
