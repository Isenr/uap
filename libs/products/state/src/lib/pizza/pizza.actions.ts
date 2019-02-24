import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Pizza } from '@uap/products/models';

export enum PizzaActionTypes {
    PizzaCreate = '[ProductsComponents] Pizza Create',
    PizzaCreateError = '[ProductsComponents] Pizza Create Error',
    PizzaCreateSuccess = '[ProductsComponents] Pizza Create Success',
    PizzasLoad = '[ProductsComponents] Pizzas Load',
    PizzasLoadSuccess = '[ProductsComponents] Pizzas Load Success',
    PizzasLoadError = '[ProductsComponents] Pizzas Load Error',
    PizzaRemove = '[ProductsComponents] Pizza Remove',
    PizzaRemoveError = '[ProductsComponents] Pizza Remove Error',
    PizzaRemoveSuccess = '[ProductsComponents] Pizza Remove Success',
    PizzaSelect = '[ProductsComponents] Pizza Select',
    PizzaUpdate = '[ProductsComponents] Pizza Update',
    PizzaUpdateError = '[ProductsComponents] Pizza Update Error',
    PizzaUpdateSuccess = '[ProductsComponents] Pizza Update Success',
}

// #region single entity actions
export class PizzaCreate implements Action {
    public readonly type = PizzaActionTypes.PizzaCreate;
    constructor(public payload: { pizza: Pizza }) {}
}

export class PizzaCreateSuccess implements Action {
    public readonly type = PizzaActionTypes.PizzaCreateSuccess;
    constructor(public payload: { pizza: Pizza }) {}
}

export class PizzaCreateError implements Action {
    public readonly type = PizzaActionTypes.PizzaCreateError;
    constructor(public payload: { pizza: Pizza }) {}
}

export class PizzaRemove implements Action {
    public readonly type = PizzaActionTypes.PizzaRemove;
    constructor(public payload: { id: string }) {}
}

export class PizzaRemoveError implements Action {
    public readonly type = PizzaActionTypes.PizzaRemoveError;
    constructor(public payload: { id: string }) {}
}

export class PizzaRemoveSuccess implements Action {
    public readonly type = PizzaActionTypes.PizzaRemoveSuccess;
    constructor(public payload: { id: string }) {}
}

export class PizzaSelect implements Action {
    public readonly type = PizzaActionTypes.PizzaSelect;
    constructor(public payload?: { id: string }) {}
}

export class PizzaUpdate implements Action {
    public readonly type = PizzaActionTypes.PizzaUpdate;
    constructor(public payload: { pizza: Update<Pizza> }) {}
}

export class PizzaUpdateError implements Action {
    public readonly type = PizzaActionTypes.PizzaUpdateError;
    constructor(public payload: { id: string }) {}
}

export class PizzaUpdateSuccess implements Action {
    public readonly type = PizzaActionTypes.PizzaUpdateSuccess;
    constructor(public payload: { id: string }) {}
}
// #endregion single entity actions

// #region multiple entity actions
export class PizzasLoad implements Action {
    public readonly type = PizzaActionTypes.PizzasLoad;
}

export class PizzasLoadError implements Action {
    public readonly type = PizzaActionTypes.PizzasLoadError;
    constructor(public payload: any) {}
}

export class PizzasLoadSuccess implements Action {
    public readonly type = PizzaActionTypes.PizzasLoadSuccess;
    constructor(public payload: { pizzas: Pizza[] }) {}
}
// #endregion multiple entity actions

export type PizzaActionsUnion =
    | PizzaCreate
    | PizzaCreateError
    | PizzaCreateSuccess
    | PizzaRemove
    | PizzaRemoveError
    | PizzaRemoveSuccess
    | PizzaSelect
    | PizzaUpdate
    | PizzaUpdateError
    | PizzaUpdateSuccess
    | PizzasLoad
    | PizzasLoadError
    | PizzasLoadSuccess;
