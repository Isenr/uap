import { Entity } from '@uap/products/models';

import { PizzasLoaded } from './pizzas/pizzas.actions';
import {
    initialState,
    productsReducer,
    ProductsState,
} from './products.reducer';
import { ToppingsLoaded } from './toppings/toppings.actions';

describe('ProductsComponents Reducer', () => {
    const getEntityId = it => it['id'];
    let createEntity;

    beforeEach(() => {
        createEntity = (id: string, name = ''): Entity => ({
            id,
            name: name || `name-${id}`,
        });
    });

    describe('valid ProductsComponents actions ', () => {
        it('should return set the list of known Pizzas', () => {
            const entities = [createEntity('PRODUCT-AAA'), createEntity('PRODUCT-zzz')];
            const action = new PizzasLoaded(entities);
            const result: ProductsState = productsReducer(initialState, action);
            const selId: string = getEntityId(result.pizzas.list[1]);

            expect(result.pizzas.loaded).toBe(true);
            expect(result.pizzas.list.length).toBe(2);
            expect(selId).toBe('PRODUCT-zzz');
        });

        it('should return set the list of known Toppings', () => {
            const productsComponents = [createEntity('PRODUCT-AAA'), createEntity('PRODUCT-zzz')];
            const action = new ToppingsLoaded(productsComponents);
            const result: ProductsState = productsReducer(initialState, action);
            const selId: string = getEntityId(result.toppings.list[1]);

            expect(result.toppings.loaded).toBe(true);
            expect(result.toppings.list.length).toBe(2);
            expect(selId).toBe('PRODUCT-zzz');
        });
    });

    describe('unknown action', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const result = productsReducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });
});
