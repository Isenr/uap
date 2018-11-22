import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PizzaState, ProductState } from '@uap/products/models';
import { ROUTER_FEATURE_KEY, RouterStateUrl } from '@uap/state';

import { PRODUCT_FEATURE_KEY } from '../product.feature-key';
import { pizzaAdapter } from './pizza.adapter';

const getPizzaState = (state: ProductState) => state.pizzas;

// get the selectors
const {
    // select the array of entities
    selectAll,
    // select the dictionary of entities
    selectEntities,
} = pizzaAdapter.getSelectors();

const getError = (state: PizzaState) => state.error;

const getLoaded = (state: PizzaState) => state.loaded;

// Lookup the 'Product' feature state managed by NgRx
const selectProductState = createFeatureSelector<ProductState>(PRODUCT_FEATURE_KEY);

type RouterState = RouterReducerState<RouterStateUrl<{ pizzaId: string }>>;

// Lookup the router feature state managed by NgRx
const getRouterState = createFeatureSelector<RouterState>(ROUTER_FEATURE_KEY);

// Lookup the 'Pizza' state managed by NgRx
const selectPizzaState = createSelector(
    selectProductState,
    getPizzaState
);

const pizzaEntities = createSelector(
    selectPizzaState,
    selectEntities
);

const defaultRouterState: Partial<RouterStateUrl<{ pizzaId?: string }>> = {
    params: { pizzaId: undefined },
};

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
        pizzaEntities,
        getRouterState,
        (pizzas, router) => pizzas[(router.state || defaultRouterState).params.pizzaId]
    ),
};
