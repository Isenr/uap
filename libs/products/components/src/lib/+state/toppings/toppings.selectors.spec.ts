import { Entity } from '@uap/products/models';

import { toppingsQuery } from './toppings.selectors';

describe('Toppings Selectors', () => {
    const ERROR_MSG = 'No Error Available';
    const getEntityId = it => it['id'];

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
                    list: [
                        createEntity('PRODUCT-AAA'),
                        createEntity('PRODUCT-BBB'),
                        createEntity('PRODUCT-CCC'),
                    ],
                    loaded: true,
                    selectedId: 'PRODUCT-BBB',
                },
            },
        };
    });

    describe('Toppings Selectors', () => {
        it('getAll() should return the list of Toppings', () => {
            const results = toppingsQuery.getAll(storeState);
            const selId = getEntityId(results[1]);

            expect(results.length).toBe(3);
            expect(selId).toBe('PRODUCT-BBB');
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
