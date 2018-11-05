import { entityListInitialState, EntityListState, Pizza } from '@uap/products/models';

import { PizzasAction, PizzasActionTypes } from './pizzas.actions';

export const PIZZAS_FEATURE_KEY = 'productsComponentsPizzas';

export type PizzasState = EntityListState<Pizza>;

export interface PizzasPartialState {
    readonly [PIZZAS_FEATURE_KEY]: PizzasState;
}

export const initialState: PizzasState = {
    ...entityListInitialState,
};

export function pizzasReducer(
    state: PizzasState = initialState,
    action: PizzasAction
): PizzasState {
    switch (action.type) {
        case PizzasActionTypes.PizzasLoaded: {
            state = {
                ...state,
                list: action.payload,
                loaded: true,
            };
            break;
        }
        case PizzasActionTypes.SelectPizza: {
            state = {
                ...state,
                loaded: true,
                selectedId: action.id,
            };
            break;
        }
    }
    return state;
}
