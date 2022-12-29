import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: false, // vite has this included not
      // eslint: { lintCommand: "eslint ." }, this is where we would run eslint, if or when we configure it
      overlay: { initialIsOpen: false },
    }),
  ],
  base: "/new-website-test/",
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
