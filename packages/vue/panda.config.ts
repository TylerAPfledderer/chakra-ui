import { defineConfig } from "@pandacss/dev"
import { cssVarsPrefix, defaultThemePreset } from "./src/theme"

export default defineConfig({
  presets: [defaultThemePreset],
  preflight: true,
  prefix: { cssVar: cssVarsPrefix },
  include: ["./src/**/*.{ts,tsx}"],
  exclude: [],
  jsxFramework: "vue",
  jsxFactory: "chakra",
  jsxStyleProps: "all",
  outdir: "src/styled-system",
  outExtension: "js",
  validation: "none",
})
