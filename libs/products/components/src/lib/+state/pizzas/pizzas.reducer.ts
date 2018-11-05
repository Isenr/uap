import { entityListInitialState, EntityListState, Pizza, Topping } from '@uap/products/models';

import { PizzasAction, PizzasActionTypes } from './pizzas.actions';

export interface PizzasState extends EntityListState<Pizza> {}

export const initialState: PizzasState = {
    ...entityListInitialState,
};

export function pizzasReducer(
    state: PizzasState = initialState,
    action: PizzasAction
): PizzasState {
    switch (action.type) {
        case PizzasActionTypes.PizzaCreate: {
            action.payload.id =
                state.list
                    .map(({ id }) => Number.parseInt(String(id), 10))
                    .find((aId, i, arr) => !arr.some(bId => bId > aId)) + 1;
            state = {
                ...state,
                list: [...state.list, action.payload],
                selectedId: action.payload.id,
            };
            break;
        }
        case PizzasActionTypes.PizzaRemove: {
            state = {
                ...state,
                list: state.list.filter(pizza => pizza.id !== action.payload.id),
                selectedId: undefined,
            };
            break;
        }
        case PizzasActionTypes.PizzaUpdate: {
            state = {
                ...state,
                list: state.list.map(
                    pizza => (pizza.id === action.payload.id ? action.payload : pizza)
                ),
                selectedId: undefined,
            };
            break;
        }
        case PizzasActionTypes.PizzasLoaded: {
            state = {
                ...state,
                list: action.payload,
                loaded: true,
            };
            break;
        }
        case PizzasActionTypes.PizzaSelect: {
            state = {
                ...state,
                selectedId: action.payload,
            };
            break;
        }
    }
    return state;
}
