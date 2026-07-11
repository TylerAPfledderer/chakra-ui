import { computed, defineComponent, h } from "vue"
import { getContainerStyle } from "../patterns/container.js"
import { chakra } from "./factory.js"

export const Container = /* @__PURE__ */ defineComponent({
  name: "Container",
  inheritAttrs: false,
  props: [],
  setup(props, { attrs, slots }) {
    const styleProps = computed(() => getContainerStyle(props))

    return () => {
      const mergedProps = { ...styleProps.value, ...attrs }
      return h(chakra.div, mergedProps, slots)
    }
  },
})
