import { Entity } from './entity.model';

/**
 * Interface for the 'Toppings' data used in
 *  - ProductsComponentsToppingsState, and
 *  - productsComponentsReducer
 */
export interface Topping extends Entity {
    [key: string]: any;
}
