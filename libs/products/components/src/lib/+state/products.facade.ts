import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Pizza } from '@uap/products/models';

import {
    PizzaCreate,
    PizzaRemove,
    PizzaSelect,
    PizzasLoad,
    PizzaUpdate,
} from './pizzas/pizzas.actions';
import { pizzasQuery } from './pizzas/pizzas.selectors';
import { ProductsPartialState } from './products.reducer';
import { productsQuery } from './products.selectors';
import { ToppingsLoad, ToppingsSelect } from './toppings/toppings.actions';
import { toppingsQuery } from './toppings/toppings.selectors';

@Injectable()
export class ProductsFacade {
    // #region pizzas
    public pizzasLoaded$ = this.store.pipe(select(pizzasQuery.getLoaded));

    public allPizzas$ = this.store.pipe(select(pizzasQuery.getAll));

    public selectedPizza$ = this.store.pipe(select(pizzasQuery.getSelected));

    public selectedPizzaId$ = this.store.pipe(select(pizzasQuery.getSelectedId));
    // #endregion pizzas

    // #region toppings
    public toppingsLoaded$ = this.store.pipe(select(toppingsQuery.getLoaded));

    public allToppings$ = this.store.pipe(select(toppingsQuery.getAll));

    public selectedToppings$ = this.store.pipe(select(toppingsQuery.getSelected));
    // #endregion toppings

    public visualise$ = this.store.pipe(select(productsQuery.getVisualised));

    constructor(private store: Store<ProductsPartialState>) {}

    public loadAll() {
        this.store.dispatch(new PizzasLoad());
        this.store.dispatch(new ToppingsLoad());
    }

    // #region pizzas
    public createPizza(payload: Pizza) {
        this.store.dispatch(new PizzaCreate(payload));
    }

    public loadAllPizzas() {
        this.store.dispatch(new PizzasLoad());
    }

    public removePizza(payload: Pizza) {
        this.store.dispatch(new PizzaRemove(payload));
    }

    public selectPizza(payload?: string | number) {
        this.store.dispatch(new PizzaSelect(payload));
    }

    public updatePizza(payload: Pizza) {
        this.store.dispatch(new PizzaUpdate(payload));
    }
    // #endregion pizzas

    // #region toppings
    public loadAllToppings() {
        this.store.dispatch(new ToppingsLoad());
    }

    public selectToppings(payload?: Array<string | number>) {
        this.store.dispatch(new ToppingsSelect(payload));
    }
    // #endregion toppings
}
