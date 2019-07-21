import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { RootCoreState } from '../models';

export const rootReducers: ActionReducerMap<RootCoreState> = {
    router: routerReducer,
};

export function metaReducers(environment: { production: boolean }) {
    return !environment.production ? [] : [];
}
