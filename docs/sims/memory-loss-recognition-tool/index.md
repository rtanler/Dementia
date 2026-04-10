---
title: Memory Loss Recognition Tool
description: Apply knowledge to distinguish normal age-related memory changes from concerning dementia symptoms (Bloom Level 3 - Apply)
status: scaffold
library: HTML/CSS/JavaScript with scenario data structure
bloom_level: Apply (L3)
---

# Memory Loss Recognition Tool

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

Apply knowledge to distinguish normal age-related memory changes from concerning dementia symptoms (Bloom Level 3 - Apply)

- **Bloom Level:** Apply (L3)
- **Bloom Verb:** Apply, demonstrate, solve
- **Library:** HTML/CSS/JavaScript with scenario data structure

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Signs, Symptoms, and Early Recognition](../../chapters/05-signs-symptoms-recognition/index.md).

```text
Type: microsim

Learning Objective: Apply knowledge to distinguish normal age-related memory changes from concerning dementia symptoms (Bloom Level 3 - Apply)

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: Apply, demonstrate, solve

Instructional Rationale: Scenario-based assessment is appropriate for Apply-level objectives because learners must use their knowledge to evaluate realistic situations and make judgments about whether symptoms are concerning. This active application reinforces learning better than passive reading.

Purpose: Help users evaluate memory-related scenarios and determine whether they represent normal aging or potential dementia warning signs

Canvas Layout:
- Scenario presentation area (500px): Displays case descriptions
- Decision area (300px): User selection and feedback

Visual Elements:
- Scenario card showing a described memory situation
- Two buttons: "Normal Aging" and "Dementia Concern"
- Feedback panel that appears after selection
- Progress indicator (Scenario X of 10)
- Score tracker showing correct/incorrect selections

Interactive Controls:
- "Normal Aging" button - Select if scenario represents typical age-related change
- "Dementia Concern" button - Select if scenario suggests possible dementia
- "Next Scenario" button (appears after feedback)
- "Review Answers" button at end

Sample Scenarios (10 total):
1. "Margaret, 72, occasionally forgets where she parked her car in a large parking lot but figures it out by retracing her steps." (Normal)
2. "Robert, 68, asks his wife what time their dinner reservation is, receives an answer, then asks the same question three more times within 30 minutes." (Concern)
3. "Linda, 75, can't recall the name of her neighbor but recognizes her face and remembers she has two dogs." (Normal)
4. "James, 70, completely forgot his daughter's wedding anniversary even though they discussed it yesterday and he wrote it down." (Concern)
5. "Susan, 66, walked into the kitchen and forgot why, but remembered when she saw the coffee maker." (Normal)
6. "David, 73, drove to his weekly card game (same location for 5 years) and couldn't remember how to get there." (Concern)
7. "Patricia, 69, occasionally uses the wrong word but corrects herself immediately." (Normal)
8. "Michael, 74, repeatedly tells the same story about his grandchildren as if sharing it for the first time, several times per day." (Concern)
9. "Karen, 71, needs to use more lists and reminders than she did 10 years ago to remember errands." (Normal)
10. "Thomas, 67, can't remember taking his medication 20 minutes ago and takes another dose, happens multiple times per week." (Concern)

Feedback Content:
For each scenario, provide:
- Correct answer
- Explanation of why this represents normal aging or dementia concern
- Key features that informed the decision
- What to watch for if concerned

Final Summary:
- Score out of 10
- Review of common distinguishing features
- Recommendation: "If you notice these concerning patterns in yourself or a loved one, consult a healthcare provider for evaluation"

Visual Style: Clean, approachable design with clear typography
Color coding: Green for normal aging, orange for dementia concern
Responsive design adapts to window width

Implementation: HTML/CSS/JavaScript with scenario data structure
Canvas size: 800x600px, fully responsive
```

## Related Resources

- [Chapter 5: Signs, Symptoms, and Early Recognition](../../chapters/05-signs-symptoms-recognition/index.md)
