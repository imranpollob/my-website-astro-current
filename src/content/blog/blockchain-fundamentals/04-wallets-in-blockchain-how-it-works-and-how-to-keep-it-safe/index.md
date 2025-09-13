---
title: "Wallets in Blockchain: How It Works and How to Keep It Safe"
summary: ""
date: "Sep 10 2025"
draft: false
pinned: false
tags: ["Blockchain"]
---

> **TL;DR:** A blockchain wallet is not a “place that holds coins.” It’s the **key material** (private key → public key → address) that proves ownership and lets you sign transactions. Lose the **private key/seed phrase**, lose access—there’s no help desk.

---

![Web3 wallet](Solana-phantom-wallet-e1636413752168-gID_7.avif)
Photo by [decrypt.co](https://decrypt.co/138536/phantom-solana-wallet-ethereum-polygon-support)

## What you’ll learn

* What a wallet really is (and isn’t)
* How **private keys**, **public keys**, and **addresses** relate
* Why **hash functions** make wallets secure
* **Seed phrases** (BIP-39) and recovery
* Practical security habits and recovery planning
* Custodial vs non-custodial, hot vs cold, hardware vs software (brief overview)
* Step-by-step: creating, backing up, and using a wallet safely

---

## Wallets, decoded

A **wallet** is best thought of as your **bank account credentials** on a blockchain network. It doesn’t store coins; the blockchain stores balances. The wallet stores and protects the **secret(s)** that let you move those coins.

### The three core pieces

1. **Private key** (keep secret)

   * Think: your master password.
   * In Bitcoin/EVMs, commonly a 64-hex-character value (256-bit).
   * If you lose it, you lose access—**irreversibly**.

2. **Public key** (safe to share)

   * Derived from the private key via a **one-way function** (hash + elliptic-curve ops).
   * Used to verify your signatures.

3. **Address** (what you give others)

   * A shorter, human-usable representation derived from the public key (again via hashing/encoding).
   * Different chains use different encodings (e.g., Base58, Bech32, hex with checksum).


![Key derivation diagram](Public-Key-and-Private-Key.avif)
Photo by [mycryptopedia.com](https://mycryptopedia.com/public-key-private-key-explained/)

---

## Why this is secure: Hash functions in plain English

Hash functions are special algorithms with properties that make wallets viable:

* **One-way (no known inverse):** Given the *output* (your public key/address), you can’t feasibly recover the *input* (private key).
* **Deterministic:** Same input → same output (crucial for proving ownership).
* **Uniform, fixed length:** Outputs look random and consistent in size.
* **Fast to compute:** Great for verification at scale.
* **Collisions are astronomically unlikely:** Two different inputs producing the same output would be a disaster; modern hashes make that practically impossible.

This is why sharing an **address** (or public key) doesn’t risk your private key.

![Hash function illustration](cryptographic%20hash%20function.avif)
Photo by [wikipedia.org](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

---

## Encrypting your private key (recommended)

Many wallet apps encrypt your private key **at rest** with a password you choose:

* You create a strong password (you remember it).
* Wallet encrypts your private key → **Encrypted Private Key (EPK)**.
* To use the wallet, you enter the password to decrypt the EPK in memory.

If someone steals your wallet file but doesn’t have the password, they still can’t spend. (If they have both, game over.)

**Best practice:** Use a long, unique password + device full-disk encryption.

---

## Seed phrases (BIP-39): your ultimate backup

Most modern wallets are **HD wallets** (hierarchical deterministic). Instead of storing a single raw private key, they give you a **12 or 24-word seed phrase** (per the **BIP-39** standard):

* Words chosen from a list of **2048** common English words.
* **Order matters.** The phrase deterministically regenerates your master key, from which an entire tree of accounts/addresses (**BIP-32/44**) can be derived.
* With the seed phrase, you can recover your wallet on any compatible app/device.

> 🔒 **Rule #1:** Write your seed phrase on paper/steel. Store **offline**. Never type it into a website, Google Doc, email, or screenshot.

![Seed phrase example](1-4o0R_RCB3mRtROwD21Eqqw-jpeg.avif)
Photo by [bringin.xyz](https://bringin.xyz/blog/learn/what-are-bip39-seed-words/)

---

## Wallet types at a glance

* **Non-custodial (you hold keys)**

  * Software wallets (desktop/mobile extensions like MetaMask, Phantom).
  * **Hardware wallets** (Ledger, Trezor, Keystone): private keys stay in a secure chip—**strongly recommended** for significant value.
  * **Paper/steel backups**: offline storage of seed only.

* **Custodial (they hold keys)**

  * Exchanges and fintech apps. Convenience, but you rely on their security/policies. “**Not your keys, not your coins**.”

* **Hot vs Cold**

  * **Hot:** Connected to the internet (convenient, higher risk).
  * **Cold:** Fully offline (max security, less convenient).

![Wallet types infographic](original_imageshttpsg.foolcdn.comeditorialimag.width-880_6tZrxht.avif)
Photo by [fool.com](https://www.fool.com/terms/b/blockchain-wallet/)

---

## How sending funds works (under the hood)

1. You enter a **recipient address** and **amount**.
2. Wallet constructs a **transaction** referencing your unspent outputs (UTXOs in Bitcoin) or your account balance (account-based chains like Ethereum).
3. Wallet **signs** the transaction with your private key (never leaves your device).
4. The network verifies your **signature** using your **public key** and broadcasts it.
5. Miners/validators include it in a block; your balance updates on-chain.


---

## Hands-on: Safe wallet setup checklist 📝

1. Choose the right wallet type for your needs.
2. Create your wallet offline if possible.
3. Write down your seed phrase and store it in two safe places.
4. Set a strong, unique password for your wallet.
5. Enable extra security features like PIN, biometrics, and disk encryption.
6. Test your backup by restoring the wallet on a spare device.
7. Start with a small amount and test

---

## Mini-FAQ

**Q: Can I recover without my private key if I still have the seed phrase?** <br />
**A:** Yes—that’s the point of the seed. It regenerates your private keys.

**Q: Is it safer to share my public key or my address?** <br />
**A:** Share your **address**. It’s shorter, checksummed (on many chains), and better for UX/privacy.

**Q: Can two people have the same address?** <br />
  **A:** The odds are astronomically low (practically zero) due to the vast keyspace.
**A:** With proper cryptography, the odds are effectively zero.

**Q: I forgot my wallet password but have the seed.** <br />
  **A:** Restore from seed into a fresh wallet; set a new password.


---


## Common mistakes & attacks (and how to avoid them)

* **Phishing:** Fake wallet websites/extensions pop up in searches or ads.
  → Bookmark official sites. Verify URLs. Never enter seed phrase online.

* **Seed phrase prompts after setup:** Real wallets only show seed once—during creation/recovery.
  → If a site/app asks again, it’s a scam.

* **Clipboard malware:** Changes pasted addresses.
  → Double-check first/last 6–8 chars before sending.

* **SIM swap:** Attackers bypass 2FA via phone number.
  → Use app-based 2FA (TOTP), not SMS.

* **Screenshots of seed:** Cloud backups can leak.
  → Paper/steel only, offline.

* **Single-point storage:** Only one copy of the seed.
  → Use a **3-2-1** strategy: 3 copies, 2 media types, 1 offsite.

---

## Key takeaways

* **Everything starts from the private key/seed.** Protect it above all else.
* **Public key and address are safe to share** (address preferred).
* **Hash functions** and elliptic-curve cryptography make reversing keys infeasible.
* **Backups win.** Paper/steel seed stored offline, in multiple safe locations.
* For meaningful funds, **use a hardware wallet**.

---


👉 In the next post, we’ll dive into [Blockchain Transactions: Structure, Verification, and Security](/blog/blockchain-and-ethereum-fundamentals/05-blockchain-transactions-structure-verification-and-security).