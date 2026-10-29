import type { ResourceLink } from "@types";
import { GITHUB_URL } from "@consts";

export type ToolCategory = "Featured Tools" | "Useful Utilities" | "Learning & Specialized";

export type Tool = {
    // Display order across all categories.
    priority: number;
    // GitHub repository name under GITHUB_URL.
    repo: string;
    title: string;
    category: ToolCategory;
    // "online" opens in the browser; "install" links to a package or release page.
    type: "online" | "install";
    url: string;
    // Hue (0–360) for the glyph tile background.
    hue: number;
    glyph: string;
};

export const tools: Tool[] = [
    { priority: 1, repo: "whiteboard", title: "Whiteboard", category: "Featured Tools", type: "online", url: "https://imranpollob.github.io/whiteboard/", hue: 200, glyph: "🖊️" },
    { priority: 2, repo: "text-diff-checker", title: "Text Diff Checker", category: "Featured Tools", type: "online", url: "https://imranpollob.github.io/text-diff-checker/", hue: 10, glyph: "🔀" },
    { priority: 3, repo: "markdown-previewer", title: "Markdown Previewer", category: "Featured Tools", type: "online", url: "https://imranpollob.github.io/markdown-previewer/", hue: 265, glyph: "📝" },
    { priority: 4, repo: "snippet-notes", title: "Snippet – Rich Text Notes", category: "Featured Tools", type: "online", url: "https://imranpollob.github.io/snippet-notes/", hue: 45, glyph: "✂️" },
    { priority: 5, repo: "pdf-text-to-speech-reader", title: "PDF Text-to-Speech Reader", category: "Featured Tools", type: "online", url: "https://imranpollob.github.io/pdf-text-to-speech-reader/", hue: 0, glyph: "🔊" },
    { priority: 6, repo: "crypto-chart-viewer", title: "Crypto Chart Viewer", category: "Featured Tools", type: "online", url: "https://imranpollob.github.io/crypto-chart-viewer", hue: 140, glyph: "📈" },
    { priority: 7, repo: "word-character-counter", title: "Word and Character Counter", category: "Useful Utilities", type: "online", url: "https://imranpollob.github.io/word-character-counter/", hue: 215, glyph: "🔢" },
    { priority: 8, repo: "pomodoro-timer", title: "Pomodoro Timer", category: "Useful Utilities", type: "install", url: "https://github.com/imranpollob/pomodoro-timer/releases", hue: 15, glyph: "🍅" },
    { priority: 9, repo: "slugcopy", title: "Slugcopy", category: "Useful Utilities", type: "install", url: "https://www.npmjs.com/package/slugcopy", hue: 205, glyph: "🔗" },
    { priority: 10, repo: "bangla-quran", title: "Bangla Quran Reader", category: "Learning & Specialized", type: "online", url: "https://banglaquran.app", hue: 160, glyph: "📖" },
    { priority: 11, repo: "bibtex-to-bibitem", title: "BibTeX to Bibitem Converter", category: "Learning & Specialized", type: "online", url: "https://imranpollob.github.io/bibtex-to-bibitem/", hue: 285, glyph: "📚" },
    { priority: 12, repo: "github-profile-analyzer", title: "GitHub Profile Analyzer", category: "Learning & Specialized", type: "online", url: "https://imranpollob.github.io/github-profile-analyzer/", hue: 250, glyph: "🐙" },
    { priority: 13, repo: "mental-math-trainer", title: "Mental Math Trainer", category: "Learning & Specialized", type: "online", url: "https://imranpollob.github.io/mental-math-trainer/", hue: 30, glyph: "🧮" },
    { priority: 14, repo: "online-spelling-quiz", title: "Online Spelling Quiz", category: "Learning & Specialized", type: "online", url: "https://imranpollob.github.io/online-spelling-quiz/", hue: 330, glyph: "🔤" },
    { priority: 15, repo: "online-trivia-quiz", title: "Online Trivia Quiz", category: "Learning & Specialized", type: "online", url: "https://imranpollob.github.io/online-trivia-quiz/", hue: 55, glyph: "❓" },
];

export const toolCategories: ToolCategory[] = ["Featured Tools", "Useful Utilities", "Learning & Specialized"];

export const toolsIn = (category: ToolCategory) =>
    tools.filter((tool) => tool.category === category).sort((a, b) => a.priority - b.priority);

// Short label shown on the tile, derived from where the link goes.
export function toolKind(tool: Tool): string {
    if (tool.type === "online") return "Web app";
    return tool.url.includes("npmjs.com") ? "CLI · npm" : "Desktop app";
}

export function toolLinks(tool: Tool): ResourceLink[] {
    const primary: ResourceLink =
        tool.type === "online"
            ? { label: "Live", href: tool.url, icon: "globe" }
            : tool.url.includes("npmjs.com")
              ? { label: "Install", href: tool.url, icon: "terminal" }
              : { label: "Download", href: tool.url, icon: "download" };
    return [primary, { label: "GitHub", href: `${GITHUB_URL}/${tool.repo}`, icon: "github" }];
}
