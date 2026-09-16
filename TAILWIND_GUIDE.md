# Jak pisać dalej: Tailwind + CSS

W tej wersji przyjmujemy prostą zasadę:

## Tailwind = konkretny komponent

W JSX trzymaj:
- `grid`, `flex`,
- `gap`, padding, margin,
- szerokości i `max-w`,
- responsywne breakpointy,
- rozmiary tekstu konkretnego komponentu,
- hover,
- pozycjonowanie.

Przykład:

```tsx
<div className="
  w-full max-w-[1400px] mx-auto
  px-5 md:px-8 xl:px-16
  grid grid-cols-1 lg:grid-cols-2
  gap-10 lg:gap-16
">
```

## `index.css` = globalne zasady

Tam trzymaj:
- import Tailwinda/fontów,
- kolory/fonty w `@theme`,
- `body`, `html`, `#root`,
- globalny smooth scroll,
- globalny scroll-snap.

Nie twórz tam `.hero-copy`, `.hero-layout`, `.navbar a` itd., jeżeli dotyczy to tylko jednego komponentu.

## Responsywność Tailwinda jest mobile-first

```tsx
className="grid-cols-1 lg:grid-cols-2"
```

czytaj:
- domyślnie (telefon): 1 kolumna,
- od `lg`: 2 kolumny.

```tsx
className="px-5 md:px-8 xl:px-16"
```

czytaj:
- telefon: 20px,
- tablet: więcej,
- duży ekran: jeszcze więcej.

## Nie używaj `vw` do szerokości głównych kolumn

Zamiast:

```tsx
className="w-[50vw]"
```

rób:

```tsx
className="w-full max-w-[680px]"
```

i układaj kolumny przez Grid.

## Duże nagłówki

`clamp()` jest OK również w Tailwindzie:

```tsx
className="text-[clamp(4rem,6.4vw,7.5rem)]"
```

Font może płynnie reagować na viewport, ale ma minimum i maksimum.

## Wzorzec kolejnych pełnoekranowych sekcji

```tsx
<section
  id="projects"
  className="
    min-h-svh w-full
    scroll-mt-[70px]
    flex items-center
    py-24
    lg:snap-start
  "
>
  <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 xl:px-16">
    ...
  </div>
</section>
```

Nie wymuszaj `h-screen`. `min-h-svh` pozwoli sekcji urosnąć, jeśli na telefonie treść się nie mieści.
