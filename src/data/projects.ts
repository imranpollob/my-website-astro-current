import type { ResourceLink } from "@types";
import { GITHUB_URL } from "@consts";

export type ProjectSection =
    // Web apps and tools people can use right now.
    | "tools"
    // Tools that are downloaded or installed and run locally.
    | "installable"
    // Technically substantial projects shown for their engineering.
    | "engineering"
    // Smaller projects listed compactly under "More Projects".
    | "more";

export type Project = {
    slug: string;
    title: string;
    description: string;
    section: ProjectSection;
    // Short type label shown on the card, e.g. "Web app" or "CLI · npm".
    kind: string;
    tags?: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    // Package registry page (npm, PyPI, ...).
    installUrl?: string;
    installCommand?: string;
    // Release/download page for desktop apps.
    downloadUrl?: string;
};

const repo = (name: string) => `${GITHUB_URL}/${name}`;

export const projects: Project[] = [
    // ── Tools & Applications ────────────────────────────────────────────────
    {
        slug: "bangla-quran",
        title: "Bangla Quran",
        description:
            "Quran web app with all 114 surahs, Arabic text, Bangla translation and tafsir, audio recitation, search, bookmarks, reading modes, and PWA support.",
        section: "tools",
        kind: "Web app",
        tags: ["PWA", "Audio", "Search"],
        image: "/images/bangla-quran.png",
        liveUrl: "https://banglaquran.app",
        githubUrl: repo("bangla-quran"),
    },
    {
        slug: "github-profile-analyzer",
        title: "GitHub Profile Analyzer",
        description:
            "Analyze GitHub profiles, repositories, languages, stars, forks, and activity through a visual dashboard.",
        section: "tools",
        kind: "Web tool",
        image: "/images/tools/github-profile-analyzer.png",
        liveUrl: "https://imranpollob.github.io/github-profile-analyzer/",
        githubUrl: repo("github-profile-analyzer"),
    },
    {
        slug: "snippet-notes",
        title: "Snippet – Rich Text Notes",
        description:
            "Create, edit, search, and organize notes with rich text editing, autosave, and a personal online workspace.",
        section: "tools",
        kind: "Web app",
        image: "/images/tools/snippet-notes.jpeg",
        liveUrl: "https://imranpollob.github.io/snippet-notes/",
        githubUrl: repo("snippet-notes"),
    },
    {
        slug: "text-diff-checker",
        title: "Text Diff Checker",
        description:
            "Compare two texts side by side and highlight word-level or character-level differences privately in your browser.",
        section: "tools",
        kind: "Web tool",
        image: "/images/tools/text-diff-checker.png",
        liveUrl: "https://imranpollob.github.io/text-diff-checker/",
        githubUrl: repo("text-diff-checker"),
    },
    {
        slug: "pdf-text-to-speech-reader",
        title: "PDF Text-to-Speech Reader",
        description:
            "Read PDFs and text aloud with synchronized highlighting, browser speech, and neural text-to-speech support.",
        section: "tools",
        kind: "Web tool",
        image: "/images/tools/pdf-text-to-speech-reader.png",
        liveUrl: "https://imranpollob.github.io/pdf-text-to-speech-reader/",
        githubUrl: repo("pdf-text-to-speech-reader"),
    },
    {
        slug: "bibtex-to-bibitem",
        title: "BibTeX to Bibitem Converter",
        description: "Convert BibTeX references into formatted LaTeX \\bibitem entries instantly in the browser.",
        section: "tools",
        kind: "Web tool",
        image: "/images/tools/bibtex-to-bibitem.png",
        liveUrl: "https://imranpollob.github.io/bibtex-to-bibitem/",
        githubUrl: repo("bibtex-to-bibitem"),
    },

    // ── Installable Tools ───────────────────────────────────────────────────
    {
        slug: "note-cli",
        title: "Note CLI",
        description:
            "A lightweight command-line note manager for creating, searching, editing, and organizing notes from the terminal.",
        section: "installable",
        kind: "CLI · npm",
        image: "/images/tools/note-cli.png",
        installUrl: "https://www.npmjs.com/package/node-note-cli",
        installCommand: "npm install -g node-note-cli",
        githubUrl: repo("note-cli"),
    },
    {
        slug: "pomodoro-timer",
        title: "Pomodoro Timer",
        description:
            "Desktop Pomodoro timer and stopwatch with todo management, daily statistics, syncing, and always-on-top mode.",
        section: "installable",
        kind: "Desktop app",
        image: "/images/tools/pomodoro-timer.png",
        downloadUrl: "https://github.com/imranpollob/pomodoro-timer/releases",
        githubUrl: repo("pomodoro-timer"),
    },
    {
        slug: "github-star-calculator",
        title: "GitHub Star Calculator",
        description: "Calculate the total stars earned by a GitHub user and list their most-starred repositories.",
        section: "installable",
        kind: "CLI · PyPI",
        image: "/images/tools/github-star-calculator.png",
        installUrl: "https://pypi.org/project/gitstar/",
        installCommand: "pip install gitstar",
        githubUrl: repo("github-star-calculator"),
    },
    {
        slug: "slugcopy",
        title: "Slugcopy",
        description:
            "Convert text into URL-friendly slugs and copy the result to the clipboard from the command line.",
        section: "installable",
        kind: "CLI · npm",
        image: "/images/tools/slugcopy.png",
        installUrl: "https://www.npmjs.com/package/slugcopy",
        installCommand: "npm install -g slugcopy",
        githubUrl: repo("slugcopy"),
    },

    // ── Selected Engineering Projects ───────────────────────────────────────
    {
        slug: "nft-rentals-and-sales",
        title: "NFT Rentals & Sales Protocol",
        description:
            "Solidity protocol for renting and selling NFTs with ERC-4907 time-bound user rights, ERC-2981 royalties, conflict-free rental scheduling, escrowed pull-payments, and reentrancy protection.",
        section: "engineering",
        kind: "Solidity protocol",
        tags: ["Solidity", "ERC-4907", "ERC-2981", "Escrow"],
        image: "/images/nft-rentals.png",
        githubUrl: repo("nft-rentals-and-sales"),
    },
    {
        slug: "stablecoin",
        title: "Overcollateralized Stablecoin",
        description:
            "Stablecoin protocol backed by WETH and WBTC collateral, with Chainlink price feeds, health-factor checks, liquidations, and minting and redemption flows.",
        section: "engineering",
        kind: "Solidity protocol",
        tags: ["Solidity", "DeFi", "Chainlink"],
        image: "/images/stablecoin-dsc.png",
        githubUrl: repo("stablecoin"),
    },
    {
        slug: "swap",
        title: "Swap – Decentralized Exchange",
        description:
            "Uniswap-style exchange with constant-product AMM pools, CREATE2 pair deployment, liquidity management, multi-hop swaps, slippage protection, and TWAP support.",
        section: "engineering",
        kind: "Solidity protocol",
        tags: ["Solidity", "AMM", "DeFi"],
        image: "/images/swap-dex.png",
        githubUrl: repo("swap"),
    },
    {
        slug: "dao",
        title: "DAO – Community Grants Governance",
        description:
            "Governance system for proposing, voting on, and executing ETH and ERC-20 grants with OpenZeppelin Governor, Timelock, treasury, and vesting support.",
        section: "engineering",
        kind: "Solidity protocol",
        tags: ["Solidity", "Governance", "OpenZeppelin"],
        image: "/images/dao-governance.png",
        githubUrl: repo("dao"),
    },
    {
        slug: "notebase",
        title: "Notebase – Personal Knowledge Base",
        description:
            "Knowledge workspace with rich-text notes, notebook organization, source ingestion, password-protected sharing, and notebook-scoped retrieval chat with cited answers.",
        section: "engineering",
        kind: "Full-stack app",
        tags: ["Full-stack", "Ingestion", "RAG"],
        image: "/images/notebase.png",
        githubUrl: repo("notebase"),
    },
    {
        slug: "chat-app",
        title: "Multi-Room Chat App",
        description:
            "Real-time MERN chat application with JWT authentication, public and private rooms, membership controls, moderation, persistent messaging, and Socket.IO presence.",
        section: "engineering",
        kind: "Full-stack app",
        tags: ["Node.js", "MongoDB", "Socket.IO", "JWT"],
        image: "/images/chat-app.png",
        githubUrl: repo("chat-app"),
    },
    {
        slug: "ai-trading",
        title: "Multi-Agent Trading Simulation",
        description:
            "Stock-trading simulation in which autonomous agents with distinct investment strategies research markets and manage portfolios, built on modular MCP services for market data, accounts, memory, and notifications, with a real-time dashboard.",
        section: "more",
        kind: "Multi-agent system",
        tags: ["Python", "MCP", "Agents"],
        image: "/images/ai-trading.png",
        githubUrl: repo("ai-trading"),
    },

    // ── More Projects ───────────────────────────────────────────────────────
    {
        slug: "multi-pdf-rag-chatbot",
        title: "Multi-PDF RAG Chatbot",
        description: "Question answering across multiple PDFs with LangChain, ChromaDB, source citations, and a Streamlit UI.",
        section: "more",
        kind: "Python app",
        githubUrl: repo("multi-pdf-rag-chatbot"),
    },
    {
        slug: "deal-finder-ai",
        title: "Deal Finder",
        description: "Multi-agent deal discovery that scans online feeds, estimates prices with LLM and ML models, and sends automated alerts.",
        section: "more",
        kind: "Python app",
        githubUrl: repo("deal-finder-ai"),
    },
    {
        slug: "crypto-chart-viewer",
        title: "Crypto Chart Viewer",
        description: "Search cryptocurrencies and view Coinbase trading pairs with interactive TradingView charts.",
        section: "more",
        kind: "Web tool",
        liveUrl: "https://imranpollob.github.io/crypto-chart-viewer",
        githubUrl: repo("crypto-chart-viewer"),
    },
    {
        slug: "online-spelling-quiz",
        title: "Online Spelling Quiz",
        description: "Spelling practice with audio pronunciation, difficulty levels, and commonly misspelled words.",
        section: "more",
        kind: "Web tool",
        liveUrl: "https://imranpollob.github.io/online-spelling-quiz/",
        githubUrl: repo("online-spelling-quiz"),
    },
    {
        slug: "mental-math-trainer",
        title: "Mental Math Trainer",
        description: "Arithmetic practice with configurable operations, difficulty levels, and timers.",
        section: "more",
        kind: "Web tool",
        liveUrl: "https://imranpollob.github.io/mental-math-trainer/",
        githubUrl: repo("mental-math-trainer"),
    },
    {
        slug: "online-trivia-quiz",
        title: "Online Trivia Quiz",
        description: "Trivia quizzes by category and difficulty with instant scoring.",
        section: "more",
        kind: "Web tool",
        liveUrl: "https://imranpollob.github.io/online-trivia-quiz/",
        githubUrl: repo("online-trivia-quiz"),
    },
    {
        slug: "word-character-counter",
        title: "Word and Character Counter",
        description: "Counts words, characters, sentences, paragraphs, reading time, and vocabulary statistics.",
        section: "more",
        kind: "Web tool",
        liveUrl: "https://imranpollob.github.io/word-character-counter/",
        githubUrl: repo("word-character-counter"),
    },
    {
        slug: "color-shade-generator",
        title: "Color Shade Generator",
        description: "Generates lighter and darker shades of any color with one-click HEX copy.",
        section: "more",
        kind: "Web tool",
        liveUrl: "https://imranpollob.github.io/color-shade-generator/",
        githubUrl: repo("color-shade-generator"),
    },
    {
        slug: "lorem-ipsum-generator",
        title: "Lorem Ipsum Generator",
        description: "Placeholder text with control over paragraphs, sentences, and word length.",
        section: "more",
        kind: "Web tool",
        liveUrl: "https://imranpollob.github.io/lorem-ipsum-generator/",
        githubUrl: repo("lorem-ipsum-generator"),
    },
    {
        slug: "black-screen-online",
        title: "Black Screen Online",
        description: "Distraction-free fullscreen screen with a clock, custom text, and background colors.",
        section: "more",
        kind: "Web tool",
        liveUrl: "https://imranpollob.github.io/black-screen-online/",
        githubUrl: repo("black-screen-online"),
    },
];

// Projects featured on the homepage, in display order.
export const featuredProjectSlugs = [
    "bangla-quran",
    "nft-rentals-and-sales",
    "notebase",
    "github-profile-analyzer",
    "stablecoin",
    "note-cli",
];

export const projectsIn = (section: ProjectSection) => projects.filter((project) => project.section === section);

export const featuredProjects = featuredProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));

// Buttons for a project card, in priority order. Only links that exist are returned.
export function projectLinks(project: Project): ResourceLink[] {
    const links: ResourceLink[] = [];
    if (project.liveUrl) links.push({ label: "Live", href: project.liveUrl, icon: "globe" });
    if (project.installUrl) links.push({ label: "Install", href: project.installUrl, icon: "terminal" });
    if (project.downloadUrl) links.push({ label: "Download", href: project.downloadUrl, icon: "download" });
    if (project.githubUrl) links.push({ label: "GitHub", href: project.githubUrl, icon: "github" });
    return links;
}
