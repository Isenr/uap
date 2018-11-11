import { Entity } from '@uap/state';

import { Topping } from '../topping/topping.model';

/**
 * Interface for the 'Pizzas' data used in
 *  - ProductsComponentsPizzasState, and
 *  - productsComponentsReducer
 */
export interface Pizza extends Entity {
    toppings?: Topping[];
}
