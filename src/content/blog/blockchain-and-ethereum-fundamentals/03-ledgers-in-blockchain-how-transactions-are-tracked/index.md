---
title: "Ledgers in Blockchain: How Transactions Are Tracked"
summary: ""
date: "Sep 9 2025"
draft: false
pinned: false
tags:
- Blockchain
---


When we talk about blockchain, at its core, it’s really just a **ledger**—a record of transactions that everyone can trust. Of course, blockchain adds extra properties like decentralization and immutability, but the fundamental idea is simple:
👉 Keep track of transactions in a way that people can rely on.

In this post, we’ll explore what a ledger is, why trust becomes an issue in traditional systems, and how blockchain revolutionizes the concept of ledgers.

---

## What is a Ledger?

A **ledger** is simply a record book of transactions. Businesses, banks, and even friends who lend each other money use ledgers in some form.

Let’s look at a simple example with two familiar characters in blockchain examples: **Bob** and **Alice**.

📒 Imagine Bob and Alice frequently loan each other money. To keep track, they maintain a ledger where they write down each transaction.

* **Day 1**: Bob sends Alice \$1 → `B → A : $1`
* **Day 2**: Alice sends Bob \$2 → `A → B : $2`
* At the end of the month, the ledger shows Bob owes Alice \$1.

✅ This system works fine—until **trust** becomes a problem.

---

## The Problem With Trust

What if Bob decides to cheat? He could secretly add a fake entry in the ledger:

* `Alice → Bob : $15`

Now the ledger shows Alice owes Bob, even though that never happened. Since both have equal access, **either can manipulate the ledger**, making it unreliable.

👉 This is the **first big problem** with ledgers: they require trust in the people maintaining them.

---

## Adding a Middleman: The Bank

To solve the trust problem, Bob and Alice might bring in a **bank**. The bank becomes the trusted third party:

* All transactions go through the bank.
* The bank records entries in its ledger.
* Bob and Alice can view balances at the end of the month.


This feels more secure because the bank is a neutral party. But new issues arise:

* The bank **can still manipulate or censor transactions**.
* The ledger is stored **centrally**. If the bank’s system fails—or worse, is destroyed—the record is gone.
* It’s **not transparent**—only the bank decides who gets access to the data.

In other words, the trust problem hasn’t disappeared—it’s just been shifted to the bank.

---

## Enter Blockchain: The Decentralized Ledger

Blockchain was invented to solve exactly this issue. Instead of relying on one person (Bob), or one authority (the bank), blockchain spreads the ledger across many participants (nodes).


### Key Properties of Blockchain Ledgers

1. **Distributed** 🖧 – Copies of the ledger exist across many nodes worldwide. Even if some go offline, the ledger survives.
2. **Decentralized** ⚖️ – No single party controls it. Consensus rules decide validity.
3. **Publicly Available** 🌍 – Anyone can read the ledger. Transparency is built-in.
4. **Immutable** 🔒 – Once a transaction is recorded, it cannot be changed or deleted.
5. **Chronological** ⏳ – Transactions are ordered by time, ensuring balances are accurate.
6. **Irrevocable** 🚫 – Once confirmed, transactions cannot be reversed or undone.

This combination makes blockchain ledgers **trustless**—you don’t need to trust any single party, because the system itself ensures integrity.

---

## A Note on Bitcoin (and Beyond)

For the rest of this fundamentals series, we’ll mostly use **Bitcoin** as our example blockchain. Its ledger fully embodies the properties we discussed above.

Of course, not all blockchains are the same—some sacrifice decentralization or transparency for speed or scalability. But Bitcoin remains the gold standard for understanding the concept of a **trustless, decentralized ledger**.

---

## Final Thoughts

Ledgers are the foundation of blockchain technology. What started as a simple way for Bob and Alice to track who owes whom has evolved into a **global, tamper-proof system** that powers cryptocurrencies and much more.

👉 Next up, we’ll dive into **Wallets**, where we’ll see how individuals interact with this ledger and manage their digital assets.
