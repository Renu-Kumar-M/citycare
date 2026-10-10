import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBase = repository && !repository.endsWith(".github.io")
  ? `/${repository}/`
  : "/";
const base = process.env.VITE_BASE_PATH || process.env.BASE_PATH || githubPagesBase;
const port = Number(process.env.PORT || 5173);

export default defineConfig({
  root,
  base,
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port,
    strictPort: true,
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    port,
    allowedHosts: true,
  },
  build: {
    outDir: path.resolve(root, "dist/public"),
    emptyOutDir: true,
  },
});
