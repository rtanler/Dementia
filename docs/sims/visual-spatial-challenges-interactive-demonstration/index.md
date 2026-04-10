---
title: Visual-Spatial Challenges Interactive Demonstration
description: Understand how visual-spatial problems affect daily activities by experiencing simulated visual-spatial challenges (Bloom Level 2 - Understand)
status: scaffold
library: HTML/CSS/JavaScript with Canvas API for visual distortions
bloom_level: Understand (L2)
---

# Visual-Spatial Challenges Interactive Demonstration

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

Understand how visual-spatial problems affect daily activities by experiencing simulated visual-spatial challenges (Bloom Level 2 - Understand)

- **Bloom Level:** Understand (L2)
- **Bloom Verb:** Understand, explain, demonstrate
- **Library:** HTML/CSS/JavaScript with Canvas API for visual distortions

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Signs, Symptoms, and Early Recognition](../../chapters/05-signs-symptoms-recognition/index.md).

```text
Type: microsim

Learning Objective: Understand how visual-spatial problems affect daily activities by experiencing simulated visual-spatial challenges (Bloom Level 2 - Understand)

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: Understand, explain, demonstrate

Instructional Rationale: Interactive simulation is appropriate for Understanding-level objectives because allowing users to experience visual-spatial challenges firsthand builds empathy and deeper comprehension of how these deficits affect daily life. Direct experience is more impactful than reading descriptions.

Purpose: Demonstrate through interactive simulations what common visual-spatial problems feel like and how they affect everyday tasks

Canvas Layout:
- Simulation display area (600px): Shows interactive scenarios
- Task description panel (100px): Explains current challenge
- Control panel (100px): Scenario selection and navigation

Visual Elements and Interactive Scenarios:

Scenario 1: Depth Perception Challenge
- Task: "Pour water from pitcher into glass"
- Visualization: Pitcher and glass shown at table level
- User uses slider to control pouring angle
- Simulation removes depth cues (shadows, shading, perspective)
- Result: Without depth perception, very difficult to judge when pitcher aligns with glass
- Feedback: Shows what happens with normal depth perception vs. impaired

Scenario 2: Figure-Ground Discrimination
- Task: "Find the white pills on this table"
- Visualization: White pills on busy white patterned tablecloth
- User clicks on pills to identify them
- Shows how impaired figure-ground discrimination makes objects "invisible" against similar backgrounds
- Comparison view: Shows same scene with improved contrast

Scenario 3: Navigation in Familiar Space
- Task: "Navigate from bedroom to kitchen in this familiar home"
- Visualization: Simple floor plan with multiple rooms
- User selects path through rooms
- Simulation shows how spatial disorientation makes familiar layouts confusing
- Visual distortions make rooms appear different each time

Scenario 4: Spatial Relationships
- Task: "Set the table with plate, fork, knife, and glass"
- Visualization: Table with four items to place
- User drags items to positions
- Shows difficulty understanding spatial relationships (where items go relative to each other)
- Provides feedback on correct vs. impaired placement

Scenario 5: Left-Side Neglect
- Task: "Identify all the objects on this table"
- Visualization: Table with objects on both left and right sides
- Simulation shows left-side neglect by graying out left half
- User clicks objects they "see"
- Demonstrates how left-side neglect causes complete unawareness of one side

Interactive Controls:
- Scenario selector dropdown (5 scenarios)
- "Try Task" button to attempt each challenge
- "Show Normal Vision" toggle to compare normal vs. impaired
- "Next Scenario" button
- "Learn More" button that explains the deficit

Educational Content After Each Scenario:
- Brief explanation of the visual-spatial deficit demonstrated
- How it affects daily living
- Why it creates safety concerns
- How caregivers can help compensate

Visual Style: Realistic but simplified visuals
Color coding: Blue for correct, orange for impaired vision simulation
Responsive design adapts to window size

Implementation: HTML/CSS/JavaScript with Canvas API for visual distortions
Canvas size: 800x650px, fully responsive
```

## Related Resources

- [Chapter 5: Signs, Symptoms, and Early Recognition](../../chapters/05-signs-symptoms-recognition/index.md)
