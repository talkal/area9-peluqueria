# Design review brief — Área 9 Peluquería

## The task

Review the website at `Websites project/Diana_Hairdresser` and come back with prioritised, specific improvements. This is a working site mid-revision, not a greenfield. We want your judgement on what to change next, not a redesign.

Read `DIANA_DESIGN_SYSTEM.md` first. It is current as of 2026-08-07 and describes the real system.

---

## Context

**Client:** Diana, owner of Área 9, a creative hair salon in Malasaña, Madrid. Bilingual site, Spanish default, English secondary. The clientele is local and Spanish-speaking.

**Designer:** Marisol supplied the visual direction as a two-page InDesign PDF at `assets/ejemplos web diana.pdf`. Page 2 is the reference for the hero and the philosophy section. Page 1 shows a header and footer treatment we chose not to use. That PDF is the north star for anything visual.

**Where we are:** the site was rebuilt today from a generic layout into Marisol's direction. Typography, palette, structure and imagery all changed. What exists now is a faithful but unfinished implementation.

**Run it:** open `index.html` directly in a browser. No build step, no dependencies. Plain HTML, CSS and one small JS file for the language toggle.

---

## Locked — do not "fix" these

Each of these looks like a mistake and is not. If you think one is wrong, argue it explicitly rather than silently changing it.

**1. `letter-spacing` on Balmoral must stay at 0 or negative.**
Balmoral is a connected script that joins letters by negative sidebearings — each glyph physically overhangs its advance box and overlaps the next. It carries no kerning pairs for lowercase. Any positive tracking breaks all 26 joins simultaneously and the script visibly falls apart. The client asked for wider letter spacing; we applied it to Alegreya and the small caps instead, which is where it actually buys legibility.

**2. `assets/fonts/balmoral-a9.woff2` is a corrected custom build. Do not replace it with the original.**
The source font had positive right sidebearings on `b` (+27) and `s` (+22) against roughly −27 for every other lowercase letter, so joins broke after exactly those two glyphs. The shipped file pulls their advances back 54 and 49 units. Verified by pixel-column ink analysis. Two width variants also ship (115%, 130%) because the client asked for 130% horizontal scale and we want her to compare before committing.

**3. Body prose is set in Alegreya Italic.**
This is the designer's decision, visible throughout her PDF. Functional data — opening hours, days, address, navigation, buttons — is deliberately roman, because italic serif numerals are materially harder to scan. Do not normalise either direction without saying why.

**4. No cards, borders, shadows or elevated surfaces.**
The reference is flat and editorial. The philosophy section is five bare text columns on white. This was the single biggest departure from the previous version and it is intentional.

**5. Display type exceeds the usual 6rem ceiling.**
Hero is `clamp(3.4rem, 8vw, 10.5rem)`. The client explicitly asked for double-size titles and the reference hero measures roughly 150px equivalent, so this is faithful, not indulgent. Mobile clamps are retuned separately.

**6. Spanish is the default regardless of browser locale.**
Only an explicit user choice is remembered.

**7. `--mint-hero` (#A9D4C8) differs from `--mint` (#BEDDCB) on purpose.**
It is sampled from the wall in `hero.jpg` so the flat CSS panel and the photograph read as one continuous surface. Changing it reintroduces a visible vertical seam.

---

## Known open items — your view welcome

- **Motion.** The site has essentially none beyond hover transitions. Nothing has been designed. This is probably the biggest single gap.
- **Colour format.** Tokens are hex, not OKLCH.
- **The cream section.** `--cream` (#F5F2EA) grounds the schedule/contact block. One section only. It comes from the designer's page 1, but a warm near-white is a well-known generic tell and we are not attached to it.
- **Hero vertical rhythm.** On a 1920×855 viewport the hero is 757px tall with 213px of vertical slack around the content block. It may want to be shorter, or the content may want to be larger.
- **The comb device.** Marisol's page 1 renders the salon's business card as a comb silhouette containing the tagline "rinde culto a tu cabello". We built it, then removed it — it competed with the hero. It is the strongest brand device in her work and it is currently unused anywhere. Worth a view on whether it belongs somewhere else.
- **Photography.** The gallery and about images are Diana's real photographs. The hero is AI-generated as a placeholder and should be replaced when she supplies real work. Flag anywhere else the imagery is thin.

---

## Already verified — don't spend time re-checking

- Contrast passes WCAG AA throughout, measured not eyeballed: bronze on mint 7.37, gold-text on white 5.03, ink-soft on white 6.59, mint on bronze 7.37. The decorative gold `#C9A961` is line art only and never carries text.
- Heading outline is clean: one `h1`, an `h2` per section, philosophy's five `h3`s correctly nested.
- Body measure is 26em ≈ 72 characters, computed from Alegreya's glyph advances.
- i18n has full ES/EN parity, 49 keys, no orphans.
- Hero image is 206KB WebP with a JPEG fallback, down from a 4.4MB PNG.
- `prefers-reduced-motion` block is present.

---

## What we want back

1. **A prioritised list of improvements**, highest impact first, each with a specific reason. "The philosophy section needs more air" is not useful; "the 5-column grid collapses to 3 at 1024px leaving two orphans on row 2" is.
2. **Anything broken at a breakpoint we have not tested.** We checked 1920 and the responsive rules exist, but the layout has not been walked across every width.
3. **A motion proposal**, if you think it needs one. What should move, why, and what stays still. We would rather ship nothing than ship a generic fade-up on every section.
4. **An honest call on whether the implementation is faithful to Marisol's PDF.** We have been working from it closely, but we are too close to it now.

Flag anything that reads as machine-generated. That is the failure mode we care most about avoiding.
