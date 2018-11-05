import { entityListInitialState, EntityListState, Topping } from '@uap/products/models';
import { dictionaryToArray } from '@uap/utils';

import { ToppingsAction, ToppingsActionTypes } from './toppings.actions';

export interface ToppingsState extends EntityListState<Topping> {
    data: { [K in string | number]: Topping };
    selectedIds?: Array<string | number>;
}

export const initialState: ToppingsState = {
    ...entityListInitialState,
    data: {},
};

export function toppingsReducer(
    state: ToppingsState = initialState,
    action: ToppingsAction
): ToppingsState {
    switch (action.type) {
        case ToppingsActionTypes.ToppingsLoaded: {
            state = {
                ...state,
                data: action.payload,
                list: dictionaryToArray(action.payload),
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
