import { defineComponent, h, computed } from 'vue'

import { getVisuallyHiddenStyle } from '../patterns/visually-hidden.js';
import { chakra } from './factory.js';

export const VisuallyHidden = /* @__PURE__ */ defineComponent({
    name: 'VisuallyHidden',
    inheritAttrs: false,
    props: [],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getVisuallyHiddenStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(chakra.div, mergedProps, slots)
}
    }
})