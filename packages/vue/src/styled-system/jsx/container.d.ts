/* eslint-disable */
import type { FunctionalComponent } from "vue"
import type { ContainerProperties } from "../patterns/container"
import type { HTMLChakraProps } from "../types/jsx"
import type { DistributiveOmit } from "../types/system-types"

export interface ContainerProps
  extends ContainerProperties,
    DistributiveOmit<HTMLChakraProps<"div">, keyof ContainerProperties> {}

export declare const Container: FunctionalComponent<ContainerProps>
