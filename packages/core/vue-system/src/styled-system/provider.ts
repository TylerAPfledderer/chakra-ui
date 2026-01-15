import type { SystemContext } from "@chakra-ui/system-core"
import { type PropType, defineComponent, h, provide } from "vue"

/**
 * Injection key for the Chakra system context
 */
export const SystemContextKey = Symbol("chakra-system")

/**
 * VueChakraProvider component that provides the system context to all child components.
 * This is the main entry point for using Chakra UI's styled-system in Vue.
 */
export const VueChakraProvider = defineComponent({
  name: "VueChakraProvider",
  props: {
    system: {
      type: Object as PropType<SystemContext>,
      required: true,
    },
  },
  setup(props, { slots }) {
    provide(SystemContextKey, props.system)

    return () => {
      // Inject global styles via <style> tag
      const globalCss = props.system.getGlobalCss()
      const tokenCss = props.system.getTokenCss()
      const preflightCss = props.system.getPreflightCss()

      // Serialize CSS for injection
      const serializeCss = (obj: Record<string, any>, indent = 0): string => {
        let css = ""
        for (const [key, value] of Object.entries(obj)) {
          if (typeof value === "object" && value !== null) {
            css += `${" ".repeat(indent)}${key} {\n`
            css += serializeCss(value, indent + 2)
            css += `${" ".repeat(indent)}}\n`
          } else if (value !== undefined && value !== null) {
            css += `${" ".repeat(indent)}${key}: ${value};\n`
          }
        }
        return css
      }

      const allCss = [preflightCss, tokenCss, globalCss]
        .map((css) => serializeCss(css))
        .join("\n")

      return h("div", { class: "chakra-provider" }, [
        h("style", { innerHTML: allCss }),
        slots.default?.(),
      ])
    }
  },
})
