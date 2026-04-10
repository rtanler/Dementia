---
title: Dementia Types Comparison Matrix
description: Analyze and compare the distinguishing features of major dementia types (Bloom Level 4 - Analyze)
status: scaffold
library: HTML/CSS/JavaScript with interactive table library
bloom_level: Analyze (L4)
---

# Dementia Types Comparison Matrix

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

Analyze and compare the distinguishing features of major dementia types (Bloom Level 4 - Analyze)

- **Bloom Level:** Analyze (L4)
- **Bloom Verb:** Compare, contrast, differentiate, distinguish
- **Library:** HTML/CSS/JavaScript with interactive table library

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Understanding Different Types of Dementia](../../chapters/03-types-of-dementia/index.md).

```text
Type: infographic

Learning Objective: Analyze and compare the distinguishing features of major dementia types (Bloom Level 4 - Analyze)

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: Compare, contrast, differentiate, distinguish

Purpose: Help students identify key differences between major dementia types across multiple dimensions

Layout: Interactive comparison matrix with dementia types as columns and characteristics as rows

Dementia Types Displayed (Columns):
1. Alzheimer's Disease
2. Vascular Dementia
3. Lewy Body Dementia
4. Frontotemporal Dementia
5. Mixed Dementia

Comparison Dimensions (Rows):

1. Primary Cause:
   - Alzheimer's: Amyloid plaques and tau tangles
   - Vascular: Reduced blood flow, strokes
   - Lewy body: Alpha-synuclein deposits (Lewy bodies)
   - Frontotemporal: Tau or TDP-43 protein in frontal/temporal lobes
   - Mixed: Combination of pathologies

2. First Symptoms:
   - Alzheimer's: Memory loss for recent events
   - Vascular: Executive dysfunction, slowed thinking
   - Lewy body: Fluctuating cognition, hallucinations
   - Frontotemporal: Personality/behavior changes
   - Mixed: Varies based on combination

3. Progression Pattern:
   - Alzheimer's: Gradual, steady decline
   - Vascular: Stepwise (sudden drops after strokes)
   - Lewy body: Fluctuating with gradual decline
   - Frontotemporal: Progressive, often rapid
   - Mixed: Variable

4. Memory Affected:
   - Alzheimer's: Severely affected early
   - Vascular: Moderately affected
   - Lewy body: Moderately affected
   - Frontotemporal: Relatively preserved early
   - Mixed: Varies

5. Movement Problems:
   - Alzheimer's: Late stages only
   - Vascular: Possible if strokes affect motor areas
   - Lewy body: Common, Parkinson-like symptoms
   - Frontotemporal: Rare (unless motor variant)
   - Mixed: Depends on combination

6. Hallucinations:
   - Alzheimer's: Rare, late stages
   - Vascular: Uncommon
   - Lewy body: Common, detailed visual hallucinations
   - Frontotemporal: Rare
   - Mixed: Possible if includes LBD

7. Typical Age of Onset:
   - Alzheimer's: Usually 65+
   - Vascular: Usually 65+, often older
   - Lewy body: Usually 50+
   - Frontotemporal: Usually 45-65 (younger onset)
   - Mixed: Usually 70+

8. Most Affected Brain Regions:
   - Alzheimer's: Hippocampus, temporal cortex
   - Vascular: Varies (wherever blood flow reduced)
   - Lewy body: Cortex, brainstem, substantia nigra
   - Frontotemporal: Frontal and temporal lobes
   - Mixed: Multiple regions

9. Genetic Risk:
   - Alzheimer's: Some genetic factors (APOE ε4)
   - Vascular: Family history of stroke/heart disease
   - Lewy body: Rare genetic cases
   - Frontotemporal: 30-40% inherited
   - Mixed: Varies

10. Available Treatments:
   - Alzheimer's: Cholinesterase inhibitors, memantine
   - Vascular: Control vascular risk factors
   - Lewy body: Cholinesterase inhibitors, dopamine drugs
   - Frontotemporal: Symptomatic management only
   - Mixed: Combination approach

Interactive Features:
- Hover over any cell: Shows detailed explanation with examples
- Click column header: Highlights that dementia type across all rows
- Click row header: Highlights that characteristic across all types
- "Compare Two Types" mode:
  - Select any two dementia types
  - Side-by-side detailed comparison
  - Highlights similarities and differences
- "Quiz Mode":
  - Given symptoms, identify likely dementia type
  - Immediate feedback with explanation
  - Progressive difficulty
- Filter by: "Most distinctive features" to see what makes each type unique
- "Show Real Cases" button: Brief case studies exemplifying each type

Visual Design:
- Color-coded cells:
  - Green: Strongly characteristic
  - Yellow: Moderately characteristic
  - Red: Rare or absent
  - Gray: Variable or unknown
- Icons for quick visual scanning
- Clear typography with good contrast

Additional Information Panel:
- "Key Diagnostic Features" summary for each type
- "Red flags" that suggest a particular diagnosis
- "Overlap areas" showing where types are hardest to distinguish

Responsive Design:
- Table scrolls horizontally on narrow screens
- Sticky headers remain visible
- Touch-friendly for tapping cells

Implementation: HTML/CSS/JavaScript with interactive table library
Canvas size: 100% width, 650px height
```

## Related Resources

- [Chapter 3: Understanding Different Types of Dementia](../../chapters/03-types-of-dementia/index.md)
