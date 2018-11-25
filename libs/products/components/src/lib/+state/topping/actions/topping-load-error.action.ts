import { Action } from '@ngrx/store';

import { ToppingActionTypes } from './topping.action-types';

export class ToppingsLoadError implements Action {
    public readonly type = ToppingActionTypes.ToppingsLoadError;
    constructor(public payload: any) {}
}
