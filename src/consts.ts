import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "M M Imran (Pollob)",
  HOME_TITLE: "M M Imran (Pollob) — Blockchain Security Researcher",
  DESCRIPTION:
    "Blockchain security and privacy researcher at Wayne State University. Ethereum accounts, smart contracts, and zero-knowledge systems. Ph.D. expected Summer 2027.",
  AUTHOR: "M M Imran (Pollob)",
};

// Identity shown in the hero, metadata, and structured data.
export const PROFILE = {
  NAME: "M M Imran (Pollob)",
  // Name used on publications and the CV.
  PUBLICATION_NAME: "M M Imran",
  HEADLINE: "Blockchain Security & Privacy Researcher",
  THEMES: ["Smart Contract Security", "Programmable Accounts", "Privacy", "Zero-Knowledge Systems"],
  AFFILIATION: "Wayne State University",
  LOCATION: "Detroit, MI",
  EMAIL: "mmimran@wayne.edu",
  PHOTO: "/image/imran-pollob.jpg",
  CV_URL: "/academic-cv.pdf",
  RESUME_URL: "/industry-research-resume.pdf",
  EXPECTED_GRADUATION: "Summer 2027",
  JOB_MARKET: "Seeking tenure-track faculty and industry research positions in blockchain security.",
};

// Research Page
export const RESEARCH: Page = {
  TITLE: "Research",
  SEO_TITLE: "Research: Blockchain Security, Privacy & ZK",
  DESCRIPTION:
    "Research on security and privacy in decentralized, programmable, and zero-knowledge systems, with AuthGuard-7702, PrivGas, ZKScan, and Secure-BSM.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  SEO_TITLE: "Projects: Open-Source Tools & Engineering",
  DESCRIPTION:
    "Research artifacts, security and protocol engineering, and open-source software by Imran Pollob.",
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
  { TEXT: "Teaching", HREF: "/teaching" },
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
