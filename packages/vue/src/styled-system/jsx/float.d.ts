/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { FloatProperties } from '../patterns/float';
import type { HTMLChakraProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface FloatProps extends FloatProperties, DistributiveOmit<HTMLChakraProps<'div'>, keyof FloatProperties > {}


export declare const Float: FunctionalComponent<FloatProps>