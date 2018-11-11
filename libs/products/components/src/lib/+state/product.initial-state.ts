import { ProductState } from '@uap/products/models';

import { pizzaInitialState } from './pizza/pizza.initial-state';
import { toppingInitialState } from './topping/topping.initial-state';

export const productInitialState: ProductState = {
    pizzas: pizzaInitialState,
    toppings: toppingInitialState,
};
