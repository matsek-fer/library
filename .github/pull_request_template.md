## Što donosi ovaj PR

<!-- Kratko: koji bundle(ovi), koja tema, zašto knjižnici treba. -->

## Provjera prije predaje

- [ ] Bundle prolazi validator lokalno (`matsek-validate <mapa> --concepts concepts/concepts.yaml`, nula grešaka).
- [ ] Sva matematika se renderira (`npm run check-math`).
- [ ] `annotation.md` je napisan na engleskom i opisuje tehnike i princip, ne prepričava zadatak.

## Izjava o podrijetlu (obavezno — ovo je ugovor o doprinosu)

Predajom ovog PR-a potvrđujem, u skladu s
[pravilima o podrijetlu](https://github.com/matsek-fer/spec/blob/main/policies/provenance.md):

- [ ] Sadržaj sam **napisao/la sam(a)** (`provenance: original`), **ili** je uredno
      atribuirana prilagodba licencno kompatibilnog izvora
      (`provenance: adapted` + `adapted_from` u manifestu).
- [ ] Sve što je nastalo uz pomoć AI modela označeno je `provenance: ai-assisted`
      i osobno sam provjerio/la da je točno i da **nije** prepisani zadatak iz
      udžbenika, zbirke ili natjecanja.
- [ ] Svoj doprinos **neopozivo licenciram pod
      [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.hr)** —
      isti uvjeti pod kojima ga svi dobivaju.

<!-- PR bez potvrđene izjave o podrijetlu ne ide u merge. -->
