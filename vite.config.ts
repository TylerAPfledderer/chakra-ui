/// <reference types="vitest" />
import vueJsx from "@vitejs/plugin-vue-jsx"
import { resolve } from "path"
import { defineConfig } from "vite"

const alias = {
  "@chakra-ui/react": resolve("packages/react/src"),
  "@chakra-ui/charts": resolve("packages/charts/src"),
  "@chakra-ui/vue": resolve("packages/vue/src"),
  compositions: resolve("apps/compositions/src"),
}

export default defineConfig({
  resolve: { alias },
  test: {
    globals: true,
    watch: false,
    // Two projects so react (react-jsx) and vue (Vue's JSX runtime) never
    // share a transform pipeline — the vueJsx plugin loads only for the vue
    // project, leaving react's .tsx compiled as react-jsx.
    projects: [
      {
        resolve: { alias },
        test: {
          name: "react",
          globals: true,
          environment: "jsdom",
          include: ["**/*test.{ts,tsx}"],
          exclude: ["**/node_modules/**", "**/dist/**", "packages/vue/**"],
          setupFiles: ["vitest.setup.ts"],
        },
      },
      {
        plugins: [vueJsx()],
        resolve: { alias },
        test: {
          name: "vue",
          globals: true,
          environment: "jsdom",
          include: ["packages/vue/**/*test.{ts,tsx}"],
          setupFiles: ["vitest.setup.ts"],
        },
      },
    ],
    coverage: {
      provider: "v8",
      include: ["packages"],
    },
    benchmark: {
      include: ["**/*.bench.{ts,tsx}"],
      exclude: ["node_modules", "dist"],
    },
  },
})
