/* eslint-disable */
import type { FunctionalComponent } from "vue"
import type { WrapProperties } from "../patterns/wrap"
import type { HTMLChakraProps } from "../types/jsx"
import type { DistributiveOmit } from "../types/system-types"

export interface WrapProps
  extends WrapProperties,
    DistributiveOmit<HTMLChakraProps<"div">, keyof WrapProperties> {}

export declare const Wrap: FunctionalComponent<WrapProps>
