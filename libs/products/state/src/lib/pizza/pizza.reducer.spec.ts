import { Pizza, PizzaState } from '@uap/products/models';

import { PizzasLoadSuccess } from './pizza.actions';
import { pizzaInitialState } from './pizza-initial.state';
import { pizzaReducer } from './pizza.reducer';

describe('Pizza Reducer', () => {
    const getPizzaId = (it: Pizza) => it['id'];
    let createPizza: (id: string, name?: string) => Pizza;
    const idA = 'PRODUCT-AAA';
    const idZ = 'PRODUCT-zzz';

    beforeEach(() => {
        createPizza = (id: string, name = ''): Pizza => ({
            id,
            name: name || `name-${id}`,
        });
    });

    describe('valid Pizza actions ', () => {
        it('should return set the list of known Pizzas', () => {
            const pizzas = [createPizza(idA), createPizza(idZ)];
            const action = new PizzasLoadSuccess({ pizzas });
            const result: PizzaState = pizzaReducer(pizzaInitialState, action);
            const selId: string = getPizzaId(result.entities[idZ]);

            expect(result.loaded).toBe(true);
            expect(Reflect.ownKeys(result.entities).length).toBe(2);
            expect(selId).toBe(idZ);
        });
    });

    describe('unknown action', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const result = pizzaReducer(pizzaInitialState, action);

            expect(result).toBe(pizzaInitialState);
        });
    });
});
