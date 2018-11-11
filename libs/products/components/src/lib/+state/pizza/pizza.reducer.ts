import { PizzaState } from '@uap/products/models';
import { getNextId } from '@uap/utils';

import { PizzaActionsUnion, PizzaActionTypes } from './actions';
import { pizzaAdapter } from './pizza.adapter';
import { pizzaInitialState } from './pizza.initial-state';

export function pizzaReducer(
    state: PizzaState = pizzaInitialState,
    action: PizzaActionsUnion
): PizzaState {
    switch (action.type) {
        case PizzaActionTypes.PizzaCreate: {
            const id = getNextId(state.entities);
            state = {
                ...pizzaAdapter.addOne(
                    {
                        ...action.payload.pizza,
                        id,
                    },
                    state
                ),
                selectedId: id,
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
        case PizzaActionTypes.PizzasLoaded: {
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
