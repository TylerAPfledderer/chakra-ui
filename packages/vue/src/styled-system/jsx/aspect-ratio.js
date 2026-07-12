import { defineComponent, h, computed } from 'vue'

import { getAspectRatioStyle } from '../patterns/aspect-ratio.js';
import { chakra } from './factory.js';

export const AspectRatio = /* @__PURE__ */ defineComponent({
    name: 'AspectRatio',
    inheritAttrs: false,
    props: ["ratio"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getAspectRatioStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(chakra.div, mergedProps, slots)
}
    }
})