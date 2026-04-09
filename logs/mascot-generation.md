# Tokie Mascot Generation Log

**Project:** Understanding Dementia Textbook
**Date:** 2026-04-09
**Feature:** Learning Mascot (Pedagogical Agent)
**Status:** Completed

---

## Character Design

- **Name:** Tokie
- **Species:** Abstract kawaii cube character
- **Art Style:** 3D rendered kawaii/cute, soft lighting, gentle shadows
- **Appearance:** Small, rounded pink cube with soft edges and glossy sparkly surface. Large expressive brown eyes, tiny happy mouth, rosy cheeks. Pink flower on top-left of head, thin green antenna with glowing green orb on top-right. Small pink bow on front. Stubby pink arms and legs.
- **Existing Image:** `docs/img/tokie.png` (used as site logo in header)

## What Was Done

### 1. Image Prompt Generation

Created `docs/img/mascot/mascot-prompts.md` with 7 fully self-contained AI image prompts, each including the complete base character description so they can be copied independently into any AI image generator.

| # | Pose | Filename | Purpose |
|---|------|----------|---------|
| 1 | Neutral | `neutral.png` | General sidebars, default |
| 2 | Welcome | `welcome.png` | Chapter openings |
| 3 | Thinking | `thinking.png` | Key concepts |
| 4 | Tip | `tip.png` | Tips and hints |
| 5 | Warning | `warning.png` | Common mistakes, caution |
| 6 | Encouraging | `encouraging.png` | Difficult content |
| 7 | Celebration | `celebration.png` | Achievements, chapter completion |

User edited the prompts file to remove some boilerplate from pose 1 (neutral) and add pose-specific labels to each prompt (e.g., "Please generate a new welcome pose for Tokie").

### 2. Image Generation

User generated all 7 images externally using an AI image generator and saved them to `docs/img/mascot/`. All images were 1024x1024 PNG with transparent backgrounds.

### 3. Image Padding Trim

Ran `trim-padding-from-image.py` on all 7 images to remove excess transparent padding:

| Image | Before | After |
|-------|--------|-------|
| neutral.png | 1024x1024 | 764x811 |
| welcome.png | 1024x1024 | 764x811 |
| thinking.png | 1024x1024 | 699x889 |
| tip.png | 1024x1024 | 809x827 |
| warning.png | 1024x1024 | 808x843 |
| encouraging.png | 1024x1024 | 829x828 |
| celebration.png | 1024x1024 | 883x824 |

Script location: `../claude-skills/src/image-utils/trim-padding-from-image.py`

### 4. Mascot CSS

Created `docs/css/mascot.css` adapted from the biology textbook's mascot CSS, with colors customized to match the Dementia book's theme:

- **Welcome:** Royal Blue (`#4A5FBF`) — from book's primary palette
- **Thinking:** Warm Purple (`#7B6BB8`) — from book's secondary palette
- **Tip:** Teal (`#00897b`)
- **Warning:** Red (`#c62828`)
- **Celebration:** Purple (`#6a1b9a`)
- **Encourage:** Blue (`#0277bd`)
- **Neutral:** Slate Gray (`#546e7a`)

Mascot image size set to `90px` via `--mascot-size` CSS variable, floated left in admonition body.

Registered in `mkdocs.yml`:
```yaml
extra_css:
  - css/extra.css
  - css/mascot.css
```

### 5. Mascot Test Page

Created `docs/learning-graph/mascot-test.md` with:

- Image grid showing all 7 poses at 150px with dashed blue borders for padding inspection
- All 7 admonition types rendered with Tokie images
- Each admonition contains detailed usage guidelines specific to dementia textbook content:
  - **Welcome:** Chapter openings, preview what reader will learn
  - **Thinking:** Core concepts connecting ideas (plaques/tangles, neuroplasticity), 2-3 per chapter
  - **Tip:** Practical caregiver/family advice (communication, routines, medications)
  - **Warning:** Misconceptions and safety risks (confusing aging with dementia, home hazards)
  - **Encouraging:** Emotionally difficult content (end-of-life, caregiver burnout, brain scans)
  - **Celebration:** End of chapters, summarize accomplishments, once per chapter
  - **Neutral:** General context, background, terminology notes
- Usage guidelines table with frequency recommendations
- Restraint rule: max 5-6 mascot admonitions per chapter, never back-to-back

Added to `mkdocs.yml` navigation under Learning Graph section.

## Files Created

| File | Purpose |
|------|---------|
| `docs/img/mascot/mascot-prompts.md` | AI image generation prompts for all 7 poses |
| `docs/img/mascot/neutral.png` | Neutral/default pose |
| `docs/img/mascot/welcome.png` | Welcome/introduction pose |
| `docs/img/mascot/thinking.png` | Thinking/teaching pose |
| `docs/img/mascot/tip.png` | Tip/pointing pose |
| `docs/img/mascot/warning.png` | Warning/caution pose |
| `docs/img/mascot/encouraging.png` | Encouraging pose |
| `docs/img/mascot/celebration.png` | Celebration pose |
| `docs/css/mascot.css` | Custom admonition styles for all 7 mascot types |
| `docs/learning-graph/mascot-test.md` | Mascot rendering test and usage guide |

## Files Modified

| File | Change |
|------|--------|
| `mkdocs.yml` | Added `css/mascot.css` to `extra_css`, added mascot test page to nav |

## Admonition Syntax Reference

```markdown
!!! mascot-welcome "Title"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Tokie welcomes you">
    Body text here.
```

Image `src` path must be relative to the rendered page URL. For chapter pages at `chapters/XX-name/index.md`, use `../../img/mascot/`. For pages at `learning-graph/mascot-test.md`, use `../../img/mascot/`.

## Next Steps

- Add Tokie mascot section to `CLAUDE.md` for consistent AI-generated content
- Begin adding mascot admonitions to chapter content
- Update `docs/feature-checklist.md` to mark Pedagogical Agent as implemented
