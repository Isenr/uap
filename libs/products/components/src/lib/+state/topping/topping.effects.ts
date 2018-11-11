import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataPersistence } from '@nrwl/nx';
import { ProductPartialState } from '@uap/products/models';
import { OperatorFunction } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { PRODUCT_FEATURE_KEY } from '../product.feature-key';
import {
    ToppingActionTypes,
    ToppingsLoad,
    ToppingsLoaded,
    ToppingsLoadError,
} from './topping.actions';

type OfTypeType = <
    V extends Extract<
        U,
        {
            type: T1;
        }
    >,
    T1 extends string = string,
    U extends Action = Action
>(
    t1: T1
) => OperatorFunction<U, V>;

@Injectable()
export class ToppingEffects {
    @Effect()
    public loadToppings$: Observable<ToppingsLoaded> = this.dataPersistence.fetch(
        ToppingActionTypes.ToppingsLoad,
        {
            run: (action: ToppingsLoad, state: ProductPartialState) => {
                const toppingState = state[PRODUCT_FEATURE_KEY].toppings;
                if (toppingState.loaded) {
                    const ids: Array<string | number> = toppingState.ids;
                    return new ToppingsLoaded({
                        toppings: ids.map(id => toppingState.entities[id]),
                    });
                }
                return new ToppingsLoaded({
                    toppings: [
                        {
                            id: '1',
                            name: 'anchovy',
                        },
                        {
                            id: '2',
                            name: 'bacon',
                        },
                        {
                            id: '3',
                            name: 'basil',
                        },
                        {
                            id: '4',
                            name: 'chili',
                        },
                        {
                            id: '5',
                            name: 'mozzarella',
                        },
                        {
                            id: '6',
                            name: 'mushroom',
                        },
                        {
                            id: '7',
                            name: 'olive',
                        },
                        {
                            id: '8',
                            name: 'onion',
                        },
                        {
                            id: '9',
                            name: 'pepper',
                        },
                        {
                            id: '10',
                            name: 'pepperoni',
                        },
                        {
                            id: '11',
                            name: 'sweetcorn',
                        },
                        {
                            id: '12',
                            name: 'tomato',
                        },
                    ],
                });
            },

            onError: (action: ToppingsLoad, error) => {
                console.error('Error', error);
                return new ToppingsLoadError(error);
            },
        }
    );

    // workaround to get DataPersistence to work with NgRx v7.0.0-beta.0
    private get dataPersistence(): DataPersistence<ProductPartialState> {
        if ((this._dataPersistence.actions as Actions & { ofType: any }).ofType) {
            return this._dataPersistence;
        }
        this._dataPersistence.actions = new Proxy(this._dataPersistence.actions, {
            get(target: Actions<Action>, p: string | number | symbol, receiver: any) {
                if (p !== 'ofType') return target[p];
                return type => target.pipe(ofType(type));
            },
        });
        return this._dataPersistence;
    }

    constructor(
        private actions$: Actions,
        private _dataPersistence: DataPersistence<ProductPartialState>
    ) {}
}
