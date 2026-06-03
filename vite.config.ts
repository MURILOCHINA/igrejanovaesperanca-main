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
    // Isso impede que o código do TanStack quebre ao procurar variáveis globais de servidor
    "process.env": {},
  },
  build: {
    rollupOptions: {
      // Força o Rollup a ignorar o erro do async_hooks e compilar o resto do código
      external: ["node:async_hooks"],
    },
  },
});