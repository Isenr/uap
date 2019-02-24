import { EntityAdapter } from '@ngrx/entity';

import { EntityListState } from '../../models/entity-list-state/entity-list-state.model';

export const entityListInitialState = <T>(adapter: EntityAdapter<T>): EntityListState<T> =>
    adapter.getInitialState({
        error: undefined,
        loaded: false,
        selectedId: undefined,
        selectedIds: [],
    });
