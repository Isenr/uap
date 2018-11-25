import { Pizza, PizzaState, Topping, ToppingState } from '@uap/products/models';

import { pizzaInitialState, PizzasLoaded } from './pizza';
import { productReducers } from './product.reducer';
import { toppingInitialState, ToppingsLoaded } from './topping';

describe('Product Reducer', () => {
    const getEntityId = it => it['id'];
    let createEntity: (id: string, name?: string) => Topping | Pizza;
    const idA = 'PRODUCT-AAA';
    const idZ = 'PRODUCT-zzz';

    beforeEach(() => {
        createEntity = (id: string, name = ''): Topping | Pizza => ({
            id,
            name: name || `name-${id}`,
        });
    });

    describe('valid Product actions ', () => {
        it('should return set the list of known Pizzas', () => {
            const pizzas = [createEntity(idA), createEntity(idZ)];
            const action = new PizzasLoaded({ pizzas });
            const result: PizzaState = productReducers.pizzas(pizzaInitialState, action);
            const selId: string = getEntityId(result.entities[idA]);

            expect(result.loaded).toBe(true);
            expect(result.ids.length).toBe(2);
            expect(Reflect.ownKeys(result.entities).length).toBe(2);
            expect(selId).toBe(idA);
        });

        it('should return set the list of known Toppings', () => {
            const toppings = [createEntity(idA), createEntity(idZ)];
            const action = new ToppingsLoaded({ toppings });
            const result: ToppingState = productReducers.toppings(toppingInitialState, action);
            const selId: string = getEntityId(result.entities[idZ]);

            expect(result.loaded).toBe(true);
            expect(result.ids.length).toBe(2);
            expect(Reflect.ownKeys(result.entities).length).toBe(2);
            expect(selId).toBe(idZ);
        });
    });

    describe('unknown action', () => {
        it('should return the initial pizza state', () => {
            const action = {} as any;
            const result = productReducers.pizzas(pizzaInitialState, action);

            expect(result).toBe(pizzaInitialState);
        });

        it('should return the initial topping state', () => {
            const action = {} as any;
            const result = productReducers.toppings(toppingInitialState, action);

            expect(result).toBe(toppingInitialState);
        });
    });
});
