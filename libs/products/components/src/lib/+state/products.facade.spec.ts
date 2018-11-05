import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/nx';
import { readFirst } from '@nrwl/nx/testing';
import { Entity } from '@uap/products/models';

import { PizzasLoaded } from './pizzas/pizzas.actions';
import { ProductsEffects } from './products.effects';
import { ProductsFacade } from './products.facade';
import {
    initialState,
    PRODUCTS_FEATURE_KEY,
    productsReducer,
    ProductsState,
} from './products.reducer';
import { ToppingsLoaded } from './toppings/toppings.actions';

interface TestSchema {
    productsComponents: ProductsState;
}

describe('ProductsComponentsFacade', () => {
    let facade: ProductsFacade;
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
                    StoreModule.forFeature(
                        PRODUCTS_FEATURE_KEY,
                        productsReducer,
                        {
                            initialState,
                        }
                    ),
                    EffectsModule.forFeature([ProductsEffects]),
                ],
                providers: [ProductsFacade],
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
            facade = TestBed.get(ProductsFacade);
        });

        /**
         * The initially generated facade::loadAllPizzas() returns empty array
         */
        it('loadAllPizzas() should return empty list with loaded == true', async done => {
            try {
                let list = await readFirst(facade.allPizzas$);
                let isLoaded = await readFirst(facade.pizzasLoaded$);

                expect(list.length).toBe(0);
                expect(isLoaded).toBe(false);

                facade.loadAllPizzas();

                list = await readFirst(facade.allPizzas$);
                isLoaded = await readFirst(facade.pizzasLoaded$);

                expect(list.length).toBe(0);
                expect(isLoaded).toBe(true);

                done();
            } catch (err) {
                done.fail(err);
            }
        });

        /**
         * The initially generated facade::loadAllToppings() returns empty array
         */
        it('loadAllToppings() should return empty list with loaded == true', async done => {
            try {
                let list = await readFirst(facade.allToppings$);
                let isLoaded = await readFirst(facade.toppingsLoaded$);

                expect(list.length).toBe(0);
                expect(isLoaded).toBe(false);

                facade.loadAllToppings();

                list = await readFirst(facade.allToppings$);
                isLoaded = await readFirst(facade.toppingsLoaded$);

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
        it('allPizzas$ should return the loaded list; and loaded flag == true', async done => {
            try {
                let list = await readFirst(facade.allPizzas$);
                let isLoaded = await readFirst(facade.pizzasLoaded$);

                expect(list.length).toBe(0);
                expect(isLoaded).toBe(false);

                store.dispatch(new PizzasLoaded([createEntity('AAA'), createEntity('BBB')]));

                list = await readFirst(facade.allPizzas$);
                isLoaded = await readFirst(facade.pizzasLoaded$);

                expect(list.length).toBe(2);
                expect(isLoaded).toBe(true);

                done();
            } catch (err) {
                done.fail(err);
            }
        });

        /**
         * Use `ToppingsLoaded` to manually submit list for state management
         */
        it('allToppings$ should return the loaded list; and loaded flag == true', async done => {
            try {
                let list = await readFirst(facade.allToppings$);
                let isLoaded = await readFirst(facade.toppingsLoaded$);

                expect(list.length).toBe(0);
                expect(isLoaded).toBe(false);

                store.dispatch(new ToppingsLoaded([createEntity('AAA'), createEntity('BBB')]));

                list = await readFirst(facade.allToppings$);
                isLoaded = await readFirst(facade.toppingsLoaded$);

                expect(list.length).toBe(2);
                expect(isLoaded).toBe(true);

                done();
            } catch (err) {
                done.fail(err);
            }
        });
    });
});
