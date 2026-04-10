---
title: Neuroplasticity in Action
description: Understand how neural connections strengthen through repeated use and learning (Bloom Level 2 - Understand)
status: scaffold
library: p5.js with physics simulation for network layout
bloom_level: Understand (L2)
---

# Neuroplasticity in Action

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

Understand how neural connections strengthen through repeated use and learning (Bloom Level 2 - Understand)

- **Bloom Level:** Understand (L2)
- **Bloom Verb:** Demonstrate, illustrate, explain
- **Library:** p5.js with physics simulation for network layout

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Brain Anatomy and Function](../../chapters/02-brain-anatomy-function/index.md).

```text
Type: microsim

Learning Objective: Understand how neural connections strengthen through repeated use and learning (Bloom Level 2 - Understand)

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: Demonstrate, illustrate, explain

Instructional Rationale: Interactive parameter exploration is appropriate because understanding neuroplasticity requires seeing how repetition and practice physically change neural connections. Students need to manipulate variables to understand the cause-effect relationship between learning and synaptic strength.

Purpose: Demonstrate how neural pathways strengthen with practice and weaken without use

Canvas Layout:
- Main visualization (600px): Shows neural network that changes with practice
- Control panel (200px): Practice controls and metrics display

Scenario: Learning to play a musical scale on piano

Initial State:
  Show: Sparse neural network with weak connections
  Display:
    - 5 neurons representing the skill pathway
    - Thin, light-colored synaptic connections
    - Synapse strength meter: 20% (weak)
    - Skill performance: "Beginner"

Interactive Controls:
- "Practice" button - Simulate one practice session
- "Practice 10x" button - Simulate 10 practice sessions
- "Rest for 1 week" button - Show what happens without practice
- "Reset" button - Return to beginner state
- Toggle "Show Synapse Detail" - Zoom into individual synapses

Data Visibility with Each Practice Session:
  Session 1:
    - Connections slightly thicker and brighter
    - Synapse strength: 20% → 25%
    - Skill performance: "Beginner"
    - New dendritic branch appears

  Session 10:
    - Connections noticeably thicker
    - Synapse strength: 45%
    - Skill performance: "Novice"
    - More dendritic branches

  Session 50:
    - Strong, thick connections
    - Synapse strength: 75%
    - Skill performance: "Intermediate"
    - Dense dendritic network
    - Myelin appearing on axons (white coating)

  Session 100:
    - Very strong connections
    - Synapse strength: 90%
    - Skill performance: "Advanced"
    - Highly myelinated pathways
    - Automatic/efficient processing

Rest Without Practice:
  After 1 week:
    - Connections slightly dimmer
    - Synapse strength: -5%
    - Message: "Some connections weakening from disuse"

  After 1 month:
    - Connections noticeably dimmer
    - Synapse strength: -15%
    - Some dendritic branches retracting
    - Message: "Use it or lose it—pathways need maintenance"

Visual Elements:
- Color-coded synapse strength:
  - Weak: Pale blue/thin lines
  - Moderate: Bright blue/medium lines
  - Strong: Deep blue/thick lines
  - Very strong: Purple/very thick lines with glow
- Dendritic sprouting animation (new branches forming)
- Myelin wrapping visual (white coating on strong connections)
- Particle effects showing neural activity level

Metrics Display Panel:
- Practice sessions completed: [number]
- Days since last practice: [number]
- Current synapse strength: [percentage with bar graph]
- Skill level: [Beginner → Novice → Intermediate → Advanced → Expert]
- Neural efficiency: [how fast signals travel]

Comparison Feature:
- Split screen showing two scenarios:
  - Scenario A: Regular practice (3x/week)
  - Scenario B: Irregular practice (once/month)
- Visual demonstration of different learning curves

Impact of Aging/Dementia Panel:
Toggle to show:
- Normal aging: Neuroplasticity slower but still present
- Healthy lifestyle: Enhanced neuroplasticity at any age
- Dementia: Neuroplasticity severely impaired, connections break down despite practice

Educational Callouts:
- "Hebbian Learning: Neurons that fire together, wire together"
- "Myelination speeds up signal transmission by 100x"
- "New dendritic spines can form within hours of learning"
- "Sleep consolidates new connections"

Responsive Design:
- Neural network scales to fit screen
- Maintains visibility of all connections
- Touch-friendly controls for mobile

Implementation: p5.js with physics simulation for network layout
Canvas: 100% width, 600px height
Animation: Smooth transitions showing gradual changes
```

## Related Resources

- [Chapter 2: Brain Anatomy and Function](../../chapters/02-brain-anatomy-function/index.md)
