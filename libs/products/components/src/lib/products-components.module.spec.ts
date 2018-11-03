import { async, TestBed } from '@angular/core/testing';
import { ProductsComponentsModule } from './products-components.module';

describe('ProductsComponentsModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ProductsComponentsModule],
        }).compileComponents();
    }));

    it('should create', () => {
        expect(ProductsComponentsModule).toBeDefined();
    });
});
