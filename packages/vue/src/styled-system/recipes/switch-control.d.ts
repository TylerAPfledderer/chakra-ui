/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SwitchControlVariant {
  /**
 * @default "solid"
 */
variant: "solid" | "raised"
/**
 * @default "md"
 */
size: "xs" | "sm" | "md" | "lg"
}

type SwitchControlVariantMap = {
  [key in keyof SwitchControlVariant]: Array<SwitchControlVariant[key]>
}

type SwitchControlSlot = "root" | "label" | "control" | "thumb" | "indicator"

export type SwitchControlVariantProps = {
  [key in keyof SwitchControlVariant]?: ConditionalValue<SwitchControlVariant[key]> | undefined
}

export interface SwitchControlRecipe {
  __slot: SwitchControlSlot
  __type: SwitchControlVariantProps
  (props?: SwitchControlVariantProps): Pretty<Record<SwitchControlSlot, string>>
  raw: (props?: SwitchControlVariantProps) => SwitchControlVariantProps
  variantMap: SwitchControlVariantMap
  variantKeys: Array<keyof SwitchControlVariant>
  splitVariantProps<Props extends SwitchControlVariantProps>(props: Props): [SwitchControlVariantProps, Pretty<DistributiveOmit<Props, keyof SwitchControlVariantProps>>]
  getVariantProps: (props?: SwitchControlVariantProps) => SwitchControlVariantProps
}


export declare const switchControl: SwitchControlRecipe