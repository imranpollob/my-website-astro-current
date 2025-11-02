---
title: "18. Learning to Rank — Building Smarter Personalized Feeds"
summary: ""
date: "Oct 18 2025"
draft: false
pinned: false
tags:
- AI
---


Welcome back, everyone!
This is **ML Experts: Machine Learning Crash Course** — and today we’re diving into one of the most powerful ideas behind recommendation systems used by apps like YouTube, Netflix, and LinkedIn: **Learning to Rank**.

Earlier, in our recommender systems discussion, we talked about how to recommend a *single* item — like whether to show a user one particular post.
But now, we’ll tackle something much more dynamic: **how to rank multiple items** to create a personalized, engaging feed.

Imagine you’re designing a home screen where users scroll through posts. The challenge isn’t just *what* to show — it’s *in what order*.

---

### 🎯 Step 1: From Recommendations to Ranking

In recommendation systems, we usually predict whether a user will like an item.
In ranking, we go one step further — we have multiple items and must **order them intelligently**.

This two-step pipeline looks like this:

1. **Candidate Generation (Top-K Selection):** From thousands of posts, pick the *top few dozen* that are most relevant.
2. **Ranking:** Then, sort these candidates to produce the final order on the user’s feed.

The first step narrows down options, and the second decides which one appears first, second, third, and so on.

---

### 🧩 Step 2: Candidate Generation with Embeddings

To select the most relevant items, we can use **matrix factorization** — a classic technique that decomposes the *user-item matrix* into two smaller matrices:

* **User embeddings (U):** capture each user’s characteristics or interests
* **Item embeddings (P):** represent content attributes like topic, tone, or style

By multiplying these two, we can approximate how much a user might like a given post.

For example:

* Post embedding values might represent how much a post aligns with a topic (like “politics” or “tech”).
* User embeddings might encode the same topics based on behavior or profile.

We can visualize users and posts in a 2D space — closer points indicate stronger relevance.
By measuring **distance or similarity** (using cosine similarity, Euclidean distance, or dot product), we select the *Top-K closest posts* for each user.

If you’re using a deep learning model, this step still applies — you’d just use the **embedding layers** learned from the neural network instead of matrix factorization.

---

### 🪜 Step 3: Ranking the Candidates

Once we have our Top-K posts, we need to decide **their order**.

A simple idea is to sort them by how close they are to the user embedding. But this approach has limitations:

* Users and posts might exist in **different embedding spaces** (e.g., one for Amazon employees, another for Google employees).
* We need a model that can compare relevance across these spaces.

That’s where **Learning to Rank** comes in.

---

### 🧠 Step 4: Learning to Rank (RankNet)

Learning to Rank models learn the *relative order* between pairs of items.
Instead of predicting whether an item is liked or not, they predict the **probability that item i should rank higher than item j**.

This is expressed as:

[
P(i > j) = \sigma(S_i - S_j)
]

where:

* (S_i) and (S_j) are scores output by a neural network for items *i* and *j* respectively.
* (\sigma) is the sigmoid function that squashes the score difference into a probability between 0 and 1.

If the probability > 0.5, item *i* should rank above item *j*.

#### 🧮 Training

We build all pairwise combinations (A vs B, A vs C, etc.), compare them against user actions (clicks, likes), and adjust the neural network weights using gradient descent.
The loss function is the familiar **negative log-likelihood** used in logistic regression.

This approach was popularized by **Microsoft’s RankNet** — the foundation for modern ranking systems.

---

### ⚙️ Step 5: From RankNet to LambdaRank & LambdaMART

While RankNet works, it’s computationally heavy — it needs to consider *every pair* of items, which grows rapidly as your candidate list increases.

Two major improvements followed:

1. **LambdaRank:** Introduced the idea of using “lambdas” (pseudo-gradients) to directly optimize ranking metrics like **nDCG** (Normalized Discounted Cumulative Gain).

   * nDCG emphasizes ranking important items *higher up* in the list.
   * Early clicks matter more than later ones — because users rarely scroll forever.

2. **LambdaMART:** Combined LambdaRank with **gradient boosted trees** instead of neural networks, leading to higher efficiency and interpretability.

LambdaMART remains a top-performing algorithm for learning to rank, even used in production systems like Bing, XGBoost’s ranking module, and many e-commerce recommenders.

---

### 📊 Step 6: Evaluating Rankings

To measure how good our rankings are, we use metrics that account for order, not just correctness.

| Metric                           | Meaning                                                     | Notes                                                            |
| -------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------- |
| **nDCG**                         | Normalized Discounted Cumulative Gain                       | Measures ranking quality, giving higher weight to top positions. |
| **MAP (Mean Average Precision)** | Precision averaged across all relevant items and users      | Great for binary relevance (clicked vs not clicked).             |
| **MRR (Mean Reciprocal Rank)**   | Average of the reciprocal of the first relevant item’s rank | Simple and effective for search-style tasks.                     |

These metrics allow us to evaluate how well our model prioritizes relevant items and penalizes misplaced ones.

---

### 💬 Step 7: Implicit Relevance Feedback

Clicks aren’t the only signals we can use.
We can also consider user interactions like:

| Action                | Relevance Score |
| --------------------- | --------------- |
| Commented             | 3               |
| Liked                 | 2               |
| Viewed but didn’t act | 0               |

This gives us **implicit feedback**, allowing models to learn from real behavior rather than explicit labels.

---

### 🧱 Step 8: Building a Real Feed (Example)

Let’s say our app has six categories of posts:

1. Coworker interactions
2. Worker → Manager
3. Manager → Worker
4. General news
5. IPOs / Acquisitions
6. Layoffs

We can:

* Use matrix factorization or deep embeddings to generate Top-K posts *per category*.
* Then use **LambdaMART** to rank these candidates across all categories.
* Finally, de-bias for **presentation bias** (lower-ranked posts get fewer clicks simply because they appear lower).

The final ranked feed is a balanced mix of relevance and fairness.

---

### 📈 Step 9: Results in Practice

When applied in a real-world setting, this approach showed:

* **+25% increase in session time** — users spent more time engaging with content.
* **−10% decrease in scrolling time** — users found relevant content faster.

Together, these metrics confirmed that the model was effectively **surfacing high-quality, personalized posts early** in the feed.

---

### 🚀 Conclusion

Learning to Rank is the hidden backbone of every great recommendation system — from search engines to social media feeds.

It combines embeddings, probability modeling, and gradient boosting into a unified goal:
**show the right content, in the right order, at the right time.**

Next up, we’ll continue our machine learning journey with even more advanced models that power the intelligent systems around us.

