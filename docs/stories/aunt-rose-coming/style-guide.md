# Visual Style Guide — "Aunt Rose Coming" (and compatible stories)

**Reference image:** `panel-06.jpeg`

This guide captures the exact visual language of the reference panel so every
other image in the story (and any future story that should match) can be
generated in the same style. Paste the **Master Style Block** below into any
image prompt — it is the portable, drop-in description of the look.

---

## Master Style Block (paste into image prompts)

**Style:** Warm painterly American contemporary realism, in the tradition of
illustrated Sunday-magazine oil paintings. Visible but refined brushwork;
soft edges; richly rendered fabric and wood textures; glowing interior
lighting. Evokes the domestic warmth of Norman Rockwell and the luminous
interiors of Thomas Kinkade, restrained and tasteful — never cartoonish,
never photographic. Gentle, tender, nostalgic emotional tone.

**Palette:** Warm muted earth tones — sage green, soft lavender and mauve,
cream, ivory, honey gold, warm walnut brown, rose pink, dusty burgundy,
pale butter yellow. No saturated primaries. No cool blues. Every color
reads as if it has been aged by afternoon sunlight.

**Lighting:** Warm golden afternoon sunlight streaming through a
lace-curtained window as the primary key, with a secondary interior lamp
adding a pool of honey-gold glow. Soft, diffuse shadows; no harsh contrast;
gentle rim light on faces and shoulders. Overall luminance feels like 3-4 PM
on a clear autumn day.

**Composition:** 16:9 landscape. Characters in the foreground, center or
slightly left. Rich storytelling background — framed family photographs,
bookshelves, potted plants, patterned upholstery, an oriental rug, a window
onto a sunlit garden. Background details rendered with slightly softer
focus than the foreground, pulling the eye to the human subjects.

**Characters:** Realistic proportions and facial features, American
mid-century-to-present-day domestic setting. Expressive warm skin tones.
Visible fabric texture (knit sweaters, cardigans, lace, linen). Natural,
unforced poses — people mid-gesture, mid-conversation, looking at each
other. Eyes alive, faces kind.

**Detail gradient:** High detail in foreground (faces, hands, tea set,
jewelry, garment fibers). Medium detail in mid-ground furniture. Softer,
slightly impressionistic detail in deep background (outside garden, distant
shelves).

**Mood words:** tender, nostalgic, domestic, serene, luminous, honest,
intergenerational, safe, dignified.

**Forbidden:** neon colors, hard digital vector lines, anime proportions,
photorealism, cold fluorescent light, blue-hour exteriors, grainy
documentary photography, cluttered graphic-novel halftones, exaggerated
perspective, chromatic aberration, film-grain overlays.

---

## Detailed Element Breakdown

### 1. Medium & Technique
- Oil-painting aesthetic with visible but refined brushwork.
- Soft edges; forms are built with color and light rather than line.
- Skin, wood, fabric, and foliage each have distinct painterly textures —
  not a uniform digital smoothness.
- The image should feel *painted*, not *rendered*.

### 2. Color Palette (reference swatches)

| Role              | Color                        | Approx. hex |
|-------------------|------------------------------|-------------|
| Primary warm      | Sage green (sweater)         | `#6B8A6A`   |
| Secondary warm    | Dusty lavender (cardigan)    | `#A898B8`   |
| Neutral light     | Cream / ivory (curtains)     | `#F1E6D2`   |
| Interior glow     | Honey gold (lamp, sunlight)  | `#D9A86A`   |
| Wood              | Warm walnut                  | `#6E4A2E`   |
| Accent            | Rose pink (flower)           | `#D68A9A`   |
| Deep accent       | Dusty burgundy               | `#7A3E3E`   |
| Exterior foliage  | Sunlit olive-green           | `#8FA062`   |

No pure whites, no pure blacks, no saturated primaries.

### 3. Lighting
- **Key light:** warm afternoon sun through a window, from camera-right.
- **Fill:** interior lamp glow, honey-gold, from camera-left-midground.
- **Shadows:** soft, low-contrast, warm-tinted; never cool or blue.
- **Highlights:** gentle rim on hair, cheekbone, fabric folds.
- **Time of day:** ~3–4 PM, clear sky.

### 4. Composition
- **Aspect ratio:** 16:9 (mandatory — pass `aspect_ratio="16:9"` to the API).
- **Subjects:** foreground, slightly left of center; turned three-quarters.
- **Background:** approximately 40–50% of the frame, richly detailed but
  softer focus. Should always include at least two "home" elements (framed
  photos, bookshelf, lamp, plant, patterned textile, window with garden
  view).
- **Negative space:** lace curtains or wallpaper can absorb negative space —
  the frame should never feel empty.

### 5. Characters
- Realistic American figures, any age.
- Clothing: soft natural fibers (knit, cotton, linen, wool). Patterns allowed
  but muted — small florals, subtle weaves, no bold graphics.
- Jewelry: pearls, small gold, heirloom pieces — never flashy.
- Poses: natural, mid-conversation, mid-gesture. Hands often visible and
  active (holding a cup, a photograph, a hand).
- Expressions: warm, readable, emotionally honest.

### 6. Speech Bubbles (when used)
- White rounded rectangles with a thin black outline (~1–2 px equivalent).
- Small pointed tail aimed at the speaker's mouth.
- Dialogue wrapped in **single quotes** — e.g. `'Mom — tell me about Rose
  while we wait.'`
- Short, conversational dialogue — 1–2 lines max per bubble.
- Placed in the **upper third** of the frame, not overlapping faces.
- Font: plain humanist sans-serif, black, comfortable reading weight.
- No more than two speech bubbles per panel.

### 7. Background Storytelling Elements
The reference panel tells a whole family history through props. Future panels
should continue this vocabulary:

- Framed family photographs on walls or shelves
- Bookshelves with warmly-bound books
- Table lamps with cream or amber shades
- Potted plants (small ferns, African violets, geraniums)
- Oriental or braided rugs
- Lace curtains softening bright windows
- Ceramic tea sets, cut-glass vases, heirloom silverware
- Views to a sunlit garden, porch, or tree-lined street

### 8. Emotional Tone
Every image should feel like a **memory being gently held**. Even panels
depicting difficulty should carry dignity and warmth — no despair, no clinical
coldness. The viewer should feel they are being invited into someone's
grandmother's living room.

### 9. Forbidden Visual Cues
- Neon / saturated color
- Cold fluorescent or blue-hour lighting
- Hard vector lines, flat digital shading
- Anime or cartoon proportions
- Photorealism or DSLR bokeh
- Film grain, VHS scanlines, chromatic aberration
- Hospital / institutional settings rendered as cold
- Modern sans-serif branding, screens, phones as focal points

---

## Prompt Template

When you write a new image prompt, use this structure:

```
Please generate a 16:9 image in [MASTER STYLE BLOCK ABOVE, condensed to
2-3 sentences] depicting [SUBJECT and ACTION]. [SETTING DETAILS — include
at least two background storytelling elements from §7]. [LIGHTING — key
light source and time of day]. [EMOTIONAL TONE — one phrase]. [SPEECH
BUBBLES if any, using single quotes, placed in the upper third].
Generate the image immediately without asking clarifying questions.
```

### Example (matches the reference panel)

> Please generate a 16:9 image in warm painterly American contemporary
> realism — soft oil-painting brushwork, muted sage-and-lavender palette,
> golden afternoon light — depicting a middle-aged daughter in a sage-green
> knit sweater sitting beside her silver-haired mother in a lavender
> cardigan on a floral-upholstered settee, a tea tray on the mother's lap.
> Behind them: framed family photographs on a bookshelf, a cream lampshade
> glowing, and a lace-curtained window onto a sunlit garden where a figure
> walks up the path. Warm afternoon sun from the right, honey-gold lamp
> fill from the left. Tender, nostalgic, intergenerational tone. Speech
> bubble upper-left from the daughter: 'Mom — tell me about Rose while we
> wait.' Speech bubble upper-right from the mother: 'Oh! Well, she was a
> pistol...' Generate the image immediately without asking clarifying
> questions.

---

## Consistency Checklist (run before finalizing any panel)

- [ ] 16:9 aspect ratio
- [ ] Painterly oil-style brushwork, no vector/digital flatness
- [ ] Warm palette only (no cool blues, no saturated primaries)
- [ ] Key light = warm window sun; secondary = interior lamp glow
- [ ] At least two background "home" elements from §7
- [ ] Characters in natural, mid-gesture poses
- [ ] Visible fabric texture on clothing
- [ ] Foreground sharp, background slightly softer
- [ ] Speech bubbles (if any) in single quotes, upper third, ≤ 2 per panel
- [ ] Emotional tone: tender, nostalgic, dignified — never cold or alarming
