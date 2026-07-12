import {
  CheckboxContext as ArkCheckboxContext,
  CheckboxControl as ArkCheckboxControl,
  CheckboxGroup as ArkCheckboxGroup,
  CheckboxHiddenInput as ArkCheckboxHiddenInput,
  CheckboxIndicator as ArkCheckboxIndicator,
  CheckboxLabel as ArkCheckboxLabel,
  CheckboxRoot as ArkCheckboxRoot,
  CheckboxRootProvider as ArkCheckboxRootProvider,
  type CheckboxControlBaseProps,
  type CheckboxGroupBaseProps,
  type CheckboxLabelBaseProps,
  type CheckboxRootBaseProps,
  type CheckboxRootProviderBaseProps,
} from "@ark-ui/vue/checkbox"
import { type FunctionalComponent, defineComponent, h } from "vue"
import { createStyleContext } from "../../styled-system/jsx"
import { checkbox } from "../../styled-system/recipes"
import type { HTMLChakraProps } from "../../styled-system/types/jsx"
import type { RecipeVariantProps } from "../../styled-system/types/recipe"

const { withProvider, withContext } = createStyleContext(checkbox)

// Panda's generated `withProvider`/`withContext` infer their prop types via a
// `ComponentProps<T>` helper that mis-extracts props from @ark-ui/vue's
// `DefineComponent`-typed parts (it grabs the full component instance type,
// not the public props). Mirror @chakra-ui/react's checkbox: declare an
// explicit prop interface per part from Ark's `*BaseProps` + the generated
// `HTMLChakraProps` (style props + intrinsic HTML attrs), and annotate each
// wrapped export with it. The recipe-variant-bearing parts (root, group) use a
// `type … & RecipeVariantProps<>` alias — RecipeVariantProps can't sit in an
// `extends` clause (TS2312).

export type CheckboxRootProps = HTMLChakraProps<"label"> &
  CheckboxRootBaseProps &
  RecipeVariantProps<typeof checkbox>
export const CheckboxRoot = withProvider(
  ArkCheckboxRoot,
  "root",
) as FunctionalComponent<CheckboxRootProps>

export type CheckboxRootProviderProps = HTMLChakraProps<"div"> &
  CheckboxRootProviderBaseProps &
  RecipeVariantProps<typeof checkbox>
export const CheckboxRootProvider = withProvider(
  ArkCheckboxRootProvider,
  "root",
) as FunctionalComponent<CheckboxRootProviderProps>

export type CheckboxGroupProps = HTMLChakraProps<"div"> &
  CheckboxGroupBaseProps &
  RecipeVariantProps<typeof checkbox>
export const CheckboxGroup = withProvider(
  ArkCheckboxGroup,
  "group",
) as FunctionalComponent<CheckboxGroupProps>

export interface CheckboxLabelProps
  extends HTMLChakraProps<"span">,
    CheckboxLabelBaseProps {}
export const CheckboxLabel = withContext(
  ArkCheckboxLabel,
  "label",
) as FunctionalComponent<CheckboxLabelProps>

export interface CheckboxControlProps
  extends HTMLChakraProps<"div">,
    CheckboxControlBaseProps {}
export const CheckboxControl = withContext(
  ArkCheckboxControl,
  "control",
) as FunctionalComponent<CheckboxControlProps>

// Indicator — Ark's Checkbox.Indicator styled with the `indicator` slot. Ark
// toggles its visibility for the checked/indeterminate states; the mark itself
// comes from the default slot, falling back to a checkmark SVG when the
// consumer provides none.
const StyledIndicator = withContext(ArkCheckboxIndicator, "indicator")

const CheckmarkIcon = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    [h("path", { d: "M20 6 9 17l-5-5" })],
  )

export const CheckboxIndicator = defineComponent({
  name: "CheckboxIndicator",
  setup(_, { slots }) {
    // Vue auto-forwards fallthrough attrs to the single StyledIndicator root.
    return () =>
      h(StyledIndicator, null, {
        default: () => slots.default?.() ?? h(CheckmarkIcon),
      })
  },
})

// Passthrough parts that need no styling wrapper.
export const CheckboxContext = ArkCheckboxContext
export const CheckboxHiddenInput = ArkCheckboxHiddenInput
