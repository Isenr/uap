import { InjectionToken } from '@angular/core';
import { routerReducer } from '@ngrx/router-store';
import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { RootCoreState } from '@uap/root-core/models';
import { ROUTER_FEATURE_KEY } from '@uap/state';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';

export const rootReducers = {} as ActionReducerMap<RootCoreState>;
rootReducers[ROUTER_FEATURE_KEY] = routerReducer;

export const reducerToken = new InjectionToken<ActionReducerMap<RootCoreState>>(
    'Registered Reducers'
);

export const reducerProvider = [{ provide: reducerToken, useValue: rootReducers }];

export const metaReducers: Array<MetaReducer<RootCoreState, Action>> = !environment.production
    ? [storeFreeze]
    : [];
