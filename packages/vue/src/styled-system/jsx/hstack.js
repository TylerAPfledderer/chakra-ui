import { computed, defineComponent, h } from "vue"
import { getHstackStyle } from "../patterns/hstack.js"
import { chakra } from "./factory.js"

export const HStack = /* @__PURE__ */ defineComponent({
  name: "HStack",
  inheritAttrs: false,
  props: ["justify", "gap"],
  setup(props, { attrs, slots }) {
    const styleProps = computed(() => getHstackStyle(props))

    return () => {
      const mergedProps = { ...styleProps.value, ...attrs }
      return h(chakra.div, mergedProps, slots)
    }
  },
})
