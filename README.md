# Understanding Dementia

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://rtanler.github.io/Dementia/)
[![GitHub](https://img.shields.io/badge/GitHub-rtanler%2FDementia-blue?logo=github)](https://github.com/rtanler/Dementia)
[![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-DA7857?logo=anthropic)](https://claude.ai/code)
[![Claude Skills](https://img.shields.io/badge/Uses-Claude%20Skills-DA7857?logo=anthropic)](https://github.com/dmccreary/claude-skills)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## View the Live Site

Visit the interactive guidebook at: **[https://rtanler.github.io/Dementia/](https://rtanler.github.io/Dementia/)**

## Overview

This is an AI-generated intelligent textbook on dementia and cognitive decline designed for patients, caregivers, families, and healthcare professionals without specialized dementia training. Built using MkDocs with the Material theme, it incorporates a comprehensive learning graph with 200 interconnected concepts, interactive visualizations, and evidence-based content generation.

The guidebook follows Bloom's Taxonomy (2001 revision) for learning outcomes and uses concept dependency graphs to ensure proper prerequisite sequencing. Written at a 9th-10th grade reading level, it makes complex medical concepts accessible through clear language, diagrams, and real-world examples. All content is generated and curated using Claude AI and Claude Skills, making it a modern, AI-assisted educational resource.

Whether you're a patient newly diagnosed with dementia, a family member becoming a caregiver, or a healthcare provider seeking structured educational materials, this guidebook provides comprehensive coverage from basic neuroscience to practical daily care strategies, legal planning, and emotional support resources.

## Site Status and Metrics

| Metric | Count |
|--------|-------|
| **Concepts in Learning Graph** | 200 |
| **Foundational Concepts** | 4 |
| **Taxonomy Categories** | 12 |
| **Average Dependencies per Concept** | 1.25 |
| **Maximum Learning Path Length** | 8 |
| **Markdown Files** | 19 |
| **Total Words** | ~6,500 |
| **Interactive MicroSims** | 2 |
| **Glossary Terms** | In development |
| **FAQ Questions** | In development |
| **Chapter Content** | In development |

**Completion Status:** Learning graph and foundational structure complete (~25%). Chapter content generation in progress.

**Learning Graph Quality Score:** The concept dependency graph has been validated as a proper Directed Acyclic Graph (DAG) with no circular dependencies, ensuring learners encounter concepts in the correct order.

## Features

### Learning Graph Architecture

- **200 interconnected concepts** covering all aspects of dementia from neuroscience to daily care
- **12 taxonomy categories**: Foundation, Neuroscience, Dementia Types, Symptoms & Stages, Diagnosis & Assessment, Treatment & Therapies, Risk Factors & Prevention, Daily Living & Caregiving, Communication, Safety & Home Modifications, Legal & Financial Planning, and Support & Resources
- **Interactive graph viewer** with search, filtering, and visual exploration using vis-network
- **Dependency tracking** ensures concepts are introduced with proper prerequisites

### Intelligent Textbook Components

- **Structured learning paths** following concept dependencies
- **Bloom's Taxonomy alignment** from knowledge recall to evaluation and creation
- **Interactive MicroSims** for visualizing concepts and exploring relationships
- **Concept-based glossary** following ISO 11179 metadata standards
- **Chapter quizzes** (planned) aligned to specific learning objectives
- **FAQ section** (planned) addressing common questions and concerns

### Accessibility

- **9th-10th grade reading level** for maximum accessibility
- **Medical terminology explained** in plain language
- **Visual diagrams and infographics** to support understanding
- **Multiple usage modes**: sequential reading, reference guide, or structured course
- **Responsive design** works on desktop, tablet, and mobile devices

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/rtanler/Dementia.git
cd Dementia
```

### Install Dependencies

This project uses MkDocs with the Material theme. You can use either pip or conda:

**Using pip:**

```bash
pip install mkdocs
pip install mkdocs-material
pip install -e .  # Install social_override plugin
```

**Using conda (recommended):**

```bash
conda create -n mkdocs python=3.11
conda activate mkdocs
conda install -c conda-forge mkdocs mkdocs-material
pip install -e .  # Install social_override plugin
```

### Build and Serve Locally

Build the site:

```bash
mkdocs build
```

Serve locally for development (with live reload):

```bash
mkdocs serve
```

Open your browser to `http://localhost:8000/Dementia/`

### Deploy to GitHub Pages

```bash
mkdocs gh-deploy
```

This will build the site and push it to the `gh-pages` branch.

### Using the Guidebook

**Navigation:**
- Use the left sidebar to browse sections
- Click the search icon (🔍) to search all content
- Access the interactive Learning Graph Viewer under MicroSims

**Learning Graph Viewer:**
- Visual exploration of all 200 concepts and their dependencies
- Search for specific concepts
- Filter by taxonomy category (Foundation, Neuroscience, etc.)
- Click nodes to see connections and prerequisites
- Zoom and pan to explore the knowledge structure

**Customization:**
- Edit markdown files in `docs/` to modify content
- Modify `mkdocs.yml` to change site structure and navigation
- Customize theme colors in `docs/css/extra.css`
- Add custom MicroSims in `docs/sims/`

## Repository Structure

```
Dementia/
├── docs/                              # MkDocs documentation source
│   ├── index.md                       # Homepage
│   ├── course-description.md          # Comprehensive course overview
│   ├── chapters/                      # Chapter content (in development)
│   ├── sims/                          # Interactive MicroSims
│   │   ├── index.md                   # MicroSims overview
│   │   └── graph-viewer/              # Learning graph visualization
│   │       ├── main.html              # Standalone viewer application
│   │       ├── local.css              # Viewer styles
│   │       ├── script.js              # vis-network integration
│   │       └── index.md               # Viewer documentation
│   ├── learning-graph/                # Learning graph data and analysis
│   │   ├── learning-graph.csv         # Concept dependencies (source)
│   │   ├── learning-graph.json        # vis-network format
│   │   ├── color-config.json          # Taxonomy color scheme
│   │   ├── concept-list.md            # All 200 concept labels
│   │   ├── concept-taxonomy.md        # Taxonomy definitions
│   │   ├── quality-metrics.md         # Graph quality analysis
│   │   ├── taxonomy-distribution.md   # Category distribution report
│   │   ├── add-taxonomy.py            # Add taxonomy IDs to CSV
│   │   ├── analyze-graph.py           # Graph structure validation
│   │   ├── csv-to-json.py             # Convert CSV to vis-network JSON
│   │   ├── taxonomy-distribution.py   # Generate distribution report
│   │   └── validate-learning-graph.py # DAG validation
│   ├── glossary.md                    # Terminology definitions
│   ├── faq.md                         # Frequently asked questions
│   ├── references.md                  # Curated references
│   ├── license.md                     # License details
│   ├── css/                           # Custom stylesheets
│   ├── img/                           # Images and icons
│   └── javascripts/                   # Custom JavaScript (MathJax)
├── plugins/                           # MkDocs plugins
│   └── social_override/               # Custom social media cards
├── mkdocs.yml                         # MkDocs configuration
├── setup.py                           # Python package setup (plugins)
└── README.md                          # This file
```

## Development Workflow

### Learning Graph Updates

If you modify the learning graph:

1. Edit `docs/learning-graph/learning-graph.csv` with concept changes
2. Run validation: `python docs/learning-graph/validate-learning-graph.py`
3. Add taxonomy: `python docs/learning-graph/add-taxonomy.py`
4. Convert to JSON: `python docs/learning-graph/csv-to-json.py`
5. Analyze quality: `python docs/learning-graph/analyze-graph.py`
6. Generate distribution: `python docs/learning-graph/taxonomy-distribution.py`

Or use the automated validation script:

```bash
cd docs/learning-graph
./validate-learning-graph.sh
```

### Content Development

The project follows this development sequence:

1. ✅ **Course Description** - Complete with learning objectives
2. ✅ **Learning Graph** - 200 concepts with dependencies validated
3. ✅ **Taxonomy & Color Scheme** - 12 categories defined
4. ✅ **Interactive Viewer** - Graph visualization complete
5. 🔄 **Chapter Structure** - Planning based on concept dependencies
6. 🔄 **Chapter Content** - AI-assisted generation in progress
7. ⏳ **Glossary** - ISO 11179-compliant definitions
8. ⏳ **Quizzes** - Concept-aligned assessments
9. ⏳ **FAQs** - Common questions and answers

## Reporting Issues

Found a bug, typo, or have a suggestion for improvement? Please report it:

**[GitHub Issues](https://github.com/rtanler/Dementia/issues)**

When reporting issues, please include:

- Description of the problem or suggestion
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/environment details (for interactive MicroSims)

## License

This work is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

**You are free to:**

- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

**Under the following terms:**

- **Attribution** — Give appropriate credit with a link to the original
- **NonCommercial** — Not for commercial use without permission
- **ShareAlike** — Distribute contributions under the same license

See [LICENSE](docs/license.md) for full details.

## Acknowledgements

This project is built on the shoulders of giants in the open source community:

- **[MkDocs](https://www.mkdocs.org/)** - Static site generator optimized for project documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** - Beautiful, feature-rich responsive theme
- **[vis-network](https://visjs.org/)** - Network visualization library for interactive learning graphs
- **[Python](https://www.python.org/)** - Data processing, analysis, and automation tools
- **[Claude AI](https://claude.ai)** by Anthropic - AI-assisted content generation and curation
- **[Claude Skills](https://github.com/dmccreary/claude-skills)** - Reusable AI skill library for educational content
- **[GitHub Pages](https://pages.github.com/)** - Free hosting for open source educational projects

Special thanks to the educators, developers, healthcare professionals, and caregivers who contribute to making dementia education accessible, accurate, and compassionate.

## Contact

**Project Maintainer:** rtanler

- GitHub: [@rtanler](https://github.com/rtanler)
- Repository: [github.com/rtanler/Dementia](https://github.com/rtanler/Dementia)

Questions, suggestions, or collaboration opportunities? Feel free to open an issue on GitHub or reach out directly.

---

**Built with ❤️ using Claude Code and Claude Skills**
