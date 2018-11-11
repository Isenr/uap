import { Action } from '@ngrx/store';

import { RootCoreActionTypes } from './root-core.action-types';

export class RootCoreLoadError implements Action {
    public readonly type = RootCoreActionTypes.RootCoreLoadError;
    constructor(public payload: any) {}
}
