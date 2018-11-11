import { Pizza, ProductPartialState } from '@uap/products/models';

import { PRODUCT_FEATURE_KEY } from '../product.feature-key';
import { toppingInitialState } from '../topping/topping.initial-state';
import { pizzaQuery } from './pizza.selectors';

describe('Pizza Selectors', () => {
    const ERROR_MSG = 'No Error Available';

    const getPizzaId = (it: Pizza) => it.id;
    const createPizza = (id: string, name = ''): Pizza => ({
        id,
        name: name || `name-${id}`,
    });
    const idsToEntities = (ids: string[]) =>
        ids.reduce(
            (a, b) => ({
                ...a,
                [b]: createPizza(b),
            }),
            {}
        );

    const idA = 'PRODUCT-AAA';
    const idB = 'PRODUCT-BBB';
    const idC = 'PRODUCT-CCC';

    let storeState: ProductPartialState;
    let selectedPizzaId: string;

    beforeEach(() => {
        const pizzaIds = [idA, idB, idC];

        selectedPizzaId = pizzaIds[0];

        storeState = {
            [PRODUCT_FEATURE_KEY]: {
                pizzas: {
                    entities: idsToEntities(pizzaIds),
                    error: ERROR_MSG,
                    ids: [...pizzaIds],
                    loaded: true,
                    selectedId: selectedPizzaId,
                },
                toppings: toppingInitialState,
            },
        };
    });

    describe('Pizzas Selectors', () => {
        it('getAll() should return the list of Pizzas', () => {
            const results = pizzaQuery.getAll(storeState);
            const selId = getPizzaId(results[1]);

            expect(results.length).toBe(3);
            expect(selId).toBe(idB);
        });

        it(`getLoaded() should return the current 'loaded' status`, () => {
            const result = pizzaQuery.getLoaded(storeState);

            expect(result).toBe(true);
        });

        it(`getError() should return the current 'error' storeState`, () => {
            const result = pizzaQuery.getError(storeState);

            expect(result).toBe(ERROR_MSG);
        });
    });
});
