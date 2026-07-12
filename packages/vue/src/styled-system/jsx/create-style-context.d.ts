/* eslint-disable */
import type { SlotRecipeRuntimeFn, RecipeVariantProps } from '../types/recipe';
import type { JsxHTMLProps, JsxStyleProps, Assign } from '../types/system-types';
import type { JsxFactoryOptions, DataAttrs, AsProps } from '../types/jsx';
import type { Component, FunctionalComponent, NativeElements } from 'vue'

interface UnstyledProps {
  unstyled?: boolean | undefined
}

interface WithProviderOptions<P = {}> {
  defaultProps?: (Partial<P> & DataAttrs) | undefined
}

// Add v-model support types
interface VModelProps {
  modelValue?: any
  'onUpdate:modelValue'?: (value: any) => void
}

type SvaFn<S extends string = any> = SlotRecipeRuntimeFn<S, any>
interface SlotRecipeFn {
  __type: any
  __slot: string
  (props?: any): any
}
type SlotRecipe = SvaFn | SlotRecipeFn

type InferSlot<R extends SlotRecipe> = R extends SlotRecipeFn ? R['__slot'] : R extends SvaFn<infer S> ? S : never

type IntrinsicElement = keyof NativeElements
type ElementType = IntrinsicElement | Component

type ComponentProps<T extends ElementType> = T extends IntrinsicElement
  ? NativeElements[T]
  : T extends Component<infer Props>
  ? Props
  : never

type StyleContextProvider<T extends ElementType, R extends SlotRecipe> = FunctionalComponent<
  JsxHTMLProps<ComponentProps<T> & UnstyledProps & AsProps & VModelProps, Assign<RecipeVariantProps<R>, JsxStyleProps>>
>

type StyleContextRootProvider<T extends ElementType, R extends SlotRecipe> = FunctionalComponent<
  ComponentProps<T> & UnstyledProps & VModelProps & RecipeVariantProps<R>
>

type StyleContextConsumer<T extends ElementType> = FunctionalComponent<
  JsxHTMLProps<ComponentProps<T> & UnstyledProps & AsProps & VModelProps, JsxStyleProps>
>

export interface StyleContext<R extends SlotRecipe> {
  withRootProvider: <T extends ElementType>(
    Component: T,
    options?: WithProviderOptions<ComponentProps<T>> | undefined
  ) => StyleContextRootProvider<T, R>
  withProvider: <T extends ElementType>(
    Component: T,
    slot: InferSlot<R>,
    options?: JsxFactoryOptions<ComponentProps<T>> | undefined
  ) => StyleContextProvider<T, R>
  withContext: <T extends ElementType>(
    Component: T,
    slot: InferSlot<R>,
    options?: JsxFactoryOptions<ComponentProps<T>> | undefined
  ) => StyleContextConsumer<T>
}

export declare function createStyleContext<R extends SlotRecipe>(recipe: R): StyleContext<R>