import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  root: "source",
  publicDir: "../public",
  plugins: [react(), tailwindcss()],
  base: "/English-library-/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
