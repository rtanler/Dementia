# Mascot Update — Chapters 3-15 (Rollout Completion)

**Project:** Understanding Dementia Textbook
**Date:** 2026-04-10
**Feature:** Tokie mascot voice integration into chapter content
**Status:** Completed — Tokie rollout is now at 15/15 chapters
**Files modified:**

- `docs/chapters/03-types-of-dementia/index.md`
- `docs/chapters/04-neuroscience-neurodegeneration/index.md`
- `docs/chapters/05-signs-symptoms-recognition/index.md`
- `docs/chapters/06-dementia-stages/index.md`
- `docs/chapters/07-managing-behaviors/index.md`
- `docs/chapters/08-diagnosis-assessment/index.md`
- `docs/chapters/09-medical-treatments/index.md`
- `docs/chapters/10-therapeutic-interventions/index.md`
- `docs/chapters/11-risk-prevention/index.md`
- `docs/chapters/12-daily-living-caregiving/index.md`
- `docs/chapters/13-communication-techniques/index.md`
- `docs/chapters/14-safety-home-modifications/index.md`
- `docs/chapters/15-legal-financial-support/index.md`

---

## Goal

Complete the Tokie mascot voice rollout across the remaining 13 chapters of the
textbook. Chapters 1 and 2 were done manually and served as the voice template.
The goal for chapters 3-15 was to preserve the same warm, compassionate, first-
person Tokie voice across every chapter so the reader feels a single consistent
companion guiding them through the whole book.

## Approach: Parallel subagents

The rollout was parallelized across **4 general-purpose subagents**, each
handling a batch of 3-4 chapters:

- **Agent 1** → chapters 3, 4, 5
- **Agent 2** → chapters 6, 7, 8
- **Agent 3** → chapters 9, 10, 11
- **Agent 4** → chapters 12, 13, 14, 15

Each agent received an identical prompt template containing:

- The full Tokie spec (voice rules, restraint rules, format)
- Explicit file paths to chapters 1 and 2 as voice references
- The exact admonition markdown format with image filenames and alt text
- Chapter-specific guidance (emotional arc hints, natural admonition-type fits)
- Placement rules (no back-to-back, welcome after H1, celebration at file end)
- A "do NOT touch" list (iframes, details blocks, tables, YAML, existing
  non-mascot admonitions, prose rewrites)
- Workflow: read → plan → edit → verify
- Required report format

Agents ran **in parallel** (all four launched in the same message), which cut
the wall-clock time dramatically vs. sequential execution.

## Chapter-specific decisions (per agent reports)

### Chapter 3 — Types of Dementia
5 admonitions: welcome (L11), thinking "The Big Picture" (L143), encourage "A
Lot of Names in One Chapter" (L372), tip (L639), celebration "Three Chapters
Down!" (L708). Encourage placed mid-chapter because the long parade of
dementia types is the overload point.

### Chapter 4 — Neuroscience of Neurodegeneration
5 admonitions: welcome (L11), thinking "Three Troublemakers" (L56), encourage
"You're Doing the Hard Part" (L364) before Rare Tauopathies, tip "A Reason for
Hope" (L577), celebration "You Tackled the Science!" (L617). Encourage placed
just before the hardest section so readers enter it with support.

### Chapter 5 — Signs and Symptoms Recognition
5 admonitions: welcome (L11), thinking "It's the Pattern, Not the Moment"
(L190) reinforcing Chapter 1's warning, tip "Tokie's Tip for Tough
Conversations" (L327), encourage "Hold On to This About MCI" (L884),
celebration (L982). Welcome explicitly names that this is the chapter people
arrive at in a state of worry and sets a grounding tone.

### Chapter 6 — Dementia Stages
5 admonitions: welcome (L11), thinking "Hold This Thought" (L63) reframing
personality changes as biology not choice, encourage "Take a Breath With Me"
(L439) placed BEFORE Late-Stage (not after) so readers enter the heaviest
section with support, warning "Don't Miss These" (L726) flagging treatable
emergencies, celebration "You Made It Through" (L849).

### Chapter 7 — Managing Behaviors
5 admonitions: welcome (L11) validating stressed caregivers, encourage "This
Is Not Your Fault" (L56) right after the "behaviors are symptoms" principle,
warning "Wandering Is a True Safety Issue" (L176), tip "A Small Shift That
Helps a Lot" (L748) — "answer the feeling, not the question", celebration
"You Did Something Hard" (L1277) stressing respite.

### Chapter 8 — Diagnosis and Assessment
5 admonitions: welcome (L11) framing the chapter as "pulling back the curtain,"
tip "Prepare Before the Appointment" (L80) with concrete pre-visit advice,
thinking "What These Tests Really Show" (L199) reframing cognitive tests as
pattern-finding not judgment, encourage "A Reason for Real Hope" (L588) before
Laboratory Tests emphasizing reversible mimics, celebration (L1094). The
tip/encourage pair brackets the anxious middle with optimism.

### Chapter 9 — Medical Treatments
5 admonitions: welcome (L11), thinking "Slow, Not Cure" (L81) with the "six
extra months of conversation" reframe, tip (L394) practical medication
management, warning "Please Read This Part Carefully" (L699) on anticholinergic
OTC products (Benadryl PM) canceling cholinesterase inhibitors — highest-
leverage warning because well-meaning caregivers can cause real harm,
celebration "You Made It Through the Pharmacy" (L968).

### Chapter 10 — Therapeutic Interventions
5 admonitions: welcome (L11) as explicit relief after the medication chapter,
thinking "Let That Sink In" (L78) on CST matching cholinesterase inhibitors,
tip "Build One Playlist This Week" (L467) with one concrete assignment,
encourage "You Really Can Do This" (L1445) giving permission to pick one
thing, celebration "Look at Your Toolkit Now!" (L1555). Chapter 10's heading
is `## Introduction` not `## Summary`, so welcome placed between H1 and
Introduction.

### Chapter 11 — Risk Prevention
5 admonitions: welcome (L11) deliberately non-preachy, thinking "The Part I
Want You to Remember" (L262) on the 40% modifiable-risk insight with honest
caveat about genes and luck, tip "If You Only Do One Thing" (L637) on walking
(avoided Mediterranean diet to dodge diet-book tone), encourage "You're Not
Behind" (L1193) releasing guilt, celebration "That Was Hopeful, Wasn't It?"
(L1314).

### Chapter 12 — Daily Living and Caregiving
5 admonitions: welcome (L11) orienting survival-mode caregivers, tip (L117)
anchoring the "do with, not for" principle, warning (L336) against forcing a
bath during resistance, encourage (L1472) addressing caregiver feelings during
incontinence care, celebration (L2037) acknowledging the chapter's length and
weight.

### Chapter 13 — Communication Techniques
5 admonitions: welcome (L11) framing as "staying in relationship," tip (L291)
concrete phrases to borrow, thinking (L553) on validation vs. being right,
encourage (L1071) for "when they don't know your name," celebration (L1325).

### Chapter 14 — Safety and Home Modifications
5 admonitions: welcome (L11) "don't do everything at once" framing, tip (L336)
"walk through the house on your knees" perspective trick, warning (L938) on
stove safety, thinking (L1707) on the insight that safety ≠ restriction —
good design *expands* what a person can do, celebration (L1945) setting up
"the last chapter."

### Chapter 15 — Legal, Financial, and Support Resources (FINAL CHAPTER)
5 admonitions: welcome (L11) acknowledging this is the chapter people want to
skip, encourage (L33) "scary but doable," tip (L339) "do this while you still
can" timing, warning (L634) "please don't DIY" the Medicaid look-back,
**celebration at L3122 = book-wide sendoff**:

- Explicitly celebrates finishing the whole 15-chapter book
- Recaps the arc at a high level
- Tells the reader to pick ONE small thing to act on next
- Points at Alzheimer's Association 24/7 helpline and Area Agency on Aging
- Names the grief and hardness of caregiving directly
- Signs off "With love, Tokie"

## Verification

A post-rollout verification scan confirmed:

```
03-types-of-dementia              total=5 welcome=1 celebration=1
04-neuroscience-neurodegeneration total=5 welcome=1 celebration=1
05-signs-symptoms-recognition     total=5 welcome=1 celebration=1
06-dementia-stages                total=5 welcome=1 celebration=1
07-managing-behaviors             total=5 welcome=1 celebration=1
08-diagnosis-assessment           total=5 welcome=1 celebration=1
09-medical-treatments             total=5 welcome=1 celebration=1
10-therapeutic-interventions      total=5 welcome=1 celebration=1
11-risk-prevention                total=5 welcome=1 celebration=1
12-daily-living-caregiving        total=5 welcome=1 celebration=1
13-communication-techniques       total=5 welcome=1 celebration=1
14-safety-home-modifications      total=5 welcome=1 celebration=1
15-legal-financial-support        total=5 welcome=1 celebration=1
```

- ✅ All 13 chapters have exactly 5 mascot admonitions
- ✅ Every chapter has exactly one `mascot-welcome` at line 11 (directly
  after the H1, before the first `##` heading)
- ✅ Every chapter has exactly one `mascot-celebration` at or near the end
- ✅ No back-to-back mascot admonitions anywhere (minimum spacing was 22
  lines in Chapter 15 welcome→encourage, and that pair has a heading plus
  a full intro paragraph between them)
- ✅ No existing iframes, `<details>` blocks, tables, code blocks, YAML
  frontmatter, or existing `!!! note`/`!!! tip`/`!!! warning` sidebars were
  modified
- ✅ No existing prose was rewritten — only admonitions inserted

## Restraint budget decisions

All 13 chapters landed at **5 admonitions** rather than 6. Rationale (from
agent reports):

- Chapters 3-5 had existing `!!! note`/`!!! tip`/`!!! warning`/`!!! example`
  sidebars contributing to sidebar texture; adding 6 mascot admonitions on
  top risked the "wallpaper" effect CLAUDE.md warns against.
- Chapters 6-8 each have emotionally heavy stretches where fewer, better-
  placed callouts hit harder than more frequent ones.
- Chapters 9-15 mostly had zero pre-existing admonitions, but 5 was still
  the right ceiling — agents deliberately chose restraint over volume.

This means the book ended up with **5 admonitions × 13 chapters + 6
(Chapter 1) + 5 (Chapter 2) = 76 total Tokie admonitions across 15 chapters**.

## Run metrics

- **Calendar time:** ~1,399 seconds (≈23 minutes) wall-clock from start of
  agent launch to final verification, with all four agents running in
  parallel. (Sequential execution of the same 13 chapters would have taken
  roughly 4× longer.)
- **Total agent tokens:** 4 subagents reported the following usage:
  - Agent 1 (ch 3-5): 123,405 tokens / 27 tool uses / 271s
  - Agent 2 (ch 6-8): 138,022 tokens / 34 tool uses / 277s
  - Agent 3 (ch 9-11): 136,489 tokens / 35 tool uses / 283s
  - Agent 4 (ch 12-15): 197,439 tokens / 48 tool uses / 389s
  - **Subagent total: ~595,355 tokens / 144 tool uses**
- Plus main-conversation orchestration tokens (prompt authoring, verification,
  this log) — not directly introspectable; check `/cost` for the precise
  total across the whole session.

## Trade-offs and notes

- **Voice consistency across agents:** The risk with parallel agents was
  that Tokie would drift between batches. This was mitigated by giving
  every agent identical CLAUDE.md context, explicit references to chapters
  1 and 2 as voice templates, and the same prompt template. Post-hoc
  review should confirm voice cohesion on a full book read-through.
- **Chapter 10's unusual structure:** Chapter 10 uses `## Introduction`
  instead of `## Summary`, which the agent handled correctly by treating
  it as the semantic equivalent for welcome placement.
- **Chapter 15's celebration:** Intentionally written as a book-wide
  farewell, not just an end-of-chapter wrap. This is the one admonition
  that deviates from the template-driven structure of the other 12 in
  this batch, and it was explicitly called out in the agent's prompt.

## Next steps

1. **Full book voice pass** — read all 15 chapters end to end with the
   Tokie admonitions in place and flag any paragraphs that create voice
   whiplash with an adjacent callout. Rewrite those paragraphs.
2. **Local preview via `mkdocs serve`** — confirm all 76 mascot admonitions
   render correctly with the Tokie images and custom admonition CSS.
3. **Deploy** — `mkdocs gh-deploy` once the voice pass is approved.
4. **Cross-reference check** — consider whether any of the "next chapter
   preview" lines in the Tokie callouts reference concepts or chapter
   numbers that later edits might invalidate.
5. **Chapter 15 sendoff review** — give the book-wide farewell an extra
   editorial pass since it's the reader's last impression of Tokie.
