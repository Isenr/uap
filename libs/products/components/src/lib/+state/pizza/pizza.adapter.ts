import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Pizza } from '@uap/products/models';

export const pizzaAdapter: EntityAdapter<Pizza> = createEntityAdapter<Pizza>({
    sortComparer: false,
});
