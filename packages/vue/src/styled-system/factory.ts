import type { Dict, SystemStyleObject } from "@chakra-ui/system-core"
import {
  type DefineComponent,
  type HTMLAttributes,
  type PropType,
  computed,
  defineComponent,
  h,
} from "vue"
import { useSystem } from "./use-system"

/**
 * Props for chakra factory components
 */
export interface ChakraProps {
  /**
   * The element or component to render as
   */
  as?: string | object
  /**
   * Internal CSS styles (lower priority)
   */
  __css?: SystemStyleObject
  /**
   * User-provided styles (higher priority)
   */
  sx?: SystemStyleObject
}

type ElementType = keyof HTMLElementTagNameMap

/**
 * Creates a styled Vue component from an HTML element.
 * The component supports style props, __css, and sx props for styling.
 *
 * @param element - The HTML element tag name (e.g., 'div', 'span', 'button')
 * @returns A Vue component with Chakra styling support
 *
 * @example
 * ```vue
 * <script setup>
 * const Box = chakra('div')
 * </script>
 *
 * <template>
 *   <Box
 *     :sx="{ padding: '4', color: 'red.500' }"
 *     @click="handleClick"
 *   >
 *     Hello World
 *   </Box>
 * </template>
 * ```
 */
export function chakra<T extends ElementType>(
  element: T,
): DefineComponent<ChakraProps & HTMLAttributes> {
  return defineComponent({
    name: `chakra.${element}`,
    inheritAttrs: false,
    props: {
      as: [String, Object] as PropType<string | object>,
      __css: Object as PropType<SystemStyleObject>,
      sx: Object as PropType<SystemStyleObject>,
    },
    setup(props, { slots, attrs }) {
      const sys = useSystem()

      const resolvedStyles = computed(() => {
        const { css, splitCssProps } = sys

        // Split attrs into style props and element props
        const [styleProps, elementProps] = splitCssProps(attrs as Dict)

        // Merge styles: __css < styleProps < sx
        const mergedStyles = css(
          props.__css ?? {},
          styleProps as SystemStyleObject,
          props.sx ?? {},
        )

        return {
          styles: mergedStyles,
          props: elementProps,
        }
      })

      return () => {
        const Component = (props.as || element) as string
        const { styles, props: elementProps } = resolvedStyles.value

        return h(
          Component,
          {
            ...elementProps,
            style: styles,
          },
          slots.default?.(),
        )
      }
    },
  }) as DefineComponent<ChakraProps & HTMLAttributes>
}

/**
 * Proxy object that provides access to styled elements via property access.
 * Usage: styledFactory.div, styledFactory.span, etc.
 *
 * @example
 * ```vue
 * <script setup>
 * import { styledFactory as chakra } from '@chakra-ui/vue'
 *
 * const Box = chakra.div
 * const Flex = chakra.div // with flex styles applied via sx
 * </script>
 *
 * <template>
 *   <Box :sx="{ padding: '4' }">Content</Box>
 * </template>
 * ```
 */
export const styledFactory = new Proxy(chakra, {
  get(target, prop: string) {
    if (typeof prop === "string" && prop !== "then") {
      return target(prop as ElementType)
    }
    return undefined
  },
}) as typeof chakra & {
  [K in ElementType]: ReturnType<typeof chakra>
}

/**
 * Creates a styled component with default base styles.
 *
 * @param element - The HTML element tag name
 * @param baseStyles - Default styles to apply to the component
 * @returns A Vue component with the base styles applied
 *
 * @example
 * ```vue
 * <script setup>
 * const Card = styled('div', {
 *   padding: '4',
 *   borderRadius: 'md',
 *   boxShadow: 'sm',
 * })
 * </script>
 *
 * <template>
 *   <Card :sx="{ color: 'blue.500' }">Card content</Card>
 * </template>
 * ```
 */
export function styled<T extends ElementType>(
  element: T,
  baseStyles: SystemStyleObject,
): DefineComponent<ChakraProps & HTMLAttributes> {
  return defineComponent({
    name: `styled.${element}`,
    inheritAttrs: false,
    props: {
      as: [String, Object] as PropType<string | object>,
      __css: Object as PropType<SystemStyleObject>,
      sx: Object as PropType<SystemStyleObject>,
    },
    setup(props, { slots, attrs }) {
      const sys = useSystem()

      const resolvedStyles = computed(() => {
        const { css, splitCssProps } = sys

        const [styleProps, elementProps] = splitCssProps(attrs as Dict)

        // Merge styles: baseStyles < __css < styleProps < sx
        const mergedStyles = css(
          baseStyles,
          props.__css ?? {},
          styleProps as SystemStyleObject,
          props.sx ?? {},
        )

        return {
          styles: mergedStyles,
          props: elementProps,
        }
      })

      return () => {
        const Component = (props.as || element) as string
        const { styles, props: elementProps } = resolvedStyles.value

        return h(
          Component,
          {
            ...elementProps,
            style: styles,
          },
          slots.default?.(),
        )
      }
    },
  }) as DefineComponent<ChakraProps & HTMLAttributes>
}

/**
 * Helper for ref forwarding - in Vue this is essentially a no-op
 * as Vue handles refs differently than React. Provided for API compatibility.
 */
export function forwardRef<T>(component: T): T {
  return component
}
