import { TestBed, waitForAsync } from '@angular/core/testing';

import { BackendModule } from './backend.module';

describe('BackendModule', () => {
    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [BackendModule],
            }).compileComponents();
        })
    );

    it('should create', () => {
        expect(BackendModule).toBeDefined();
    });
});
