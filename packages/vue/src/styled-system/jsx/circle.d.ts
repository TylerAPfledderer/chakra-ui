/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { CircleProperties } from '../patterns/circle';
import type { HTMLChakraProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface CircleProps extends CircleProperties, DistributiveOmit<HTMLChakraProps<'div'>, keyof CircleProperties > {}


export declare const Circle: FunctionalComponent<CircleProps>