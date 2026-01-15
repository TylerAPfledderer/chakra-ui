import type { CssFn, Dict, SystemStyleObject } from "@chakra-ui/system-core"
import { type ComputedRef, computed } from "vue"
import { useSystem } from "./use-system"

/**
 * Composable to create CSS styles from a style object.
 * Uses the system's css function to process style props and generate CSS.
 *
 * @param styles - A style object or array of style objects
 * @returns A computed ref containing the processed CSS object
 *
 * @example
 * ```vue
 * <script setup>
 * const styles = useCss({
 *   color: 'red.500',
 *   padding: '4',
 *   _hover: {
 *     color: 'red.600'
 *   }
 * })
 * </script>
 *
 * <template>
 *   <div :style="styles">Hello</div>
 * </template>
 * ```
 */
export function useCss(
  ...styles: (SystemStyleObject | undefined)[]
): ComputedRef<Dict> {
  const sys = useSystem()

  return computed(() => {
    return sys.css(...styles)
  })
}

/**
 * Composable to create a css function that can be called with style objects.
 * This is useful when you need to generate styles dynamically.
 *
 * @returns The system's css function
 *
 * @example
 * ```vue
 * <script setup>
 * const css = useCssFn()
 *
 * const buttonStyles = computed(() =>
 *   css({
 *     padding: props.size === 'sm' ? '2' : '4',
 *     color: 'blue.500'
 *   })
 * )
 * </script>
 * ```
 */
export function useCssFn(): CssFn {
  const sys = useSystem()
  return sys.css
}
