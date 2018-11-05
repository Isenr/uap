import { Entity } from '@uap/products/models';

import { productsQuery } from './products.selectors';

describe('Products Selectors', () => {
    const ERROR_MSG = 'No Error Available';

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
                        createEntity('PIZZA-AAA'),
                        createEntity('PIZZA-BBB'),
                        createEntity('PIZZA-CCC'),
                    ],
                    loaded: true,
                    selectedId: 'PIZZA-BBB',
                },
                toppings: {
                    error: ERROR_MSG,
                    list: [
                        createEntity('TOPPING-AAA'),
                        createEntity('TOPPING-BBB'),
                        createEntity('TOPPING-CCC'),
                    ],
                    loaded: true,
                    selectedIds: ['TOPPING-BBB', 'TOPPING-CCC'],
                },
            },
        };
    });

    describe('Products Selectors', () => {
        it('getVisualised() should return the selected Pizza and Toppings', () => {
            const results = productsQuery.getVisualised(storeState);

            expect(results.id).toBe('PIZZA-BBB');
            expect(results.toppings.length).toBe(['TOPPING-BBB', 'TOPPING-CCC'].length);
            expect(
                results.toppings.every(a => ['TOPPING-BBB', 'TOPPING-CCC'].some(b => a.id === b))
            ).toBe(true);
        });
    });
});
