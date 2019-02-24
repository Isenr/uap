import { RouterReducerState } from '@ngrx/router-store';
import { Pizza, ProductPartialState, Topping } from '@uap/products/models';
import { ROUTER_FEATURE_KEY, RouterStateUrl } from '@uap/state';

import { PRODUCT_FEATURE_KEY } from './product.feature-key';
import { productQuery } from './product.selectors';

describe('Product Selectors', () => {
    const ERROR_MSG = 'No Error Available';

    const getEntityId = (it: Pizza | Topping) => it.id;
    const createEntity = (id: string, name = ''): Pizza | Topping => ({
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

    let storeState: ProductPartialState & {
        [ROUTER_FEATURE_KEY]: Partial<RouterReducerState<RouterStateUrl<{ pizzaId: string }>>>;
    };
    let selectedPizzaId: string;
    let selectedToppingIds: string[];

    beforeEach(() => {
        const pizzaIds = ['PIZZA-AAA', 'PIZZA-BBB', 'PIZZA-CCC'];
        const toppingIds = ['TOPPING-AAA', 'TOPPING-BBB', 'TOPPING-CCC'];

        selectedPizzaId = pizzaIds[1];
        selectedToppingIds = toppingIds.filter((_, i) => i !== 0);

        storeState = {
            [PRODUCT_FEATURE_KEY]: {
                pizzas: {
                    entities: idsToEntities(pizzaIds),
                    error: ERROR_MSG,
                    ids: [...pizzaIds],
                    loaded: true,
                    selectedId: selectedPizzaId,
                },
                toppings: {
                    entities: idsToEntities(toppingIds),
                    error: ERROR_MSG,
                    ids: [...toppingIds],
                    loaded: true,
                    selectedIds: selectedToppingIds,
                },
            },
            [ROUTER_FEATURE_KEY]: {
                state: {
                    params: {
                        pizzaId: selectedPizzaId,
                    },
                    queryParams: null,
                    url: null,
                },
            },
        };
    });

    describe('Products Selectors', () => {
        it('getVisualised() should return the selected Pizza and Toppings', () => {
            const results = productQuery.getVisualised(storeState);

            expect(results.id).toBe(selectedPizzaId);
            expect(results.toppings.length).toBe(selectedToppingIds.length);
            expect(results.toppings.every(a => selectedToppingIds.some(b => a.id === b))).toBe(
                true
            );
        });
    });
});
