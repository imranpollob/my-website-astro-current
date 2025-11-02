---
title: "17. Recommender Systems – Collaborative vs. Content Filtering"
summary: ""
date: "Oct 17 2025"
draft: false
pinned: false
tags:
- AI
---

Imagine we’re working for **Blind**, an anonymous social app for workplace discussions.
Thanks to our earlier chatbot project, we’ve successfully encouraged many new content creators to post regularly.

Now comes the next challenge: **Which content should we recommend to which users?**
We want to send personalized push notifications to users — but how do we decide *who would actually enjoy reading each post*?

That’s where recommender systems come in.

---

## 🧩 Collaborative Filtering

Collaborative filtering assumes **“people who are similar will like similar things.”**
Instead of analyzing content, it focuses purely on **user behavior patterns**.

### 🧮 The User–Item Matrix

We start with a **user–item matrix**, where each row represents a user, and each column represents an item (in this case, a post).

* A value of **1** means the user interacted with (read or liked) the post.
* A value of **0** means they didn’t.

Using this matrix, we can predict how a user might react to unseen posts.

---

### 👥 User-Based Collaborative Filtering

Here’s how it works:

1. Find **similar users** based on their post interactions.
2. If users A and B tend to like the same posts, and A liked a new post X, we can predict that B might also like X.

We can measure **user similarity** using:

* **Jaccard similarity:** Measures overlap in liked items (ignores matching zeros).
* **Cosine similarity:** Measures the angle between two users’ preference vectors.
* **Hamming distance:** Counts how many entries differ between users.

> Example:
> Two users share 3 common likes and disagree on 1 — Jaccard similarity = 0.75,
> Cosine similarity ≈ 0.86,
> Hamming distance = 1 (lower means more similar).

We can then predict user responses using a **weighted average of neighbors’ responses**, weighted by their similarity.

---

### 🧠 Item-Based Collaborative Filtering

Instead of finding similar users, we find **similar items (posts)**.
We create an **item–item similarity matrix** using cosine similarity.

If two posts are often liked by the same users, they’re probably similar.
So, if a user liked post B, and post A is highly similar, we’ll recommend post A.

---

### ⚙️ Comparing User vs. Item-Based Methods

| Feature         | User-Based                                   | Item-Based                            |
| --------------- | -------------------------------------------- | ------------------------------------- |
| **Computation** | Expensive (must find neighbors dynamically)  | Mostly precomputed offline            |
| **Diversity**   | Higher – new perspectives from similar users | Lower – sticks to similar content     |
| **Updates**     | Users change often → frequent recalculations | Items change less often → more stable |
| **Use Case**    | Great for personalization                    | Great for scalability                 |

Both belong to **memory-based recommender systems** — they rely directly on historical data stored in memory.

---

## ⏱️ Practical Enhancements

### 1. Time Decay

Recent interactions should matter more than old ones.
We can add a **half-life decay** so that older ratings gradually lose influence.

### 2. Inverse User Frequency (IUF)

Inspired by TF-IDF, we can give **less weight to very popular posts** and more to niche ones.
This promotes **content diversity**.

---

## 🔢 Matrix Factorization

The **user–item matrix** is often enormous and sparse.
Matrix factorization helps by breaking it into two smaller matrices:

* **U**: latent features representing users
* **P**: latent features representing items

The dot product of these gives us the predicted interaction value.

Formally:
[
R_{ij} ≈ U_i^T P_j + b_i + b_j
]

This is trained by minimizing the loss (similar to linear regression) with **L2 regularization**.

Since we must optimize both U and P, we use **Alternating Least Squares (ALS)** — fixing one while optimizing the other, then swapping repeatedly.
Libraries like **Spark ML** implement this efficiently.

---

### 🪄 Implicit Feedback

Instead of explicit ratings, we can infer **implicit signals** (e.g., views, likes, comments).
For example:

* View = 1
* Like = 2
* Comment = 3

This makes our model richer without needing users to give explicit ratings.

---

### 💡 Deep Learning Extension

A **deep learning recommender** extends matrix factorization using **embedding layers** for users and items.
The embeddings are passed through dense layers and merged to output a prediction.

Benefits:

* Faster adaptation to new users/items
* Ability to include non-linear relationships

---

## 🧊 The Cold-Start & Echo Chamber Problems

1. **Cold Start:**
   New users or posts have no history — making predictions impossible.

   > Solution: Recommend popular or diverse items initially.

2. **Echo Chamber:**
   Recommending only what users already like can trap them in narrow interest loops.

   > Solution: Add randomness or promote cross-category diversity.

3. **Shilling Attacks:**
   Fake accounts can spam ratings to manipulate recommendations.

   > Solution: Verification (e.g., one user per phone/device) and anomaly detection.

---

## 🧱 Content-Based Filtering

Instead of looking at *who liked what*, this method looks at **what the content is about**.
Each post is represented by its **features or tags** — such as *politics*, *product release*, *Amazon*, etc.

A user’s preference vector is built from the posts they’ve interacted with.
By computing the **dot product** between the user vector and each post’s feature vector, we can recommend posts most aligned with their interests.

**Pros:**

* No need for other users’ data.
* Works even when the user base is small.

**Cons:**

* Requires detailed metadata about items.
* Can miss out on unexpected content (less serendipity).

---

## ⚡ Hybrid Deep Learning Recommenders

Modern systems combine both methods.
In a **deep hybrid model**, we take:

* **Collaborative embeddings** (from user–item interactions), and
* **Content-based features** (tags, metadata, etc.),
  then feed them into a unified neural network.

This gives the best of both worlds — personalization + interpretability.

---

## 🧭 Real-World Example: Blind App Implementation

For our Blind app experiment:

* We used **matrix factorization** with **implicit features** (1–4 scaled interactions).
* Set **α = 40** (confidence weighting).
* Used **10 latent factors** for users and posts.
* Implemented with **Spark ML’s ALS**.

**Results:**
📈 Push notification open rate increased from **4.9% → 9.4%** — nearly doubling engagement.

That’s the power of a well-tuned recommender system!

---

### 🧠 Key Takeaways

* **Collaborative filtering**: Learns from user–item interactions.
* **Content filtering**: Learns from item attributes.
* **Matrix factorization**: Reduces dimensionality and captures latent patterns.
* **Deep hybrids**: Combine behavioral and contextual signals for robust recommendations.
* Always monitor for **cold starts**, **echo chambers**, and **data manipulation**.

