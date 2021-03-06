import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { FirestoreService } from './firestore.service';

describe('FirestoreService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [FirestoreService, { provide: AngularFirestore, useValue: {} }],
        })
    );

    it('should be created', () => {
        const service: FirestoreService<{ id: string }> = TestBed.inject(FirestoreService);
        expect(service).toBeTruthy();
    });
});
