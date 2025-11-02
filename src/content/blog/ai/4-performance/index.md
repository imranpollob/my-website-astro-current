---
title: "4. Understanding Model Performance in Machine Learning"
summary: ""
date: "Oct 4 2025"
draft: false
pinned: false
tags:
- AI
---

In the previous session, we built our first model. Now, it’s time to ask a critical question: **How do we know if our model is actually better** than our old rule-based approach or heuristic filter?

This post is all about that — measuring **model performance**. By the end, you’ll understand why metrics like *accuracy* aren’t always trustworthy, what *sensitivity*, *specificity*, and *precision* actually mean, and how to tune your model to make smarter decisions.

---

## From Rules to Probabilities 🎯

In our spam detection example, our rule-based system (the “heuristic”) worked like this:

> **If any suspicious condition is met → Mark as spam.**

Simple enough.

But our machine learning model is a bit more nuanced. It doesn’t just say “spam” or “not spam” — it **outputs probabilities**.
For example, a message might have a **47% probability** of being spam.

So, how do we decide?
We compare the two probabilities:

* 47% spam
* 53% not spam

Since 53% > 47%, we classify it as **not spam**.

To generalize, we set a **decision threshold**:

* If spam probability ≥ 50% → Spam
* Else → Not spam

This threshold becomes crucial later when we start tuning our model.

---

## Measuring Model Accuracy 📊

Once we have a trained model, the most intuitive way to measure its performance is **accuracy**:

[
\text{Accuracy} = \frac{\text{Correct Predictions}}{\text{Total Predictions}}
]

In our example, the model correctly classified 96 out of 100 unseen messages, giving it a **96% accuracy**.

Pretty good, right? But wait — when we checked the heuristic’s accuracy, it was **exactly the same!**

That’s our first red flag. If both approaches perform equally well, why bother with a complex model?
Turns out, **accuracy alone can be misleading** — especially when your data is **imbalanced**.

---

## The Problem with Accuracy ⚠️

Only **7% of messages** in our dataset were spam.
That means a model that *always* predicts “not spam” would still achieve **93% accuracy** without ever identifying a single spam message!

This is a common issue in real-world ML tasks, where one class (like “spam”) is rare. Accuracy fails to capture how well the model handles these minority cases.

---

## Enter the Confusion Matrix 🧩

To really understand performance, we look at all possible outcomes:

| Prediction ↓ / Actual → | Spam                  | Not Spam              |
| ----------------------- | --------------------- | --------------------- |
| **Spam**                | ✅ True Positive (TP)  | ❌ False Positive (FP) |
| **Not Spam**            | ❌ False Negative (FN) | ✅ True Negative (TN)  |

Let’s calculate these for our models:

**Model Confusion Matrix:**

* TP = 5
* FP = 2
* FN = 2
* TN = 91

**Heuristic Confusion Matrix:**

* TP = 6
* FP = 3
* FN = 1
* TN = 92

Both seem similar — but subtle differences tell us a lot more.

---

## Beyond Accuracy: Key Metrics 📈

### 1. **Sensitivity (Recall)**

How well does the model catch *actual* spam?

[
\text{Sensitivity} = \frac{TP}{TP + FN}
]

* Model: **71%**
* Heuristic: **85%**

So the heuristic is better at catching spam.

---

### 2. **Specificity**

How well does it identify *legitimate* messages?

[
\text{Specificity} = \frac{TN}{TN + FP}
]

* Model: **Higher specificity** → fewer false alarms.

This is crucial — you don’t want to miss an important message just because your model got paranoid.

---

### 3. **Precision**

Out of all messages labeled as spam, how many really were?

[
\text{Precision} = \frac{TP}{TP + FP}
]

Here, the **model beats the heuristic**, meaning it’s more confident and accurate when it flags spam.

---

### 4. **F1 Score**

The harmonic mean of Precision and Recall — a balanced measure:

[
\text{F1} = 2 \times \frac{\text{Precision × Recall}}{\text{Precision + Recall}}
]

* Model: 71%
* Heuristic: 74%

Not bad! But the model’s **lower false positives** make it more practical for real-world use.

---

## Fine-Tuning the Decision Threshold ⚙️

The **decision threshold** (default 0.5) determines how aggressively your model flags spam.

* Raise it (e.g., 0.55 or 0.7): Model becomes more cautious → fewer false positives, more false negatives.
* Lower it (e.g., 0.25): Model becomes aggressive → catches more spam, but risks labeling real messages as spam.

Tuning this threshold is how you **trade-off between sensitivity and specificity.**

Example:

* At **55%**, we corrected one false positive without affecting true positives.
* At **70%**, we reduced false positives to zero but missed more spam (sensitivity dropped).

Moral? Don’t over-optimize one metric at the expense of others.

---

## ROC Curve & AUC: Visualizing Model Quality 🧭

A **Receiver Operating Characteristic (ROC)** curve helps visualize how different thresholds affect performance.

* **Y-axis:** Sensitivity (True Positive Rate)
* **X-axis:** 1 - Specificity (False Positive Rate)

An ideal model stays **above the diagonal line** (random guessing).
The **Area Under the Curve (AUC)** quantifies this:

* AUC = 0.5 → Random model
* AUC = 1.0 → Perfect model

For example:

* Model A: AUC = 0.61
* Model B: AUC = 0.74
  → Model B is clearly better across all thresholds.

---

## Validation Strategies 🔍

When training supervised models, we split our data into:

1. **Training set** – for learning patterns.
2. **Validation set** – for tuning hyperparameters (like decision thresholds).
3. **Test set** – for final evaluation.

We can validate in several ways:

* **Holdout validation:** Simple one-time split.
* **K-Fold Cross Validation:** Train K times on different subsets for more reliable results.
* **Leave-One-Out:** Extreme version used for very small datasets.

These prevent *overfitting* and ensure your model generalizes to unseen data.

---

## The Real-World ML Process 🔄

Let’s recap the **8-step ML journey** we’ve followed so far:

1. **Identify the problem:** Spam interruptions.
2. **Form a hypothesis:** Filter rules can help.
3. **Build a heuristic:** Simple keyword-based filter.
4. **Validate improvement:** It helped — hypothesis confirmed.
5. **Develop a complex model:** Naive Bayes classifier.
6. **Compare performance:** Evaluate vs. heuristic.
7. **Tune parameters:** Adjust decision threshold to improve metrics.
8. **Tie back to business impact:** Better user experience → higher engagement and ad revenue.

This iterative process — test, tune, compare — is at the heart of **practical machine learning**.

---

## Business Impact Matters 💼

In the end, metrics like “F1 score” or “specificity” are tools, not goals.
What matters is the **real-world outcome**.

For example:

* **Users:** Fewer missed legitimate messages.
* **Company (Instagram):** Higher engagement and ad revenue.

That’s what “success” looks like beyond the math.

---

## Final Thoughts 💡

Every ML journey follows this rhythm:

* Start simple.
* Measure honestly.
* Iterate deliberately.

If your model doesn’t outperform the heuristic, revisit your **features** or **problem framing** before jumping to complex architectures.

Remember: the best ML engineers aren’t those who build the fanciest models — they’re the ones who can **connect model improvements to meaningful outcomes.**

In the next part of the crash course, we’ll explore **different types of ML models** and their real-world use cases.

Stay tuned — your ML journey is just getting started.

