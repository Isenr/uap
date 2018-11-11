import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RootCoreState } from '@uap/root-core/models';

import { ROOTCORE_FEATURE_KEY } from './root-core.feature-key';

// Lookup the 'RootCore' feature state managed by NgRx
const getRootCoreState = createFeatureSelector<RootCoreState>(ROOTCORE_FEATURE_KEY);

const getLoaded = createSelector(getRootCoreState, (state: RootCoreState) => state.loaded);
const getError = createSelector(getRootCoreState, (state: RootCoreState) => state.error);

export const rootCoreQuery = {
    getError,
    getLoaded,
};
