import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import { defineComponent, h } from "vue"
import { ChakraProvider } from "../src/chakra-provider"
import { useMultiStyleConfig, useStyleConfig } from "../src/use-style-config"

// Mock theme with component styles
const mockTheme = {
  colors: {
    blue: {
      500: "#3182ce",
      600: "#2b6cb0",
    },
    gray: {
      100: "#f7fafc",
      200: "#edf2f7",
      500: "#718096",
    },
    white: "#ffffff",
  },
  components: {
    // Single-part component
    Button: {
      baseStyle: {
        fontWeight: "semibold",
        borderRadius: "md",
      },
      sizes: {
        sm: {
          fontSize: "sm",
          px: 3,
          py: 1,
        },
        md: {
          fontSize: "md",
          px: 4,
          py: 2,
        },
        lg: {
          fontSize: "lg",
          px: 6,
          py: 3,
        },
      },
      variants: {
        solid: {
          bg: "blue.500",
          color: "white",
        },
        outline: {
          border: "2px solid",
          borderColor: "blue.500",
          color: "blue.500",
        },
        ghost: {
          bg: "transparent",
          color: "blue.500",
        },
      },
      defaultProps: {
        size: "md",
        variant: "solid",
      },
    },
    // Multi-part component
    Accordion: {
      baseStyle: {
        root: {
          width: "100%",
        },
        item: {
          borderTop: "1px solid",
          borderColor: "gray.200",
        },
        button: {
          py: 4,
          px: 4,
          fontWeight: "medium",
        },
        panel: {
          pb: 4,
          px: 4,
        },
        icon: {
          fontSize: "1.25em",
        },
      },
      sizes: {
        sm: {
          button: { py: 2, px: 2, fontSize: "sm" },
          panel: { pb: 2, px: 2, fontSize: "sm" },
        },
        md: {
          button: { py: 4, px: 4, fontSize: "md" },
          panel: { pb: 4, px: 4, fontSize: "md" },
        },
      },
      variants: {
        enclosed: {
          root: {
            border: "1px solid",
            borderColor: "gray.200",
            borderRadius: "md",
          },
          item: {
            borderTop: "none",
            borderBottom: "1px solid",
            borderColor: "gray.200",
          },
        },
      },
      defaultProps: {
        size: "md",
      },
    },
  },
}

describe("useStyleConfig", () => {
  it("returns base styles for a component", () => {
    let styles: any = null

    const TestChild = defineComponent({
      setup() {
        styles = useStyleConfig("Button", {})
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(styles.value).toMatchObject({
      fontWeight: "semibold",
      borderRadius: "md",
    })
  })

  it("applies default variant from theme", () => {
    let styles: any = null

    const TestChild = defineComponent({
      setup() {
        styles = useStyleConfig("Button", {})
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    // Default variant is 'solid'
    expect(styles.value).toMatchObject({
      bg: "blue.500",
      color: "white",
    })
  })

  it("applies specified variant", () => {
    let styles: any = null

    const TestChild = defineComponent({
      setup() {
        styles = useStyleConfig("Button", { variant: "outline" })
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(styles.value).toMatchObject({
      border: "2px solid",
      borderColor: "blue.500",
      color: "blue.500",
    })
  })

  it("applies default size from theme", () => {
    let styles: any = null

    const TestChild = defineComponent({
      setup() {
        styles = useStyleConfig("Button", {})
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    // Default size is 'md'
    expect(styles.value).toMatchObject({
      fontSize: "md",
      px: 4,
      py: 2,
    })
  })

  it("applies specified size", () => {
    let styles: any = null

    const TestChild = defineComponent({
      setup() {
        styles = useStyleConfig("Button", { size: "lg" })
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(styles.value).toMatchObject({
      fontSize: "lg",
      px: 6,
      py: 3,
    })
  })

  it("merges base, size, and variant styles correctly", () => {
    let styles: any = null

    const TestChild = defineComponent({
      setup() {
        styles = useStyleConfig("Button", { variant: "ghost", size: "sm" })
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    // Should have base + size + variant
    expect(styles.value).toMatchObject({
      // Base
      fontWeight: "semibold",
      borderRadius: "md",
      // Size (sm)
      fontSize: "sm",
      px: 3,
      py: 1,
      // Variant (ghost)
      bg: "transparent",
      color: "blue.500",
    })
  })

  it("returns empty object for non-existent component", () => {
    let styles: any = null

    const TestChild = defineComponent({
      setup() {
        styles = useStyleConfig("NonExistentComponent", {})
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(styles.value).toEqual({})
  })
})

describe("useMultiStyleConfig", () => {
  it("returns styles for all slots", () => {
    let styles: any = null

    const TestChild = defineComponent({
      setup() {
        styles = useMultiStyleConfig("Accordion", {})
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(styles.value).toHaveProperty("root")
    expect(styles.value).toHaveProperty("item")
    expect(styles.value).toHaveProperty("button")
    expect(styles.value).toHaveProperty("panel")
    expect(styles.value).toHaveProperty("icon")
  })

  it("applies base styles to each slot", () => {
    let styles: any = null

    const TestChild = defineComponent({
      setup() {
        styles = useMultiStyleConfig("Accordion", {})
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(styles.value.root).toMatchObject({ width: "100%" })
    expect(styles.value.item).toMatchObject({
      borderTop: "1px solid",
      borderColor: "gray.200",
    })
    expect(styles.value.button).toMatchObject({
      fontWeight: "medium",
    })
  })

  it("applies size to each slot", () => {
    let styles: any = null

    const TestChild = defineComponent({
      setup() {
        styles = useMultiStyleConfig("Accordion", { size: "sm" })
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(styles.value.button).toMatchObject({
      py: 2,
      px: 2,
      fontSize: "sm",
    })
    expect(styles.value.panel).toMatchObject({
      pb: 2,
      px: 2,
      fontSize: "sm",
    })
  })

  it("applies variant to each slot", () => {
    let styles: any = null

    const TestChild = defineComponent({
      setup() {
        styles = useMultiStyleConfig("Accordion", { variant: "enclosed" })
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(styles.value.root).toMatchObject({
      border: "1px solid",
      borderColor: "gray.200",
      borderRadius: "md",
    })
    expect(styles.value.item).toMatchObject({
      borderTop: "none",
      borderBottom: "1px solid",
      borderColor: "gray.200",
    })
  })

  it("merges base, size, and variant for slots", () => {
    let styles: any = null

    const TestChild = defineComponent({
      setup() {
        styles = useMultiStyleConfig("Accordion", {
          size: "sm",
          variant: "enclosed",
        })
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    // Root should have base + variant
    expect(styles.value.root).toMatchObject({
      width: "100%", // base
      border: "1px solid", // variant
      borderRadius: "md", // variant
    })

    // Button should have base + size
    expect(styles.value.button).toMatchObject({
      fontWeight: "medium", // base
      py: 2, // size (sm)
      px: 2, // size (sm)
      fontSize: "sm", // size (sm)
    })
  })

  it("returns object with root key for non-existent component", () => {
    let styles: any = null

    const TestChild = defineComponent({
      setup() {
        styles = useMultiStyleConfig("NonExistentComponent", {})
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    // Should return { root: {} } for non-existent component
    expect(styles.value).toEqual({ root: {} })
  })
})
