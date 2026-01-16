import type { SystemContext } from "@chakra-ui/system-core"
import type { InjectionKey, PropType } from "vue"
import { defineComponent, provide } from "vue"

/**
 * Injection key for the Chakra system context
 */
export const ChakraContextKey: InjectionKey<SystemContext> =
  Symbol("ChakraContext")

/**
 * Alias for backwards compatibility
 */
export const SystemContextKey = ChakraContextKey

export interface ChakraProviderProps {
  value: SystemContext
}

/**
 * Vue provider component for Chakra UI.
 * Provides the SystemContext to all descendant components.
 * Styling is handled by Panda CSS.
 *
 * @example
 * ```vue
 * <template>
 *   <ChakraProvider :value="system">
 *     <App />
 *   </ChakraProvider>
 * </template>
 *
 * <script setup>
 * import { ChakraProvider } from '@chakra-ui/vue'
 * import { system } from './theme'
 * </script>
 * ```
 */
export const ChakraProvider = defineComponent({
  name: "ChakraProvider",
  props: {
    value: {
      type: Object as PropType<SystemContext>,
      required: true,
    },
  },
  setup(props, { slots }) {
    provide(ChakraContextKey, props.value)
    return () => slots.default?.()
  },
})

/**
 * Alias for backwards compatibility
 */
export const VueChakraProvider = ChakraProvider
