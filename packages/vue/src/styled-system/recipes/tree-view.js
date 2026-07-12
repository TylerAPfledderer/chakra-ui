import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const treeViewDefaultVariants = {
  "size": "md",
  "variant": "subtle"
}
const treeViewCompoundVariants = []

const treeViewSlotNames = [
  [
    "branch",
    "chakra-tree-view__branch"
  ],
  [
    "branchContent",
    "chakra-tree-view__branchContent"
  ],
  [
    "branchControl",
    "chakra-tree-view__branchControl"
  ],
  [
    "branchIndentGuide",
    "chakra-tree-view__branchIndentGuide"
  ],
  [
    "branchIndicator",
    "chakra-tree-view__branchIndicator"
  ],
  [
    "branchText",
    "chakra-tree-view__branchText"
  ],
  [
    "branchTrigger",
    "chakra-tree-view__branchTrigger"
  ],
  [
    "item",
    "chakra-tree-view__item"
  ],
  [
    "itemIndicator",
    "chakra-tree-view__itemIndicator"
  ],
  [
    "itemText",
    "chakra-tree-view__itemText"
  ],
  [
    "label",
    "chakra-tree-view__label"
  ],
  [
    "nodeCheckbox",
    "chakra-tree-view__nodeCheckbox"
  ],
  [
    "nodeRenameInput",
    "chakra-tree-view__nodeRenameInput"
  ],
  [
    "root",
    "chakra-tree-view__root"
  ],
  [
    "tree",
    "chakra-tree-view__tree"
  ]
]
const treeViewSlotFns = /* @__PURE__ */ treeViewSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, treeViewDefaultVariants, getSlotCompoundVariant(treeViewCompoundVariants, slotName))])

const treeViewFn = memo((props = {}) => {
  return Object.fromEntries(treeViewSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const treeViewVariantKeys = [
  "size",
  "variant",
  "animateContent"
]
const getVariantProps = (variants) => ({ ...treeViewDefaultVariants, ...compact(variants) })

export const treeView = /* @__PURE__ */ Object.assign(treeViewFn, {
  __recipe__: false,
  __name__: 'treeView',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: treeViewVariantKeys,
  variantMap: {
  "size": [
    "md",
    "sm",
    "xs"
  ],
  "variant": [
    "subtle",
    "solid"
  ],
  "animateContent": [
    "true"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, treeViewVariantKeys)
  },
  getVariantProps
})