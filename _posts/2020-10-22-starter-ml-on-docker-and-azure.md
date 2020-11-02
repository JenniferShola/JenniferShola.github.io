---
title: "Starter Code to Run ML Projects on Docker & Azure"
date: 2020-10-22
categories:
  - Technologies
tags:
  - Docker
  - Azure
  - ML Infrastructure
  - Starter Code
---

Starter code for deep learning development [available here.](https://github.com/JenniferShola/deep-learning-starter)

This code was written as a starter repo for building and deploying deep learning models on docker containers to Azure. It includes scripts to start Azure virtual machines (VMs), run docker builds, and shut off Azure virtual machines via command line.

The project README describes how to leverage the project. Here, I'd like to discuss some of the main questions I ran into, how I resolved them, and open concerns I have.

## How To Build a Dockerfile From Scratch

TechWorld's [tutorials](https://www.youtube.com/watch?v=jPdIRX6q4jA&feature=youtu.be&ab_channel=TechWorldwithNana) is a great way to learn about Docker. Docker's official [Quickstart Guide](https://docs.docker.com/get-started/) is also a great place to start when building a project.

I personally found it helpful to look at examples of simple Dockerfiles on [Python Speed](https://pythonspeed.com/articles/activate-virtualenv-dockerfile/) and then create a custom file based on the specs I was designing for. Ideally, you're translating installation commands you've already added to your own computer (or VM) to a Dockerfile to then containerize.

I detail how to set up Docker and some common commands in the git repo linked [here](https://github.com/JenniferShola/deep-learning-starter).

## Which Docker Base Image Should I Use

For this question, I found a really good blog post by [Python Speed](https://pythonspeed.com/articles/base-image-python-docker-images/) on this topic.

Ultimately, I decided to use `pytorch/pytorch` on CPUs and `nvidia/cuda:11.1-cudnn8-runtime-ubuntu18.04` on GPUs. By leveraging a cuda base image, I didn't need any extra drivers to make sure that the base image was able to recognize any attached GPUs. It would only need to be run with the `-gpus` flag (during `docker run`) in order to leverage any of the appropriate hardward.

Reviewing the [image's base page](https://hub.docker.com/r/nvidia/cuda) on Docker Hub is a great way to understand what libraries are included in each variation of the base image. It came make it helpful to understand what the lightest package you can use that has everything pre-installed.

## Should I Stop or Deallocate my VMs

Stopping your virtual machine in Azure (particularly via the command line), does **not** deallocate the machine, meaning that it does **not** release any resources from the virtual machine (even if it is not in use).

As a result, stopping a virtual machine does **not** stop Azure from continuing to bill you. If you want any charges on your account to pause, you must **deallocate** your resources.

Please take it from someone who may or may not have burned through a thousand dollars of cloud spending overnight... one must understand the proper use of VM management before using expensive VMs.

Build5Nines has a great blog post on [how to properly shutdown azure VMs](https://build5nines.com/properly-shutdown-azure-vm-to-save-money/) to save money and an introduction to [azure cli commands](https://build5nines.com/azure-cli-2-0-quickly-start-stop-all-vms/).

## How Can I Use Containers to Minimize Computing Costs

This is what we're still working on.

Ideally, we want to minimize costs by only spending computing time during active testing and deployment of machine learning models. We don't necessarily want to spend computer costs during development (because GPUs are expensive) but we also don't want to put ourselves in a position where we're needlessly spinning and shutting off resources repeatedly during active deployment.

To make this more complicated, we plan to work on a variety of ml tasks. Some can be easily run on a laptop in minutes but others might require heavy processing, more easily ran on GPU cores. The question - how do we create a system of containerized deployments that allows us to easily switch context between tasks with low processing needs vs heavy processing? Do we leverage docker containers on Azure virtual machines or Azure containers configured with packages like docker and cuda?

The [linked github repo](https://github.com/JenniferShola/deep-learning-starter) explores a configuration for docker containers for use on your laptop (or VM) but I'm currently working with one of the other scholars to implement Azure Containers (code coming soon) configured with the necessary packages to have the extensibility I previously mentioned.

If I learned anything during this time, it's that infrastructure for machine learning development is extremely immature. There is not nearly enough information available on how to create, develop, and test ML models effectively. I hope this doesn't become a trend.

Let's see how it goes.
