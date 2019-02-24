import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { FirestoreService } from './firestore.service';

describe('FirestoreService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [{ provide: AngularFirestore, useValue: {} }],
        })
    );

    it('should be created', () => {
        const service: FirestoreService<{ id: string }> = TestBed.get(FirestoreService);
        expect(service).toBeTruthy();
    });
});
