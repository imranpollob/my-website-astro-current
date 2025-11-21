# AI CODER INSTRUCTIONS – Imran Pollob Portfolio Revamp

## 0. CONTEXT & GOAL

- This repo is my **personal portfolio website**.
- Tech stack: Astro + (likely) TailwindCSS / modern CSS (keep existing styling system).
- Main goal: 
  - Position me as a **Blockchain Security & AI Engineer** with **5+ years Software Engineering** experience.
  - Reorganize the site into **4 main pages** with clear content.

### Target Audience

- Hiring managers & recruiters for:
  - Blockchain / Smart Contract Engineer
  - Blockchain Security Engineer
  - AI / ML Engineer
  - Full-Stack Software Engineer

### High-Level Requirements

1. The website must have **exactly 4 main pages**:
   - `/` – **Home**
   - `/experience` – **Experience & Certifications**
   - `/projects` – **Projects & Research**
   - `/blog` – **Blog**
2. Use existing design system as much as possible (colors, fonts, spacing).
3. Keep the site responsive (desktop + mobile).
4. DO NOT remove existing functionality unless explicitly told.
5. Prefer creating small reusable components where it reduces duplication.

---

## 1. IMPLEMENTATION ORDER (STEP BY STEP)

Follow this sequence:

1. **Setup**
   - Create a new git branch (if applicable): `portfolio-revamp`.
   - Do NOT change build/config unless needed.

2. **Navigation & Routing**
   - Ensure there are exactly 4 top-level nav links:
     - Home
     - Experience
     - Projects
     - Blog
   - Make sure each nav item routes to the correct page.

3. **Home Page Updates**
   - Implement sections described in **Section 2**.

4. **Experience Page Updates**
   - Implement sections described in **Section 3**.

5. **Projects Page Updates**
   - Implement sections described in **Section 4**.

6. **Blog Page Updates**
   - Implement sections described in **Section 5**.

7. **Global Polish**
   - Check mobile layout.
   - Check dark/light mode if supported.
   - Ensure all links (GitHub, LinkedIn, Email, Resume) work.

8. **Clean-up**
   - Remove/rename any legacy pages no longer used (e.g., old About page) only if clearly obsolete.
   - Run formatting / lint commands used in repo (e.g., `npm run lint`, `npm run format`).

---

## 2. HOME PAGE (`/`)

### 2.1 Structure & Sections (top → bottom)

1. **Hero**
2. **Quick Snapshot / Stats**
3. **Short About Me**
4. **Core Skill Areas**
5. **Featured Projects**
6. **Featured Blog Posts**
7. **Certifications Preview**
8. **Contact / Call-to-Action**

Implement each section as its own component if convenient (e.g., `Hero.astro`, `Stats.astro`).

---

### 2.2 HERO SECTION

**Requirements**

- Large headline, subheadline, and two buttons.
- Optional small line for location.

**Content**

Headline (two lines):

> Blockchain Security & AI Engineer  
> PhD Candidate • 5+ Years Software Engineering

Subtext:

> I design and build secure blockchain systems and intelligent applications—from smart-contract security tooling to AI-powered apps for real users.

Buttons:

- Primary: `Download Resume`
  - Link to existing resume file if present; otherwise use a placeholder URL (`/resume.pdf`) and ensure file can be easily replaced.
- Secondary: `Hire me for Blockchain / AI / Software Engineering`
  - Scrolls down to Contact section on the same page.

Small line under buttons:

> Based in Detroit, MI · Open to remote and on-site roles

---

### 2.3 QUICK SNAPSHOT / STATS

- Display as 3–4 small cards or icons in a row (stack on mobile).
- Content:

1. 🎓 **PhD in Blockchain Security** – Wayne State University (in progress)  
2. 💼 **5+ Years Industry Experience** – Full-stack software engineer  
3. 🧪 **190+ GitHub Repos** – 20+ CV-grade projects  
4. ✍️ **30+ Technical Blog Posts** – ML, blockchain & system design  

---

### 2.4 SHORT “ABOUT ME”

Place below stats.

Content:

> I’m M M Imran (Pollob), a PhD candidate specializing in **blockchain security**.  
>  
> Before my PhD, I worked for over five years as a **software engineer**, building production systems in PHP, JavaScript, Python and modern web frameworks.  
>  
> I’m most excited about the intersection of **secure blockchain design**, **AI/ML**, and **practical software engineering**—turning research ideas into tools that people can actually use.

Add a link/button: `View my experience →` routing to `/experience`.

---

### 2.5 CORE SKILL AREAS

Three columns (stack on mobile). Headings and bullet lists:

**Blockchain & Web3**

- Solidity, Ethereum, smart contracts  
- DeFi protocols (DAO, stablecoin, NFT marketplace)  
- Smart contract security & common vulnerabilities  
- Foundry, Hardhat, Ethers.js

**AI & Machine Learning**

- Python, ML pipelines, model training & evaluation  
- LLMs, retrieval-augmented generation (RAG), agentic assistants  
- Generative AI (GANs, diffusion basics), computer vision  
- Time-series forecasting (e.g., crypto price prediction)

**Software Engineering**

- React, Next.js, Vue.js, Node.js, Laravel  
- REST APIs, authentication, clean architectures  
- PostgreSQL, MySQL, MongoDB  
- Docker, CI/CD, AWS

---

### 2.6 FEATURED PROJECTS (PREVIEW)

- Show **3–4 cards** linking to `/projects` anchors (or just the page).
- Each card: title, one-line description, stack, and “View project →”.

Projects to feature:

1. **NFT Rental Marketplace**  
   - *Time-based NFT rental protocol with royalty support*  
   - One-liner: “Solidity-based marketplace where users can rent NFTs for a fixed time period with automatic return and creator royalties.”

2. **DAO Grants Governance**  
   - *On-chain governance for community grants*

3. **Solidity AST Generator**  
   - *Static analysis tooling for Solidity; generates ASTs for deeper analysis.*

4. **Multi-PDF RAG Chatbot**  
   - *LLM-powered assistant that answers questions over multiple PDFs using retrieval-augmented generation.*

Add button below cards: `View all projects → /projects`.

---

### 2.7 FEATURED BLOG POSTS

- Show 3 latest or manually selected posts with title, date, tag, and short summary.
- Use existing blog data structure if present.

Example entries (text may already exist):

1. **Understanding Neural Networks** – “An intuitive walkthrough of how neural networks learn from data.”  
2. **Generative Adversarial Networks (GANs)** – “How two networks compete to generate realistic data.”  
3. **Learning to Rank — Building Smarter Personalized Feeds** – “How learning-to-rank models power feeds and search results.”

Button: `Read the blog → /blog`.

---

### 2.8 CERTIFICATIONS PREVIEW

- Small inline section with logos (IBM, Microsoft, Coursera, LearnQuest).
- Text:

> Selected Certifications: IBM – Generative AI Engineering · IBM – RAG & Agentic AI · Microsoft – AI & ML Engineering · Coursera – Blockchain Solution Architecture · LearnQuest – Security for Blockchain & DApps

Include button: `See details → /experience#certifications` (use anchor).

---

### 2.9 CONTACT / CTA (FOOTER SECTION)

Content:

Heading:

> Let’s build something secure and intelligent.

Body:

> I’m looking for opportunities in:
> - Blockchain / Smart Contract Engineering  
> - Blockchain Security  
> - AI / ML Engineering (LLMs, RAG, applied ML)  
> - Full-Stack Software Engineering  
>
> 📧 `polboy7777@gmail.com`  
> 🔗 GitHub: `imranpollob` · LinkedIn: `imranpollob`

Optionally implement a simple contact form (Name, Email, Message) that just opens a `mailto:` or hits a simple backend if one already exists.

---

## 3. EXPERIENCE & CERTIFICATIONS PAGE (`/experience`)

### 3.1 SECTIONS

1. Intro
2. Professional Experience (timeline)
3. Education
4. Certifications
5. Skills Overview

---

### 3.2 INTRO

Text:

> Over the last few years I’ve worked both as a **professional software engineer** and a **graduate teaching assistant**, while pursuing a PhD in blockchain security.  
>  
> Here’s what I’ve built, taught, and learned along the way.

---

### 3.3 PROFESSIONAL EXPERIENCE

Create a vertical timeline (most recent first). Use existing data where possible, updating wording to match below.

**Wayne State University – Graduate Teaching Assistant**  
*Aug 2021 – Present · Detroit, MI*

- Mentor student teams in **Software Engineering** to plan, build, test, and deploy full-stack applications using Agile practices and Git.  
- Teach programming in **Java and C++**, emphasizing problem-solving, clean code, and debugging strategies.  
- Run labs in **Bioinformatics with R** and **Computer Architecture**, helping students connect theory to real tools.

**Cefalo – Software Engineer**  
*Sep 2019 – Jul 2021*

- Built an internal **Python-based scraping framework** to collect and process data from multiple sources, reducing manual data collection effort.  
- Developed and maintained an **e-commerce platform** and internal tools.  
- Collaborated directly with clients to clarify requirements and deliver technical solutions.

**Rapid Web Services – Full-Stack Software Engineer**  
*May 2018 – Sep 2019*

- Developed and maintained scalable web applications using **Laravel, JavaScript, and React**.  
- Designed RESTful APIs and integrated them into an inventory management system.  
- Improved application performance and reliability by profiling and resolving bottlenecks.

**Codalo – Software Engineer**  
*Nov 2016 – Apr 2018*

- Built school management and parcel delivery systems used by multiple institutions across Bangladesh.  
- Gathered client feedback and iterated on product workflows and features.

---

### 3.4 EDUCATION

Section heading: **Education**

Entries:

- **PhD, Computer Science (Blockchain Security)** – Wayne State University – *In progress*  
  - Focus: smart contract security, graph/hypergraph representations, ML-based vulnerability detection.

- (Add Bachelor info using existing site data.)

---

### 3.5 CERTIFICATIONS

Section heading: **Certifications**

Show as cards or grid.

**Blockchain & Security**

- Blockchain Solution Architecture – Coursera (2025)  
  > Designing end-to-end blockchain solutions, consensus choices, and architecture patterns.

- Security for Blockchain and DApps – LearnQuest (2025)  
  > Threat models for smart contracts, common vulnerabilities, and secure design patterns.

**AI & Machine Learning**

- IBM Generative AI Engineering – IBM (2025)  
  > LLM lifecycle, prompt engineering, evaluation, and deployment of generative AI apps.

- IBM RAG and Agentic AI: Build Next-Gen AI Assistants – IBM (2025)  
  > Retrieval-augmented generation, tool-using agents, orchestration and evaluation.

- Microsoft AI & ML Engineering – Microsoft (2025)  
  > Classical ML, deep learning foundations, and Azure ML workflows.

If credential URLs exist, include “View credential” link buttons.

---

### 3.6 SKILLS OVERVIEW

A tag-style list or table.

Categories and example entries:

- **Languages:** Python, JavaScript/TypeScript, PHP, Solidity, Java, C++  
- **Frameworks:** React, Next.js, Vue.js, Node.js/Express, Laravel  
- **Blockchain:** Solidity, Hardhat, Foundry, Ethers.js, Web3.js  
- **AI/ML:** scikit-learn, (PyTorch/TensorFlow if used), LLM APIs, vector search, RAG patterns  
- **DevOps & Tools:** Docker, AWS, Git, CI/CD, Linux, VS Code

---

## 4. PROJECTS & RESEARCH PAGE (`/projects`)

### 4.1 SECTIONS

1. Intro
2. Blockchain & Web3 Projects
3. AI & ML Projects
4. Productivity & Utility Projects (short list)
5. Research Overview

---

### 4.2 INTRO

Text:

> I like to learn by building. These projects represent my work in **blockchain**, **AI/ML**, and **developer productivity**. Many more are available on my GitHub.

---

### 4.3 BLOCKCHAIN & WEB3 PROJECTS

Create project cards with:

- Title
- Short tagline
- Stack
- 2–3 bullet points
- Links (GitHub, demo if exists)

Projects to include:

1. **NFT Rental Marketplace**

   - *Time-based NFT rentals with royalty support*  
   - Stack: Solidity, Hardhat, TypeScript, Ethers.js, Next.js  
   - Bullets:
     - Smart contracts allow NFTs to be rented for fixed periods with automatic return.  
     - Royalty support for creators and safety checks against double-renting.  
     - Frontend for minting, listing, and renting NFTs.

2. **DAO – Community Grants Governance**

   - *On-chain governance for community grants*  
   - Stack: Solidity, Hardhat, TypeScript, React  
   - Bullets:
     - Token-based voting with proposal submission and quorum rules.  
     - Separation of proposal, voting, and treasury logic.  
     - Designed to be transparent and auditable.

3. **Stablecoin Protocol**

   - *Over-collateralized stablecoin experiment*  
   - Stack: Solidity, Foundry  
   - Bullets:
     - Implements mint/burn flows with collateral ratios.  
     - Basic liquidation mechanism for under-collateralized positions.  
     - Focuses on safe arithmetic and security-aware design.

4. **Solidity AST Generator**

   - *Static analysis tooling for Solidity*  
   - Stack: JavaScript, Node.js  
   - Bullets:
     - Parses Solidity contracts and emits ASTs.  
     - Used as a foundation for later graph/hypergraph-based analysis.  

Optional: Add a “More blockchain projects” compact grid listing remaining Web3 repos with only name + tech + GitHub link.

---

### 4.4 AI & ML PROJECTS

Same card structure.

1. **Multi-PDF RAG Chatbot**

   - Stack: Python, vector store, LLM API  
   - Bullets:
     - Lets users upload multiple PDFs and ask questions across all documents.  
     - Implements chunking, embedding, similarity search, and answer generation.  
     - Focus on prompt design and grounding answers in source text.

2. **AI Trading / Deal Finder / Bitcoin Price Prediction Suite**

   - Stack: Python, ML libraries, APIs  
   - Bullets:
     - Experiments with models for price prediction and opportunity detection.  
     - Includes data preprocessing, feature engineering, and backtesting.  
     - Demonstrates work with time-series data and evaluation metrics.

3. **Food Detector AI**

   - Stack: Python, CNN / computer vision  
   - Bullets:
     - Classifies images of food into categories.  
     - End-to-end CV pipeline: dataset handling, training, evaluation, inference.

---

### 4.5 PRODUCTIVITY & UTILITY PROJECTS (SHORT LIST)

- Display as smaller cards or list with brief descriptions and GitHub links.

Examples:

- **Pomodoro Timer App** – Desktop timer that stays on top of other windows to support deep work.  
- **Task Time Tracker** – Tracks time spent on tasks with summaries.  
- **Snippet App** – Capture and search code snippets efficiently.  
- **Bangla Quran** – Web app with Arabic & Bangla translation and audio.

---

### 4.6 RESEARCH OVERVIEW

Add a section near the bottom.

Heading: **Research Projects**

Sub-sections:

**Hypergraph-Based Solidity Vulnerability Detection (PhD)**

> I am designing a **hypergraph representation of Solidity smart contracts** that captures economic logic, cross-contract interactions, and access-control flows. On top of this representation, I plan to experiment with **GNNs and diffusion-style models** for detecting vulnerabilities such as reentrancy, price manipulation, and incorrect access control.

**Secure BSM for Autonomous Vehicles using Blockchain**

> I also explore securing **Basic Safety Messages (BSM)** in autonomous vehicles by combining local attack detection with blockchain-anchored evidence and revocation. The design uses privacy-preserving pseudonyms, BLS-based attestations, and on-chain adjudication logic.

End with:

> For more details, feel free to reach out or explore my research repositories on GitHub.

---

## 5. BLOG PAGE (`/blog`)

### 5.1 SECTIONS

1. Intro
2. Pinned Series
3. Posts List (existing functionality)

---

### 5.2 INTRO

Text:

> I write about topics I’m learning and teaching—mainly **machine learning**, **blockchain & Ethereum**, and **system design**. My goal is to explain complex ideas in a way that a busy engineer (or my past self) can understand quickly.

---

### 5.3 PINNED SERIES

At the top, create 3 expandable cards or links:

1. **Machine Learning Crash Course**  
   > A step-by-step series covering core ML concepts: from linear and logistic regression to neural networks, CNNs, RNNs, GANs, and learning-to-rank.

2. **Blockchain & Ethereum Fundamentals**  
   > Introduces blockchain basics, Ethereum architecture, smart contracts, and essential DeFi concepts.

3. **System Design Interview Series**  
   > Guides to designing scalable, reliable systems for interviews and real-world work.

(If a security series is later added, it can be pinned here as well.)

Each card links to a filtered blog view or a tag anchor, using the existing blog structure.

---

### 5.4 POSTS LIST

- Reuse existing blog listing component.
- Ensure each post shows:
  - Title
  - Date
  - Tag (AI, Blockchain, System Design, etc.)
  - Short excerpt

Provide pagination or “Load more” if already implemented.

---

## 6. FINAL CHECKLIST

Before finishing:

- [ ] Navigation shows only 4 main pages: Home, Experience, Projects, Blog.  
- [ ] Each page contains the sections specified above.  
- [ ] All internal links resolve correctly (no 404s).  
- [ ] Resume download button works.  
- [ ] GitHub and LinkedIn links are correct (`imranpollob`).  
- [ ] Site looks good on desktop and mobile.  
- [ ] Dark/light mode still works (if supported).  
- [ ] Build passes (`npm run build` or equivalent).

If something is ambiguous, prefer **not** to remove existing functionality and keep the implementation minimal but correct.
