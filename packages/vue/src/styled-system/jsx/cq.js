import { defineComponent, h, computed } from 'vue'

import { getCqStyle } from '../patterns/cq.js';
import { chakra } from './factory.js';

export const Cq = /* @__PURE__ */ defineComponent({
    name: 'Cq',
    inheritAttrs: false,
    props: ["name","type"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getCqStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(chakra.div, mergedProps, slots)
}
    }
})