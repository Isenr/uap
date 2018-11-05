import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { LoadPizzas, SelectPizza } from './pizzas.actions';
import { PizzasPartialState } from './pizzas.reducer';
import { pizzasQuery } from './pizzas.selectors';

@Injectable()
export class PizzasFacade {
    public loaded$ = this.store.pipe(select(pizzasQuery.getLoaded));

    public all$ = this.store.pipe(select(pizzasQuery.getAll));

    public selected$ = this.store.pipe(select(pizzasQuery.getSelected));

    constructor(private store: Store<PizzasPartialState>) {}

    public loadAll() {
        this.store.dispatch(new LoadPizzas());
    }

    public select(id: string | number) {
        this.store.dispatch(new SelectPizza(id));
    }
}
