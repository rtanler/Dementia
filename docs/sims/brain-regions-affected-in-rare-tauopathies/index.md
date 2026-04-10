---
title: Brain Regions Affected in Rare Tauopathies
description: Identify which brain regions are primarily affected in rare tauopathies and relate regional damage to characteristic symptoms (Bloom Level 2 - Understand)
status: scaffold
library: SVG-based interactive brain diagrams with JavaScript for interactivity
bloom_level: Understand (L2)
---

# Brain Regions Affected in Rare Tauopathies

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

Identify which brain regions are primarily affected in rare tauopathies and relate regional damage to characteristic symptoms (Bloom Level 2 - Understand)

- **Bloom Level:** Understand (L2)
- **Bloom Verb:** Identify, relate, connect
- **Library:** SVG-based interactive brain diagrams with JavaScript for interactivity

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: The Neuroscience of Neurodegeneration](../../chapters/04-neuroscience-neurodegeneration/index.md).

```text
Type: diagram

Learning Objective: Identify which brain regions are primarily affected in rare tauopathies and relate regional damage to characteristic symptoms (Bloom Level 2 - Understand)

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: Identify, relate, connect

Purpose: Show the distinct patterns of neurodegeneration in three rare tauopathies and help students understand how regional damage causes specific symptoms

Layout: Three side-view brain diagrams arranged horizontally, each showing a different disease

Diagram 1 - Pick's Disease:
- Brain outline in lateral view
- Frontal lobes highlighted in orange/red (showing atrophy)
- Anterior temporal lobes highlighted in orange/red
- Other brain regions shown in gray (relatively spared)
- Annotations pointing to affected areas:
  * "Frontal cortex atrophy → personality changes, disinhibition"
  * "Temporal cortex atrophy → language difficulties (aphasia)"
- Label: "Pick's Disease - Frontotemporal Pattern"

Diagram 2 - Corticobasal Degeneration:
- Brain outline in lateral view
- Asymmetric highlighting (one hemisphere more affected)
- Motor cortex and parietal cortex highlighted in purple
- Basal ganglia (shown in cross-section inset) highlighted in purple
- Annotations:
  * "Motor/sensory cortex → limb apraxia, alien limb"
  * "Basal ganglia → rigidity, bradykinesia"
  * "Asymmetric onset (typically one side first)"
- Label: "Corticobasal Degeneration - Cortical and Subcortical"

Diagram 3 - Progressive Supranuclear Palsy:
- Brain outline in lateral view with brain stem visible
- Midbrain highlighted in green
- Basal ganglia highlighted in green
- Frontal lobes highlighted in lighter green
- Annotations:
  * "Midbrain (superior colliculus) → vertical gaze palsy"
  * "Basal ganglia → rigidity, bradykinesia, falls"
  * "Frontal cortex → executive dysfunction, apathy"
- Label: "Progressive Supranuclear Palsy - Brain Stem and Basal Ganglia"

Interactive Elements:
- Hover over any highlighted region to see popup with:
  - Region name
  - Degree of damage (mild/moderate/severe)
  - Associated symptoms
- Click disease name to highlight all affected regions for that disease
- Toggle button: "Show Symptom Connections" - draws lines from affected regions to symptom list
- Click "Compare All Three" to show all three diagrams with alignment markers showing overlapping and distinct regions

Bottom Comparison Summary:
- Common features: All three involve abnormal tau protein (4-repeat tau in CBD and PSP, 3-repeat tau in Pick's)
- Key distinctions: Different regional patterns explain different symptom profiles
- Clinical implication: Brain region affected → symptom pattern → helps with diagnosis

Visual Style: Clean anatomical diagrams with color-coded affected regions
Color coding: Pick's (orange/red), CBD (purple), PSP (green)

Implementation: SVG-based interactive brain diagrams with JavaScript for interactivity
Canvas size: 1000x600px, responsive design that stacks diagrams vertically on narrow screens
```

## Related Resources

- [Chapter 4: The Neuroscience of Neurodegeneration](../../chapters/04-neuroscience-neurodegeneration/index.md)
