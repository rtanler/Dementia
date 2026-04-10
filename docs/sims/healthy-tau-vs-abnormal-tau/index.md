---
title: Healthy Tau vs. Abnormal Tau
description: Compare the structure and function of normal tau protein versus hyperphosphorylated tau in Alzheimer's disease (Bloom Level 2 - Understand)
status: scaffold
library: HTML/CSS/JavaScript with SVG graphics for neuron illustrations
bloom_level: Understand (L2)
---

# Healthy Tau vs. Abnormal Tau

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

Compare the structure and function of normal tau protein versus hyperphosphorylated tau in Alzheimer's disease (Bloom Level 2 - Understand)

- **Bloom Level:** Understand (L2)
- **Bloom Verb:** Compare, contrast, differentiate
- **Library:** HTML/CSS/JavaScript with SVG graphics for neuron illustrations

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: The Neuroscience of Neurodegeneration](../../chapters/04-neuroscience-neurodegeneration/index.md).

```text
Type: infographic

Learning Objective: Compare the structure and function of normal tau protein versus hyperphosphorylated tau in Alzheimer's disease (Bloom Level 2 - Understand)

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: Compare, contrast, differentiate

Purpose: Show the structural and functional differences between normal tau and pathological tau through an interactive side-by-side comparison

Layout: Split-screen comparison with left side showing healthy neuron, right side showing diseased neuron

Left Panel - Healthy Neuron:
- Intact microtubules shown as parallel railroad tracks running length of axon
- Tau proteins shown as small cross-ties binding to microtubules at regular intervals
- Transport vesicles moving smoothly along microtubules
- Color: Microtubules (blue), Tau (green), vesicles (yellow)
- Label: "Normal Tau Stabilizes Microtubules"

Right Panel - Diseased Neuron:
- Fragmented, disorganized microtubules falling apart
- Hyperphosphorylated tau detached and clumping together
- Neurofibrillary tangles forming inside cell body
- Blocked transport with vesicles unable to move
- Color: Microtubules (faded blue, broken), abnormal tau (orange), tangles (dark red)
- Label: "Hyperphosphorylated Tau Forms Tangles"

Interactive Elements:
- Hover over normal tau to see popup: "Tau binds to tubulin, stabilizing microtubule structure and enabling axonal transport"
- Hover over abnormal tau to see popup: "Hyperphosphorylated tau detaches from microtubules and aggregates into paired helical filaments"
- Hover over microtubules (left) to see: "Stable structure allows bidirectional transport of organelles and proteins"
- Hover over broken microtubules (right) to see: "Microtubule disintegration disrupts axonal transport, starving synapses of essential materials"
- Hover over tangles to see: "Neurofibrillary tangles are composed of paired helical filaments of hyperphosphorylated tau"
- Click "Show Phosphorylation" button to highlight phosphate groups attached to tau molecules

Bottom Comparison Table (always visible):
| Feature | Normal Tau | Hyperphosphorylated Tau |
|---------|-----------|------------------------|
| Location | Bound to microtubules | Detached, in cytoplasm |
| Structure | Extended, flexible | Misfolded, aggregated |
| Function | Stabilizes transport | Disrupts transport |
| Effect | Neuron health | Neuron dysfunction/death |

Visual Style: Clean scientific illustration with clear labels and color coding
Responsive Design: Layout adapts to window width; switches to stacked layout on narrow screens

Implementation: HTML/CSS/JavaScript with SVG graphics for neuron illustrations
Canvas size: 900x550px, fully responsive
```

## Related Resources

- [Chapter 4: The Neuroscience of Neurodegeneration](../../chapters/04-neuroscience-neurodegeneration/index.md)
