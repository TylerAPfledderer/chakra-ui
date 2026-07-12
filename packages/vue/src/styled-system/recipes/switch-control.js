import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const switchControlDefaultVariants = {
  "variant": "solid",
  "size": "md"
}
const switchControlCompoundVariants = []

const switchControlSlotNames = [
  [
    "root",
    "chakra-switch__root"
  ],
  [
    "label",
    "chakra-switch__label"
  ],
  [
    "control",
    "chakra-switch__control"
  ],
  [
    "thumb",
    "chakra-switch__thumb"
  ],
  [
    "indicator",
    "chakra-switch__indicator"
  ]
]
const switchControlSlotFns = /* @__PURE__ */ switchControlSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, switchControlDefaultVariants, getSlotCompoundVariant(switchControlCompoundVariants, slotName))])

const switchControlFn = memo((props = {}) => {
  return Object.fromEntries(switchControlSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const switchControlVariantKeys = [
  "variant",
  "size"
]
const getVariantProps = (variants) => ({ ...switchControlDefaultVariants, ...compact(variants) })

export const switchControl = /* @__PURE__ */ Object.assign(switchControlFn, {
  __recipe__: false,
  __name__: 'switchControl',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: switchControlVariantKeys,
  variantMap: {
  "variant": [
    "solid",
    "raised"
  ],
  "size": [
    "xs",
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, switchControlVariantKeys)
  },
  getVariantProps
})