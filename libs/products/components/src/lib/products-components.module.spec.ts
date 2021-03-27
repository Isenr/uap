import { TestBed, waitForAsync } from '@angular/core/testing';
import { ProductsComponentsModule } from './products-components.module';

describe('ProductsComponentsModule', () => {
    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [ProductsComponentsModule],
            }).compileComponents();
        })
    );

    it('should create', () => {
        expect(ProductsComponentsModule).toBeDefined();
    });
});
