import { Entity } from '@uap/products/models';

import { PizzasLoaded } from './pizzas.actions';
import { initialState, pizzasReducer, PizzasState } from './pizzas.reducer';

describe('Pizzas Reducer', () => {
    const getEntityId = it => it['id'];
    let createEntity;

    beforeEach(() => {
        createEntity = (id: string, name = ''): Entity => ({
            id,
            name: name || `name-${id}`,
        });
    });

    describe('valid Pizzas actions ', () => {
        it('should return set the list of known Pizzas', () => {
            const productsComponents = [
                createEntity('PRODUCT-AAA'),
                createEntity('PRODUCT-zzz'),
            ];
            const action = new PizzasLoaded(productsComponents);
            const result: PizzasState = pizzasReducer(initialState, action);
            const selId: string = getEntityId(result.list[1]);

            expect(result.loaded).toBe(true);
            expect(result.list.length).toBe(2);
            expect(selId).toBe('PRODUCT-zzz');
        });
    });

    describe('unknown action', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const result = pizzasReducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });
});
