import { createSelector } from '@ngrx/store';

import { pizzaQuery } from './pizza';
import { toppingQuery } from './topping';

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
