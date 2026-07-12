/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { BleedProperties } from '../patterns/bleed';
import type { HTMLChakraProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BleedProps extends BleedProperties, DistributiveOmit<HTMLChakraProps<'div'>, keyof BleedProperties > {}


export declare const Bleed: FunctionalComponent<BleedProps>