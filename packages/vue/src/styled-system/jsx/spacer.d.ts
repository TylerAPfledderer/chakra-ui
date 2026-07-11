/* eslint-disable */
import type { FunctionalComponent } from "vue"
import type { SpacerProperties } from "../patterns/spacer"
import type { HTMLChakraProps } from "../types/jsx"
import type { DistributiveOmit } from "../types/system-types"

export interface SpacerProps
  extends SpacerProperties,
    DistributiveOmit<HTMLChakraProps<"div">, keyof SpacerProperties> {}

export declare const Spacer: FunctionalComponent<SpacerProps>
