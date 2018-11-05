import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { PizzasEffects } from './pizzas/pizzas.effects';
import { ProductsPartialState } from './products.reducer';
import { ToppingsEffects } from './toppings/toppings.effects';

@Injectable()
export class ProductsEffects {
    @Effect()
    public loadPizzas$ = this.pizzasEffects.loadPizzas$;

    @Effect()
    public loadToppings$ = this.toppingsEffects.loadToppings$;

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<ProductsPartialState>,
        private pizzasEffects: PizzasEffects,
        private toppingsEffects: ToppingsEffects
    ) {}
}
