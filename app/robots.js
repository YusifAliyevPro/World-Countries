import { baseURL } from "../lib/constants";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: " ",
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
