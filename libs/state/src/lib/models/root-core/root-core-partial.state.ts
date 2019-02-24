import { ROOTCORE_FEATURE_KEY_TYPE } from './root-core-feature-key.type';
import { RootCoreState } from './root-core.state';

export type RootCorePartialState = { [K in ROOTCORE_FEATURE_KEY_TYPE]: RootCoreState };
