import { Action } from '@ngrx/store';

import { PizzaActionTypes } from './pizza.action-types';

export class PizzaSelect implements Action {
    public readonly type = PizzaActionTypes.PizzaSelect;
    constructor(public payload?: { id: string }) {}
}
