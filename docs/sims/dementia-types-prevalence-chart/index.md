---
title: Dementia Types Prevalence Chart
description: Understand the relative prevalence of different dementia types (Bloom Level 2 - Understand)
status: scaffold
library: Chart.js or D3.js with custom interactions
bloom_level: Understand (L2)
---

# Dementia Types Prevalence Chart

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

Understand the relative prevalence of different dementia types (Bloom Level 2 - Understand)

- **Bloom Level:** Understand (L2)
- **Bloom Verb:** Compare, interpret
- **Library:** Chart.js or D3.js with custom interactions

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Understanding Different Types of Dementia](../../chapters/03-types-of-dementia/index.md).

```text
Type: chart

Learning Objective: Understand the relative prevalence of different dementia types (Bloom Level 2 - Understand)

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: Compare, interpret

Purpose: Visualize the relative frequency of different dementia types to understand which are most common

Chart type: Interactive pie chart with detailed breakdown

Data to display:
- Alzheimer's disease: 60-70% (largest slice, blue)
- Vascular dementia: 15-20% (orange)
- Mixed dementia: 10-15% (purple)
- Lewy body dementia: 5-10% (green)
- Frontotemporal dementia: 5-10% (yellow)
- Other rare types: 1-5% (gray)

Visual Features:
- Pie chart with clear percentage labels
- Color-coded slices
- Total cases represented: "Approximately 55 million people worldwide"

Interactive Elements:
- Hover over slice: Shows detailed information
  - Exact percentage range
  - Estimated number of people affected
  - Key characteristics
  - Typical age of onset
- Click on slice: Expands to show sub-categories
  - Example: "Other rare types" expands to show individual rare dementias
- Toggle view: Switch between pie chart and bar chart
- "Show Age Distribution" button: Overlay showing which types are more common at different ages

Additional Information Panels:
For each dementia type (on hover/click):
- Most affected age group
- Male vs. female prevalence
- Geographic variations if significant
- Trend over time (increasing/stable/decreasing diagnosis rates)

Annotations:
- "60-70%: Alzheimer's disease is by far the most common type"
- "Mixed dementia often goes undiagnosed until autopsy"
- "FTD is the most common dementia in people under 60"

Responsive Design:
- Chart resizes to fit screen width
- Labels remain readable at all sizes
- Touch-friendly for mobile devices

Implementation: Chart.js or D3.js with custom interactions
Canvas size: 100% width, 500px height
```

## Related Resources

- [Chapter 3: Understanding Different Types of Dementia](../../chapters/03-types-of-dementia/index.md)
