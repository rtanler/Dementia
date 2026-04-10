# Update Letter to Rick — April 10, 2026

Hi Rick,

I wanted to give you a quick update on a really productive day on the
*Understanding Dementia* textbook. A lot landed today, and I think you'll
like where the book is heading. The short version: the whole book now has
a warm, consistent voice; the About page has the kind of "why this matters"
opening you and I have talked about; a number of the diagrams that were
broken or missing are now fixed and visible; and we cleaned up a bunch of
small things that were making the site feel half-finished. The live site
is at <https://rtanler.github.io/Dementia/> if you want to click around.

Here's what changed today, in plain English:

## 1. Tokie now guides readers through every chapter

The biggest change by far. Tokie — our friendly pedagogical mascot — now
appears in **all 15 chapters**, not just the first two. Every chapter
opens with Tokie welcoming the reader and previewing what they'll learn,
then Tokie reappears at three or four emotionally important moments
during the chapter, and finally signs off at the end with a celebration
of what the reader just accomplished.

In total there are now **76 Tokie callouts** across the book. They land
at the spots where readers most need a friendly voice — for example:

- In Chapter 6 (Stages of Dementia), Tokie pauses *before* the
  late-stage section to say "take a breath with me," so readers enter
  the hardest part of the chapter with support already in hand.
- In Chapter 7 (Managing Behaviors), Tokie tells stressed caregivers
  "this is not your fault" right after the section explaining that
  difficult behaviors are symptoms of the disease, not choices.
- In Chapter 9 (Medical Treatments), Tokie warns readers about the
  over-the-counter medications (like Benadryl PM) that can cancel out
  Alzheimer's medications — exactly the kind of thing a well-meaning
  caregiver could miss.
- In Chapter 15 (Legal and Financial), Tokie's final callout is a
  proper book-wide farewell that recaps the journey, points readers at
  the Alzheimer's Association 24/7 helpline and their local Area Agency
  on Aging, and signs off with "With love, Tokie." It's the reader's
  last impression of the book, and I wanted it to feel like a friend
  saying goodbye rather than a textbook ending.

The voice is consistent from chapter to chapter, so readers should feel
like they have one steady companion across all 15 chapters instead of
a clinical narrator interrupted by a friendly cartoon.

## 2. The About page now tells readers *why* this book exists

The old About page was only a few sentences. The new one opens with a
section called **"Why Dementia Education Matters Now More Than Ever"**
that lays out the scale of the problem in plain terms:

- About **7 million Americans** are living with Alzheimer's today
- Almost **12 million unpaid family caregivers** carry the daily load
- The cost in the United States alone is projected at **$360 billion** this year
- More than **55 million people** worldwide live with dementia, with
  **10 million new diagnoses every year** — about one every three seconds
- The global number is projected to reach **139 million by 2050**

All of those numbers are footnoted to the Alzheimer's Association's
2024 Facts and Figures and the World Health Organization's Dementia Fact
Sheet, so readers (and reviewers) can verify them.

The page also includes:

- A short callout from Tokie about the open-access mission — that this
  whole book is free, with no paywall, because every family facing
  dementia deserves clear information
- A section explaining what makes this book different (the 9th–10th grade
  reading level, the 200-concept learning graph, the interactive
  MicroSims, and Tokie)
- Your existing author bio, preserved as it was
- A new **"How to Cite This Book"** section with proper academic citation
  formats (APA, MLA, Chicago, BibTeX) so faculty and researchers can
  reference it in coursework and papers

## 3. Several broken diagrams are now working

A few of the interactive brain diagrams in the early chapters were
broken — they were pointing at folder names that didn't exist, so the
reader saw a blank box where the diagram was supposed to be. The Four
Lobes of the Brain diagram in Chapter 2 was the most visible of these.
Those are all fixed now and the diagrams render properly.

We also added **17 new generated images** across the MicroSim gallery —
beta-amyloid production, dementia stages, healthy vs. abnormal tau, the
four lobes of the brain, synaptic communication, and a dozen others.
The MicroSims page is a much richer gallery now.

## 4. The interactive diagrams now use dementia-appropriate labels

The interactive diagrams (the ones where readers can click on a brain
region to learn about it) had a small visible bug: when readers clicked
on a region, the explanation popup was labeled **"AP Exam Tip:"** — a
leftover from an earlier calculus textbook that shared the same
underlying code. It looked out of place in a dementia book.

We replaced those labels with appropriate, bolded ones throughout:
**"Dementia Impact:"** on the brain anatomy diagrams, **"Alzheimer's
Relevance:"** on the beta-amyloid diagram, and **"Symptom Link:"** on
the rare tauopathies diagram. Same content, but it now sounds like it
belongs to *this* book.

## 5. Smaller polish that adds up

A handful of smaller fixes also went in today that aren't individually
exciting but together make the site feel more finished:

- The right-side "On this page" navigation panel was hiding the diagram
  headings. That's fixed — readers can now jump directly to any diagram
  in a chapter from the side panel.
- A favicon and Apple touch icons were added so the site shows a proper
  brand mark in browser tabs and on phone home screens.
- The chapter quizzes were tidied up so the questions are always visible
  by default and only the *answers* are hidden behind a "Show Answer"
  click. Readers shouldn't have to click to see what to think about.
- The build process used to print fourteen "this file isn't in the
  navigation" warnings every time we deployed. That's down to zero now —
  the scratch files and image-generation prompts are properly excluded.
- We deployed the live site three times today at natural checkpoints,
  so everything described above is already up and viewable.

## What's next

A few small things I'd love your eye on when you have a moment:

1. **Read through Chapter 15's farewell.** It's the reader's last
   impression of the whole book and Tokie's goodbye. I'd love to know
   if it lands the way I hope it does.
2. **Take a look at the new About page.** Especially the statistics —
   you may want to tweak the framing or the emphasis on the Tokie
   open-access callout.
3. **Click the four-lobes diagram in Chapter 2.** That's the one that
   was previously broken; I want to make sure it's working for you too.

There are still a few things left on the list — a full book-wide
voice-consistency read to catch any places where the prose around a
Tokie callout sounds jarring next to it, and a small polish pass on a
couple of the longer chapters (10 and 11 in particular have a lot of
sub-sections that could use a light editorial touch). But the bones of
the book are in really good shape now.

It was a great day on the project. Thanks for trusting the process —
I think you're going to be proud of where this is.

— Dan
