# Mascot Update — Chapter 1

**Project:** Understanding Dementia Textbook
**Date:** 2026-04-10
**Feature:** Tokie mascot voice integration into chapter content
**Status:** Completed (Chapter 1 of 15)
**Files modified:**

- `docs/chapters/01-intro-to-dementia/index.md` (content)
- `CLAUDE.md` (project guidance — added "Tokie Mascot Voice and Tone" section)

---

## Goal

Begin rolling out the Tokie pedagogical mascot into chapter content. Chapter 1
is the pilot. Subsequent chapters will follow the same template once this one
is reviewed and approved.

The textbook is now narrated by **Tokie**, a fun, lovable kawaii cube mascot
(see `docs/learning-graph/mascot-test.md` for the reference page and the seven
custom mascot admonition styles). The goal of this update is to insert mascot
admonitions at the right structural and emotional moments in each chapter so
that readers feel a single, consistent companion guiding them through difficult
material — not a clinical narrator interrupted by a friendly cartoon.

## Project-level work (CLAUDE.md)

Before touching chapter content, added a new **Tokie Mascot Voice and Tone**
section to `CLAUDE.md` under "Development Principles." This section is the
durable spec that future chapter updates (and future Claude sessions) will
follow. It covers:

- **Voice characteristics** — warm, compassionate, plain-language,
  encouraging, honest-but-hopeful, conversational
- **Tone words to favor / avoid** — explicit lists (favor "caring, gentle,
  hopeful"; avoid "clinical, alarming, cutesy")
- **The 7 mascot admonition types** with use-case + frequency table
- **Restraint rules** — maximum 5-6 admonitions per chapter, never back-to-back,
  exactly one `mascot-welcome` at the start and one `mascot-celebration` at
  the end of every chapter `index.md`
- **Voice consistency check** — surrounding prose should sound like the same
  person who just spoke in the mascot callout
- **Example pattern** for chapter openings showing how the welcome admonition
  should flow into the first paragraph

The Content Generation bullet list also got a new entry pointing readers to
the new section so anyone scanning the principles will see the requirement.

## Chapter 1 admonition plan

Per the CLAUDE.md restraint rules, the budget is 5-6 mascot admonitions per
chapter. Picked 6, well-spaced, with substantial prose between each pair so
none are back-to-back.

| # | Type                | Location                                                        | Purpose                                                              |
|---|---------------------|-----------------------------------------------------------------|----------------------------------------------------------------------|
| 1 | `mascot-welcome`    | After H1, before "## Summary"                                   | Warm chapter opening; previews the territory; sets the Tokie tone    |
| 2 | `mascot-thinking`   | End of "What Is Cognition?" section                             | Key insight: cognition is a *team* of abilities working together     |
| 3 | `mascot-warning`    | Right after the Normal Aging vs. Dementia comparison table      | Don't panic over normal forgetting — pattern is what matters         |
| 4 | `mascot-tip`        | Replaced existing `!!! tip "When to Seek Medical Advice"`       | Practical, gentler guidance on when to see a doctor                  |
| 5 | `mascot-encourage`  | End of "Information Processing" section                          | Reassurance after the long catalog of cognitive abilities            |
| 6 | `mascot-celebration`| Very end of chapter, after the "Test Your Understanding" block  | Celebrates completion; hands off to Chapter 2                        |

### Spacing check

Walking through the chapter top to bottom, the prose distance between
consecutive admonitions:

- welcome → thinking: Summary, Concepts list, Prerequisites, "What Is Dementia?", brain section, "What Is Cognition?" intro and bullet list — many paragraphs
- thinking → warning: Normal Aging intro paragraph and the comparison table
- warning → tip: one closing paragraph
- tip → encourage: Memory, Attention, Language, Perception, Executive Function, Learning, and Information Processing sections — large stretch of content
- encourage → celebration: Cognitive Health, Cognitive Reserve, "Bringing It All Together," Key Takeaways, "In the next chapter…" paragraph, Test Your Understanding question block

No back-to-back admonitions; rule satisfied.

## Voice notes

All six admonitions are written in **first person from Tokie**, using
contractions ("I'm", "you'll", "we'll") and direct address ("you"). They lean
on the favored tone words from CLAUDE.md (caring, gentle, hopeful, practical,
honest-but-hopeful). Each one lands on something the reader can *do* or *hold
on to* rather than abstract abstraction:

- **Welcome** → "we'll take it one idea at a time, and I'll be here the
  whole way through"
- **Thinking** → "Keep this team metaphor in mind; it'll make a lot of what
  comes later click into place"
- **Warning** → "One forgotten name doesn't mean anything on its own. A
  steady, growing pattern is what's worth bringing to a doctor"
- **Tip** → pairs the scary "see a doctor" call to action with hope: "many
  causes of memory trouble turn out to be treatable conditions that aren't
  dementia at all. Knowing for sure beats wondering"
- **Encourage** → "If your head is spinning a little, that's completely
  normal. You don't need to memorize every term right now"
- **Celebration** → "You did it … Take a moment to be proud of yourself
  before turning the page. I'll see you in Chapter 2"

The existing `!!! note "Dementia vs. Disease"` was **left as a plain note**,
not converted to a Tokie admonition. Rationale: not all sidebars need to be
Tokie, the budget is already tight at 6/6, and that note is a quick clarifying
sidebar that serves a different rhetorical purpose than guidance.

## Decisions and trade-offs

- **Replaced the existing tip rather than adding a separate one.** The chapter
  already had `!!! tip "When to Seek Medical Advice"` in exactly the right
  spot. Adding a `mascot-tip` alongside would have created back-to-back
  admonitions and pushed the count to 7. Replacement preserves the meaning,
  upgrades the voice, and keeps the budget at 6.

- **Picked 6 admonitions, not 5.** The chapter is long and emotionally
  variable, so 6 well-spaced touchpoints felt right. Going to 7 would have
  required removing the warning, which is the most uniquely useful one for
  this audience (caregivers and patients who may panic at every misplaced
  key).

- **No `mascot-neutral` in this chapter.** Neutral is "as needed" per the
  table. The chapter already has plenty of context paragraphs and a regular
  `!!! note`, so adding neutral would have been wallpaper.

- **Did not rewrite the existing chapter prose.** The user asked to *add*
  mascot admonitions, not to rewrite the chapter. The existing prose is
  already fairly warm and uses second person, so it blends acceptably with
  Tokie's voice without surgery. If a future review finds voice whiplash
  between any callout and the surrounding paragraph, those paragraphs can
  be tuned at that point.

## Verification

- ✅ Exactly one `mascot-welcome` at chapter start
- ✅ Exactly one `mascot-celebration` at chapter end
- ✅ Total admonitions = 6 (within 5-6 maximum)
- ✅ No back-to-back admonitions (every pair has prose between them)
- ✅ All admonitions include the corresponding mascot image with
  `class="mascot-admonition-img"`
- ✅ All admonition prose written in first person from Tokie

## Next steps

1. Local preview via `mkdocs serve` to confirm the mascot admonitions render
   correctly with the Tokie images and the custom admonition CSS classes.
2. Review and approve the Chapter 1 voice as the template.
3. Roll the same 6-slot pattern out to Chapters 2-15, adapting:
   - Welcome boilerplate to each chapter's specific topic preview
   - Celebration boilerplate to each chapter's specific accomplishments
   - The middle 4 admonitions to whatever each chapter's natural emotional
     and conceptual high points are
4. After rollout is complete, do a full read-through to check voice
   consistency between callouts and surrounding prose, and rewrite any
   paragraphs that create voice whiplash with the Tokie callouts.
