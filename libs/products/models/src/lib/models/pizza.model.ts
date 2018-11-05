import { Entity } from './entity.model';
import { Topping } from './topping.model';

/**
 * Interface for the 'Pizzas' data used in
 *  - ProductsComponentsPizzasState, and
 *  - productsComponentsReducer
 */
export interface Pizza extends Entity {
    toppings?: Topping[];
}
