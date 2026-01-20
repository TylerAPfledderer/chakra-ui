import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview, VueRenderer } from "@storybook/vue3-vite"
import { h } from "vue"
import { sharedParameters } from "../../../.storybook/shared"
// Import React's defaultSystem since it's framework-agnostic
import { defaultSystem } from "../../react/src"
import { ChakraProvider } from "../src"
// Import generated Panda CSS styles for theme support
import "../styled-system/styles.css"

export const decorators = [
  withThemeByClassName<VueRenderer>({
    defaultTheme: "light",
    themes: {
      light: "light",
      dark: "dark",
    },
  }),
  (story: () => ReturnType<typeof h>) => {
    return {
      setup() {
        return () =>
          h(
            ChakraProvider,
            { value: defaultSystem },
            { default: () => h(story()) },
          )
      },
    }
  },
]

const preview: Preview = {
  parameters: sharedParameters,
  decorators,
}

export default preview
