/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { FlexProperties } from '../patterns/flex';
import type { HTMLChakraProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface FlexProps extends FlexProperties, DistributiveOmit<HTMLChakraProps<'div'>, keyof FlexProperties > {}


export declare const Flex: FunctionalComponent<FlexProps>