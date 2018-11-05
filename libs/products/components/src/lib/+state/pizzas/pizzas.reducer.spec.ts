import { Entity } from '@uap/products/models';

import { PizzasLoaded } from './pizzas.actions';
import { initialState, pizzasReducer, PizzasState } from './pizzas.reducer';

describe('Pizzas Reducer', () => {
    const getEntityId = it => it['id'];
    let createEntity;
    const idA = 'PRODUCT-AAA';
    const idZ = 'PRODUCT-zzz';

    beforeEach(() => {
        createEntity = (id: string, name = ''): Entity => ({
            id,
            name: name || `name-${id}`,
        });
    });

    describe('valid Pizzas actions ', () => {
        it('should return set the list of known Pizzas', () => {
            const entities = {
                [idA]: createEntity(idA),
                [idZ]: createEntity(idZ),
            };
            const action = new PizzasLoaded(entities);
            const result: PizzasState = pizzasReducer(initialState, action);
            const selId: string = getEntityId(result.list[idZ]);

            expect(result.loaded).toBe(true);
            expect(Reflect.ownKeys(result.list).length).toBe(2);
            expect(selId).toBe(idZ);
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
