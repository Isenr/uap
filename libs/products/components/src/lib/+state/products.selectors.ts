import { createSelector } from '@ngrx/store';

import { pizzasQuery } from './pizzas/pizzas.selectors';
import { toppingsQuery } from './toppings/toppings.selectors';

// Lookup the 'Products' feature state managed by NgRx
const getVisualised = createSelector(
    pizzasQuery.getSelected,
    toppingsQuery.getSelected,
    (pizza = {}, toppings) => {
        return { ...pizza, toppings: toppings || pizza.toppings };
    }
);

export const productsQuery = {
    getVisualised,
};
