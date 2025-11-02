---
title: "11. K-Means Clustering Explained"
summary: ""
date: "Oct 11 2025"
draft: false
pinned: false
tags:
- AI
---


Welcome back to **ML Experts — Machine Learning Crash Course**!
In our previous lessons, we explored **supervised learning**, where models learned from labeled examples — “this is spam” vs “this is not spam,” or “power outage” vs “no outage.”

But what if we don’t have any labels at all? What if we just have raw data and want to **discover structure** within it?
That’s where **unsupervised learning** comes in — and one of the most popular algorithms here is **K-Means Clustering**.

---

## 🌐 The Scenario: Understanding Team Blind’s Users

Imagine we’ve been hired by **Team Blind**, the anonymous workplace social app.
People sign up under their company name and post workplace discussions anonymously.

Our goal?
To **grow the user base** — but we know nothing about who the users are or how they behave.

All we have are behavioral metrics:

* 👍 Likes given and received per day
* ⏱ Average session time
* 📝 Posts created per month
* 📜 Feed scrolling time per session
* 💬 Direct messages sent or received per day

We don’t know which users are “readers” or “writers” — just these raw numbers.
So, how can we make sense of this data?
Enter **K-Means**.

---

## 🧩 The Core Idea: Finding “K” Averages

The name **K-Means** says it all:
It finds **K clusters (groups)** by locating **K mean points** — or **centroids** — that represent the center of each group.

Let’s say we choose **K = 2**.
We start by placing **two random centroids** in our dataset.
Each data point is assigned to the **nearest centroid** based on **distance** (usually Euclidean distance).

Then, we move each centroid to the **average position** of all points in its cluster.
We repeat this process — assign → update → assign → update — until the centroids **stop moving**.
At that point, the algorithm has **converged**.

---

## 📉 Measuring Cluster Quality: Inertia

How do we know if our clusters make sense?
We measure something called **inertia** — the **sum of distances** between each point and its cluster’s centroid.

A smaller inertia means the points are tightly grouped — and that’s what we want.
The goal of K-Means is to **minimize inertia**.

---

## ⚙️ Efficiency and the Role of Lloyd’s Algorithm

If we tried every possible clustering combination, the computation would explode to **O(N^(K·D + 1))** — totally impractical.

Instead, K-Means uses **Lloyd’s algorithm**, which brings complexity down to **O(N·K·D)**.
But there’s a trade-off:
It’s only an **approximation**, so it might get stuck in a **local minimum** instead of the **global best** solution.

This happens because the inertia function is **non-convex** — there can be multiple “valleys,” and the algorithm might settle in the wrong one.

---

## 🌀 Getting Stuck in Local Minima

Let’s say we’re clustering with **K = 3**, but our random initialization places two centroids too close to each other.
The algorithm might end up grouping all nearby points under those two centroids — missing a better configuration elsewhere.
This is an example of **local minima**.

To mitigate this, we can:

* Use **K-Means++**, which chooses better initial centroids.
* Or use **Bisected K-Means**, which starts with two clusters, then recursively splits the one with the **highest inertia** until a good number of clusters emerge.

---

## 📊 Choosing the Right “K”

How do we know how many clusters we should have?
There are two popular methods:

### 1. The Elbow Method

We run K-Means with K = 1, 2, 3, …, and plot the **inertia**.
As K increases, inertia decreases — but after a point, the improvement slows down.
That bend or “elbow” in the curve is the **optimal K**.

### 2. The Silhouette Method

For each point:

* Compute **A(i)** = average distance to points in the same cluster
* Compute **B(i)** = average distance to points in the nearest other cluster
  Then compute the **Silhouette Coefficient**:
  [
  S(i) = \frac{B(i) - A(i)}{\max(A(i), B(i))}
  ]
  A higher average S(i) across all points means better separation.
  The K with the **highest silhouette score** is ideal.

---

## 📈 From Insight to Action: Growing Team Blind’s User Base

After running K-Means, suppose we get **three clusters**:

1. **Content Consumers** – Scroll a lot, like posts frequently.
2. **Content Creators** – Post often, engage less with others.
3. **Hybrid Users** – Occasionally write but also actively read.

By comparing cluster features, we can build **growth strategies**:

* 🧭 **Encourage readers to write:** Send prompts about trending workplace topics or events.
* 🤖 **Use bots to motivate new writers:** Offer encouragement or highlight engagement.
* 🚀 **Promote promising creators:** Push their posts to more readers to boost feedback.
* 💰 **Offer referral rewards:** Bring in new users similar to existing active ones.

The key is to maintain **balance** — too many readers and too few writers will make the platform feel empty.

---

## 🧮 Beyond K-Means: Variants & Alternatives

| Algorithm     | Key Difference                         | Distance Metric       |
| ------------- | -------------------------------------- | --------------------- |
| **K-Medians** | Uses the **median** instead of mean    | Manhattan Distance    |
| **K-Medoids** | Centroid must be a **real data point** | Any (often Manhattan) |
| **K-Modes**   | Works with **categorical data**        | Dissimilarity measure |

However, some data shapes — like **circular rings** — confuse K-Means, which prefers convex clusters.
For those cases, we can use **Agglomerative Clustering**, which merges the nearest points step by step, building a **hierarchical structure**.

We can measure inter-cluster distance in different ways:

* **Single linkage:** Minimum distance between points in clusters.
* **Complete linkage:** Maximum distance between points in clusters.

---

## 🧰 Practical Notes

* 📦 Use **scikit-learn**’s `KMeans` (which implements K-Means++) or `AgglomerativeClustering`.
* ⚡ For big data, use **Spark’s Bisected K-Means**.
* ⚖️ Always **standardize features** before clustering — subtract the mean and divide by the standard deviation.
* 🚫 Watch out for **high-dimensional data** — it can reduce distance-based clustering accuracy due to the “curse of dimensionality.”

---

## 🎓 Final Thoughts

K-Means is simple, intuitive, and surprisingly powerful.
Even without labels, it can uncover meaningful patterns — like different types of users, customers, or behaviors — and guide strategic decisions.

In our Team Blind example, K-Means transformed anonymous clickstream data into **actionable insights** on how to **grow the platform sustainably**.

In the next lesson, we’ll dive deeper into other unsupervised learning techniques — stay tuned for more!

