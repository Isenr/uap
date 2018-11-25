import { ActionReducerMap } from '@ngrx/store';
import { ProductState } from '@uap/products/models';

import { pizzaReducer } from './pizza';
import { toppingReducer } from './topping';

export const productReducers: ActionReducerMap<ProductState> = {
    pizzas: pizzaReducer,
    toppings: toppingReducer,
};
