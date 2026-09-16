# Portfolio – nowa koncepcja

## Co zostało zmienione

- zachowany został istniejący navbar i jego główny charakter,
- główne sekcje mają układ zbliżony do slajdów (`min-height: 100svh`),
- dodany został delikatny `scroll-snap` na desktopie,
- `Projects` jest krótkim przeglądem zamiast pełnego case study,
- każdy projekt prowadzi do osobnej podstrony `/projects/<slug>`,
- zachowano obsługę języka polskiego i angielskiego,
- język jest zapamiętywany w `localStorage`,
- dodane zostały neutralne miejsca na własne grafiki i materiały,
- layout jest responsywny; na telefonach scroll-snap jest wyłączony.

## Gdzie edytować projekty

`src/data/projects.ts`

Tutaj zmienisz nazwy, opisy, technologie i slugi projektów.

## Gdzie edytować teksty PL / EN

- `src/i18n/locales/pl/common.json`
- `src/i18n/locales/en/common.json`

## Grafiki

Aktualne geometryczne elementy są placeholderami z CSS. Docelowe grafiki możesz umieścić np. w:

`public/images/`

Następnie podmienić placeholdery w `Home.tsx`, `ProjectCard.tsx` i `ProjectPage.tsx`.

## Kontakt

W `src/sections/contact/Contact.tsx` podmień:

- `your@email.com`
- link do GitHuba
- link do LinkedIna

## Uruchomienie

```bash
npm install
npm run dev
```

## Ważne przy hostingu

Podstrony projektów używają adresów w stylu `/projects/popilo`. Przy hostingu statycznego SPA trzeba ustawić fallback wszystkich tras do `index.html` (np. rewrite w Vercel/Netlify/Cloudflare Pages).
