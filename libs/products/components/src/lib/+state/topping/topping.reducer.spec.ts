import { Topping, ToppingState } from '@uap/products/models';

import { ToppingsLoaded } from './topping.actions';
import { toppingInitialState } from './topping.initial-state';
import { toppingReducer } from './topping.reducer';

describe('Topping Reducer', () => {
    const getEntityId = it => it['id'];
    let createEntity: (id: string, name?: string) => Topping;
    const idA = 'PRODUCT-AAA';
    const idZ = 'PRODUCT-zzz';

    beforeEach(() => {
        createEntity = (id: string, name = ''): Topping => ({
            id,
            name: name || `name-${id}`,
        });
    });

    describe('valid Topping actions ', () => {
        it('should return set the list of known Toppings', () => {
            const toppings = [createEntity(idA), createEntity(idZ)];
            const action = new ToppingsLoaded({ toppings });
            const result: ToppingState = toppingReducer(toppingInitialState, action);
            const selId: string = getEntityId(result.entities[idZ]);

            expect(result.loaded).toBe(true);
            expect(Reflect.ownKeys(result.entities).length).toBe(2);
            expect(selId).toBe(idZ);
        });
    });

    describe('unknown action', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const result = toppingReducer(toppingInitialState, action);

            expect(result).toBe(toppingInitialState);
        });
    });
});
