import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages serves the library from /English-library-/ while Vercel serves it at the project root.
const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  root: "source",
  publicDir: "../public",
  plugins: [react(), tailwindcss()],
  base: isVercel ? "/" : "/English-library-/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
