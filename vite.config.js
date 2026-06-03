import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      outputDir: "./dist/",
    }),
  ],
  build: {
    lib: {
      entry: "./src/main.jsx",
      name: "ui-components",
      formats: ["es"],
      fileName: "index",
    },
  },
});
