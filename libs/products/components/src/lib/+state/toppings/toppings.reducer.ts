import { entityListInitialState, EntityListState, Topping } from '@uap/products/models';

import { ToppingsAction, ToppingsActionTypes } from './toppings.actions';

export interface ToppingsState extends EntityListState<Topping> {
    selectedIds?: Array<string | number>;
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
        case ToppingsActionTypes.ToppingsSelect: {
            state = {
                ...state,
                selectedIds: action.payload,
            };
            break;
        }
    }
    return state;
}
