import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

import { FirestoreService } from './firestore/firestore.service';
import { Backend } from './models/backend.model';

export function backendImports(environment: { firebase?: FirebaseOptions } = {}) {
    // imports firebase/firestore needed for database features
    return [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence(),
    ];
}

export function backendProviders() {
    return [{ provide: FirestoreSettingsToken, useValue: {} }];
}

@NgModule({
    providers: [{ provide: Backend, useExisting: FirestoreService }],
})
export class BackendModule {}
