# Plan — giving the page life

**Date:** 2026-08-07
**Answers:** Diana's point 7, "le falta vida a la web"
**Status:** draft for Tal's approval

---

> **REVISED 2026-08-07 after review.** The first draft of this plan was over-scoped.
> Six of its ideas required content from Diana, who runs the salon single-handed and
> has not set up Fresha yet because she wanted the site done first. It sorted work by
> what would improve the page, not by what it would cost her.
>
> **The governing rule now: nothing that creates a recurring obligation for Diana.**
> A stale events listing is worse than no events listing. This is a landing page for a
> local salon — its job is to make someone want to come in, and tell them where and when.
>
> Sections 2–5 below are kept for the record. Section 0b is the actual plan.

---

## 0a. Decisions — 2026-08-07, Tal

1. **Balmoral width — settled, ship 130%.** There is no correct variant to download. Balmoral is a Letraset script by Martin Wait, single style, no width axis, no expanded cut. Our widened build geometrically scales the outlines, which sounds like a compromise until you look at Marisol's own screenshot: her InDesign horizontal-scale field reads **130%**, which is the same geometric distortion. We are matching her method, not approximating it. Ship `balmoral-a9-wide.woff2`.
2. **Events — dropped.** Lives on Instagram.
3. **Before / after — dropped.**
4. **Instagram — real embed**, not a static grid.
5. **Philosophy section and footer stay exactly as built.** No move, no cut. §0c below is superseded.
6. **Photography: reference, do not copy.** Search the web to study how good salon sites shoot, then generate our own originals in that spirit. No third-party assets on the site. §0d rewritten accordingly.

---

## 0c. ~~The geometry block moves to the footer~~ — SUPERSEDED

**Decision: philosophy section and footer stay as built.** Kept below for the record only.

<details>
<summary>Original proposal</summary>

Marisol's email: *"la página 1 es ejemplo de cabecera y pie (este pie es de una web, pero se pueden añadir símbolos. Alguna geometría sagrada quizá)"* — the footer is where she wanted symbols.

We built that treatment as a mid-page philosophy section instead. Moving it down raises a question the move does not answer by itself:

**What happens to the philosophy copy?**

My recommendation: **cut it.** "Intuición — leer lo que te sienta — estudiamos tus facciones y tu estilo personal" is brand-speak. It asserts qualities rather than showing them, it is the weakest content on the page, and it is the kind of thing every salon site says. Removing it shortens the page and loses nothing a visitor needs.

That leaves:

- **Footer:** a row of the five sacred-geometry symbols in gold above the address, hours and Instagram. Exactly what Marisol asked for.
- **Mid-page:** the section disappears. Page runs hero → about → hours/contact → reviews → gallery → footer.

Alternative if the values feel worth keeping: fold one line of them into the about prose, where they read as description rather than a manifesto.

*(end of superseded proposal)*

</details>

---

## 0d. Photography — reference, then generate

Marisol suggested looking at photography on other sites. The method is: **study how good salon sites shoot, then generate our own originals in that spirit.** No third-party assets are downloaded or used. Licensing does not arise.

### What to generate

Atmosphere, not portfolio. The salon space and its details, in Área 9's own vocabulary — vintage red and teal barber chairs, plants, natural light through the window, tools, worn surfaces, Malasaña.

| Slot | Subject |
|---|---|
| About / interior | The room itself: chairs, mirrors, plants, daylight |
| Detail set | Scissors and combs on a worn surface, a plant against the mint wall, light falling across a chair |
| Texture | Plaster grain for the mint panel |

### The one line not to cross

A visitor seeing a photograph of finished hair on a hairdresser's site assumes it is that hairdresser's work. Atmosphere shots carry no such claim. So:

- **Rooms, plants, light, tools, texture** — generate freely.
- **Anything reading as a finished result** — hair, colour, cuts — Diana's own only.

The gallery already holds her real work. It stays that way.

The current hero sits on the line: generated, and it reads as her colour work. Fine while building, worth replacing with one of her own shots before launch. That is the second of the two asks in §0b.

---

## 0b. The actual plan

### Build — zero cost to Diana, ever

| | Why |
|---|---|
| **§1b hero fidelity** | Highest visibility on the page. Comes from her own designer. Nothing to ask anyone. |
| **Instagram feed** | See below. This replaces the events section entirely. |
| **Open-right-now** | Computed from the schedule already on the page. |
| **Pulled review quote** | Her best existing review, moved from 17px body text to display scale. One-time, uses what we have. |
| **Plaster texture** | No content, no maintenance. |
| **Light motion** | Geometry and comb stroke-draw, button hover. Nothing else moves. |

### Ask Diana for two things

1. **Prices.** Or even just "desde X€" per service. Right now someone deciding whether to book cannot find out what a colour costs, and that loses more visitors than everything else on this page combined. One message, she already knows the answers.
2. **One hero photograph of her own work.** See §0d. The generated hero cannot ship on a salon site — it reads as her portfolio and it is not. Everything else can be stock or atmosphere.

Nothing else gets asked.

### Instagram is the events section

She already posts about workshops and events there. Pulling that feed onto the page means:

- The site shows the place is alive
- Updated by her doing what she already does
- No new tool, no new login, no new habit
- Nothing can go stale — the feed is always current by definition

If a dedicated events strip is ever wanted, the lightest thing she would realistically use is a published Google Sheet the page reads. Not `events.json` (needs Git), not a CMS (another login and a monthly bill for one salon). But start with Instagram and see whether anything more is actually missing.

**Decide:** real embed vs periodically-refreshed static grid. The embed is genuinely live but drags in third-party script, cookies and a consent banner we do not currently need. Recommend starting with the embed precisely *because* it needs no maintenance — the consent question is the price of that.

### Cut, and why

| Cut | Reason |
|---|---|
| Bespoke events section | Recurring obligation. Instagram covers it. |
| Before / after | Needs 4–6 pairs shot consistently. Real work for her, and she has not been shooting that way. Revisit only if she already has suitable pairs. |
| Gallery hover captions | One line per photo. Small, but it is still homework for a nice-to-have. |
| Most of the motion proposal | Keep the stroke-draw and button hover. Everything else was motion for its own sake. |

---

## 0. The problem, stated properly *(original framing, superseded)*

The page is no longer flat visually. It is flat *editorially*. Everything on it is permanent: values, hours, address, four photographs. Nothing changes, nothing has a date on it, nothing gives anyone a reason to come back.

Área 9 runs workshops, cultural events and performing arts. That appears in one sentence of body copy. The most alive thing about the business is the least visible thing on its website.

Motion will not fix that. Content will.

---

## 1. The dependency that shapes everything

Most of the highest-value work is blocked on material only Diana has.

| Item | Value | Blocked on |
|---|---|---|
| Events section | Highest | Event names, dates, descriptions |
| Before / after | High | Paired photographs of her colour work |
| Services & prices | High | Her price list |
| Pulled review quote | Medium | Nothing |
| Open-right-now indicator | Medium | Nothing |
| Instagram grid | Medium | Account access or an embed decision |
| Plaster texture | Low | Nothing |
| Motion pass | Low | Structure settling first |

**Consequence:** we build the unblocked work now, build empty shells for the blocked work so it is drop-in later, and bundle every content request into a single ask rather than dripping them at her.

---

## 1b. Hero fidelity — do this first

Side-by-side against Marisol's page 2, our hero is looser and smaller than hers. Measured off the PDF at 150 dpi, ink-mask per band, mint panel only:

| | Marisol | Ours |
|---|---|---|
| Title line 1 | x 265–1346 | — |
| Title line 2 | x 426–1627, **indented 161px** | flush left |
| Title block / panel width | **71%** | 63% |
| Subtitle | **2 lines, 77% of title width** | 1 line, wider than the title |
| Button | **centred under the text block** | flush left |
| Line-height | 0.84 | 0.84 ✓ already correct |

Five changes, in order of visual impact:

**1. Letter width — the big one.** Her glyphs are visibly wider than ours. We ship `balmoral-a9.woff2` at 100%; the reference is clearly a widened variant.

**This settles the open question from §9.** We were going to ask Diana to choose between 100 / 115 / 130. Her own designer already answered it in the file Diana forwarded us. Ship the wide variant, show her the comparison as a courtesy rather than a decision. Start at 115% and compare against 130% at hero size — my earlier concern that 130% thickens the strokes still stands, and the PDF is print at A2, not a screen.

**2. Indent the second line.** 161px of 1362 ≈ 12% of the title block. It sits under the shoulder of "esculpimos" and stops the two lines reading as a rectangle. One `padding-left` on the second span.

**3. Narrow the subtitle so it wraps to two lines.** Currently `max-width: 26em` at 1.35rem — one long line running wider than the title above it, which inverts the hierarchy. Target ~77% of the title block, roughly `15–16em` at the subtitle's own font-size. Two lines, both shorter than the title.

**4. Centre the button under the text block.** Hers sits centred on the text column, not aligned to its left edge. Ours is flush left.

**5. Scale the title up slightly**, 63% → 71% of the panel. Partly falls out of the width change; check before adding more.

Leading needs no change — measured baseline pitch over glyph band gives 0.84, exactly what we ship.

*Caveat:* the ratios are solid, derived from clean ink-band measurements. My attempt to back out an absolute font-size from them did not reconcile, so treat the percentages as the guide and tune the final sizes by eye in the browser.

---

## 2. Phase A — build now, nothing blocking

### A1. Open right now
Compute from the existing schedule data in JS. Renders as a small line near the hours: *"Abierto hasta las 19:30"* / *"Cerrado · abrimos el lunes a las 12:00"*.

Cheap, genuinely useful, and it makes the page feel like it knows what day it is. Needs the schedule moved from hardcoded HTML into a small data structure so one source drives both the list and the indicator. Must handle the split shifts and the Spanish/English strings.

### A2. Pulled review quote
One line — *"una burbuja de calma en la gran ciudad"* — set in Balmoral at display scale, bronze on mint, between the philosophy and schedule sections. Attribution in small caps beneath.

The strongest emotional copy on the site is currently 17px body text at the bottom of the page. This costs nothing and changes how the page feels.

### A3. Plaster texture on the mint panel
2–3% opacity grain over `--mint-hero`, tuned to match the wall in `hero.jpg`, as an inline SVG `feTurbulence` mask or a tiny tiled PNG. Makes flat colour read as paint.

Ship the tiled PNG version if the SVG filter costs anything measurable on paint.

### A4. Gallery hover reveals technique
On hover, a short caption: *"balayage sobre base oscura"*, *"corte pixie texturizado"*. Turns a photo grid into evidence of craft. Needs one line of copy per image from Diana, but degrades fine without it.

---

## 3. Phase B — shells now, content later

Built and styled, populated when Diana sends material. Each ships hidden behind a single flag so nothing half-empty goes live.

### B1. Events — the priority
Reuse Marisol's exact block: sacred-geometry symbol, title in Alegreya roman, italic sub-line in `--gold-text`, small-caps meta for the date. That layout was designed around an event with a date, which is what her placeholder content actually was.

Structure: a `events.json` file Diana or Tal can edit without touching markup. Past events drop off automatically by date. Empty state hides the whole section rather than showing "no upcoming events".

Open question: does this replace the philosophy section or sit beside it? Replacing is cleaner and truer to the reference. Keeping both risks two near-identical five-column blocks on one page, which would read badly.

### B2. Before / after
This is a colourist's site with no transformation on it. "Creatividad y Transformación" is currently asserted rather than shown.

Two options, decide when we see the photographs:
- **Paired stills**, side by side, labelled. Simple, robust, no JS.
- **Drag slider**, one image revealing the other. More engaging, more to get wrong on touch, and it needs the two shots framed identically to work at all.

Default to paired stills unless her photographs happen to be shot consistently.

### B3. Instagram
Decide between a real embed and a periodically-refreshed static grid. An embed is live but drags in third-party script, cookies and a consent question we currently do not have. A static grid refreshed occasionally is lighter and keeps the page ours.

Recommend static grid. Revisit if she posts often enough to justify the embed.

---

## 4. Phase C — motion, after the structure settles

Do not start until Phase A and B shells exist. Animating a layout still in flux wastes the work.

**Moves:**
- Sacred geometry and the footer comb draw in via `stroke-dashoffset` over ~1.2s on viewport entry. Reads as drawn rather than faded.
- Comb teeth stagger.
- Button hover: existing 2px lift plus an inset sweep.
- Gallery hover captions fade.

**Stays still:** the hero, all layout columns, every typographic block. No entrance animation on sections. No Ken Burns on the hero photograph — it is the first thing anyone sees and it reads as a template.

**Non-negotiable:** every one of these needs a `prefers-reduced-motion` alternative. The reduced-motion path shows the final state immediately, never a blank element waiting for a class. The design review's motion proposal omitted this entirely.

**Also:** no letter-by-letter reveals on Balmoral. Per-glyph opacity makes the overlapping joins show through inconsistently mid-transition.

---

## 5. Phase D — the gap that is not about life

**There are no services and no prices anywhere on the site.** Someone deciding whether to book cannot find out what a colour costs.

This will lose more visitors than any amount of motion will win. It is not part of "giving the page life" and it is probably more important than most of what is above.

Needs Diana's price list, or at minimum a "desde X€" range per service.

---

## 6. What to ask Diana — *superseded, see §0b*

The original list had five asks. It is now two:

1. **Prices.** Full list, or a starting price per service.
2. **Instagram.** Confirm she is happy for the site to pull from her account.

That is all. Everything else proceeds without her.

<details>
<summary>Original five asks, kept for reference</summary>

1. Events — names, dates, descriptions, and who maintains them
2. Before / after — four to six consistently shot pairs
3. Prices
4. Gallery captions — one line per photo
5. Instagram permission

Cut because four of the five create work for a one-person business, three of them recurring.
</details>

---

## 7. Open decisions for Tal

1. **Events vs philosophy.** Replace, or run both? I lean replace.
2. **Does the events section survive if Diana never sends content?** If it will sit empty, it is not worth building. Honest answer needed before Phase B starts.
3. **Scope.** Phase A alone is a visible improvement in a short session. A through D is a different size of job.
4. **Prices.** In scope for this round, or a separate piece of work?

---

## 8. Sequencing

```
First      1b hero fidelity — widen the font, indent line 2, wrap the
              subtitle, centre the button. Highest visibility, no dependency.
Now        A1 open-now · A2 pulled quote · A3 texture · A4 hover captions
Then       B1 events shell + events.json
           B2 before/after shell
           B3 instagram grid
After      C  motion pass with reduced-motion paths throughout
Separate   D  services & prices
Parallel   Diana content request (§6) goes out immediately —
              it is the long pole on everything in B and D
```

The content request should go today. Everything in Phase B waits on it, and it will not arrive quickly.

---

## 9. Still open from earlier work

Unchanged, listed so they do not get lost:

- ~~Balmoral width: 100 / 115 / 130 comparison never shown to Diana.~~ **Resolved in §1b** — Marisol's own reference uses a widened variant. Ship it, show Diana the comparison as courtesy not as a question.
- Confirm with her that the wider letter spacing landed on Alegreya rather than the titles, and why.
- Hero photograph is AI-generated placeholder. Replace with her real work.
- Colour tokens are hex, not OKLCH.
- `--cream` on the schedule section: the design review wants it purged. Worth testing against white, not worth mandating.
