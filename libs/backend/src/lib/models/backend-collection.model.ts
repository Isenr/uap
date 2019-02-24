import { Observable } from 'rxjs';

export interface BackEndCollection<T extends { id?: string }> {
    create: (payload: T) => void;

    createId: () => string;

    delete: (payload: T) => void;

    get: () => Observable<T[]>;

    update: (payload: T) => void;
}
