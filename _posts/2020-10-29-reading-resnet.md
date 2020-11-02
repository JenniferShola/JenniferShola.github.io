---
title: "Common Mistakes Made When Implementing ResNet"
date: 2020-10-29
categories:
  - Advice
tags:
  - ResNet
  - Research
---

There are plenty of blog posts that will teach you how to implement ResNet. This is not that blog post. This blog post is about the common mistakes a beginner makes when implementing ResNet. I also included a list of my [favorite implementations](#resnet-implementations) at the bottom of this post.

### Common Technical Mistakes

- Not Scaling Input Image Sizes

  In the ResNet research paper, [Deep Residual Learning for Image Recognition](https://arxiv.org/pdf/1512.03385.pdf), the image size they work with are 112x112. If you're working with a dataset like CIFAR-10, you'll need to scale the input sizes down in alignment with the original paper. For CIFAR-10 that would start with 32 and similarly half at every convolutional layer.

- Getting the Order of Dimensions Wrong

  There are 2 standard orders of dimensions for input images:
  
  - BCHW

    [batch_size, **channels**, height, width]

  - BHWC

    [batch_size, height, width, **channels**]

  Pytorch uses the BCHW method, where the channels are the **2<sup>nd</sup>** dimension. Since datasets are commonly arranged in either format, it might be necessary for you to change the order of dimensions before starting to train your network. An easy solution would be to transpose the channels (3 - since this is a color image) as such:
  
  `data = np.array(batch_data).reshape(batch_size, 3, 32, 32).transpose(0,2,3,1).astype("uint8")`

  If you don't do this change (and have the wrong orientation), you will see images in weird color orientations that won't see to make sense. An easy way to check if you might have this problem is to view the images in the dataset.

- Using the Wrong Padding Size

  While it's not explicitly stated in the paper, the first convolutional layer has a padding of size 3. It can be helpful to calculate the sizes of the other convolutional layers (particularly if you changed the input image size) to confirm that the padding size will enable the model to not have to process half sizes/strides.

- Mismatching Tensor Sizes

  There are specific calculations (such as max pooling with a stride > 1) that will change the dimensions of your image. Since the identity block doesn't pass through the standard convolutional blocks, it's important to specifically downsample the identity block as the residual blocks are downsampling. To help with this, I would add periodic assert statements on your tensors between the x and identity blocks to make sure that they are being processed as expected and producing the right dimensions at the right times. I personally found it useful to print out the progress of the tensors to be tremendously useful in creating faith in the structure of the model.

- Not Making The Code Extensible

  ResNet can be easily organized into very simple modules that can build on one another. The identity block, the residual block, the convolutional layer, etc. I would consider thinking about the base objects ResNet uses and what attributes would be needed to make the classes reusable. You can also build ResNet as a class and simply reference certain objects as if they're created, before going back to actually create them. An example of this is:

  ```python
  class ResNet(nn.Module):
    def __init__(self, ...):
      super(ResNet, self).__init__()
      ...
      self.layer1 = self.layer(...)
      self.layer2 = self.layer(...)
      ...
  ```
  
  If you think about the layer component, what makes the layers different from one another is the depth of the layer, the number of channels, and if the layer gets downsampled (i.e. does it have a stride) at the end of the layer. Knowing this, now I can change the implementation as such:

  ```python
  class ResNet(nn.Module):
    def __init__(self, ...):
      super(ResNet, self).__init__()
      ...
      self.layer1 = self.layer(block, depth=3, channels=64, stride=1)
      self.layer2 = self.layer(block, depth=4, channels=128, stride=2)
      ...
  ```

  Now that we understand what our layer needs, we can create our layer here:

  ```python
  def layer(self, block, depth=3, out_channels=64, stride=1):
    downsampling = None
    blocks = [ ]

    # This is the block that needs to be downsampled (for identity)
    if stride !=1 or self.in_channels != out_channels:
      downsampling = nn.Sequential(
        nn.Conv2d(self.in_channels, out_channels, kernel_size=3, stride=stride, padding=1),
        nn.BatchNorm2d(out_channels)
      )

    blocks.append(block(self.in_channels, out_channels, downsampling, stride))
    self.in_channels = out_channels

    for i in range(depth - 1):
      blocks.append(block(self.in_channels, out_channels, None, 1))
    return nn.Sequential(*layers)
  ```

  This is likely a refresher of object oriented programming but I think this point is worth emphasizing as this level of organization can make coding much simpler.

## ResNet Implementations

[Here](https://github.com/JenniferShola/ml_implementations/tree/main/resnet) is my PyTorch implementation of ResNet34.

Check of a few of my favorites on the web:

- [Residual Networks: Implementing ResNet in Pytorch](https://towardsdatascience.com/residual-network-implementing-resnet-a7da63c7b278)

- [CNN CIFAR-10 Pytorch Challenge Exercise Part1](https://www.youtube.com/watch?v=wcQuJOZedlE&ab_channel=dannyiskandar)

- [PyTorch implementation of ResNet - Jupyter Notebook](http://www.pabloruizruiz10.com/resources/CNNs/ResNet-PyTorch.html)
