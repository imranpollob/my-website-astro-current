---
title: "Understanding Multinomial and Gaussian Naive Bayes"
summary: ""
date: "Nov 2 2025"
draft: false
pinned: false
tags:
- AI
---


Machine learning isn’t just about predicting whether an email is spam or not — it’s about applying those same principles to more complex, real-world classification problems.
In this post, we’ll extend our understanding of the **Naive Bayes classifier**, explore **multiclass classification**, and see how **different likelihood models** — Bernoulli, Multinomial, and Gaussian — fit various data types.

---

### 🧠 From Binary to Multiclass: Moving Beyond Spam vs. Not Spam

So far, we’ve worked with **binary classification** problems — for example, deciding if a message *is spam* or *not spam*.
But what if we want to categorize something into **multiple classes**?

Imagine you work at **Medium**, the popular blogging platform.
Writers publish thousands of articles every day, and manually tagging them as *Finance*, *Politics*, or *Travel* would be tedious. What if we could let a model automatically assign tags?

That’s where **multiclass Naive Bayes** comes in.

Previously, our model only had two probability terms — one for spam and one for not spam.
Now, we’ll generalize that to multiple categories:
[
P(C_k | X) = \frac{P(X|C_k)P(C_k)}{\sum_{i=1}^{n} P(X|C_i)P(C_i)}
]
Here, we sum across all possible classes ( C_i ), not just two.

---

### 📊 Updating Priors and Likelihoods

Let’s say we’re trying to compute the prior for the *Tech* class:

* Out of 6 total articles, 2 are about tech.
  So the **prior probability** ( P(\text{Tech}) = 2/6 = 33% ).

For likelihoods, we can reuse our earlier logic from the spam example — but we’ll now handle **word counts**, not just presence or absence.

---

### 🧩 From Bernoulli to Multinomial Naive Bayes

In our spam detector, we used a **Bernoulli model**, which only cares whether a word *appears* in a message (1) or not (0).

But that’s limiting.
For example:

* A **tech article** might mention “Taiwan” once when discussing TSMC.
* A **travel blog** about Asia might mention “Taiwan” ten times.

If both are treated as just “contains ‘Taiwan’,” the model can’t tell the difference.

The solution?
We switch to a **Multinomial Naive Bayes** model, which considers **word frequency**.
Now, our model treats “Taiwan” appearing ten times as more significant than once.

---

### 🧮 How Multinomial Likelihood Works

Suppose we’re finding the probability that the word *“computer”* appears in a *Tech* article.
We’d count:

* Number of times “computer” appears in all Tech articles (numerator).
* Total number of words in all Tech articles (denominator).

Then, we apply **Laplace smoothing** — adding a small constant (usually +1) to avoid zero probabilities.

This approach captures richer information about the document, giving the model better discrimination power across classes.

---

### ⚖️ Using TF-IDF to Capture Word Importance

Common words like “the” or “and” appear everywhere, so they aren’t helpful for classification.
That’s why we use **TF-IDF (Term Frequency–Inverse Document Frequency)** to measure how *important* a word is to a particular document.

For example, if every travel article contains the word “travel,” its IDF becomes zero — making it uninformative.
TF-IDF automatically down-weights such generic terms and highlights distinctive ones.

[
\text{TF-IDF}(w) = \text{TF}(w) \times \text{IDF}(w)
]

When we apply TF-IDF to our vocabulary vector, it effectively “zeros out” uninformative words while emphasizing discriminative ones.

---

### 🍔 Case Study: Gaussian Naive Bayes for Marketing

Now, let’s leave text data and move to numerical features.

Suppose you work at **Uber Eats**.
You want to send $5 discount coupons to users most likely to become *habitual customers* (ordering ≥3 times a week).

We’ll build a model using:

* **Usage last week**
* **Usage last month**
* **Average order spend**

Each customer has a feature vector ( X = [x_1, x_2, x_3] ) and a label (1 = habitual, 0 = not habitual).

This time, instead of words, our features are continuous numbers — perfect for the **Gaussian Naive Bayes** model.

---

### 📈 The Gaussian Likelihood

In Gaussian Naive Bayes, the likelihood for each feature follows a normal distribution:
[
P(x_i | C_k) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x_i - \mu)^2}{2\sigma^2}}
]
Where:

* ( \mu ) = mean of the feature for class ( C_k )
* ( \sigma ) = standard deviation

For instance:

* Habitual users order 1 time per week on average (( \mu = 1 ), ( \sigma = 0.81 ))
* Non-habitual users order 1.6 times (( \mu = 1.6 ), ( \sigma = 0.94 ))

Plug in the values, and you can compute the likelihood that a new customer with 2 weekly orders will become habitual — say, **76%**.
That’s a strong signal to send them a promotion!

---

### 🎯 Using Thresholds and Budgets

Instead of giving discounts to everyone, we only target customers whose conversion probability exceeds a threshold — e.g., 83%.
This way, if our marketing budget allows for 20,000 coupons, we can send them to the **most likely** converters and maximize ROI.

---

### 🧩 Mixing Numeric and Categorical Features

What if we add a new feature — say, *service preference*: Pickup, Delivery, or Both?

That’s **categorical**.
We simply compute its likelihood based on counts:
[
P(\text{Pickup} | \text{Habitual}) = \frac{\text{# of habitual users who prefer pickup}}{\text{Total habitual users}}
]
We can then multiply this term alongside our Gaussian likelihoods.

This mix-and-match flexibility makes Naive Bayes surprisingly powerful for real-world data.

---

### ⚙️ Model Maintenance and Online Learning

Over time, customer behavior changes — maybe more people become habitual users.
We can handle this by:

1. **Retraining periodically** (e.g., weekly or monthly), or
2. Using **online learning** — updating model parameters incrementally as new data arrives.

This keeps our model adaptive and relevant.

---

### 🧮 Preventing Numerical Underflow: The Log Trick

When multiplying many small probabilities, the product can become so tiny that the computer treats it as zero.
To fix this, we take logarithms:
[
\log(a \times b \times c) = \log a + \log b + \log c
]
This turns multiplications into additions, preventing underflow and improving numerical stability.

Also, since the denominator is constant across all classes, we can safely ignore it — only comparing numerators when picking the maximum probability class.

---

### 💾 Memory Optimization: Sparse Matrices and Feature Hashing

Real-world vocabularies can be huge.
If we have 10,000 unique words across 1,000 documents, a full 32-bit matrix would take around **40 GB** — impractical.

We solve this with:

* **Sparse matrix representations** — store only non-zero elements.
* **n-grams** — represent phrases like “stock market” instead of individual words.
* **Feature hashing** — hash words into a fixed-size array, avoiding the need to maintain a massive vocabulary.

Feature hashing even helps prevent adversaries from reverse-engineering your vocabulary — handy for spam filters.

---

### ⚠️ Naive Bayes: Great Classifier, Poor Estimator

Naive Bayes performs well for classification tasks but isn’t great at estimating *exact probabilities*.
So, while its 76% prediction might not be numerically perfect, it’s often **directionally accurate** enough for threshold-based decisions.

Libraries like **scikit-learn** make Naive Bayes easy to use — supporting:

* Bernoulli, Multinomial, and Gaussian models
* TF-IDF, feature hashing, stop words, and n-grams
* Even **Kernel Density Estimation (KDE)** for non-Gaussian data distributions

---

### ✅ Recap

In this session, we covered a lot:

* Extended Naive Bayes to **multiple classes**
* Switched from **presence** to **count-based** features
* Used **TF-IDF** for word importance
* Introduced **Gaussian Naive Bayes** for continuous data
* Learned **Laplace smoothing**, **log-space optimization**, and **feature hashing**
* Discussed **model updates** and **online learning**

Together, these make Naive Bayes a versatile and scalable approach — from spam filters to smart tagging, and even marketing optimization.

---

### 🚀 What’s Next

In the next lesson, we’ll explore **memory optimizations** and deeper performance techniques for scaling ML models efficiently. Stay tuned!

