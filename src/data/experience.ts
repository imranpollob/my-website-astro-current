// Sources: public/resume.pdf and the former src/content/experience/*.md entries.

export type Role = {
    organization: string;
    role: string;
    period: string;
    location?: string;
    logo?: string;
    summary: string;
    highlights?: string[];
};

// Industry roles held before the Ph.D. (Nov 2016 – Jul 2021).
export const industryExperience: Role[] = [
    {
        organization: "Cefalo",
        role: "Software Engineer",
        period: "Sep 2019 – Jul 2021",
        logo: "/image/company-logos/cefalo.png",
        summary:
            "Worked on an internal data-collection framework, client web projects, and the cloud infrastructure behind them.",
        highlights: [
            "Built Python data pipelines and scrapers that aggregated data from 250+ sources for analysts.",
            "Managed AWS servers and cloud-service integrations for production systems.",
            "Developed features for Cefalo's internal recruitment platform (Laravel, Vue.js).",
        ],
    },
    {
        organization: "Rapid Web Services",
        role: "Full-Stack Software Engineer",
        period: "May 2018 – Sep 2019",
        logo: "/image/company-logos/rapid-web-services.png",
        summary:
            "Developed and maintained the SeeBiz inventory management platform, used by multiple businesses and handling 50K+ requests per day.",
        highlights: [
            "Built RESTful APIs and features for invoicing, multi-warehouse tracking, shrinkage detection, reorder alerts, and automated dropshipping.",
            "Worked across PHP (Laravel), Node.js, and React, and automated deployment with CI/CD.",
        ],
    },
    {
        organization: "Codalo",
        role: "Software Engineer",
        period: "Nov 2016 – Apr 2018",
        logo: "/image/company-logos/codalo.png",
        summary:
            "Built product prototypes, including a school management system later used by 20+ institutions in Bangladesh.",
        highlights: [
            "Covered student and teacher administration, fees, courses, attendance, grading, and parent notifications.",
            "Planned product workflows, gathered client feedback, tested releases, and provided fixes and support.",
        ],
    },
];

export type Teaching = {
    role: string;
    organization: string;
    period: string;
    courses: { name: string; detail: string }[];
};

export const teaching: Teaching = {
    role: "Graduate Teaching Assistant",
    organization: "Wayne State University",
    period: "Aug 2021 – Present",
    courses: [
        { name: "Problem Solving and Programming (C++)", detail: "Created all course materials" },
        { name: "Java Programming", detail: "Developed and delivered course materials and final project" },
        { name: "Software Engineering", detail: "Mentored student teams through Agile projects" },
        { name: "Computer Architecture and Organization", detail: "Led the lab section" },
        { name: "Bioinformatics Programming Lab (R)", detail: "Facilitated hands-on labs" },
    ],
};

export type Degree = {
    degree: string;
    field: string;
    institution: string;
    period: string;
};

export const education: Degree[] = [
    {
        degree: "Ph.D. Candidate",
        field: "Computer Science",
        institution: "Wayne State University",
        period: "2021 – Present",
    },
    {
        degree: "M.Sc.",
        field: "Information Technology",
        institution: "Jahangirnagar University",
        period: "2017",
    },
    {
        degree: "B.Sc.",
        field: "Information Technology",
        institution: "Jahangirnagar University",
        period: "2015",
    },
];
