---
title: "2. Prerequisites for Machine Learning Crash Course"
summary: ""
date: "Oct 2 2025"
draft: false
pinned: false
tags:
- AI
---

Before we dive into building and understanding machine learning models, it’s important to make sure we share a common foundation. This post outlines the key prerequisites you’ll need — not in an intimidating “math-only” way, but in a practical sense: what you should understand *and why it matters.*

If your goal is simply to become **conversational in ML** — understanding the concepts at a high level — you can skim this.
But if you’re aiming to **interview for technical ML roles**, then these fundamentals will make a huge difference in how easily you grasp model behavior, optimization, and performance.

---

### 🧩 Understanding the Building Blocks: Features, Labels & Examples

In machine learning, **features** are the input signals that describe your data — the information the model uses to make predictions.

For example, imagine we’re predicting the price movement of Bitcoin.

* **Continuous feature:** The actual price of Bitcoin each month (e.g., $29,300 in Jan 2021, $33,500 in Feb, etc.).
* **Categorical feature:** Whether the market is “up” or “down.”
* **Ordinal feature:** Categories that have a natural order, like *small → medium → large*.

Features are always paired with **labels**, which are what we want to predict. In supervised learning, each example in the dataset has both:

```
Example = (Features, Label)
```

If we remove the labels, we’re in **unsupervised learning** territory — where the model must find structure on its own (like clustering similar data points).

---

### 🔢 Math Foundations: Vectors, Matrices & Operations

You don’t need to be a math wizard to understand ML, but having a basic grasp of linear algebra helps you interpret what’s going on inside models.

* A **vector** is just an ordered list of numbers — like `[29.3k, 33.5k, 58.7k]`.
  In notation, you’ll often see it written as **x̄ = [x₁, x₂, x₃, …]**.
* When we plot two elements of a vector (say, `x₁` vs. `x₂`), each pair forms a **point** in space.

If you stack multiple vectors together, you get a **matrix**.
Matrices are useful for representing data in tabular form — rows for examples, columns for features.

Common matrix operations:

* **Multiplication (AB):** Combining two matrices to compute transformations.
* **Inverse (A⁻¹):** Reversing a transformation.
* **Transpose (Aᵀ):** Flipping rows and columns.

While you won’t be doing heavy algebra by hand, ML frameworks like TensorFlow or PyTorch rely on these operations constantly under the hood.

---

### 📈 Polynomials & Derivatives

Occasionally, we’ll encounter **polynomials**, especially when visualizing loss curves or fitting regression lines.
For instance:

* A **line** is a first-degree polynomial.
* A **quadratic curve** (parabola) is a second-degree polynomial.

To optimize models, we often need to take **derivatives** — which tell us how a function is changing. In ML, derivatives (or gradients) help us adjust model parameters in the right direction during training.
Don’t worry if calculus isn’t your strong suit; we’ll revisit this when we discuss gradient descent.

---

### 🎲 Probability Essentials

Probability helps quantify uncertainty — and machine learning thrives on that.

Let’s start simple:

* The chance of rolling a “2” on a six-sided die = **1/6**.
* The chance of rolling *two twos in a row* = **(1/6) × (1/6) = 1/36**.

This is the **“and”** condition — both events must happen.

#### 🔁 Conditional Probability

Suppose you draw two cards from a deck *without replacement*.

* First draw (heart): **13/52**
* Second draw (heart again): **12/51**

The combined probability:
**(13/52) × (12/51) ≈ 5.88%**

Conditional probability helps us model situations where one event affects the next — crucial for sequential data and Bayesian models.

---

### 📊 Distributions: How Uncertainty Is Shaped

Different kinds of data follow different statistical patterns, called **distributions**.

1. **Gaussian (Normal) Distribution**
   Most natural measurements — like human height — cluster around a mean.
   For example, if the average height is 63 inches, being 60 or 66 inches tall is slightly less likely, while being 50 or 75 inches is rare.

2. **Uniform Distribution**
   Every outcome is equally likely — just like rolling a fair die (each side = 1/6 probability).

3. **Beta Distribution**
   Used to model **rates or probabilities**, such as a website’s conversion rate.
   If half your users click an ad, the most likely conversion rate is 50%, but it could fluctuate slightly (say, 25% or 75%) depending on new data.
   The beta distribution helps capture that uncertainty and how it narrows as more data accumulates.

---

### 🚀 Wrapping Up

That’s your mathematical and statistical toolkit for this course.
Don’t stress about memorizing every formula — the goal is to develop *intuition*. Think of these concepts as lenses through which we can interpret and improve our models.

In the next lessons, we’ll move from these foundations to actual model-building — where these ideas will come alive through examples and code.

