import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://antoniotorres.dev",
  base: "/",
  trailingSlash: "never",
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
