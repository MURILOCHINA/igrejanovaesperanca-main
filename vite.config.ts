import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env": {},
  },
  build: {
    rollupOptions: {
      // Ignora o erro do async_hooks e força a geração dos arquivos de visualização
      external: ["node:async_hooks"],
    },
  },
});