import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PizzaToppingsComponent } from './pizza-toppings.component';

describe('PizzaToppingsComponent', () => {
    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [PizzaToppingsComponent],
                imports: [RouterTestingModule],
            }).compileComponents();
        })
    );

    it('should create', () => {
        const fixture = TestBed.createComponent(PizzaToppingsComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });
});
