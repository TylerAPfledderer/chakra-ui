/* eslint-disable */
import type { FunctionalComponent } from "vue"
import type { StackProperties } from "../patterns/stack"
import type { HTMLChakraProps } from "../types/jsx"
import type { DistributiveOmit } from "../types/system-types"

export interface StackProps
  extends StackProperties,
    DistributiveOmit<HTMLChakraProps<"div">, keyof StackProperties> {}

export declare const Stack: FunctionalComponent<StackProps>
