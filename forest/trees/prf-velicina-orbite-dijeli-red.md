---
id: "prf-velicina-orbite-dijeli-red"
taxon: "proof"
title: "Dokaz: veličina orbite dijeli red grupe"
teaches: []
requires: [index]
language: "hr"
digested_from: "blog/djelovanja-koja-broje"
standalone: true
depends: [cor-velicina-orbite-dijeli-red, thm-orbita-stabilizator]
proves: "cor-velicina-orbite-dijeli-red"
---

# Dokaz: veličina orbite dijeli red grupe

Neka konačna grupa $G$ djeluje na skupu $X$ i neka je $x \in X$.
Dokazuje se [[cor-velicina-orbite-dijeli-red]].

Teorem orbita–stabilizator ([[thm-orbita-stabilizator]]) daje
$$|\mathrm{Orb}(x)| \cdot |\mathrm{Stab}(x)| = |G|,$$
gdje je $\mathrm{Stab}(x) = \{g \in G : g \cdot x = x\}$. Oba su faktora
prirodni brojevi, pa je $|\mathrm{Orb}(x)|$ djelitelj broja $|G|$, s
kvocijentom $|\mathrm{Stab}(x)|$. $\blacksquare$

Dvije granične vrijednosti vrijedi pročitati iz iste jednakosti:
$|\mathrm{Orb}(x)| = 1$ znači $\mathrm{Stab}(x) = G$ (točka je fiksna za
cijelu grupu), a $|\mathrm{Orb}(x)| = |G|$ znači
$\mathrm{Stab}(x) = \{e\}$ (jedino identiteta ostavlja $x$ na miru).
