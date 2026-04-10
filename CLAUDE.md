# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI-generated intelligent textbook on dementia and cognitive decline built with MkDocs Material. The project uses a learning graph architecture with 200 interconnected concepts organized into 12 taxonomy categories. Content is generated at a 9th-10th grade reading level for patients, caregivers, families, and healthcare professionals without specialized dementia training.

**Live site:** https://rtanler.github.io/Dementia/

## Environment Setup

This project uses conda for Python environment management:

```bash
# Create and activate conda environment
conda create -n mkdocs python=3.11
conda activate mkdocs

# Install dependencies
conda install -c conda-forge mkdocs mkdocs-material cairo

# Install custom MkDocs plugin
pip install -e .
```

**Important:** The `cairo` library must be installed in the conda environment for social card generation. Installing via Homebrew alone is not sufficient - it must be installed within the conda environment.

## Common Commands

### Local Development

```bash
# Serve locally with live reload at http://localhost:8000/Dementia/
mkdocs serve

# Build the site (output to site/ directory)
mkdocs build

# Deploy to GitHub Pages
mkdocs gh-deploy --force
```

### With Conda

```bash
# If not in activated conda environment, prefix commands with:
conda run -n mkdocs mkdocs serve
conda run -n mkdocs mkdocs build
conda run -n mkdocs mkdocs gh-deploy
```

### Learning Graph Workflow

When the learning graph CSV is modified, run these scripts in sequence:

```bash
cd docs/learning-graph

# 1. Validate DAG structure (no circular dependencies)
python validate-learning-graph.py

# 2. Add taxonomy IDs to concepts
python add-taxonomy.py

# 3. Convert CSV to vis-network JSON format
python csv-to-json.py

# 4. Analyze graph structure and quality metrics
python analyze-graph.py

# 5. Generate taxonomy distribution report
python taxonomy-distribution.py
```

Or use the automated script:
```bash
cd docs/learning-graph
./validate-learning-graph.sh
```

## Architecture

### Learning Graph System

The core architecture is built around a concept dependency graph:

- **Source of truth:** `docs/learning-graph/learning-graph.csv` - 200 concepts with dependencies and taxonomy IDs
- **Format:** ConceptID, ConceptLabel, Dependencies (pipe-separated), TaxonomyID
- **Taxonomy categories:** 12 categories (FOUND, NEURO, DTYPE, SYMPTOM, DIAG, TREAT, RISK, DAILY, COMM, SAFETY, LEGAL, SUPPORT)
- **Graph properties:** Directed Acyclic Graph (DAG) validated for no circular dependencies
- **Visualization:** vis-network library renders interactive graph viewer at `docs/sims/graph-viewer/`

The learning graph drives:
1. Chapter structure and concept sequencing
2. Prerequisite relationships between concepts
3. Interactive graph visualization
4. Glossary term selection
5. Quiz question alignment

### MkDocs Configuration

- **Custom plugin:** `social_override` plugin in `plugins/` directory for per-page social media cards
- **Theme customization:** Custom color theme defined in `docs/css/extra.css` based on cover image analysis
- **Color system:** Primary Blues (Sky Blue → Royal Blue → Navy Blue), Secondary Purples, Accent colors (Sunshine Yellow, Rose Pink, Coral)
- **Extensions:** Full PyMdown Extensions suite, MathJax for equations, Mermaid diagrams

### Content Structure

```
docs/
├── chapters/          # 15 chapters following learning graph dependencies
├── sims/              # Interactive MicroSims (HTML/JS/CSS)
│   ├── graph-viewer/  # Main learning graph visualization
│   └── early-stage-characteristics/  # Concept explorer
├── learning-graph/    # Graph data, scripts, analysis, documentation
├── css/               # Custom theme (extra.css with brand colors)
└── [glossary, faq, references, course-description].md
```

### MicroSims

Interactive educational visualizations using:
- **vis-network:** Network graph visualization (learning-graph-viewer)
- **Standard structure:** Each MicroSim has main.html, index.md, and optional CSS/JS
- **Integration:** Embedded in markdown via iframe or standalone HTML

#### MicroSim quizzes (FIXED)

**Do NOT embed quiz logic inside a MicroSim's `main.html`** with one specific
exception. Quizzes belong in markdown — the standard place is the sim's own
`index.md` (or the chapter `quiz.md`), authored using the
`/quiz-generator` skill template (see below). This keeps MicroSims focused on
visualization, keeps quiz content searchable and editable as plain markdown,
keeps iframe heights small, and avoids duplicating the
`mkdocs-material` question-admonition styling work that the chapter quizzes
already do well.

**The one exception: interactive infographic overlays** built on
`docs/sims/shared-libs/diagram.js`. Their quiz mode reuses the same labeled
image (e.g., "click the marker that matches this hint") — the quiz is
*literally the visualization*, so it cannot be moved out without losing the
educational value. Sims using `diagram.js` may keep their built-in
Explore/Quiz toggle.

**Standard quiz format** (matches the `quiz-generator` skill template — uses
the mkdocs-material question admonition with upper-alpha answer choices):

```markdown
## Check Your Understanding

#### 1. [Question text ending with ?]

<div class="upper-alpha" markdown>
1. [Option A text]
2. [Option B text]
3. [Option C text]
4. [Option D text]
</div>

??? question "Show Answer"
    The correct answer is **[LETTER]**. [Explanation, 50-100 words]

    **Concept Tested:** [Concept Name]

---

#### 2. [Next question…]
```

**Question visibility rule (FIXED):** The question stem and answer choices
must always be **fully visible as plain markdown** — never wrapped in a
collapsible admonition. Only the *answer/explanation* may be hidden in a
collapsed `??? question "Show Answer"` block. Specifically:

- ✅ **Correct:** `#### 1. Question text?` followed by an `<div>` of options
  followed by `??? question "Show Answer"` (collapsed by default)
- ❌ **Wrong:** `???+ question "Test Your Understanding"` wrapping the
  questions themselves. The `???+` syntax means "expanded by default," but
  it still puts the questions inside an admonition — and there is no reason
  to hide a question. Hiding questions makes them harder to scan, harder to
  copy, and pointless because the reader has to click to see what to think
  about.
- ❌ **Wrong:** Any use of `???` or `???+` around the question stem.
- ❌ **Wrong:** Putting reflection questions, comprehension prompts, or
  "test your understanding" sections inside a collapsible admonition. Use
  a plain `## Heading` and a numbered list instead.

Aim for 3-5 questions per MicroSim `index.md` (fewer than a chapter quiz),
distributed across Bloom's levels appropriate to the sim's learning
objective. Place the quiz section near the bottom of the sim's `index.md`,
after the "How to Use" / "Overview" sections.

#### MicroSim iframe rules (FIXED)

These rules apply to **every** `<iframe>` that embeds a MicroSim, in both
chapter `index.md` files and the sim's own `index.md`:

1. **Always include `scrolling="no"`.** MicroSims are designed to render at a
   fixed height with no internal scrollbars. Without `scrolling="no"`, browsers
   show clipped content with an inner scrollbar instead of forcing the iframe
   height to grow. Every iframe must have this attribute, no exceptions.

2. **Iframe height must accommodate ALL the content of the MicroSim**, including
   any quiz, controls, or expanded panels at the bottom — not just the
   visualization area. Use the `microsim-iframe-tester` skill to measure the
   actual content height with Playwright before setting an iframe height. The
   suggested height it returns already includes a small safety margin.

3. **When the MicroSim is updated** in a way that adds or removes content
   (e.g., adding a quiz, expanding controls), re-run the iframe tester and
   update **both** the sim's own `index.md` **and** every chapter `index.md`
   that embeds the same sim. The chapter and sim heights must stay in sync.

4. **Standard iframe template** for embedding a MicroSim in a chapter:

   ```html
   <iframe src="../../sims/{sim-folder-name}/main.html"
           width="100%"
           height="{measured-height}px"
           scrolling="no"></iframe>
   ```

   Always link to `main.html` (the runnable sim), never `index.html` (which
   is the markdown wrapper and would 404 inside an iframe).

## Key Files and Their Roles

### Configuration
- `mkdocs.yml` - Site navigation, theme config, plugins, markdown extensions
- `setup.py` - Python package setup for social_override plugin
- `docs/learning-graph/color-config.json` - Taxonomy color mappings for graph visualization

### Learning Graph Core
- `docs/learning-graph/learning-graph.csv` - Source of truth for all concepts
- `docs/learning-graph/learning-graph.json` - vis-network format for graph viewer
- `docs/learning-graph/learning-graph-schema.json` - JSON schema for validation

### Documentation
- `docs/course-description.md` - Comprehensive course overview with learning objectives (Bloom's Taxonomy)
- `docs/learning-graph/color-theme.md` - Complete color theme guide and specifications
- `logs/color-theme.md` - Work log for color theme development

## Development Principles

### Content Generation
- Reading level: 9th-10th grade (Flesch-Kincaid scale)
- Medical terminology must be explained in plain language
- Follow Bloom's Taxonomy (2001 revision) for learning outcomes
- Respect concept dependencies - introduce prerequisites first
- Voice and tone must be consistent with **Tokie**, the project's pedagogical
  mascot (see "Tokie Mascot Voice and Tone" below)

### Tokie Mascot Voice and Tone

This textbook is narrated by **Tokie**, a fun, lovable pedagogical mascot who
guides readers through difficult material with warmth and care. The reference
page is `docs/learning-graph/mascot-test.md`. All chapter `index.md` files will
include Tokie admonitions, so all surrounding prose must blend seamlessly with
Tokie's voice — readers should feel one consistent companion across the whole
book, not a clinical narrator interrupted by a friendly cartoon.

#### Voice characteristics
- **Warm and approachable** — write like a knowledgeable friend, never a
  textbook or a doctor's chart. Address the reader as "you."
- **Compassionate, never alarming** — this audience includes patients,
  caregivers, and grieving families. Acknowledge difficulty; never frighten.
- **Plain language first** — introduce a medical term, then immediately
  translate it. Example: "anosognosia (lack of awareness of one's own deficits)."
- **Encouraging** — assume the reader is doing their best. Validate that the
  material is hard and reassure them that it is normal to struggle.
- **Honest but hopeful** — do not sugarcoat prognoses, but always pair hard
  facts with what the reader can *do* (a strategy, a resource, a next step).
- **Conversational rhythm** — short sentences mixed with longer ones; contractions
  are welcome ("you'll," "it's"). Avoid passive voice and hedge-y academic prose.

#### Tone words to favor
caring, gentle, steady, practical, hopeful, clear, friendly, down-to-earth,
respectful, patient.

#### Tone words to avoid
clinical, detached, alarming, condescending, jargon-heavy, breezy, cutesy,
patronizing, fear-inducing.

#### Mascot admonition types

The following custom admonitions are available (defined in
`docs/learning-graph/mascot-test.md`). Use them sparingly and intentionally:

| Admonition           | When to use                                              | Frequency           |
|----------------------|----------------------------------------------------------|---------------------|
| `mascot-welcome`     | Chapter openings — preview what the reader will learn   | Once per chapter (start) |
| `mascot-thinking`    | Core concepts and connections between ideas             | 2-3 per chapter     |
| `mascot-tip`         | Practical, actionable caregiver/family advice           | As needed           |
| `mascot-warning`     | Misconceptions, safety risks, common errors             | As needed           |
| `mascot-encourage`   | Emotionally heavy or medically complex content          | Where readers may struggle |
| `mascot-celebration` | Chapter endings — celebrate progress, summarize gains   | Once per chapter (end) |
| `mascot-neutral`     | General sidebars, context, background info              | As needed           |

Each admonition includes the corresponding mascot image (e.g.
`<img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="...">`)
followed by Tokie's message in first person ("I", "let's").

#### Restraint rules
- **Maximum 5-6 mascot admonitions per chapter.** More than that and Tokie
  becomes wallpaper instead of a guide.
- **Never place mascot admonitions back-to-back.** They need surrounding prose
  to land.
- **Always exactly one `mascot-welcome` at the very start** and **one
  `mascot-celebration` at the very end** of each chapter `index.md`.
- **Voice consistency check**: when surrounding prose follows a mascot
  admonition, the prose should sound like the same person who just spoke.
  If switching from a Tokie callout to a paragraph creates voice whiplash,
  rewrite the paragraph.

#### Example pattern for chapter openings

```markdown
# Chapter Title

!!! mascot-welcome "Tokie Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Tokie welcomes you">
    Hi, I'm Tokie. In this chapter we'll explore [topic] together. By the
    end you'll understand [outcome 1], [outcome 2], and [outcome 3]. Take
    your time — there's no rush.

[Opening paragraph in Tokie's voice that flows naturally from the welcome.]
```

### Learning Graph Integrity
- Always validate DAG structure after CSV changes
- Dependencies must reference valid ConceptIDs
- TaxonomyID must match one of 12 defined categories
- No circular dependencies allowed

### Theme and Styling
- Custom brand colors defined in `docs/css/extra.css` override Material theme defaults
- Color theme documented in `docs/learning-graph/color-theme.md`
- WCAG 2.1 AA accessibility compliance required
- Consistent use of taxonomy colors across graph viewer and documentation

### Deployment
- Site builds to `site/` directory (gitignored)
- GitHub Pages deploys from `gh-pages` branch
- `mkdocs gh-deploy` handles build and push automatically
- Site URL includes `/Dementia/` base path

## Known Issues

### Missing Logo
The build shows warnings about missing `docs/img/logo.png`. This is cosmetic and doesn't affect functionality, but should be addressed by adding the logo file.

### Cairo Dependency
The cairosvg Python module requires the cairo system library. Install with:
```bash
conda install -c conda-forge cairo
```
Do not rely on Homebrew installation alone - conda environment needs its own cairo.

## Project Status

- ✅ Learning graph (200 concepts, DAG validated)
- ✅ 15 chapters complete
- ✅ Interactive graph viewer
- ✅ Color theme system
- ✅ Deployed to GitHub Pages
- 🔄 Glossary (in development)
- 🔄 FAQ (in development)
- 🔄 Chapter quizzes (planned)
