import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Topping } from '@uap/products/models';

export const toppingAdapter: EntityAdapter<Topping> = createEntityAdapter<Topping>({
    sortComparer: false,
});
