# Task for the image prompt agent — Área 9 hero photograph

## What you are writing a prompt for

A single hero photograph for a hair salon website (Área 9, Madrid). It sits in the right-hand half of the hero section, with a flat mint-green panel on the left carrying the headline, subtitle and a button. The photo and the panel must read as one continuous image, so the wall behind the subject has to be the same mint as the CSS panel.

The designer (Marisol) supplied a reference layout. The generated photo must plausibly replace the stock photo she used. It does not need to be identical — it needs to occupy the same role.

---

## Hard requirements

**Composition**

- Subject occupies the RIGHT side of the frame. The LEFT 25–30% must be nothing but empty wall.
- The top of the subject's head is CROPPED OFF by the top edge of the frame. We see roughly from mid-head down to mid-back.
- Shot from BEHIND. No face visible at all. Not in profile, not over-the-shoulder — from behind.
- Bare shoulders and upper back in view.

**Subject**

- Long, thick, wavy hair falling forward over ONE shoulder, exposing the back of the neck and the tattoo work.
- Hair colour is the point of the photograph and it must look like an expensive, *fresh* salon result: rich, even, high-gloss, seamless, immaculately conditioned, well cut, with soft low-contrast dimension only. **Do not describe roots, ends, ombré or balayage** — see failure mode 1 below.
- Back, shoulders and neck covered in colourful **American traditional / old-school** tattoos: open roses in orange, gold and red, dark teal-green leaves and foliage, heavy solid black outlines, flat saturated fills. The ink should look genuinely aged into real skin, not freshly rendered.

**Background**

- Flat matte painted plaster wall, pale sage mint green, hex `#BEDDCB`. This is not negotiable — it has to match the CSS panel it sits beside.
- Evenly lit, no strong shadow on the wall, no vignette, no props, no furniture.

**Photographic treatment**

- Must read as a real photograph, not a render. Prompt for analogue film language: Kodak Portra 400 or Fuji Pro 400H, 85mm or 105mm, f/1.8–f/2.8, soft directional natural window light.
- Visible film grain, gentle highlight rolloff, natural skin texture with pores and imperfections, no airbrushing, no plastic skin, no over-sharpening, no HDR.
- Muted warm grade, low contrast. Understated European editorial, not glossy American commercial.

---

## Technical output

- Aspect ratio **4:3 landscape**, minimum 2048px wide.
- The site applies `object-fit: cover` with `object-position: center 22%`, so keep the important content in the upper-middle band and leave tolerance at the bottom.
- A mint-to-transparent gradient overlays the left ~22% of the image, so nothing important can live there.

---

## What actually went wrong — diagnosed from the eight rejected attempts

### 1. THE HAIR. This is the critical failure and the one to solve first.

In **every single generation**, the hair came out as a damaged, brassy, grown-out ombré with a hard horizontal demarcation line where the dark root section stops and the bleached section starts. The blonde consistently rendered yellow-orange and straw-like, with thin stringy ends.

This is the worst possible failure for this brief. The client is a colourist. The photograph's entire job is to advertise expensive colour work, and instead it advertises a bad bleach job that needs fixing.

The cause is almost certainly the prompt language itself. Phrases like *"dark roots melting into blonde ends"*, *"balayage"*, *"ombré"*, *"dark espresso roots through caramel into buttery blonde"* are producing exactly what they literally describe — a high-contrast root-to-end transition — rather than the seamless, expensive result those words mean to a hairdresser.

**Recommended fix:** stop describing root-to-end contrast entirely. Instead specify a rich, even, freshly-coloured single tone with only subtle low-contrast dimension. Words like *uniform*, *seamless*, *freshly coloured*, *rich*, *deep*, *even*, *salon-fresh*, *high-gloss*. Consider dropping blonde altogether and going for a deep warm copper or rich chestnut with soft glow — much easier for the model to render beautifully, and closer to the muted reference palette anyway.

### 2. Composition — one attempt solved it, reuse its language

Attempt 21 (`1db7149d`) nailed the layout: left half completely empty mint wall, subject hard right, head cropped by the top edge, hair swept over one shoulder. **This composition is correct — keep whatever produced it.**

The other attempts all centred the subject and filled the frame, leaving no clean space for the headline. Attempt 23 in particular was cropped far too tight.

### 3. Tattoos — largely solved, minor calibration

Attempts 21 and 23 produced exactly the right thing: American traditional roses in orange, gold and red, dark teal-green leaves, heavy black outlines, flat saturated fills, convincingly settled into skin. Keep that language verbatim.

Attempt 24 was too sparse — a single isolated rose on an otherwise bare back. Specify *dense, connected composition covering the upper back and shoulders*, not individual pieces.

### 4. Colour grade runs too warm and too yellow

All eight came back yellow-green. The wall rendered as a warm yellowish sage rather than the cool `#BEDDCB`, and the overall grade is warmer and more saturated than the reference, which is cooler, softer and more muted.

**Recommended fix:** ask for a cool, desaturated grade; describe the wall as a *cool pale blue-green*, not just "mint" or "sage", both of which pull yellow.

### 5. Film-edge artefacts

Some outputs included a visible film border / sprocket edge baked into the image. Exclude it — this gets used full-bleed and any border will show.

---

## Model notes

Generated so far on Higgsfield `soul_2` (Higgsfield Soul 2.0), which is tuned for realistic fashion editorial and is the strongest available option for this. `nano_banana_pro` and `flux_2` are alternatives worth a comparison run. Aspect ratios available on `soul_2`: 1:1, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3.

---

## Deliverable

One prompt, ready to paste, optimised for `soul_2` at 4:3. If useful, add two variants that trade off between "tighter crop on the hair" and "wider view showing more of the tattoo composition", so the client has a real choice rather than four near-identical images.

---

## Reference

`assets/ejemplos web diana.pdf`, page 2 — the hero at the top of that page is the target.
