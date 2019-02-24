import { Observable } from 'rxjs';

import { BackEndCollection } from './backend-collection.model';

export abstract class Backend<T extends { id?: string }> {
    public abstract collection(collectionName: string): BackEndCollection<T>;

    protected abstract create(collectionName: string, payload: T): void;

    protected abstract delete(collectionName: string, payload: T): void;

    protected abstract get(collectionName: string): Observable<T[]>;

    protected abstract update(collectionName: string, payload: T): void;
}
