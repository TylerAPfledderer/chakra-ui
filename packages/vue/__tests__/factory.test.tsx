import { render } from "@testing-library/vue"
import { expect, test } from "vitest"
import { chakra } from "../src"

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
