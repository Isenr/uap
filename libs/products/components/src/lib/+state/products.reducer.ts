import { ActionReducerMap, combineReducers } from '@ngrx/store';

import {
    initialState as pizzasInitialState,
    pizzasReducer,
    PizzasState,
} from './pizzas/pizzas.reducer';
import {
    initialState as toppingsInitialState,
    toppingsReducer,
    ToppingsState,
} from './toppings/toppings.reducer';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsState {
    pizzas: PizzasState;
    toppings: ToppingsState;
}

export interface ProductsPartialState {
    readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const initialState: ProductsState = {
    pizzas: pizzasInitialState,
    toppings: toppingsInitialState,
};

const reducers: ActionReducerMap<ProductsState> = {
    pizzas: pizzasReducer,
    toppings: toppingsReducer,
};

export const productsReducer = combineReducers(reducers, initialState);
