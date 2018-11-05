import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import {
    LoadPizzas,
    LoadPizzasError,
    PizzasActionTypes,
    PizzasLoaded,
} from './pizzas.actions';
import { PizzasPartialState } from './pizzas.reducer';

@Injectable()
export class PizzasEffects {
    @Effect()
    public loadPizzas$ = this.dataPersistence.fetch(PizzasActionTypes.LoadPizzas, {
        run: (action: LoadPizzas, state: PizzasPartialState) => {
            // Your custom REST 'load' logic goes here. For now just return an empty list...
            return new PizzasLoaded([]);
        },

        onError: (action: LoadPizzas, error) => {
            console.error('Error', error);
            return new LoadPizzasError(error);
        },
    });

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<PizzasPartialState>
    ) {}
}
