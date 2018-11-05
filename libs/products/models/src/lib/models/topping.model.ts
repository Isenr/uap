/**
 * Interface for the 'Toppings' data used in
 *  - ProductsComponentsToppingsState, and
 *  - productsComponentsReducer
 */
export interface Topping {
    id?: string | number;
    name?: string;
    [key: string]: any;
}
