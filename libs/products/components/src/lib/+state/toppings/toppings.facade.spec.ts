import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/nx';
import { readFirst } from '@nrwl/nx/testing';
import { Entity } from '@uap/products/models';

import { ToppingsLoaded } from './toppings.actions';
import { ToppingsEffects } from './toppings.effects';
import { ToppingsFacade } from './toppings.facade';
import {
    initialState,
    TOPPINGS_FEATURE_KEY,
    toppingsReducer,
    ToppingsState,
} from './toppings.reducer';

interface TestSchema {
    productsComponents: ToppingsState;
}

describe('ProductsComponentsToppingsFacade', () => {
    let facade: ToppingsFacade;
    let store: Store<TestSchema>;
    let createProductsComponents;

    beforeEach(() => {
        createProductsComponents = (id: string, name = ''): Entity => ({
            id,
            name: name || `name-${id}`,
        });
    });

    describe('used in NgModule', () => {
        beforeEach(() => {
            @NgModule({
                imports: [
                    StoreModule.forFeature(TOPPINGS_FEATURE_KEY, toppingsReducer, {
                        initialState,
                    }),
                    EffectsModule.forFeature([ToppingsEffects]),
                ],
                providers: [ToppingsFacade],
            })
            class CustomFeatureModule {}

            @NgModule({
                imports: [
                    NxModule.forRoot(),
                    StoreModule.forRoot({}),
                    EffectsModule.forRoot([]),
                    CustomFeatureModule,
                ],
            })
            class RootModule {}
            TestBed.configureTestingModule({ imports: [RootModule] });

            store = TestBed.get(Store);
            facade = TestBed.get(ToppingsFacade);
        });

        /**
         * The initially generated facade::loadAll() returns empty array
         */
        it('loadAll() should return empty list with loaded == true', async done => {
            try {
                let list = await readFirst(facade.all$);
                let isLoaded = await readFirst(facade.loaded$);

                expect(list.length).toBe(0);
                expect(isLoaded).toBe(false);

                facade.loadAll();

                list = await readFirst(facade.all$);
                isLoaded = await readFirst(facade.loaded$);

                expect(list.length).toBe(0);
                expect(isLoaded).toBe(true);

                done();
            } catch (err) {
                done.fail(err);
            }
        });

        /**
         * Use `ToppingsLoaded` to manually submit list for state management
         */
        it('all$ should return the loaded list; and loaded flag == true', async done => {
            try {
                let list = await readFirst(facade.all$);
                let isLoaded = await readFirst(facade.loaded$);

                expect(list.length).toBe(0);
                expect(isLoaded).toBe(false);

                store.dispatch(
                    new ToppingsLoaded([
                        createProductsComponents('AAA'),
                        createProductsComponents('BBB'),
                    ])
                );

                list = await readFirst(facade.all$);
                isLoaded = await readFirst(facade.loaded$);

                expect(list.length).toBe(2);
                expect(isLoaded).toBe(true);

                done();
            } catch (err) {
                done.fail(err);
            }
        });
    });
});
