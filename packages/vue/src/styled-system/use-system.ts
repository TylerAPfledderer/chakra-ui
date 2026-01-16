import type { SystemContext } from "@chakra-ui/system-core"
import { inject } from "vue"
import { SystemContextKey } from "./provider"

/**
 * Composable to access the Chakra system context.
 * Must be used within a ChakraProvider component.
 *
 * @returns The SystemContext from system-core
 * @throws Error if used outside of ChakraProvider
 *
 * @example
 * ```vue
 * <script setup>
 * const sys = useSystem()
 * const styles = sys.css({ color: 'red', padding: '4' })
 * </script>
 * ```
 */
export function useSystem(): SystemContext {
  const system = inject<SystemContext>(SystemContextKey)

  if (!system) {
    throw new Error(
      "[Chakra UI] useSystem must be used within a ChakraProvider. " +
        'Make sure to wrap your app with <ChakraProvider :value="system">.',
    )
  }

  return system
}
