import { TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsFacade } from '@uap/products/state';
import { ObjectValuePipeModule } from '@uap/utils';
import { of } from 'rxjs';

import { PizzaDisplayComponent } from '../../components/pizza-display/pizza-display.component';
import { PizzaFormComponent } from '../../components/pizza-form/pizza-form.component';
import { PizzaToppingsComponent } from '../../components/pizza-toppings/pizza-toppings.component';
import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [
                    PizzaDisplayComponent,
                    PizzaFormComponent,
                    PizzaToppingsComponent,
                    ProductItemComponent,
                ],
                imports: [ObjectValuePipeModule, ReactiveFormsModule, RouterTestingModule],
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
        })
    );

    it('should create', () => {
        const fixture = TestBed.createComponent(ProductItemComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });
});
