import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import {
    LoadToppings,
    ToppingsActionTypes,
    ToppingsError,
    ToppingsLoaded,
} from './toppings.actions';
import { ToppingsPartialState } from './toppings.reducer';

@Injectable()
export class ToppingsEffects {
    @Effect()
    public loadToppings$ = this.dataPersistence.fetch(
        ToppingsActionTypes.LoadToppings,
        {
            run: (action: LoadToppings, state: ToppingsPartialState) => {
                // Your custom REST 'load' logic goes here. For now just return an empty list...
                return new ToppingsLoaded([]);
            },

            onError: (action: LoadToppings, error) => {
                console.error('Error', error);
                return new ToppingsError(error);
            },
        }
    );

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<ToppingsPartialState>
    ) {}
}
