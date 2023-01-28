import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: false, // vite has this included now
      eslint: { lintCommand: "eslint ." },
      overlay: { initialIsOpen: false },
    }),
  ],
  base: "/emission-hub/",
  build: {
    copyPublicDir: false,
    outDir: "build",
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
