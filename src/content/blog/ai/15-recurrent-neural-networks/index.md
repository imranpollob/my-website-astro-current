---
title: "Understanding Recurrent Neural Networks (RNNs)"
summary: ""
date: "Nov 2 2025"
draft: false
pinned: false
tags:
- AI
---


Welcome back to **ML Experts’ Machine Learning Crash Course!**
In today’s episode, we’re diving into a key architecture in deep learning — the **Recurrent Neural Network (RNN)**.

If you’ve ever wondered how chatbots can hold a conversation or how your phone predicts the next word in a sentence, this is the magic behind it.

---

## 💬 The Chatbot Challenge

Imagine we’re building a chatbot for the **TeamBlind app**, designed to message *first-time writers* and motivate them to continue writing.

* A user posts an article.
* Our chatbot sends a friendly DM.
* The goal is to encourage a conversation — and eventually turn casual posters into active content creators.

But there’s a problem…

Messages come in **different lengths**.
Some people write, “Thanks,” while others type long paragraphs.
How can a neural network handle text of variable size?

One naïve idea is to **fix message length** — say, 20 words — and *pad shorter ones with zeros*.

This works, but it’s clunky. It ignores the natural *flow* of language.

Enter the **Recurrent Neural Network** — a model that remembers context, one word at a time.

---

## 🔁 Why “Recurrent”?

In a regular neural network, each input is treated independently.
But in human language, each word *depends* on the words before it.

For example, the meaning of “bank” changes depending on whether we say “river bank” or “savings bank.”

RNNs solve this by introducing a **loop**:
they take the previous output (or *hidden state*) and feed it back into the network as part of the next input.

This allows RNNs to **retain memory over sequences** — much like a person remembering the previous sentence in a conversation.

---

## 🧩 The Core Idea: Hidden States

Let’s simplify how an RNN processes a message.

1. Each word is converted to a number (its position in the vocabulary).
   Example:

   * “Thanks” → 32
   * “for” → 14
   * “reaching” → 53
   * “out” → 9

2. These numbers are fed one-by-one into the RNN.

3. The RNN produces an output and a **hidden state** — a sort of *memory vector* that carries information from previous words.

At each step, this hidden state is updated and passed forward.
By the time the last word is processed, the network has built a *contextual understanding* of the whole message.

---

## 🧮 Backpropagation Through Time (BPTT)

Training an RNN is like training a regular neural network — but with a twist.
Since the network unfolds across time steps, we must “backpropagate” through each step.

This is known as **Backpropagation Through Time (BPTT)**.
Each time step contributes to the overall loss, and the gradients flow backward through all previous states.

However, this introduces a major issue…

---

## ⚠️ The Vanishing Gradient Problem

As we move backward through many time steps, gradients can become **very small**, causing earlier words to be “forgotten.”
In long sentences, the network struggles to connect early context (“If it rains tomorrow…”) with later predictions (“…bring an umbrella”).

To overcome this, researchers developed a more advanced type of RNN:

---

## 🧱 Long Short-Term Memory (LSTM)

LSTMs add *gates* — mechanisms that control what information to **remember**, **forget**, or **output**.

Let’s break it down:

| Gate               | Purpose                                  | Function                                                |
| ------------------ | ---------------------------------------- | ------------------------------------------------------- |
| 🧹 **Forget Gate** | Decides what old information to discard. | Uses a sigmoid layer (0–1 scale) to partially forget.   |
| ➕ **Input Gate**   | Decides what new information to store.   | Combines sigmoid (for control) and tanh (for new info). |
| 🔓 **Output Gate** | Decides what part of memory to output.   | Regulates final hidden state for the next time step.    |

These gates make LSTMs far more **memory-stable**, allowing them to capture long-term dependencies.

---

## 🧩 Variations on LSTMs

1. **Stacked LSTMs**
   Multiple LSTM layers stacked on top of each other to capture hierarchical language patterns.

2. **Bidirectional LSTMs**
   Two LSTMs — one reads the sentence forward, the other backward — allowing the model to see *past* and *future* context simultaneously.

3. **GRUs (Gated Recurrent Units)**
   A simplified version of LSTMs with fewer gates and faster training — perfect for smaller datasets.

---

## 🌐 From Words to Embeddings

Feeding raw word indices to a network isn’t ideal.
Instead, we can use **embeddings** — dense vector representations of words that capture meaning.

For instance:

* “king” – “man” + “woman” ≈ “queen”

These embeddings are learned through **gradient descent** or can be preloaded from pretrained models like **Word2Vec** or **GloVe**.

In our chatbot, each word is embedded into a **10-dimensional vector space**, making relationships between words more meaningful to the model.

---

## 🪜 Making Predictions Efficient: Hierarchical Softmax

When your vocabulary grows (say, 10,000 words), computing probabilities for every possible word becomes expensive.

The **hierarchical softmax** speeds this up by organizing words in a tree.
Instead of computing probabilities for *every* word, it traverses the tree, reducing complexity from *O(V)* to *O(log V)*.

---

## 🧠 Building the Chatbot Model

Here’s the architecture we used for TeamBlind’s chatbot:

* **Embedding layer:** 317 words → 10 dimensions
* **Stacked LSTMs:**

  * First LSTM: 32 units
  * Second LSTM: 64 units
* **Output:** Standard Softmax for word prediction

📊 **Result:**
11% of first-time writers became active, consistent writers within 30 days — a solid success!

---

## 🧰 Libraries & Training Tips

If you’re implementing this yourself, start with **Keras** or **TensorFlow**.

💡 **Tips for stable training:**

* Initialize LSTM weights carefully to avoid degeneracy.
* Apply **dropout** for regularization.
* Use **gradient clipping** to avoid exploding gradients.
* Experiment with **embedding sizes**, **sequence lengths**, and **batch normalization**.

---

## 🔮 Wrapping Up

Recurrent Neural Networks revolutionized sequence modeling — from chatbots to language translation and speech recognition.
While vanilla RNNs struggle with long-term memory, **LSTMs** and **GRUs** elegantly solve those challenges.

The next time you see your phone completing your sentence or a chatbot replying intelligently, remember — it’s not magic.
It’s the power of **recurrence** — machines learning to remember, one word at a time.

