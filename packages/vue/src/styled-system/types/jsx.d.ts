/* eslint-disable */
import type { Component, FunctionalComponent, NativeElements } from "vue"
import type {
  RecipeDefinition,
  RecipeSelection,
  RecipeVariantRecord,
} from "./recipe"
import type {
  Assign,
  DistributiveOmit,
  DistributiveUnion,
  JsxHTMLProps,
  JsxStyleProps,
  Pretty,
} from "./system-types"

export type IntrinsicElement = keyof NativeElements

export type ElementType = IntrinsicElement | Component

export type ComponentProps<T extends ElementType> = T extends IntrinsicElement
  ? NativeElements[T]
  : T extends Component<infer Props>
    ? Props
    : never

interface Dict {
  [k: string]: unknown
}

export type DataAttrs = Record<`data-${string}`, unknown>

export interface UnstyledProps {
  /**
   * Whether to remove recipe styles
   */
  unstyled?: boolean | undefined
}

export interface AsProps {
  /**
   * The element to render as
   */
  as?: ElementType | undefined
}

export interface ChakraComponent<T extends ElementType, P extends Dict = {}>
  extends FunctionalComponent<
    JsxHTMLProps<
      ComponentProps<T> & UnstyledProps & AsProps,
      Assign<JsxStyleProps, P>
    >
  > {}

interface RecipeFn {
  __type: any
}

export interface JsxFactoryOptions<TProps extends Dict> {
  dataAttr?: boolean
  defaultProps?: Partial<TProps> & DataAttrs
  shouldForwardProp?: (prop: string, variantKeys: string[]) => boolean
  forwardProps?: string[]
}

export type JsxRecipeProps<
  T extends ElementType,
  P extends RecipeFn,
> = JsxHTMLProps<
  ComponentProps<T> & UnstyledProps & AsProps,
  Assign<JsxStyleProps, P["__type"]>
>

export type JsxElement<T extends ElementType, P> =
  T extends ChakraComponent<infer A, infer B>
    ? ChakraComponent<A, Pretty<DistributiveUnion<P, B>>>
    : ChakraComponent<T, P>

export interface JsxFactory {
  <T extends ElementType>(component: T): ChakraComponent<T, {}>
  <T extends ElementType, P extends RecipeVariantRecord>(
    component: T,
    recipe: RecipeDefinition<P>,
    options?: JsxFactoryOptions<JsxRecipeProps<T, RecipeSelection<P>>>,
  ): JsxElement<T, RecipeSelection<P>>
  <T extends ElementType, P extends RecipeFn>(
    component: T,
    recipeFn: P,
    options?: JsxFactoryOptions<JsxRecipeProps<T, P["__type"]>>,
  ): JsxElement<T, P["__type"]>
}

export type JsxElements = {
  [K in IntrinsicElement]: ChakraComponent<K, {}>
}

export type Chakra = JsxFactory & JsxElements

export type HTMLChakraProps<T extends ElementType> = JsxHTMLProps<
  ComponentProps<T> & UnstyledProps & AsProps,
  JsxStyleProps
>

export type ChakraVariantProps<T extends ChakraComponent<any, any>> =
  T extends ChakraComponent<any, infer Props> ? Props : never
