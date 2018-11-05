import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { DataPersistence, NxModule } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { Observable } from 'rxjs';

import { LoadToppings, ToppingsLoaded } from './toppings.actions';
import { ToppingsEffects } from './toppings.effects';

describe('ToppingsEffects', () => {
    let actions: Observable<any>;
    let effects: ToppingsEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([])],
            providers: [ToppingsEffects, DataPersistence, provideMockActions(() => actions)],
        });

        effects = TestBed.get(ToppingsEffects);
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
