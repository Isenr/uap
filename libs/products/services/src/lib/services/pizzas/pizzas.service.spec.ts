import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, inject, TestBed } from '@angular/core/testing';

import { PizzasService } from './pizzas.service';

describe('Service: PizzasService', () => {
    let backend: HttpTestingController;
    let service: PizzasService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PizzasService],
        });

        const testbed = getTestBed();
        backend = testbed.get(HttpTestingController);
        service = testbed.get(PizzasService);
    });

    it('should inject', inject([PizzasService], (pizzasService: PizzasService) => {
        expect(pizzasService).toBeTruthy();
    }));
});
