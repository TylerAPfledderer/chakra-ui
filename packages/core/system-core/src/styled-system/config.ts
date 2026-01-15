import type { Dict } from "../utils"
import type { CompositionStyles } from "./composition"
import type {
  ConditionRecord,
  CssKeyframes,
  RecipeDefinition,
  RecipeVariantRecord,
  SemanticTokenDefinition,
  SlotRecipeDefinition,
  SlotRecipeVariantRecord,
  SystemConfig,
  SystemStyleObject,
  TokenDefinition,
} from "./types"

/* -----------------------------------------------------------------------------
 * Identity functions for type inference
 * -----------------------------------------------------------------------------*/

type SystemStyleIdentityFn = (style: SystemStyleObject) => SystemStyleObject
type GlobalStyleIdentityFn = (
  global: Dict<SystemStyleObject>,
) => Dict<SystemStyleObject>
type KeyframeIdentityFn = (keyframes: CssKeyframes) => CssKeyframes
type RecipeIdentityFn = <T extends RecipeVariantRecord>(
  config: RecipeDefinition<T>,
) => RecipeDefinition<T>
type SlotRecipeIdentityFn = <
  S extends string,
  T extends SlotRecipeVariantRecord<S>,
>(
  config: SlotRecipeDefinition<S, T>,
) => SlotRecipeDefinition<S, T>

/* -----------------------------------------------------------------------------
 * Core creators
 * -----------------------------------------------------------------------------*/

export const defineConditions = <T extends ConditionRecord>(v: T): T => v

export const defineRecipe: RecipeIdentityFn = (v) => v

export const defineSlotRecipe: SlotRecipeIdentityFn = (v) => v

export const defineKeyframes: KeyframeIdentityFn = (v) => v

export const defineGlobalStyles: GlobalStyleIdentityFn = (v) => v

export const defineStyle: SystemStyleIdentityFn = (v) => v

export const defineTextStyles = (v: CompositionStyles["textStyles"]) => v

export const defineAnimationStyles = (
  v: CompositionStyles["animationStyles"],
) => v

export const defineLayerStyles = (v: CompositionStyles["layerStyles"]) => v

/* -----------------------------------------------------------------------------
 * Token creators
 * -----------------------------------------------------------------------------*/

type ProxyValue<T> = {
  <Value>(definition: Value extends T ? Value : T): Value
} & {
  [K in keyof Required<T>]: <Value>(
    definition: Value extends T[K] ? Value : T[K],
  ) => Value
}

function createProxy<T>(): ProxyValue<T> {
  const identity = (v: unknown) => v
  return new Proxy(identity as any, {
    get() {
      return identity
    },
  })
}

export const defineTokens = /* @__PURE__ */ createProxy<TokenDefinition>()
export const defineSemanticTokens =
  /* @__PURE__ */ createProxy<SemanticTokenDefinition>()

/* -----------------------------------------------------------------------------
 * System creators
 * -----------------------------------------------------------------------------*/

export const defineConfig = (v: SystemConfig) => v

export { mergeConfigs } from "./merge-config"
