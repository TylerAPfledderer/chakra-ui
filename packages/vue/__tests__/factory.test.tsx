import { render } from "@testing-library/vue"
import { expect, test } from "vitest"
import { Box, chakra } from "../src"

// Pilot: proves the Panda-generated `chakra` factory resolves Vue style props
// into atomic classes end-to-end. `p="4"` and `bg="red.500"` should become the
// `p_4` / `bg_red.500` classes Panda's generated `css()` emits (verified
// directly: css({ p: "4", bg: "red.500" }) === "p_4 bg_red.500").

test("chakra factory renders an element with resolved style-prop classes", () => {
  const { getByTestId } = render(
    <chakra.div data-testid="box" p="4" bg="red.500">
      hello
    </chakra.div>,
  )

  const el = getByTestId("box")
  expect(el.tagName).toBe("DIV")
  expect(el.textContent).toBe("hello")
  expect(el.className).toContain("p_4")
  expect(el.className).toContain("bg_red.500")
})

test("chakra factory forwards the `as` prop to change the element", () => {
  const { getByTestId } = render(
    <chakra.div data-testid="btn" as="button" px="2">
      click
    </chakra.div>,
  )

  const el = getByTestId("btn")
  expect(el.tagName).toBe("BUTTON")
  expect(el.className).toContain("px_2")
})

// Panda generates the layout components (Box, Flex, Stack, …) and they reach
// the public entry via the styled-system/jsx barrel — a consumer can
// `import { Box } from "@chakra-ui/vue"`. This guards that re-export chain and
// the Box pilot: <Box p="4" bg="red.500" /> resolving style props end-to-end.
test("generated Box is re-exported from the package entry and renders style props", () => {
  const { getByTestId } = render(
    <Box data-testid="box" p="4" bg="red.500">
      hello
    </Box>,
  )

  const el = getByTestId("box")
  expect(el.tagName).toBe("DIV")
  expect(el.textContent).toBe("hello")
  expect(el.className).toContain("p_4")
  expect(el.className).toContain("bg_red.500")
})
