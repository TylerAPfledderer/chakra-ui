import type {
  SlotRecipeDefinition,
  SlotRecipeRuntimeFn,
  SlotRecipeVariantRecord,
} from "@chakra-ui/system-core"
import { type ComputedRef, computed } from "vue"
import { useSystem } from "./use-system"

export interface UseSlotRecipeOptions<
  S extends string = string,
  T extends SlotRecipeVariantRecord<S> = SlotRecipeVariantRecord<S>,
> {
  /**
   * The key to look up the slot recipe in the system's theme
   */
  key?: string
  /**
   * A custom slot recipe definition to use instead of looking up by key
   */
  recipe?: SlotRecipeDefinition<S, T>
}

/**
 * Composable to create a slot recipe function from a definition or theme key.
 * Slot recipes are used for multi-part components where each part (slot) has its own styles.
 *
 * @param options - Slot recipe options (key or recipe definition)
 * @returns A computed ref containing the slot recipe runtime function
 *
 * @example
 * ```vue
 * <script setup>
 * // Using a theme key
 * const cardRecipe = useSlotRecipe({ key: 'Card' })
 *
 * // Using a custom slot recipe
 * const customRecipe = useSlotRecipe({
 *   recipe: {
 *     slots: ['root', 'header', 'body'],
 *     base: {
 *       root: { padding: '4' },
 *       header: { fontWeight: 'bold' },
 *       body: { color: 'gray.600' },
 *     },
 *     variants: {
 *       size: {
 *         sm: { root: { padding: '2' } },
 *         md: { root: { padding: '4' } },
 *       }
 *     }
 *   }
 * })
 *
 * // Get styles for each slot
 * const styles = computed(() => cardRecipe.value({ size: 'md' }))
 * // styles.value.root, styles.value.header, styles.value.body
 * </script>
 * ```
 */
export function useSlotRecipe<
  S extends string = string,
  T extends SlotRecipeVariantRecord<S> = SlotRecipeVariantRecord<S>,
>(
  options: UseSlotRecipeOptions<S, T> = {},
): ComputedRef<SlotRecipeRuntimeFn<S, T>> {
  const sys = useSystem()

  return computed(() => {
    const { key, recipe } = options

    // Get slot recipe from theme by key, or use provided recipe
    const recipeConfig =
      recipe ?? (key ? sys.getSlotRecipe(key) : { slots: [] })

    // Create the slot recipe function using system's sva
    return sys.sva(structuredClone(recipeConfig)) as SlotRecipeRuntimeFn<S, T>
  })
}

/**
 * Composable to get a slot recipe from the system's theme by key.
 * This is a convenience wrapper around useSlotRecipe for theme-based slot recipes.
 *
 * @param key - The theme key for the slot recipe
 * @returns A computed ref containing the slot recipe runtime function
 */
export function useThemeSlotRecipe<
  S extends string = string,
  T extends SlotRecipeVariantRecord<S> = SlotRecipeVariantRecord<S>,
>(key: string): ComputedRef<SlotRecipeRuntimeFn<S, T>> {
  return useSlotRecipe<S, T>({ key })
}
