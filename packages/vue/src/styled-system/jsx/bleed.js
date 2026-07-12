import { defineComponent, h, computed } from 'vue'

import { getBleedStyle } from '../patterns/bleed.js';
import { chakra } from './factory.js';

export const Bleed = /* @__PURE__ */ defineComponent({
    name: 'Bleed',
    inheritAttrs: false,
    props: ["inline","block"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getBleedStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(chakra.div, mergedProps, slots)
}
    }
})