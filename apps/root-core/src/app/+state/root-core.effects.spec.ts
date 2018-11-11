import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { DataPersistence, NxModule } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { Observable } from 'rxjs';

import { LoadRootCore, RootCoreLoaded } from './actions';
import { RootCoreEffects } from './root-core.effects';

describe('RootCoreEffects', () => {
    let actions: Observable<any>;
    let effects: RootCoreEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([])],
            providers: [RootCoreEffects, DataPersistence, provideMockActions(() => actions)],
        });

        effects = TestBed.get(RootCoreEffects);
    });

    describe('loadRootCore$', () => {
        it('should work', () => {
            actions = hot('-a-|', { a: new LoadRootCore() });
            expect(effects.loadRootCore$).toBeObservable(
                hot('-a-|', { a: new RootCoreLoaded([]) })
            );
        });
    });
});
