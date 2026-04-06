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
