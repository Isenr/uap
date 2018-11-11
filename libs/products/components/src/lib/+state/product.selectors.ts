import { createSelector } from '@ngrx/store';

import { pizzaQuery } from './pizza/pizza.selectors';
import { toppingQuery } from './topping/topping.selectors';

// Lookup the 'Product' feature state managed by NgRx
const getVisualised = createSelector(
    pizzaQuery.getSelected,
    toppingQuery.getSelected,
    (pizza = {}, toppings) => ({
        ...pizza,
        toppings: toppings || pizza.toppings,
    })
);

export const productQuery = {
    getVisualised,
};
