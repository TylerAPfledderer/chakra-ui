/**
 * Type definitions for @chakra-ui/vue.
 * These types are specific to the Vue implementation.
 */
import type {
  Dict,
  SystemStyleObject,
  ThemingProps,
} from "@chakra-ui/system-core"
import type { ComputedRef, InjectionKey, Ref } from "vue"

/**
 * Color mode values
 */
export type ColorMode = "light" | "dark"

/**
 * Theme object type - represents a complete Chakra UI theme
 */
export interface Theme extends Dict {
  colors?: Dict
  components?: Dict
  breakpoints?: Dict
  [key: string]: any
}

/**
 * Chakra context provided by ChakraProvider
 */
export interface ChakraContext {
  /**
   * The processed theme with CSS variables
   */
  theme: ComputedRef<Theme>
  /**
   * Current color mode
   */
  colorMode: Ref<ColorMode>
  /**
   * Function to toggle color mode
   */
  toggleColorMode: () => void
  /**
   * Function to set color mode explicitly
   */
  setColorMode: (mode: ColorMode) => void
}

/**
 * Color mode context
 */
export interface ColorModeContext {
  colorMode: Ref<ColorMode>
  toggleColorMode: () => void
  setColorMode: (mode: ColorMode) => void
}

/**
 * Injection keys for Vue's provide/inject system
 */
export const ChakraContextKey: InjectionKey<ChakraContext> =
  Symbol("chakra-context")
export const ThemeKey: InjectionKey<ComputedRef<Theme>> = Symbol("chakra-theme")
export const ColorModeKey: InjectionKey<ColorModeContext> =
  Symbol("chakra-color-mode")

/**
 * Props for ChakraProvider component
 */
export interface ChakraProviderProps {
  /**
   * The theme object to use
   */
  theme: Theme
  /**
   * Initial color mode
   * @default 'light'
   */
  colorModeValue?: ColorMode
  /**
   * Whether to inject global CSS reset styles
   * @default true
   */
  resetCSS?: boolean
}

/**
 * Props for components that accept theming
 */
export interface ChakraProps extends ThemingProps {
  /**
   * Custom sx styles
   */
  sx?: SystemStyleObject
  /**
   * Internal CSS styles (used by component library)
   */
  __css?: SystemStyleObject
}

/**
 * Options for useStyleConfig composable
 */
export interface UseStyleConfigOptions extends ThemingProps {
  /**
   * Custom style config to override theme config
   */
  styleConfig?: Dict
}

/**
 * Result of style resolution - can be single or multi-part
 */
export type StyleConfigResult = SystemStyleObject | Dict<SystemStyleObject>
