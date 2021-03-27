import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Backend } from '../models';

@Injectable()
export class FirestoreService<T extends { id?: string }> extends Backend<T> {
    constructor(private readonly angularFirestore: AngularFirestore) {
        super();
    }

    public collection(collectionName: string) {
        return {
            create: (payload: T) => this.create(collectionName, payload),
            createId: () => this.angularFirestore.createId(),
            delete: (payload: T) => this.delete(collectionName, payload),
            get: () => this.get(collectionName),
            update: (payload: T) => this.update(collectionName, payload),
        };
    }

    protected get(collectionName: string): Observable<T[]> {
        type GenericChangeAction = DocumentChangeAction<T>;
        return this.angularFirestore
            .collection(collectionName)
            .stateChanges(['added'])
            .pipe(
                map<GenericChangeAction[], T[]>(actions =>
                    actions.map(({ payload: { doc: { id }, doc } }) => ({
                        ...doc.data(),
                        id,
                    }))
                ),
                catchError((error: unknown) => throwError(error))
            );
    }

    protected create(collectionName: string, payload: T): void {
        this.angularFirestore
            .collection(collectionName)
            .doc(payload.id)
            .set(payload);
    }

    protected delete(collectionName: string, payload: T): void {
        this.angularFirestore
            .collection(collectionName)
            .doc(payload.id)
            .delete();
    }

    protected update(collectionName: string, payload: T): void {
        this.angularFirestore
            .collection(collectionName)
            .doc(payload.id)
            .update(payload);
    }
}
