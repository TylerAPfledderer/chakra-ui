import { computed, defineComponent, h } from "vue"
import { getGridStyle } from "../patterns/grid.js"
import { chakra } from "./factory.js"

export const Grid = /* @__PURE__ */ defineComponent({
  name: "Grid",
  inheritAttrs: false,
  props: ["gap", "columnGap", "rowGap", "columns", "minChildWidth"],
  setup(props, { attrs, slots }) {
    const styleProps = computed(() => getGridStyle(props))

    return () => {
      const mergedProps = { ...styleProps.value, ...attrs }
      return h(chakra.div, mergedProps, slots)
    }
  },
})
