/**
 * @chakra-ui/vue
 *
 * Vue 3 component library for Chakra UI.
 * This package provides the foundation for building Chakra UI components in Vue,
 * including providers, composables, and styling utilities.
 *
 * @packageDocumentation
 */

// Re-export core utilities that are framework-agnostic
export {
  // Prop utilities
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
  // Style resolution
  createShouldForwardProp,
  createSimpleRecipe,
  deepMergeStyles,
  mergeStyles,
  resolveProps,
  runIfFn,
  // Style config resolution
  get,
  getStyleConfigDefaultProps,
  isSlotStyleConfig,
  mergeStyleConfigs,
  resolveComponentStyleConfig,
  resolveSlotStyleConfig,
  resolveStyleConfig,
} from "@chakra-ui/system-core"

// Re-export core types
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
} from "@chakra-ui/system-core"

// Provider component
export { ChakraProvider, ChakraContextKey } from "./styled-system/provider"
export type { ChakraProviderProps } from "./styled-system/provider"

// Factory utilities
export { chakra, styledFactory, styled, forwardRef } from "./chakra-factory"

// Types
export type { ChakraProps } from "./types"

// Styled-system (new Vue implementations)
export {
  // Provider
  VueChakraProvider,
  SystemContextKey,
  // Composables
  useSystem,
  useRecipe,
  useThemeRecipe,
  useSlotRecipe,
  useThemeSlotRecipe,
  useCss,
  useCssFn,
  // Factory (re-export from styled-system as well for explicit imports)
  chakra as chakraStyled,
  styledFactory as styledFactoryStyled,
  styled as styledStyled,
  forwardRef as forwardRefStyled,
  // System creation
  createSystem,
  isValidSystem,
  // Styled-system utilities from system-core
  EMPTY_OBJECT,
  EMPTY_ARRAY,
  createEmptyObject,
  getEmptyObject,
  esc,
  calc,
  cssVar,
  getUnit,
  toPx,
  toEm,
  toRem,
  createTokenDictionary,
  createBreakpoints,
  createConditions,
  createCssFn,
  createRecipeFn,
  createSlotRecipeFn,
  mergeConfigs,
  defineConditions,
  defineRecipe,
  defineSlotRecipe,
  defineKeyframes,
  defineGlobalStyles,
  defineStyle,
  defineTextStyles,
  defineAnimationStyles,
  defineLayerStyles,
  defineTokens,
  defineSemanticTokens,
  defineConfig,
} from "./styled-system"

// Styled-system types
export type {
  ChakraProps as ChakraStyledProps,
  UseRecipeOptions,
  UseSlotRecipeOptions,
  // System types
  SystemContext,
  SystemConfig,
  RecipeVariantRecord,
  RecipeRuntimeFn,
  RecipeDefinition,
  SlotRecipeVariantRecord,
  SlotRecipeRuntimeFn,
  SlotRecipeDefinition,
  TokenDictionary,
  Utility,
  Condition,
  Layers,
} from "./styled-system"
