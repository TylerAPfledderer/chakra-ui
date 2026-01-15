/**
 * Vue composables for resolving component styles from the theme.
 *
 * These composables provide the same functionality as React's useStyleConfig
 * and useMultiStyleConfig hooks, adapted for Vue's reactivity system.
 */
import {
  type Dict,
  type SystemStyleObject,
  resolveComponentStyleConfig,
} from "@chakra-ui/system-core"
import { type ComputedRef, computed } from "vue"
import type { UseStyleConfigOptions } from "./types"
import { useColorMode, useTheme } from "./use-chakra"

/**
 * useStyleConfig - Resolve single-part component styles from the theme.
 *
 * This composable looks up a component's style configuration in the theme
 * and resolves it based on the provided variant, size, and colorPalette props.
 *
 * @param themeKey - The component key in theme.components (e.g., 'Button', 'Input')
 * @param props - Theming props (variant, size, colorPalette) and optional styleConfig override
 * @returns Computed ref containing resolved styles
 *
 * @example
 * ```ts
 * // Basic usage
 * const styles = useStyleConfig('Button', { variant: 'solid', size: 'md' })
 *
 * // With reactive props
 * const props = defineProps<{ variant?: string; size?: string }>()
 * const styles = useStyleConfig('Button', props)
 *
 * // Access in template
 * // <button :style="styles.value">Click me</button>
 * ```
 */
export function useStyleConfig(
  themeKey: string,
  props: UseStyleConfigOptions = {},
): ComputedRef<SystemStyleObject> {
  const theme = useTheme()
  const { colorMode } = useColorMode()

  return computed(() => {
    const result = resolveComponentStyleConfig({
      themeKey,
      theme: theme.value,
      colorMode: colorMode.value,
      props: {
        variant: props.variant,
        size: props.size,
        colorPalette: props.colorPalette,
      },
      styleConfig: props.styleConfig,
    })

    // For single-part components, return the styles directly
    // resolveComponentStyleConfig may return Dict<SystemStyleObject> for multi-part
    // but useStyleConfig is specifically for single-part components
    if (typeof result === "object" && !isMultiPartResult(result)) {
      return result as SystemStyleObject
    }

    return result as SystemStyleObject
  })
}

/**
 * useMultiStyleConfig - Resolve multi-part (slot) component styles from the theme.
 *
 * This composable is for components with multiple styled parts (slots),
 * like Accordion (root, item, button, panel) or Modal (overlay, content, header, body, footer).
 *
 * @param themeKey - The component key in theme.components
 * @param props - Theming props and optional styleConfig override
 * @returns Computed ref containing an object with styles for each slot
 *
 * @example
 * ```ts
 * // For Accordion component
 * const styles = useMultiStyleConfig('Accordion', { variant: 'enclosed' })
 *
 * // Access individual slot styles
 * // <div :style="styles.value.root">
 * //   <div :style="styles.value.item">...</div>
 * // </div>
 *
 * // With reactive props
 * const props = defineProps<{ size?: string }>()
 * const styles = useMultiStyleConfig('Modal', props)
 * ```
 */
export function useMultiStyleConfig(
  themeKey: string,
  props: UseStyleConfigOptions = {},
): ComputedRef<Dict<SystemStyleObject>> {
  const theme = useTheme()
  const { colorMode } = useColorMode()

  return computed(() => {
    const result = resolveComponentStyleConfig({
      themeKey,
      theme: theme.value,
      colorMode: colorMode.value,
      props: {
        variant: props.variant,
        size: props.size,
        colorPalette: props.colorPalette,
      },
      styleConfig: props.styleConfig,
    })

    // Ensure we return a Dict<SystemStyleObject> for multi-part components
    if (isMultiPartResult(result)) {
      return result as Dict<SystemStyleObject>
    }

    // If it's a single-part style, wrap it in a 'root' slot
    return { root: result as SystemStyleObject }
  })
}

/**
 * Helper to check if the result is a multi-part style config result.
 * Multi-part results have nested objects for each slot.
 */
function isMultiPartResult(
  result: SystemStyleObject | Dict<SystemStyleObject>,
): result is Dict<SystemStyleObject> {
  if (!result || typeof result !== "object") return false

  // Check if the first value is an object (indicating slots)
  const firstKey = Object.keys(result)[0]
  if (!firstKey) return false

  const firstValue = result[firstKey]

  // If the first value is an object and looks like CSS properties,
  // it's likely a single-part config
  if (typeof firstValue === "object" && firstValue !== null) {
    // Check if it has common CSS property names at the top level
    const cssPropertyNames = [
      "display",
      "position",
      "flex",
      "grid",
      "padding",
      "margin",
      "color",
      "background",
      "border",
      "font",
      "width",
      "height",
      "top",
      "left",
      "right",
      "bottom",
      "transform",
      "opacity",
      "transition",
      "animation",
      "cursor",
      "overflow",
      "visibility",
      "zIndex",
      "boxShadow",
      "textAlign",
      "lineHeight",
      "letterSpacing",
    ]

    // If the keys of firstValue are CSS properties, result is multi-part
    const firstValueKeys = Object.keys(firstValue)
    const hasCssProperties = firstValueKeys.some((key) =>
      cssPropertyNames.includes(key),
    )

    return hasCssProperties
  }

  // If first value is a string/number, it's CSS value, so single-part
  return false
}

/**
 * createStylesContext - Create a provide/inject context for sharing styles.
 *
 * Useful for compound components where parent needs to share styles with children.
 *
 * @param name - Name for the context (used in error messages)
 * @returns Object with Provider component and useStyles composable
 *
 * @example
 * ```ts
 * // In parent component file
 * export const [StylesProvider, useAccordionStyles] = createStylesContext('Accordion')
 *
 * // In parent component
 * const styles = useMultiStyleConfig('Accordion', props)
 * // <StylesProvider :value="styles.value">
 *
 * // In child component
 * const styles = useAccordionStyles()
 * // <div :style="styles.item">
 * ```
 */
export function createStylesContext(name: string) {
  const contextKey = Symbol(`${name}StylesContext`)

  return {
    /**
     * Injection key for the styles context
     */
    key: contextKey,

    /**
     * Provide styles to children
     */
    provide: (styles: Dict<SystemStyleObject>) => {
      const { provide } = require("vue")
      provide(contextKey, styles)
    },

    /**
     * Inject styles from parent
     */
    inject: (): Dict<SystemStyleObject> => {
      const { inject } = require("vue")
      const styles = inject(contextKey)

      if (!styles) {
        throw new Error(
          `[Chakra UI] use${name}Styles must be used within a ${name} component.`,
        )
      }

      return styles as Dict<SystemStyleObject>
    },
  }
}
