import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PizzaDisplayComponent } from '../pizza-display/pizza-display.component';
import { PizzaItemComponent } from './pizza-item.component';

describe('PizzaItemComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PizzaDisplayComponent, PizzaItemComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    }));

    it('should create', () => {
        const fixture = TestBed.createComponent(PizzaItemComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });
});
