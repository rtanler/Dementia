---
title: Synaptic Communication
description: Understand how neurons communicate across synapses through electrical and chemical signals (Bloom Level 2 - Understand)
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Synaptic Communication

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

Understand how neurons communicate across synapses through electrical and chemical signals (Bloom Level 2 - Understand)

- **Bloom Level:** Understand (L2)
- **Bloom Verb:** Explain, describe
- **Library:** p5.js

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Brain Anatomy and Function](../../chapters/02-brain-anatomy-function/index.md).

```text
Type: microsim

Learning Objective: Understand how neurons communicate across synapses through electrical and chemical signals (Bloom Level 2 - Understand)

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: Explain, describe

Instructional Rationale: Step-through demonstration is appropriate because understanding synaptic communication requires learners to trace the process with concrete visualization of both electrical and chemical events. Allowing students to progress at their own pace helps them grasp the conversion from electrical to chemical to electrical signals.

Purpose: Demonstrate the step-by-step process of neural communication across a synapse

Canvas Layout:
- Main visualization area (700px): Shows two neurons with synapse between them
- Control panel (100px): Step controls and information display

Data Visibility Requirements:

Step 1 - Resting State:
  Show: Two neurons at rest separated by synaptic gap
  Display:
    - Presynaptic neuron (sending) with axon terminal
    - Synaptic cleft (gap) clearly marked
    - Postsynaptic neuron (receiving) with dendrite receptors
    - Vesicles containing neurotransmitters in axon terminal
  Caption: "Neurons at rest, ready to communicate"

Step 2 - Electrical Signal Arrives:
  Show: Action potential (electrical wave) traveling down axon
  Display:
    - Animated electrical signal moving along axon
    - Signal represented as colored wave (yellow/orange)
    - Voltage indicator showing change from -70mV to +40mV
  Caption: "Electrical signal travels down the axon toward the synapse"

Step 3 - Neurotransmitter Release:
  Show: Vesicles releasing neurotransmitters into synaptic cleft
  Display:
    - Vesicles moving to membrane and releasing contents
    - Neurotransmitter molecules (small colored circles) visible in cleft
    - Number count: "50 neurotransmitter molecules released"
  Caption: "Electrical signal triggers chemical release"

Step 4 - Crossing the Gap:
  Show: Neurotransmitters diffusing across synapse
  Display:
    - Molecules moving across gap (animated)
    - Distance marker: "40 nanometers"
    - Time elapsed: "0.5 milliseconds"
  Caption: "Chemical messengers cross the synaptic gap"

Step 5 - Binding to Receptors:
  Show: Neurotransmitters binding to receptor sites
  Display:
    - Molecules fitting into receptors (lock-and-key visual)
    - Binding count: "30 of 50 molecules successfully bind"
    - Receptor types labeled
  Caption: "Neurotransmitters bind to receptors like keys in locks"

Step 6 - New Signal Generated:
  Show: Electrical signal starting in receiving neuron
  Display:
    - New action potential beginning in postsynaptic neuron
    - Voltage change: -70mV → -65mV → threshold → new signal
    - Signal strength indicator
  Caption: "Binding triggers a new electrical signal in the next neuron"

Step 7 - Signal Continuation:
  Show: Signal traveling along second neuron
  Display:
    - Full communication cycle complete
    - Neurotransmitters being recycled/cleared from cleft
    - Ready for next signal
  Caption: "The signal continues through the neural network"

Interactive Controls:
- "Next Step" button - Advances to next stage
- "Previous Step" button - Returns to previous stage
- "Reset" button - Returns to resting state
- "Play All" button - Auto-advances through all steps
- Progress indicator (1/7, 2/7, etc.)
- Speed control slider (for auto-play)

Visual Elements:
- Color-coded neurons (blue for presynaptic, green for postsynaptic)
- Animated action potential (yellow wave)
- Neurotransmitter molecules (small red/orange circles)
- Receptor binding sites (lock shapes on postsynaptic membrane)
- Clear labeling of all structures
- Voltage meters showing electrical changes

Impact of Dementia Panel:
After completing all steps, show comparison:
- Normal synapse: Strong signal transmission
- Dementia-affected synapse: Fewer neurotransmitters, damaged receptors, weakened signal
- Illustrate how synapse loss contributes to cognitive decline

Responsive Design:
- Canvas adjusts to window width
- Maintains clear visibility of all elements
- Text size scales for readability

Implementation: p5.js
Canvas: 100% width, 600px height
Default state: Step 1 visible
Animation timing: 500ms transitions between steps
```

## Related Resources

- [Chapter 2: Brain Anatomy and Function](../../chapters/02-brain-anatomy-function/index.md)
