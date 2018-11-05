import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/nx';
import { readFirst } from '@nrwl/nx/testing';
import { Entity } from '@uap/products/models';

import { PizzasLoaded } from './pizzas.actions';
import { PizzasEffects } from './pizzas.effects';
import { PizzasFacade } from './pizzas.facade';
import {
    initialState,
    PIZZAS_FEATURE_KEY,
    pizzasReducer,
    PizzasState,
} from './pizzas.reducer';

interface TestSchema {
    productsComponents: PizzasState;
}

describe('PizzasFacade', () => {
    let facade: PizzasFacade;
    let store: Store<TestSchema>;
    let createEntity;

    beforeEach(() => {
        createEntity = (id: string, name = ''): Entity => ({
            id,
            name: name || `name-${id}`,
        });
    });

    describe('used in NgModule', () => {
        beforeEach(() => {
            @NgModule({
                imports: [
                    StoreModule.forFeature(PIZZAS_FEATURE_KEY, pizzasReducer, {
                        initialState,
                    }),
                    EffectsModule.forFeature([PizzasEffects]),
                ],
                providers: [PizzasFacade],
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
            facade = TestBed.get(PizzasFacade);
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
         * Use `PizzasLoaded` to manually submit list for state management
         */
        it('all$ should return the loaded list; and loaded flag == true', async done => {
            try {
                let list = await readFirst(facade.all$);
                let isLoaded = await readFirst(facade.loaded$);

                expect(list.length).toBe(0);
                expect(isLoaded).toBe(false);

                store.dispatch(new PizzasLoaded([createEntity('AAA'), createEntity('BBB')]));

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
