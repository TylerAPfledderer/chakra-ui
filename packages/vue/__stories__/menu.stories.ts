import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h, ref } from "vue"

// Placeholder: Component will be imported once merged from feature/vue-ark-integration
// import { Menu } from "../src"

// Placeholder components for demonstration
const MenuRoot = {
  name: "MenuRoot",
  setup(_props: any, { slots }: any) {
    const isOpen = ref(false)
    return () =>
      h(
        "div",
        {
          style: { position: "relative", display: "inline-block" },
        },
        slots.default?.({
          isOpen,
          toggle: () => (isOpen.value = !isOpen.value),
        }),
      )
  },
}

const MenuTrigger = {
  name: "MenuTrigger",
  setup(_props: any, { slots }: any) {
    return () =>
      h(
        "button",
        {
          style: {
            padding: "8px 16px",
            borderRadius: "6px",
            border: "1px solid #e2e8f0",
            background: "white",
            cursor: "pointer",
          },
        },
        slots.default?.() ?? "Open Menu",
      )
  },
}

const MenuContent = {
  name: "MenuContent",
  setup(_props: any, { slots }: any) {
    return () =>
      h(
        "div",
        {
          style: {
            position: "absolute",
            top: "100%",
            left: "0",
            marginTop: "4px",
            minWidth: "160px",
            padding: "4px",
            background: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          },
        },
        slots.default?.(),
      )
  },
}

const MenuItem = {
  name: "MenuItem",
  props: {
    value: { type: String },
  },
  setup(_props: any, { slots }: any) {
    return () =>
      h(
        "div",
        {
          style: {
            padding: "8px 12px",
            borderRadius: "4px",
            cursor: "pointer",
          },
        },
        slots.default?.(),
      )
  },
}

const Menu = {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Content: MenuContent,
  Item: MenuItem,
}

const meta: Meta<typeof MenuRoot> = {
  title: "Components / Menu",
  component: MenuRoot,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => ({
    components: {
      MenuRoot: Menu.Root,
      MenuTrigger: Menu.Trigger,
      MenuContent: Menu.Content,
      MenuItem: Menu.Item,
    },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <button
          @click="isOpen = !isOpen"
          style="padding: 8px 16px; border-radius: 6px; border: 1px solid #e2e8f0; background: white; cursor: pointer;"
        >
          Open Menu
        </button>
        <div v-if="isOpen" style="position: absolute; margin-top: 4px; min-width: 160px; padding: 4px; background: white; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="padding: 8px 12px; border-radius: 4px; cursor: pointer;">New File</div>
          <div style="padding: 8px 12px; border-radius: 4px; cursor: pointer;">Open File</div>
          <div style="padding: 8px 12px; border-radius: 4px; cursor: pointer;">Save</div>
          <div style="height: 1px; background: #e2e8f0; margin: 4px 0;"></div>
          <div style="padding: 8px 12px; border-radius: 4px; cursor: pointer; color: #e53e3e;">Delete</div>
        </div>
      </div>
    `,
  }),
}

export const WithSubmenu: Story = {
  render: () => ({
    setup() {
      const isOpen = ref(false)
      const submenuOpen = ref(false)
      return { isOpen, submenuOpen }
    },
    template: `
      <div>
        <button
          @click="isOpen = !isOpen"
          style="padding: 8px 16px; border-radius: 6px; border: 1px solid #e2e8f0; background: white; cursor: pointer;"
        >
          File Menu
        </button>
        <div v-if="isOpen" style="position: absolute; margin-top: 4px; min-width: 180px; padding: 4px; background: white; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="padding: 8px 12px; border-radius: 4px; cursor: pointer;">New</div>
          <div
            @mouseenter="submenuOpen = true"
            @mouseleave="submenuOpen = false"
            style="padding: 8px 12px; border-radius: 4px; cursor: pointer; position: relative; display: flex; justify-content: space-between;"
          >
            <span>Open Recent</span>
            <span>▶</span>
            <div v-if="submenuOpen" style="position: absolute; left: 100%; top: 0; min-width: 160px; padding: 4px; background: white; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <div style="padding: 8px 12px; border-radius: 4px; cursor: pointer;">project.vue</div>
              <div style="padding: 8px 12px; border-radius: 4px; cursor: pointer;">main.ts</div>
              <div style="padding: 8px 12px; border-radius: 4px; cursor: pointer;">README.md</div>
            </div>
          </div>
          <div style="padding: 8px 12px; border-radius: 4px; cursor: pointer;">Save</div>
          <div style="padding: 8px 12px; border-radius: 4px; cursor: pointer;">Save As...</div>
        </div>
      </div>
    `,
  }),
}
