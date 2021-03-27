import { EntityAdapter } from '@ngrx/entity';

import { EntityListState } from '../../models/entity-list-state/entity-list-state.model';

export const entityListInitialState = <T>(adapter: EntityAdapter<T>): EntityListState<T> =>
    adapter.getInitialState({
        error: undefined as unknown,
        loaded: false,
        selectedId: undefined as string,
        selectedIds: [] as string[],
    });
