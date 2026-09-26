import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Imran Pollob",
  HOME_TITLE: "Imran Pollob — Security & Decentralized Systems Researcher",
  DESCRIPTION:
    "Ph.D. researcher at Wayne State University studying blockchain security, privacy, and programmable accounts, with five years of industry software engineering.",
  AUTHOR: "Imran Pollob",
};

// Identity shown in the hero, metadata, and structured data.
export const PROFILE = {
  NAME: "Imran Pollob",
  // Name used on publications and the CV.
  PUBLICATION_NAME: "M M Imran",
  HEADLINE: "Ph.D. Researcher in Security & Decentralized Systems",
  THEMES: ["Blockchain Security", "Privacy", "Programmable Accounts", "Zero-Knowledge Systems"],
  AFFILIATION: "Wayne State University",
  LOCATION: "Detroit, MI",
  EMAIL: "mmimran@wayne.edu",
  PHOTO: "/image/imran-pollob.jpg",
  CV_URL: "/resume.pdf",
};

// Research Page
export const RESEARCH: Page = {
  TITLE: "Research",
  SEO_TITLE: "Research: Blockchain Security, Privacy & ZK",
  DESCRIPTION:
    "Research on security and privacy in decentralized, programmable, and zero-knowledge systems, with publications including Secure-BSM and PrivGas.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  SEO_TITLE: "Projects: Open-Source Tools & Engineering",
  DESCRIPTION:
    "Web tools, installable CLI utilities, and engineering projects by Imran Pollob, from Solidity protocols to full-stack applications.",
};

// Primary navigation. The name/logo links to Home; CV opens the PDF.
export const LINKS: Links = [
  {
    TEXT: "Research",
    HREF: "/research",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "CV",
    HREF: PROFILE.CV_URL,
    EXTERNAL: true,
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: PROFILE.EMAIL,
    HREF: `mailto:${PROFILE.EMAIL}`,
  },
  {
    NAME: "Google Scholar",
    ICON: "google-scholar",
    TEXT: "Google Scholar",
    HREF: "https://scholar.google.com/citations?user=-K7OkFUAAAAJ&hl=en",
  },
  {
    NAME: "GitHub",
    ICON: "github",
    TEXT: "GitHub",
    HREF: "https://github.com/imranpollob",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "LinkedIn",
    HREF: "https://www.linkedin.com/in/imranpollob/",
  },
];

export const SCHOLAR_URL = SOCIALS.find((social) => social.ICON === "google-scholar")!.HREF;
export const GITHUB_URL = SOCIALS.find((social) => social.ICON === "github")!.HREF;
