import type { ResourceLink } from "@types";
import { GITHUB_URL } from "@consts";

export type ProjectSection =
    // Technically substantial projects shown for their engineering.
    | "security"
    // AI and LLM applications listed compactly under "AI Engineering Projects".
    | "ai";

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
    // Platforms with published builds, e.g. "macOS · Windows · Linux".
    platforms?: string;
};

const repo = (name: string) => `${GITHUB_URL}/${name}`;

export const projects: Project[] = [
    { slug: "solidity-ast-generator", title: "Solidity AST Generator", description: "Explore a Solidity file's syntax tree with source highlighting, tree navigation, and pinned comparisons.", section: "security", kind: "Analysis tool", tags: ["Solidity", "AST"], githubUrl: repo("solidity-ast-generator") },

    // ── Selected Engineering Projects ───────────────────────────────────────
    {
        slug: "nft-rentals-and-sales",
        title: "NFT Rentals & Sales Protocol",
        description:
            "Solidity protocol for renting and selling NFTs with ERC-4907 time-bound user rights, ERC-2981 royalties, conflict-free rental scheduling, escrowed pull-payments, and reentrancy protection.",
        section: "security",
        kind: "Solidity protocol",
        tags: ["Solidity", "ERC-4907", "ERC-2981", "Escrow"],
        image: "/images/nft-rentals.webp",
        githubUrl: repo("nft-rentals-and-sales"),
    },
    {
        slug: "stablecoin",
        title: "Overcollateralized Stablecoin",
        description:
            "Stablecoin protocol backed by WETH and WBTC collateral, with Chainlink price feeds, health-factor checks, liquidations, and minting and redemption flows.",
        section: "security",
        kind: "Solidity protocol",
        tags: ["Solidity", "DeFi", "Chainlink"],
        image: "/images/stablecoin-dsc.webp",
        githubUrl: repo("stablecoin"),
    },
    {
        slug: "swap",
        title: "Swap – Decentralized Exchange",
        description:
            "Uniswap-style exchange with constant-product AMM pools, CREATE2 pair deployment, liquidity management, multi-hop swaps, slippage protection, and TWAP support.",
        section: "security",
        kind: "Solidity protocol",
        tags: ["Solidity", "AMM", "DeFi"],
        image: "/images/swap-dex.webp",
        githubUrl: repo("swap"),
    },
    {
        slug: "dao",
        title: "DAO – Community Grants Governance",
        description:
            "Governance system for proposing, voting on, and executing ETH and ERC-20 grants with OpenZeppelin Governor, Timelock, treasury, and vesting support.",
        section: "security",
        kind: "Solidity protocol",
        tags: ["Solidity", "Governance", "OpenZeppelin"],
        image: "/images/dao-governance.webp",
        githubUrl: repo("dao"),
    },

    // ── AI Engineering Projects ─────────────────────────────────────────────
    {
        slug: "ai-trading",
        title: "Multi-Agent Trading Simulation",
        description:
            "A stock-trading simulation where several AI agents, each with its own strategy, research the market and manage a portfolio. Market data, accounts, memory, and notifications run as separate MCP services, and a dashboard shows activity live.",
        section: "ai",
        kind: "Multi-agent system",
        tags: ["Python", "MCP", "Agents"],
        image: "/images/ai-trading.webp",
        githubUrl: repo("ai-trading"),
    },
    {
        slug: "multi-pdf-rag-chatbot",
        title: "Multi-PDF RAG Chatbot",
        description: "Question answering across multiple PDFs with LangChain, ChromaDB, source citations, and a Streamlit UI.",
        section: "ai",
        kind: "Python app",
        githubUrl: repo("multi-pdf-rag-chatbot"),
    },
    {
        slug: "deal-finder-ai",
        title: "Deal Finder",
        description: "Agents scan online deal feeds, estimate each item's price with LLM and ML models, and send an alert when they find a good deal.",
        section: "ai",
        kind: "Python app",
        githubUrl: repo("deal-finder-ai"),
    },
];

// Projects featured on the homepage, in display order.
export const featuredProjectSlugs = ["solidity-ast-generator", "nft-rentals-and-sales", "stablecoin"];

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
