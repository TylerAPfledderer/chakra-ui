/**
 * Type definitions for @chakra-ui/vue.
 * These types are specific to the Vue implementation.
 */
import type { SystemStyleObject, ThemingProps } from "@chakra-ui/system-core"

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
