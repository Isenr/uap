import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { BackEndCollection, FirestoreService } from '@uap/backend';
import { ProductPartialState, Topping } from '@uap/products/models';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { PRODUCT_FEATURE_KEY } from '../product/product.feature-key';
import {
    ToppingActionTypes,
    ToppingsLoad,
    ToppingsLoadError,
    ToppingsLoadSuccess,
} from './topping.actions';

@Injectable()
export class ToppingEffects {
    private readonly collection: BackEndCollection<Topping>;

    @Effect()
    public loadToppings$: Observable<ToppingsLoadSuccess> = this.dataPersistence.fetch(
        ToppingActionTypes.ToppingsLoad,
        {
            run: (action: ToppingsLoad, state: ProductPartialState) => {
                const toppingState = state[PRODUCT_FEATURE_KEY].toppings;
                if (toppingState.loaded) {
                    const ids: Array<string | number> = toppingState.ids;
                    return new ToppingsLoadSuccess({
                        toppings: ids.map(id => toppingState.entities[id]),
                    });
                }
                return this.collection
                    .get()
                    .pipe(map(toppings => new ToppingsLoadSuccess({ toppings })));
            },

            onError: (action: ToppingsLoad, error) => {
                console.error('Error', error);
                return new ToppingsLoadError(error);
            },
        }
    );

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<ProductPartialState>,
        backend: FirestoreService<Topping>
    ) {
        this.collection = backend.collection('toppings');
    }
}
