import { Action } from '@ngrx/store';
import { Pizza } from '@uap/products/models';

import { PizzaActionTypes } from './pizza.action-types';

export class PizzaCreate implements Action {
    public readonly type = PizzaActionTypes.PizzaCreate;
    constructor(public payload: { pizza: Pizza }) {}
}
