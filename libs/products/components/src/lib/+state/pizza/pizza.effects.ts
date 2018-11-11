import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataPersistence } from '@nrwl/nx';
import { ProductPartialState } from '@uap/products/models';
import { Observable } from 'rxjs';

import { PRODUCT_FEATURE_KEY } from '../product.feature-key';
import { PizzaActionTypes, PizzasLoad, PizzasLoaded, PizzasLoadError } from './actions';

@Injectable()
export class PizzaEffects {
    @Effect()
    public loadPizzas$: Observable<PizzasLoaded> = this.dataPersistence.fetch(
        PizzaActionTypes.PizzasLoad,
        {
            run: (action: PizzasLoad, state: ProductPartialState) => {
                const pizzaState = state[PRODUCT_FEATURE_KEY].pizzas;
                if (pizzaState.loaded) {
                    const ids: Array<string | number> = pizzaState.ids;
                    return new PizzasLoaded({
                        pizzas: ids.map(id => pizzaState.entities[id]),
                    });
                }
                return new PizzasLoaded({
                    pizzas: [
                        {
                            id: '1',
                            name: `Blazin' Inferno`,
                            toppings: [
                                {
                                    id: '10',
                                    name: 'pepperoni',
                                },
                                {
                                    id: '9',
                                    name: 'pepper',
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
                                    id: '7',
                                    name: 'olive',
                                },
                                {
                                    id: '2',
                                    name: 'bacon',
                                },
                            ],
                        },
                        {
                            id: '2',
                            name: `Seaside Surfin'`,
                            toppings: [
                                {
                                    id: '6',
                                    name: 'mushroom',
                                },
                                {
                                    id: '7',
                                    name: 'olive',
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
                                    id: '1',
                                    name: 'anchovy',
                                },
                                {
                                    id: '8',
                                    name: 'onion',
                                },
                                {
                                    id: '11',
                                    name: 'sweetcorn',
                                },
                                {
                                    id: '9',
                                    name: 'pepper',
                                },
                                {
                                    id: '5',
                                    name: 'mozzarella',
                                },
                            ],
                        },
                        {
                            id: '3',
                            name: `Plain Ol' Pepperoni`,
                            toppings: [
                                {
                                    id: '10',
                                    name: 'pepperoni',
                                },
                            ],
                        },
                    ],
                });
            },

            onError: (action: PizzasLoad, error) => {
                console.error('Error', error);
                return new PizzasLoadError(error);
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
