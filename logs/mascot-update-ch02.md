# Mascot Update — Chapter 2

**Project:** Understanding Dementia Textbook
**Date:** 2026-04-10
**Feature:** Tokie mascot voice integration into chapter content
**Status:** Completed (Chapter 2 of 15)
**Files modified:**

- `docs/chapters/02-brain-anatomy-function/index.md`

---

## Goal

Continue the Tokie mascot rollout from Chapter 1 into Chapter 2 (Brain Anatomy
and Function). This chapter is a dense neuroscience tour — neurons, synapses,
neurotransmitters, neural networks, the four lobes, gray/white matter, the
hippocampus, neuroplasticity, and neurodegeneration — so the mascot's job here
is to give readers emotional rest stops in a chapter that has the most new
vocabulary in the book so far.

The pattern follows the durable spec captured in `CLAUDE.md` ("Tokie Mascot
Voice and Tone") and the template established in Chapter 1.

## Chapter 2 admonition plan

Per the CLAUDE.md restraint rules, the budget is 5-6 mascot admonitions per
chapter. Picked **5** for this chapter (vs. 6 in Chapter 1) — see the trade-off
notes below for the rationale.

| # | Type                 | Location                                                               | Purpose                                                                       |
|---|----------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| 1 | `mascot-welcome`     | After H1, before "## Summary" (line 11)                                | Warm chapter opening; previews neurons, synapses, lobes, hippocampus, plasticity |
| 2 | `mascot-thinking`    | End of "Neural Networks" section (line 232)                            | Key insight: 100 trillion connections — dementia pulls the *pattern* apart    |
| 3 | `mascot-encourage`   | End of "The Occipital Lobe" section, before Gray/White Matter (line 400) | Emotional rest stop after the four-lobes tour ("that's a lot of geography")  |
| 4 | `mascot-tip`         | End of the Neuroplasticity narrative, before the diagram (line 470)    | The most hopeful, actionable moment in the chapter — daily brain-health habits |
| 5 | `mascot-celebration` | Very end of chapter, after "Test Your Understanding" (line 688)        | Celebrates completion; hands off to Chapter 3                                 |

### Spacing check

Walking through the chapter top to bottom, the prose distance between
consecutive admonitions:

- welcome → thinking: Summary, Concepts list, Prerequisites, "Neurons" section,
  "Synapses" section (with diagram details block), "Neurotransmitters" section,
  and the entire "Neural Networks" section — many paragraphs and a large
  diagram block
- thinking → encourage: "Cerebral Cortex" intro section (with the four-lobes
  diagram details block), and the four lobe sections (Frontal, Temporal,
  Parietal, Occipital)
- encourage → tip: "Gray Matter and White Matter" section (with comparison
  table), "Hippocampus" section (with embedded `!!! tip "London Taxi
  Drivers"`), and the entire Neuroplasticity narrative
- tip → celebration: Neuroplasticity diagram details block, "Neurodegeneration"
  section, "Putting It All Together" section, "Key Takeaways" section,
  "Test Your Understanding" question block

No back-to-back admonitions; rule satisfied.

## Voice notes

All five admonitions are written in **first person from Tokie**, using
contractions and direct address ("I", "you", "we'll"). They build on the
"team" metaphor introduced in Chapter 1 and lean on the favored tone words
from CLAUDE.md (caring, gentle, hopeful, practical, honest-but-hopeful):

- **Welcome** → "Hi again — Tokie here!" — explicit callback to Chapter 1 so
  the reader feels continuity. Promises translation of every new term.
- **Thinking** → "Sit with this number for a second: one hundred *trillion*
  connections." — anchors a single big idea (it's the *pattern*, not the
  cells) and explicitly frames it as something they'll come back to.
- **Encourage** → "Four lobes, four sets of jobs — that's a lot of brain real
  estate to take in at once! You absolutely don't need to memorize every
  function." — gives explicit permission to *not* memorize, then re-frames
  the lobes as a tool for understanding symptom patterns.
- **Tip** → "Here's the most hopeful thing I can tell you in this whole
  chapter: your brain keeps rewiring itself for as long as you live."
  Pairs the science with a concrete daily-habit call to action.
- **Celebration** → "Look at you — you just finished a tour of the human
  brain!" Reuses the "stretch a bit, see you in the next chapter" rhythm
  from Chapter 1's celebration to reinforce the consistent companion feel.

## Decisions and trade-offs

- **5 admonitions, not 6.** Chapter 2 is long but its emotional arc is more
  uniform than Chapter 1's. Chapter 1 needed both a `warning` (don't panic
  about normal forgetting) *and* a `tip` (when to see a doctor) because it
  introduced the diagnostic-anxiety theme. Chapter 2 doesn't need a `warning`
  in the same way — it's neuroanatomy, not symptom recognition. Stretching
  to 6 would have meant inserting a `mascot-neutral` somewhere as wallpaper,
  which the CLAUDE.md restraint rules explicitly warn against.

- **Encourage placed after the four lobes, not after Neurodegeneration.**
  The neurodegeneration section is heavy material, but it's also short and
  comes right before the celebration. The four-lobes tour is where readers
  are most likely to feel overwhelmed by sheer vocabulary, so the encourage
  callout earns its keep more there.

- **Tip placed before the neuroplasticity diagram, not after.** The tip is
  a thematic continuation of the neuroplasticity prose ("your brain keeps
  rewiring itself"), so it lands more naturally as the closing emotional
  beat of the narrative section than as a postscript after the diagram.

- **Did not touch the existing `!!! note "Neuron Size and Reach"` or
  `!!! tip "The Hippocampus and London Taxi Drivers"` sidebars.** These
  serve different rhetorical purposes (fun facts), and converting them to
  Tokie callouts would have pushed the count over budget without improving
  the chapter.

- **Did not rewrite the existing chapter prose.** Same trade-off as Chapter 1
  — task is to *add* mascot admonitions, not to rewrite. The existing prose
  is already in second person and uses friendly metaphors (the tree, the
  forest paths, the cities-and-highways analogy), so it blends acceptably
  with Tokie's voice. Future voice-consistency pass can tune any whiplash
  paragraphs.

## Verification

- ✅ Exactly one `mascot-welcome` at chapter start
- ✅ Exactly one `mascot-celebration` at chapter end
- ✅ Total admonitions = 5 (within 5-6 maximum)
- ✅ No back-to-back admonitions (every pair has substantial prose between)
- ✅ All admonitions include the corresponding mascot image with
  `class="mascot-admonition-img"` and a descriptive `alt` attribute
- ✅ All admonition prose written in first person from Tokie
- ✅ Image filenames match the Chapter 1 conventions (`welcome.png`,
  `thinking.png`, `encouraging.png`, `tip.png`, `celebration.png`)

## Run metrics

- **Calendar time:** ~138 seconds (≈2 min 18 sec) from start to last edit
- **Token usage:** Not directly introspectable from inside the run. The
  dominant input cost was reading the full Chapter 2 file (~645 lines) plus
  relevant slices of Chapter 1 as a voice reference; the per-turn system
  prompt and CLAUDE.md context are also re-sent on each turn. Output was
  five admonition blocks plus the in-conversation report (~1.5K tokens).
  For exact counts, see the `/cost` slash command output for the session.

## Next steps

1. Local preview via `mkdocs serve` to confirm the mascot admonitions render
   correctly with the Tokie images and custom admonition CSS classes.
2. Review the Chapter 2 voice for whiplash with surrounding prose; tune any
   paragraphs that feel jarring next to a callout.
3. Continue the rollout to Chapters 3-15, adapting:
   - Welcome boilerplate to each chapter's specific topic preview
   - Celebration boilerplate to each chapter's specific accomplishments
   - The middle 3-4 admonitions to whatever each chapter's natural emotional
     and conceptual high points are
4. After full rollout, do a book-wide read-through to ensure Tokie's voice
   feels like one consistent companion across all 15 chapters.
