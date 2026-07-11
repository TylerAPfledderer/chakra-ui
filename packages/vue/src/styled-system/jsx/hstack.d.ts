/* eslint-disable */
import type { FunctionalComponent } from "vue"
import type { HstackProperties } from "../patterns/hstack"
import type { HTMLChakraProps } from "../types/jsx"
import type { DistributiveOmit } from "../types/system-types"

export interface HstackProps
  extends HstackProperties,
    DistributiveOmit<HTMLChakraProps<"div">, keyof HstackProperties> {}

export declare const HStack: FunctionalComponent<HstackProps>
