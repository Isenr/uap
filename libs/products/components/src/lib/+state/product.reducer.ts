import { ActionReducerMap } from '@ngrx/store';
import { ProductState } from '@uap/products/models';

import { pizzaReducer } from './pizza/pizza.reducer';
import { toppingReducer } from './topping/topping.reducer';

export const productReducers: ActionReducerMap<ProductState> = {
    pizzas: pizzaReducer,
    toppings: toppingReducer,
};
