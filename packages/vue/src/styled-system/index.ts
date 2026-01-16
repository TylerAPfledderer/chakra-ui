/**
 * Vue Styled-System
 *
 * This module provides Vue-specific implementations of Chakra UI's styled-system.
 * It wraps the framework-agnostic utilities from @chakra-ui/system-core with
 * Vue 3 Composition API patterns (composables, provide/inject, computed refs).
 *
 * @packageDocumentation
 */

// Provider components
export {
  ChakraProvider,
  ChakraContextKey,
  VueChakraProvider,
  SystemContextKey,
} from "./provider"
export type { ChakraProviderProps } from "./provider"

// Core composables
export { useSystem } from "./use-system"

// Recipe composables
export { useRecipe, useThemeRecipe } from "./use-recipe"
export type { UseRecipeOptions } from "./use-recipe"

// Slot recipe composables
export { useSlotRecipe, useThemeSlotRecipe } from "./use-slot-recipe"
export type { UseSlotRecipeOptions } from "./use-slot-recipe"

// CSS composables
export { useCss, useCssFn } from "./use-css"

// Factory utilities
export { chakra, styledFactory, styled, forwardRef } from "./factory"
export type { ChakraProps } from "./factory"

// Re-export framework-agnostic utilities from system-core
export {
  // Styled-system utilities
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
  mapToJson,
  sortAtParams,
  sortAtRules,
  getReferences,
  hasReference,
  expandReferences,
  expandTokenReferences,
  tokenTransforms,
  tokenMiddlewares,
  createTokenDictionary,
  createBreakpoints,
  createConditions,
  createNormalizeFn,
  createSerializeFn,
  createLayers,
  createPreflight,
  colorMix,
  createUtility,
  createCssFn,
  createRecipeFn,
  createSlotRecipeFn,
  mergeConfigs,
  // Config helpers
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
} from "@chakra-ui/system-core"

// Re-export framework-agnostic types from system-core
export type {
  // Core types
  Dict,
  SystemStyleObject,
  // Calc and CSS var types
  Operand,
  CssVar,
  CssVarOptions,
  // Token types
  TokenCategory,
  TokenSchema,
  TokenDefinition,
  SemanticTokenDefinition,
  TokenCssVar,
  TokenFormatOptions,
  TokenEnforcePhase,
  TokenMiddleware,
  TokenTransformer,
  TokenDictionary,
  TokenExtensions,
  Token,
  ColorMixResult,
  // Transform types
  TransformUtils,
  TransformArgs,
  PropertyTransform,
  PropertyValues,
  UtilityPropertyConfig,
  UtilityConfig,
  Utility,
  // Breakpoint and condition types
  BreakpointEntry,
  Breakpoint,
  Condition,
  ConditionRecord,
  ConditionConfig,
  TokenFn,
  Layers,
  PreflightConfig,
  CascadeLayer,
  SystemQuery,
  // Recipe types
  RecipeVariantRecord,
  RecipeSelection,
  RecipeVariantMap,
  RecipeRuntimeFn,
  RecipeCompoundSelection,
  RecipeCompoundVariant,
  RecipeDefinition,
  RecipeCreatorFn,
  // Slot recipe types
  SlotRecipeVariantRecord,
  SlotRecipeRuntimeFn,
  SlotRecipeCompoundVariant,
  SlotRecipeDefinition,
  SlotRecipeCreatorFn,
  SlotRecipeConfig,
  // System types
  SystemContext,
  CssFn,
} from "@chakra-ui/system-core"
