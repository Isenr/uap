import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FirebaseAuthService } from '../../services';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [AuthGuard, { provide: FirebaseAuthService, useValue: {} }],
        });
    });

    it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
        expect(guard).toBeTruthy();
    }));
});
