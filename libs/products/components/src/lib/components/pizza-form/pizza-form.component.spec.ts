import { TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { PizzaToppingsComponent } from '../pizza-toppings/pizza-toppings.component';
import { PizzaFormComponent } from './pizza-form.component';

describe('PizzaFormComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [PizzaFormComponent, PizzaToppingsComponent],
            imports: [ReactiveFormsModule, RouterTestingModule],
        }).compileComponents();
    }));

    it('should create', () => {
        const fixture = TestBed.createComponent(PizzaFormComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });
});
