import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  // The apex domain redirects to www, so canonical URLs and the sitemap use www.
  site: "https://www.imranpollob.com",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/search"),
    }),
    solidJs(),
    tailwind({ applyBaseStyles: false }),
    pagefind(),
  ],
});
