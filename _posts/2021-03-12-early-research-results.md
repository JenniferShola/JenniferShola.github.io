---
title: "Understanding Early Research Results From Training"
excerpt: "Every research project has a barometer on which they judge their research on. Mine is performance, and more specifically, loss as it's the best metric for understanding how my language model is learning the underlying dataset."
date: 2021-03-12
categories:
  - OpenAIScholars
tags:
  - Open AI Scholars Program
  - Transformers
  - Huggingface
  - Technical
  - Tutorial
  - NLP
  - Loss Curves
---
*This post was written as apart of the Open AI Scholars program. It is Part 10 in the series. Read [Part 1]({% post_url 2020-10-25-learning-how-to-learn %}), [Part 2]({% post_url 2020-11-10-first-month-checkin %}), [Part 3]({% post_url 2020-11-20-developing-a-research-pov %}), [Part 4]({% post_url 2020-11-23-celebrating-the-oai-curriculum %}), [Part 5]({% post_url 2020-12-18-the-research-proposal %}), [Part 6]({% post_url 2021-01-15-pivoting-your-research %}), [Part 7]({% post_url 2021-01-29-huggingface-tutorial %}). Find [all](/tags/#open-ai-scholars-program) posts relating to the program here.*

Every research project has a barometer on which they judge their research on. Mine is performance or more specifically, loss, as it's the best metric for understanding how my language model is learning the underlying dataset.

For most research projects, the first experiment would be used to set the baseline but since my project draws it's hypothesis from the original Scaling Laws paper, I'm going to use the results found [here](https://arxiv.org/pdf/2001.08361.pdf). Figure 2 specifically.

I'm interested in building loss curves and trying to understand the average loss over training steps and the average loss over tokens. I want to see how the loss trends as the number of steps (or tokens) scales logarithmically, this trend line representing the relationship between performance and scale, and the relationship between this trend line and Figure 2 representing the relationship between performance among different architectural shapes (within the same architectural family).

So I wrote some [code](https://github.com/) to generate some baseline experiments.

**Here are the results:**

Remaining post coming soon.
