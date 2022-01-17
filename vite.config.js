import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    svelte(),
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
        manifest_version: 2,
        name: "Frank Gairal",
        short_name: "frank g.",
        start_url: "https://frank.gairal.rocks/",
        theme_color: "#581c87",
        version: "5.0.0",
      },
    }),
  ],
});
