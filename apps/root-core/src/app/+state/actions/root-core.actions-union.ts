import { LoadRootCore } from './root-core-load';
import { RootCoreLoadError } from './root-core-load-error';
import { RootCoreLoaded } from './root-core-loaded';

export type RootCoreActionsUnion = LoadRootCore | RootCoreLoaded | RootCoreLoadError;
