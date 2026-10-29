# Portfolio implementation report

Updated: October 29, 2026. Target: tenure-track faculty and industry blockchain security research roles.

## Current status

The local website implementation is ready for feedback. The homepage, publications, research detail pages, teaching page, project organization, CV documents, metadata, and responsive navigation are implemented and verified. GitHub/LinkedIn copy and repository-documentation changes are prepared as local drafts; those external changes and deployment are not completed. The original `IMPLEMENTATION_PLAN.md` remains unchanged; this report is the implementation status record.

No commit, push, deployment, or external account edit was made.

## Changes by plan item

| Plan item | Status | Implemented result |
|---|---|---|
| P0.1 — Identity and hero | Done | Blockchain Security & Privacy Researcher; Wayne State affiliation; expected Summer 2027; job-market line; publication-name note; research/publications, academic CV, and email actions. |
| P0.2 — AuthGuard and ZKScan | Done | Both added with full titles, author lists, accepted venues, manuscript PDFs, bounded evaluation descriptions, and dedicated pages. |
| P0.3 — Existing EIP-7702 entry | Done | Replaced by AuthGuard; old `/research#eip-7702` anchor retained. Ongoing proof-to-application binding stays separate from accepted ZKScan. |
| P0.4 — CVs and conflicting metrics | Done with evidence limits | New two-page academic CV and one-page industry research résumé. Old `/resume.pdf` now serves the updated industry résumé. Conflicting request-volume figure removed. Unsupported talks/service omitted. |
| P0.5 — Homepage research order | Done | AuthGuard → PrivGas → ZKScan → Secure-BSM; ongoing work moved to the research page. |
| P1.1 — Detail pages | Done with authorship limits | Five routes, four manuscript/citation pages. Problem, approach, contribution, authorship, evaluation, limitations, and available reproduction resources. Individual task allocations are not invented. |
| P1.2 — Research agenda | Done | Three proposed directions on Research, with concise homepage previews. |
| P1.3 — Teaching | Done with evidence limits | Dedicated page, GTA appointment, documented course responsibilities, mentoring, teaching approach, and exact award details. Unconfirmed semesters and instructor-of-record designations omitted. |
| P1.4 — Software organization | Done | Public research artifacts first; supporting Solidity analysis and security/protocol projects next; developer applications, installable tools, and compact additional projects follow. |
| P1.5 — Certifications | Done | Removed from homepage; retained at `/credentials`, linked from the footer. Existing certificate viewer preserved. |
| P2.1 — GitHub and artifact documentation | Drafts ready; external work pending | Bio, README, pin recommendations, AuthGuard root guide, PrivGas clone correction, and release requirements in `docs/`. No changes submitted to GitHub. |
| P2.2 — LinkedIn | Draft ready; external work pending | Headline, About text, Featured order, award entry, and consistency edits in `docs/profile-updates.md`. |
| P2.3 — SEO/accessibility/mobile | Basic checks passed | New social preview; page descriptions; candidate/author structured data; mobile menu; visible focus; reduced-motion scroll; desktop/mobile, keyboard, and selected contrast checks. Not a full accessibility certification. |
| P2.4 — Shared constants | Done | Updated identity, descriptions, navigation, document URLs, themes, and expected graduation. |

## Confirmed facts and attribution

- Expected Ph.D. completion: **Summer 2027**, supplied by the user.
- AuthGuard-7702: **accepted at IEEE TPS 2026**, supplied by the user; no presentation/publication inferred from acceptance.
- ZKScan: **accepted at IEEE AIBThings 2026**, supplied by the user; no presentation inferred.
- Award: **Outstanding Graduate Teaching Assistant Award**, Department of Computer Science, Wayne State University, **2026**. Notification date **April 16, 2026**. The description reflects the supplied letter's recognition of student learning, engagement, innovative teaching support, and CSC 3100 support.
- PrivGas acceptance/presentation information and Secure-BSM publication/DOI are retained from the existing site records. Presentation is now a separate explicit flag; acceptance alone no longer renders as “accepted and presented.”
- Full titles, author lists, research contributions, and evaluation boundaries were checked against the supplied manuscripts. These manuscripts describe team contributions, not individual CRediT-style allocations. The site therefore states first author for AuthGuard, PrivGas, and Secure-BSM, and coauthor for ZKScan.
- AuthGuard's adaptive attack comparison is scoped to its evaluated adversary; PrivGas gas measurements are labeled local Foundry simulation; ZKScan metrics are tied to the audit-derived dataset; Secure-BSM results are labeled simulation/experimental-ledger measurements.
- Research experiments were **not rerun**. Website checks do not establish artifact reproducibility or research-result validity.
- Work authorization in the industry résumé comes from the supplied master CV. Previous employment, education, and course descriptions come from the existing site/master CV.

## Implementation choices and adjustments

- Selected research follows the hero immediately. The redundant introductory block and generic homepage project grid were removed; engineering experience remains compact with a Projects link.
- Academic CV is primary; the industry résumé was updated rather than retaining an outdated engineering-only document.
- Research cards and artifact listings use the same research/publication records. Publication status is derived centrally. Artifacts are not duplicated in the general software-project database.
- Solidity AST Generator is a supporting security tool, not falsely associated with a research paper.
- New public manuscript files are byte-for-byte copies of the supplied PDFs. No manuscript text was changed.
- The original visual language, typefaces, logo, favicon assets, Astro framework, domain, and hosting configuration remain in place. The social preview is a new code-native graphic reflecting current positioning.
- The former research/publication fragments and existing project-section anchors are retained. New AuthGuard/ZKScan publication-row IDs avoid collisions with project-card IDs.
- The academic CV includes all nine publications now recorded on the site: four selected works and five earlier works. No unverified talks/service or mentoring outcomes are added.
- The teaching approach and future-direction paragraphs are editorial drafts based on the supplied record, ready for the user's feedback.

## Files and review entry points

| Area | Main files |
|---|---|
| Identity and navigation | `src/consts.ts`, `src/components/Header.astro`, `src/components/Footer.astro` |
| Homepage | `src/pages/index.astro` |
| Research and publications | `src/data/research.ts`, `src/pages/research/index.astro`, `src/pages/research/[slug].astro`, `ResearchCard.astro`, `PublicationItem.astro`, `ResearchProject.astro` |
| Teaching and award | `src/data/experience.ts`, `src/pages/teaching/index.astro` |
| Projects | `src/data/projects.ts`, `src/pages/projects/index.astro` |
| Credentials | `src/pages/credentials/index.astro` |
| Shared presentation | `BaseHead.astro`, `ContactCTA.astro`, `SectionHeader.astro`, `src/styles/global.css` |
| CV downloads | [Academic CV](public/academic-cv.pdf), [Industry research résumé](public/industry-research-resume.pdf), compatibility alias `public/resume.pdf` |
| Manuscripts | `public/papers/authguard-7702.pdf`, `privgas.pdf`, `zkscan.pdf`, `secure-bsm.pdf` |
| Social preview | `public/research-social.svg`, `public/research-social.png`, `scripts/generate-social.mjs` |
| Document maintenance | `scripts/generate-cvs.py`, `scripts/export-profile.mjs`, `scripts/requirements-cv.txt`, [instructions](scripts/README.md) |
| Validation | `scripts/check-site.py`, local logs/screenshots in `output/qa/` |
| External copy | [Profile drafts](docs/profile-updates.md), [Repository documentation drafts](docs/repository-documentation-updates.md) |

## Verification performed

- `npm run build`: **passed**, with **0 errors, 0 warnings, 0 hints** from Astro's checker. Build also emits an existing advisory that Browserslist's compatibility data is old; no dependency upgrade was bundled into this work.
- `python3 scripts/check-site.py`: **13 generated HTML documents**, **226 internal links checked**, **0 failures**. This includes the generated search/404 documents. Checks cover internal targets/fragments, duplicate IDs, legacy research anchors, metadata, JSON-LD parsing, accepted-versus-presented status, and required PDF assets.
- Production HTTP checks: both CVs, legacy résumé alias, four manuscripts, and social-preview image all returned **200**, with served bytes matching the source files.
- All four copied manuscript PDFs matched the supplied files byte-for-byte. Legacy `/resume.pdf` matches the current industry résumé.
- CVs rendered to images and visually inspected: academic **2 pages**, industry **1 page**; no orphan final page or clipped text. PDFs have selectable text and links. They are not tagged PDFs and were not certified for PDF accessibility.
- Browser checks in Edge: homepage light/dark modes, research-card navigation, research and teaching mobile layout, all supporting routes at a 390px viewport, and homepage at 320px. No horizontal document overflow in the inspected layouts, including expanded BibTeX.
- Keyboard interactions: mobile menu opens with Enter; Tab enters its links; Escape closes it and restores focus. Skip-to-content focuses `main`. BibTeX opens with Enter. Relocated certificate dialog opens, Escape closes it, and focus returns to its trigger.
- Nine representative light/dark text-color pairs meet the 4.5:1 normal-text contrast threshold. The dark primary-button background was corrected; sampled ratios are saved in `output/qa/contrast-samples.json`.
- No errors/warnings were reported by the production-preview browser console during inspected navigation.
- `git diff --check`: passed.

Build/check logs, screenshots, HTTP results, and responsive measurements are in the ignored local `output/qa/` folder. Publishable PDFs/images are in `public/`; scripts document regeneration. Owned preview servers are stopped after review checks.

## Pending items and evidence limits

1. **External publication:** GitHub bio/README/pins, LinkedIn edits, and external repository README changes are drafted but not applied. Website changes have not been deployed. Deploy new website routes before using their links externally.
2. **AuthGuard paper release:** the repository has several revisions, including a reviewer-readiness workspace. A specific accepted-paper commit, pinned environment, table-to-command map, and release tag still need to be established in that repository. The website does not claim the latest revision reproduces the accepted paper.
3. **PrivGas paper release:** the clone-command correction is drafted. A stable manuscript-associated release still needs a confirmed tag/commit; none was invented.
4. **ZKScan artifact:** the manuscript's `atahabilder1/ZKScan` URL returned 404 on October 29, 2026. No broken Code button is shown. The authors must provide a public destination before it can be linked/pinned.
5. **Individual contribution allocation:** the papers support team contributions and author order only. More specific statements about who designed, implemented, or evaluated each component require the author's confirmation.
6. **Teaching detail:** other course semesters, formal instructor-of-record roles, public teaching materials, talks, and service were not supplied. Existing documented responsibilities remain; empty or speculative sections were not created.
7. **Employment metric:** the 10,000+/50,000+ daily-request discrepancy remains unresolved. The number was omitted from the new website/CVs and is flagged for removal in the profile drafts.

## Preserved workspace state

The pre-existing deletion of `leetcode-longest-substring-without-repeating-characters.md` was left untouched. The user's original untracked implementation plan was preserved. No staging, reset, stash, commit, or cleanup of unrelated files occurred.

## How to review locally

From this repository:

```sh
npm run dev -- --host 127.0.0.1
```

Open `http://127.0.0.1:4321/`. Review the homepage, Research, one detail page, Teaching, Projects, and both CVs. The next pass can apply your content/layout feedback against this report.
