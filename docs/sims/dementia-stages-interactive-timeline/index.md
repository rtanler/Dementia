---
title: Dementia Stages Interactive Timeline
description: Analyze how dementia progresses through stages over time and how different domains decline at different rates (Bloom Level 4 - Analyze)
status: scaffold
library: HTML/CSS/JavaScript with SVG or Canvas for drawing lines
bloom_level: Analyze (L4)
---

# Dementia Stages Interactive Timeline

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

Analyze how dementia progresses through stages over time and how different domains decline at different rates (Bloom Level 4 - Analyze)

- **Bloom Level:** Analyze (L4)
- **Bloom Verb:** Analyze, examine, compare, differentiate
- **Library:** HTML/CSS/JavaScript with SVG or Canvas for drawing lines

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Progression Through Dementia Stages](../../chapters/06-dementia-stages/index.md).

```text
Type: timeline

Learning Objective: Analyze how dementia progresses through stages over time and how different domains decline at different rates (Bloom Level 4 - Analyze)

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: Analyze, examine, compare, differentiate

Purpose: Show the progression of dementia through stages with multiple capability domains declining at different rates, helping families understand the trajectory and variability

Layout: Horizontal timeline with multiple declining trend lines

X-Axis: Time (0-12 years, with stage boundaries marked)
Y-Axis: Capability Level (0-100%)

Stage Boundaries (marked with vertical lines):
- 0-3 years: Early Stage (light green background)
- 3-8 years: Moderate Stage (yellow background)
- 8-12 years: Late Stage (orange background)
- Note: "Duration varies by individual and dementia type"

Multiple Declining Lines (each a different color, all starting at 100%):

Line 1 - Recent Memory (Red)
- Declines sharply in early stage
- Reaches near zero by end of moderate stage
- Flat line at zero through late stage

Line 2 - Language (Blue)
- Gradual decline in early stage
- Steeper decline in moderate stage
- Minimal function in late stage

Line 3 - Daily Living Skills (Green)
- Slight decline in early stage (still mostly independent)
- Significant decline in moderate stage
- Near complete loss in late stage

Line 4 - Remote Memory (Purple)
- Preserved through much of early stage
- Gradual decline in moderate stage
- Significant loss only in late stage

Line 5 - Emotional Capacity (Orange)
- Relatively preserved through early and moderate stages
- Gradual decline in late stage but often not to zero
- Never reaches complete zero (emotional capacity often retained longest)

Line 6 - Physical Abilities (Brown)
- Minimal decline in early stage
- Variable in moderate stage
- Significant decline in late stage

Interactive Features:
- Hover over any line to see specific capability at that time point
- Click on line to highlight it and dim others
- Click on stage area to see popup with characteristics of that stage
- "Show/Hide Lines" checkboxes to toggle specific capability lines
- Slider to "fast-forward" through timeline showing how capabilities decline
- Click milestone markers showing typical events:
  * "Diagnosis" (around year 1-2)
  * "Stop driving" (around year 2-4)
  * "Need daily assistance" (around year 4-6)
  * "Move to residential care" (variable, marked with range)
  * "Hospice care" (typically late stage)

Bottom Information Panel:
"Important Notes:"
- Everyone progresses differently—this timeline shows typical Alzheimer's disease progression
- Some people progress faster, others slower
- Different dementia types have different progression patterns
- Vascular dementia may show stepwise decline rather than gradual
- Frontotemporal dementia often has earlier behavioral/personality changes

Control Panel (right side):
- "Dementia Type" selector:
  * Alzheimer's Disease (default)
  * Vascular Dementia (shows stepwise declines)
  * Lewy Body Dementia (shows fluctuations)
  * Frontotemporal Dementia (earlier personality/behavior decline)
- Selecting different types adjusts the line patterns appropriately

Educational Value:
- Shows that different capabilities decline at different rates
- Demonstrates that emotional capacity is often preserved longest
- Helps families understand what changes to expect and when
- Shows variability between dementia types
- Provides realistic timeline for planning

Visual Style: Clean timeline with smooth declining curves
Color coding: Each capability line has distinct color, stages have background tints
Responsive design: Timeline compresses on narrow screens, lines remain visible

Implementation: HTML/CSS/JavaScript with SVG or Canvas for drawing lines
Canvas size: 1000x600px, fully responsive
```

## Related Resources

- [Chapter 6: Progression Through Dementia Stages](../../chapters/06-dementia-stages/index.md)
