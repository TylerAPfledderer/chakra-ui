import { computed, defineComponent, h } from "vue"
import { getGridItemStyle } from "../patterns/grid-item.js"
import { chakra } from "./factory.js"

export const GridItem = /* @__PURE__ */ defineComponent({
  name: "GridItem",
  inheritAttrs: false,
  props: ["colSpan", "rowSpan", "colStart", "rowStart", "colEnd", "rowEnd"],
  setup(props, { attrs, slots }) {
    const styleProps = computed(() => getGridItemStyle(props))

    return () => {
      const mergedProps = { ...styleProps.value, ...attrs }
      return h(chakra.div, mergedProps, slots)
    }
  },
})
