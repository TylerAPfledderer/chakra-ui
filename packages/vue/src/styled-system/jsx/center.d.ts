/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { CenterProperties } from '../patterns/center';
import type { HTMLChakraProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface CenterProps extends CenterProperties, DistributiveOmit<HTMLChakraProps<'div'>, keyof CenterProperties > {}


export declare const Center: FunctionalComponent<CenterProps>