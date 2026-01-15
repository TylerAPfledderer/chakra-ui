/**
 * Vue composables for accessing Chakra UI context.
 *
 * These composables provide access to the theme, color mode, and other
 * Chakra UI context values from within any component.
 */
import { type ComputedRef, computed, inject } from "vue"
import {
  type ChakraContext,
  ChakraContextKey,
  type ColorModeContext,
  ColorModeKey,
  type Theme,
  ThemeKey,
} from "./types"

/**
 * useChakra - Access the full Chakra UI context.
 *
 * Returns the complete Chakra context including theme, color mode,
 * and color mode manipulation functions.
 *
 * @throws Error if used outside of ChakraProvider
 *
 * @example
 * ```ts
 * const { theme, colorMode, toggleColorMode } = useChakra()
 *
 * // Access theme values
 * const primaryColor = computed(() => theme.value.colors?.primary)
 *
 * // Toggle color mode
 * const handleToggle = () => toggleColorMode()
 * ```
 */
export function useChakra(): ChakraContext {
  const context = inject(ChakraContextKey)

  if (!context) {
    throw new Error(
      "[Chakra UI] useChakra must be used within a ChakraProvider. " +
        "Make sure to wrap your application with <ChakraProvider>.",
    )
  }

  return context
}

/**
 * useTheme - Access the current theme.
 *
 * Returns a computed ref of the processed theme object.
 * Use this when you only need theme access without color mode.
 *
 * @throws Error if used outside of ChakraProvider or ChakraBaseProvider
 *
 * @example
 * ```ts
 * const theme = useTheme()
 *
 * // Access theme tokens
 * const spacing = computed(() => theme.value.space?.[4])
 * const color = computed(() => theme.value.colors?.blue?.[500])
 * ```
 */
export function useTheme(): ComputedRef<Theme> {
  const theme = inject(ThemeKey)

  if (!theme) {
    throw new Error(
      "[Chakra UI] useTheme must be used within a ChakraProvider or ChakraBaseProvider. " +
        "Make sure to wrap your application with the appropriate provider.",
    )
  }

  return theme
}

/**
 * useColorMode - Access and manipulate color mode.
 *
 * Returns the current color mode and functions to change it.
 *
 * @throws Error if used outside of ChakraProvider
 *
 * @example
 * ```ts
 * const { colorMode, toggleColorMode, setColorMode } = useColorMode()
 *
 * // Check current mode
 * const isDark = computed(() => colorMode.value === 'dark')
 *
 * // Toggle between light/dark
 * const handleToggle = () => toggleColorMode()
 *
 * // Set specific mode
 * const setDarkMode = () => setColorMode('dark')
 * ```
 */
export function useColorMode(): ColorModeContext {
  const context = inject(ColorModeKey)

  if (!context) {
    throw new Error(
      "[Chakra UI] useColorMode must be used within a ChakraProvider. " +
        "Make sure to wrap your application with <ChakraProvider>.",
    )
  }

  return context
}

/**
 * useColorModeValue - Get a value based on the current color mode.
 *
 * A utility composable that returns different values for light and dark modes.
 *
 * @param lightValue - Value to return in light mode
 * @param darkValue - Value to return in dark mode
 * @returns Computed ref that resolves to the appropriate value
 *
 * @example
 * ```ts
 * // Basic usage
 * const bgColor = useColorModeValue('white', 'gray.800')
 * const textColor = useColorModeValue('gray.800', 'white')
 *
 * // Use in template
 * // <div :style="{ backgroundColor: bgColor.value }">
 * ```
 */
export function useColorModeValue<TLight, TDark>(
  lightValue: TLight,
  darkValue: TDark,
): ComputedRef<TLight | TDark> {
  const { colorMode } = useColorMode()

  return computed(() => {
    return colorMode.value === "light" ? lightValue : darkValue
  })
}

/**
 * useToken - Get a token value from the theme.
 *
 * A utility composable for accessing specific theme token values.
 *
 * @param scale - The theme scale to access (e.g., 'colors', 'space', 'fontSizes')
 * @param token - The token key within the scale
 * @param fallback - Optional fallback value if token doesn't exist
 * @returns Computed ref with the token value
 *
 * @example
 * ```ts
 * // Get a color token
 * const blueColor = useToken('colors', 'blue.500', '#3182ce')
 *
 * // Get a spacing token
 * const spacing = useToken('space', '4', '1rem')
 * ```
 */
export function useToken<T = string>(
  scale: string,
  token: string,
  fallback?: T,
): ComputedRef<T | undefined> {
  const theme = useTheme()

  return computed(() => {
    const scaleObj = theme.value[scale]
    if (!scaleObj) return fallback

    // Handle dot-notation tokens (e.g., 'blue.500')
    const keys = token.split(".")
    let value: any = scaleObj

    for (const key of keys) {
      if (value == null) return fallback
      value = value[key]
    }

    return (value ?? fallback) as T | undefined
  })
}
