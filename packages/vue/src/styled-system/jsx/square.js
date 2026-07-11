import { computed, defineComponent, h } from "vue"
import { getSquareStyle } from "../patterns/square.js"
import { chakra } from "./factory.js"

export const Square = /* @__PURE__ */ defineComponent({
  name: "Square",
  inheritAttrs: false,
  props: ["size"],
  setup(props, { attrs, slots }) {
    const styleProps = computed(() => getSquareStyle(props))

    return () => {
      const mergedProps = { ...styleProps.value, ...attrs }
      return h(chakra.div, mergedProps, slots)
    }
  },
})
