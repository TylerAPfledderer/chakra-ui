import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  presets: ["@chakra-ui/panda-preset"],
  preflight: true,
  include: ["./src/**/*.{ts,vue}", "./__stories__/**/*.{ts,vue}"],
  exclude: [],
  outdir: "styled-system",
  jsxFramework: "vue",
})
