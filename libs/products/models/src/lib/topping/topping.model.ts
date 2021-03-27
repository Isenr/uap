import { Entity } from '@uap/state';

/**
 * Interface for the 'Toppings' data used in
 *  - ProductsComponentsToppingsState, and
 *  - productsComponentsReducer
 */
export interface Topping extends Entity {
    [key: string]: unknown;
}
