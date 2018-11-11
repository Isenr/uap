import { RootCoreState } from '@uap/root-core/models';

import { RootCoreActionsUnion, RootCoreActionTypes } from './actions';
import { rootCoreInitialState } from './root-core.initial-state';

export const rootCoreReducer = (
    state: RootCoreState = rootCoreInitialState,
    action: RootCoreActionsUnion
): RootCoreState => {
    switch (action.type) {
        case RootCoreActionTypes.RootCoreLoaded: {
            break;
        }
    }
    return state;
};
