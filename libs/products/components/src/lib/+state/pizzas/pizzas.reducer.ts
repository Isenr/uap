import { entityListInitialState, EntityListState, Pizza } from '@uap/products/models';
import { dictionaryToArray, getNextId, removeFromDictionary } from '@uap/utils';

import { PizzasAction, PizzasActionTypes } from './pizzas.actions';

export interface PizzasState extends EntityListState<Pizza> {
    data: { [K in string | number]: Pizza };
}

export const initialState: PizzasState = {
    ...entityListInitialState,
    data: {},
};

export function pizzasReducer(
    state: PizzasState = initialState,
    action: PizzasAction
): PizzasState {
    switch (action.type) {
        case PizzasActionTypes.PizzaCreate: {
            action.payload.id = getNextId(state.data);
            const data = {
                ...state.data,
                [action.payload.id]: action.payload,
            };
            state = {
                ...state,
                data,
                list: dictionaryToArray(data),
                selectedId: action.payload.id,
            };
            break;
        }
        case PizzasActionTypes.PizzaRemove: {
            const data = removeFromDictionary(state.data, action.payload.id);
            state = {
                ...state,
                data,
                list: dictionaryToArray(data),
                selectedId: undefined,
            };
            break;
        }
        case PizzasActionTypes.PizzaUpdate: {
            const data = {
                ...state.data,
                [action.payload.id]: action.payload,
            };
            state = {
                ...state,
                data,
                list: dictionaryToArray(data),
                selectedId: undefined,
            };
            break;
        }
        case PizzasActionTypes.PizzasLoaded: {
            const data = {
                ...state.data,
                ...action.payload,
            };
            state = {
                ...state,
                data,
                list: dictionaryToArray(data),
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
