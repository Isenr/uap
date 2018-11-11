import { Action } from '@ngrx/store';
import { Entity } from '@uap/state';

import { RootCoreActionTypes } from './root-core.action-types';

export class RootCoreLoaded implements Action {
    public readonly type = RootCoreActionTypes.RootCoreLoaded;
    constructor(public payload: Entity[]) {}
}
