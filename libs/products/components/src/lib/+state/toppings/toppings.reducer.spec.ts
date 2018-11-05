import { Entity } from '@uap/products/models';

import { ToppingsLoaded } from './toppings.actions';
import { initialState, toppingsReducer, ToppingsState } from './toppings.reducer';

describe('Toppings Reducer', () => {
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

    describe('valid Toppings actions ', () => {
        it('should return set the list of known Toppings', () => {
            const entities = {
                [idA]: createEntity(idA),
                [idZ]: createEntity(idZ),
            };
            const action = new ToppingsLoaded(entities);
            const result: ToppingsState = toppingsReducer(initialState, action);
            const selId: string = getEntityId(result.list[idZ]);

            expect(result.loaded).toBe(true);
            expect(Reflect.ownKeys(result.list).length).toBe(2);
            expect(selId).toBe(idZ);
        });
    });

    describe('unknown action', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const result = toppingsReducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });
});
