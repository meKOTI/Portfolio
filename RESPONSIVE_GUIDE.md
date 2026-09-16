# Responsywność — zasady dla tego portfolio

## Najważniejszy wzorzec

Pełny ekran jest **sceną**, ale content ma limit szerokości:

```tsx
<section className="min-h-svh flex items-center">
  <div className="w-full max-w-[1400px] mx-auto px-5 lg:px-12">
    ...
  </div>
</section>
```

To jest główna różnica między stabilnym layoutem a elementami uciekającymi przy zoomie.

## 1. Nie buduj głównych kolumn przez `vw`

Unikaj:

```tsx
<div className="w-[50vw]">
```

i ostrożnie z:

```tsx
<div className="w-[50%]">
```

Jeżeli rodzic nie ma `max-width`, 50% ogromnego viewportu nadal jest ogromne.

Dla dwóch kolumn użyj Grid:

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
```

## 2. Tailwind jest mobile-first

```tsx
className="grid grid-cols-1 md:grid-cols-2"
```

Czyli:
- telefon: 1 kolumna,
- `md` i wyżej: 2 kolumny.

Najpierw zrób wersję mobilną, potem dodawaj `md:`, `lg:`, `xl:`.

## 3. `max-width` jest Twoim przyjacielem

```tsx
className="w-full max-w-[1400px] mx-auto px-5 lg:px-12"
```

- `w-full` — może wykorzystać dostępną szerokość,
- `max-w` — ale nie rośnie bez końca,
- `mx-auto` — centruje,
- `px-*` — daje bezpieczny margines na małych ekranach.

## 4. Duże fonty: `clamp()`

Zamiast:

```tsx
className="text-[136px]"
```

użyj:

```tsx
className="text-[clamp(4rem,6vw,7.5rem)]"
```

`clamp(minimum, płynna wartość, maksimum)`.

Font reaguje na ekran, ale nigdy nie robi się absurdalnie mały ani wielki.

## 5. Nie pozycjonuj layoutu paddingiem

Takie rzeczy:

```tsx
pl-[11px] pt-[30px] pb-[23px]
```

są OK dla drobnego dopracowania, ale nie powinny tworzyć głównego layoutu.

Do layoutu:
- `gap-*`
- `grid`
- `flex`
- `justify-*`
- `items-*`
- `max-w-*`
- `mx-auto`
- `px-*`

## 6. Grafiki

```tsx
<div className="w-full max-w-[650px]">
  <img
    src="/art.webp"
    className="w-full h-auto object-contain"
    alt=""
  />
</div>
```

Nie dawaj artowi `w-[50vw]`.

Dla Procreate najlepiej eksportować przezroczysty art bez tekstu/UI wpisanego w obraz.

## 7. Sekcje prezentacji

Preferuj:

```tsx
min-h-svh
```

zamiast:

```tsx
h-screen
```

`min-height` pozwala sekcji urosnąć, gdy na telefonie content potrzebuje więcej miejsca.

## 8. CSS vs Tailwind

Dobra zasada w tym projekcie:

**Tailwind** — layout konkretnego komponentu:

```tsx
<div className="grid lg:grid-cols-2 gap-12 items-center">
```

**CSS** — system/globalne reguły:

```css
:root {
  --content-width: 1400px;
  --navbar-height: 70px;
}
```

Mieszanie obu jest w porządku.

## 9. Co testować

W DevTools sprawdzaj:
- 360 px,
- 390 px,
- 768 px,
- 1024 px,
- 1440 px,
- 1920 px.

Dodatkowo zoom:
- 67%,
- 100%,
- 125%.

Jeżeli coś ucieka na dużym ekranie, szukaj najpierw:
1. `vw`,
2. procentowych szerokości bez ograniczonego rodzica,
3. `position: absolute`,
4. ogromnych stałych paddingów/marginów,
5. braku `max-width`.

## 10. Wzorzec, którego możesz używać w kolejnych sekcjach

```tsx
<section id="projects" className="presentation-section">
  <div className="section-container">
    {/* zawartość */}
  </div>
</section>
```

`presentation-section` odpowiada za pełny ekran, a `section-container` za stabilną szerokość treści.
