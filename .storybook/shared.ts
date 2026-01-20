/**
 * Shared Storybook configuration for all packages.
 * Framework-specific configurations should extend this.
 */

export const sharedAddons = ["@storybook/addon-a11y", "@storybook/addon-themes"]

export const sharedCore = {
  disableTelemetry: true,
  disableProjectJson: true,
}

export const sharedParameters = {
  options: {
    storySort: {
      method: "alphabetical" as const,
      order: [
        "Layout",
        "Typography",
        "Components",
        "Charts",
        "Rich Text Editor",
      ],
    },
  },
  actions: { disable: true },
  controls: { disable: true },
}
