import { computed, defineComponent, h } from "vue"
import { getDividerStyle } from "../patterns/divider.js"
import { chakra } from "./factory.js"

export const Divider = /* @__PURE__ */ defineComponent({
  name: "Divider",
  inheritAttrs: false,
  props: ["orientation", "thickness", "color"],
  setup(props, { attrs, slots }) {
    const styleProps = computed(() => getDividerStyle(props))

    return () => {
      const mergedProps = { ...styleProps.value, ...attrs }
      return h(chakra.div, mergedProps, slots)
    }
  },
})
