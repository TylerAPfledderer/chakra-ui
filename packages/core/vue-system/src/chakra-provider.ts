/**
 * ChakraProvider - The root provider component for Chakra UI Vue.
 *
 * This component provides the theme and color mode context to all
 * Chakra UI components in the component tree.
 */
import { type PropType, computed, defineComponent, provide, ref } from "vue"
import {
  type ChakraContext,
  ChakraContextKey,
  type ColorMode,
  type ColorModeContext,
  ColorModeKey,
  type Theme,
  ThemeKey,
} from "./types"

/**
 * ChakraProvider component
 *
 * Wraps your application to provide theme and color mode context
 * to all Chakra UI components.
 *
 * @example
 * ```vue
 * <script setup>
 * import { ChakraProvider } from '@chakra-ui/vue-system'
 * import { theme } from '@chakra-ui/theme'
 * </script>
 *
 * <template>
 *   <ChakraProvider :theme="theme">
 *     <App />
 *   </ChakraProvider>
 * </template>
 * ```
 */
export const ChakraProvider = defineComponent({
  name: "ChakraProvider",
  props: {
    /**
     * The theme object to use for styling
     */
    theme: {
      type: Object as PropType<Theme>,
      required: true,
    },
    /**
     * Initial color mode value
     * @default 'light'
     */
    colorModeValue: {
      type: String as PropType<ColorMode>,
      default: "light",
    },
    /**
     * Whether to include CSS reset styles
     * @default true
     */
    resetCSS: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    // Color mode state
    const colorMode = ref<ColorMode>(props.colorModeValue)

    // Color mode functions
    const toggleColorMode = () => {
      colorMode.value = colorMode.value === "light" ? "dark" : "light"
    }

    const setColorMode = (mode: ColorMode) => {
      colorMode.value = mode
    }

    // Computed theme (processes theme with CSS variables if needed)
    const processedTheme = computed(() => {
      // For now, return the theme as-is
      // In the future, this could process CSS variables
      return props.theme
    })

    // Create color mode context
    const colorModeContext: ColorModeContext = {
      colorMode,
      toggleColorMode,
      setColorMode,
    }

    // Create full Chakra context
    const chakraContext: ChakraContext = {
      theme: processedTheme,
      colorMode,
      toggleColorMode,
      setColorMode,
    }

    // Provide contexts
    provide(ChakraContextKey, chakraContext)
    provide(ThemeKey, processedTheme)
    provide(ColorModeKey, colorModeContext)

    return () => {
      const children = slots.default?.()

      // Optionally wrap with CSS reset styles
      if (props.resetCSS) {
        // For now, just render children
        // CSS reset can be injected via a style tag or global styles
        return children
      }

      return children
    }
  },
})

/**
 * ChakraBaseProvider - A minimal provider that only provides theme context.
 *
 * Use this when you want to manage color mode yourself or don't need
 * the full ChakraProvider functionality.
 */
export const ChakraBaseProvider = defineComponent({
  name: "ChakraBaseProvider",
  props: {
    theme: {
      type: Object as PropType<Theme>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const processedTheme = computed(() => props.theme)

    provide(ThemeKey, processedTheme)

    return () => slots.default?.()
  },
})
