import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
import { ROUTER_FEATURE_KEY, RouterStateUrl } from '@uap/state';

type RouterState = RouterReducerState<RouterStateUrl<{ pizzaId: string }>>;

// Lookup the router feature state managed by NgRx
export const getRouterState = createFeatureSelector<RouterState>(ROUTER_FEATURE_KEY);
