import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { BackEndCollection, FirestoreService } from '@uap/backend';
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

    public loadPizzas$: Observable<PizzasLoadSuccess> = createEffect(() =>
        this.dataPersistence.fetch(PizzaActionTypes.PizzasLoad, {
            run: (_action: PizzasLoad, state: ProductPartialState) => {
                const pizzaState = state[PRODUCT_FEATURE_KEY].pizzas;
                if (pizzaState.loaded) {
                    const ids: (string | number)[] = pizzaState.ids;
                    return new PizzasLoadSuccess({
                        pizzas: ids.map(id => pizzaState.entities[id]),
                    });
                }
                return this.collection.get().pipe(map(pizzas => new PizzasLoadSuccess({ pizzas })));
            },

            onError: (_action: PizzasLoad, error) => {
                console.error('PizzasLoadError', error);
                return new PizzasLoadError(error);
            },
        })
    );

    public removePizza$ = createEffect(() =>
        this.dataPersistence.optimisticUpdate<PizzaRemove>(PizzaActionTypes.PizzaRemove, {
            // provides an action and the current state of the store
            run: (a, _state) => {
                const id = a.payload.id;
                this.collection.delete({ id });
                return new PizzaRemoveSuccess({ id });
            },

            undoAction: (_action: PizzaRemove, error) => {
                console.error('PizzaRemoveError', error);
                return new PizzaRemoveError(error);
            },
        })
    );

    public createPizza$ = createEffect(() =>
        this.dataPersistence.optimisticUpdate<PizzaCreate>(PizzaActionTypes.PizzaCreate, {
            // provides an action and the current state of the store
            run: ({ payload }, _state) => {
                const pizza: Pizza = {
                    ...payload.pizza,
                    id: this.collection.createId(),
                };
                this.collection.create(pizza);
                return new PizzaCreateSuccess({ pizza });
            },

            undoAction: (_action: PizzaCreate, error) => {
                console.error('PizzaCreateError', error);
                return new PizzaCreateError(error);
            },
        })
    );

    public updatePizza$ = createEffect(() =>
        this.dataPersistence.optimisticUpdate<PizzaUpdate>(PizzaActionTypes.PizzaUpdate, {
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
        })
    );

    public pizzaCreated$ = createEffect(() =>
        this.actions.pipe(
            ofType(PizzaActionTypes.PizzaCreateSuccess),
            map(
                ({ payload: { pizza } }) =>
                    new RouterNavigate({ commands: [`/products/${pizza.id}`] })
            )
        )
    );

    public pizzaRemoved$ = createEffect(() =>
        this.actions.pipe(
            ofType(PizzaActionTypes.PizzaRemoveSuccess),
            map(() => {
                return new RouterNavigate({ commands: [`/products`] });
            })
        )
    );

    constructor(
        private actions: Actions<PizzaActionsUnion>,
        private dataPersistence: DataPersistence<ProductPartialState>,
        backend: FirestoreService<Pizza>
    ) {
        this.collection = backend.collection('pizzas');
    }
}
