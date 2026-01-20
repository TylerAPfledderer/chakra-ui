import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"

// Placeholder: Component will be imported once merged from feature/vue-ark-integration
// import { Button } from "../src"

// Placeholder component for demonstration
const Button = {
  name: "Button",
  props: {
    variant: { type: String, default: "solid" },
    size: { type: String, default: "md" },
    colorPalette: { type: String, default: "gray" },
  },
  setup(props: any, { slots }: any) {
    return () =>
      h(
        "button",
        {
          style: {
            padding: "8px 16px",
            borderRadius: "6px",
            fontWeight: "500",
            cursor: "pointer",
          },
        },
        slots.default?.() ?? "Button",
      )
  },
}

const meta: Meta<typeof Button> = {
  title: "Components / Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost", "subtle"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    colorPalette: {
      control: "select",
      options: ["gray", "red", "green", "blue", "teal", "purple"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Click me</Button>',
  }),
  args: {
    variant: "solid",
    size: "md",
    colorPalette: "blue",
  },
}

export const Variants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 8px; align-items: center;">
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="subtle">Subtle</Button>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 8px; align-items: center;">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `,
  }),
}
