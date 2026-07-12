/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { SquareProperties } from '../patterns/square';
import type { HTMLChakraProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface SquareProps extends SquareProperties, DistributiveOmit<HTMLChakraProps<'div'>, keyof SquareProperties > {}


export declare const Square: FunctionalComponent<SquareProps>