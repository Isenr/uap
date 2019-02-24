import { NavigationExtras } from '@angular/router';
import { Action } from '@ngrx/store';

export enum RouterActionTypes {
    RouterNavigate = '[Router] Router Navigate',
}

export class RouterNavigate implements Action {
    public readonly type = RouterActionTypes.RouterNavigate;
    constructor(public payload: { commands: any[]; extras?: NavigationExtras }) {}
}

export type RouterActionsUnion = RouterNavigate;
