---
title: "Building a Point of View on AI Research"
excerpt: "Part of developing a unique point-of-view is knowing which truths to accept, what truths to question, and which truths to build off of. In search of answers I did what I have always done in times of need: consult an expert."
date: 2020-11-20
categories:
  - OpenAIScholars
tags:
  - Open AI Scholars Program
  - Advice
  - Learning
  - Research
---
*This post was written as apart of the Open AI Scholars program. It is Part 3 in the series.  Read part [1]({% post_url 2020-10-25-learning-how-to-learn %}), [2]({% post_url 2020-11-10-first-month-checkin %}), [3]({% post_url 2020-11-20-developing-a-research-pov %}), [4]({% post_url 2020-11-23-celebrating-the-oai-curriculum %}), [5]({% post_url 2020-12-18-the-research-proposal %}), [6]({% post_url 2021-01-15-pivoting-your-research %}), [7]({% post_url 2021-01-29-huggingface-tutorial %}), [8]({% post_url 2021-02-12-generating-loss-curves %}), [9]({% post_url 2021-02-26-scaling-large-models %}). Find [all](/tags/#open-ai-scholars-program) posts relating to the program here.*

The precursor to developing a research project is developing a point-of-view of the industry. This week, I found myself trying to brainstorm new research projects without the slightest indication if the ideas I created were truly innovative, useful, and original.

*Has it been tried before? Even if it'd been tried, has anything in the industry changed that would make it viable now? Can it be easily scoped to 4 months? Is it the most important problem to work on? Is it too important of a problem to work on, making it likely that other AI institutions have already deployed teams to the problem you're attempting to to solve by yourself?* Until you've built a system to address it, the uncertainty will wear away at you. A point-of-view is that system.

Our POVs must reconcile our ideas of the future with the truths we've created and debated about. Part of developing a unique point-of-view is knowing which truths to accept, what truths to question, and which truths to build off of. In search of answers, I did what I have always done in times of need: consult an expert. The goal isn't to be told how to think but to understand *what* they believe and why, recognizing that the biggest advantage you have is simply being fresh eyes to an old problem.

**Developing bad research ideas is part of the process of ideating.**

When I look back to the beginning of the Open AI Scholars program, most of my research ideas were bad. They sounded pretty good in theory but realistically, the lacked the type of industry knowledge that informed how viable these problems were in the real world. On the other hand, there were many adages that upon reflection, were universally accepted processes in machine learning that seemed weird more people hadn't challenged.

Some conventions I've begun to question are:

1. AI researchers tend to throw as much data as possible and then prune that data (via randomly distributed dismissals of the data) from the training model. Why isn't more done to process the data (via changing the ordering, size, frequency by which the data is refresh) before the modeling process?

2. Much of ML/AI modeling utilizes a single, static labeled training dataset. Why? Why not experiment with streamed data and other data pipelines that reflect modern software systems.

3. Much of ML/AI research focuses on advancements in modeling but it is the insight learned from modeling scaling laws of language models, that led to the insight around increased output from bigger language models.

**More applied ML/AI research is needed to bridge the gap between research and industry.**

After stalking AI researchers on twitter and watching [debates](https://www.youtube.com/watch?v=fKk9KhGRBdI) between figures like Yann Lecun and Christopher Manning, my current point-of-view is that AI research is *very* disconnected from the needs of machine learning practitioners and in this gap is a tremendous opportunity for junior researchers to advance the field. I believe this is one of the best ways to understand which ideas (for short term research projects) are the most valuable to the research community.

Next week, I'll chat about which parts of AI research I'm interested in. Until then, I recommend building out your point-of-view on AI research. For beginners, I recommend following AI researchers on twitter (who frequently share tips and insights), subscribing to AI newsletters, and tuning in to online segments that feature prominent AI researchers. Below are a few of my favorites to get started.

#### AI Researchers & ML Practitioners To Follow

I debated listing many (and more prominent) people but decided against it. Start with the people below and then go down Twitter's People to Follow rabbit hole, adding everyone who works in the field.

If you don't know where to start, researchers from [OpenAI](https://twitter.com/OpenAI) and [DeepMind](https://twitter.com/DeepMind) are a good place to start. The list below skews towards people who (in my personal opinion) share frequently and are very inclusive to beginners.

- Santiago's [List of People to Follow](https://twitter.com/svpino/status/1302107316188307456) - This is a great starter list of people. [Santiago](https://twitter.com/svpino) (who wrote the list) is also a great person for beginners to follow.

- [Shreya Shankar](https://twitter.com/sh_reya)

- [Elvis S.](https://twitter.com/omarsar0)

#### AI Podcasts I'd Recommend

- [The Lex Fridman Podcast](https://lexfridman.com/podcast/) [(youtube)](https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4) - interviews prominent leaders of the future

- [This Week in Machine Learning and AI](https://twimlai.com/) (twimlai) - interviews AI practitioners

- [Harvard Machine Learning Theory](https://mltheory.org/) - subscribe to the seminar series

#### AI Newsletters I'd Recommend

- [The Sequence](https://thesequence.substack.com/) - learning ML and AI through a newsletter

- [NLP News](http://newsletter.ruder.io/) - about recent developments in natural language processing

- [The Alignment Newsletter](http://rohinshah.com/alignment-newsletter/) - about AI alignment

- [Your guide to AI](https://newsletter.airstreet.com/) - monthly analysis of AI technology, geopolitics, research, and startups

- [The ChinAI Newsletter](https://chinai.substack.com/) - about modern developments in China's AI landscape
