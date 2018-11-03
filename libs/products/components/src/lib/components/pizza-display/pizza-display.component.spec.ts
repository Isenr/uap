import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PizzaDisplayComponent } from './pizza-display.component';

describe('PizzaDisplayComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PizzaDisplayComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    }));

    it('should create', () => {
        const fixture = TestBed.createComponent(PizzaDisplayComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });
});
