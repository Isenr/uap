import { Action } from '@ngrx/store';
import { Pizza } from '@uap/products/models';

export enum PizzasActionTypes {
    PizzaCreate = '[ProductsComponents] Pizza Create',
    PizzaRemove = '[ProductsComponents] Pizza Remove',
    PizzaSelect = '[ProductsComponents] Pizza Select',
    PizzaUpdate = '[ProductsComponents] Pizza Update',
    PizzasLoad = '[ProductsComponents] Pizzas Load',
    PizzasLoadError = '[ProductsComponents] Pizzas Load Error',
    PizzasLoaded = '[ProductsComponents] Pizzas Loaded',
}

export class PizzaCreate implements Action {
    public readonly type = PizzasActionTypes.PizzaCreate;
    constructor(public payload: Pizza) {}
}

export class PizzaRemove implements Action {
    public readonly type = PizzasActionTypes.PizzaRemove;
    constructor(public payload: Pizza) {}
}

export class PizzaUpdate implements Action {
    public readonly type = PizzasActionTypes.PizzaUpdate;
    constructor(public payload: Pizza) {}
}

export class PizzaSelect implements Action {
    public readonly type = PizzasActionTypes.PizzaSelect;
    constructor(public payload?: string | number) {}
}

export class PizzasLoad implements Action {
    public readonly type = PizzasActionTypes.PizzasLoad;
}

export class PizzasLoadError implements Action {
    public readonly type = PizzasActionTypes.PizzasLoadError;
    constructor(public payload: any) {}
}

export class PizzasLoaded implements Action {
    public readonly type = PizzasActionTypes.PizzasLoaded;
    constructor(public payload: { [K in string | number]: Pizza }) {}
}

export type PizzasAction =
    // prettier-ignore
    PizzaCreate
    | PizzaRemove
    | PizzaSelect
    | PizzaUpdate
    | PizzasLoad
    | PizzasLoadError
    | PizzasLoaded;

export const fromPizzasActions = {
    PizzaCreate,
    PizzaRemove,
    PizzaSelect,
    PizzaUpdate,
    PizzasLoad,
    PizzasLoadError,
    PizzasLoaded,
};
