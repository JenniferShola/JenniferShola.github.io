---
title: "Celebrating the End of My AI Learning Curriculum / How to Get Started with AI in Two Months"
excerpt: "I wasn't sure what to expect within two months but I can attest to learning so much more than what I originally expected. Learning independently isn't the insecure path."
date: 2020-11-23
categories:
  - OpenAIScholars
tags:
   - Open AI Scholars Program
   - Curriculum
   - Celebrations
---
*This post was written as apart of the Open AI Scholars program. It is Part 4 in the series. Read part [1]({% post_url 2020-10-25-learning-how-to-learn %}), [2]({% post_url 2020-11-10-first-month-checkin %}), [3]({% post_url 2020-11-20-developing-a-research-pov %}), [4]({% post_url 2020-11-23-celebrating-the-oai-curriculum %}), [5]({% post_url 2020-12-18-the-research-proposal %}), [6]({% post_url 2021-01-15-pivoting-your-research %}), [7]({% post_url 2021-01-29-huggingface-tutorial %}), [8]({% post_url 2021-02-12-generating-loss-curves %}), [9]({% post_url 2021-02-26-scaling-large-models %}). Find [all](/tags/#open-ai-scholars-program) posts relating to the program here.*

![Elmo helps me celebrate my accomplishments with a jig](https://media.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.gif)

I did it!

I wasn't sure what to expect within two months but I can attest to learning so much more than what I originally expected. Although the scholars program has given me access to mentors, this learning curriculum made me realize how much information is publicly available.

Learning independently isn't the insecure path.

This discipline hasn't been fully established, which means that we're still building the foundation. We're still a collection of individuals, learning independently and contributing bit by bit to the greater pool of knowledge of the team. Understanding this helped me assess where I was and how I could contribute to the field.

Cheers to a well run sprint!

To celebrate, I'd like to summarize some of my learnings and highlight which resources would help take someone from a newbie to practitioner.

## How to Get Started with AI in Two Months

While there are plenty of resources you could use that would take you significantly longer, I want to highlight what I think is the quickest way to survey the field and learn some of the basics of AI. These resources could be leverage before a research program, like the Open AI Scholars program, or during self-study.

### Before you begin

I personally believe the best preparation is being a software engineer but in the absence of that (and even if you are), I find the following two resources ***very*** newbie friendly.

###### 3Blue1Brown's Video Explanation and Visualization of Neural Networks [(on Youtube)](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)

3Blue1Brown is an incredible resource for visualizing technical concepts. The length of this playlist is only an hour so it's a great introduction into some of the fundamental concepts of deep learning.

###### The Hundred-Page Machine Learning Book [(on Amazon)](https://www.amazon.com/Hundred-Page-Machine-Learning-Book-ebook/dp/B07MGCNKXB)

I found this book to be a really good survey of the fundamentals of the field. It's a quick read and a great way to get comfortable with the terminology, esp if you're coming from a non-engineering background.

###### Jeremy Howard's Fast AI Course [(on YouTube)](https://fast.ai/)

I found the course's top-down approach to teaching deep learning  one of ***the best*** courses that will get you bulding highly-tuned ML models quickly. It's also jam packed with insights and the same best practices that has made him on of the best data scientists in the future. If you're unsure where to start as an engineer, start [here.](https://course.fast.ai/)

### The Basics

Here, we'll get into the major papers, algorithms, architectures, and concepts that are driving the current state of the art (SOTA) models for that sector. With the key paper under your belt, it'll make it easier to expand into that subfield of AI.

###### Computer Vision

Key Paper: [Deep Residual Learning for Image Recognition](https://arxiv.org/abs/1512.03385) with the [video explanation](https://www.youtube.com/watch?v=0tBPSxioIZE&ab_channel=deeplizard)

Key Topics: [Convolutional Neural Networks](https://cs231n.github.io/convolutional-networks/), [Backpropagation](https://www.youtube.com/watch?v=Ilg3gGewQ5U&t=1s&ab_channel=3Blue1Brown), [Batch Normalization](https://www.youtube.com/watch?v=dXB-KQYkzNU), [Generative Adversarial Nets](https://www.youtube.com/watch?v=OXWvrRLzEaU&ab_channel=AladdinPersson) (GANs)

Convolutional Neural Networks (CNNs) are the foundation of computer vision, while the variant, ResNet, made it possible to train up to hundreds and thousands of layers with improved performance.

Building a solid understanding of CNNs and the success of ResNet will prepare you to branch into the other applications of computer vision (i.e. image classification, semantic segmentation, image generation, etc.).

###### Natural Language Processing (NLP)

Key Paper: [Attention is All You Need](https://arxiv.org/abs/1706.03762) with the [video explanation](https://www.youtube.com/watch?v=iDulhoQ2pro)

Key Topics: [Word2Vec](https://jalammar.github.io/illustrated-word2vec/), [Embeddings](https://towardsdatascience.com/why-do-we-use-embeddings-in-nlp-2f20e1b632d2), [Transformers](http://jalammar.github.io/illustrated-transformer/), [Scaling Laws](https://arxiv.org/abs/2001.08361)

Important Retired Concepts: [Recurrent Neural Networks](https://towardsdatascience.com/recurrent-neural-networks-d4642c9bc7ce) (RNNs) and [Long Short-Term Memory](https://towardsdatascience.com/illustrated-guide-to-lstms-and-gru-s-a-step-by-step-explanation-44e9eb85bf21) (LSTMs) which might be described as [dead](https://towardsdatascience.com/the-fall-of-rnn-lstm-2d1594c74ce0) depending on who you talk to.

Many researchers are calling the current boom in NLP akin to the 2015 boom in computer vision and it's led primarily by transformers. Transformers are simple to implement and easily scalable. With additional discoveries around compute, researchers are testing the limits of language modelling.

###### Reinforcement Learning (RL)

Key Papers: Open AI's Recommended List of [Key Papers in RL](https://spinningup.openai.com/en/latest/spinningup/keypapers.html)

Since Open AI has already built quite a robust guide for learning RL, I'm going to recommend following their [guide](https://spinningup.openai.com/en/latest/index.html). It's the best way (in my opinion) to get up to speed on RL.

###### Subfields

Here are a few fields within AI that I think are interesting to explore:

- [AI Safety](https://vkrakovna.wordpress.com/ai-safety-resources/) & [AI Alignment](https://towardsdatascience.com/what-is-ai-alignment-2bbbe4633c7f)

- [Interpretability](https://distill.pub/)

- [Open-Endedness](https://www.youtube.com/watch?v=AwlLrugFcOc)

- [Meta Learning](https://lilianweng.github.io/lil-log/2018/11/30/meta-learning.html)

- [Active Learning](https://jacobgil.github.io/deeplearning/activelearning)

## Making the most out of the learning period

When I wrote the curriculum timeline for my first two months with Open AI, I mostly focused on the technical topics to explore but there was a thread of other skills that would've been useful to bake into the learning process.

Here are 10 things I'd recommend to make the most out of the learning period.

1. **Implement a paper and fine-tune it until you reach the achieved performance in the paper.**

    The most useful skill you could gain is learning how to replicate papers. So long as you can follow and reproduce a paper, you'll be in a position to replicate state of the art results, or have the foundation to build off of.

2. **Practice running an experiment.**

    Research is just a series of experiments. Practice here makes the research process less daunting and easier to get started.

3. **Learn how to monitor neural nets and plot outputs, error curves, and histograms.**

    This is mostly a coding skill but I'm adding it here due to the complexity of debugging neural nets. Finding a system you like that's reliably is key to being able to execute quickly.

4. **Keep a journal of interesting papers, questions, and ideas you have as you're learning.**

    Many of these ideas will become jumping off points for your own research exploratory. Keeping a log of what you find interesting can help you find what your next research should be.

5. **Keep a journal of possible writing topics for your blog.**

    It's so much harder to start blogging from a blank page. Keeping a running list of blog post ideas will make it easier once you decide to write. I often find the best blog post ideas are made from questions you ask or information you can't find. For example, having to come up with a research question made me realize that there are few posts that help you develop and decide a point of view on research. Chances are if you're looking for something and can't find it, someone newer than you are is also asking that question.

6. **Write additional blog posts (not just the ones required).**

    I believe in writing whenever you have a story you want to share. There are so many people who are interested in AI and ML but don't have the access or community to navigate this field. Sharing what you know, making it easier for people to build off of your foundation is essential (in my opinion) to quicker growth of the field. So write. Write while it's new. Write often. Write while you have audacity of a noob, communicating to other newbies and making it easier for others to join.

7. **Get to know people who work FT at the company.**

    This is a no brainer.

8. **Follow every researcher and company you're interested in on Twitter.**

    This has been one of my favorite ways to get exposed to different viewpoints in the industry. I wrote about some of my favorite AI/ML practitioners to follow here: [Building a Point of View on AI Research]({% post_url 2020-11-20-developing-a-research-pov %}).

9. **Attend conferences and join other AI/ML communities.**

    Like the previous point, you don't have to do it alone. The easiest way to enter the conversation and feel comfortable in the space is to join online communities of people with similar interests. AI has many. Don't hesitate to join.

10. **Ask a stupid question everyday.**

    Ask why, all the time. I think this one is more critical in AI because the facts aren't constant. If you can discover that a specific decision was made (5 years ago) due to limitations in compute but today's models have access to unlimited compute, you can begin to realize which concepts need to update to conform to the new world.

**That's it!**

Spending dedicated time to learn AI has been an amazing journey so far. My only regret is that I didn't do it sooner.

I hope with the information above, you're able to get up and get started with AI. Good luck.
