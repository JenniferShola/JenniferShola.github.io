---
title: "The First Few Experiments: How to Generate & Access Your Loss Curves"
excerpt: "This post is for anyone pursuing independent research in AI and needs help understanding how to think through creating their first experiment and breaking down the process of building out their experiments."
date: 2021-02-26
categories:
  - OpenAIScholars
tags:
  - Open AI Scholars Program
  - Transformers
  - Loss Curves
  - Technical
  - Research
  - NLP
---
*This post was written as apart of the Open AI Scholars program. It is Part 8 in the series. Read part [1]({% post_url 2020-10-25-learning-how-to-learn %}), [2]({% post_url 2020-11-10-first-month-checkin %}), [3]({% post_url 2020-11-20-developing-a-research-pov %}), [4]({% post_url 2020-11-23-celebrating-the-oai-curriculum %}), [5]({% post_url 2020-12-18-the-research-proposal %}), [6]({% post_url 2021-01-15-pivoting-your-research %}), [7]({% post_url 2021-01-29-huggingface-tutorial %}), [8]({% post_url 2021-02-12-generating-loss-curves %}). Find [all](/tags/#open-ai-scholars-program) posts relating to the program here.*

If you've never done any research before, it can be quite daunting to start from scratch, particularly if you don't have access to a mentor, laboratory, or adequate support system. Those who work in artificial intelligence (AI) and machine learning (ML) have a major advantage and disadvantage in research. Due to the newness and novelty of the field, there are many more questions and unknowns than there are people who are equipped to work on them. It can make it much easier than traditional sciences like physics and biology to find and make significant findings that impact the entire industry.

Alternatively, this same opportunity space can become a hindrance once you consider how much is still known about the field. Even within the technology that is being used today (like ResNet), there can be an ambiguity among the theory behind how these mechanisms work, which can significantly impact research and development. If you consider the technical limitations of the technology, having physical limits on the compute you have access to can make the difference between your ability to effectively contribute to the industry.

If you've done research before, this post isn't for you. If you're a member of an AI research lab, this post also isn't for you. It's for anyone whose pursuing independent research in AI and needs help understanding how to break down the process of building out their first experiments.

This post is specifically about how to outline the first few experiments in research so that you can begin to generate results (via loss curves) that you can build your base of experiments off of. To begin:

## Decide Your First Experiment

This will heavily depend on your research project but for [my project](https://docs.google.com/document/d/17Y88ALvE9essv4QCD13-omQstpn3iz35k7R3R49zpNM), I'm going to want to run similar experiments on different model sizes (and transformer variants). Let's start with a simple premise.

**I want to run 5 different model sizes of a single transformer variant.**

This means two things:

1. I need to pick a transformer variant to test.

2. I need to pick 5 different model sizes for that transformer.

*Why 5?* Because it's more than 3, which would be too few to infer a meaningful trend from and not 7 or more because I only have 3 months to complete this research project. I'm including this note to suggest that these types of details aren't usually that important so pick one and go with it.

As for the variant, it doesn't matter which one I choose *but* it is better to choose the option that is the most documented. In my case, that was the BERT model. Using BERT allows me to move quicker due to the surplus of documentation supporting it. Taking this approach (when possible) could make things easier during development, as there is usually more technical support available to you.

## Creating the Experiment

Technical Experiments are simply scripts that run a specific set of attributes and generate a result that each subsequent experiment's result will be compared to. For this experiment (and most ML experiments), the "result" we want is a loss curve as it gives us both something to visualize and a function to optimize. The assumption being that if we reduce the loss, we are improving the performance of our model.

Starting from the [HuggingFace tutorial]({% post_url 2021-01-29-huggingface-tutorial %}) we discussed in the last post, I refactored the code into an experiment class that could serve as the basis for your experiment.

```python
class Experiment():

  def __init__(self, args):
    super().__init__()
    self.args = args
    self.__configure_experiment(args)
    self.__configure_tokenizer()
    self.__configure_model()

  def __configure_experiment(self, args):
    wandb.init(project="scholar-experiments", config={
      # configure parameters that will be used throughout this class
    })
    self.config = wandb.config

  def __configure_tokenizer(self):
    self.tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
      
  def __configure_model(self, args):
    config = BertConfig(
      vocab_size=self.tokenizer.vocab_size,
      hidden_size=self.config.hidden_size,
      num_hidden_layers=self.config.num_hidden_layers,
      num_attention_heads=self.config.num_attention_heads,
      intermediate_size=self.config.intermediate_size.
    )
    self.model = BertLMHeadModel(config=config)

  def prepare_data(self):
    self.training_dataset = load_dataset('wikitext', 'wikitext-103-raw-v1', split='train[:15%]')

  def encode(self):
    def tokenize(sample):
      return self.tokenizer(sample, truncation=True, max_length=self.config.max_length, padding=True)

    data = self.training_dataset.map(lambda e: tokenize, batched=True)
    dataset = data.map(lambda e: {'label': e['input_ids']})
    dataset.set_format(type='torch', columns=['input_ids', 'label'], device=device)

    self.encoded_dataset = dataset

  def train(self):
    training_args = TrainingArguments(
      report_to=["wandb"],
      overwrite_output_dir=True,
      output_dir = self.config.output,
      max_steps = self.config.max_steps,
      logging_steps = self.config.logging_steps,
      per_device_train_batch_size=self.config.batch_size,
      save_steps=10_000,
      save_total_limit=2,
      run_name = 'custom_training'
    )

    trainer = Trainer(
      model=self.model,
      args=training_args,
      tokenizer=self.tokenizer,
      train_dataset=self.encoded_dataset
    )

    trainer.train()
```

With this class created, you can then call it in a main method by using the following:

```python
  import argparse

  # Use parser to override configuration defaults via command line
  parser = argparse.ArgumentParser(description="PyTorch Transformer Language Model")
  args = parser.parse_args()
  
  # Route tensors to the appropriate device
  device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
  logger.info("device: {}".format(device))

  # Create an experiment class and 
  exp = Experiment(args)
  exp.prepare_data()
  exp.encode()
  exp.train()
```

## Generating & Analyzing the Result (Loss Curves)

I used [wandb](https://docs.wandb.ai/integrations/huggingface) to visualize and analysis my results, as it made it easier to log the configuration parameters, losses, and metrics. I'd recommend using wandb or a similar service to organize your training runs.

One of the first experiments you want to run is your model on a very small dataset. The goal is to see the data converge towards a zero loss, which means that the model has memorized the dataset.

For this test, I ran the original BERT base transformer with 110M parameters and a smaller configured BERT transformer with approximately 10M parameters. The graph looks at training loss per training steps.

![BERT Test Runs](/assets/images/first-loss-curve.png)

The blue line is the larger BERT model that converges extremely quickly when compared to the other model just 1/10th of its size. The models are showing that within 2,000 training steps (which is relatively small), the models are correctly able to memorize the dataset and minimize the loss. This is the pattern you should be looking for and once your model displays this pattern, you can begin to scale and test your suite of experiments, using your default parameters as a guide for future model configurations.
