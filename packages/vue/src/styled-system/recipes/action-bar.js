import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const actionBarDefaultVariants = {
  "placement": "bottom"
}
const actionBarCompoundVariants = []

const actionBarSlotNames = [
  [
    "positioner",
    "chakra-action-bar__positioner"
  ],
  [
    "content",
    "chakra-action-bar__content"
  ],
  [
    "separator",
    "chakra-action-bar__separator"
  ],
  [
    "selectionTrigger",
    "chakra-action-bar__selectionTrigger"
  ],
  [
    "closeTrigger",
    "chakra-action-bar__closeTrigger"
  ]
]
const actionBarSlotFns = /* @__PURE__ */ actionBarSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, actionBarDefaultVariants, getSlotCompoundVariant(actionBarCompoundVariants, slotName))])

const actionBarFn = memo((props = {}) => {
  return Object.fromEntries(actionBarSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const actionBarVariantKeys = [
  "placement"
]
const getVariantProps = (variants) => ({ ...actionBarDefaultVariants, ...compact(variants) })

export const actionBar = /* @__PURE__ */ Object.assign(actionBarFn, {
  __recipe__: false,
  __name__: 'actionBar',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: actionBarVariantKeys,
  variantMap: {
  "placement": [
    "bottom",
    "bottom-start",
    "bottom-end"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, actionBarVariantKeys)
  },
  getVariantProps
})