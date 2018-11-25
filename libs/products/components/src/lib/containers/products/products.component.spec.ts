import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ProductsFacade } from '../../+state';
import { PizzaDisplayComponent } from '../../components/pizza-display/pizza-display.component';
import { PizzaItemComponent } from '../../components/pizza-item/pizza-item.component';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PizzaDisplayComponent, PizzaItemComponent, ProductsComponent],
            imports: [RouterTestingModule],
            providers: [
                {
                    provide: ProductsFacade,
                    useValue: {
                        allPizzas$: of({}),
                        loadPizzas() {},
                    },
                },
            ],
        }).compileComponents();
    }));

    it('should create', () => {
        const fixture = TestBed.createComponent(ProductsComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });
});
