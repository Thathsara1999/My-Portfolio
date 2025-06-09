import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/My-Portfolio/", // 👈 This is the fix
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
