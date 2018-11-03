import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
    PizzasService,
    PizzasServiceMock,
    ToppingsService,
    ToppingsServiceMock,
} from '@uap/products/services';

import { PizzaDisplayComponent } from '../../components/pizza-display/pizza-display.component';
import { PizzaFormComponent } from '../../components/pizza-form/pizza-form.component';
import { PizzaToppingsComponent } from '../../components/pizza-toppings/pizza-toppings.component';
import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PizzaDisplayComponent,
                PizzaFormComponent,
                PizzaToppingsComponent,
                ProductItemComponent,
            ],
            imports: [ReactiveFormsModule, RouterTestingModule],
            providers: [
                {
                    provide: PizzasService,
                    useValue: PizzasServiceMock,
                },
                {
                    provide: ToppingsService,
                    useValue: ToppingsServiceMock,
                },
            ],
        }).compileComponents();
    }));

    it('should create', () => {
        const fixture = TestBed.createComponent(ProductItemComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });
});
