// Source: the certification list from the earlier homepage (git history, commit 1ef327e^).

export type Certification = {
    name: string;
    description: string;
    thumbnail: string;
    fullImage: string;
    credentialUrl: string;
};

export type CertificationGroup = {
    title: string;
    items: Certification[];
};

export const certificationGroups: CertificationGroup[] = [
    {
        title: "Blockchain & Security",
        items: [
            {
                name: "Blockchain Solution Architecture",
                description: "Covers designing blockchain systems, including architecture choices, security, and risk.",
                thumbnail: "/image/certifications/blockchain-solution-architecture-thumb.jpg",
                fullImage: "/image/certifications/blockchain-solution-architecture-full.jpg",
                credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/O3Q7CG1SRKM5",
            },
            {
                name: "Security for Blockchain and DApps",
                description: "Covers blockchain and DApp security, applied cryptography, and DeFi risks.",
                thumbnail: "/image/certifications/security-for-blockchain-dapps-thumb.jpg",
                fullImage: "/image/certifications/security-for-blockchain-dapps-full.jpg",
                credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/G1LITZ430K3Q",
            },
            {
                name: "Blockchain Security",
                description: "An introduction to blockchain threats and security fundamentals.",
                thumbnail: "/image/certifications/blockchain-security-thumb.jpg",
                fullImage: "/image/certifications/blockchain-security-full.jpg",
                credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/3BN6UAX4MZDZ",
            },
        ],
    },
    {
        title: "AI & Machine Learning",
        items: [
            {
                name: "IBM Generative AI Engineering",
                description: "Covers LLMs, transformers, and RAG, and building and deploying generative AI applications.",
                thumbnail: "/image/certifications/ibm-generative-ai-engineering-thumb.jpg",
                fullImage: "/image/certifications/ibm-generative-ai-engineering-full.jpg",
                credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/VCI51YJT40UL",
            },
            {
                name: "IBM RAG and Agentic AI",
                description: "Covers RAG and agent-based systems, including multi-agent setups and tool use.",
                thumbnail: "/image/certifications/ibm-rag-agentic-ai-thumb.jpg",
                fullImage: "/image/certifications/ibm-rag-agentic-ai-full.jpg",
                credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/9T9ZY7QU9A4G",
            },
            {
                name: "Microsoft AI & ML Engineering",
                description: "Covers AI and ML engineering, from fundamentals to deployment on Azure.",
                thumbnail: "/image/certifications/microsoft-ai-ml-thumb.jpg",
                fullImage: "/image/certifications/microsoft-ai-ml-full.jpg",
                credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/9ZRZI7NIJCI0",
            },
        ],
    },
];
