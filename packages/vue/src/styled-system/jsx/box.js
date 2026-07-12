import { defineComponent, h, computed } from 'vue'

import { getBoxStyle } from '../patterns/box.js';
import { chakra } from './factory.js';

export const Box = /* @__PURE__ */ defineComponent({
    name: 'Box',
    inheritAttrs: false,
    props: [],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getBoxStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(chakra.div, mergedProps, slots)
}
    }
})