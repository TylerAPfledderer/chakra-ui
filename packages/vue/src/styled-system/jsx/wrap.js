import { defineComponent, h, computed } from 'vue'

import { getWrapStyle } from '../patterns/wrap.js';
import { chakra } from './factory.js';

export const Wrap = /* @__PURE__ */ defineComponent({
    name: 'Wrap',
    inheritAttrs: false,
    props: ["gap","rowGap","columnGap","align","justify"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getWrapStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(chakra.div, mergedProps, slots)
}
    }
})