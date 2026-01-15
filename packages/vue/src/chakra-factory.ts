/**
 * Chakra factory - Create styled Vue components with Chakra UI's styling system.
 *
 * The chakra factory provides a way to create components that integrate with
 * Chakra UI's theming system, similar to the React implementation.
 */
import {
  type Dict,
  type SystemStyleObject,
  omitThemingProps,
} from "@chakra-ui/system-core"
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type DefineComponent,
  type FormHTMLAttributes,
  type HTMLAttributes,
  type ImgHTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type PropType,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
  computed,
  defineComponent,
  h,
} from "vue"
import type { ChakraProps } from "./types"

/**
 * HTML element types mapped to their attribute types
 */
interface HTMLElementAttributeMap {
  a: AnchorHTMLAttributes
  button: ButtonHTMLAttributes
  div: HTMLAttributes
  form: FormHTMLAttributes
  img: ImgHTMLAttributes
  input: InputHTMLAttributes
  label: LabelHTMLAttributes
  select: SelectHTMLAttributes
  span: HTMLAttributes
  textarea: TextareaHTMLAttributes
  [key: string]: HTMLAttributes
}

/**
 * Base props that all chakra components receive
 */
interface ChakraComponentProps extends ChakraProps {
  /**
   * Render the component as a different element
   */
  as?: string | DefineComponent<any, any, any>
}

/**
 * Create a chakra-styled component from an HTML element or Vue component.
 *
 * @param element - The base element or component to style
 * @returns A Vue component with Chakra styling support
 *
 * @example
 * ```ts
 * // Create a styled div
 * const Box = chakra('div')
 *
 * // Use in template
 * // <Box :sx="{ padding: 4, bg: 'blue.500' }">Content</Box>
 *
 * // With 'as' prop for polymorphism
 * // <Box as="section" :sx="{ padding: 4 }">Section content</Box>
 * ```
 */
export function chakra<T extends keyof HTMLElementAttributeMap>(
  element: T,
): DefineComponent<ChakraComponentProps & HTMLElementAttributeMap[T]>
export function chakra(
  element: string | DefineComponent<any, any, any>,
): DefineComponent<ChakraComponentProps & HTMLAttributes>
export function chakra(element: string | DefineComponent<any, any, any>) {
  return defineComponent({
    name: `chakra.${typeof element === "string" ? element : "component"}`,
    inheritAttrs: false,
    props: {
      // Theming props
      variant: String,
      size: String,
      colorPalette: String,
      // Style props
      sx: Object as PropType<SystemStyleObject>,
      __css: Object as PropType<SystemStyleObject>,
      // Polymorphism
      as: [String, Object] as PropType<string | DefineComponent<any, any, any>>,
    },
    setup(props, { slots, attrs }) {
      // Note: In a full implementation, this would integrate with the styling system
      // to convert sx props to actual CSS. For now, we merge styles manually.

      const mergedStyles = computed(() => {
        // Merge __css (internal styles) with sx (user styles)
        // sx takes precedence
        return {
          ...props.__css,
          ...props.sx,
        }
      })

      // Remove theming props from attrs passed to element
      const elementProps = computed(() => {
        return omitThemingProps(attrs as Dict)
      })

      return () => {
        const Component = props.as || element

        return h(
          Component,
          {
            ...elementProps.value,
            style: mergedStyles.value,
          },
          slots.default?.(),
        )
      }
    },
  }) as DefineComponent<ChakraComponentProps & HTMLAttributes>
}

/**
 * Proxy-based chakra factory for convenient access to styled elements.
 *
 * @example
 * ```vue
 * <script setup>
 * import { chakra } from '@chakra-ui/vue'
 * </script>
 *
 * <template>
 *   <chakra.div :sx="{ p: 4, bg: 'blue.500' }">
 *     <chakra.span :sx="{ color: 'white' }">Hello</chakra.span>
 *   </chakra.div>
 * </template>
 * ```
 */
export const styledFactory = new Proxy(chakra, {
  get(target, prop: string) {
    // Return a pre-created component for common HTML elements
    if (typeof prop === "string" && prop !== "then") {
      return target(prop)
    }
    return undefined
  },
}) as typeof chakra & {
  [K in keyof HTMLElementAttributeMap]: DefineComponent<
    ChakraComponentProps & HTMLElementAttributeMap[K]
  >
}

/**
 * Create a component with default styles applied.
 *
 * @param element - Base element or component
 * @param baseStyles - Default styles to apply
 * @returns Styled component with base styles
 *
 * @example
 * ```ts
 * const Card = styled('div', {
 *   bg: 'white',
 *   borderRadius: 'lg',
 *   boxShadow: 'md',
 *   padding: 4,
 * })
 * ```
 */
export function styled<T extends keyof HTMLElementAttributeMap>(
  element: T,
  baseStyles: SystemStyleObject,
): DefineComponent<ChakraComponentProps & HTMLElementAttributeMap[T]>
export function styled(
  element: string | DefineComponent<any, any, any>,
  baseStyles: SystemStyleObject,
): DefineComponent<ChakraComponentProps & HTMLAttributes>
export function styled(
  element: string | DefineComponent<any, any, any>,
  baseStyles: SystemStyleObject,
) {
  const BaseComponent = chakra(element as string)

  return defineComponent({
    name: `styled.${typeof element === "string" ? element : "component"}`,
    inheritAttrs: false,
    props: {
      ...BaseComponent.props,
    },
    setup(props, { slots, attrs }) {
      const mergedStyles = computed(() => {
        // Merge base styles < __css < sx
        return {
          ...baseStyles,
          ...(props as any).__css,
          ...(props as any).sx,
        }
      })

      return () => {
        return h(
          BaseComponent,
          {
            ...attrs,
            ...(props as any),
            __css: mergedStyles.value,
            sx: undefined, // Already merged into __css
          },
          slots.default?.(),
        )
      }
    },
  }) as DefineComponent<ChakraComponentProps & HTMLAttributes>
}

/**
 * Helper to forward ref in Vue components.
 *
 * In Vue, refs are handled differently than React. This helper creates
 * a component that properly exposes its root element ref.
 *
 * @param component - Component to wrap with ref forwarding
 * @returns Component with ref forwarding
 *
 * @example
 * ```ts
 * const Button = forwardRef(
 *   defineComponent({
 *     setup(props, { slots, expose }) {
 *       const buttonRef = ref<HTMLButtonElement>()
 *       expose({ el: buttonRef })
 *
 *       return () => h('button', { ref: buttonRef }, slots.default?.())
 *     }
 *   })
 * )
 * ```
 */
export function forwardRef<T extends DefineComponent<any, any, any>>(
  component: T,
): T {
  // In Vue, defineComponent with expose already handles ref forwarding
  // This is a no-op placeholder for API compatibility with React patterns
  return component
}
