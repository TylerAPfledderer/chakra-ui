import type { StorybookConfig } from "@storybook/vue3-vite"
import { readFileSync } from "node:fs"
import { join } from "node:path"
import { sharedAddons, sharedCore } from "../../../.storybook/shared"

const config: StorybookConfig = {
  stories: ["../__stories__/*.stories.ts"],
  addons: sharedAddons,
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  core: sharedCore,
  // Disable refs autodiscovery - prevents loading external storybooks
  // from package.json storybook fields (e.g., @chakra-ui/panda-preset)
  refs: async () => ({}),
  previewHead: (head) =>
    head +
    readFileSync(
      join(__dirname, "../../../.storybook/preview-head.html"),
      "utf8",
    ),
}

export default config
