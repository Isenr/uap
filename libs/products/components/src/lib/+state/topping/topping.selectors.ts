import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, ToppingState } from '@uap/products/models';

import { PRODUCT_FEATURE_KEY } from '../product.feature-key';
import { toppingAdapter } from './topping.adapter';

// get the selectors
const {
    // select the dictionary of entities
    selectEntities,
} = toppingAdapter.getSelectors();

const getError = (state: ToppingState) => state.error;

const getLoaded = (state: ToppingState) => state.loaded;

const getToppingState = (state: ProductState) => state.toppings;

const getSelected = ({ entities, selectedIds }: ToppingState) => {
    if (!selectedIds.length) return;
    return selectedIds.map(id => entities[id]);
};

// Lookup the 'Product' feature state managed by NgRx
const selectProductState = createFeatureSelector<ProductState>(PRODUCT_FEATURE_KEY);

// Lookup the 'Topping' state managed by NgRx
const selectToppingState = createSelector(
    selectProductState,
    getToppingState
);

export const toppingQuery = {
    getAll: createSelector(
        selectToppingState,
        selectEntities
    ),
    getError: createSelector(
        selectToppingState,
        getError
    ),
    getLoaded: createSelector(
        selectToppingState,
        getLoaded
    ),
    getSelected: createSelector(
        selectToppingState,
        getSelected
    ),
};
