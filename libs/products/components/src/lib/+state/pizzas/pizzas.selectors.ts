import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Pizza } from '@uap/products/models';
import { dictionaryToArray } from '@uap/utils';

import { PRODUCTS_FEATURE_KEY, ProductsState } from '../products.reducer';
import { PizzasState } from './pizzas.reducer';

// Lookup the 'Pizzas' feature state managed by NgRx
const getState = createSelector(
    createFeatureSelector<ProductsState>(PRODUCTS_FEATURE_KEY),
    (state: ProductsState) => state.pizzas
);

const getLoaded = createSelector(getState, (state: PizzasState) => state.loaded);

const getError = createSelector(getState, (state: PizzasState) => state.error);

const getAll = createSelector(getState, getLoaded, (state: PizzasState, isLoaded) => {
    return isLoaded ? state.data : {};
});

const getList = createSelector(getState, getLoaded, (state: PizzasState, isLoaded) => {
    return isLoaded ? state.list : [];
});

const getSelectedId = createSelector(getState, (state: PizzasState) => state.selectedId);

const getSelected = createSelector(getAll, getSelectedId, (entities, id) => {
    return entities[id] || (id === 'new' ? ({} as Pizza) : undefined);
});

export const pizzasQuery = {
    getAll,
    getError,
    getList,
    getLoaded,
    getSelected,
    getSelectedId,
};
