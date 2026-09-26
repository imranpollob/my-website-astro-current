# Imran Pollob — Personal Website

Source for my personal website: [imranpollob.com](https://www.imranpollob.com)

The site presents my research in security and decentralized systems, publications, projects, and industry experience. Built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/), it is fast, minimalist, and fully responsive.

---

## 🚀 About This Project

- **Live Site:** [imranpollob.com](https://www.imranpollob.com)
- **Base Template:** [astro-sphere](https://github.com/markhorn-dev/astro-sphere) by [markhorn-dev](https://github.com/markhorn-dev)
- **Tech Stack:** Astro, Tailwind CSS, TypeScript

## ✨ Features

- 📱 Fully responsive & accessible
- 🌗 Light/Dark theme toggle
- 🗂️ Auto-generated sitemap
- 🎨 Minimal, clean design
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

- Site content is structured data in `src/data/`:
  - `research.ts`: research vision, areas, research projects, and publications
  - `projects.ts`: tools, installable tools, engineering projects, and the homepage selection
  - `experience.ts`: industry roles, teaching, and education
- Identity, navigation, and social/contact links live in `src/consts.ts`.
- Adding a paper or project normally means adding one entry to the matching data file.
- The privacy policy is Markdown in `src/content/legal/`.
- Components and layouts are in `src/components/` and `src/layouts/`.
- Styles are managed with Tailwind CSS (`styles/global.css`).

