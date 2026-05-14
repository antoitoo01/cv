import type { APIRoute } from "astro";
import { SITE } from "../config";

export const GET: APIRoute = () => {
  const body = `
User-agent: *
Allow: /
Sitemap: ${SITE.url}/sitemap-index.xml
  `.trim();

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
};
