---
title: "Understanding Neural Networks"
summary: ""
date: "Nov 2 2025"
draft: false
pinned: false
tags:
- AI
---


Welcome back to **MLExpert’s Machine Learning Crash Course!**
In this session, we dive into one of the most powerful ideas in modern machine learning — **Neural Networks**.

So far, we’ve explored supervised learning models like **Logistic Regression** and **Support Vector Machines (SVMs)**. Both could handle non-linear data to some extent — SVMs through *kernels*, and Logistic Regression through *sigmoid activation*. But when patterns in data get deeply complex, we need something more flexible and expressive. That’s where **neural networks** come in.

---

## 🧩 The Building Block — The Neuron

A **neuron** is a simple yet powerful unit. It takes in several inputs ( x_1, x_2, x_3, \dots ), multiplies each by a corresponding weight ( w_1, w_2, w_3, \dots ), adds them up, and passes the result through a **non-linear activation function** — often a **sigmoid**.

[
y = \sigma(w_1x_1 + w_2x_2 + w_3x_3 + b)
]

This is remarkably similar to **Logistic Regression**! The only new addition here is the **bias** term ( b ), which ensures that even when all inputs are zero, the neuron can still produce a meaningful output. Without bias, our neuron’s output would always be 0.5 when inputs are zero — clearly a limitation.

So at its core, a single neuron = **a logistic regression model**. But the real power comes when we start combining them.

---

## 🧱 From Neuron to Network

Imagine we have two neurons in one layer and another neuron that takes both of their outputs as inputs. Suddenly, we can start **stacking** neurons — creating layers of transformations.

* The first layer learns simple **linear boundaries**.
* The next layer learns **combinations** of those boundaries.
* The final layer combines them into complex, non-linear decision regions.

This layered approach allows neural networks to separate data that no simple linear model could handle — like spirals, rings, or clusters intertwined in intricate patterns.

Each added layer increases the **depth** of the model, and thus we get the term **“Deep Learning.”**

---

## 🧮 How Neural Networks Learn

Let’s break down the training process:

1. **Forward Pass**
   Each input is multiplied by weights, passed through activation functions, and flows layer by layer until we get a prediction ( \hat{y} ).

2. **Compute the Loss**
   The model’s error is measured using a loss function such as **Cross-Entropy** for classification or **Mean Squared Error (MSE)** for regression.

3. **Backpropagation**
   Using the **chain rule of calculus**, we calculate how the loss changes with respect to each weight. This is the “backward pass.”

4. **Gradient Descent**
   Each weight is updated in the opposite direction of its gradient:
   [
   w := w - \eta \frac{\partial L}{\partial w}
   ]
   where ( \eta ) is the learning rate.

This repetitive process gradually reduces the loss, helping the model learn the optimal parameters.

---

## ⚙️ Optimizers — Getting Smarter About Learning

Simple gradient descent works, but it’s not perfect. It can get stuck in **local minima** or oscillate around the optimal point. Several optimizers have been developed to address this:

* **Momentum** — Adds inertia to weight updates, helping escape small local minima.
* **Adagrad** — Adjusts the learning rate per parameter, ideal for sparse data.
* **Adam** — Combines Momentum and Adagrad; by far the most popular optimizer today.

Adam can be thought of as a “ball rolling down a hill with friction.” Momentum helps it escape shallow valleys, while friction helps it settle gently at the bottom.

---

## 🌄 The Gradient Problem — Vanishing and Exploding

As networks grow deeper, gradients can **vanish** (become near zero) or **explode** (grow extremely large) during backpropagation.
This happens because each layer multiplies gradients — and small or large values accumulate exponentially.

### 🧪 Solutions:

* **Proper Weight Initialization**

  * **Xavier/Glorot Initialization** for symmetric activations like Sigmoid or Tanh.
  * **Kaiming Initialization** for asymmetric activations like ReLU.
* **Batch Normalization**
* **Gradient Clipping**

---

## ⚡ Activation Functions — Adding Non-Linearity

Activation functions decide how signals propagate through the network.
Here are some popular ones:

| Function       | Range   | Key Property              | Notes                         |
| -------------- | ------- | ------------------------- | ----------------------------- |
| **Sigmoid**    | (0, 1)  | Smooth probability output | Can cause vanishing gradients |
| **Tanh**       | (-1, 1) | Zero-centered             | Often better than Sigmoid     |
| **ReLU**       | [0, ∞)  | Fast, sparse activation   | Risk of “dying neurons”       |
| **Leaky ReLU** | (-∞, ∞) | Fixes dead neurons        | Adds a small negative slope   |

**ReLU** (Rectified Linear Unit) is the go-to choice for most modern networks due to its simplicity and performance.

---

## 🎯 Choosing the Right Loss Function

* **Regression:**

  * *Mean Squared Error (MSE)* or *Mean Absolute Error (MAE)*
* **Binary Classification:**

  * *Cross-Entropy (Log Loss)*
* **Multi-Class Classification:**

  * *Categorical Cross-Entropy* with *Softmax* activation at the output layer.

Softmax ensures all output probabilities sum to 1 — making it perfect for multi-class problems.

---

## 🔒 Avoiding Overfitting

Neural networks can easily memorize training data. To prevent that, we use:

* **L1 / L2 Regularization** — Add penalties to large weights.
* **Dropout** — Randomly “drops” neurons during training, forcing redundancy and robustness.
* **Early Stopping** — Stop training when validation performance stops improving.
* **Data Augmentation** — Increase diversity of training data (especially for images).

### 🧠 Inverted Dropout

During training, dropout temporarily removes neurons.
At test time, all neurons are active — so we scale the outputs during training to maintain consistency.

---

## 🏗️ Designing Your Neural Network

Wondering how many layers or neurons to use? Start simple.

* If your data is **linearly separable** → no hidden layers (just logistic regression).
* Otherwise:

  * Start with **1 hidden layer**
  * Neurons ≈ average of (input features + output neurons)
  * Gradually increase depth and use **cross-validation** to test performance.

You can also **prune** unimportant neurons by checking for near-zero weights — simplifying the model without losing accuracy.

---

## 🧭 Summary

We covered a lot of ground!
From single neurons to deep multi-layered networks, from gradients to optimizers, and from activation functions to regularization.

### In short:

* Neural networks generalize logistic regression by stacking layers of neurons.
* They learn through backpropagation and gradient descent.
* Proper initialization, activation functions, and optimizers make or break performance.
* Regularization and dropout prevent overfitting.
* Architecture design is both an art and science — start simple, then experiment.

---

### 🚀 Coming Up Next

In the upcoming sessions, we’ll explore **specialized neural networks** — like **Convolutional Neural Networks (CNNs)** for image data and **Recurrent Neural Networks (RNNs)** for sequences.

