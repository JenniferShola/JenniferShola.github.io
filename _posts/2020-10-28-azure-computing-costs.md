---
title: "How to Use Azure Containers to Minimize Computing Costs"
date: 2020-10-28
categories:
  - Technical
tags:
  - Docker
  - Azure
  - ML Infrastructure
  - Starter Code
  - Computing Costs
---

This is a follow up to the blog post about containerized flows using docker and azure. Please read about it (updated link coming soon!).

In my last blog post, I gave some background on some of the technical challenges we're facing in the Open AI scholars program. Specifically, the scholars are conducting research projects as part of the program and we wanted to create a system that made development on GPUs accessible and easy, while limiting the amount of computing costs we consume. GPUs are expensive toys and no one wants to blow through a 6 month allotment  of computing costs in 2!

I posed the [question](https://jennifershola.github.io/technologies/starter-ml-on-docker-and-azure#how-can-i-use-containers-to-minimize-computing-costs), how can I use containers to minimize computing costs while developing deep learning models on GPUs? The starter code for deep learning development has been updated (updated link coming soon). Here is a breakdown of that solution.

### Structuring The Development Environment

The original question was, to save computing costs, is it better to leverage docker containers on Azure virtual machines or Azure containers configured with packages like Docker and Cuda? It turns out, the answer is both:

When we're building models that require **low processing power**, it'll be ideal to:

- Use existing tools (Google Research's Colab, Jupyter Notebook)

  These tools require very little setup and could allow you to begin training models with little overhead. I would recommend running `jupyter notebook` first (as it's the quickest) but Colab does come with (albeit limited) access to GPUs.

- Run a (small) Azure Virtual Machine

  This is a straightforward suggestion and the hardware limits for this would widely depend on the type of modeling you're doing. The goal here is to run a virtual machine with the largest hardware capacity you can afford to have consistently running. The idea being that you are running a machine that gives you just enough power to work efficiently but that is still cheap enough that you can have it mostly online during extended hours of development.

When we're building models that require **high processing power**, it'll be ideal to:

- Run Azure Containers

  Containers are great for all one-off tasks, particularly for models that would allow the engineer to parallelize the code and run it on hardware optimized for heavy processing.

While it's possible to unite the code in a git repo, it's likely better to have two separate flows depending on the processing power needed to process your machine learning project. The best way to handle multiple hardware configurations would be to isolate the application from the environment through the use of containers.

The configuration specifics and details on the structure we created is explained further (updated link coming soon).

#### Last Note on Azure

When you create resources on Azure cli (command line), it creates auxillary resources that are not explicitly deallocated when you stop and/or deallocate the original resource. This means you have to be extra diligent to close all resources when creating resources through command line. It's important to note that you will be charged for continuing to run services such as the Azure Container resource group if you deallocate all of the containers with a resource group but not the group itself.

Just something to be aware of.
