import { RouterReducerState } from '@ngrx/router-store';

import { ROUTER_FEATURE_KEY_TYPE } from '../router/router-feature-key.type';
import { RouterStateUrl } from '../router/router-state-url.model';

export type RootCoreState = { [K in ROUTER_FEATURE_KEY_TYPE]: RouterReducerState<RouterStateUrl> };
