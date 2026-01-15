/**
 * Framework-agnostic styled-system for Chakra UI.
 * This module provides the core styling utilities that both React and Vue implementations build upon.
 */

// Singleton utilities
export {
  EMPTY_OBJECT,
  EMPTY_ARRAY,
  createEmptyObject,
  getEmptyObject,
} from "./singleton"

// CSS utilities
export { esc } from "./esc"
export { calc, type Operand } from "./calc"
export { cssVar, type CssVar, type CssVarOptions } from "./css-var"
export { getUnit, toPx, toEm, toRem } from "./unit-conversion"
export { mapToJson } from "./map-to-json"

// Sorting utilities
export { sortAtParams } from "./sort-at-params"
export { sortAtRules } from "./sort-at-rules"

// Token system
export {
  getReferences,
  hasReference,
  expandReferences,
  TOKEN_PATH_REGEX,
} from "./references"
export { expandTokenReferences } from "./expand-reference"
export { tokenTransforms } from "./token-transforms"
export {
  tokenMiddlewares,
  addNegativeTokens,
  addPixelUnit,
  addVirtualPalette,
  removeEmptyTokens,
} from "./token-middleware"
export { createTokenDictionary } from "./token-dictionary"

// Style processing
export { createBreakpoints } from "./breakpoints"
export { createConditions } from "./conditions"
export { createNormalizeFn } from "./normalize"
export { createSerializeFn } from "./serialize"
export { createLayers } from "./layers"
export { createPreflight } from "./preflight"
export { colorMix } from "./color-mix"
export { createUtility } from "./utility"

// CSS and recipe functions
export { createCssFn } from "./css"
export { createRecipeFn } from "./cva"
export { createSlotRecipeFn } from "./sva"

// System orchestration
export { mergeConfigs } from "./merge-config"
export {
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
} from "./config"
export { createSystem, isValidSystem } from "./system"

// Composition styles
export type { AnimationStyle, TextStyle, LayerStyle } from "./composition"

// Selectors
export type { AnySelector, Selectors } from "./selectors"

// Types
export type {
  // CSS types
  CssProperty,
  ConditionalValue,
  Nested,
  CssKeyframes,
  SystemStyleObject,
  CssVarProperties,
  CssProperties,
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
  // Utility types
  ColorMixResult,
  TransformUtils,
  TransformArgs,
  PropertyTransform,
  PropertyValues,
  UtilityPropertyConfig,
  UtilityConfig,
  Utility,
  // Breakpoint types
  BreakpointEntry,
  Breakpoint,
  // Condition types
  Condition,
  ConditionRecord,
  ConditionConfig,
  // System types
  TokenFn,
  CssFn,
  Layers,
  SystemContext,
  ThemingConfig,
  PreflightConfig,
  CascadeLayer,
  SystemConfig,
  SystemQuery,
} from "./types"
