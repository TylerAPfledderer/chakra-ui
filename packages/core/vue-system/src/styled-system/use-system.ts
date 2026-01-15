import type { SystemContext } from "@chakra-ui/system-core"
import { inject } from "vue"
import { SystemContextKey } from "./provider"

/**
 * Composable to access the Chakra system context.
 * Must be used within a VueChakraProvider component.
 *
 * @returns The SystemContext from system-core
 * @throws Error if used outside of VueChakraProvider
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
      "[Chakra UI] useSystem must be used within a VueChakraProvider. " +
        'Make sure to wrap your app with <VueChakraProvider :system="system">.',
    )
  }

  return system
}
