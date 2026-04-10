---
title: Behavior Management Decision Tree
description: Apply systematic problem-solving to challenging behaviors in moderate-stage dementia (Bloom Level 3 - Apply)
status: scaffold
library: HTML/CSS/JavaScript with interactive flowchart logic
bloom_level: Apply (L3)
---

# Behavior Management Decision Tree

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

Apply systematic problem-solving to challenging behaviors in moderate-stage dementia (Bloom Level 3 - Apply)

- **Bloom Level:** Apply (L3)
- **Bloom Verb:** Apply, use, implement, solve
- **Library:** HTML/CSS/JavaScript with interactive flowchart logic

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Progression Through Dementia Stages](../../chapters/06-dementia-stages/index.md).

```text
Type: workflow

Learning Objective: Apply systematic problem-solving to challenging behaviors in moderate-stage dementia (Bloom Level 3 - Apply)

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: Apply, use, implement, solve

Instructional Rationale: Decision tree format is appropriate for Apply-level objectives because learners must use knowledge to work through real scenarios and determine appropriate responses. The structured approach teaches systematic problem-solving for behavior management.

Purpose: Guide caregivers through systematic assessment and response to challenging behaviors common in moderate-stage dementia

Visual Style: Interactive flowchart with decision points and action boxes

Starting Point:
"Challenging behavior observed (agitation, aggression, wandering, resistance, etc.)"

Decision Point 1: Could there be a medical cause?
Question: "Is the behavior new or suddenly worse?"
- YES → Check for: pain, infection, constipation, medication side effects, hunger, thirst
  Action Box: "Contact healthcare provider to rule out medical causes"
  Example: "Sudden agitation might indicate urinary tract infection"
- NO → Proceed to Decision Point 2

Decision Point 2: Could there be an environmental trigger?
Question: "Is the environment overstimulating, confusing, or uncomfortable?"
- YES → Check for: too much noise, too many people, too hot/cold, poor lighting, unfamiliar setting
  Action Box: "Modify environment: reduce noise, adjust temperature, improve lighting, simplify space"
  Example: "Sundowning worse in dark rooms—increase lighting in late afternoon"
- NO → Proceed to Decision Point 3

Decision Point 3: Could there be an unmet need?
Question: "Could the person be trying to communicate a need?"
- YES → Check for: hunger, thirst, need for bathroom, pain, boredom, loneliness, need for activity
  Action Box: "Address the need: offer food/water, take to bathroom, provide comfort, offer activity"
  Example: "Wandering might mean 'I need to go to the bathroom' or 'I'm bored'"
- NO → Proceed to Decision Point 4

Decision Point 4: Could the task or situation be too difficult?
Question: "Is the person being asked to do something beyond their current abilities?"
- YES → Identify difficulty: too many steps, too complex, unfamiliar routine, requires skills they've lost
  Action Box: "Simplify the task: break into smaller steps, provide more help, adjust expectations"
  Example: "If bathing causes agitation, break it into smaller parts: wash face, rest, wash arms, rest..."
- NO → Proceed to Decision Point 5

Decision Point 5: Communication and emotional support
All paths lead here eventually
Action Box: "Respond with calm reassurance:
- Stay calm yourself
- Use simple, soothing language
- Validate emotions ('I see you're upset')
- Don't argue or correct
- Distract and redirect to pleasant activity
- Allow time for emotions to settle"

Interactive Features:
- User clicks through decision points based on scenario
- Each decision highlights relevant path
- Action boxes expand to show detailed strategies
- "Try an Example" button loads common scenarios:
  1. "Mother becomes agitated every evening around 5 PM"
  2. "Father refuses to let you help him shower"
  3. "Mother is walking around the house calling for her mother who died years ago"
- After working through example, shows analysis: "This is sundowning, likely triggered by fatigue and environmental changes (darkening sky). Address by: increasing lighting, offering calming activity, simplifying environment."
- "Behavior Log" feature to track what triggers led to behavior and what helped

Bottom Panel - Key Principles:
1. Look for causes before trying to change behavior
2. Medical issues should always be ruled out first
3. Most behaviors are attempts to communicate needs
4. Environment has huge impact on behavior
5. Distraction and redirection often work better than confrontation

Visual Style: Clean flowchart with color-coded paths
Color coding: Red (medical), Orange (environmental), Yellow (needs), Green (task modification), Blue (communication)
Responsive design adapts to window width

Implementation: HTML/CSS/JavaScript with interactive flowchart logic
Canvas size: 900x650px, fully responsive
```

## Related Resources

- [Chapter 6: Progression Through Dementia Stages](../../chapters/06-dementia-stages/index.md)
