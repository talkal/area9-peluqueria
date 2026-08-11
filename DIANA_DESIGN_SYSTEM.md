# Área 9 — Design System

**Version:** 2.0.0
**Last updated:** 2026-08-07
**Status:** Current — supersedes v1.0.0 entirely
**Source of truth:** `css/styles.css`. This document describes it; where they disagree, the CSS wins.

> v2 replaces the v1 system wholesale. Palette, both typefaces, and the whole component
> approach changed. Nothing from v1 survives except the brand values. If you are an
> automated tool reading this file to build a design system, use only what is below.

---

## 1. Brand

**Área 9** is a creative hair salon in Malasaña, Madrid, run by Diana. Hairdressing treated as craft, in a calm, artistic, slightly bohemian space that also hosts workshops and cultural events.

- **What it is:** free-spirited, intuitive, highly skilled, personal.
- **What it is not:** a sterile, fast, commercial chain salon.
- **Motto:** "Sabemos lo que te sienta bien." / "We know what suits you."
- **Voice:** warm, unhurried, artistic. Like a friend with excellent taste.
- **Languages:** Spanish and English, equal weight. Spanish is the default — the clientele is local.

The visual direction comes from Marisol (designer), delivered as `assets/ejemplos web diana.pdf`. That PDF is the reference for any new work.

---

## 2. Colour

Sampled directly from the designer's PDF at 150 dpi. Do not substitute by eye.

| Token | Hex | Role |
|---|---|---|
| `--bronze` | `#4D3B16` | Headlines, buttons, footer ground. The primary. |
| `--bronze-deep` | `#3A2C10` | Button hover only. |
| `--mint` | `#BEDDCB` | Brand green. Accents, footer text on bronze. |
| `--mint-hero` | `#A9D4C8` | Hero panel only — matched to the wall in `hero.jpg` so the flat panel and the photograph read as one continuous surface. |
| `--mint-soft` | `#D6E9DC` | Reserved, currently unused. |
| `--gold` | `#C9A961` | Decorative line art only (sacred geometry, footer rule). Never text. |
| `--gold-text` | `#8A6A2B` | The gold when it carries text. Darkened to pass AA. |
| `--cream` | `#F5F2EA` | Schedule/contact section ground. One section only. |
| `--white` | `#FFFFFF` | Body and most section grounds. |
| `--ink` | `#2A2418` | Body text. |
| `--ink-soft` | `#6B5B3B` | Secondary text, hours, captions. |

**Measured contrast (all pass WCAG AA):**

| Pair | Ratio |
|---|---|
| bronze on mint | 7.37 |
| gold-text on white | 5.03 |
| ink-soft on white | 6.59 |
| mint on bronze | 7.37 |

The body ground is white. Cream appears on exactly one section. Do not spread it — a warm near-white as the dominant background is not this brand.

---

## 3. Typography

Two families. Do not add a third.

### Balmoral A9 — display

Connected script, used for headlines only, always lowercase. Shipped as a **corrected** webfont at `assets/fonts/balmoral-a9.woff2`.

**Critical mechanics — read before touching any display type:**

Balmoral joins letters by **negative sidebearings**: each glyph overhangs its advance box and overlaps the next. It does not use kerning. Consequences:

1. **`letter-spacing` must stay at 0 or negative.** Any positive tracking breaks all 26 joins at once and the script falls apart.
2. **`b` and `s` originally broke the joins** — they were the only two lowercase glyphs with positive right sidebearings (+27 and +22 units on a 2048 em). The shipped font corrects this by pulling their advances back 54 and 49 units. Verified by pixel-column ink analysis across six test words.
3. **The space glyph is 0.157em, too wide for a connected script.** `.display` sets `word-spacing: -.075em` to compensate. Keep it.
4. Ascenders and descenders are very long (1262 / −453 on 2048 em), so display `line-height` belongs **below 1** — currently .84 on the hero, .88 on section titles.

**Width variants** (Diana asked for 130% horizontal scale; the widening thickens the strokes noticeably, so all three ship for comparison):

- `balmoral-a9.woff2` — 100%
- `balmoral-a9-115.woff2` — 115%
- `balmoral-a9-wide.woff2` — 130%

**Enlarged initial** (`.ti`): the first letter of a section title is the *lowercase* glyph at 1.33em. Not an ornamental capital.

**Ornamental capital** (`.tc`): Balmoral's natural uppercase, used sparingly. Currently only the C in "tu Cabello" in the hero. The font has no `GSUB` table, so there are no swash alternates — that C is simply the normal capital.

### Alegreya — body

Served locally from `assets/fonts/` at 400/500/700, roman and italic. Not Google Fonts — same files the designer used.

**Italic is the default for prose.** This is deliberate and comes from the reference, where all body copy is set in italic. Roman is reserved for functional data — opening hours, days, address, navigation, buttons — because italic serif numerals are materially harder to scan.

Small caps (`.eyebrow`, `.value-meta`, `.review-author`) carry generous tracking, .17–.28em. This is where Diana's "more space between letters" request lives. It cannot go on Balmoral.

### Scale

| Element | Size | Line height |
|---|---|---|
| Hero title | `clamp(3.4rem, 8vw, 10.5rem)` | .84 |
| Section title | `clamp(2.9rem, 7vw, 5.6rem)` | .88 |
| Info title | `clamp(2.2rem, 4vw, 3.2rem)` | 1.0 |
| Body | `clamp(1rem, .55vw + .88rem, 1.1875rem)` | 1.62 |

Display sizes are deliberately large — Diana asked for double, and the reference hero is proportionally huge. This exceeds typical guidance on purpose.

---

## 4. Layout and components

The reference is **flat and editorial**. Specifically:

- **No cards.** No borders, no drop shadows, no elevated surfaces, no rounded containers. The philosophy section is five bare text columns on white. This is the single biggest departure from v1 and it is not negotiable.
- **Buttons** are chamfered plaques — `clip-path` cutting all four corners at 11px. Bronze fill, cream text, Alegreya Bold Italic. Not rounded rectangles.
- **Sacred geometry** line art in `--gold` heads each philosophy column and forms the footer rule. Inline SVG, `stroke-width: .8`, sources in `assets/symbols/`.
- **Hero** is a two-column grid: flat `--mint-hero` panel left, full-bleed photograph right, no header above it. A 9% gradient softens the seam.
- **Instagram** is an inline text link in the prose plus a small footer icon. Never a prominent block — it is the only link that sends visitors away.
- **Spacing** runs on an 8px base, `--sp-1` through `--sp-6`.

---

## 5. Known open items

- Body column is `--measure: 34em`, which measures ~94 characters in Alegreya Italic. Comfortable reading is 65–75. Reducing to ~26em is an open change.
- Small-caps eyebrows currently appear on three sections. The reference uses one, on the philosophy section only.
- Colours are hex, not OKLCH.
- The site has almost no motion beyond hover transitions.
- Gallery and about photography are Diana's real images. The hero is generated and should be replaced when she supplies real work.

---

*Supersedes DIANA_DESIGN_SYSTEM.md v1.0.0 (2026-02-25).*
