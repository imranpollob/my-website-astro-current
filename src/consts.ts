import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Imran Pollob",
  DESCRIPTION:
    "Imran Pollob's portfolio and tech blog: Researching Blockchain Security and developing smart contract vulnerability detection tools. Over 5 years of experience as a software engineer with diverse tech stacks.",
  AUTHOR: "Imran Pollob",
};

// Experience Page
export const EXPERIENCE: Page = {
  TITLE: "Experience",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Experience",
    HREF: "/experience",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Reach me via Email",
    ICON: "email",
    TEXT: "polboy777@gmail.com",
    HREF: "mailto:polboy777@gmail.com",
  },
  {
    NAME: "Check out my GitHub",
    ICON: "github",
    TEXT: "imranpollob",
    HREF: "https://github.com/imranpollob",
  },
  {
    NAME: "Connect on LinkedIn",
    ICON: "linkedin",
    TEXT: "imranpollob",
    HREF: "https://www.linkedin.com/in/imranpollob/",
  },
];
