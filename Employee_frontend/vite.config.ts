import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineConfig as defineTestConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
    },
  },
  test: {
    setupFiles: ["./src/tests/setupTests.ts"],
    globals: true,
    environment: "jsdom",
  },
});
