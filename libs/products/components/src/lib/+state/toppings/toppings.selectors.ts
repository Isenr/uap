import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TOPPINGS_FEATURE_KEY, ToppingsState } from './toppings.reducer';

// Lookup the 'Toppings' feature state managed by NgRx
const getState = createFeatureSelector<ToppingsState>(TOPPINGS_FEATURE_KEY);

const getLoaded = createSelector(getState, (state: ToppingsState) => state.loaded);

const getError = createSelector(getState, (state: ToppingsState) => state.error);

const getAll = createSelector(getState, getLoaded, (state: ToppingsState, isLoaded) => {
    return isLoaded ? state.list : [];
});

const getSelectedId = createSelector(getState, (state: ToppingsState) => state.selectedId);

const getSelected = createSelector(getAll, getSelectedId, (entities, id) => {
    const result = entities.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
});

export const toppingsQuery = {
    getAll,
    getError,
    getLoaded,
    getSelected,
};
