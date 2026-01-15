import type {
  RecipeDefinition,
  RecipeRuntimeFn,
  RecipeVariantRecord,
} from "@chakra-ui/system-core"
import { type ComputedRef, computed } from "vue"
import { useSystem } from "./use-system"

export interface UseRecipeOptions<
  T extends RecipeVariantRecord = RecipeVariantRecord,
> {
  /**
   * The key to look up the recipe in the system's theme
   */
  key?: string
  /**
   * A custom recipe definition to use instead of looking up by key
   */
  recipe?: RecipeDefinition<T>
}

/**
 * Composable to create a recipe function from a definition or theme key.
 * The recipe function can be used to generate styles based on variants.
 *
 * @param options - Recipe options (key or recipe definition)
 * @returns A computed ref containing the recipe runtime function
 *
 * @example
 * ```vue
 * <script setup>
 * // Using a theme key
 * const buttonRecipe = useRecipe({ key: 'Button' })
 *
 * // Using a custom recipe
 * const customRecipe = useRecipe({
 *   recipe: {
 *     base: { padding: '4' },
 *     variants: {
 *       size: {
 *         sm: { fontSize: 'sm' },
 *         md: { fontSize: 'md' },
 *       }
 *     }
 *   }
 * })
 *
 * // Get styles for a variant
 * const styles = computed(() => buttonRecipe.value({ size: 'md' }))
 * </script>
 * ```
 */
export function useRecipe<T extends RecipeVariantRecord = RecipeVariantRecord>(
  options: UseRecipeOptions<T> = {},
): ComputedRef<RecipeRuntimeFn<T>> {
  const sys = useSystem()

  return computed(() => {
    const { key, recipe } = options

    // Get recipe from theme by key, or use provided recipe
    const recipeConfig = recipe ?? (key ? sys.getRecipe(key) : {})

    // Create the recipe function using system's cva
    return sys.cva(structuredClone(recipeConfig)) as RecipeRuntimeFn<T>
  })
}

/**
 * Composable to get a recipe from the system's theme by key.
 * This is a convenience wrapper around useRecipe for theme-based recipes.
 *
 * @param key - The theme key for the recipe
 * @returns A computed ref containing the recipe runtime function
 */
export function useThemeRecipe<
  T extends RecipeVariantRecord = RecipeVariantRecord,
>(key: string): ComputedRef<RecipeRuntimeFn<T>> {
  return useRecipe<T>({ key })
}
