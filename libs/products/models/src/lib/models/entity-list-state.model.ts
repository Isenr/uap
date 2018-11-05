import { Entity } from './entity.model';

export interface EntityListState<T extends Entity = Entity> {
    list: T[]; // list of Entities; analogous to a sql normalized table
    selectedId?: string | number; // which Entity record has been selected
    loaded: boolean; // has the Entities list been loaded
    error?: any; // last none error (if any)
}
