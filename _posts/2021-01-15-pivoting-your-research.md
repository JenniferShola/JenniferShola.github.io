---
title: "Pivoting Direction in Research"
excerpt: "A closer look at my research project, Scaling Laws for Transformer Variants, and how the project has pivoted since it's inception."
date: 2021-01-15
categories:
  - OpenAIScholars
tags:
  - Open AI Scholars Program
  - Advice
  - Research
  - Research Proposal
  - Pivoting Research
  - Transformers
  - NLP
---
*This post was written as apart of the Open AI Scholars program. It is Part 6 in the series. Read [Part 1]({% post_url 2020-10-25-learning-how-to-learn %}), [Part 2]({% post_url 2020-11-10-first-month-checkin %}), [Part 3]({% post_url 2020-11-20-developing-a-research-pov %}), [Part 4]({% post_url 2020-11-23-celebrating-the-oai-curriculum %}), [Part 5]({% post_url 2020-12-18-the-research-proposal %}), [Part 7]({% post_url 2021-01-29-huggingface-tutorial %}), [Part 8]({% post_url 2021-02-12-generating-loss-curves %}). Find [all](/tags/#open-ai-scholars-program) posts relating to the program here.*

I'm barely two weeks into doing research and I've already pivoted. Before I get into the details, I want to provide some background on my research idea and what inspired the topic.

#### The Research Idea

My research project is my attempt at answering the question, how do architectural components affect the performance expectations of a model and by knowing the architecture of a model, can we predict it's performance? Connected to this question is the question around task suitability. Is there a discernable pattern among model architecture and performance within different types of tasks? If such a relationship between model architecture and task can be found, than would we be able to predict what architecture is needed to support the type of model success we're looking for. This is the big question. At a high level, this is the question I'm looking to answer but to make my project more attainable, I heavily scoped it down.

Instead of focusing on the large possibility of language models, I decided to focus on transformers. Why? Transformers are behind much of the innovation in modern NLP. As explained in the research proposal, transformers are popular due to their simplicity, high accuracy, improved performance, and ease of scalability. Despite their initial success, the limits are still relatively unknown. Even of the number of transformer variants that have been released, it's not clear how to compare and understand the performance of each variant, let alone of the architectural components within them.

#### The Research Proposal

A link to the original research proposal can be found [here](https://docs.google.com/document/d/17Y88ALvE9essv4QCD13-omQstpn3iz35k7R3R49zpNM/edit?usp=sharing).

My research project is titled *Scaling Laws for Transformer Architecture Variants*, which is a bit of a misnomer (upon further reflection). It suggests that I wanted to understand how each transformer variant scales but when I started my research, I was trying to understand which component of the proposed model was responsible for the performance received. As I started my research, I quickly realized that was not what I was testing.

The difference between the architecture of two transformer variants could actually be quite complex, making it difficult to understand which component of the proposed model is actually responsible for the expected results. By running experiments only on the variants, I was comparing apples and oranges; the models have too many structural differences to definitively understand which architectural component is driving the difference in performance, not without testing the structural elements *between* two variants, as opposed to testing *only* the variants themselves.

#### The Pivot

It became evident that by only experimenting with variants, there was a surplus of models in the gap between the variants that hadn't necessarily been tested or understood within context of the other variants and their expected performance. While the paper behind each model outlined it's individual expected results, it wasn't clear how each model would perform in tandem with one another and even if such a relationship were to be tested, it wasn't clear if it would tell us anything meaningful given that each model was designed to perform well on it's specific task.

It also became clear that the paper on which this project was inspired by, *Scaling Laws for Neural Language Models,* found empirical rules for the original (decoder-only) transformer model. It isn't clear if these rules directly transfer to other transformer variants. If they do, is the observed relationship the same? If it's different, can we calculate what it is and predict it's own curve? If it doesn't at all, why?

These are conceptual questions but they offered a clear turning point in the research direction and the type of research experiments that would be needed to answer these different questions.

While a pivot might not necessarily be needed for a researcher with unlimited time, I'm running on a race towards the end of the Open AI Scholars program. For me, it became clear that a pivot was needed.

#### So What's Next

>"When in doubt, pick one and rule out the unknowns in that before moving on to the next question."

So far, I have only slightly pivoted away from my initial research proposal. According to my original timeline, I was going to going to run a set of base experiments on different transformer variants. Now, I don't quite think that helps me answer the types of questions I was hoping to answer in my original research proposal.

Instead, I picked another transformer model, Transformer XL, and I'm testing it's performance on the cross-entropy loss. I want to understand how the loss scales as a power-law with model size, dataset size, and the amount of compute used for training. As I get the results back, I want to start comparing the results to the original decoder-only transformer and understand what the scaling laws are for Transformer XL. Assuming one exists, I want to understand the differences between the relationship and map out it's corresponding curve.

Should the results follow the same observed relationship (with the same slope), than I'd like to pivot into experimenting with the different architectural components between the transformer variants and study how changing the different parameters affects the performance of loss on a set of tasks.

Should the follow a *different* observed relationship (or no relationship at all), than I'd like to pivot into experimenting with the different transformer variants and study how the loss scales as a power-law for each variant, focusing on any correlations between the variants that help predict why such relationships do (or do not) follow an observed pattern.

That's the pivot.

#### On the Horizon

As luck would have it, this month has been a exciting one for transformers. While the larger AI community has raced to study transformers, new transformer models continue to break many milestones, most notably with new forms of transformer architectures (Microsoft’s DeBERTa, Open AI's CLIP and DALL*E) in domains such as time-series and computer vision, that seem to magically connect language and computer vision tasks.

It's confirmation that I'm on the right track.

Let's see where it takes us!
