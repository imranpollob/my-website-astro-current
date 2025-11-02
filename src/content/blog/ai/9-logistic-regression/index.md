---
title: "9. Logistic Regression: Predicting Power Outages with Probabilities"
summary: ""
date: "Oct 9 2025"
draft: false
pinned: false
tags:
- AI
---




In the previous session, we used **linear regression** to predict future power demand for California ISO. But what if our task shifts from predicting *how much* power is needed to *whether* a power outage will occur? That’s where **logistic regression** comes in — a workhorse for **classification problems**.

---

### ⚡ The Scenario: Predicting Power Outages

Imagine our manager at California ISO asks us to **classify** whether or not there will be a **power outage tomorrow**.
A power outage occurs when **supply < demand**, and being able to predict that in advance would allow the system to reroute power, activate backup sources, and prevent blackouts.

For this task:

* **Feature (X):** Temperature (°F), obtained from the National Weather Service
* **Label (Y):**

  * `0` → No power outage
  * `1` → Power outage

When we plot the data, we’ll color-code the points:

* 🟢 Green → No outage
* 🔴 Red → Outage

Our goal is to find a **line that best separates** these two groups.

---

### 📈 From Lines to Probabilities

Logistic regression looks a lot like linear regression — except the output is a **probability** between 0 and 1.

To achieve that, we take the linear regression output (a straight line) and plug it into the **sigmoid (logistic) function**:

[
\sigma(z) = \frac{1}{1 + e^{-z}}
]

This sigmoid “squashes” any real number into the range **[0, 1]**, giving us a probability of an outage occurring.

That’s also where the name **“logistic regression”** comes from.

---

### 🧮 The Loss Function: Measuring How Wrong We Are

In linear regression, we minimized the *mean squared error*. But probabilities need something different — **log loss** (or **cross-entropy loss**).

For a single example:

[
L = -[y \log(\hat{y}) + (1 - y) \log(1 - \hat{y})]
]

* If the true label `y` is 1 (outage), we focus on the first term.
* If `y` is 0 (no outage), the second term dominates.

The goal is to **minimize** this loss — smaller loss means better predictions.

---

### 🔁 Iterative Optimization: Gradient Descent

There’s no neat algebraic (closed-form) solution for logistic regression.
Instead, we use **gradient descent**, an iterative optimization process that slowly “walks downhill” toward the lowest loss.

1. Start with random values for coefficients (β₀, β₁).
2. Compute the loss for all examples.
3. Take the **derivative (slope)** of the loss with respect to each coefficient.
4. Update the coefficients in the direction that reduces the loss.

Mathematically:

[
\beta_i = \beta_i - \alpha \frac{\partial L}{\partial \beta_i}
]

Here, **α (alpha)** is the **learning rate**, which controls how big each step is.
Too high → overshooting the minimum.
Too low → painfully slow convergence.

This process continues until the slope (gradient) becomes zero — meaning the model has **converged**.

---

### 🧭 Understanding the Decision Boundary

After training, the logistic regression model learns a decision rule:

[
P(Y = 1 | X) = \sigma(\beta_0 + \beta_1 X)
]

We can set a **threshold**, usually 0.5:

* If probability ≥ 0.5 → Predict outage (1)
* If probability < 0.5 → Predict no outage (0)

Adjusting this threshold shifts the **decision boundary**.
For example:

* 0.75 → More conservative (only flag high-certainty outages)
* 0.25 → More sensitive (detect more possible outages)

---

### 🌈 Extending to Multiple Features

If we add another variable, such as **megawatt demand**, we move from a line to a **plane** in 3D space.
Each additional feature introduces another coefficient (β₂, β₃, …).

---

### 📊 Odds Ratios: Interpreting Coefficients

Unlike linear regression, logistic regression coefficients represent **log-odds**.
To interpret them:

[
\text{Odds Ratio} = e^{\beta_i}
]

Example:
If β₁ = 0.28 → `e^{0.28} ≈ 1.32` → For every 1° increase in temperature, the **odds** of an outage increase by **32%**.

If β₁ = 0 → No effect.
If β₁ < 0 → Decreases the odds.

---

### ☀️ Beyond Binary: Multinomial Logistic Regression

What if we want to predict *when* the outage occurs — morning, afternoon, or evening?

We’d use **multinomial (softmax) regression**, which generalizes logistic regression to multiple classes.

The **softmax function** ensures all class probabilities add up to 1:

[
P(y_i) = \frac{e^{z_i}}{\sum_{k=1}^{K} e^{z_k}}
]

---

### ⚙️ Training Strategies: Batch vs Mini-Batch vs Stochastic

There are different flavors of gradient descent:

| Type                 | Description                                 | Pros                | Cons                       |
| -------------------- | ------------------------------------------- | ------------------- | -------------------------- |
| **Batch**            | Uses all data to compute gradient each step | Stable convergence  | Slow for large data        |
| **Stochastic (SGD)** | Uses one random example per update          | Fast updates        | Noisy, unstable            |
| **Mini-Batch**       | Uses small subset per update                | Best of both worlds | Requires tuning batch size |

Each full pass through the data is called an **epoch**.

---

### ⚖️ Handling Imbalanced Data

In our case, **blackouts are rare** compared to normal days.
If we train naively, the model may just predict “no outage” for everything.

Solutions:

1. **Down-sample** the majority class (fewer “no outage” samples).
2. **Upweight** the minority class during training.

Example:

* Weight for no-outage = 10
* Weight for outage = 1

This balances the model’s attention between both cases.

---

### 🔒 Regularization: Preventing Overfitting

When coefficients grow too large, the model starts to memorize instead of generalizing.
We can control this with **regularization**, which adds a penalty term to the loss:

* **L1 (Lasso):** encourages sparsity (many weights become zero)
  [

  * \lambda \sum |\beta_i|
    ]
* **L2 (Ridge):** discourages large weights (weights shrink smoothly)
  [

  * \lambda \sum \beta_i^2
    ]

The **λ (lambda)** controls how strong the penalty is — tuned using cross-validation.

Another technique is **early stopping**, halting training before overfitting begins.

---

### 📏 Feature Scaling

Because logistic regression uses gradient descent, feature scales matter.
Use **min-max normalization** to bring all features into a [0,1] range:

[
x' = \frac{x - x_{min}}{x_{max} - x_{min}}
]

This ensures faster and smoother convergence.

---

### 📐 Model Evaluation

Since R² doesn’t apply to logistic regression, we use:

* **McFadden’s Pseudo R²**: Measures model fit (0.2–0.4 = excellent).
* **Confusion Matrix**: Tracks true positives, false positives, etc.
* **Precision, Recall, F1-score, ROC-AUC**: Evaluate performance across thresholds.

---

### 🧩 Generative vs Discriminative

* **Naive Bayes** → *Generative model* (models `P(X|Y)` and `P(Y)`)
* **Logistic Regression** → *Discriminative model* (models `P(Y|X)` directly)

This makes logistic regression **a better probability estimator**, while Naive Bayes is often just a fast, simple classifier.

---

### 🧠 Wrapping Up

Logistic regression bridges the gap between **linear prediction** and **classification**.
It’s simple, interpretable, and powerful — a foundation upon which many modern ML models are built.

In the next video, we’ll keep building on this foundation and explore more advanced algorithms.


