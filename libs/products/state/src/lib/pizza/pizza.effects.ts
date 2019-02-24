import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { Backend, BackEndCollection } from '@uap/backend';
import { Pizza, ProductPartialState } from '@uap/products/models';
import { RouterNavigate } from '@uap/state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PRODUCT_FEATURE_KEY } from '../product/product.feature-key';
import {
    PizzaActionsUnion,
    PizzaActionTypes,
    PizzaCreate,
    PizzaCreateError,
    PizzaCreateSuccess,
    PizzaRemove,
    PizzaRemoveError,
    PizzaRemoveSuccess,
    PizzasLoad,
    PizzasLoadError,
    PizzasLoadSuccess,
    PizzaUpdate,
    PizzaUpdateError,
    PizzaUpdateSuccess,
} from './pizza.actions';

@Injectable()
export class PizzaEffects {
    private readonly collection: BackEndCollection<Pizza>;

    @Effect()
    public loadPizzas$: Observable<PizzasLoadSuccess> = this.dataPersistence.fetch(
        PizzaActionTypes.PizzasLoad,
        {
            run: (action: PizzasLoad, state: ProductPartialState) => {
                const pizzaState = state[PRODUCT_FEATURE_KEY].pizzas;
                if (pizzaState.loaded) {
                    const ids: Array<string | number> = pizzaState.ids;
                    return new PizzasLoadSuccess({
                        pizzas: ids.map(id => pizzaState.entities[id]),
                    });
                }
                return this.collection.get().pipe(map(pizzas => new PizzasLoadSuccess({ pizzas })));
            },

            onError: (action: PizzasLoad, error) => {
                console.error('PizzasLoadError', error);
                return new PizzasLoadError(error);
            },
        }
    );

    @Effect()
    public removePizza$ = this.dataPersistence.optimisticUpdate<PizzaRemove>(
        PizzaActionTypes.PizzaRemove,
        {
            // provides an action and the current state of the store
            run: (a, state) => {
                const id = a.payload.id;
                this.collection.delete({ id });
                return new PizzaRemoveSuccess({ id });
            },

            undoAction: (action: PizzaRemove, error) => {
                console.error('PizzaRemoveError', error);
                return new PizzaRemoveError(error);
            },
        }
    );

    @Effect()
    public createPizza$ = this.dataPersistence.optimisticUpdate<PizzaCreate>(
        PizzaActionTypes.PizzaCreate,
        {
            // provides an action and the current state of the store
            run: ({ payload }, state) => {
                const pizza: Pizza = {
                    ...payload.pizza,
                    id: this.collection.createId(),
                };
                this.collection.create(pizza);
                return new PizzaCreateSuccess({ pizza });
            },

            undoAction: (action: PizzaCreate, error) => {
                console.error('PizzaCreateError', error);
                return new PizzaCreateError(error);
            },
        }
    );

    @Effect()
    public updatePizza$ = this.dataPersistence.optimisticUpdate<PizzaUpdate>(
        PizzaActionTypes.PizzaUpdate,
        {
            // provides an action and the current state of the store
            run: (a, state) => {
                const id = `${a.payload.pizza.id}`;
                this.collection.update(state.products.pizzas.entities[id]);
                return new PizzaUpdateSuccess({ id });
            },

            undoAction: (action: PizzaUpdate, error) => {
                console.error('PizzaUpdateError', error);
                return new PizzaUpdateError(error);
            },
        }
    );

    @Effect()
    public pizzaCreated$ = this.actions.pipe(
        ofType(PizzaActionTypes.PizzaCreateSuccess),
        map(({ payload: { pizza } }) => new RouterNavigate({ commands: [`/products/${pizza.id}`] }))
    );

    @Effect()
    public pizzaRemoved$ = this.actions.pipe(
        ofType(PizzaActionTypes.PizzaRemoveSuccess),
        map(() => {
            return new RouterNavigate({ commands: [`/products`] });
        })
    );

    constructor(
        private actions: Actions<PizzaActionsUnion>,
        private dataPersistence: DataPersistence<ProductPartialState>,
        backend: Backend<Pizza>
    ) {
        this.collection = backend.collection('pizzas');
    }
}
