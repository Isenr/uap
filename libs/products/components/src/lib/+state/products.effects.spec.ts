import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { DataPersistence, NxModule } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { Observable } from 'rxjs';

import { LoadPizzas, PizzasLoaded } from './pizzas/pizzas.actions';
import { PizzasEffects } from './pizzas/pizzas.effects';
import { ProductsEffects } from './products.effects';
import { LoadToppings, ToppingsLoaded } from './toppings/toppings.actions';

describe('ProductsComponentsEffects', () => {
    let actions: Observable<any>;
    let effects: ProductsEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([])],
            providers: [PizzasEffects, DataPersistence, provideMockActions(() => actions)],
        });

        effects = TestBed.get(PizzasEffects);
    });

    describe('loadPizzas$', () => {
        it('should work', () => {
            actions = hot('-a-|', { a: new LoadPizzas() });
            expect(effects.loadPizzas$).toBeObservable(hot('-a-|', { a: new PizzasLoaded([]) }));
        });
    });

    describe('loadToppings$', () => {
        it('should work', () => {
            actions = hot('-a-|', { a: new LoadToppings() });
            expect(effects.loadToppings$).toBeObservable(
                hot('-a-|', { a: new ToppingsLoaded([]) })
            );
        });
    });
});
