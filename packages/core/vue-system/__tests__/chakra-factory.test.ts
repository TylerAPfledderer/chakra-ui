import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import { defineComponent, h } from "vue"
import { chakra, styled, styledFactory } from "../src/chakra-factory"
import { ChakraProvider } from "../src/chakra-provider"

const mockTheme = {
  colors: {
    blue: { 500: "#3182ce" },
  },
  space: {
    4: "1rem",
  },
}

describe("chakra factory", () => {
  it("creates a component from an HTML element", () => {
    const Box = chakra("div")

    const wrapper = mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: {
        default: () => h(Box, { "data-testid": "box" }, () => "Content"),
      },
    })

    expect(wrapper.find('[data-testid="box"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="box"]').text()).toBe("Content")
  })

  it("renders the correct HTML element", () => {
    const Box = chakra("div")
    const Span = chakra("span")
    const Button = chakra("button")

    const wrapper = mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: {
        default: () => [
          h(Box, { "data-testid": "box" }, () => "Box"),
          h(Span, { "data-testid": "span" }, () => "Span"),
          h(Button, { "data-testid": "button" }, () => "Button"),
        ],
      },
    })

    expect(wrapper.find('[data-testid="box"]').element.tagName).toBe("DIV")
    expect(wrapper.find('[data-testid="span"]').element.tagName).toBe("SPAN")
    expect(wrapper.find('[data-testid="button"]').element.tagName).toBe(
      "BUTTON",
    )
  })

  it("applies sx prop as styles", () => {
    const Box = chakra("div")

    const wrapper = mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: {
        default: () =>
          h(
            Box,
            {
              "data-testid": "box",
              sx: { padding: "10px", backgroundColor: "blue" },
            },
            () => "Content",
          ),
      },
    })

    const box = wrapper.find('[data-testid="box"]')
    expect(box.element.style.padding).toBe("10px")
    expect(box.element.style.backgroundColor).toBe("blue")
  })

  it("applies __css prop as internal styles", () => {
    const Box = chakra("div")

    const wrapper = mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: {
        default: () =>
          h(
            Box,
            {
              "data-testid": "box",
              __css: { margin: "20px" },
            },
            () => "Content",
          ),
      },
    })

    const box = wrapper.find('[data-testid="box"]')
    expect(box.element.style.margin).toBe("20px")
  })

  it("sx prop overrides __css prop", () => {
    const Box = chakra("div")

    const wrapper = mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: {
        default: () =>
          h(
            Box,
            {
              "data-testid": "box",
              __css: { padding: "10px", margin: "5px" },
              sx: { padding: "20px" },
            },
            () => "Content",
          ),
      },
    })

    const box = wrapper.find('[data-testid="box"]')
    expect(box.element.style.padding).toBe("20px") // sx wins
    expect(box.element.style.margin).toBe("5px") // __css preserved
  })

  it("supports 'as' prop for polymorphism", () => {
    const Box = chakra("div")

    const wrapper = mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: {
        default: () =>
          h(
            Box,
            {
              as: "section",
              "data-testid": "box",
            },
            () => "Content",
          ),
      },
    })

    expect(wrapper.find('[data-testid="box"]').element.tagName).toBe("SECTION")
  })

  it("passes through standard HTML attributes", () => {
    const Button = chakra("button")

    const wrapper = mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: {
        default: () =>
          h(
            Button,
            {
              "data-testid": "button",
              type: "submit",
              disabled: true,
            },
            () => "Submit",
          ),
      },
    })

    const button = wrapper.find('[data-testid="button"]')
    expect(button.element.getAttribute("type")).toBe("submit")
    expect((button.element as HTMLButtonElement).disabled).toBe(true)
  })

  it("renders slot content", () => {
    const Box = chakra("div")

    const wrapper = mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: {
        default: () =>
          h(Box, { "data-testid": "box" }, () => [
            h("span", "Hello"),
            h("span", "World"),
          ]),
      },
    })

    const box = wrapper.find('[data-testid="box"]')
    expect(box.text()).toBe("HelloWorld")
  })
})

describe("styledFactory proxy", () => {
  it("returns a component for any element name", () => {
    // Access via proxy
    const Div = (styledFactory as any).div
    const Span = (styledFactory as any).span

    expect(Div).toBeDefined()
    expect(Span).toBeDefined()
  })
})

describe("styled function", () => {
  it("creates a component with default styles", () => {
    const Card = styled("div", {
      padding: "20px",
      backgroundColor: "white",
      borderRadius: "8px",
    })

    const wrapper = mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: {
        default: () => h(Card, { "data-testid": "card" }, () => "Card content"),
      },
    })

    const card = wrapper.find('[data-testid="card"]')
    expect(card.element.style.padding).toBe("20px")
    expect(card.element.style.backgroundColor).toBe("white")
    expect(card.element.style.borderRadius).toBe("8px")
  })

  it("sx prop overrides base styles", () => {
    const Card = styled("div", {
      padding: "20px",
      backgroundColor: "white",
    })

    const wrapper = mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: {
        default: () =>
          h(
            Card,
            {
              "data-testid": "card",
              sx: { padding: "40px" },
            },
            () => "Card content",
          ),
      },
    })

    const card = wrapper.find('[data-testid="card"]')
    expect(card.element.style.padding).toBe("40px") // sx wins
    expect(card.element.style.backgroundColor).toBe("white") // base preserved
  })

  it("renders correct element type", () => {
    const StyledButton = styled("button", {
      backgroundColor: "blue",
    })

    const wrapper = mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: {
        default: () =>
          h(StyledButton, { "data-testid": "btn" }, () => "Click me"),
      },
    })

    expect(wrapper.find('[data-testid="btn"]').element.tagName).toBe("BUTTON")
  })

  it("supports 'as' prop for polymorphism", () => {
    const Box = styled("div", { display: "block" })

    const wrapper = mount(ChakraProvider, {
      props: { theme: mockTheme },
      slots: {
        default: () =>
          h(Box, { as: "article", "data-testid": "box" }, () => "Content"),
      },
    })

    expect(wrapper.find('[data-testid="box"]').element.tagName).toBe("ARTICLE")
  })
})
