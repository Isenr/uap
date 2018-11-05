import { Pizza } from '@uap/products/models';
import { of as observableOf } from 'rxjs';

import { PizzasService } from './pizzas.service';

export const PizzasServiceMock: Pick<PizzasService, keyof PizzasService> = {
    createPizza(payload: Pizza) {
        return observableOf<Pizza>({
            ...payload,
            id: 1,
        });
    },
    getPizzas() {
        return observableOf<Pizza[]>([]);
    },
    removePizza(payload: Pizza) {
        return observableOf(payload);
    },
    updatePizza(payload: Pizza) {
        return observableOf(payload);
    },
};
