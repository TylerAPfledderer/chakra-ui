import { defineComponent, h, computed } from 'vue'

import { getStackStyle } from '../patterns/stack.js';
import { chakra } from './factory.js';

export const Stack = /* @__PURE__ */ defineComponent({
    name: 'Stack',
    inheritAttrs: false,
    props: ["align","justify","direction","gap"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getStackStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(chakra.div, mergedProps, slots)
}
    }
})