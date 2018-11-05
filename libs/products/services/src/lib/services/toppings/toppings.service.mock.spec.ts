import { Topping } from '@uap/products/models';
import { of as observableOf } from 'rxjs';

import { ToppingsService } from './toppings.service';

export const ToppingsServiceMock: Pick<ToppingsService, keyof ToppingsService> = {
    getToppings() {
        return observableOf<Topping[]>([]);
    },
};
