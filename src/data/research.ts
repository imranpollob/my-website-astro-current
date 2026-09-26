import type { ResourceLink } from "@types";
import { PROFILE } from "@consts";

// ─── Research vision ────────────────────────────────────────────────────────

export const RESEARCH_VISION = [
    "My research studies security, privacy, and trust in decentralized, programmable, and zero-knowledge systems. I focus on the boundaries between layers: where cryptographic guarantees, protocol designs, and authorization rules meet blockchain state, transaction execution, and the way deployed systems actually behave.",
    "Each of those layers can look sound in isolation while the system as a whole does not. I approach these problems as both a researcher and an engineer. Before my Ph.D. I spent more than five years building production software, and I pair analysis with working implementations.",
];

// ─── Research areas ─────────────────────────────────────────────────────────

export type ResearchArea = {
    title: string;
    description: string;
    // Anchor ids of related research projects on /research.
    related?: string[];
    note?: string;
};

export const researchAreas: ResearchArea[] = [
    {
        title: "Blockchain & Smart Contract Security",
        description:
            "Security of blockchain applications, transaction systems, smart contracts, and decentralized infrastructure, including decentralized and cyber-physical settings such as connected vehicles.",
        related: ["secure-bsm"],
        note: "Earlier Ph.D. work includes a Solidity vulnerability-detection framework that combines hypergraph neural networks with domain-adapted language models.",
    },
    {
        title: "Privacy-Preserving Systems",
        description:
            "Stealth addresses, private transaction mechanisms, gas sponsorship, and privacy-preserving protocol design.",
        related: ["privgas"],
    },
    {
        title: "Programmable Account & Authorization Security",
        description:
            "EIP-7702, programmable accounts, authorization mechanisms, wallets, and transaction execution.",
        related: ["eip-7702"],
    },
    {
        title: "Zero-Knowledge System Security",
        description:
            "Security of ZK-enabled applications and the relationship between proven statements, blockchain state, execution context, and application semantics.",
        related: ["zk-security"],
    },
];

// ─── Research projects ──────────────────────────────────────────────────────

export type ResearchStatus = {
    label: string;
    kind: "published" | "ongoing" | "in-progress";
};

export type ResearchProject = {
    slug: string;
    title: string;
    subtitle: string;
    // One or two sentences for the homepage card.
    summary: string;
    problem: string;
    approach: string;
    contribution?: string;
    status?: ResearchStatus;
    tags: string[];
    // Slug of the matching entry in `publications`, if any.
    publication?: string;
    links?: ResourceLink[];
};

export const researchProjects: ResearchProject[] = [
    {
        slug: "secure-bsm",
        title: "Secure-BSM",
        subtitle: "Blockchain-assisted collaborative misbehavior detection in vehicular networks",
        summary:
            "A blockchain-assisted protocol for detecting malicious Basic Safety Messages in connected-vehicle (V2X) networks, combining collaborative consensus with smart-contract-enforced rate limiting.",
        problem:
            "Connected and autonomous vehicles exchange Basic Safety Messages (BSMs) over V2X networks. Misbehaving vehicles can broadcast false messages or flood the network, so participants need a trustworthy, decentralized way to detect misbehavior and limit its impact.",
        approach:
            "A collaborative misbehavior-detection architecture built on blockchain consensus, using dual-layer ledgers and Verifiable Rate-limit Tokens enforced by smart contracts.",
        contribution:
            "Designed to reduce false positives in misbehavior detection and to mitigate denial-of-service floods from misbehaving vehicles.",
        status: { label: "In press · IEEE MOST 2026", kind: "published" },
        tags: ["V2X", "Blockchain", "Smart Contracts", "Cyber-Physical Systems"],
        publication: "secure-bsm-blockchain-misbehavior-detection",
    },
    {
        slug: "privgas",
        title: "PrivGas",
        subtitle: "Privacy-preserving gas sponsorship for stealth-address transactions",
        summary:
            "Gas sponsorship for stealth-address transactions that decouples how gas is funded from how funds are spent, so that paying for gas does not undermine stealth-address privacy.",
        problem:
            "Stealth addresses let a recipient receive funds at a fresh, unlinkable address. Spending from that address still requires gas, and funding the gas in a way that links back to the recipient can undermine the privacy the stealth address was meant to provide.",
        approach:
            "A funding–spending decoupling design for gas sponsorship that combines stealth addresses, account abstraction, privacy-preserving protocol design, and zero-knowledge techniques.",
        tags: ["Stealth Addresses", "Account Abstraction", "Zero-Knowledge", "Privacy"],
    },
    {
        slug: "eip-7702",
        title: "EIP-7702 Authorization Security",
        subtitle: "Security of programmable account authorization",
        summary:
            "An analysis of the security risks surrounding EIP-7702, which lets existing Ethereum accounts authorize smart-contract code to act on their behalf.",
        problem:
            "EIP-7702 allows an externally owned account (EOA) to delegate its execution to smart-contract code through a signed authorization. This brings programmable-account features to existing accounts, but it also changes what a single signature can authorize.",
        approach:
            "Analyzes the security risks surrounding EIP-7702 authorization, delegated account code, and the programmable-account model it introduces.",
        tags: ["EIP-7702", "Programmable Accounts", "Authorization", "Wallets"],
    },
    {
        slug: "zk-security",
        title: "Zero-Knowledge Application Security",
        subtitle: "What a proof establishes versus what it is used to authorize",
        summary:
            "Investigating security problems in the relationship between zero-knowledge proof statements and the blockchain state, execution context, or application semantics they are meant to authorize.",
        problem:
            "A zero-knowledge proof establishes that a specific statement is true. Applications then rely on that proof to authorize actions that depend on blockchain state, execution context, and application semantics. Security problems can arise when the statement that is proven and the action it is meant to authorize do not match.",
        approach:
            "This ongoing work investigates the relationship between proof statements and the state, context, and semantics they are intended to authorize.",
        status: { label: "Ongoing research", kind: "ongoing" },
        tags: ["Zero-Knowledge Proofs", "Blockchain State", "Authorization"],
    },
];

// ─── Publications ───────────────────────────────────────────────────────────

export type Publication = {
    slug: string;
    title: string;
    authors: string[];
    venue: string;
    year: number;
    status: "published" | "in-press";
    // "selected" = current security / decentralized-systems work; "earlier" = prior areas.
    group: "selected" | "earlier";
    // Short description used by search and RSS; not rendered on the page.
    summary: string;
    links?: ResourceLink[];
    bibtex?: string;
};

const ME = PROFILE.PUBLICATION_NAME;

const scholarLink = (citationId: string): ResourceLink => ({
    label: "Google Scholar",
    icon: "scholar",
    href: `https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-K7OkFUAAAAJ&citation_for_view=-K7OkFUAAAAJ:${citationId}`,
});

export const publications: Publication[] = [
    {
        slug: "secure-bsm-blockchain-misbehavior-detection",
        title: "Secure-BSM: Blockchain-Assisted Collaborative Misbehavior Detection in Vehicular Networks",
        authors: [ME, "Yi Zhu", "Shiyong Lu"],
        venue: "2026 IEEE 4th International Conference on Mobility, Operations, Services and Technologies (MOST)",
        year: 2026,
        status: "in-press",
        group: "selected",
        summary:
            "A collaborative blockchain consensus architecture for detecting malicious Basic Safety Messages (BSMs) in V2X networks, using dual-layer ledgers and smart-contract-enforced Verifiable Rate-limit Tokens.",
    },
    {
        slug: "scientific-workflow-engine",
        title: "A generic efficient scientific workflow engine for the optimizations of run-time execution",
        authors: ["Changxin Bai", "Junwen Liu", "Anik Tahabilder", ME, "Shiyong Lu", "Dunren Che"],
        venue: "2023 IEEE International Conference on Software Services Engineering (SSE), pp. 98–103",
        year: 2023,
        status: "published",
        group: "earlier",
        summary:
            "A workflow engine architecture that separates the planner from the executor so child tasks can start as soon as their input data is ready.",
        links: [scholarLink("ufrVoPGSRksC")],
    },
    {
        slug: "smart-fire-detection-system",
        title: "An automated smart embedded system on fire detection and prevention for ensuring safety",
        authors: ["F. M. Javed Mehedi Shamrat", "Aliza Ahmed Khan", "Zakia Sultana", ME, "Md Abdulla", "Ankit Khater"],
        venue: "2021 2nd International Conference on Smart Electronics and Communication (ICOSEC), pp. 978–983",
        year: 2021,
        status: "published",
        group: "earlier",
        summary:
            "An embedded fire-detection system with coordinated smoke-detection, alert-notification, and emergency-alarm modules.",
        links: [scholarLink("2osOgNQ5qMEC")],
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
        venue: "Indonesian Journal of Electrical Engineering and Computer Science, 23(1), pp. 463–470",
        year: 2021,
        status: "published",
        group: "earlier",
        summary: "NLP and supervised KNN classification of Twitter sentiment about COVID-19 vaccines.",
        links: [scholarLink("u-x6o8ySG0sC")],
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
        venue: "Bulletin of Electrical Engineering and Informatics, 10(6), pp. 3369–3376",
        year: 2021,
        status: "published",
        group: "earlier",
        summary: "A comparison of supervised ML algorithms for liver disease diagnosis with LASSO feature selection.",
        links: [scholarLink("9yKSN-GCB0IC")],
    },
    {
        slug: "adaptive-noc-routing",
        title: "An adaptive routing algorithm for on-chip 2D mesh network with an efficient buffer allocation scheme",
        authors: [ME, "M. S. Kaiser", "Syeda Tanjila Atik", "Jenia A. Jeba", "Z. I. Chowdhury", "Julkar N. Mahi"],
        venue: "2018 International Conference on Computer, Communication, Chemical, Material and Electronic Engineering (IC4ME2), pp. 1–4",
        year: 2018,
        status: "published",
        group: "earlier",
        summary: "A modified XY routing algorithm with on-demand buffer allocation for 2D-mesh Networks-on-Chip.",
        links: [scholarLink("u5HHmVD_uO8C")],
    },
];
