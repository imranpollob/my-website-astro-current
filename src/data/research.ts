import type { ResourceLink } from "@types";
import { PROFILE } from "@consts";

// ─── Research vision ────────────────────────────────────────────────────────

export const RESEARCH_VISION = [
    "My research studies security, privacy, and trust in decentralized, programmable, and zero-knowledge systems. I focus on the boundaries between layers: where cryptographic guarantees, protocol designs, and authorization rules meet blockchain state, transaction execution, and the way deployed systems actually behave.",
    "That focus has developed across four projects: securing decentralized cyber-physical communication (Secure-BSM), preserving stealth-address privacy when gas is sponsored (PrivGas), authorization and delegation risks in programmable EOAs (EIP-7702), and, in ongoing work, how zero-knowledge proofs are bound to the state and context they authorize.",
    "I approach these problems as both a researcher and an engineer. Before beginning my Ph.D., I spent five years as a software engineer in industry, and I pair analysis with working implementations.",
];

// ─── Research areas ─────────────────────────────────────────────────────────

export type ResearchArea = {
    title: string;
    description: string;
    // Anchor ids of related research projects on /research.
    related?: string[];
};

export const researchAreas: ResearchArea[] = [
    {
        title: "Blockchain Security",
        description:
            "Security of blockchain applications, transaction systems, smart contracts, and decentralized infrastructure, including decentralized and cyber-physical settings such as connected vehicles.",
        related: ["secure-bsm"],
    },
    {
        title: "Privacy-Preserving Systems",
        description:
            "Stealth addresses, private transaction mechanisms, gas sponsorship, and privacy-preserving protocol design.",
        related: ["privgas"],
    },
    {
        title: "Programmable Accounts & Authorization",
        description:
            "EIP-7702, programmable EOAs, authorization and delegation mechanisms, wallets, and transaction execution.",
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
    kind: "published" | "accepted" | "study" | "ongoing";
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
        status: { label: "Published · IEEE MOST 2026", kind: "published" },
        tags: ["V2X", "Blockchain", "Smart Contracts", "Cyber-Physical Systems"],
        publication: "secure-bsm-blockchain-misbehavior-detection",
    },
    {
        slug: "privgas",
        title: "PrivGas",
        subtitle: "Funding–spending decoupling for anonymous stealth-address gas sponsorship",
        summary:
            "Gas sponsorship for stealth-address transactions that decouples how gas is funded from how funds are spent, so that paying for gas does not undermine stealth-address privacy.",
        problem:
            "ERC-5564 stealth addresses let a recipient receive funds at a fresh, unlinkable address. Spending from that address still requires gas, and funding the gas in a way that links back to the recipient can undo the privacy the stealth address was meant to provide.",
        approach:
            "A privacy-preserving gas-sponsorship protocol built on funding–spending decoupling. It combines ERC-5564 stealth addresses with ERC-4337 account abstraction and uses zero-knowledge techniques in the protocol design.",
        status: { label: "Accepted & presented · IEEE AIBThings 2026", kind: "accepted" },
        tags: ["ERC-5564", "ERC-4337", "Stealth Addresses", "Zero-Knowledge", "Privacy"],
        publication: "privgas-stealth-address-gas-sponsorship",
    },
    {
        slug: "eip-7702",
        title: "EIP-7702 Authorization Security",
        subtitle: "Authorization and delegation security of programmable EOAs",
        summary:
            "A study of the authorization and delegation security risks introduced when EIP-7702 lets externally owned accounts delegate to smart-contract code.",
        problem:
            "EIP-7702 allows an externally owned account (EOA) to delegate its execution to smart-contract code through a signed authorization. This brings programmable-account features to existing accounts, but it also changes what a single signature can authorize.",
        approach:
            "Studies the authorization and delegation security risks that programmable EOAs introduce under EIP-7702.",
        status: { label: "Research study", kind: "study" },
        tags: ["EIP-7702", "Programmable EOAs", "Authorization", "Delegation"],
    },
    {
        slug: "zk-security",
        title: "Zero-Knowledge Application Security",
        subtitle: "Binding proofs to the state and context they authorize",
        summary:
            "Investigating security failures that can occur when a valid zero-knowledge proof is not correctly bound to the blockchain state, execution context, or application semantics it is meant to authorize.",
        problem:
            "A zero-knowledge proof establishes that a specific statement is true, and applications rely on that proof to authorize actions. A proof can be cryptographically valid and still be unsafe to act on if it is not correctly bound to the blockchain state, execution context, or application semantics it is intended to authorize.",
        approach:
            "This ongoing work investigates how proof statements are bound to the state, context, and semantics they authorize, and where that binding can fail. No results have been published yet.",
        status: { label: "Ongoing research", kind: "ongoing" },
        tags: ["Zero-Knowledge Proofs", "Blockchain State", "Authorization"],
    },
];

// ─── Publications ───────────────────────────────────────────────────────────

export type Publication = {
    slug: string;
    title: string;
    // Omitted when the author list has not been confirmed.
    authors?: string[];
    venue: string;
    pages?: string;
    year: number;
    status: "published" | "accepted";
    // "selected" = current security / decentralized-systems work; "earlier" = prior areas.
    group: "selected" | "earlier";
    doi?: string;
    links?: ResourceLink[];
    bibtex?: string;
};

const ME = PROFILE.PUBLICATION_NAME;

const scholarLink = (citationId: string): ResourceLink => ({
    label: "Google Scholar",
    icon: "scholar",
    href: `https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-K7OkFUAAAAJ&citation_for_view=-K7OkFUAAAAJ:${citationId}`,
});

export const doiUrl = (doi: string) => `https://doi.org/${doi}`;

export const publications: Publication[] = [
    {
        slug: "secure-bsm-blockchain-misbehavior-detection",
        title: "Secure-BSM: Blockchain-Assisted Collaborative Misbehavior Detection in Vehicular Networks",
        authors: [ME, "Yi Zhu", "Shiyong Lu"],
        venue: "2026 IEEE 4th International Conference on Mobility, Operations, Services and Technologies (MOST)",
        pages: "160–171",
        year: 2026,
        status: "published",
        group: "selected",
        doi: "10.1109/MOST69733.2026.00026",
    },
    {
        slug: "privgas-stealth-address-gas-sponsorship",
        title: "Funding-Spending Decoupling for Anonymous Stealth-Address Gas Sponsorship",
        venue: "IEEE 4th International Conference on Artificial Intelligence, Blockchain, and Internet of Things (AIBThings)",
        year: 2026,
        status: "accepted",
        group: "selected",
    },
    {
        slug: "scientific-workflow-engine",
        title: "A generic efficient scientific workflow engine for the optimizations of run-time execution",
        authors: ["Changxin Bai", "Junwen Liu", "Anik Tahabilder", ME, "Shiyong Lu", "Dunren Che"],
        venue: "2023 IEEE International Conference on Software Services Engineering (SSE)",
        pages: "98–103",
        year: 2023,
        status: "published",
        group: "earlier",
        links: [scholarLink("ufrVoPGSRksC")],
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
        venue: "Indonesian Journal of Electrical Engineering and Computer Science, 23(1)",
        pages: "463–470",
        year: 2021,
        status: "published",
        group: "earlier",
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
        venue: "Bulletin of Electrical Engineering and Informatics, 10(6)",
        pages: "3369–3376",
        year: 2021,
        status: "published",
        group: "earlier",
        links: [scholarLink("9yKSN-GCB0IC")],
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
        links: [scholarLink("u5HHmVD_uO8C")],
    },
];

// Buttons for a publication: DOI first, then any other links.
export function publicationLinks(publication: Publication): ResourceLink[] {
    return [
        ...(publication.doi ? [{ label: "DOI", href: doiUrl(publication.doi), icon: "file" as const }] : []),
        ...(publication.links ?? []),
    ];
}
