import { entityListInitialState, EntityListState, Topping } from '@uap/products/models';

import { ToppingsAction, ToppingsActionTypes } from './toppings.actions';

export const TOPPINGS_FEATURE_KEY = 'productsComponentsToppings';

export type ToppingsState = EntityListState<Topping>;

export interface ToppingsPartialState {
    readonly [TOPPINGS_FEATURE_KEY]: ToppingsState;
}

export const initialState: ToppingsState = {
    ...entityListInitialState,
};

export function toppingsReducer(
    state: ToppingsState = initialState,
    action: ToppingsAction
): ToppingsState {
    switch (action.type) {
        case ToppingsActionTypes.ToppingsLoaded: {
            state = {
                ...state,
                list: action.payload,
                loaded: true,
            };
            break;
        }
    }
    return state;
}
