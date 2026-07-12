import { defineComponent, h, computed } from 'vue'

import { getSpacerStyle } from '../patterns/spacer.js';
import { chakra } from './factory.js';

export const Spacer = /* @__PURE__ */ defineComponent({
    name: 'Spacer',
    inheritAttrs: false,
    props: ["size"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getSpacerStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(chakra.div, mergedProps, slots)
}
    }
})