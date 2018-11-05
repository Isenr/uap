import { Entity } from '@uap/products/models';

import { toppingsQuery } from './toppings.selectors';

describe('Toppings Selectors', () => {
    const ERROR_MSG = 'No Error Available';
    const getEntityId = it => it['id'];

    const idA = 'PRODUCT-AAA';
    const idB = 'PRODUCT-BBB';
    const idC = 'PRODUCT-CCC';

    let storeState;

    beforeEach(() => {
        const createEntity = (id: string, name = ''): Entity => ({
            id,
            name: name || `name-${id}`,
        });
        storeState = {
            productsComponents: {
                toppings: {
                    error: ERROR_MSG,
                    list: {
                        [idA]: createEntity(idA),
                        [idB]: createEntity(idB),
                        [idC]: createEntity(idC),
                    },
                    loaded: true,
                    selectedId: idB,
                },
            },
        };
    });

    describe('Toppings Selectors', () => {
        it('getAll() should return the list of Toppings', () => {
            const results = toppingsQuery.getAll(storeState);
            const selId = getEntityId(results[idB]);

            expect(Reflect.ownKeys(results).length).toBe(3);
            expect(selId).toBe(idB);
        });

        it('getSelected() should return the selected Topping', () => {
            const result = toppingsQuery.getSelected(storeState);
            const selId = getEntityId(result);

            expect(selId).toBe('PRODUCT-BBB');
        });

        it(`getLoaded() should return the current 'loaded' status`, () => {
            const result = toppingsQuery.getLoaded(storeState);

            expect(result).toBe(true);
        });

        it(`getError() should return the current 'error' storeState`, () => {
            const result = toppingsQuery.getError(storeState);

            expect(result).toBe(ERROR_MSG);
        });
    });
});
