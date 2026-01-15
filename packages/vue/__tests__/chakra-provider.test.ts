import { mount } from "@vue/test-utils"
import { describe, expect, it, vi } from "vitest"
import { defineComponent, h, inject } from "vue"
import { ChakraBaseProvider, ChakraProvider } from "../src/chakra-provider"
import { ChakraContextKey, ColorModeKey, ThemeKey } from "../src/types"

// Mock theme for testing
const mockTheme = {
  colors: {
    blue: {
      500: "#3182ce",
    },
    gray: {
      100: "#f7fafc",
      800: "#1a202c",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
      },
      variants: {
        solid: {
          bg: "blue.500",
        },
      },
      defaultProps: {
        variant: "solid",
      },
    },
  },
}

describe("ChakraProvider", () => {
  it("renders children correctly", () => {
    const TestChild = defineComponent({
      setup() {
        return () => h("div", { "data-testid": "child" }, "Hello")
      },
    })

    const wrapper = mount(ChakraProvider, {
      props: {
        theme: mockTheme,
      },
      slots: {
        default: () => h(TestChild),
      },
    })

    expect(wrapper.find('[data-testid="child"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="child"]').text()).toBe("Hello")
  })

  it("provides theme context to children", () => {
    let injectedTheme: any = null

    const TestChild = defineComponent({
      setup() {
        injectedTheme = inject(ThemeKey)
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: {
        theme: mockTheme,
      },
      slots: {
        default: () => h(TestChild),
      },
    })

    expect(injectedTheme).not.toBeNull()
    expect(injectedTheme.value).toEqual(mockTheme)
  })

  it("provides color mode context with default light mode", () => {
    let colorModeContext: any = null

    const TestChild = defineComponent({
      setup() {
        colorModeContext = inject(ColorModeKey)
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: {
        theme: mockTheme,
      },
      slots: {
        default: () => h(TestChild),
      },
    })

    expect(colorModeContext).not.toBeNull()
    expect(colorModeContext.colorMode.value).toBe("light")
  })

  it("accepts initial color mode value", () => {
    let colorModeContext: any = null

    const TestChild = defineComponent({
      setup() {
        colorModeContext = inject(ColorModeKey)
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: {
        theme: mockTheme,
        colorModeValue: "dark",
      },
      slots: {
        default: () => h(TestChild),
      },
    })

    expect(colorModeContext.colorMode.value).toBe("dark")
  })

  it("provides toggleColorMode function", async () => {
    let colorModeContext: any = null

    const TestChild = defineComponent({
      setup() {
        colorModeContext = inject(ColorModeKey)
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: {
        theme: mockTheme,
      },
      slots: {
        default: () => h(TestChild),
      },
    })

    expect(colorModeContext.colorMode.value).toBe("light")

    colorModeContext.toggleColorMode()

    expect(colorModeContext.colorMode.value).toBe("dark")

    colorModeContext.toggleColorMode()

    expect(colorModeContext.colorMode.value).toBe("light")
  })

  it("provides setColorMode function", () => {
    let colorModeContext: any = null

    const TestChild = defineComponent({
      setup() {
        colorModeContext = inject(ColorModeKey)
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: {
        theme: mockTheme,
      },
      slots: {
        default: () => h(TestChild),
      },
    })

    colorModeContext.setColorMode("dark")
    expect(colorModeContext.colorMode.value).toBe("dark")

    colorModeContext.setColorMode("light")
    expect(colorModeContext.colorMode.value).toBe("light")
  })

  it("provides full ChakraContext", () => {
    let chakraContext: any = null

    const TestChild = defineComponent({
      setup() {
        chakraContext = inject(ChakraContextKey)
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: {
        theme: mockTheme,
      },
      slots: {
        default: () => h(TestChild),
      },
    })

    expect(chakraContext).not.toBeNull()
    expect(chakraContext.theme.value).toEqual(mockTheme)
    expect(chakraContext.colorMode.value).toBe("light")
    expect(typeof chakraContext.toggleColorMode).toBe("function")
    expect(typeof chakraContext.setColorMode).toBe("function")
  })
})

describe("ChakraBaseProvider", () => {
  it("provides only theme context", () => {
    let themeContext: any = null
    let colorModeContext: any = null

    const TestChild = defineComponent({
      setup() {
        themeContext = inject(ThemeKey)
        colorModeContext = inject(ColorModeKey)
        return () => h("div", "Child")
      },
    })

    mount(ChakraBaseProvider, {
      props: {
        theme: mockTheme,
      },
      slots: {
        default: () => h(TestChild),
      },
    })

    expect(themeContext).not.toBeNull()
    expect(themeContext.value).toEqual(mockTheme)
    // ColorMode should not be provided by BaseProvider
    expect(colorModeContext).toBeUndefined()
  })

  it("renders children correctly", () => {
    const wrapper = mount(ChakraBaseProvider, {
      props: {
        theme: mockTheme,
      },
      slots: {
        default: () => h("span", "Test content"),
      },
    })

    expect(wrapper.text()).toBe("Test content")
  })
})
