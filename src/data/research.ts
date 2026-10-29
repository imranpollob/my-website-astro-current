import type { ResourceLink } from "@types";
import { PROFILE } from "@consts";

export const RESEARCH_VISION = [
    "I work on security and privacy in Ethereum: smart accounts, smart contracts, and zero-knowledge applications. I build analysis tools and protocols, then test how well they hold up against attackers.",
    "So far that has meant screening delegated account code before a user signs (AuthGuard-7702), paying gas for stealth addresses without linking them to their owners (PrivGas), finding bugs in on-chain proof verifiers (ZKScan), and detecting misbehaving vehicles in V2X networks (Secure-BSM).",
];

export const researchDirections = [
    { title: "Robust account authorization", question: "How can wallets evaluate delegated code when attackers adapt to the screening method?", description: "Building on AuthGuard-7702, I aim to investigate richer behavior-preserving attacks and how bytecode screening can complement transaction simulation at the authorization boundary." },
    { title: "Privacy with abuse resistance", question: "How can transaction infrastructure preserve privacy while controlling sponsorship costs and abuse?", description: "Building on PrivGas, I aim to study how anonymity-set growth, timing leakage, and admission policies interact under realistic transaction workloads." },
    { title: "Proofs bound to intended actions", question: "How can an application ensure a valid proof authorizes the intended action and state transition?", description: "My ongoing work examines the binding between proof statements, application state, and execution context. This is a separate direction from ZKScan's analysis of verifier contracts." },
];

export type ResearchStatus = { label: string; kind: "published" | "accepted" | "study" | "ongoing" };
export type ResearchProject = {
    slug: string; title: string; subtitle: string; summary: string;
    problem: string; approach: string; contribution?: string;
    evidence?: string; limitations?: string; authorship?: string;
    reproduction?: string; legacyAnchor?: string;
    status?: ResearchStatus; tags: string[]; publication?: string; links?: ResourceLink[];
};

export const researchProjects: ResearchProject[] = [
    {
        slug: "authguard-7702", legacyAnchor: "eip-7702", title: "AuthGuard-7702",
        subtitle: "Screening delegate bytecode before account authorization",
        summary: "A bytecode-only screening framework for EIP-7702 account delegation, evaluated against an adaptive adversary that searches for ways to evade detection.",
        problem: "An Ethereum account can delegate execution to smart-contract code. Before a user signs that authorization, the proposed code may have little reputation or transaction history. An attacker can also modify the bytecode in response to a screening service.",
        approach: "AuthGuard-Seq splits the opcode sequence into chunks, encodes each chunk, and learns which chunks matter most for the decision. Contracts from the same family never appear in both training and test data. The attacker combines bytecode transformations, and transformed programs are executed in a real EVM to check that they still behave like the original.",
        contribution: "On ordinary test data, AuthGuard-Seq and a simple logistic-regression screener are not statistically different. Against an adaptive attacker whose changes are checked to preserve behavior, AuthGuard-Seq holds up much better. The paper argues that screeners should be compared this way, not only on clean data.",
        evidence: "On 2,190 EIP-7702 delegates, the paper reports paired attack success of 0.167 for AuthGuard-Seq versus 0.537 for a 15-feature logistic-regression screener under the primary adversary. Robust recall is 0.679 versus 0.378. The primary attack space is supported by 5,196 transformed executions from 120 bytecode families.",
        limitations: "The results hold for the attack target, transformation set, query budget, and execution checks defined in the paper. They do not show that AuthGuard-Seq detects malicious contracts in general, or that transformed programs are fully equivalent to the originals. On clean data, AuthGuard-Seq is not statistically better than logistic regression. The later scan of real delegation traffic was unlabeled, so it does not measure detection accuracy in the field.",
        authorship: "First author, with Anik Tahabilder, Changxin Bai, Qiang Zhu, and Shiyong Lu.",
        reproduction: "The repository holds several rounds of evaluation code. Use the paper and the revision notes in the repository to pick the right experiment; there is not yet a single tagged release that matches the accepted paper.",
        tags: ["EIP-7702", "Bytecode Analysis", "Adversarial Evaluation"], publication: "authguard-7702",
        links: [{ label: "Code", href: "https://github.com/imranpollob/AuthGuard-7702", icon: "github" }],
    },
    {
        slug: "privgas", title: "PrivGas", subtitle: "Privacy-preserving gas sponsorship for stealth addresses",
        summary: "A three-stage sponsorship protocol that avoids recipient-side gas top-ups from known wallets and uses shielded credits to limit what the paymaster learns during redemption.",
        problem: "A fresh stealth address can receive assets but lacks the ETH needed to spend them. Funding gas from a known wallet can reconnect the stealth address to its recipient. Sponsorship also needs an admission policy that limits credit farming.",
        approach: "PrivGas separates Fund, Bootstrap, and Spend. A non-refundable fee gates admission, a shielded credit pool stores commitments, and a Groth16 membership proof with a domain-separated nullifier authorizes redemption under ERC-4337.",
        contribution: "PrivGas pays a stealth address's gas without revealing which deposited credit is being spent, and it sets the admission fee high enough that farming sponsored credits does not pay off.",
        evidence: "The paper reports a peak Spend validation cost of 284,527 gas in local Foundry simulation, with 225,733 gas for isolated Groth16 verification. Its artifact documents 65 passing tests, including Bootstrap and Spend integration through EntryPoint.handleOps with genuine proof fixtures.",
        limitations: "These are local simulation measurements, not testnet or mainnet results. UserOperation.sender remains public. Timing correlation, a small or cold-start anonymity set, and acceptance of only the latest Merkle root limit privacy and usability. Full bundler-level opcode tracing remains future work; the prototype is not an audited production deployment.",
        authorship: "First author, with Anik Tahabilder, Changxin Bai, Qiang Zhu, and Shiyong Lu.",
        reproduction: "The repository README maps paper claims to tests. Run forge test for the suite and forge test --gas-report for gas measurements after installing Foundry. Consult GAS_REPORT.md and PAPER_SUPPLEMENT.md for measurement scope and artifact limitations.",
        tags: ["ERC-5564", "ERC-4337", "Privacy", "Groth16"], publication: "privgas-stealth-address-gas-sponsorship",
        links: [{ label: "Code", href: "https://github.com/imranpollob/stealth-protocol", icon: "github" }],
    },
    {
        slug: "zkscan", title: "ZKScan", subtitle: "Static analysis for on-chain zero-knowledge verifiers",
        summary: "A Solidity/Yul analyzer for verifier-specific vulnerabilities, including pairing operations, Fiat-Shamir transcripts, and unchecked precompile return values.",
        problem: "An application relies on its verifier contract to reject invalid proofs. Verifier-specific mistakes can sit outside the focus of both circuit analyzers and general smart-contract vulnerability tools.",
        approach: "ZKScan organizes ten detection rules into five vulnerability classes for Groth16, PLONK, and FFLONK verifiers. Intraprocedural Yul dataflow tracks precompile return values to reduce alerts caused by checks that occur later in the code.",
        contribution: "A set of vulnerability classes specific to verifier contracts, a static analyzer that checks for them, and an evaluation on synthetic, audit-derived, and mainnet contracts.",
        evidence: "The paper evaluates 74 contracts across three datasets. On the 20-contract audit-derived dataset, it reports 94% recall (17/18) and 77% precision (17/22). Ground-truth findings are concentrated in a small set of contracts, and the paper reports uncertainty intervals. Raw alerts on mainnet contracts are signals for review, not verified exploits.",
        limitations: "The evaluation uses historical contract versions and does not claim active zero-day vulnerabilities. Rule-based analysis has limited coverage beyond its supported patterns and cannot establish complete verifier correctness or resolve trusted-setup governance issues from code alone.",
        authorship: "Coauthor with Anik Tahabilder (first author), Changxin Bai, Qiang Zhu, and Shiyong Lu.",
        tags: ["ZK Verifiers", "Static Analysis", "Solidity", "Yul"], publication: "zkscan",
    },
    {
        slug: "secure-bsm", title: "Secure-BSM", subtitle: "Collaborative misbehavior detection in vehicular networks",
        summary: "A blockchain-assisted architecture combining local detection, collaborative validation, and rate limiting to address malicious vehicle safety messages.",
        problem: "Vehicles exchange Basic Safety Messages to support coordinated driving. False data, replay, spoofing, and flooding can disrupt those decisions, while noisy observations can cause honest vehicles to be accused incorrectly.",
        approach: "Local detectors feed collaborative validation through a Pocket Ledger; a Root Ledger supports longer-term revocation. Verifiable Rate-limit Tokens constrain message rates, while immediate local safety decisions remain outside the blockchain consensus path.",
        contribution: "Safety decisions stay fast and local on each vehicle. The blockchain handles the slower work of confirming reports, tracking trust, and revoking vehicles, and rate limits stop a single vehicle from flooding the network.",
        evidence: "The paper reports SUMO traffic simulation and Hyperledger Besu evaluation across six attack types. Collaborative validation reduces false positives by 77–85% across tested scenarios; the rate-limit mechanism contains simulated DoS flooding in under 0.2 seconds.",
        limitations: "Results are simulation and experimental-ledger measurements, not deployed-vehicle evidence. Performance depends on local participation and validator assumptions. Long-term reputation farming and sparse traffic remain limitations; ledger consensus latency is distinct from immediate safety-response latency.",
        authorship: "First author, with Yi Zhu and Shiyong Lu.",
        tags: ["V2X", "Collaborative Detection", "Blockchain"], publication: "secure-bsm-blockchain-misbehavior-detection",
    },
    {
        slug: "zk-security", title: "Zero-Knowledge Application Security", subtitle: "Binding proofs to the state and context they authorize",
        summary: "Ongoing research into failures at the boundary between valid proof statements and the application actions they authorize.",
        problem: "A proof can be cryptographically valid while an application uses it to authorize the wrong action, context, or state transition.",
        approach: "I am studying how applications tie a proof to the state and action it is supposed to authorize. This is separate from ZKScan, which checks the verifier code itself. There are no published results yet.",
        status: { label: "Ongoing research", kind: "ongoing" }, tags: ["Zero-Knowledge Proofs", "Authorization"],
    },
];

export const featuredResearchSlugs = ["authguard-7702", "privgas", "zkscan", "secure-bsm"];
export const featuredResearch = featuredResearchSlugs.map(slug => researchProjects.find(p => p.slug === slug)!);

export type Publication = {
    slug: string; title: string; authors?: string[]; venue: string; shortVenue?: string;
    pages?: string; year: number; status: "published" | "accepted";
    // A presentation is independent of acceptance/publication; never inferred from status.
    presented?: boolean;
    group: "selected" | "earlier"; doi?: string; links?: ResourceLink[]; bibtex?: string;
    // Key figure shown beside the listing; file is a name in src/assets/figures.
    figure?: { file: string; caption: string; alt: string };
};
const ME = PROFILE.PUBLICATION_NAME;
const collaborators = [ME, "Anik Tahabilder", "Changxin Bai", "Qiang Zhu", "Shiyong Lu"];
const scholarLink = (citationId: string): ResourceLink => ({ label: "Google Scholar", icon: "scholar", href: `https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-K7OkFUAAAAJ&citation_for_view=-K7OkFUAAAAJ:${citationId}` });
export const doiUrl = (doi: string) => `https://doi.org/${doi}`;
export const publications: Publication[] = [
    { slug: "authguard-7702", title: "Pre-Authorization Screening of EIP-7702 Account Delegation in Ethereum Blockchain under an Execution-Audited Adaptive Adversary", authors: collaborators,
      venue: "8th IEEE International Conference on Trust, Privacy and Security in Intelligent Systems, and Applications (TPS)", shortVenue: "IEEE TPS", year: 2026, status: "accepted", group: "selected",
      figure: { file: "authguard-7702.png", caption: "Fig. 2. AuthGuard-Seq architecture and validation-fitted post-processing.", alt: "Architecture diagram: runtime bytecode is disassembled and split into 256-token opcode chunks; a shared chunk encoder and learned chunk attention build a contract representation; a risk prediction head outputs a logit that is temperature-scaled and mapped to High, Warning, Caution, or No Warning tiers using validation-derived thresholds." },
      links: [{ label: "Paper (PDF)", href: "/papers/authguard-7702.pdf", icon: "file" }] },
    { slug: "privgas-stealth-address-gas-sponsorship", title: "PrivGas: A Privacy-Preserving Gas Sponsorship Protocol for Blockchain Stealth Addresses", authors: collaborators,
      venue: "IEEE 4th International Conference on Artificial Intelligence, Blockchain and Internet of Things (AIBThings)", shortVenue: "IEEE AIBThings", year: 2026, status: "accepted", presented: true, group: "selected",
      figure: { file: "privgas.png", caption: "Fig. 1. PrivGas architecture and three-stage protocol flow.", alt: "Three-stage protocol diagram: in Fund, a sender pays a non-refundable fee through an announcement registry; in Bootstrap, a paymaster deposits a credit into a shielded credit pool; in Spend, the stealth account redeems the credit with a zero-knowledge proof through the ERC-4337 EntryPoint and its nullifier is marked spent." },
      links: [{ label: "Paper (PDF)", href: "/papers/privgas.pdf", icon: "file" }] },
    { slug: "zkscan", title: "ZKScan: A Static Analyzer for Smart Contract Based Zero-Knowledge Proof Verifiers on Blockchains", authors: ["Anik Tahabilder", ME, "Changxin Bai", "Qiang Zhu", "Shiyong Lu"],
      venue: "IEEE 4th International Conference on Artificial Intelligence, Blockchain and Internet of Things (AIBThings)", shortVenue: "IEEE AIBThings", year: 2026, status: "accepted", group: "selected",
      figure: { file: "zkscan.png", caption: "Fig. 2. ZKScan multi-stage analysis pipeline and detector routing.", alt: "Pipeline diagram: Solidity and Yul source is parsed, constants are resolved, and a VerifierIR is built; IR-level, dataflow, and source-level detectors run in parallel and their results are deduplicated and filtered into findings." },
      links: [{ label: "Paper (PDF)", href: "/papers/zkscan.pdf", icon: "file" }] },
    { slug: "secure-bsm-blockchain-misbehavior-detection", title: "Secure-BSM: Blockchain-Assisted Collaborative Misbehavior Detection in Vehicular Networks", authors: [ME, "Yi Zhu", "Shiyong Lu"],
      venue: "2026 IEEE 4th International Conference on Mobility, Operations, Services and Technologies (MOST)", shortVenue: "IEEE MOST", pages: "160–171", year: 2026, status: "published", group: "selected", doi: "10.1109/MOST69733.2026.00026",
      figure: { file: "secure-bsm.png", caption: "Fig. 1. Three-layer architecture of Secure-BSM.", alt: "Vehicles in two road zones form Pocket Ledgers that reach consensus on misbehavior reports, such as against an attacker vehicle, and synchronize with a global Root Ledger holding the vehicle registry, rate-limit token manager, and reputation vault." },
      links: [{ label: "Paper (PDF)", href: "/papers/secure-bsm.pdf", icon: "file" }] },
    {
        slug: "scientific-workflow-engine",
        title: "A generic efficient scientific workflow engine for the optimizations of run-time execution",
        authors: ["Changxin Bai", "Junwen Liu", "Anik Tahabilder", ME, "Shiyong Lu", "Dunren Che"],
        venue: "2023 IEEE International Conference on Software Services Engineering (SSE)",
        pages: "98–103",
        year: 2023,
        status: "published",
        group: "earlier",
        figure: { file: "scientific-workflow-engine.png", caption: "Fig. 3. Workflow engine architecture in the cloud.", alt: "Three-layer architecture: workflow planners (T-Cluster, IC-PCP, LPOD) produce a schedule for workflow executors (Alpha, Beta, Gamma), which dispatch tasks through the cloud to task executors running on separate virtual machines." },
        links: [{ label: "Paper (PDF)", href: "/papers/scientific-workflow-engine.pdf", icon: "file" }, scholarLink("ufrVoPGSRksC")],
    },
    {
        slug: "smart-fire-detection-system",
        title: "An automated smart embedded system on fire detection and prevention for ensuring safety",
        authors: ["F. M. Javed Mehedi Shamrat", "Aliza Ahmed Khan", "Zakia Sultana", ME, "Md Abdulla", "Ankit Khater"],
        venue: "2021 2nd International Conference on Smart Electronics and Communication (ICOSEC)",
        pages: "978–983",
        year: 2021,
        status: "published",
        group: "earlier",
        figure: { file: "smart-fire-detection.png", caption: "Fig. 6. The proposed smart embedded fire-safety system.", alt: "System diagram: an Arduino with an MQ-2 gas sensor, SIM800L GSM module, and buzzer is placed in a kitchen test environment and contacts a help center and an emergency contact when smoke is detected." },
        links: [{ label: "Paper (PDF)", href: "/papers/smart-fire-detection.pdf", icon: "file" }, scholarLink("2osOgNQ5qMEC")],
    },
    {
        slug: "covid-vaccine-sentiment-analysis",
        title: "Sentiment analysis on twitter tweets about COVID-19 vaccines using NLP and supervised KNN classification algorithm",
        authors: [
            "F. M. Javed Mehedi Shamrat",
            "Sovon Chakraborty",
            ME,
            "Jannatun Naeem Muna",
            "Md Masum Billah",
            "Protiva Das",
            "Md Obaidur Rahman",
        ],
        venue: "Indonesian Journal of Electrical Engineering and Computer Science, 23(1)",
        pages: "463–470",
        year: 2021,
        status: "published",
        group: "earlier",
        figure: { file: "covid-vaccine-sentiment.png", caption: "Fig. 1. Proposed system diagram.", alt: "Pipeline diagram: tweets are collected, preprocessed with NLP (removing special characters, tokenization, normalization, lemmatization), scored for polarity and subjectivity, classified with a supervised KNN algorithm, and visualized." },
        links: [{ label: "Paper (PDF)", href: "/papers/covid-vaccine-sentiment.pdf", icon: "file" }, scholarLink("u-x6o8ySG0sC")],
    },
    {
        slug: "liver-disease-prediction-lasso",
        title: "Supervised machine learning based liver disease prediction approach with LASSO feature selection",
        authors: [
            "Saima Afrin",
            "F. M. Javed Mehedi Shamrat",
            "Tafsirul Islam Nibir",
            "Mst. Fahmida Muntasim",
            "Md. Shakil Moharram",
            ME,
            "Md Abdulla",
        ],
        venue: "Bulletin of Electrical Engineering and Informatics, 10(6)",
        pages: "3369–3376",
        year: 2021,
        status: "published",
        group: "earlier",
        figure: { file: "liver-disease-lasso.png", caption: "Fig. 1. Proposed system diagram.", alt: "Pipeline diagram: the liver disease dataset is cleaned and transformed, standardized, and split into all features and LASSO-selected features; eight classifiers are trained with 10-fold cross-validation and compared by accuracy, precision, sensitivity, and F1-score." },
        links: [{ label: "Paper (PDF)", href: "/papers/liver-disease-lasso.pdf", icon: "file" }, scholarLink("9yKSN-GCB0IC")],
    },
    {
        slug: "adaptive-noc-routing",
        title: "An adaptive routing algorithm for on-chip 2D mesh network with an efficient buffer allocation scheme",
        authors: [ME, "M. S. Kaiser", "Syeda Tanjila Atik", "Jenia A. Jeba", "Z. I. Chowdhury", "Julkar N. Mahi"],
        venue: "2018 International Conference on Computer, Communication, Chemical, Material and Electronic Engineering (IC4ME2)",
        pages: "1–4",
        year: 2018,
        status: "published",
        group: "earlier",
        figure: { file: "adaptive-noc-routing.png", caption: "Fig. 2. Model of the router architecture.", alt: "Router diagram: five input channels (local, east, west, north, south) feed virtual-channel buffers; route decision, VC allocator, and switch allocation units control a crossbar that drives five output channels." },
        links: [{ label: "Paper (PDF)", href: "/papers/adaptive-noc-routing.pdf", icon: "file" }, scholarLink("u5HHmVD_uO8C")],
    },
];

export function publicationLinks(publication: Publication): ResourceLink[] {
    return [...(publication.links ?? []), ...(publication.doi ? [{ label: "DOI", href: doiUrl(publication.doi), icon: "file" as const }] : [])];
}
export function projectPublication(project: ResearchProject) { return publications.find(p => p.slug === project.publication); }
export function researchStatus(project: ResearchProject): ResearchStatus {
    const paper = projectPublication(project);
    if (!paper) return project.status ?? { label: "Ongoing research", kind: "ongoing" };
    return { kind: paper.status, label: `${paper.status === "accepted" ? "Accepted" : "Published"} · ${paper.shortVenue ?? paper.venue} ${paper.year}` };
}
export function researchLinks(project: ResearchProject): ResourceLink[] {
    const paper = projectPublication(project);
    return [...(paper ? publicationLinks(paper) : []), ...(project.links ?? [])].filter((link, i, links) => links.findIndex(other => other.href === link.href) === i);
}
export function publicationBibtex(paper: Publication): string {
    if (paper.bibtex) return paper.bibtex;
    const field = (name: string, value?: string) => value ? `  ${name} = {${value}},\n` : "";
    return `@inproceedings{${paper.slug.replaceAll("-", "")}${paper.year},\n${field("title", paper.title)}${field("author", paper.authors?.join(" and "))}${field("booktitle", paper.venue)}${field("year", String(paper.year))}${field("pages", paper.pages?.replace("–", "--"))}${field("doi", paper.doi)}${field("note", paper.status === "accepted" ? "Accepted" : undefined)}}`;
}
