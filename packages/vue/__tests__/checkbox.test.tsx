import { fireEvent, render } from "@testing-library/vue"
import { expect, test } from "vitest"
import { axe } from "vitest-axe"
import {
  CheckboxControl,
  CheckboxHiddenInput,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxRoot,
} from "../src"

const renderCheckbox = (rootProps = {}) =>
  render(
    <CheckboxRoot {...rootProps}>
      <CheckboxHiddenInput />
      <CheckboxControl data-testid="control">
        <CheckboxIndicator />
      </CheckboxControl>
      <CheckboxLabel>Accept terms</CheckboxLabel>
    </CheckboxRoot>,
  )

test("renders all parts with their generated slot classes", () => {
  const { getByText, container } = renderCheckbox()

  expect(getByText("Accept terms")).toBeTruthy()
  expect(container.querySelector(".chakra-checkbox__root")).toBeTruthy()
  expect(container.querySelector(".chakra-checkbox__control")).toBeTruthy()
  expect(container.querySelector(".chakra-checkbox__label")).toBeTruthy()
  // the default checkmark icon inside the indicator
  expect(container.querySelector("svg path")).toBeTruthy()
})

test("applies default recipe variants (solid / md) to the root slot", () => {
  const { container } = renderCheckbox()
  const root = container.querySelector(".chakra-checkbox__root")
  expect(root?.className).toContain("chakra-checkbox__root--variant_solid")
  expect(root?.className).toContain("chakra-checkbox__root--size_md")
})

test("toggles checked state on click", async () => {
  const { getByText, container } = renderCheckbox()
  const input = container.querySelector<HTMLInputElement>(
    'input[type="checkbox"]',
  )

  expect(input?.checked).toBe(false)
  await fireEvent.click(getByText("Accept terms"))
  expect(input?.checked).toBe(true)
})

test("respects the defaultChecked prop", () => {
  const { container } = renderCheckbox({ defaultChecked: true })
  const input = container.querySelector<HTMLInputElement>(
    'input[type="checkbox"]',
  )
  expect(input?.checked).toBe(true)
})

test("has no a11y violations", async () => {
  const { container } = renderCheckbox()
  const results = await axe(container)
  // @ts-expect-error vitest-axe matcher augmentation not wired into vue-tsc
  expect(results).toHaveNoViolations()
})
