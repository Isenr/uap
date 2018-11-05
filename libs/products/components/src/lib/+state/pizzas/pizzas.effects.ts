import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { PRODUCTS_FEATURE_KEY, ProductsPartialState } from '../products.reducer';
import { PizzasActionTypes, PizzasLoad, PizzasLoaded, PizzasLoadError } from './pizzas.actions';

@Injectable()
export class PizzasEffects {
    @Effect()
    public loadPizzas$ = this.dataPersistence.fetch(PizzasActionTypes.PizzasLoad, {
        run: (action: PizzasLoad, state: ProductsPartialState) => {
            if (state[PRODUCTS_FEATURE_KEY].pizzas.loaded) {
                return new PizzasLoaded(state[PRODUCTS_FEATURE_KEY].pizzas.list);
            }
            return new PizzasLoaded([
                {
                    id: 1,
                    name: `Blazin' Inferno`,
                    toppings: [
                        {
                            id: 10,
                            name: 'pepperoni',
                        },
                        {
                            id: 9,
                            name: 'pepper',
                        },
                        {
                            id: 3,
                            name: 'basil',
                        },
                        {
                            id: 4,
                            name: 'chili',
                        },
                        {
                            id: 7,
                            name: 'olive',
                        },
                        {
                            id: 2,
                            name: 'bacon',
                        },
                    ],
                },
                {
                    id: 2,
                    name: `Seaside Surfin'`,
                    toppings: [
                        {
                            id: 6,
                            name: 'mushroom',
                        },
                        {
                            id: 7,
                            name: 'olive',
                        },
                        {
                            id: 2,
                            name: 'bacon',
                        },
                        {
                            id: 3,
                            name: 'basil',
                        },
                        {
                            id: 1,
                            name: 'anchovy',
                        },
                        {
                            id: 8,
                            name: 'onion',
                        },
                        {
                            id: 11,
                            name: 'sweetcorn',
                        },
                        {
                            id: 9,
                            name: 'pepper',
                        },
                        {
                            id: 5,
                            name: 'mozzarella',
                        },
                    ],
                },
                {
                    id: 3,
                    name: `Plain Ol' Pepperoni`,
                    toppings: [
                        {
                            id: 10,
                            name: 'pepperoni',
                        },
                    ],
                },
            ]);
        },

        onError: (action: PizzasLoad, error) => {
            console.error('Error', error);
            return new PizzasLoadError(error);
        },
    });

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<ProductsPartialState>
    ) {}
}
