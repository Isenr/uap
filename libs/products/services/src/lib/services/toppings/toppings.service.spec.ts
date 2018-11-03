import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, inject, TestBed } from '@angular/core/testing';

import { ToppingsService } from './toppings.service';

describe('Service: ToppingsService', () => {
    let backend: HttpTestingController;
    let service: ToppingsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ToppingsService],
        });

        const testbed = getTestBed();
        backend = testbed.get(HttpTestingController);
        service = testbed.get(ToppingsService);
    });

    it('should inject', inject([ToppingsService], (toppingsService: ToppingsService) => {
        expect(toppingsService).toBeTruthy();
    }));
});
