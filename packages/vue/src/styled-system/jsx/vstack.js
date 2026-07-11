import { computed, defineComponent, h } from "vue"
import { getVstackStyle } from "../patterns/vstack.js"
import { chakra } from "./factory.js"

export const VStack = /* @__PURE__ */ defineComponent({
  name: "VStack",
  inheritAttrs: false,
  props: ["justify", "gap"],
  setup(props, { attrs, slots }) {
    const styleProps = computed(() => getVstackStyle(props))

    return () => {
      const mergedProps = { ...styleProps.value, ...attrs }
      return h(chakra.div, mergedProps, slots)
    }
  },
})
