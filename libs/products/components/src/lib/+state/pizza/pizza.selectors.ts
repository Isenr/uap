import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Pizza, PizzaState, ProductState } from '@uap/products/models';

import { PRODUCT_FEATURE_KEY } from '../product.feature-key';
import { pizzaAdapter } from './pizza.adapter';

// get the selectors
const {
    // select the array of entities
    selectAll,
    // select the dictionary of entities
    selectEntities,
} = pizzaAdapter.getSelectors();

const getError = (state: PizzaState) => state.error;

const getLoaded = (state: PizzaState) => state.loaded;

const getPizzaState = (state: ProductState) => state.pizzas;

const getSelectedId = (state: PizzaState) => state.selectedId;

const getSelected = (state: PizzaState): Pizza => {
    const entities = selectEntities(state);
    const id = getSelectedId(state);
    if (!id) return;
    const pizza = entities[id] || ({ toppings: [] } as Pizza);
    return {
        ...pizza,
        toppings: [...pizza.toppings],
    };
};

// Lookup the 'Product' feature state managed by NgRx
const selectProductState = createFeatureSelector<ProductState>(PRODUCT_FEATURE_KEY);

// Lookup the 'Pizza' state managed by NgRx
const selectPizzaState = createSelector(
    selectProductState,
    getPizzaState
);

export const pizzaQuery = {
    getAll: createSelector(
        selectPizzaState,
        selectAll
    ),
    getError: createSelector(
        selectPizzaState,
        getError
    ),
    getLoaded: createSelector(
        selectPizzaState,
        getLoaded
    ),
    getSelected: createSelector(
        selectPizzaState,
        getSelected
    ),
    getSelectedId: createSelector(
        selectPizzaState,
        getSelectedId
    ),
};
