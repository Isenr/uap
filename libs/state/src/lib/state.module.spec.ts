import { TestBed, waitForAsync } from '@angular/core/testing';

import { StateModule } from './state.module';

describe('StateModule', () => {
    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [StateModule],
            }).compileComponents();
        })
    );

    it('should create', () => {
        expect(StateModule).toBeDefined();
    });
});
