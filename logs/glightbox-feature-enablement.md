# GLightbox Feature Enablement Log

**Project:** Understanding Dementia Textbook
**Date:** 2026-04-09
**Feature:** Image Zoom on Click (GLightbox)
**Status:** Completed

---

## What Was Done

### 1. Package Verification
- Confirmed `mkdocs-glightbox` (v0.5.2) was already installed in the conda `mkdocs` environment
- No additional `pip install` required

### 2. Plugin Configuration
Added the `glightbox` plugin to `mkdocs.yml` under the `plugins:` section:

```yaml
plugins:
  - glightbox:
      touchNavigation: true
      loop: false
      effect: zoom
      slide_effect: slide
      width: 100%
      height: auto
      zoomable: true
      draggable: true
      auto_caption: false
      caption_position: bottom
```

### 3. Feature Checklist Updated
- Updated `docs/feature-checklist.md` to mark GLightbox as `:white_check_mark:`

## Configuration Options Chosen

| Option | Value | Reason |
|--------|-------|--------|
| `touchNavigation` | `true` | Mobile-friendly swipe navigation |
| `loop` | `false` | No looping through images |
| `effect` | `zoom` | Smooth zoom-in animation |
| `slide_effect` | `slide` | Slide transition between images |
| `width` | `100%` | Full-width display |
| `height` | `auto` | Maintain aspect ratio |
| `zoomable` | `true` | Allow further zoom within lightbox |
| `draggable` | `true` | Drag to pan zoomed images |
| `auto_caption` | `false` | No automatic captions from alt text |
| `caption_position` | `bottom` | Captions below image if enabled |

## Usage Notes

- All images in the textbook are now automatically zoomable on click
- To exclude a specific image from zoom, add the `.off-glb` class:
  ```markdown
  ![Image](path/to/image.png){ .off-glb }
  ```
- No changes needed to existing markdown content — the plugin works globally

## Files Modified

- `mkdocs.yml` — added `glightbox` plugin configuration
- `docs/feature-checklist.md` — updated GLightbox status to implemented
