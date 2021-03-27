import { Action } from '@ngrx/store';
import { Topping } from '@uap/products/models';

export enum ToppingActionTypes {
    ToppingsLoad = '[ProductsComponents] Toppings Load',
    ToppingsLoadError = '[ProductsComponents] Toppings Load Error',
    ToppingsLoaded = '[ProductsComponents] Toppings Loaded',
    ToppingsSelect = '[ProductsComponents] Toppings Select',
}

export class ToppingsLoad implements Action {
    public readonly type = ToppingActionTypes.ToppingsLoad;
}

export class ToppingsLoadError implements Action {
    public readonly type = ToppingActionTypes.ToppingsLoadError;
    constructor(public payload: unknown) {}
}

export class ToppingsLoadSuccess implements Action {
    public readonly type = ToppingActionTypes.ToppingsLoaded;
    constructor(public payload: { toppings: Topping[] }) {}
}

export class ToppingsSelect implements Action {
    public readonly type = ToppingActionTypes.ToppingsSelect;
    constructor(public payload?: { selectedIds: string[] }) {}
}

export type ToppingActionsUnion =
    | ToppingsLoad
    | ToppingsLoadError
    | ToppingsLoadSuccess
    | ToppingsSelect;
