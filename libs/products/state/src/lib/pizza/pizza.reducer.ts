import { PizzaState } from '@uap/products/models';

import { pizzaInitialState } from './pizza-initial.state';
import { PizzaActionsUnion, PizzaActionTypes } from './pizza.actions';
import { pizzaAdapter } from './pizza.adapter';

export function pizzaReducer(
    state: PizzaState = pizzaInitialState,
    action: PizzaActionsUnion
): PizzaState {
    switch (action.type) {
        case PizzaActionTypes.PizzaCreateSuccess: {
            state = {
                ...pizzaAdapter.addOne(action.payload.pizza, state),
                selectedId: action.payload.pizza.id,
            };
            break;
        }
        case PizzaActionTypes.PizzaRemove: {
            state = {
                ...pizzaAdapter.removeOne(action.payload.id, state),
                selectedId: undefined,
            };
            break;
        }
        case PizzaActionTypes.PizzaUpdate: {
            state = {
                ...pizzaAdapter.updateOne(action.payload.pizza, state),
                selectedId: undefined,
            };
            break;
        }
        case PizzaActionTypes.PizzasLoadSuccess: {
            state = {
                ...pizzaAdapter.addMany(action.payload.pizzas, state),
                loaded: true,
            };
            break;
        }
        case PizzaActionTypes.PizzaSelect: {
            state = {
                ...state,
                selectedId: action.payload.id,
            };
            break;
        }
    }
    return state;
}
