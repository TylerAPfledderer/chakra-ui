import { defineComponent, h, computed } from 'vue'

import { getFloatStyle } from '../patterns/float.js';
import { chakra } from './factory.js';

export const Float = /* @__PURE__ */ defineComponent({
    name: 'Float',
    inheritAttrs: false,
    props: ["offsetX","offsetY","offset","placement"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getFloatStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(chakra.div, mergedProps, slots)
}
    }
})