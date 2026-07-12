import { defineComponent, h, computed } from 'vue'

import { getFlexStyle } from '../patterns/flex.js';
import { chakra } from './factory.js';

export const Flex = /* @__PURE__ */ defineComponent({
    name: 'Flex',
    inheritAttrs: false,
    props: ["align","justify","direction","wrap","basis","grow","shrink"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getFlexStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(chakra.div, mergedProps, slots)
}
    }
})