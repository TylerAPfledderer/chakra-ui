import { computed, defineComponent, h, inject, provide } from "vue"
import { css, cx, sva } from "../css/index.js"
import { getDisplayName } from "./factory-helper.js"
import { chakra } from "./factory.js"

export function createStyleContext(recipe) {
  const StyleContext = Symbol("StyleContext")
  const isConfigRecipe = "__recipe__" in recipe
  const recipeName =
    isConfigRecipe && recipe.__name__ ? recipe.__name__ : undefined
  const contextName = recipeName
    ? `createStyleContext("${recipeName}")`
    : "createStyleContext"
  const svaFn = isConfigRecipe ? recipe : sva(recipe.config)

  function useStyleContext(componentName, slot) {
    const context = inject(StyleContext)
    if (context === undefined) {
      const componentInfo = componentName
        ? `Component "${componentName}"`
        : "A component"
      const slotInfo = slot ? ` (slot: "${slot}")` : ""

      throw new Error(
        `${componentInfo}${slotInfo} cannot access ${contextName} because it's missing its Provider.`,
      )
    }
    return context
  }

  const getResolvedProps = (props, slotStyles) => {
    const { unstyled, ...restProps } = props
    if (unstyled) return restProps
    if (isConfigRecipe) {
      return { ...restProps, class: cx(slotStyles, restProps.class) }
    }
    return { ...slotStyles, ...restProps }
  }

  const withRootProvider = (Component, options) => {
    const WithRootProvider = defineComponent({
      props: svaFn.variantKeys,
      setup(props, { slots }) {
        const [variantProps, otherProps] = svaFn.splitVariantProps(props)

        const slotStyles = computed(() => {
          const styles = isConfigRecipe
            ? svaFn(variantProps)
            : svaFn.raw(variantProps)
          styles._classNameMap = svaFn.classNameMap
          return styles
        })

        provide(StyleContext, slotStyles)

        const mergedProps = computed(() => {
          if (!options?.defaultProps) return otherProps
          return { ...options.defaultProps, ...otherProps }
        })

        return () => h(Component, mergedProps.value, slots)
      },
    })

    const componentName = getDisplayName(Component)
    WithRootProvider.displayName = `withRootProvider(${componentName})`

    return WithRootProvider
  }

  const withProvider = (Component, slot, options) => {
    const StyledComponent = chakra(Component, {}, options)

    const WithProvider = defineComponent({
      props: ["unstyled", ...svaFn.variantKeys],
      inheritAttrs: false,
      setup(inProps, { slots, attrs }) {
        const props = computed(() => {
          const propsWithClass = { ...inProps, ...attrs }
          propsWithClass.class =
            propsWithClass.class ?? options?.defaultProps?.class
          return propsWithClass
        })
        const res = computed(() => {
          const [variantProps, restProps] = svaFn.splitVariantProps(props.value)
          return { variantProps, restProps }
        })

        const slotStyles = computed(() => {
          const styles = isConfigRecipe
            ? svaFn(res.value.variantProps)
            : svaFn.raw(res.value.variantProps)
          styles._classNameMap = svaFn.classNameMap
          return styles
        })

        provide(StyleContext, slotStyles)

        return () => {
          const resolvedProps = getResolvedProps(
            res.value.restProps,
            slotStyles.value[slot],
          )
          resolvedProps.class = cx(
            resolvedProps.class,
            slotStyles.value._classNameMap[slot],
            attrs.class,
          )
          return h(StyledComponent, resolvedProps, slots)
        }
      },
    })

    const componentName = getDisplayName(Component)
    WithProvider.displayName = `withProvider(${componentName})`

    return WithProvider
  }

  const withContext = (Component, slot, options) => {
    const StyledComponent = chakra(Component, {}, options)
    const componentName = getDisplayName(Component)

    const WithContext = defineComponent({
      props: ["unstyled"],
      inheritAttrs: false,
      setup(inProps, { slots, attrs }) {
        const props = computed(() => {
          const propsWithClass = { ...inProps, ...attrs }
          propsWithClass.class =
            propsWithClass.class ?? options?.defaultProps?.class
          return propsWithClass
        })
        const slotStyles = useStyleContext(componentName, slot)

        return () => {
          const resolvedProps = getResolvedProps(
            props.value,
            slotStyles.value[slot],
          )
          resolvedProps.class = cx(
            resolvedProps.class,
            slotStyles.value._classNameMap[slot],
            attrs.class,
          )
          return h(StyledComponent, resolvedProps, slots)
        }
      },
    })

    WithContext.displayName = `withContext(${componentName})`

    return WithContext
  }

  return {
    withRootProvider,
    withProvider,
    withContext,
  }
}
