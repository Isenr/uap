import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PRODUCTS_FEATURE_KEY, ProductsState } from '../products.reducer';
import { ToppingsState } from './toppings.reducer';

// Lookup the 'Toppings' feature state managed by NgRx
const getState = createFeatureSelector<ProductsState>(PRODUCTS_FEATURE_KEY);

const getToppingsState = createSelector(getState, (state: ProductsState) => state.toppings);

const getLoaded = createSelector(getToppingsState, (state: ToppingsState) => state.loaded);

const getError = createSelector(getToppingsState, (state: ToppingsState) => state.error);

const getAll = createSelector(getToppingsState, getLoaded, (state: ToppingsState, isLoaded) => {
    return isLoaded ? state.list : [];
});

const getSelectedIds = createSelector(
    getToppingsState,
    (state: ToppingsState) => state.selectedIds
);

const getSelected = createSelector(getAll, getSelectedIds, (entities, ids) => {
    if (!ids) return;
    return ids.map(id => (entities || []).find(it => String(it['id']) === String(id)));
});

export const toppingsQuery = {
    getAll,
    getError,
    getLoaded,
    getSelected,
};
