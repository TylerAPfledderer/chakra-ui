import { defineComponent, h, computed } from 'vue'

import { getLinkOverlayStyle } from '../patterns/link-overlay.js';
import { chakra } from './factory.js';

export const LinkOverlay = /* @__PURE__ */ defineComponent({
    name: 'LinkOverlay',
    inheritAttrs: false,
    props: [],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getLinkOverlayStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(chakra.a, mergedProps, slots)
}
    }
})