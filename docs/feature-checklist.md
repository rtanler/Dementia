# Intelligent Textbook Feature Checklist

This checklist helps authors and product managers understand what features are available in the MkDocs Material intelligent textbook ecosystem. For each feature, you'll see whether it's implemented in this book and how much effort it takes to add.

!!! note
    A level 2+ textbook is one that has rich interactivity but does not store any
    personal student data. A level 2+ textbook can be converted to a level 3
    textbook by sending event data to a learning record store (LRS) to create
    a hyper-personalized learning experience for each student. The five levels
    of intelligent textbooks are described in the [Intelligent Textbooks](https://dmccreary.github.io/intelligent-textbooks/) course.

An **intelligent textbook** goes beyond static text to include interactive simulations, personalized learning paths, auto-graded quizzes, and AI-generated content. This checklist tracks which of these capabilities are present in this textbook.

**Legend:**

- :white_check_mark: Feature is implemented and working
- :x: Feature is not yet implemented
- :construction: Feature is partially implemented

## Effort Levels

| Level | Description | Human Time | With GenAI | With GenAI Skills |
|-------|-------------|------------|------------|-------------------|
| **Trivial** | Config change or copy template | Minutes | Seconds | Seconds |
| **Low** | Single file creation with standard content | Hours | Minutes | Seconds |
| **Medium** | Multiple files, some customization needed | Day | Hours | Minutes |
| **High** | Significant content generation or custom code | Days | Hours | Minutes |
| **Very High** | Complex integration, AI generation, or external tools | Week+ | Day | Hours |

---

## Basic Features

These features come by default with MkDocs Material or require minimal configuration.

| Feature | Status | Effort | Notes |
|---------|--------|--------|-------|
| Navigation sidebar | :white_check_mark: | Trivial | Left-side menu showing all chapters and sections |
| Search functionality | :white_check_mark: | Trivial | Instant search across all pages as you type |
| Table of contents (per page) | :white_check_mark: | Trivial | Right-side outline of headings on current page |
| Site title and description | :white_check_mark: | Trivial | `site_name` and `site_description` configured |
| Site author metadata | :white_check_mark: | Trivial | `site_author` configured |
| GitHub repository link | :white_check_mark: | Trivial | `repo_url` configured |
| Custom logo | :white_check_mark: | Trivial | `img/tokie.png` in header |
| Custom favicon | :white_check_mark: | Trivial | `img/favicon.ico` configured |
| Color theme (primary/accent) | :white_check_mark: | Trivial | Custom palette with `extra.css` overrides |
| Footer navigation (prev/next) | :white_check_mark: | Trivial | `navigation.footer` enabled |
| Navigation expand on hover | :white_check_mark: | Trivial | `navigation.expand` enabled |
| Back to top button | :white_check_mark: | Trivial | `navigation.top` enabled |
| Navigation path breadcrumbs | :white_check_mark: | Trivial | `navigation.path` enabled |
| Section index pages | :white_check_mark: | Trivial | `navigation.indexes` enabled |
| License page | :white_check_mark: | Low | Standard CC license template |
| Contact page | :white_check_mark: | Low | Contact form or info |
| About page (detailed) | :white_check_mark: | Low | Exists but minimal content |
| How We Built This Site | :x: | Medium | Describe tools and process |
| Copyright on every footer | :white_check_mark: | Trivial | Copyright notice configured in mkdocs.yml |

---

## Intermediate Features

These features require plugins, extensions, or moderate configuration.

### Content Enhancement

These features make your content more engaging and easier to read.

| Feature | Status | Effort | Notes |
|---------|--------|--------|-------|
| GLightBox (image zoom) | :white_check_mark: | Low | Click any image for lightbox zoom popup |
| KaTeX equation rendering | :x: | Low | Not configured (MathJax used instead) |
| MathJax equation rendering | :white_check_mark: | Low | `pymdownx.arithmatex` + MathJax 3 configured |
| Admonitions (callout boxes) | :white_check_mark: | Trivial | `admonition` extension enabled |
| Code blocks with copy button | :white_check_mark: | Trivial | `content.code.copy` enabled |
| Syntax highlighting with line numbers | :white_check_mark: | Trivial | `pymdownx.highlight` with `linenums: true` |
| Tabbed content blocks | :white_check_mark: | Trivial | `pymdownx.tabbed` with alternate style |
| Task list checkboxes | :white_check_mark: | Trivial | `pymdownx.tasklist` enabled |
| Mark/highlight text | :white_check_mark: | Trivial | `pymdownx.mark` enabled |
| Strikethrough text | :white_check_mark: | Trivial | `pymdownx.tilde` enabled |
| Magic links (auto-linking) | :x: | Trivial | `pymdownx.magiclink` not configured |
| Snippets (file includes) | :x: | Trivial | `pymdownx.snippets` not configured |
| Emoji support | :white_check_mark: | Trivial | `pymdownx.emoji` with twemoji |
| Collapsible details blocks | :white_check_mark: | Trivial | `pymdownx.details` enabled |
| Mermaid diagrams | :white_check_mark: | Trivial | Configured via `pymdownx.superfences` custom fences |

### Site-Wide Resources

These are pages and files that support the entire textbook rather than individual chapters.

| Feature | Status | Effort | Notes |
|---------|--------|--------|-------|
| Glossary | :construction: | Medium | Placeholder page exists, no terms defined yet |
| FAQ page | :construction: | Medium | Placeholder page exists, no questions added yet |
| References page | :white_check_mark: | Medium | Curated bibliography with links per chapter or site-wide |
| Custom CSS styling | :white_check_mark: | Low | `css/extra.css` with brand color overrides |
| Custom JavaScript | :white_check_mark: | Low | `javascripts/mathjax.js` configured |
| Google Analytics | :x: | Trivial | Track page views and user behavior |

### Publishing Features

These features help your textbook look professional when shared on social media.

| Feature | Status | Effort | Notes |
|---------|--------|--------|-------|
| Social media preview cards | :white_check_mark: | Medium | `social` and `social_override` plugins configured |
| Edit page button | :white_check_mark: | Trivial | `edit_uri` and `content.action.edit` configured |

---

## Advanced Features

These features require significant effort, custom code, or AI assistance.

### Interactive Learning

MicroSims are small, browser-based simulations that let students experiment with concepts.

| Feature | Status | Effort | Notes |
|---------|--------|--------|-------|
| MicroSims (interactive simulations) | :white_check_mark: | High | 2 browser-based apps for hands-on learning |
| MicroSim index catalog | :white_check_mark: | Medium | Visual gallery with cards showing all available simulations |
| Per-chapter quizzes | :x: | High | 0 quiz files with questions aligned to learning objectives |

### Learning Graph System

A learning graph maps every concept in the course and shows which concepts depend on others.

| Feature | Status | Effort | Notes |
|---------|--------|--------|-------|
| Course description | :white_check_mark: | Medium | Goals and outcomes using Bloom's Taxonomy levels |
| Concept list (~200-300 concepts) | :white_check_mark: | High | Every topic students need to learn, extracted with AI help |
| Learning graph CSV | :white_check_mark: | High | Spreadsheet defining which concepts depend on others |
| Learning graph JSON | :white_check_mark: | Low | Machine-readable format for the graph viewer |
| Learning graph viewer (vis-network) | :white_check_mark: | Medium | Interactive diagram where you can click and explore concepts |
| Concept taxonomy classification | :white_check_mark: | Medium | Grouping concepts into categories |
| Quality metrics report | :white_check_mark: | Low | Statistics about graph completeness and structure |
| Book metrics | :x: | Medium | Word counts, reading time, and chapter statistics |
| Chapter metrics | :x: | Medium | Detailed stats for each chapter individually |
| Glossary quality report | :x: | Low | Check definitions follow standards |
| FAQ quality report | :x: | Low | Check FAQ completeness |
| FAQ coverage gaps | :x: | Low | Find concepts not addressed in FAQ |
| Quiz generation report | :x: | Low | Quality report for generated quizzes |

### Content Generation

These features involve creating the actual educational content.

| Feature | Status | Effort | Notes |
|---------|--------|--------|-------|
| Chapter content | :white_check_mark: | Very High | 15 chapters with full text, examples, and exercises |
| Pedagogical Agent (Mascot) | :x: | High | Seven poses in admonitions created using text-to-image generator |
| Sample prompts collection | :x: | Medium | Saved AI prompts so content can be regenerated consistently |

---

## Feature Dependencies

Some features require others to be implemented first.

```
Course Description
    └── Concept List
        └── Learning Graph (CSV)
            ├── Learning Graph (JSON)
            │   └── Graph Viewer
            ├── Glossary
            │   └── Glossary Quality Report
            ├── FAQ
            │   ├── FAQ Quality Report
            │   └── FAQ Coverage Gaps
            └── Chapter Content
                ├── Per-Chapter Quizzes
                ├── Per-Chapter References
                └── Book/Chapter Metrics
```

---

## Cost Considerations

Most intelligent textbook features use free, open-source software.

| Feature Category | License Cost | Notes |
|------------------|--------------|-------|
| MkDocs Material | Free (MIT) | Static site generator and theme |
| Python dependencies | Free | Pillow and CairoSVG for social preview images |
| vis-network.js | Free (MIT) | JavaScript library for interactive graph diagrams |
| p5.js | Free (LGPL) | JavaScript library for creative coding and simulations |
| KaTeX | Free (MIT) | Fast math equation rendering in the browser |
| AI image generation | **$20+/month** | Required for creating infographics with DALL-E or ImageFX |
| Claude/ChatGPT for content | Varies | Used to draft chapters, quizzes, and glossary entries |

---

## Quick Start: Adding Missing Features

Start with the easiest wins and work your way up.

### Highest Impact, Lowest Effort

These can be done in under an hour:

1. ~~**License page**~~ - :white_check_mark: Already implemented
2. ~~**Contact page**~~ - :white_check_mark: Already implemented
3. ~~**Edit page button**~~ - :white_check_mark: Already implemented
4. ~~**Social media cards**~~ - :white_check_mark: Already implemented
5. **Google Analytics** - Add tracking property ID to mkdocs.yml
6. **Magic links** - Add `pymdownx.magiclink` extension for auto-linking URLs

### Medium Effort, High Value

These use Claude Code skills to generate content:

1. **Glossary** - Use the glossary-generator skill to populate definitions (placeholder page exists)
2. **FAQ** - Use the faq-generator skill to populate questions (placeholder page exists)
3. **Book metrics** - Use the book-metrics-generator skill to track completeness
4. **Per-chapter quizzes** - Use the quiz-generator skill for auto-graded practice

### High Effort, Transformative

These take more time but significantly enhance the learning experience:

1. **Additional MicroSims** - Each simulation takes 2-4 hours; aim for 10-20 total
2. **Pedagogical Agent (Mascot)** - AI-generated character to guide students through content
3. **Instructor's guide** - Helps teachers adopt your textbook

---

*Generated by book-installer feature-checklist-generator*

*Last updated: April 2026*
