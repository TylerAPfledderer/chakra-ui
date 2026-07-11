import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  presets: ["@chakra-ui/panda-preset"],
  preflight: false,
  include: ["./src/**/*.{ts,tsx}"],
  exclude: [],
  jsxFramework: "vue",
  jsxFactory: "chakra",
  jsxStyleProps: "all",
  outdir: "src/panda-system",
  outExtension: "js",
  validation: "none",
})
