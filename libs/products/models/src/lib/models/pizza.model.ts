import { Topping } from './topping.model';

/**
 * Interface for the 'Pizzas' data used in
 *  - ProductsComponentsPizzasState, and
 *  - productsComponentsReducer
 */
export interface Pizza {
    id?: string | number;
    name?: string;
    toppings?: Topping[];
}
