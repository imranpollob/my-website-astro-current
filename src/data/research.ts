export type ResearchPaper = {
    slug: string;
    title: string;
    authors: string[];
    venue: string;
    year: number;
    status: "published" | "in-press";
    summary: string;
    url: string;
    citations?: number;
};

const YOU = "M M Imran";

export const SCHOLAR_URL = "https://scholar.google.com/citations?user=-K7OkFUAAAAJ&hl=en";

export const RESEARCH_INTERESTS =
    "My research sits at the intersection of blockchain security and applied machine learning. I'm currently focused on smart contract vulnerability detection using hypergraph neural networks and domain-tuned large language models, and on collaborative misbehavior detection for vehicular (V2X) networks built on blockchain consensus and verifiable rate-limiting. Earlier in my research career I worked on applied ML for healthcare diagnostics, NLP-based sentiment analysis, and embedded and networked systems — work that still shapes how I approach security problems today, as systems problems that need both rigorous modeling and practical, deployable solutions.";

export const researchPapers: ResearchPaper[] = [
    {
        slug: "secure-bsm-blockchain-misbehavior-detection",
        title: "Secure-BSM: Blockchain-Assisted Collaborative Misbehavior Detection in Vehicular Networks",
        authors: [YOU, "Yi Zhu", "Shiyong Lu"],
        venue: "2026 IEEE 4th International Conference on Mobility, Operations, Services and Technologies (MOST)",
        year: 2026,
        status: "in-press",
        summary:
            "A collaborative blockchain consensus architecture for detecting malicious Basic Safety Messages (BSMs) in V2X networks. Uses dual-layer ledgers and smart-contract-enforced Verifiable Rate-limit Tokens to reduce false positives and mitigate denial-of-service floods from misbehaving vehicles.",
        url: SCHOLAR_URL,
    },
    {
        slug: "scientific-workflow-engine",
        title: "A generic efficient scientific workflow engine for the optimizations of run-time execution",
        authors: ["Changxin Bai", "Junwen Liu", "Anik Tahabilder", YOU, "Shiyong Lu", "Dunren Che"],
        venue: "2023 IEEE International Conference on Software Services Engineering (SSE), pp. 98–103",
        year: 2023,
        status: "published",
        summary:
            "Proposes a workflow engine architecture that separates the workflow planner from the executor, letting child tasks start as soon as their required input data is ready instead of waiting for every predecessor task to finish — improving run-time execution efficiency in cloud computing environments.",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-K7OkFUAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=-K7OkFUAAAAJ:ufrVoPGSRksC",
        citations: 2,
    },
    {
        slug: "smart-fire-detection-system",
        title: "An automated smart embedded system on fire detection and prevention for ensuring safety",
        authors: ["F. M. Javed Mehedi Shamrat", "Aliza Ahmed Khan", "Zakia Sultana", YOU, "Md Abdulla", "Ankit Khater"],
        venue: "2021 2nd International Conference on Smart Electronics and Communication (ICOSEC), pp. 978–983",
        year: 2021,
        status: "published",
        summary:
            "An embedded fire-detection system built from three coordinated modules — smoke detection, alert notification, and emergency-alarm management — designed to catch residential fires earlier and automatically notify occupants and emergency services.",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-K7OkFUAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=-K7OkFUAAAAJ:2osOgNQ5qMEC",
        citations: 8,
    },
    {
        slug: "covid-vaccine-sentiment-analysis",
        title: "Sentiment analysis on twitter tweets about COVID-19 vaccines using NLP and supervised KNN classification algorithm",
        authors: [
            "F. M. Javed Mehedi Shamrat",
            "Sovon Chakraborty",
            YOU,
            "Jannatun Naeem Muna",
            "Md Masum Billah",
            "Protiva Das",
            "Md Obaidur Rahman",
        ],
        venue: "Indonesian Journal of Electrical Engineering and Computer Science, 23(1), pp. 463–470",
        year: 2021,
        status: "published",
        summary:
            "Collected Twitter data on COVID-19 vaccines, processed it with NLP, and applied a supervised KNN classifier to label sentiment as positive, negative, or neutral — finding Pfizer had the highest share of positive sentiment (47.3%), ahead of Moderna (46.2%) and AstraZeneca (40.1%).",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-K7OkFUAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=-K7OkFUAAAAJ:u-x6o8ySG0sC",
        citations: 175,
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
            YOU,
            "Md Abdulla",
        ],
        venue: "Bulletin of Electrical Engineering and Informatics, 10(6), pp. 3369–3376",
        year: 2021,
        status: "published",
        summary:
            "Compared eight supervised ML algorithms for liver disease diagnosis with LASSO feature selection and 10-fold cross-validation. A decision tree model performed best, reaching 94.3% accuracy and a 96% F1-score.",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-K7OkFUAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=-K7OkFUAAAAJ:9yKSN-GCB0IC",
        citations: 66,
    },
    {
        slug: "adaptive-noc-routing",
        title: "An adaptive routing algorithm for on-chip 2D mesh network with an efficient buffer allocation scheme",
        authors: [YOU, "M. S. Kaiser", "Syeda Tanjila Atik", "Jenia A. Jeba", "Z. I. Chowdhury", "Julkar N. Mahi"],
        venue: "2018 International Conference on Computer, Communication, Chemical, Material and Electronic Engineering (IC4ME2), pp. 1–4",
        year: 2018,
        status: "published",
        summary:
            "Proposes a modified XY routing algorithm with on-demand buffer allocation for 2D-mesh Networks-on-Chip, and compares its throughput and latency against the Odd-Even and DyAD routing schemes.",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-K7OkFUAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=-K7OkFUAAAAJ:u5HHmVD_uO8C",
        citations: 9,
    },
];
