import { PizzaState } from '@uap/products/models';
import { entityListInitialState } from '@uap/state';

import { pizzaAdapter } from './pizza.adapter';

export const pizzaInitialState: PizzaState = {
    ...entityListInitialState(pizzaAdapter),
};
