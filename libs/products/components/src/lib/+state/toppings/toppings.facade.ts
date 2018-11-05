import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { LoadToppings } from './toppings.actions';
import { ToppingsPartialState } from './toppings.reducer';
import { toppingsQuery } from './toppings.selectors';

@Injectable()
export class ToppingsFacade {
    public loaded$ = this.store.pipe(select(toppingsQuery.getLoaded));

    public all$ = this.store.pipe(select(toppingsQuery.getAll));

    public selected$ = this.store.pipe(select(toppingsQuery.getSelected));

    constructor(private store: Store<ToppingsPartialState>) {}

    public loadAll() {
        this.store.dispatch(new LoadToppings());
    }
}
