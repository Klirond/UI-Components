import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  format: ["esm"],
  deps: {
    neverBundle: ["react", "react-dom", "react-router-dom"],
  },
  css: {
    preprocess_css: (content, id) => {
      return content;
    },
  },
  clean: true,
});
