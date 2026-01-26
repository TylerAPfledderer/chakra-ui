import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { defineComponent, h, ref } from "vue"

// Placeholder: Component will be imported once merged from feature/vue-ark-integration
// import { Accordion } from "../src"

// Placeholder component for demonstration
const AccordionRoot = defineComponent({
  name: "AccordionRoot",
  props: {
    multiple: { type: Boolean, default: false },
    collapsible: { type: Boolean, default: true },
  },
  setup(_, { slots }) {
    return () =>
      h(
        "div",
        {
          style: {
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            overflow: "hidden",
          },
        },
        slots.default?.(),
      )
  },
})

const AccordionItem = defineComponent({
  name: "AccordionItem",
  props: {
    value: { type: String, required: true },
  },
  setup(_, { slots }) {
    const isOpen = ref(false)
    return () =>
      h(
        "div",
        {
          style: {
            borderBottom: "1px solid #e2e8f0",
          },
        },
        [
          h(
            "button",
            {
              style: {
                width: "100%",
                padding: "12px 16px",
                textAlign: "left",
                fontWeight: "500",
                background: "none",
                border: "none",
                cursor: "pointer",
              },
              onClick: () => (isOpen.value = !isOpen.value),
            },
            slots.trigger?.() ?? "Accordion Item",
          ),
          isOpen.value
            ? h(
                "div",
                {
                  style: {
                    padding: "12px 16px",
                  },
                },
                slots.content?.(),
              )
            : null,
        ],
      )
  },
})

const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
}

const meta = {
  title: "Components / Accordion",
  component: AccordionRoot,
  tags: ["autodocs"],
  argTypes: {
    multiple: {
      control: "boolean",
    },
    collapsible: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof AccordionRoot>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => ({
    components: {
      AccordionRoot: Accordion.Root,
      AccordionItem: Accordion.Item,
    },
    template: `
      <AccordionRoot>
        <AccordionItem value="item-1">
          <template #trigger>What is Chakra UI?</template>
          <template #content>
            Chakra UI is a comprehensive component library for building accessible,
            high-quality web applications and design systems.
          </template>
        </AccordionItem>
        <AccordionItem value="item-2">
          <template #trigger>How do I get started?</template>
          <template #content>
            Install the package using your preferred package manager and wrap your
            app with the ChakraProvider component.
          </template>
        </AccordionItem>
        <AccordionItem value="item-3">
          <template #trigger>Is it accessible?</template>
          <template #content>
            Yes! All Chakra UI components follow WAI-ARIA guidelines and are
            designed to be fully accessible.
          </template>
        </AccordionItem>
      </AccordionRoot>
    `,
  }),
}

export const Multiple: Story = {
  render: () => ({
    components: {
      AccordionRoot: Accordion.Root,
      AccordionItem: Accordion.Item,
    },
    template: `
      <AccordionRoot :multiple="true">
        <AccordionItem value="item-1">
          <template #trigger>Section 1</template>
          <template #content>Content for section 1</template>
        </AccordionItem>
        <AccordionItem value="item-2">
          <template #trigger>Section 2</template>
          <template #content>Content for section 2</template>
        </AccordionItem>
        <AccordionItem value="item-3">
          <template #trigger>Section 3</template>
          <template #content>Content for section 3</template>
        </AccordionItem>
      </AccordionRoot>
    `,
  }),
}
