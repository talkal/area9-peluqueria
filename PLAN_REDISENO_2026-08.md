# Área 9 — Plan de rediseño

**Basado en:** email de Diana (6 ago 2026, "Fw: web y tipos") + notas de Marisol + `ejemplos web diana.pdf` (2 págs, InDesign A2) + `39768.jpg`
**Estado:** borrador para aprobación de Tal
**Fecha:** 7 ago 2026

---

## 0. Resumen ejecutivo

Diana no pide retoques sueltos: el PDF de Marisol propone **otra dirección visual**. La web actual es un layout SaaS limpio (tarjetas con borde, sombra y fondo, grid de 5 columnas, mint azulado) con tipografía script encima. La referencia es lo contrario: **fondo blanco, cero tarjetas, cero sombras, texto centrado, fotografía a sangre e ilustración lineal**.

Los 8 puntos numerados de Diana son de tipografía y se resuelven en CSS y en el fichero de fuente. Las notas de Marisol y el PDF son estructurales. **Recomiendo hacer los dos, en ese orden**: la tipografía primero (es lo que ella ha pedido explícitamente y se ve en cualquier captura), la estructura después.

**Un hallazgo importante:** el defecto de las uniones que Diana fotografió está diagnosticado con exactitud y se arregla en el fichero de la fuente. Detalle en §2.

---

## 1. Estado actual vs. referencia

| | Web actual | Referencia (PDF Marisol) |
|---|---|---|
| Fondo secciones | `#F9FBFB` mint azulado | `#FFFFFF` blanco puro |
| Mint | `#CAE7E9` (azulado) | `#BEDDCB` (**verde**) |
| Bronce | `#5D4615` | `#4D3B16` (más oscuro, más oliva) |
| Cuerpo de texto | Outfit sans-serif | **Alegreya Italic** |
| Tarjetas | Borde + sombra + fondo | Sin caja: texto centrado sobre blanco |
| Filosofía | 5 tarjetas iguales | 5 columnas con **geometría sagrada** lineal dorada |
| Hero | Gradiente radial | **Fotografía a sangre**, panel mint a la izquierda |
| Botón | Rectángulo redondeado 8px | Placa con esquinas achaflanadas |
| Instagram | Bloque con icono + handle | Enlace de texto subrayado en el cuerpo |
| Ancho de columna | 1200px, párrafos anchos | ~40 caracteres, muy estrecho |

Cambios de color medidos por muestreo directo del PDF a 150 dpi, no estimados a ojo.

---

## 2. El defecto de las uniones (punto 3) — diagnóstico

Diana fotografió "esculp" con las letras sin unir. La causa es concreta y medible.

Balmoral no une las letras con kerning: lo hace con **sidebearings negativos**. Cada glifo sobresale de su caja de avance y su trazo de salida se solapa con la entrada del siguiente. Medido sobre `Balmoral D Regular.ttf` (2048 upm):

```
a c e g h i j k l m n o p q r t u v w x y z   →  rsb entre -23 y -222   ✅ unen
b                                            →  rsb = +27              ❌ hueco
s                                            →  rsb = +22              ❌ hueco
```

**Solo `b` y `s` rompen la unión.** Todas las demás minúsculas solapan. Por eso el hueco aparece justo después de la `s` en "e-s-culpimos" — que es exactamente lo que se ve en su foto.

El fichero tiene 748 pares de kerning en una tabla `kern` heredada, pero **cero pares minúscula-minúscula** y **ningún `GPOS`**. No hay nada que corrija esos dos glifos.

**Solución:** reducir el avance de `b` en 54 uds (386 → 332) y el de `s` en 49 uds (369 → 320), llevándolos de +22/+27 al −27 del resto. Se hace con fontTools, no toca los contornos, y funciona en todos los navegadores sin depender de que apliquen kerning.

### Verificado

No es una hipótesis. Se generó la fuente corregida y se midió la tinta por columna de píxel a 200 px:

| Palabra | Original | Corregida |
|---|---|---|
| esculpimos | 1 rotura (tras la `s`) | **sin roturas** |
| cabello | 1 rotura (tras la `b`) | **sin roturas** |
| esencia | 1 rotura (tras la `s`) | **sin roturas** |
| sobre / belleza / bienestar | rotura | **sin roturas** |

Y ninguna otra letra rompía. Prueba visual en `assets/joins_proof.png`.

También se comprobó que el ensanchado al 130% (§3.2) **mantiene las uniones**, porque contornos, avances y sidebearings escalan juntos. Confirmado sobre esculpimos, cabello, esencia, belleza, filosofía y bienestar: cero roturas.

**Pero** — mirando la fila 3 de `joins_proof.png`, el 130% se ve claramente estirado: los trazos verticales engordan y la letra pierde la elegancia del original. Diana lo pidió porque en InDesign lo estaba viendo así, pero en pantalla grande el efecto es más agresivo de lo que parece en su maqueta. **Recomiendo enseñarle 100 / 115 / 130 lado a lado antes de fijarlo.**

**Corolario crítico para el punto 6.** Como las uniones dependen de solapamiento geométrico, **cualquier `letter-spacing` positivo sobre Balmoral rompe las 26 uniones a la vez**. El punto 3 y el punto 6 se contradicen si se aplican a la misma tipografía.

Lectura propuesta, que además es la que se ve en el PDF: el punto 6 va sobre **Alegreya** (cuerpo de texto y sobre todo las versalitas tipo `NUESTRA FILOSOFÍA`, que en la referencia llevan tracking muy generoso). Balmoral se queda en tracking 0 o ligeramente negativo. **Conviene confirmárselo a Diana** en vez de decidirlo por ella.

---

## 3. Los 8 puntos de Diana

| # | Petición | Implementación | Nota |
|---|---|---|---|
| 1 | Inicial mayúscula → minúscula, 1/3 más grande | Los títulos ya son lowercase. Añadir `.title-initial` con `font-size: 1.33em` y ajuste de baseline sobre la primera letra | Ver §3.1 |
| 2 | Balmoral al 130% de ancho | Generar instancia ensanchada con fontTools (contornos ×1.3 en X + avances + kerning) | Ver §3.2 |
| 3 | Ajustar uniones | Ajustar avance de `b` y `s` | §2 — **resuelto y verificado** |
| 4 | Balmoral títulos, Alegreya Italic cuerpo | Sustituir Outfit por Alegreya (ficheros locales ya en `assets/alegreya/`) | Ver §3.3 |
| 5 | Interlineado + títulos al doble | `line-height: 1.05` en títulos; escala tipográfica al doble | Ver §3.4 |
| 6 | Más separación entre letras | Tracking en Alegreya y versalitas, **no** en Balmoral | Ver §2 |
| 7 | Falta vida — imagen de fondo | Fotografía a sangre en hero + fondos generados | Ver §4 |
| 8 | Letra más gorda en botones | Alegreya Medium/Bold + placa achaflanada | Ver §3.5 |

### 3.1 Inicial ampliada (punto 1)

"Convertirla en minúscula y agrandarla 1/3" → la primera letra sigue siendo el glifo **minúsculo**, escalado a ~133%. No es una versal ornamentada.

Ojo: escalar la primera letra con `font-size` **rompe su unión con la segunda** (el solapamiento se calcula sobre el em de cada glifo). Habrá que compensar con un `margin-right` negativo proporcional. Es la razón por la que este punto se implementa después de §2, no antes.

Diana además abre la puerta a la versal ornamentada "sin abusar" y señala la **C de Cabello** — que en el PDF aparece como capital ornamental en el hero. Balmoral no tiene tabla `GSUB`, así que no hay swashes alternativos: esa C es simplemente la mayúscula normal de la fuente, que ya es ornamental. Se puede usar tal cual.

**Propuesta:** minúscula ampliada como regla general; versal ornamentada reservada al hero (`tu Cabello`), como en el PDF.

### 3.2 Ensanchado al 130% (punto 2)

La captura de InDesign muestra el campo de escala horizontal al **130%** — confirma la petición.

`font-stretch` no sirve: Balmoral es estática, no variable. `transform: scaleX(1.3)` en CSS es frágil (rompe el flujo, el ajuste de línea y el cálculo de anchos).

**Solución:** generar `balmoral-a9-wide.woff2` transformando los contornos ×1.3 en X y escalando avances y kerning en la misma proporción. Al escalar todo junto, las uniones se mantienen — al contrario de lo que pasa en InDesign, que es probablemente el origen del hueco que fotografió.

### 3.3 Alegreya (punto 4)

Alegreya llega completa (Regular → Black, con itálicas). Se sirve local, no desde Google Fonts, para tener la misma versión que Marisol.

Diana pidió italic. En la referencia **todo el cuerpo va en italic** — es una decisión deliberada, no un descuido. Pero 400+ palabras de serif cursiva cuestan legibilidad, y horarios/dirección/teléfono son justo lo que la gente escanea.

**Acordado:** montar las **dos versiones** y que Diana y Marisol elijan sobre la web real.
- **A (literal):** todo Alegreya Italic.
- **B (mixta):** italic en párrafos, citas, reseñas y subtítulos; regular en horarios, dirección, navegación y botones.

Se entregan como dos URLs de preview.

### 3.4 Escala tipográfica (punto 5)

"Doble de tamaño" + interlineado ajustado. Balmoral tiene ascendentes y descendentes muy largas (asc 1262 / desc −453 sobre 2048 upm), así que a tamaño grande necesita `line-height` **por debajo de 1**, no por encima.

| Elemento | Ahora | Propuesto |
|---|---|---|
| Hero | `clamp(3.5rem, 8vw, 5.5rem)` / lh 1.25 | `clamp(4rem, 11vw, 9rem)` / lh **0.95** |
| Section title | `clamp(2.5rem, 6vw, 4rem)` / lh 1.25 | `clamp(3rem, 7vw, 6rem)` / lh **1.0** |
| Card title | 2.25rem | 3rem |
| Value title | 1.75rem | 2.25rem |

En la referencia el título ocupa ~4× la altura del cuerpo. Hoy ocupa ~2,5×.

### 3.5 Botones (punto 8)

- Peso: Alegreya **Medium 500 → Bold 700**, tamaño 1.0625rem.
- Forma: en el PDF no es un rectángulo redondeado, es una **placa con las cuatro esquinas achaflanadas** (`clip-path` con corte a 45°). Aire interior más generoso: `18px 44px`.
- Relleno bronce `#4D3B16`, texto crema.

---

## 4. Imágenes y fondos (punto 7 + nota de Marisol)

Marisol usa una foto a sangre (melena rubia sobre espalda tatuada) que es de banco de imágenes, no del salón. Sirve para marcar el tono, no para publicarse.

**Acordado:** generar los fondos con Higgsfield tomando esa referencia como guía de tono — mint verde, luz cálida, grano fotográfico.

Se generará:
1. **Hero** — textura mint verde `#BEDDCB` con degradado suave hacia la foto, para que el panel plano y la imagen se fundan como en el PDF.
2. **Fondo de sección** — papel/textura orgánica muy sutil (2–4% de opacidad) que quite la planitud sin competir con el texto.
3. **5 símbolos de geometría sagrada** en línea dorada `#C9A961` para la sección de filosofía — mandala, icosaedro, sri yantra, flor de la vida, metatrón. Responde a la vez al punto 7 y a la nota de Marisol.

**No** se generarán fotos de pelo ni de personas: sería inventar trabajo que Diana no ha hecho. Los huecos de la galería y del "sobre nosotros" siguen esperando fotos reales suyas. Merece la pena pedírselas — tiene Instagram activo.

---

## 5. Notas de Marisol

| Nota | Implementación |
|---|---|
| Evitar columnas de texto muy anchas | `max-width: 34em` en párrafos. Hoy llegan a ~75 caracteres; la referencia va a ~40 |
| Fotos chulas que den vida | §4 |
| Pág. 1 = ejemplo de cabecera y pie | El header es una **silueta de peine** en bronce con el claim dentro. Es el gesto de marca más fuerte del PDF — decisión de Tal si se adopta (ver §7) |
| Símbolos / geometría sagrada en el pie | Cenefa de geometría lineal dorada en el footer, mismo lenguaje que las tarjetas |
| Instagram mejor en contacto o como símbolo | Quitar el bloque grande del hero de contacto. Enlace de texto subrayado en el cuerpo ("Entérate de todo en Instagram", como en el PDF) + icono discreto en el footer. Tiene razón: es el único enlace que saca al visitante del sitio |

---

## 6. Fases

**Fase 1 — Fuentes** (base de todo lo demás)
1. Generar `balmoral-a9.woff2` con los avances de `b`/`s` corregidos — *ya prototipado y verificado*
2. Generar las variantes ensanchadas al 115% y 130% para que Diana compare
3. Instalar Alegreya local, `@font-face` completo con italics
4. Página de prueba con "esculpimos tu cabello" a 4 tamaños para validar uniones antes de tocar el sitio

**Fase 2 — Sistema tipográfico**
5. Sustituir Outfit por Alegreya en todo `styles.css`
6. Escala e interlineado nuevos (§3.4)
7. Tracking: generoso en Alegreya y versalitas, cero en Balmoral
8. Inicial ampliada con compensación de unión
9. Botones (§3.5)
10. Ancho de columna a 34em

**Fase 3 — Color y estructura**
11. Repaletizar: mint verde, bronce oscuro, fondos blancos
12. Hero a sangre con foto + panel mint
13. Quitar cajas de las tarjetas de filosofía → columnas de texto sobre blanco
14. Geometría sagrada en tarjetas y footer
15. Instagram reubicado

**Fase 4 — Imagen**
16. Fondos y símbolos con Higgsfield
17. Integrar y comprobar contraste sobre las nuevas texturas

**Fase 5 — Entrega**
18. Montar variantes A (todo italic) y B (mixta) como dos previews
19. Contraste WCAG AA sobre la paleta nueva — el bronce `#4D3B16` sobre mint `#BEDDCB` hay que medirlo
20. Responsive: los títulos al doble se rompen en móvil si no se recalibra el `clamp`
21. Email a Diana con las dos URLs y las tres preguntas abiertas (§7)

---

## 7. Decisiones pendientes

1. **Punto 6 — ¿a qué tipografía?** Recomiendo Alegreya. Aplicarlo a Balmoral rompe el punto 3. Hay que explicárselo a Diana; no es obvio y ella no tiene por qué saberlo.
2. **La cabecera-peine.** Es el gesto más arriesgado y el más memorable del PDF. En web hay que resolver cómo se comporta en móvil y si el claim sigue legible dentro de la silueta. ¿Se adopta, se adapta, o se deja?
3. **Fotografía real.** El PDF depende de fotografía fuerte. Sin fotos de Diana, la web mejora pero no llega a la referencia. Vale la pena pedirle una selección.
4. **Copy del hero.** El PDF prueba dos claims: "Rinde culto a tu cabello" (pág. 1) y "esculpimos tu Cabello" (pág. 2, el actual). ¿Cuál se queda?
5. **Fresha.** Diana dice que no se ha registrado, que prefería dejar la web bien primero. El botón "Reserva tu cita" del PDF no lleva a ningún sitio todavía. De momento se mantiene el ancla a horarios/contacto.

---

## 8. Riesgos

| Riesgo | Mitigación |
|---|---|
| El ensanchado al 130% deforma el script | **Riesgo confirmado** en `assets/joins_proof.png` fila 3: engorda los verticales. Enseñar 100/115/130 a Diana antes de fijar |
| Italic en todo el cuerpo daña la legibilidad | Variante B ya prevista; decide Diana sobre la web real |
| Títulos al doble desbordan en móvil | Recalibrar `clamp()` con mínimos y `vw` distintos, no solo subir el máximo |
| El bronce oscuro sobre mint puede no pasar AA | Medir; si falla, oscurecer el bronce solo en texto pequeño |
| `styles_good.css` duplica 691 líneas y ya diverge | Decidir cuál es el bueno y borrar el otro antes de empezar Fase 2 |

---

## 9. Ficheros que se tocan

```
assets/
  balmoral-a9.woff2            NUEVO  — kern corregido
  balmoral-a9-wide.woff2       NUEVO  — ensanchado 130%
  alegreya/*.woff2             NUEVO  — convertidos de los .ttf recibidos
  bg-hero.webp                 NUEVO  — Higgsfield
  bg-texture.webp              NUEVO  — Higgsfield
  symbols/*.svg                NUEVO  — geometría sagrada ×5
css/
  styles.css                   REESCRITURA MAYOR
  styles_good.css              A RESOLVER — duplicado divergente
index.html                     estructura: hero, filosofía, footer, Instagram
js/i18n.js                     sin cambios salvo copy nuevo del hero
DIANA_DESIGN_SYSTEM.md         actualizar paleta y tipografía a la v2
```

---

*Preparado para Tal · pendiente de aprobación antes de Fase 1*
