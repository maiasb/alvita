import type { NextConfig } from "next";

// No GitHub Pages o site vira estático e fica em /alvita. O workflow define PAGES=true.
const pages = process.env.PAGES === "true";
const basePath = pages ? (process.env.BASE_PATH ?? "/alvita") : "";

const nextConfig: NextConfig = {
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  /* config options here */
  // PPR (cacheComponents) não existe em export estático, então só vale fora do Pages.
  ...(pages
    ? {
        output: "export" as const,
        basePath,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : { cacheComponents: true, partialPrefetching: true }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
