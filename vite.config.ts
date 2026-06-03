import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", // <--- ADICIONE ESTA LINHA EXATAMENTE AQUI
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
      external: ["node:async_hooks"],
    },
  },
});