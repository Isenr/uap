import { Entity } from '@uap/products/models';

import { ToppingsLoaded } from './toppings.actions';
import {
    initialState,
    toppingsReducer,
    ToppingsState,
} from './toppings.reducer';

describe('Toppings Reducer', () => {
    const getEntityId = it => it['id'];
    let createEntity;

    beforeEach(() => {
        createEntity = (id: string, name = ''): Entity => ({
            id,
            name: name || `name-${id}`,
        });
    });

    describe('valid Toppings actions ', () => {
        it('should return set the list of known Toppings', () => {
            const toppings = [createEntity('PRODUCT-AAA'), createEntity('PRODUCT-zzz')];
            const action = new ToppingsLoaded(toppings);
            const result: ToppingsState = toppingsReducer(initialState, action);
            const selId: string = getEntityId(result.list[1]);

            expect(result.loaded).toBe(true);
            expect(result.list.length).toBe(2);
            expect(selId).toBe('PRODUCT-zzz');
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
