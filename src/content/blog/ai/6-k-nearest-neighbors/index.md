---
title: "6. Understanding K-Nearest Neighbors (KNN)"
summary: ""
date: "Oct 6 2025"
draft: false
pinned: false
tags:
- AI
---


Welcome back to **ML Experts Machine Learning Crash Course**.
In today’s session, we’ll explore one of the most intuitive yet powerful algorithms in machine learning — the **K-Nearest Neighbors (KNN)** model.

KNN might sound simple at first, but behind that simplicity lies a versatile tool that can be applied across industries — from **detecting cybersecurity threats** to **predicting alumni donations**.

---

## 🧭 What is KNN?

At its core, KNN is about **learning by proximity**. Instead of building an explicit mathematical model, it classifies or predicts an example based on how close it is to others in the dataset.

Imagine you’re trying to figure out whether an unlabeled point belongs to the “red” class or “green” class. KNN says:

> “Look at your K nearest neighbors — whichever class is in the majority, that’s your best guess.”

So if **K = 7**, and **6 of the nearest points are green** while **1 is red**, the new point will likely be green. That’s an 85% majority vote in favor of green.

---

## 🛡️ Cybersecurity Case Study: Detecting Intrusive Processes

Let’s say you work at **Symantec**, the cybersecurity company. Your goal: identify which programs (or *processes*) on a network are **intrusive (malicious)** versus **normal**.

### 🧩 Step 1: Define the Features

Each process has a **unique process ID (PID)** and a list of **system calls** (like “open file”, “write to console”).

The **label** for each process is:

* `0` → Normal
* `1` → Intrusive

### 🧮 Step 2: Represent the Data

Since system calls are words, we can use **TF-IDF** (Term Frequency–Inverse Document Frequency) to represent each process as a numeric vector — just like in text classification.

Now we can visualize them in a 2D space:

* 🟢 Green dots → Normal processes
* 🔴 Red dots → Intrusive ones

---

## 📏 Measuring Distance

KNN depends on how we measure **distance** between data points.

The simplest form is **Euclidean distance**, defined as:

[
d(a,b) = \sqrt{(a_1 - b_1)^2 + (a_2 - b_2)^2 + ... + (a_n - b_n)^2}
]

The closer two points are, the more similar they are.

However, not all features are numeric. That’s where other distance metrics come in.

---

## 🧮 Handling Different Feature Types

Real-world data is rarely uniform. Let’s explore how KNN handles **mixed data types**.

### 🧱 1. Ordinal Features (e.g., Priority Levels)

For features with order — like **low**, **medium**, **high** — we use **Gower distance** to normalize them between 0 and 1.

### ⚙️ 2. Asymmetric Binary Features

For features where only one value matters more (e.g., “ran in sudo mode”), we use **Jaccard distance**.
It focuses on mismatches but **ignores cases where both values are 0**, because those carry less information.

### 💻 3. Symmetric Binary Features

For cases like “Mac vs PC,” both values are equally informative.
Here, we use **Simple Matching Distance**, which includes both 0s and 1s in the comparison.

Ultimately, we combine these different measures (Euclidean, Jaccard, Gower, etc.) to compute an overall distance between two examples.

---

## 🏫 Marketing Case Study: Predicting Alumni Donations

Now, let’s shift gears. Suppose you work for a **marketing agency** helping universities **increase alumni donations**.

### 🎓 Step 1: Data Setup

The university provides you with:

* **College** (e.g., Engineering, Business) → *Categorical*
* **Graduation Year** → *Ordinal* (0–10 years ago)
* **Facebook Group Join Date** → used only to filter “Do Not Call” alumni

The **label** here is continuous — the **amount donated** last year.

### 🔢 Step 2: Distance Metrics

For this mixed dataset, we use:

* **Hamming Distance** → for categorical variables
* **Gower Distance** → for ordinal features

### 💰 Step 3: Predicting Donation Amounts

When a new alumni record arrives, we find its **K nearest neighbors** and **average their donation amounts** to make a prediction.

This simple approach can help the university call only those most likely to donate — saving time and improving ROI.

---

## ⚙️ Practical Considerations

### 1. ⚖️ Choosing K

If K is too small → model becomes noisy and overfits.
If K is too large → it over-smooths and misses details.
Also, choose **odd K** when you have **two classes** to avoid ties.

### 2. 🧩 Scaling Features

Since KNN relies on distances, features must be **normalized** (e.g., via min–max scaling) to ensure no single variable dominates the metric.

### 3. 🧮 Dimensionality

High-dimensional data can break KNN due to the **curse of dimensionality** — distances become less meaningful as dimensions increase.
You can reduce this effect by **selecting features greedily** using cross-validation.

### 4. 🧠 Weighted Voting

Give **closer neighbors more influence**.
For instance, neighbors at smaller distances can be given higher vote weights (e.g., inverse distance weighting).

---

## 🌳 Optimizing KNN with KD-Trees

KNN is computationally expensive — each prediction requires checking all data points.
That’s **O(N × D × K)** time.

To optimize, we can use a **KD-Tree** — a binary tree that partitions space along each feature dimension.
This reduces average prediction time to roughly **O(K log N)** for moderate dimensions.
However, it degrades back to linear complexity as dimensionality grows.

---

## 📊 Results

### 🛡️ Cybersecurity Application

* Achieved an **F1-score of 83%** offline.
* Detected **two real intrusions** in the first month (with one false alarm).

### 🎓 Alumni Donation Prediction

* Generated an **ROI of 20%**.
* Improved alumni experience — fewer unwanted calls, higher engagement.

---

## 🚀 Final Thoughts

KNN is a beautifully **intuitive, non-parametric** algorithm.
It doesn’t assume any distribution or equation — it simply trusts the wisdom of proximity.

Whether it’s catching intrusions or optimizing fundraising calls, KNN reminds us that **sometimes the best answers come from your neighbors.**

---

### 🧠 Key Takeaways

* KNN classifies data based on **nearest neighbors** using distance metrics.
* Works for both **classification** and **regression**.
* Sensitive to **scaling**, **dimensionality**, and **choice of K**.
* Enhanced using **feature scaling**, **weighted votes**, and **efficient search trees** like **KD-Tree**.

---

### 📅 Up Next

In the next lesson, we’ll dive into **dimensionality reduction** — how to simplify high-dimensional datasets while preserving their structure.

