import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/new-website-test/",
  build: {
    assetsDir: ".",
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
