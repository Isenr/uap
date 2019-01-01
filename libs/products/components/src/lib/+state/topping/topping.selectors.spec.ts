import { ProductPartialState, Topping } from '@uap/products/models';
import { dictionaryToArray } from '@uap/utils';

import { pizzaInitialState } from '../pizza/pizza.initial-state';
import { PRODUCT_FEATURE_KEY } from '../product.feature-key';
import { toppingQuery } from './topping.selectors';

describe('Topping Selectors', () => {
    const ERROR_MSG = 'No Error Available';

    const getEntityId = (it: Topping) => it.id;
    const createEntity = (id: string, name = ''): Topping => ({
        id,
        name: name || `name-${id}`,
    });
    const idsToEntities = (ids: string[]) =>
        ids.reduce(
            (a, b) => ({
                ...a,
                [b]: createEntity(b),
            }),
            {}
        );

    const idA = 'PRODUCT-AAA';
    const idB = 'PRODUCT-BBB';
    const idC = 'PRODUCT-CCC';

    let storeState: ProductPartialState;
    let selectedToppingIds: string[];

    beforeEach(() => {
        const toppingIds = [idA, idB, idC];

        selectedToppingIds = toppingIds.filter((_, i) => i !== 0);

        storeState = {
            [PRODUCT_FEATURE_KEY]: {
                pizzas: pizzaInitialState,
                toppings: {
                    entities: idsToEntities(toppingIds),
                    error: ERROR_MSG,
                    ids: [...toppingIds],
                    loaded: true,
                    selectedIds: selectedToppingIds,
                },
            },
        };
    });

    describe('Toppings Selectors', () => {
        it('getAll() should return the list of Toppings', () => {
            const results = dictionaryToArray(toppingQuery.getAll(storeState));
            const selId = getEntityId(results[1]);

            expect(results.length).toBe(3);
            expect(selId).toBe(idB);
        });

        it(`getLoaded() should return the current 'loaded' status`, () => {
            const result = toppingQuery.getLoaded(storeState);

            expect(result).toBe(true);
        });

        it(`getError() should return the current 'error' storeState`, () => {
            const result = toppingQuery.getError(storeState);

            expect(result).toBe(ERROR_MSG);
        });
    });
});
