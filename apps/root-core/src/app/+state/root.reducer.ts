import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { RootCoreState } from '@uap/root-core/models';
import { ROUTER_FEATURE_KEY } from '@uap/state';

export const rootReducers: ActionReducerMap<RootCoreState> = {
    [ROUTER_FEATURE_KEY]: routerReducer,
};
