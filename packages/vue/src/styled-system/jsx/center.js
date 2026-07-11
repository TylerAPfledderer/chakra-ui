import { computed, defineComponent, h } from "vue"
import { getCenterStyle } from "../patterns/center.js"
import { chakra } from "./factory.js"

export const Center = /* @__PURE__ */ defineComponent({
  name: "Center",
  inheritAttrs: false,
  props: ["inline"],
  setup(props, { attrs, slots }) {
    const styleProps = computed(() => getCenterStyle(props))

    return () => {
      const mergedProps = { ...styleProps.value, ...attrs }
      return h(chakra.div, mergedProps, slots)
    }
  },
})
