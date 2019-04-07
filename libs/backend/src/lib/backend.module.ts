import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

import { FirestoreService } from './firestore/firestore.service';
import { Backend } from './models/backend.model';

export function backendImports(environment: {
    backend: { firebase: FirebaseOptions; provider: string };
}) {
    // imports firebase/firestore needed for database features
    return [
        AngularFireModule.initializeApp(environment.backend.firebase),
        AngularFirestoreModule.enablePersistence(),
    ];
}

@NgModule()
export class BackendModule {
    constructor(@Optional() @SkipSelf() parentModule: BackendModule) {
        if (parentModule) {
            throw new Error('BackendModule is already loaded. Import it in the AppModule only');
        }
    }

    public static forRoot({
        backend: { provider },
    }: {
        backend: { firebase: FirebaseOptions; provider: string };
    }): ModuleWithProviders {
        return {
            ngModule: BackendModule,
            providers:
                provider === 'firebase'
                    ? [
                          { provide: Backend, useExisting: FirestoreService },
                          { provide: FirestoreSettingsToken, useValue: {} },
                      ]
                    : [],
        };
    }
}
