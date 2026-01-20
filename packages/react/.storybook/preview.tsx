import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview, ReactRenderer } from "@storybook/react-vite"
import React from "react"
import { sharedParameters } from "../../../.storybook/shared"
import { ColorModeProvider } from "../../../apps/compositions/src/ui/color-mode"
import { ChakraProvider, createSystem, defaultConfig } from "../src"

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Inter, sans-serif" },
        body: { value: "Inter, sans-serif" },
        mono: { value: "Roboto Mono, monospace" },
      },
    },
  },
})

const preview: Preview = {
  parameters: sharedParameters,
  decorators: [
    withThemeByClassName<ReactRenderer>({
      defaultTheme: "light",
      themes: {
        light: "light",
        dark: "dark",
      },
    }),
    (Story, context) => {
      return (
        <ColorModeProvider
          forcedTheme={context.globals.theme}
          enableSystem={false}
        >
          <ChakraProvider value={system}>
            <Story />
          </ChakraProvider>
        </ColorModeProvider>
      )
    },
  ],
}

export default preview
