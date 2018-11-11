import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, ToppingState } from '@uap/products/models';

import { PRODUCT_FEATURE_KEY } from '../product.feature-key';
import { toppingAdapter } from './topping.adapter';

// get the selectors
const {
    // select the dictionary of entities
    selectEntities,
    // select the array of entities
    selectAll,
} = toppingAdapter.getSelectors();

const getError = (state: ToppingState) => state.error;

const getLoaded = (state: ToppingState) => state.loaded;

const getSelectedIds = (state: ToppingState) => state.selectedIds;

const getToppingState = (state: ProductState) => state.toppings;

const getSelected = (state: ToppingState) => {
    const entities = selectEntities(state);
    const ids = getSelectedIds(state);
    if (!ids.length) return;
    return ids.map(id => entities[id]);
};

// Lookup the 'Product' feature state managed by NgRx
const selectProductState = createFeatureSelector<ProductState>(PRODUCT_FEATURE_KEY);

// Lookup the 'Topping' state managed by NgRx
const selectToppingState = createSelector(selectProductState, getToppingState);

export const toppingQuery = {
    getAll: createSelector(selectToppingState, selectAll),
    getError: createSelector(selectToppingState, getError),
    getLoaded: createSelector(selectToppingState, getLoaded),
    getSelected: createSelector(selectToppingState, getSelected),
};
