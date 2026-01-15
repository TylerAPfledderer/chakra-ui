/**
 * @chakra-ui/system-core
 *
 * Framework-agnostic core utilities for Chakra UI's styling system.
 * This package provides the foundation that both @chakra-ui/react and
 * @chakra-ui/vue build upon.
 *
 * @packageDocumentation
 */

// Type definitions
export type {
  CssFn,
  Dict,
  PropPredicate,
  RecipeFn,
  ResolvedPropsResult,
  ResolvePropsOptions,
  ResolveStyleConfigOptions,
  ResolveStylesOptions,
  SlotStyleConfig,
  SplitPropsResult,
  StyleConfig,
  StyleResolverContext,
  SystemStyleObject,
  ThemingProps,
} from "./types"

// Prop utilities
export {
  compact,
  createSplitProps,
  extractThemingProps,
  filterObject,
  htmlProps,
  isHtmlProp,
  omit,
  omitThemingProps,
  pick,
  splitProps,
  themingPropKeys,
} from "./prop-utils"

// Style resolution
export {
  createShouldForwardProp,
  createSimpleRecipe,
  deepMergeStyles,
  mergeStyles,
  resolveProps,
  runIfFn,
} from "./resolve-props"

// Style config resolution
export {
  get,
  getStyleConfigDefaultProps,
  isSlotStyleConfig,
  mergeStyleConfigs,
  resolveComponentStyleConfig,
  resolveSlotStyleConfig,
  resolveStyleConfig,
} from "./resolve-style-config"

// Utility functions (avoiding duplicates with prop-utils)
export {
  // Attribute helpers
  dataAttr,
  // Function utilities
  callAll,
  // Object utilities
  clone,
  createProps,
  flatten,
  interopDefault,
  mapEntries,
  mergeWith,
  walkObject,
  mapObject,
  // String utilities
  cx,
  uniq,
  // Type guards
  isObject,
  isCssVar,
  isString,
  isFunction,
  isCssUnit,
  // Memoization
  memo,
} from "./utils"

// Utility types
export type {
  AnyFunction,
  DistributiveOmit,
  DistributiveUnion,
  Pretty,
  MappedObject,
  WalkObjectOptions,
  WalkObjectStopFn,
} from "./utils"

// Styled-system exports
export * from "./styled-system"
