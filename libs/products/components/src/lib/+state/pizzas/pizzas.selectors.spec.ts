import { Entity } from '@uap/products/models';

import { pizzasQuery } from './pizzas.selectors';

describe('ProductsComponents Selectors', () => {
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
                pizzas: {
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

    describe('Pizzas Selectors', () => {
        it('getAll() should return the list of Pizzas', () => {
            const results = pizzasQuery.getAll(storeState);
            const selId = getEntityId(results[1]);

            expect(results.length).toBe(3);
            expect(selId).toBe('PRODUCT-BBB');
        });

        it('getSelected() should return the selected Pizza', () => {
            const result = pizzasQuery.getSelected(storeState);
            const selId = getEntityId(result);

            expect(selId).toBe('PRODUCT-BBB');
        });

        it(`getLoaded() should return the current 'loaded' status`, () => {
            const result = pizzasQuery.getLoaded(storeState);

            expect(result).toBe(true);
        });

        it(`getError() should return the current 'error' storeState`, () => {
            const result = pizzasQuery.getError(storeState);

            expect(result).toBe(ERROR_MSG);
        });
    });
});
