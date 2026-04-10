---
title: How Memory Formation Works
description: Understand how the brain processes information to create memories through the three stages of encoding, storage, and retrieval (Bloom Level 2 - Understand)
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# How Memory Formation Works

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

Understand how the brain processes information to create memories through the three stages of encoding, storage, and retrieval (Bloom Level 2 - Understand)

- **Bloom Level:** Understand (L2)
- **Bloom Verb:** Explain, describe
- **Library:** p5.js

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Introduction to Dementia and Cognitive Health](../../chapters/01-intro-to-dementia/index.md).

```text
Type: microsim

Learning Objective: Understand how the brain processes information to create memories through the three stages of encoding, storage, and retrieval (Bloom Level 2 - Understand)

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: Explain, describe

Instructional Rationale: Step-through with worked examples is appropriate because the Understand/explain objective requires learners to trace the process with concrete data showing how a specific experience becomes a memory. This allows students to predict what happens at each stage before seeing the result.

Purpose: Demonstrate the three-stage process of memory formation using a concrete example

Canvas Layout:
- Main area (700px): Visual representation of memory stages
- Control panel (100px): Step-through controls and information display

Example Scenario: "Meeting someone new at a party"

Data Visibility Requirements:
Stage 1 - Encoding (Sensory Input):
  Show: Person shaking hands with "Sarah"
  Display sensory inputs:
    - Visual: Sarah's face, red dress, brown hair
    - Auditory: Voice saying "Hi, I'm Sarah"
    - Context: Party setting, music playing
  Caption: "Your senses gather information about the new person"

Stage 2 - Storage (Brain Processing):
  Show: Information traveling from sensory areas to hippocampus
  Display processing steps:
    - Pattern recognition: Face features identified
    - Association: Name connected to face
    - Context tagging: Party location, time, emotions
    - Hippocampus consolidation: Temporary memory formed
  Caption: "The hippocampus processes and consolidates the information"

Stage 3 - Long-term Storage:
  Show: Memory moving from hippocampus to cerebral cortex
  Display:
    - Synaptic connections forming (illustrated as connected nodes)
    - Memory integrated with related memories (other Sarahs you know, other parties)
    - Strength indicator: Initial memory strength (medium)
  Caption: "With repetition and sleep, the memory becomes permanent in the cortex"

Stage 4 - Retrieval:
  Show: Seeing Sarah again at another event
  Display retrieval process:
    - Cue: Seeing Sarah's face triggers memory search
    - Hippocampus activates relevant cortex regions
    - Memory reconstructed: Name, context, previous meeting recalled
    - Success indicator: "That's Sarah from the party!"
  Caption: "When you see Sarah again, cues trigger memory retrieval"

Interactive Controls:
- "Next Step" button - Advances to next stage
- "Previous Step" button - Goes back one stage
- "Reset" button - Returns to beginning
- "Show All" button - Displays all four stages simultaneously for comparison
- Progress indicator showing current step (1 of 4, 2 of 4, etc.)

Visual Elements:
- Simple human silhouettes for people
- Color-coded brain regions (hippocampus in orange, cortex in blue)
- Animated arrows showing information flow between stages
- Icon-based representation of sensory inputs (eye, ear, hand)
- Node-and-connection diagram for synaptic connections

What Happens in Dementia Panel:
After completing all four stages, display comparison:
- Show how hippocampus damage in dementia disrupts encoding
- Illustrate difficulty forming new memories
- Demonstrate why old memories (already in cortex) remain longer

Implementation: p5.js
Canvas: 100% width, 600px height
Default state: Stage 1 visible, others hidden
Animation: Smooth transitions between stages (300ms)
```

## Related Resources

- [Chapter 1: Introduction to Dementia and Cognitive Health](../../chapters/01-intro-to-dementia/index.md)
