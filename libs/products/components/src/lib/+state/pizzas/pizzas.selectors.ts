import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
    PIZZAS_FEATURE_KEY,
    PizzasState,
} from './pizzas.reducer';

// Lookup the 'Pizzas' feature state managed by NgRx
const getState = createFeatureSelector<PizzasState>(
    PIZZAS_FEATURE_KEY
);

const getLoaded = createSelector(
    getState,
    (state: PizzasState) => state.loaded
);

const getError = createSelector(
    getState,
    (state: PizzasState) => state.error
);

const getAll = createSelector(
    getState,
    getLoaded,
    (state: PizzasState, isLoaded) => {
        return isLoaded ? state.list : [];
    }
);

const getSelectedId = createSelector(
    getState,
    (state: PizzasState) => state.selectedId
);

const getSelected = createSelector(
    getAll,
    getSelectedId,
    (entities, id) => {
        const result = entities.find(it => it['id'] === id);
        return result ? Object.assign({}, result) : undefined;
    }
);

export const pizzasQuery = {
    getAll,
    getError,
    getLoaded,
    getSelected,
};
