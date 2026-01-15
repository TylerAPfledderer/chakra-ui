import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import { defineComponent, h } from "vue"
import { ChakraProvider } from "../src/chakra-provider"
import {
  useChakra,
  useColorMode,
  useColorModeValue,
  useTheme,
  useToken,
} from "../src/use-chakra"

// Mock theme for testing
const mockTheme = {
  colors: {
    blue: {
      100: "#ebf8ff",
      500: "#3182ce",
      900: "#1a365d",
    },
    gray: {
      100: "#f7fafc",
      800: "#1a202c",
    },
  },
  space: {
    1: "0.25rem",
    2: "0.5rem",
    4: "1rem",
    8: "2rem",
  },
  fontSizes: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
      },
    },
  },
}

describe("useChakra", () => {
  it("returns chakra context when used within ChakraProvider", () => {
    let context: any = null

    const TestChild = defineComponent({
      setup() {
        context = useChakra()
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(context).not.toBeNull()
    expect(context.theme.value).toEqual(mockTheme)
    expect(context.colorMode.value).toBe("light")
    expect(typeof context.toggleColorMode).toBe("function")
    expect(typeof context.setColorMode).toBe("function")
  })

  it("throws error when used outside ChakraProvider", () => {
    const TestChild = defineComponent({
      setup() {
        useChakra()
        return () => h("div", "Child")
      },
    })

    expect(() => mount(TestChild)).toThrow(
      "[Chakra UI] useChakra must be used within a ChakraProvider",
    )
  })
})

describe("useTheme", () => {
  it("returns theme when used within ChakraProvider", () => {
    let theme: any = null

    const TestChild = defineComponent({
      setup() {
        theme = useTheme()
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(theme).not.toBeNull()
    expect(theme.value).toEqual(mockTheme)
  })

  it("allows accessing theme tokens", () => {
    let blueColor: any = null

    const TestChild = defineComponent({
      setup() {
        const theme = useTheme()
        blueColor = theme.value.colors?.blue?.[500]
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(blueColor).toBe("#3182ce")
  })

  it("throws error when used outside provider", () => {
    const TestChild = defineComponent({
      setup() {
        useTheme()
        return () => h("div", "Child")
      },
    })

    expect(() => mount(TestChild)).toThrow(
      "[Chakra UI] useTheme must be used within a ChakraProvider",
    )
  })
})

describe("useColorMode", () => {
  it("returns color mode context", () => {
    let colorModeContext: any = null

    const TestChild = defineComponent({
      setup() {
        colorModeContext = useColorMode()
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(colorModeContext.colorMode.value).toBe("light")
  })

  it("toggleColorMode toggles between light and dark", () => {
    let colorModeContext: any = null

    const TestChild = defineComponent({
      setup() {
        colorModeContext = useColorMode()
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(colorModeContext.colorMode.value).toBe("light")

    colorModeContext.toggleColorMode()
    expect(colorModeContext.colorMode.value).toBe("dark")

    colorModeContext.toggleColorMode()
    expect(colorModeContext.colorMode.value).toBe("light")
  })

  it("setColorMode sets specific mode", () => {
    let colorModeContext: any = null

    const TestChild = defineComponent({
      setup() {
        colorModeContext = useColorMode()
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    colorModeContext.setColorMode("dark")
    expect(colorModeContext.colorMode.value).toBe("dark")

    colorModeContext.setColorMode("light")
    expect(colorModeContext.colorMode.value).toBe("light")
  })

  it("throws error when used outside provider", () => {
    const TestChild = defineComponent({
      setup() {
        useColorMode()
        return () => h("div", "Child")
      },
    })

    expect(() => mount(TestChild)).toThrow(
      "[Chakra UI] useColorMode must be used within a ChakraProvider",
    )
  })
})

describe("useColorModeValue", () => {
  it("returns light value in light mode", () => {
    let value: any = null

    const TestChild = defineComponent({
      setup() {
        value = useColorModeValue("white", "gray.800")
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme, colorModeValue: "light" },
      slots: { default: () => h(TestChild) },
    })

    expect(value.value).toBe("white")
  })

  it("returns dark value in dark mode", () => {
    let value: any = null

    const TestChild = defineComponent({
      setup() {
        value = useColorModeValue("white", "gray.800")
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme, colorModeValue: "dark" },
      slots: { default: () => h(TestChild) },
    })

    expect(value.value).toBe("gray.800")
  })

  it("updates when color mode changes", () => {
    let value: any = null
    let colorModeContext: any = null

    const TestChild = defineComponent({
      setup() {
        colorModeContext = useColorMode()
        value = useColorModeValue("light-value", "dark-value")
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(value.value).toBe("light-value")

    colorModeContext.setColorMode("dark")
    expect(value.value).toBe("dark-value")

    colorModeContext.setColorMode("light")
    expect(value.value).toBe("light-value")
  })

  it("works with complex values", () => {
    let bgValue: any = null

    const TestChild = defineComponent({
      setup() {
        bgValue = useColorModeValue(
          { bg: "white", color: "black" },
          { bg: "gray.800", color: "white" },
        )
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme, colorModeValue: "light" },
      slots: { default: () => h(TestChild) },
    })

    expect(bgValue.value).toEqual({ bg: "white", color: "black" })
  })
})

describe("useToken", () => {
  it("returns token value from theme", () => {
    let tokenValue: any = null

    const TestChild = defineComponent({
      setup() {
        tokenValue = useToken("colors", "blue.500")
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(tokenValue.value).toBe("#3182ce")
  })

  it("returns nested token value", () => {
    let tokenValue: any = null

    const TestChild = defineComponent({
      setup() {
        tokenValue = useToken("colors", "gray.100")
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(tokenValue.value).toBe("#f7fafc")
  })

  it("returns spacing token", () => {
    let tokenValue: any = null

    const TestChild = defineComponent({
      setup() {
        tokenValue = useToken("space", "4")
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(tokenValue.value).toBe("1rem")
  })

  it("returns fallback when token does not exist", () => {
    let tokenValue: any = null

    const TestChild = defineComponent({
      setup() {
        tokenValue = useToken("colors", "purple.500", "#9b59b6")
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(tokenValue.value).toBe("#9b59b6")
  })

  it("returns fallback when scale does not exist", () => {
    let tokenValue: any = null

    const TestChild = defineComponent({
      setup() {
        tokenValue = useToken("nonExistentScale", "value", "fallback")
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(tokenValue.value).toBe("fallback")
  })

  it("returns undefined when token and fallback do not exist", () => {
    let tokenValue: any = null

    const TestChild = defineComponent({
      setup() {
        tokenValue = useToken("colors", "nonexistent.color")
        return () => h("div", "Child")
      },
    })

    mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: { default: () => h(TestChild) },
    })

    expect(tokenValue.value).toBeUndefined()
  })
})
