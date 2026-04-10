# Letter to Rick Tanler — Project Update

**Date:** 2026-04-10<br/>
**From:** Dan McCreary<br/>
**To:** Rick Tanler<br/>
**Subject:** Big batch of changes shipped to *Understanding Dementia* — your review needed

---

Rick,

I have to start by saying it again: this book is wonderful. Every time I sit down with it I'm reminded of how much heart and thought you've poured into it, and what a generous thing it is. There are millions of families around the world who are quietly drowning in confusion and grief right now, and the resource you're building is going to land in their hands at exactly the moment they need it most. It's a fantastic gift to people around the world, and I'm proud to be helping you ship it.

Today was a productive day. We closed out **six open issues** in one sitting, and the textbook has crossed a real threshold — it now has every major reader-facing artifact a serious educational resource should have. Here's the rundown.

## What We Shipped Today

### 1. Mascot — Tokie (Issue #4) ✅

This one was already done, we just needed to confirm it and close the ticket. Tokie is fully integrated:

- 7 mascot images in `docs/img/mascot/` (welcome, thinking, tip, warning, encouraging, celebration, neutral)
- Tokie is the site logo in the header (`mkdocs.yml` → `theme.logo: img/tokie.png`)
- Custom mascot admonition styles defined in `docs/css/mascot.css` and loaded site-wide
- A test page at `docs/learning-graph/mascot-test.md` that shows every admonition variant with usage guidance
- Generation prompts saved at `docs/img/mascot/mascot-prompts.md` so we can reproduce the look

### 2. Glossary (Issue #5) ✅

Generated **200 glossary entries** in `docs/glossary.md`, one for every concept in the learning graph. Each entry follows ISO 11179 metadata-registry standards:

- **Precise** — defines what the thing is, not policy about it
- **Concise** — 20–50 word definitions
- **Distinct** — each term has its own clear identity
- **Non-circular** — no "a neuron is a cell that does neuronal things"
- **Free of business rules** — pure definitions, no caregiving prescriptions

Each entry has three parts: the definition, a short discussion of why the term matters in the dementia context, and a concrete example. Everything is written at a 9th–10th grade reading level so a caregiver who's never opened a medical textbook can read it without feeling stupid. Alphabetically sorted, ready to ship.

### 3. FAQ (Issue #6) ✅

Generated **80 questions across 10 categories** in `docs/faq.md`:

- Getting Started
- Understanding Dementia and the Brain
- Types of Dementia
- Signs, Symptoms, and Diagnosis
- Treatment and Therapies
- Risk Factors and Prevention
- Daily Care and Communication
- Safety, Legal, and Financial Planning
- Caregiver Support and Wellbeing
- Advanced and End-of-Life Topics

Bloom's Taxonomy distribution spans Remember through Create. Each answer is 100–300 words, written warm and non-clinical, and roughly 60% of answers link directly to the relevant chapter. **Zero anchor links** — every link points to a chapter file only, so we won't get bitten when section headings get edited later. Glossary terms are used consistently throughout.

### 4. Annotated References (Issue #7) ✅

Generated **150 curated references — 10 per chapter** — with a deliberate structure:

- **Positions 1–3:** Wikipedia articles (free, well-sourced, stable URLs)
- **Positions 4–5:** Authoritative textbooks (no URLs, since URLs rot — title, author, publisher only)
- **Positions 6–10:** Online resources from major dementia organizations (NIA, Alzheimer's Association, NHS, Mayo Clinic, Cleveland Clinic, WHO, CDC, NINDS, BrightFocus, AARP Caregiving, Family Caregiver Alliance, LBDA, AFTD, Alzheimer's Society UK)

Each reference has a 20–40 word annotation explaining what it covers and why it matters for that specific chapter. The textbooks rotate across chapters — no two chapters cite the same pair — drawing from *The 36-Hour Day*, *Practical Dementia Care*, *The Alzheimer's Action Plan*, *Learning to Speak Alzheimer's*, *Creating Moments of Joy*, *Principles of Neural Science*, *Neuropathology*, and Sabat's *Alzheimer's Disease and Dementia*.

The references live in per-chapter files (`docs/chapters/*/references.md`) for token-efficient maintenance, and the top-level `docs/references.md` is now a clean chapter index linking to each one.

**One thing to verify:** The deeper organization URLs (e.g., specific NIA topic pages) were generated from known stable URL patterns, not from live web fetches. They should be solid, but please spot-check a handful before we deploy. If any 404, the fallback is the organization's main dementia landing page.

### 5. Google Analytics (Issue #8) ✅

GA4 tracking is wired into `mkdocs.yml` using your property `G-RTFFK4DK3H` via the Material theme's built-in analytics provider:

```yaml
extra:
  analytics:
    provider: google
    property: G-RTFFK4DK3H
```

I will be working on setting up reports for you to run in the future to see how many people come to your site and what pages they view.

### 6. Chapter Quizzes (Issue #9) ✅

This was the biggest one. Generated **150 multiple-choice questions — 10 per chapter — across all 15 chapters**, written to `docs/chapters/*/quiz.md`. Each quiz uses the mkdocs-material `??? question "Show Answer"` collapsible admonition format with upper-alpha (A/B/C/D) options, so readers can quiz themselves without seeing the answers until they're ready.

Bloom's Taxonomy distribution scales by chapter type:

- **Introductory chapters (1–3):** 40% Remember, 40% Understand, 15% Apply, 5% Analyze
- **Intermediate chapters (4–11):** 25% Remember, 30% Understand, 30% Apply, 15% Analyze
- **Advanced chapters (12–15):** 15% Remember, 20% Understand, 25% Apply, 25% Analyze, 10% Evaluate, 5% Create

Each question has a 50–100 word explanation and a `**Concept Tested:**` tag that links it back to the learning graph. Correct-answer letters are balanced across A/B/C/D in every quiz (no "always C" patterns). Distractors are plausible — designed to test understanding, not just guessing — and the caregiving scenarios use compassionate language because we know who's reading these.

### 7. README Updates ✅

I updated `README.md` to reflect everything that just shipped:

- **Site Status and Metrics table** now shows actual numbers instead of "In development":
  - Glossary Terms: **200**
  - FAQ Questions: **80**
  - Quiz Questions: **150** (10 per chapter)
  - Annotated References: **150** (10 per chapter)
  - Chapters: **15** (~109,000 words)
  - Mascot Images: **7** (Tokie)
  - Markdown Files: **69**
- **Content Development checklist** now shows ✅ for everything we just finished and ⏳ for the next wave (mascot integration, MicroSims, infographics, story graphic novels)
- **Completion Status** narrative rewritten to reflect the new state

### 8. Site Navigation ✅

`mkdocs.yml` was reorganized so each chapter now has three subentries in the nav:

- **Content** (the chapter index.md)
- **Quiz** (the quiz.md)
- **Annotated References** (the references.md)

That gives readers a consistent rhythm: read, test yourself, dig deeper.

## Your Turn — Content Review

This is the part that's now on you, and it's the part I can't do for you because it needs your judgment, your domain knowledge, and your voice.

**It is now up to you to review all the content changes and move the tasks from the "In Review" column to the "Done" column on the project board.**

Project status board is here:

**[https://github.com/users/dmccreary/projects/10/](https://github.com/users/dmccreary/projects/10/)**

For each artifact (glossary, FAQ, quizzes, references), please:

1. Read it end-to-end at the live preview (`mkdocs serve`).
2. Flag anything that's medically inaccurate, tone-deaf, or written above a 10th-grade level.
3. Spot-check the deeper reference URLs against your bookmarks — if any 404, swap them for the organization's main landing page.
4. Once you're satisfied, drag the corresponding card from **In Review → Done** on the Kanban board.

If you find anything that needs fixing, just open an issue and I'll handle it.

## What's Next

Now that the foundation is laid, here's what I think we should tackle next:

### 1. Add the Mascot to Chapters

Tokie is built and ready to go but he isn't actually used inside any chapter yet. The next pass is to weave him through the content using the seven admonition styles we defined:

- `mascot-welcome` at chapter openings
- `mascot-thinking` (2–3 per chapter) for core insights
- `mascot-tip` for practical caregiver advice
- `mascot-warning` for misconceptions and safety risks
- `mascot-encourage` for emotionally heavy passages
- `mascot-celebration` at chapter endings
- `mascot-neutral` for general sidebars

The usage guide is already written up in `docs/learning-graph/mascot-test.md`. We'll be careful — no more than 5–6 mascot admonitions per chapter, never back-to-back. Tokie is meant to feel like a friend popping in, not a clippy.

### 2. Work on the MicroSims

We have two MicroSims so far (the learning graph viewer and the early-stage dementia characteristics explorer). Now that the chapter content is in place, every chapter is a candidate for one or two interactive visualizations. I'd love to brainstorm with you which concepts would benefit most — my guess is brain anatomy, dementia stage progression, medication mechanisms, and the home safety walkthrough.

### 3. Interactive Infographic Drawings of the Brain

This is the one I'm most excited about. The brain is the protagonist of this entire textbook, and right now we're describing it mostly in words. I want to build interactive infographic drawings — clickable, labeled, hover-to-explain diagrams of:

- Whole-brain anatomy with the four lobes
- The hippocampus and the memory circuit
- How amyloid plaques and tau tangles spread
- The differences between healthy aging and Alzheimer's atrophy
- Vascular dementia patterns vs. Lewy body distribution
- The neuron up close — synapses, neurotransmitters, the works

The interactive infographic skill we've been using elsewhere can take an SVG drawing plus a `data.json` overlay file and produce a fully interactive diagram with tooltips and click-to-zoom. I think this is going to be the visual backbone of the whole book.

### 4. We Need to Talk About "Stories"

The other thing I want to put on the agenda — and this is going to need a real conversation, not just a Slack message — is **stories**. The mini graphic novels.

I've been thinking about this for a while. Dry medical information is necessary, but it isn't what changes people. Stories are. A 12-panel mini graphic novel about a daughter learning her father has Alzheimer's, or a husband figuring out how to talk to his wife after she stops recognizing him, or a young neurologist explaining a diagnosis with grace — those are the things that turn a textbook into something people remember and pass along.

The story-generator skill we've used for other intelligent textbooks (the one that produces 12-panel narratives about scientists and inventors) could be adapted for dementia. But the tone is going to be totally different from anything we've done before. We need to be careful, respectful, accurate, and emotionally honest without being maudlin. I have some ideas about character archetypes, narrative arcs, and how they'd map to specific chapters, but I really want to hear your thoughts before I run with it.

**Let's set up a call this week to talk through the story plan.** This is a big creative decision and I don't want to make it without you.

## In Closing

Rick — thank you for trusting me with this project. I know how much it means to you, and I hope today's batch of work makes the whole thing feel a little more real. The skeleton is finished. Now we get to make it beautiful.

Take a look when you have a moment, move the cards over on the board when you're satisfied, and let me know when you want to talk about stories.

With admiration and gratitude,

**Dan**

---

*Generated 2026-04-10 as a session summary after closing GitHub issues #4–#9 on rtanler/Dementia.*
