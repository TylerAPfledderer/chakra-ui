import { defineComponent, h, computed } from 'vue'

import { getCircleStyle } from '../patterns/circle.js';
import { chakra } from './factory.js';

export const Circle = /* @__PURE__ */ defineComponent({
    name: 'Circle',
    inheritAttrs: false,
    props: ["size"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getCircleStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(chakra.div, mergedProps, slots)
}
    }
})