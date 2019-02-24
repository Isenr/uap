import { inject, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';

import { FirebaseAuthService } from './firebase-auth.service';

describe('FirebaseAuthService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                {
                    provide: AngularFireAuth,
                    useValue: {
                        auth: {
                            onAuthStateChanged: () => null,
                        },
                    },
                },
            ],
        });
    });

    it('should be created', inject([FirebaseAuthService], (service: FirebaseAuthService) => {
        expect(service).toBeTruthy();
    }));
});
