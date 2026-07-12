/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { CqProperties } from '../patterns/cq';
import type { HTMLChakraProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface CqProps extends CqProperties, DistributiveOmit<HTMLChakraProps<'div'>, keyof CqProperties > {}


export declare const Cq: FunctionalComponent<CqProps>