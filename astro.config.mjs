import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // The apex domain redirects to www, so canonical URLs and the sitemap use www.
  site: "https://www.imranpollob.com",
  // The site-search page was removed; send old links to the homepage.
  redirects: {
    "/search": "/",
  },
  integrations: [
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
});
