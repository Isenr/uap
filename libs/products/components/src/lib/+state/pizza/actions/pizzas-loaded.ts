import { Action } from '@ngrx/store';
import { Pizza } from '@uap/products/models';

import { PizzaActionTypes } from './pizza.action-types';

export class PizzasLoaded implements Action {
    public readonly type = PizzaActionTypes.PizzasLoaded;
    constructor(public payload: { pizzas: Pizza[] }) {}
}
