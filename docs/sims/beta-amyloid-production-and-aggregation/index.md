---
title: Beta-Amyloid Production and Aggregation
description: Understand how beta-amyloid is produced from APP and how it aggregates into toxic forms (Bloom Level 2 - Understand)
status: scaffold
library: p5.js with step-through controls
bloom_level: Understand (L2)
---

# Beta-Amyloid Production and Aggregation

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

Understand how beta-amyloid is produced from APP and how it aggregates into toxic forms (Bloom Level 2 - Understand)

- **Bloom Level:** Understand (L2)
- **Bloom Verb:** Explain, describe
- **Library:** p5.js with step-through controls

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: The Neuroscience of Neurodegeneration](../../chapters/04-neuroscience-neurodegeneration/index.md).

```text
Type: microsim

Learning Objective: Understand how beta-amyloid is produced from APP and how it aggregates into toxic forms (Bloom Level 2 - Understand)

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: Explain, describe

Instructional Rationale: Step-through demonstration is appropriate because understanding beta-amyloid production requires learners to trace the process with concrete visualization of protein cutting and aggregation. Allowing students to progress at their own pace helps them grasp how APP is cleaved and how beta-amyloid monomers aggregate into oligomers and plaques.

Purpose: Demonstrate the step-by-step process of beta-amyloid production from APP and its aggregation into toxic structures

Canvas Layout:
- Main visualization area (700px): Shows the neuron membrane and beta-amyloid processing
- Control panel (100px): Step controls and information display

Data Visibility Requirements:
Stage 1: Show APP protein embedded in neuron membrane (large protein spanning membrane)
Stage 2: Show beta-secretase enzyme cutting APP at first site (arrow indicating cut location)
Stage 3: Show gamma-secretase enzyme cutting at second site, releasing beta-amyloid fragment (Aβ42)
Stage 4: Show single beta-amyloid monomer floating free
Stage 5: Show 2-3 monomers beginning to stick together (oligomer formation)
Stage 6: Show larger aggregates forming (protofibrils)
Stage 7: Show mature amyloid plaque structure with many aggregated proteins

Visual Elements:
- APP protein shown as large molecule crossing cell membrane
- Beta-secretase and gamma-secretase shown as scissors or cutting enzymes
- Beta-amyloid monomers as small peptide chains
- Oligomers as small clusters (2-10 monomers)
- Plaques as large irregular deposits outside the cell
- Color coding: APP (blue), enzymes (green), Aβ monomers (orange), aggregates (red)

Interactive Controls:
- "Next Step" button to advance through stages
- "Previous Step" button to review earlier stages
- "Reset" button to start over
- Information panel showing current stage description
- Counter showing "Stage X of 7"

Annotations:
- Label APP as "Amyloid Precursor Protein"
- Label Aβ42 as "Beta-Amyloid (42 amino acids)"
- Indicate "Extracellular space" vs "Inside neuron"
- Show timeline: "Seconds" for cutting, "Hours to days" for aggregation, "Months to years" for plaque formation

Implementation: p5.js with step-through controls
Canvas size: 800x600px responsive design
```

## Related Resources

- [Chapter 4: The Neuroscience of Neurodegeneration](../../chapters/04-neuroscience-neurodegeneration/index.md)
