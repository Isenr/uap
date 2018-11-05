import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PRODUCTS_FEATURE_KEY, ProductsState } from '../products.reducer';
import { PizzasState } from './pizzas.reducer';

// Lookup the 'Pizzas' feature state managed by NgRx
const getState = createFeatureSelector<ProductsState>(PRODUCTS_FEATURE_KEY);

const getPizzasState = createSelector(getState, (state: ProductsState) => state.pizzas);

const getLoaded = createSelector(getPizzasState, (state: PizzasState) => state.loaded);

const getError = createSelector(getPizzasState, (state: PizzasState) => state.error);

const getAll = createSelector(getPizzasState, getLoaded, (state: PizzasState, isLoaded) => {
    return isLoaded ? state.list : [];
});

const getSelectedId = createSelector(getPizzasState, (state: PizzasState) => state.selectedId);

const getSelected = createSelector(getAll, getSelectedId, (entities, id) => {
    const result = entities.find(it => String(it['id']) === String(id));
    return result ? Object.assign({}, result) : id ? {} : undefined;
});

export const pizzasQuery = {
    getAll,
    getError,
    getLoaded,
    getSelected,
    getSelectedId,
};
