---
title: "Fine-Tuning a Language Model: A HuggingFace Tutorial"
excerpt: "This is an introduction to HuggingFace and a tutorial on how to train a language model from scratch using transformers, tokenizers, and custom datasets."
date: 2021-01-29
categories:
  - OpenAIScholars
tags:
  - Open AI Scholars Program
  - Transformers
  - Transformer XL
  - Huggingface
  - Technical
  - Tutorial
  - NLP
---
*This post was written as apart of the Open AI Scholars program. It is Part 7 in the series. Read part [1]({% post_url 2020-10-25-learning-how-to-learn %}), [2]({% post_url 2020-11-10-first-month-checkin %}), [3]({% post_url 2020-11-20-developing-a-research-pov %}), [4]({% post_url 2020-11-23-celebrating-the-oai-curriculum %}), [5]({% post_url 2020-12-18-the-research-proposal %}), [6]({% post_url 2021-01-15-pivoting-your-research %}), [7]({% post_url 2021-01-29-huggingface-tutorial %}), [8]({% post_url 2021-02-12-generating-loss-curves %}), [9]({% post_url 2021-02-26-scaling-large-models %}). Find [all](/tags/#open-ai-scholars-program) posts relating to the program here.*

HuggingFace is an NLP startup that open-sourced several nlp frameworks, making it easier for anyone to build and experiment on language models. It's the basis on which I've built my language models and probably one of the easiest ways to get started with nlp research.

They have an entire suite of frameworks but the [Transformers](https://github.com/huggingface/transformers) library is the most downloaded. It provides thousands of pre-trained language models able to perform tasks such as language modeling, multiple choice, question answering, summarization, text generation, text classification, token classification, and translation in 100+ languages. Transformers (the library, not the algorithm) allow users to use APIs that expose pre-trained models, build language models from scratch, or fine-tune models with custom datasets. The structure makes it ideal for out-of-the-box development or rapid research experimentation. Transformers also supports PyTorch and TensorFlow, making it flexible to fit within your ml work flow.

In this tutorial, we'll try to keep it short and focus only on the parts most critical to getting a working model. The model we're creating is for language modeling tasks. We'll also discuss the quick, out-of-the-box options as well as the customized version at each step.

## 1. Create a Dataset

The first step is to find a pre-assembled dataset or build a custom dataset.

Note: This might initially seem like the simplest step but if the data isn't structured properly or stored in an accessible manner, it **will** cause issues when you go to tokenize or train it. Specifically, it's most likely to error due to malformed tensors if the data is not preprocessed correctly or error due to out of memory (OOM) if the model is attempting to train too much data in RAM. OOM errors can be one of the most troubling due to the lack of error messaging around it. If you run out of RAM, it will likely (depending on the machine) fail with no error code, stacktrace, or support.

### a. Finding a pre-assembled dataset

The [HuggingFace Hub](https://huggingface.co/datasets) has hundreds of datasets that are pre-built and structured for their corresponding language tasks. I would click on the task `language-modeling` and `en` (English) in the filters column on the left. Feel free to choose any dataset. 

For this dataset, we're going to use `amazon_reviews_multi` and since it comes with [extra data fields](https://huggingface.co/datasets/amazon_reviews_multi) that we don't plan to use for this task, we're going to remove all of the other columns. Realistically, you'd like want to do a more complex processing (depending on what data you're testing) but since we want something simple and quick to run, we're going to make this change.

```python
#! pip install datasets

from datasets import load_dataset

# Loading a dataset
dataset = load_dataset('amazon_reviews_multi', split='train')

# Removing columns from dataset to reduce it's size
dataset = dataset.remove_columns(['review_id', 'product_id','reviewer_id', 'stars','review_title', 'language','product_category'])

```

#### b. Creating a custom dataset

Whenever possible, I'd recommend starting with a dataset that's already pre-assembled, even if you plan to eventually build our your own dataset.

##### Small Custom Datasets

These are by far the easiest to work with. HuggingFace provides a variety of tools to load data by (from local files, in-memory data like python dictionaries, and pandas dataframes). Depending on how you've stored your data, you will end up following a similar process to the process above (1a).

Please see this [link](https://huggingface.co/docs/datasets/loading_datasets.html) if you need specific directions on how to import your data.

##### Large Custom Datasets

For my dataset, I choose [openwebtext2](https://openwebtext2.readthedocs.io/en/latest/) which isn't a dataset I built but I'm sticking it here because the process of collecting data is tedious. If you're looking for information on how to do that, that requires a completely separate process to get to the point at which the data would be ready for a model. That won't be in this post but if I decide to write about it later, I'll update this page to link to it.

Openwebtext2 contains about 65 GB of uncompressed text (28 GB compressed), which makes it much more likely to run into OOM memories if not stored and accessed properly.

Where you store your data depends largely on how you're using your compute. However, for most people who are running on a small number of available nodes, it's probably ideal to store the data in a persistent attached disk or a cloud service like [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/). The python package [blobfile](https://pypi.org/project/blobfile/) will be allow you to assess the data via code.

```python
#!pip install azure-storage-blob

from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient

# This is a fake key. Find your connection string here: https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal
connect_str = "DefaultEndpointsProtocol=https;AccountName=PRIVATE_ACCOUNT_NAME;AccountKey=PRIVATE_ACCOUNT_KEY;EndpointSuffix=ENDPOINT.SUFFIX.NAME"

# Create the BlobServiceClient object which will be used to create a container client
blob_service_client = BlobServiceClient.from_connection_string(connect_str)

# Read from the container stored on Azure
container_name="CONTAINER_NAME_FROM_AZURE"

# Or create a unique name for the container if starting with new container
# container_name = str(uuid.uuid4())

# Create the container
container_client = blob_service_client.get_container_client(container_name)

# Initialize empty arrays
data, batches = [], []

# Retrieve the names of all of the blobs attached to this container
blob_list = container_client.list_blobs()

# For each blob name in list, read the data and save it in memory
for blob in blob_list:
    reader = Reader()

    # Fetch the client attached to this blob name
    blob_client = container_client.get_blob_client(blob.name)

    # Download the data attached to this blob client
    download_stream = blob_client.download_blob()

    # read_stream is a modified version of the original read_jsonl which is provided on the openwebtext2 site
    for document, metadata in reader.read_stream(download_stream.readall(), get_meta=True):

        # Save data locally
        data.append(document)

    # Create dataframe of all of the text lines within a document
    df = pd.DataFrame(data, columns = ['text'])

    # Create a dataset of all of the documents (each document has multiple lines of text)
    batches.append(Dataset.from_pandas(df))

# Create the training dataset
dataset = concatenate_datasets(batches)

# Note: The data does not need to be added by batch, but can be grouped all at once and then initialized into HuggingFace. I like this approach better because it allows me to monitor and look at the data in more detail during testing. 

```

Okay - That was more extensive than expected. I promise the rest of this will be simpler.

#### 2. Train a Tokenizer

HuggingFace has an extensive list of [tokenizers](https://huggingface.co/transformers/main_classes/tokenizer.html) to choose from. My advice is to go to the model page for whichever model you'd like to train and then click on it's tokenizer.

Note: Classes that start with `TF` such as `TFTransfoXLTokenizer` are built with Tensorflow and should be used in place of `TransfoXLTokenizer` which is built with PyTorch.

Since I'm working on TransformerXL on PyTorch, I'm going to use `TransfoXLTokenizer`.

##### a. Load a pre-trained tokenizer

```python
#!pip install transformers 

from transformers import TransfoXLTokenizer

# Initialize a tokenizer 
tokenizer = TransfoXLTokenizer.from_pretrained('transfo-xl-wt103')

# Set configuration settings that affect embeddings (this can be anything but for simplicity)
tokenizer.pad_token = tokenizer.eos_token
tokenizer.max_length = 512

```

##### b. Or build a tokenizer

```python
#!pip install transformers 

from pathlib import Path

from transformers import TransfoXLTokenizer

paths = [str(x) for x in Path("./custom_data/").glob("**/*.txt")]

# Initialize a tokenizer
tokenizer = TransfoXLTokenizer()

# This list is dependent on your data and is an example of what a list could look like.
token_list = [ "<s>", "<pad>", "</s>", "<unk>", "<mask>"]

# Customize training (remember to choose specials tokens that are in your data text files)
tokenizer.train(files=paths, vocab_size=52_000, min_frequency=2, special_tokens=token_list)

# Save tokenizer to disk
tokenizer.save_model(".", "tokenized_result")

```

#### 3. Encode the dataset

Tokenize your dataset to produce the input embeddings.

##### a. In-Memory

```python

# Encode your inputs
inputs = tokenizer(dataset['text'], return_tensors="pt", padding=True, truncation=True)

# Set the labels to the same as the input text (only for language modeling tasks)
input_labels = inputs["input_ids"]

```

##### b. Or batched

```python

# Simple tokenize method (any tokenizer pre-processing could happen here)
def tokenize(examples):
    return tokenizer(examples['text'], padding=True, truncation=True)

# Encode your inputs by batch
inputs = dataset.map(tokenize, batched=True, batch_size=16)

# Set the labels to the same as the input text (only for language modeling tasks)
input_labels = inputs["input_ids"]

```

#### 4. Build the Model

There are a variety of transformer model heads to choose from. For any language modeling task, you want the model head that's prefixed with `LM`, which would be `TransfoXLLMHeadModel` for Transformer XL.

##### a. Load a pre-trained model

```python
#!pip install transformers 

from transformers import TransfoXLLMHeadModel

# Initialize a model 
model = TransfoXLLMHeadModel.from_pretrained('transfo-xl-wt103')

```

##### b. Or build a model from config

Note: What isn't defined in the configuration object is defaulted to the [configuration settings](https://huggingface.co/transfo-xl-wt103/resolve/main/config.json) for that model (which is the same as what it's pre-trained version is using).

```python
#!pip install transformers 

from transformers import TransfoXLLMHeadModel, TransfoXLConfig

# Retrieve the tokenizer vocabulary size
rounded_vs = round(tokenizer.vocab_size/10000)*10000

# Create a transformer model configuration 
config = TransfoXLConfig(
    vocab_size=rounded_vs,
    d_inner=64,
    d_model=16,
    d_embed=16
)

# Initialize a model 
model = TransfoXLLMHeadModel(config=config)

```

#### 5. Time to Train

Here is a simple way to train your model.

```python

# Train the model
outputs = model(**inputs, labels=input_labels)

# Access the loss
loss = outputs.losses

# Log the loss (and other metrics) using logger, wandb, or any other tool

```

##### *OR*

The [Trainer](https://huggingface.co/transformers/main_classes/trainer.html) object provides many ways to standardize your run. Here is a more customized way to train your model.

```python

training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=2,
    per_device_train_batch_size=16,
    warmup_steps=500,
    weight_decay=0.01,
    logging_dir='./logs',
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=inputs
)

trainer.train()

```

That's it! There are tons of examples and information available online. The HF libraries change frequently so I found finding scripts that worked and did 100% of what I expected to be a pretty rare find. Most require some small changes so don't fret if it's not working as expected.

In my next blog post, I'll talk about how to generate loss curves and possibly take a peak at some early results.
