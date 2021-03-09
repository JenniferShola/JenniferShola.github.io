---
title: "Scaling Larger Models For the Compute Limited"
excerpt: ""
date: 2021-02-26
published: false
categories:
  - OpenAIScholars
tags:
  - Open AI Scholars Program
  - Transformers
  - Technical
  - Scaling Models
  - Compute Limited
  - Compute
---
*This post was written as apart of the Open AI Scholars program. It is Part 9 in the series. Read part [1]({% post_url 2020-10-25-learning-how-to-learn %}), [2]({% post_url 2020-11-10-first-month-checkin %}), [3]({% post_url 2020-11-20-developing-a-research-pov %}), [4]({% post_url 2020-11-23-celebrating-the-oai-curriculum %}), [5]({% post_url 2020-12-18-the-research-proposal %}), [6]({% post_url 2021-01-15-pivoting-your-research %}), [7]({% post_url 2021-01-29-huggingface-tutorial %}), [8]({% post_url 2021-02-12-generating-loss-curves %}). Find [all](/tags/#open-ai-scholars-program) posts relating to the program here.*

this week I found myself running out of memory and running into issues running my models

some advice

start with a variety of smaller models (do a test on all of the sizes and measure if results scale linearly or in any predictable pattern). once you establish predictability, you can run all of your tests on smaller models and then extrapulate what the larger results would be if you decided to run the model

