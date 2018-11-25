import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ProductsFacade } from '../../+state';
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
                    provide: ProductsFacade,
                    useValue: {
                        allToppings$: of({}),
                        selectedPizza$: of(),
                        visualise$: of(),
                        createPizza() {},
                        removePizza() {},
                        selectPizza() {},
                        selectToppings() {},
                        updatePizza() {},
                    },
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
