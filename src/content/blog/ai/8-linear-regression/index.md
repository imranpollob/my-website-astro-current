---
title: "Understanding Linear Regression"
summary: ""
date: "Nov 2 2025"
draft: false
pinned: false
tags:
- AI
---

Imagine you have a scatterplot of points that seem to follow a general trend — as one variable increases, so does another. You could draw a line that best summarizes this pattern. That line represents the **relationship** between the two variables.

This, at its core, is **linear regression** — finding the *line of best fit* through data so that we can make predictions about future or unseen values.

---

### ⚡ Real-World Example: Predicting Power Demand

Let’s say we’ve just been hired by **California ISO**, the organization that manages California’s electric power grid. They want to **predict the power demand** for each region a day in advance.

Why?
If demand is expected to spike, they can increase supply; if demand is expected to fall, they can divert power elsewhere.

We hypothesize that **temperature** is a key driver: as the temperature rises in summer, more people turn on their air conditioners — increasing power demand.

So:

* **Feature (X):** Average daily temperature (from the National Weather Service)
* **Label (Y):** Daily power demand per region (in megawatts)

When we plot these data points, a clear pattern emerges — higher temperature, higher power usage.
Our goal: find a line that captures this trend.

---

### 📈 The Equation of a Line

The general form of a line is:

[
Y = mX + b
]

Where:

* **X** = input (temperature)
* **Y** = output (predicted power demand)
* **m** = slope (how much Y changes for a unit change in X)
* **b** = intercept (where the line crosses the Y-axis)

This allows us to plug in any temperature and get an **estimated power demand** for that region.

---

### 🧮 Finding the Line of Best Fit

To calculate the best line, we use a formula based on all the (X, Y) pairs.
The slope (**A**) and intercept (**B**) are derived from the averages and deviations of X and Y:

[
A = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{\sum (X_i - \bar{X})^2}
]
[
B = \bar{Y} - A \bar{X}
]

After calculation, we might find:
**A = 4105**, **B = –50962**

So, the model becomes:
[
Y = 4105X - 50962
]

If tomorrow’s temperature is predicted to be **25.2°C**, plugging that into the equation gives:
[
Y = 52,484 \text{ megawatts}
]

That’s our **predicted power demand** for tomorrow.

---

### 📊 Interpreting the Coefficient

The slope (4105) means:

> For every **1°C increase in temperature**, power demand increases by **4105 MW**.

That’s a strong and meaningful relationship — but how do we know it’s not just random noise?

---

### ✅ Statistical Significance: P-Value

The **P-value** tells us whether our observed relationship is likely due to chance.

* If **P ≤ 0.05**, we consider the result *statistically significant*.
* In our case, **P = 0.0009**, which means there’s less than a 0.1% chance the relationship is random.

Hence, we can confidently say: temperature and power demand are related.

---

### 🎯 Confidence Intervals

Because our data only covers specific years and months, our coefficient is an *estimate* of the true, underlying relationship.

A **95% confidence interval** between **3100** and **5000** means:

> There’s a 95% chance that the *true* increase in demand per °C lies between 3100 and 5000 MW.

If a confidence interval includes zero, the relationship isn’t statistically meaningful.

---

### 🔗 Correlation vs. Causation

The **correlation coefficient (R)** measures how strongly two variables move together:

* **R = 1** → Perfect positive correlation
* **R = –1** → Perfect negative correlation
* **R = 0** → No correlation

In our example, **R = 0.99**, which is excellent — temperature and demand rise together.
But remember, correlation ≠ causation. Just because they move together doesn’t mean one causes the other.

---

### 🧾 R-Squared — How Well the Line Fits

We can also compute **R²**, which tells us how much of the variation in Y is explained by X.

If **R² = 0.98**, it means 98% of the variation in power demand is explained by temperature — leaving only 2% unexplained (random noise or other factors).

Adding more relevant features can increase R², but beware of overfitting.

---

### 🧩 Expanding the Model: Multiple Regression

Real-world systems rarely depend on a single factor.
We can extend our model to include more **independent variables**, such as:

* Region population size (small, medium, large)
* Region type (industrial, commercial, residential)
* Humidity, etc.

This becomes a **multiple linear regression**:

[
Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + ... + \beta_n X_n
]

For categorical data like “region type,” we use **one-hot encoding** — converting each category into binary variables (1 or 0).
For example:

* Industrial → [1, 0]
* Residential → [0, 1]
* Commercial → [0, 0]

---

### 🔍 Detecting Collinearity

If two features (e.g., temperature and humidity) are highly correlated, it creates **multicollinearity**, which distorts the interpretation of coefficients.

We detect this using the **Variance Inflation Factor (VIF):**

* **VIF = 1:** No collinearity
* **1–5:** Moderate, acceptable
* **>5:** High — needs fixing (by centering, removing features, or combining them)

---

### ⚙️ Feature Interactions and Nonlinearity

Sometimes features interact — for example, “region type” might change how temperature affects power demand.
We can model this by **multiplying features together** (interaction terms).

We can also include **nonlinear terms** (like X², X³, or log(X)) to fit curves instead of straight lines.
But beware: adding too many terms can lead to **overfitting** — where your model memorizes noise instead of learning the pattern.

---

### ⚠️ Simpson’s Paradox — The Hidden Trap

Suppose we ignore the “region size” feature and combine all regions into one dataset.
We might end up with a misleading line that suggests:

> As temperature increases, power demand *decreases.*

That’s completely false!
This is known as **Simpson’s Paradox** — a situation where aggregated data hides or reverses true relationships.
The cure? Always segment data properly and include all relevant contextual features.

---

### 🧰 Tools of the Trade

A great Python library for this is **StatsModels** — it handles:

* Multiple regression
* P-values
* Confidence intervals
* R² and adjusted R²
* Variance Inflation Factors (VIF)

Under the hood, libraries don’t use the “closed-form” N³ regression formula we derived.
Instead, they rely on more efficient techniques like **Singular Value Decomposition (SVD)**.

---

### 🧩 Summary

| Concept                 | Key Idea                                    |
| ----------------------- | ------------------------------------------- |
| **Linear Regression**   | Fits a line to predict Y from X             |
| **Slope (m)**           | Change in Y for each unit increase in X     |
| **P-Value**             | Probability relationship is due to chance   |
| **Confidence Interval** | Range of likely true coefficient values     |
| **R²**                  | Fraction of variance explained by the model |
| **VIF**                 | Detects feature correlation (collinearity)  |
| **Simpson’s Paradox**   | Misleading conclusions from aggregated data |

---

### 🌅 Wrapping Up

Linear regression may seem simple, but it’s one of the most **powerful and interpretable models** in data science.
It builds the foundation for many advanced techniques — from generalized linear models to deep learning regressors.

As you move forward, remember:

> A well-fitted line can reveal powerful insights — but only when you understand what the data truly represents.

Stay tuned for the next episode in the ML Experts Crash Course as we continue exploring the fascinating world of machine learning!

