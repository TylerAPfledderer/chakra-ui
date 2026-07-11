/* eslint-disable */
import type { FunctionalComponent } from "vue"
import type { VstackProperties } from "../patterns/vstack"
import type { HTMLChakraProps } from "../types/jsx"
import type { DistributiveOmit } from "../types/system-types"

export interface VstackProps
  extends VstackProperties,
    DistributiveOmit<HTMLChakraProps<"div">, keyof VstackProperties> {}

export declare const VStack: FunctionalComponent<VstackProps>
