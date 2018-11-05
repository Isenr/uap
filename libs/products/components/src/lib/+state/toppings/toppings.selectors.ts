import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PRODUCTS_FEATURE_KEY, ProductsState } from '../products.reducer';
import { ToppingsState } from './toppings.reducer';

// Lookup the 'Toppings' feature state managed by NgRx
const getState = createSelector(
    createFeatureSelector<ProductsState>(PRODUCTS_FEATURE_KEY),
    (state: ProductsState) => state.toppings
);

const getLoaded = createSelector(getState, (state: ToppingsState) => state.loaded);

const getError = createSelector(getState, (state: ToppingsState) => state.error);

const getAll = createSelector(getState, getLoaded, (state: ToppingsState, isLoaded) => {
    return isLoaded ? state.data : {};
});

const getList = createSelector(getState, getLoaded, (state: ToppingsState, isLoaded) => {
    return isLoaded ? state.list : [];
});

const getSelectedIds = createSelector(getState, (state: ToppingsState) => state.selectedIds);

const getSelected = createSelector(getAll, getSelectedIds, (entities, ids) => {
    if (!ids) return;
    return ids.map(id => entities[id]);
});

export const toppingsQuery = {
    getAll,
    getError,
    getList,
    getLoaded,
    getSelected,
};
