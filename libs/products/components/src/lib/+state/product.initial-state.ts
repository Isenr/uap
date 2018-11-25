import { ProductState } from '@uap/products/models';

import { pizzaInitialState } from './pizza';
import { toppingInitialState } from './topping';

export const productInitialState: ProductState = {
    pizzas: pizzaInitialState,
    toppings: toppingInitialState,
};
