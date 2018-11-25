import { RouterReducerState } from '@ngrx/router-store';
import { ROUTER_FEATURE_KEY_TYPE, RouterStateUrl } from '@uap/state';

export type RootCoreState = { [K in ROUTER_FEATURE_KEY_TYPE]: RouterReducerState<RouterStateUrl> };
