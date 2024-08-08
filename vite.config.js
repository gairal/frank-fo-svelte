/// <reference types="vitest" />
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { svelteTesting } from "@testing-library/svelte/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// biome-ignore lint/style/noDefaultExport: exception
export default defineConfig({
  plugins: [
    svelte(),
    svelteTesting(),
    VitePWA({
      devOptions: { enabled: process.env.NODE_ENV !== "production" },
      includeAssets: [
        "favicon.svg",
        "robots.txt",
        "apple-touch-icon.png",
        "img/*.jpg",
        "img/*.png",
      ],
      manifest: {
        // biome-ignore lint/style/useNamingConvention: exception
        background_color: "#fff",
        description:
          "Frank Gairal online C.V. looking for a position full-stack engineer in Paris",
        display: "standalone",
        icons: [
          {
            sizes: "192x192",
            src: "/pwa-192x192.png",
            type: "image/png",
          },
          {
            sizes: "512x512",
            src: "/pwa-512x512.png",
            type: "image/png",
          },
          {
            purpose: "any maskable",
            sizes: "512x512",
            src: "/pwa-512x512.png",
            type: "image/png",
          },
        ],
        // biome-ignore lint/style/useNamingConvention: exception
        manifest_version: 2,
        name: "Frank Gairal",
        // biome-ignore lint/style/useNamingConvention: exception
        short_name: "frank g.",
        // biome-ignore lint/style/useNamingConvention: exception
        start_url: "https://frank.gairal.rocks/",
        // biome-ignore lint/style/useNamingConvention: exception
        theme_color: "#581c87",
        version: "5.0.0",
      },
    }),
  ],
  test: {
    coverage: {
      reporter: ["text", "html", "json-summary", "json"],
      reportOnFailure: true,
      thresholds: {
        lines: 90,
        branches: 80,
        functions: 80,
        statements: 80,
      },
      include: ["src/**"],
      exclude: ["src/**/*.d.ts"],
    },
    environment: "happy-dom",
    include: ["src/**/*.test.ts"],
    setupFiles: ["./test/setup.ts"],
  },
});
