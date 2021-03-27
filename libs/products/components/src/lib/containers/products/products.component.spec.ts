import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsFacade } from '@uap/products/state';
import { ObjectValuePipeModule } from '@uap/utils';
import { of } from 'rxjs';

import { PizzaDisplayComponent } from '../../components/pizza-display/pizza-display.component';
import { PizzaItemComponent } from '../../components/pizza-item/pizza-item.component';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [PizzaDisplayComponent, PizzaItemComponent, ProductsComponent],
                imports: [ObjectValuePipeModule, RouterTestingModule],
                providers: [
                    {
                        provide: ProductsFacade,
                        useValue: {
                            allPizzas$: of({}),
                            loadPizzas: jest.fn(),
                        },
                    },
                ],
            }).compileComponents();
        })
    );

    it('should create', () => {
        const fixture = TestBed.createComponent(ProductsComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });
});
