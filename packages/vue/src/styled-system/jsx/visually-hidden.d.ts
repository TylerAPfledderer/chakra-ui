/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { VisuallyHiddenProperties } from '../patterns/visually-hidden';
import type { HTMLChakraProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface VisuallyHiddenProps extends VisuallyHiddenProperties, DistributiveOmit<HTMLChakraProps<'div'>, keyof VisuallyHiddenProperties > {}


export declare const VisuallyHidden: FunctionalComponent<VisuallyHiddenProps>