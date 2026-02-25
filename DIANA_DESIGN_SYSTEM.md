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

### Design Philosophy: "Intuitive Artistry & Free-Spirited Peace"

The design system is heavily anchored in the brand's core values: Intuition, Creativity, and Peace. It must feel eclectic, welcoming, slightly "witchy/spiritual", and incredibly authentic.

| Principle (English) | Principle (Spanish) | Description | Application |
|---------------------|---------------------|-------------|-------------|
| **Intuitive** | Intuitiva | Diana knows what suits you without being told. The site should guide users effortlessly. | Clean navigation, prominent and easy-to-read bilingual toggle, soft rounded UI shapes. |
| **Creative/Artistic** | Creativa y Artística | The salon feels like an eclectic art gallery (vintage chairs, theater posters). | Use of gallery-style layouts to champion photography, asymmetrical features, and striking accent colors. |
| **Spiritual/Natural**| Espiritual y Natural | Safe, peaceful, good vibes. Full of plants and natural wood. | Earthy and vintage color palette (teal, deep red, warm sand background). |

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

The palette reflects the "Eclectic Retro & Spiritual Nature" theme. We draw directly from the salon's interior: vintage teal barber chairs, deep red accents, lush green plants, and warm wood/white walls.

| Token | Hex | Usage | Notes |
|-------|-----|-------|-------|
| **primary** | `#2A7A78` | Primary Actions / Headers | Vintage Teal. Deep and calming, matching the vintage furniture. |
| **primaryHover** | `#3AAFA9` | Hover states | Lighter, energetic teal for buttons and links. |
| **accent** | `#A62B2B` | Accents / CTAs | Deep Vintage Red. An energetic pop of color reminiscent of her red chairs and artistic posters. |
| **background** | `#F9F6F0` | Main reading background | Warm Canvas/Sand. Avoid pure white to maintain a cozy, organic feel. |
| **surface** | `#EFEBE3` | Elevated light cards | Slightly darker warm tone for schedule cards or gallery frames. |
| **backgroundDark** | `#2C363F` | Hero & Footer backgrounds | Deep Charcoal/Navy. Anchors the site and provides high contrast for English/Spanish toggles. |
| **textPrimary** | `#3E2723` | Primary headings/body text | Deep Espresso. Warmer and less harsh than pure black, fitting the natural vibe. |
| **textSecondary**| `#607D8B` | Metatext & Subtitles | Muted Grey/Blue. Connects back to the teal tones. |

### Typography

Typography must project artistic freedom and elegant intuition. 

| Type | Family | Use Cases |
|------|--------|-----------|
| **Display / Hero** | **Cormorant Garamond** | Large cinematic headings, brand name, spiritual/artistic quotes. It has a slight "witchy/elegant" curvature. |
| **Interface / Body** | **Outfit** or **Lato** | Clean, modern sans-serif for UI components, schedules, and everyday reading. |

**Typographic Hierarchy:**
- **Hero:** Expressive, elegant, taking center stage.
- **Subtitles:** Modern, tracked out (wide letter spacing) for a calming breath.
- **Body:** Minimal, high contrast for readability in both English and Spanish.

### Spacing & Layout

Adherence to an organic, slightly more relaxed spacing system (multiples of 8px).
- Emphasize breathing room (large margins) to invoke a feeling of peace.

---

## 4. Component Library

### 4.1. Buttons & CTAs

-   **Primary Button (Bookings / Contact):**
    -   *Background:* Vintage Teal (`#2A7A78`)
    -   *Text:* Pure White (`#FFFFFF`), `Outfit Medium`, 16px.
    -   *Shape:* Softly rounded corners (8px) for an organic feel.
    -   *Hover:* Background shifts to `#3AAFA9`, slight upward transform.
-   **Accent Button (Bilingual Toggle):**
    -   *Background:* Transparent, bordered.
    -   *Text:* Deep Espresso (`#3E2723`), transitioning to Accent Red (`#A62B2B`) on active state.

### 4.2. Cards & Containers

-   **Schedule Frame:**
    -   *Background:* Warm Canvas (`#F9F6F0`) 
    -   *Border:* Hairline Vintage Teal border.
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
