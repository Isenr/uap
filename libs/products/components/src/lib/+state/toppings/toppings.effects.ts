import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { PRODUCTS_FEATURE_KEY, ProductsPartialState } from '../products.reducer';
import {
    ToppingsActionTypes,
    ToppingsLoad,
    ToppingsLoaded,
    ToppingsLoadError,
} from './toppings.actions';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ToppingsEffects {
    @Effect()
    public loadToppings$: Observable<ToppingsLoaded> = this.dataPersistence.fetch(ToppingsActionTypes.ToppingsLoad, {
        run: (action: ToppingsLoad, state: ProductsPartialState) => {
            if (state[PRODUCTS_FEATURE_KEY].toppings.loaded) {
                return new ToppingsLoaded(state[PRODUCTS_FEATURE_KEY].toppings.list);
            }
            return new ToppingsLoaded([
                {
                    id: 1,
                    name: 'anchovy',
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
                    id: 4,
                    name: 'chili',
                },
                {
                    id: 5,
                    name: 'mozzarella',
                },
                {
                    id: 6,
                    name: 'mushroom',
                },
                {
                    id: 7,
                    name: 'olive',
                },
                {
                    id: 8,
                    name: 'onion',
                },
                {
                    id: 9,
                    name: 'pepper',
                },
                {
                    id: 10,
                    name: 'pepperoni',
                },
                {
                    id: 11,
                    name: 'sweetcorn',
                },
                {
                    id: 12,
                    name: 'tomato',
                },
            ]);
        },

        onError: (action: ToppingsLoad, error) => {
            console.error('Error', error);
            return new ToppingsLoadError(error);
        },
    });

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<ProductsPartialState>
    ) {}
}
