import { EntityState } from '@ngrx/entity';

import { Entity } from '../entity/entity.model';

export interface EntityListState<T extends Entity = Entity> extends EntityState<T> {
    selectedId?: string; // which Entity record has been selected
    selectedIds?: string[];
    loaded: boolean; // has the Entities list been loaded
    error?: unknown; // last none error (if any)
}
