import { ToppingState } from '@uap/products/models';

import { toppingInitialState } from './topping-initial.state';
import { ToppingActionsUnion, ToppingActionTypes } from './topping.actions';
import { toppingAdapter } from './topping.adapter';

export function toppingReducer(
    state: ToppingState = toppingInitialState,
    action: ToppingActionsUnion
): ToppingState {
    switch (action.type) {
        case ToppingActionTypes.ToppingsLoaded: {
            state = {
                ...toppingAdapter.addMany(action.payload.toppings, state),
                loaded: true,
            };
            break;
        }
        case ToppingActionTypes.ToppingsSelect: {
            state = {
                ...state,
                selectedIds: action.payload.selectedIds,
            };
            break;
        }
    }
    return state;
}
