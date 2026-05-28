# Área 9 — Master UI/UX Design System

**Version:** 1.0.0
**Last Updated:** 2026-02-25
**Status:** Draft / User Review
**Owner:** Antigravity & Tal

---

## 📋 Table of Contents

1. [Overview & Philosophy](#overview--philosophy)
2. [Brand Identity](#brand-identity)
3. [Visual Design System](#visual-design-system)
   - [Color Palette](#color-palette)
   - [Typography](#typography)
   - [Spacing & Layout](#spacing--layout)
4. [Component Library](#component-library)
5. [Content & Tone](#content--tone)

---

## 1. Overview & Philosophy

### Mission Statement

**Área 9** is an intuitive, creative space where hairdressing meets art, community, and personal peace. It serves individuals seeking not just a haircut, but a personalized, spiritually uplifting experience tailored to what truly suits them.

### Design Philosophy: "Intuitive Transformation & Peaceful Harmony"

The design system is heavily anchored in the brand's core values: Intuition, Creativity & Transformation, Relaxation, Harmony, and Communication. It must feel organic, intentional, serene, and welcoming.

| Principle (English) | Principle (Spanish) | Description | Application |
|---------------------|---------------------|-------------|-------------|
| **Intuition** | Intuición | Diana reads the energy and personality of each client to sculpt a style that uniquely fits them. | Clean navigation, effortless flow, warm and personalized touchpoints. |
| **Creativity & Transformation** | Creatividad y Transformación | Hairdressing as an art form that transforms both physical appearance and inner spirit. | Eclectic gallery layouts, asymmetrical features, and striking visual storytelling. |
| **Relaxation** | Relajación | A quiet sanctuary away from city noise; a peaceful, calming ritual of self-care. | Soft muted tones, generous whitespace, and calming layout transitions. |
| **Harmony** | Armonía | A balanced blend of vintage art, natural elements, and personal expression. | Curated grid alignment, balanced typography, and contrast-compliant colors. |
| **Communication** | Comunicación | An open, bilingual dialogue where every client feels heard, valued, and welcome. | Equal weight to English and Spanish text, clear schedule split-shifts, and intuitive contact links. |

### Core Design Goals

1. **"Eclectic Vintage Gallery" Aesthetic**
   - The UI must look like a creative, cozy, living space.
   - Use high-quality imagery to showcase her actual work and the beautiful interior.

2. **Bilingual Harmony**
   - Seamless toggling between English and Spanish. Neither language feels secondary.
   - Consistent typography to handle both languages elegantly.

3. **Simple & Maintainable**
   - The 'Gallery' must be easy to update.
   - The 'Schedule' needs to be clear, given the specific split-shift hours.

---

## 2. Brand Identity

### Brand Positioning

- **What we are:** A free-spirited, intuitive, highly professional yet creative hair salon providing personalized experiences.
- **What we are NOT:** A sterile, generic, hyper-commercial, fast-paced chain salon.
- **Motto:** "We know what suits you." / "Sabemos lo que te sienta bien."

### Brand Personality

**Tone:** Warm, peaceful, artistic, and profoundly welcoming.
**Voice:** Like a creative friend who has excellent taste and a calming presence.
**Visual Style:** Vintage eclectic details (like her red and teal barber chairs), rich plant greens, natural sunlight, organic shapes.

---

## 3. Visual Design System

### Color Palette

The palette reflects the "Earthy Sage & Antique Bronze" theme. We combine `#5d4615` (Antique Bronze) for grounding strength and history, with `#cae7e9` (Sage Mint) for intuitive, calming serenity.

| Token | Hex | Usage | Notes |
|-------|-----|-------|-------|
| **primary** | `#5D4615` | Primary Actions / Headers | Antique Bronze. Earthy, rich, and grounding. |
| **primaryHover** | `#493710` | Hover states | Darker antique bronze for active/hover states. |
| **accent** | `#CAE7E9` | Accents / Special Details | Sage Mint. Soft, calming, and intuitive. |
| **accentDark** | `#35595C` | High-contrast text accent | Deep Slate Sage. Enhances readability/WCAG compliance. |
| **background** | `#F9FBFB` | Main reading background | Soft Mint-tinted canvas. Fresh, organic, and easy on the eyes. |
| **surface** | `#E5F1F2` | Elevated light cards | Slightly darker, sage-tinted surface for cards/schedules. |
| **backgroundDark** | `#5D4615` | Hero & Footer backgrounds | Antique Bronze. Grounding, rich contrast backdrop. |
| **textPrimary** | `#3E2E0D` | Primary headings/body text | Darkened Bronze. High-contrast, warm tone for superb readability. |
| **textSecondary**| `#6B572B` | Metatext & Subtitles | Muted warm bronze. |
| **textInverse** | `#F9FBFB` | Text on dark backgrounds | Crisp minty off-white. |

### Typography

Typography must project organic movement and refined creativity. We utilize the elegant script/cursive font **Balmoral** for headlines, styled exclusively in lowercase, and pair it with **Outfit** (or **Lato**) for interface utility.

| Type | Family | Use Cases |
|------|--------|-----------|
| **Display / Hero** | **Balmoral** | Brand logo, section headers, and quotes. Always rendered in all-lowercase. |
| **Interface / Body** | **Outfit** or **Lato** | Clean, modern sans-serif for body text, lists, buttons, and navigation. |

**Typographic Hierarchy:**
- **Hero / Headings:** Balmoral family, all lowercase (`text-transform: lowercase`), flowing and poetic.
- **Subtitles:** Modern Outfit, uppercase with generous letter spacing (`0.1em`).
- **Body:** Outfit, 16px base, high line-height (1.6) for high legibility.

### Spacing & Layout

Adherence to an organic, slightly more relaxed spacing system (multiples of 8px).
- Emphasize breathing room (large margins) to invoke a feeling of peace.

---

## 4. Component Library

### 4.1. Buttons & CTAs

-   **Primary Button (Bookings / Contact):**
    -   *Background:* Antique Bronze (`#5D4615`)
    -   *Text:* Soft Mint (`#F9FBFB`), `Outfit Medium`, 16px.
    -   *Shape:* Softly rounded corners (8px) for an organic feel.
    -   *Hover:* Background shifts to `#493710` (darker bronze) or soft shadow transition.
-   **Accent Button (Bilingual Toggle):**
    -   *Background:* Transparent, bordered.
    -   *Text:* Darkened Bronze (`#3E2E0D`), transitioning to Antique Bronze (`#5D4615`) on active state.

### 4.2. Cards & Containers

-   **Schedule Frame:**
    -   *Background:* Soft Mint-tinted canvas (`#F9FBFB`)
    -   *Border:* Hairline Antique Bronze/Sage Mint border.
    -   *Layout:* Split shifts clearly delineated (e.g., 10:00 - 14:00 | 16:00 - 19:30).
-   **Gallery Masonry:**
    -   Images are presented in an asymmetrical, masonry-style grid to emphasize the "creative/free" nature of the brand, rather than a rigid corporate grid.

---

## 5. Content & Tone

### Copywriting Laws

1. **Be Intuitive:** Use empathetic language. ("We are here for you" / "Aquí estamos para ti").
2. **Highlight the Vibe:** Don't just list services; describe the experience of being in the space.
3. **Bilingual Equity:** English and Spanish translations should feel equally native and prominent, never automated or secondary.
4. **Action-Oriented but Gentle:** CTAs should be invitations ("Come visit us" / "Ven a visitarnos") rather than demands ("BOOK NOW").

---
*End of Document*
