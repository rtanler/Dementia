---
title: Tokie Mascot Test
description: This test page shows all mascot images as well as the admonition styles for our pedagogical agent, Tokie.
image: img/mascot/welcome.png
og:image: img/mascot/welcome.png
---
# Tokie - Mascot Test

This page shows all mascot images as well as the admonition styles for reference. Check that all the images have a transparent background
and do not have excessive padding around the drawing.
Note that the images have a dashed blue border around them so you can clearly see the padding.

<style type="text/css">
  img {
    border: 1px dashed blue;
  }
</style>

## Image Tests

<div class="grid cards" markdown>
1. Welcome
![](../img/mascot/welcome.png){ width="150px"}
2. Thinking
![](../img/mascot/thinking.png){ width="150px"}
3. Tip
![](../img/mascot/tip.png){ width="150px"}
4. Warning
![](../img/mascot/warning.png){ width="150px"}
5. Encouraging
![](../img/mascot/encouraging.png){ width="150px"}
6. Celebration
![](../img/mascot/celebration.png){ width="150px"}
7. Neutral
![](../img/mascot/neutral.png){ width="150px"}
</div>

## Admonition Tests

!!! mascot-welcome "Tokie Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Tokie welcomes you">
    Welcome! I'm Tokie, your guide through this textbook on dementia
    and cognitive health. Whether you're a caregiver, family member,
    or healthcare professional, we'll explore this important topic
    together with compassion and clarity. Use this admonition at the
    **start of every chapter** to preview what the reader will learn
    and set a warm, approachable tone.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Tokie is thinking">
    Use this admonition when introducing a **core concept** that
    connects multiple ideas — for example, explaining how amyloid
    plaques and tau tangles relate to different types of dementia,
    or how neuroplasticity offers hope even after cognitive decline
    begins. Aim for **2-3 per chapter**, placed where the reader
    needs to pause and absorb a fundamental idea before moving on.

!!! mascot-tip "Tokie's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Tokie shares a tip">
    Use this admonition for **practical, actionable advice** that
    caregivers and families can apply immediately. Examples include
    communication strategies ("use short, simple sentences"), daily
    routine suggestions, medication reminders, or tips for navigating
    doctor visits. These should feel like friendly guidance from
    someone who has been there before.

!!! mascot-warning "Common Mistake"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Tokie warns you">
    Use this admonition to flag **misconceptions, safety risks, or
    common errors**. Examples: confusing normal aging with dementia
    symptoms, assuming all memory loss is Alzheimer's, giving
    medications without consulting a doctor, or leaving safety
    hazards in the home. Keep the tone caring rather than alarming —
    the goal is to protect, not frighten.

!!! mascot-encourage "You've Got This!"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Tokie encourages you">
    Use this admonition when the content is **emotionally difficult
    or medically complex** — topics like end-of-life planning, legal
    guardianship, caregiver burnout, or understanding brain scan
    results. Acknowledge the difficulty and reassure the reader
    that struggling with this material is normal. This is especially
    important in chapters on grief, behavioral changes, and
    advanced-stage care.

!!! mascot-celebration "Excellent Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Tokie celebrates">
    Use this admonition at the **end of major sections or chapters**
    to celebrate the reader's progress. Summarize what they've
    accomplished — for example, "You now understand the three main
    types of dementia and how they differ." This reinforces learning
    and motivates the reader to continue. Limit to **once per
    chapter**, at the end.

!!! mascot-neutral "A Note from Tokie"
    <img src="../../img/mascot/neutral.png" class="mascot-admonition-img" alt="Tokie notes">
    Use this admonition for **general sidebars, context, or
    background information** that doesn't fit the other categories.
    Examples: explaining why a topic is included in the textbook,
    providing historical context about dementia research, or noting
    that terminology varies across countries and medical traditions.
    This is the default when no specific emotional tone is needed.

## Usage Guidelines

| Admonition | When to Use | Frequency |
|------------|-------------|-----------|
| `mascot-welcome` | Chapter openings, section introductions | Once per chapter (at start) |
| `mascot-thinking` | Core concepts, connections between ideas | 2-3 per chapter |
| `mascot-tip` | Practical caregiver/family advice | As needed |
| `mascot-warning` | Misconceptions, safety risks, common errors | As needed |
| `mascot-encourage` | Emotionally heavy or complex medical content | Where readers may struggle |
| `mascot-celebration` | Chapter endings, milestone achievements | Once per chapter (at end) |
| `mascot-neutral` | General notes, context, background | As needed |

**Restraint:** Do not use more than 5-6 mascot admonitions per chapter. Do not place them back-to-back.
