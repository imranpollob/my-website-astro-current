# Portfolio Website Implementation Plan

**Goal:** Position Imran Pollob as a blockchain security researcher targeting tenure-track faculty and industry research positions.
**Expected PhD completion:** Summer 2027
**Current state:** The Astro site is professionally built with clean design, structured data files, and good SEO foundations. The main gap is that it reads as a software engineer's portfolio with research added, rather than a researcher's site backed by engineering experience.

---

## My Assessment of Astra's Review

Astra's analysis is thorough and mostly on target. Key agreements and adjustments:

**Strong recommendations I fully endorse:**
- Homepage hero needs to lead with "Blockchain Security Researcher" identity, not generic "Security & Decentralized Systems"
- AuthGuard and ZKScan are missing from the website entirely — critical gap
- The downloadable CV is an engineering resume, not an academic CV — major mismatch for faculty visitors
- Research projects need dedicated detail pages
- "Publications under M M Imran" note belongs prominently near the hero
- GitHub profile/pins need to reflect the researcher identity
- Navigation should add Teaching as a top-level page

**Where I adjust Astra's recommendations:**
- Astra suggests two separate CV documents (academic + industry). Better approach: one academic CV (PDF) as primary, and keep the current resume as a secondary "Industry Resume" link. Don't over-engineer this.
- Astra's proposed "Research Agenda" page with three future directions is good for faculty, but keep it as a section on the research page rather than a standalone page — avoids looking thin.
- Astra proposes six navigation items (Research · Publications · Software · Teaching · CV · Contact). The current site separates Research and Projects well. I'd do: **Research · Projects · Teaching · CV** — Publications stays within Research, Contact stays as a footer CTA. Keeps nav clean.
- Certifications section: Astra says to demote these. Agree — move from homepage to a supporting page or the CV. They take up significant homepage real estate that should go to research.

---

## Implementation Tasks

### P0 — Critical (Before Sending Applications)

These changes directly affect whether a hiring committee takes you seriously.

#### P0.1: Update Hero Identity & Messaging
**Files:** `src/consts.ts`, `src/pages/index.astro`

- [ ] Change `PROFILE.HEADLINE` from "Ph.D. Researcher in Security & Decentralized Systems" → "Blockchain Security & Privacy Researcher"
- [ ] Change `PROFILE.THEMES` to: `["Blockchain Security", "Smart Contract Security", "Privacy-Preserving Protocols", "Zero-Knowledge Systems"]`
- [ ] Update `SITE.HOME_TITLE` to "Imran Pollob — Blockchain Security Researcher"
- [ ] Update `SITE.DESCRIPTION` to lead with blockchain security researcher identity
- [ ] Rewrite hero paragraph in `index.astro` (lines 85-88) to be more specific:
  > "I study security and privacy in Ethereum accounts, smart contracts, and zero-knowledge applications. My work combines program analysis, adversarial evaluation, and protocol design to investigate how these systems behave under attack. Before my Ph.D., I spent five years building production software in industry."
- [ ] Add a job-market availability line below the hero paragraph:
  > "Seeking tenure-track faculty and industry research positions in blockchain security. Expected completion: Summer 2027."
- [ ] Add "Publications appear under **M M Imran**" note near the hero social links or the research button
- [ ] Reorder hero buttons: "Research & Publications" (primary) → "Download CV" → "View Projects" (secondary)

#### P0.2: Add AuthGuard and ZKScan to Research
**Files:** `src/data/research.ts`

- [ ] Add AuthGuard-7702 entry to `researchProjects` array:
  - slug: `authguard-7702`
  - title: "AuthGuard-7702"
  - subtitle: "Screening account-delegation bytecode before authorization"
  - Venue: IEEE TPS 2026 (accepted)
  - Lead with the adversarial robustness story (attack success 0.167 vs 0.537 baseline), not just AUPRC
  - Tags: EIP-7702, Authorization, Machine Learning, Adversarial Evaluation
- [ ] Add ZKScan entry to `researchProjects` array:
  - slug: `zkscan`
  - title: "ZKScan"
  - subtitle: "Static analysis for vulnerabilities in on-chain ZK verifier contracts"
  - Venue: IEEE AIBThings 2026 (accepted)
  - Clearly attribute the 94% recall / 77% precision to the audit-derived dataset
  - Note: clarify individual contribution since this is coauthored work
  - Tags: Zero-Knowledge Proofs, Static Analysis, Smart Contracts, Vulnerability Detection
- [ ] Add both to `publications` array with correct venues, years, author lists, status
- [ ] Reorder `researchProjects` to: AuthGuard → PrivGas → ZKScan → Secure-BSM (→ ZK ongoing work last)
  - This ordering leads with Ethereum security and shows breadth

#### P0.3: Update the "EIP-7702" Research Entry
**Files:** `src/data/research.ts`

The current "EIP-7702 Authorization Security" entry (slug: `eip-7702`) is a generic "research study" with no publication. This is actually the AuthGuard work. Options:
- [ ] **Replace** the `eip-7702` entry with the new `authguard-7702` entry (they're the same project)
- [ ] Update the ZK Security ongoing entry to distinguish it from ZKScan — make clear ZKScan is a completed, published work while proof-to-state binding is separate ongoing research

#### P0.4: Fix the CV Download
**Files:** `public/resume.pdf`, `src/consts.ts`

- [ ] Create a proper academic CV PDF with: education, research interests, publications (complete list), research experience, teaching, mentoring, awards (including Outstanding GTA Award), talks, service
- [ ] Replace `public/resume.pdf` with the academic CV, or add it alongside as `public/academic-cv.pdf`
- [ ] Update `PROFILE.CV_URL` to point to the academic CV
- [ ] Optionally add a secondary "Industry Resume" link for industry visitors
- [ ] Reconcile data discrepancies: LinkedIn says "10,000+ daily requests" at Rapid Web Services, website/CV says "50,000+" — pick one and be consistent everywhere

#### P0.5: Update Homepage Research Section Order
**Files:** `src/data/research.ts` (the `researchProjects` array order drives homepage cards)

- [ ] Ensure homepage cards show the four strongest works in order: AuthGuard → PrivGas → ZKScan → Secure-BSM
- [ ] Each card should show: problem (plain language), principal contribution, publication status, and Paper/Code links
- [ ] Remove or reposition the "ongoing" ZK entry from homepage cards — it has no results yet and dilutes the published work

---

### P1 — Build Supporting Evidence

These changes strengthen the site for deeper evaluation by committee members.

#### P1.1: Create Individual Research Project Pages
**Files:** New pages under `src/pages/research/[slug].astro` or similar

- [ ] Create a dynamic route or individual pages for each research project
- [ ] Each page follows a consistent structure:
  - **Problem:** what can go wrong, with a small illustrative example
  - **Research Contribution:** what this work adds
  - **My Role:** specific intellectual and implementation contributions (especially important for ZKScan and other coauthored work)
  - **Evidence:** evaluation setting, baselines, principal result, and limitations
    - AuthGuard: lead with adversarial robustness, label evaluation conditions precisely
    - PrivGas: label gas measurement as "local Foundry simulation measurement"
    - ZKScan: attribute metrics to "audit-derived dataset"
    - Secure-BSM: note evaluation is simulation-based, not deployed vehicles
  - **Resources:** paper PDF, repository, reproduction instructions, citation BibTeX
- [ ] Link from homepage research cards to these detail pages

#### P1.2: Add a Research Agenda Section
**Files:** `src/pages/research/index.astro`, `src/data/research.ts`

- [ ] Add a "Research Directions" or "Future Work" section to the research page (not a standalone page)
- [ ] Frame as three connected questions:
  1. How can wallets evaluate delegated code when attackers adapt to the screening method?
  2. How can transaction infrastructure preserve privacy while controlling abuse and sponsorship costs?
  3. How can applications ensure a valid ZK proof authorizes the intended action and state transition?
- [ ] For each: motivating problem, how existing work prepares you, plausible next investigation
- [ ] Clearly mark these as proposed directions, not completed work

#### P1.3: Create a Teaching Page
**Files:** New `src/pages/teaching/index.astro` (or `src/pages/teaching.astro`), update `src/consts.ts`

- [ ] Add "Teaching" to the `LINKS` navigation array in `consts.ts`
- [ ] Create a dedicated teaching page with:
  - Courses taught: code, name, semester, exact role (lead instructor vs. TA vs. lab facilitator), materials developed
  - Distinguish clearly between "teaching" (BE 1600 Python) and "assisting" (lab sections, grading)
  - Outstanding Graduate Teaching Assistant Award: exact title, issuer (Wayne State), year, any supporting link
  - Mentoring: student teams mentored through Agile projects (from Software Engineering course)
  - Short teaching philosophy paragraph
  - Selected teaching materials (if available)
- [ ] Update the homepage Teaching section to link to the full page
- [ ] Move detailed teaching info out of the homepage into the dedicated page; keep homepage summary brief

#### P1.4: Reorganize Software Projects for Research Relevance
**Files:** `src/data/projects.ts`, `src/pages/projects/index.astro`

- [ ] Add a new project section: `"research"` — for research artifacts
  - Include: AuthGuard-7702 repo, PrivGas/stealth-protocol repo, Solidity AST Generator, and any other research-related tools
  - Each links directly to the associated paper
- [ ] Reorganize remaining sections:
  - **Research Artifacts** (most prominent, top of page)
  - **Security & Protocol Engineering** (NFT Rentals, Stablecoin, Swap, DAO — emphasize design decisions and security testing)
  - **Developer Tools & Applications** (the web tools, CLI tools, desktop apps)
  - **More Projects** (utilities, quizzes, generators — compact list)
- [ ] Update `featuredProjectSlugs` for the homepage to lead with research artifacts and security-relevant projects
- [ ] Remove or demote general utilities (color shade generator, lorem ipsum, etc.) from prominent positions

#### P1.5: Demote Certifications from Homepage
**Files:** `src/pages/index.astro`, possibly new page or move to CV

- [ ] Remove the `<Certifications />` component from the homepage
- [ ] Options: move to a `/certifications` page, add as a section on a CV/credentials page, or reference in the CV PDF only
- [ ] The homepage real estate is better used for research and teaching highlights

---

### P2 — Polish & Cross-Platform Consistency

These changes ensure a consistent identity across all entry points.

#### P2.1: Align GitHub Profile with Research Identity
**External (not in this codebase)**

- [ ] Update GitHub bio to lead with "Blockchain Security Researcher" / "Ph.D. Candidate at Wayne State"
- [ ] Update GitHub profile README to reflect research identity, not broad engineering
- [ ] Pin research-relevant repos: AuthGuard-7702, stealth-protocol (PrivGas), ZKScan (when public), Solidity AST Generator
- [ ] Unpin general projects (DevTut, torrent downloader, Notebase, learning material)
- [ ] AuthGuard repo: add root README with paper link, environment requirements, and exact reproduction path
- [ ] PrivGas repo: replace placeholder clone command, link a stable paper-associated release
- [ ] ZKScan: confirm public artifact destination with coauthors before adding Code button (currently 404)

#### P2.2: Align LinkedIn Profile
**External (not in this codebase)**

- [ ] Keep the focused researcher headline
- [ ] Reorder Featured items: papers → research artifacts → talk/research overview → software projects
- [ ] Reconcile data discrepancies with website (request numbers, dates, roles)
- [ ] Bring Outstanding GTA Award details onto LinkedIn if not already there

#### P2.3: SEO, Accessibility, and Technical Polish
**Files:** Various

- [ ] Verify Open Graph image and meta tags reflect the researcher identity
- [ ] Test mobile layout with new content (research detail pages, teaching page)
- [ ] Verify keyboard navigation and focus management on all new pages
- [ ] Check color contrast on all new components
- [ ] Verify all paper PDFs are accessible and linked correctly
- [ ] Add proper `<meta>` descriptions for new pages
- [ ] Test that structured data (JSON-LD person schema) reflects updated information

#### P2.4: Update `consts.ts` Constants for Consistency
**Files:** `src/consts.ts`

- [ ] Update `RESEARCH.DESCRIPTION` to mention AuthGuard and ZKScan alongside Secure-BSM and PrivGas
- [ ] Update `PROJECTS.DESCRIPTION` to mention research artifacts
- [ ] Verify all SEO titles are accurate

---

## Navigation Structure

**Current:** Imran Pollob | Research · Projects · CV

**Proposed:** Imran Pollob | Research · Projects · Teaching · CV

Research page internally contains: Research Vision → Research Areas → Research Projects → Research Directions → Publications

Projects page internally reorganizes to: Research Artifacts → Security & Protocol Engineering → Developer Tools → More Projects

---

## Homepage Section Order

**Current:**
1. Hero
2. "Security research, grounded in engineering" intro
3. Selected Research (4 cards)
4. Featured Projects (6 cards)
5. Industry Experience
6. Teaching & Education
7. Certifications
8. Contact CTA

**Proposed:**
1. Hero (updated identity, availability statement, publication name note)
2. "Security research, grounded in engineering" intro (keep, minor copy tweaks)
3. Selected Research (4 cards: AuthGuard, PrivGas, ZKScan, Secure-BSM — with paper/code links)
4. Research Agenda (brief: 3 future directions, 2-3 sentences each)
5. Teaching & Education (with link to full teaching page, mention GTA award)
6. Featured Projects (reduce to 4-5, lead with research artifacts and security protocols)
7. Industry Experience (keep but compress — details live in the CV)
8. Contact CTA

---

## Files Changed Summary

| File | Change Type | Priority |
|---|---|---|
| `src/consts.ts` | Edit: headline, themes, descriptions, nav links | P0 |
| `src/data/research.ts` | Edit: add AuthGuard + ZKScan, reorder, add publications | P0 |
| `src/pages/index.astro` | Edit: hero copy, section order, remove certifications | P0 + P1 |
| `public/resume.pdf` or `public/academic-cv.pdf` | Replace/Add: academic CV | P0 |
| `src/pages/research/index.astro` | Edit: add research directions section | P1 |
| `src/pages/research/[slug].astro` | New: individual research project pages | P1 |
| `src/pages/teaching/index.astro` or `src/pages/teaching.astro` | New: dedicated teaching page | P1 |
| `src/data/projects.ts` | Edit: add research section, reorganize, update featured | P1 |
| `src/pages/projects/index.astro` | Edit: add research artifacts section | P1 |
| `src/data/experience.ts` | Edit: minor — add GTA award data, expected graduation | P1 |
| `src/types.ts` | Possibly edit: add new icon names if needed | P1 |
| `src/components/ResearchCard.astro` | Edit: ensure paper/code links display on cards | P0 |

---

## What NOT to Change

- **Visual design:** The restrained design, typography, and color scheme are already professional. No redesign needed.
- **Astro framework:** The architecture is clean and well-organized. Keep the data-driven approach with TypeScript data files.
- **Domain/hosting:** No changes needed.
- **Blog/writing section:** Don't add one unless you have content ready. An empty blog looks worse than no blog.

---

## Completion Criteria

| Priority | Done When |
|---|---|
| **P0** | A visitor can identify your specialization, see all four published/accepted papers, download an academic CV, and understand your availability — within 60 seconds. |
| **P1** | Each research claim has a dedicated page with contribution statement, evaluation context, and resource links. Teaching has its own page. Projects are organized by research relevance. |
| **P2** | GitHub, LinkedIn, and website present the same identity and consistent facts. All pages pass basic accessibility and mobile checks. |
