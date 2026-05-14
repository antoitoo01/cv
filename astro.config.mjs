import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://antoitoo01.github.io",
  base: "/cv",
  trailingSlash: "ignore",
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "monthly",
      priority: 0.9,
      lastmod: new Date(),
    }),
  ],
  build: {
    assets: "assets",
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
