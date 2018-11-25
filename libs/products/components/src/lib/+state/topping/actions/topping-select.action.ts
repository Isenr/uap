import { Action } from '@ngrx/store';

import { ToppingActionTypes } from './topping.action-types';

export class ToppingsSelect implements Action {
    public readonly type = ToppingActionTypes.ToppingsSelect;
    constructor(public payload?: { selectedIds: string[] }) {}
}
