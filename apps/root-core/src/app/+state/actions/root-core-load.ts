import { Action } from '@ngrx/store';

import { RootCoreActionTypes } from './root-core.action-types';

export class LoadRootCore implements Action {
    public readonly type = RootCoreActionTypes.LoadRootCore;
}
