/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { LinkOverlayProperties } from '../patterns/link-overlay';
import type { HTMLChakraProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface LinkOverlayProps extends LinkOverlayProperties, DistributiveOmit<HTMLChakraProps<'a'>, keyof LinkOverlayProperties > {}


export declare const LinkOverlay: FunctionalComponent<LinkOverlayProps>