# Imran Pollob — Portfolio & Blog

Welcome to my personal website and portfolio: [imranpollob.com](https://imranpollob.com)

This site showcases my professional overview, work experiences, projects, and technical blogs. Built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/), it is fast, minimalist, and fully responsive.

---

## 🚀 About This Project

- **Live Site:** [imranpollob.com](https://imranpollob.com)
- **Base Template:** [astro-sphere](https://github.com/markhorn-dev/astro-sphere) by [markhorn-dev](https://github.com/markhorn-dev)
- **Tech Stack:** Astro, Tailwind CSS, TypeScript, SolidJS (for stateful components)

## ✨ Features

- ⚡️ Lightning fast performance (100/100 Lighthouse)
- 📱 Fully responsive & accessible
- 🌗 Light/Dark theme toggle
- 📝 Markdown & MDX support
- 🔍 Searchable posts & projects
- 🗂️ Auto-generated sitemap & RSS feed
- 💻 Code blocks with copy-to-clipboard
- 🎨 Minimal, clean design
- 🧩 Animated UI (stars, meteors, etc.)
- 🔒 SEO-friendly & typesafe



## 🛠️ Getting Started

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
or
npm start
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

For network access:

- Development: `npm run dev:network`
- Preview: `npm run preview:network`

Other commands:

- Lint: `npm run lint`
- Fix lint issues: `npm run lint:fix`
- Create blog post: `npm run blog`

---

### 🔄 Keeping Up to Date with Base Template

To keep your project updated with the latest changes from the base template ([astro-sphere](https://github.com/markhorn-dev/astro-sphere)):

1. Add the base repo as a remote:
   ```bash
   git remote add upstream https://github.com/markhorn-dev/astro-sphere.git
   ```
2. Fetch and merge updates:
   ```bash
   git fetch upstream
   git merge upstream/main
   ```

Resolve any conflicts as needed to keep your customizations.


## 📝 Customization

- All content (projects, blogs, experience) is managed via Markdown/MDX in the `src/content/` directory.
- Components and layouts are in `src/components/` and `src/layouts/`.
- Styles are managed with Tailwind CSS (`styles/global.css`).

