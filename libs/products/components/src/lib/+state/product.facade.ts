import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Pizza, ProductPartialState } from '@uap/products/models';

import {
    PizzaCreate,
    pizzaQuery,
    PizzaRemove,
    PizzaSelect,
    PizzasLoad,
    PizzaUpdate,
} from './pizza';
import { productQuery } from './product.selectors';
import { toppingQuery, ToppingsLoad, ToppingsSelect } from './topping';

@Injectable()
export class ProductsFacade {
    // #region pizzas
    public pizzasLoaded$ = this.store.pipe(select(pizzaQuery.getLoaded));

    public allPizzas$ = this.store.pipe(select(pizzaQuery.getAll));

    public selectedPizza$ = this.store.pipe(select(pizzaQuery.getSelected));
    // #endregion pizzas

    // #region toppings
    public toppingsLoaded$ = this.store.pipe(select(toppingQuery.getLoaded));

    public allToppings$ = this.store.pipe(select(toppingQuery.getAll));

    public selectedToppings$ = this.store.pipe(select(toppingQuery.getSelected));
    // #endregion toppings

    public visualise$ = this.store.pipe(select(productQuery.getVisualised));

    constructor(private store: Store<ProductPartialState>) {}

    public loadAll() {
        this.store.dispatch(new PizzasLoad());
        this.store.dispatch(new ToppingsLoad());
    }

    // #region pizzas
    public createPizza(pizza: Pizza) {
        this.store.dispatch(new PizzaCreate({ pizza }));
    }

    public loadPizzas() {
        this.store.dispatch(new PizzasLoad());
    }

    public removePizza({ id }: Pizza) {
        this.store.dispatch(new PizzaRemove({ id }));
    }

    public selectPizza(id?: string) {
        this.store.dispatch(new PizzaSelect({ id }));
    }

    public updatePizza(changes: Pizza) {
        this.store.dispatch(new PizzaUpdate({ pizza: { changes, id: changes.id } }));
    }
    // #endregion pizzas

    // #region toppings
    public loadToppings() {
        this.store.dispatch(new ToppingsLoad());
    }

    public selectToppings(selectedIds?: string[]) {
        this.store.dispatch(new ToppingsSelect({ selectedIds }));
    }
    // #endregion toppings
}
