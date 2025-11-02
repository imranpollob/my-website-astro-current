---
title: "7. Decision Trees Explained"
summary: ""
date: "Oct 7 2025"
draft: false
pinned: false
tags:
- AI
---



In this episode, we’ll explore one of the most intuitive and widely used algorithms in machine learning — **Decision Trees**.

Decision Trees might sound fancy, but think of them as a series of simple **yes/no questions** that help us make decisions — just like how we might decide what movie to watch or which restaurant to go to.

---

## 🎬 Predicting Who’ll Watch a New Movie

Imagine we’re trying to predict who, out of a group of people, would go to see a new unreleased movie.

To start, we invite a small portion of this group to watch a **preview** of the movie and fill out a **survey** about their preferences — maybe asking questions like:

* “Did you enjoy *Finding Nemo*?”
* “Did you like *The Dark Knight*?”

Then, we show the same survey to the rest of the group who haven’t seen the preview.

Now, based on how the first group responded and whether they said they’d watch the movie, we can train a **Decision Tree** to predict what the rest of the people might decide.

If someone answers “Yes” to *Finding Nemo*, we move them to the **left branch** of the tree.
If “No,” we move them to the **right branch**.
Then we ask the next question — “Did you like *The Dark Knight*?” — and split again.

At the end of this tree, each **leaf node** represents a final decision — whether a person would or wouldn’t see the movie.

This process repeats for all participants, and soon we have a simple model that can predict, with surprising accuracy, what others might do.

---

## 🛢️ A Real-World Example: Predicting Oil Drilling Success

Now, let’s jump into a real-world problem.
We’ve been hired by **Precision Drilling Corporation**, one of the leading oil drilling companies in the U.S.

Drilling for oil is **extremely expensive** and risky.
Each new site could cost millions — and there’s no guarantee it’ll be profitable.

Precision Drilling wants a model that can predict **which drill sites** are most likely to yield profitable results.

We’re given data from past projects — successful and unsuccessful — including measurements like:

* **Porosity** of the rock
* **Natural radiation**
* **Density**
* **Sonic travel time** (how long it takes sound to travel through the rock)

These features come in different **units** and **scales**, but luckily, Decision Trees don’t care — they’re **scale-invariant** and **robust to outliers**.

They can even handle **missing data**, which is common when measuring deep geological samples.

Each past site is labeled as **profitable** (1) or **not profitable** (0).
Our goal: build a Decision Tree that predicts profitability for **new sites**.

---

## ⚙️ Building the Tree with CART (Classification and Regression Trees)

We’ll use the **CART algorithm** — one of the most popular Decision Tree techniques.

CART determines where to **split the data** at each branch.
It tests each feature (like porosity, density, etc.) and finds the **threshold value** that best separates profitable from non-profitable sites.

How do we measure “best”?
By using a metric called **Gini Impurity**.

### 🧮 Understanding Gini Impurity

Gini Impurity tells us how “mixed” a node is.
If a node contains both classes (profitable and not profitable), impurity is high.
If it’s pure (only one class), impurity is 0.

Mathematically:
[
Gini = 1 - (P_1^2 + P_0^2)
]

CART tests possible split points (like porosity < 0.1) and picks the one that **minimizes Gini Impurity**.

Once the first split is chosen, it **recursively repeats** this process for each new node until:

* A maximum tree **depth** is reached, or
* Each node is **pure**, or
* There are **too few samples** to split further.

---

## 🔢 Regression with Decision Trees

Sometimes, instead of predicting categories (profitable/not profitable), we want to predict **continuous values** — like the **expected barrels of oil per day**.

In that case, we replace Gini Impurity with **Mean Squared Error (MSE)**:

[
MSE = \frac{1}{n}\sum (y_i - \bar{y})^2
]

The idea is the same — we find the split that **minimizes MSE** across nodes.
Each leaf node’s prediction is simply the **average value** of the samples in that node.

---

## 🌍 Handling Missing and Categorical Data

Decision Trees also handle **missing data** elegantly using something called **surrogate splits**.

If the best feature (say, porosity) is missing for an example, the model looks for the **next best feature** (like sonic travel time) to decide which branch to take.

For **categorical features** (like “country”), the algorithm tests **all possible subsets** of categories to find the split that best separates outcomes — though this can grow exponentially with more categories.

---

## 🧩 From Simple Trees to Powerful Ensembles

While a single Decision Tree is easy to interpret, it can also **overfit** — meaning it learns the training data too well but struggles on new data.

To fix this, we use **ensemble methods** — combinations of many trees — that dramatically improve performance.

### 🔁 Boosting

Boosting builds trees **sequentially**, where each new tree focuses on correcting the **errors** of the previous one.
This process continues until the errors stop improving.
However, boosted trees can **overfit quickly**, so we control their **depth** and use **cross-validation** to tune the number of trees.

Famous libraries like **XGBoost**, **LightGBM**, and **CatBoost** are all based on boosting techniques.

### 🎲 Bagging (Bootstrap Aggregation)

Bagging builds many trees **in parallel**, each trained on a random subset of the data and features.
The predictions are then **averaged** — reducing variance and improving stability.

This method forms the foundation of the popular **Random Forest** algorithm.

Random Forests use both **Bagging** and **feature sampling**, making them one of the most practical, high-performing ensemble models in existence.

---

## 🧠 Beyond CART: C4.5 and Friends

You might also come across **C4.5**, another tree algorithm that uses **information gain (entropy)** instead of Gini impurity and supports **multi-way splits**.
It’s primarily used for **classification problems** and was one of the earliest tree-learning algorithms in machine learning history.

---

## 🚀 Wrapping Up

Decision Trees are the **building blocks** of many modern ML algorithms.
They’re powerful, interpretable, and capable of handling different types of data — from numbers to categories to missing values.

But their real magic comes when they’re **combined** — through **boosting**, **bagging**, or **random forests** — creating models that are both strong and flexible.

In our next session, we’ll continue exploring how these ensemble methods transform simple models into **state-of-the-art predictors**.

---

### 📚 Key Takeaways

* Decision Trees split data by asking feature-based questions.
* CART uses **Gini Impurity** (for classification) or **MSE** (for regression).
* Trees can handle **missing** and **categorical** data.
* **Boosting**, **Bagging**, and **Random Forests** improve performance by combining many trees.
* Real-world use: predicting **oil drilling success**, **customer churn**, **disease diagnosis**, and much more.

