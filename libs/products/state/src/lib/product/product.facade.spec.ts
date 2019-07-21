import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';
import { FirestoreService } from '@uap/backend';
import { Pizza, ProductState, Topping } from '@uap/products/models';
import { of } from 'rxjs';

import { PizzasLoadSuccess } from '../pizza/pizza.actions';
import { effects } from '../public_api';
import { ToppingsLoadSuccess } from '../topping/topping.actions';
import { productInitialState } from './product-initial.state';
import { ProductsFacade } from './product.facade';
import { PRODUCT_FEATURE_KEY } from './product.feature-key';
import { productReducers } from './product.reducer';

interface TestSchema {
    productsComponents: ProductState;
}

describe('Product Facade', () => {
    let facade: ProductsFacade;
    let store: Store<TestSchema>;
    let createEntity;

    beforeEach(() => {
        createEntity = (id: string, name = ''): Pizza | Topping => ({
            id,
            name: name || `name-${id}`,
        });
    });

    describe('used in NgModule', () => {
        beforeEach(() => {
            @NgModule({
                imports: [
                    StoreModule.forFeature(PRODUCT_FEATURE_KEY, productReducers, {
                        initialState: productInitialState,
                    }),
                    EffectsModule.forFeature([...effects]),
                ],
                providers: [
                    ProductsFacade,
                    {
                        provide: FirestoreService,
                        useValue: {
                            collection: (collectionName: string) => ({
                                create() {},
                                createId: () => '1',
                                delete() {},
                                get: () =>
                                    of(
                                        collectionName === 'toppings'
                                            ? [
                                                  {
                                                      id: '1',
                                                      name: 'anchovy',
                                                  },
                                                  {
                                                      id: '2',
                                                      name: 'bacon',
                                                  },
                                                  {
                                                      id: '3',
                                                      name: 'basil',
                                                  },
                                                  {
                                                      id: '4',
                                                      name: 'chili',
                                                  },
                                                  {
                                                      id: '5',
                                                      name: 'mozzarella',
                                                  },
                                                  {
                                                      id: '6',
                                                      name: 'mushroom',
                                                  },
                                                  {
                                                      id: '7',
                                                      name: 'olive',
                                                  },
                                                  {
                                                      id: '8',
                                                      name: 'onion',
                                                  },
                                                  {
                                                      id: '9',
                                                      name: 'pepper',
                                                  },
                                                  {
                                                      id: '10',
                                                      name: 'pepperoni',
                                                  },
                                                  {
                                                      id: '11',
                                                      name: 'sweetcorn',
                                                  },
                                                  {
                                                      id: '12',
                                                      name: 'tomato',
                                                  },
                                              ]
                                            : [
                                                  {
                                                      id: '1',
                                                      name: `Blazin' Inferno`,
                                                      toppings: [
                                                          {
                                                              id: '10',
                                                              name: 'pepperoni',
                                                          },
                                                          {
                                                              id: '9',
                                                              name: 'pepper',
                                                          },
                                                          {
                                                              id: '3',
                                                              name: 'basil',
                                                          },
                                                          {
                                                              id: '4',
                                                              name: 'chili',
                                                          },
                                                          {
                                                              id: '7',
                                                              name: 'olive',
                                                          },
                                                          {
                                                              id: '2',
                                                              name: 'bacon',
                                                          },
                                                      ],
                                                  },
                                                  {
                                                      id: '2',
                                                      name: `Seaside Surfin'`,
                                                      toppings: [
                                                          {
                                                              id: '6',
                                                              name: 'mushroom',
                                                          },
                                                          {
                                                              id: '7',
                                                              name: 'olive',
                                                          },
                                                          {
                                                              id: '2',
                                                              name: 'bacon',
                                                          },
                                                          {
                                                              id: '3',
                                                              name: 'basil',
                                                          },
                                                          {
                                                              id: '1',
                                                              name: 'anchovy',
                                                          },
                                                          {
                                                              id: '8',
                                                              name: 'onion',
                                                          },
                                                          {
                                                              id: '11',
                                                              name: 'sweetcorn',
                                                          },
                                                          {
                                                              id: '9',
                                                              name: 'pepper',
                                                          },
                                                          {
                                                              id: '5',
                                                              name: 'mozzarella',
                                                          },
                                                      ],
                                                  },
                                                  {
                                                      id: '3',
                                                      name: `Plain Ol' Pepperoni`,
                                                      toppings: [
                                                          {
                                                              id: '10',
                                                              name: 'pepperoni',
                                                          },
                                                      ],
                                                  },
                                              ]
                                    ),
                                update() {},
                            }),
                        },
                    },
                ],
            })
            class CustomFeatureModule {}

            @NgModule({
                imports: [
                    NxModule.forRoot(),
                    StoreModule.forRoot({}),
                    EffectsModule.forRoot([]),
                    CustomFeatureModule,
                    RouterTestingModule,
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

                expect(Reflect.ownKeys(list).length).toBe(0);
                expect(isLoaded).toBe(false);

                facade.loadPizzas();

                list = await readFirst(facade.allPizzas$);
                isLoaded = await readFirst(facade.pizzasLoaded$);

                expect(Reflect.ownKeys(list).length).toBe(3);
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

                expect(Reflect.ownKeys(list).length).toBe(0);
                expect(isLoaded).toBe(false);

                facade.loadToppings();

                list = await readFirst(facade.allToppings$);
                isLoaded = await readFirst(facade.toppingsLoaded$);

                expect(Reflect.ownKeys(list).length).toBe(12);
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

                expect(Reflect.ownKeys(list).length).toBe(0);
                expect(isLoaded).toBe(false);

                const pizzas = [createEntity('AAA'), createEntity('BBB')];

                store.dispatch(new PizzasLoadSuccess({ pizzas }));

                list = await readFirst(facade.allPizzas$);
                isLoaded = await readFirst(facade.pizzasLoaded$);

                expect(Reflect.ownKeys(list).length).toBe(2);
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

                expect(Reflect.ownKeys(list).length).toBe(0);
                expect(isLoaded).toBe(false);

                const toppings = [createEntity('AAA'), createEntity('BBB')];

                store.dispatch(new ToppingsLoadSuccess({ toppings }));

                list = await readFirst(facade.allToppings$);
                isLoaded = await readFirst(facade.toppingsLoaded$);

                expect(Reflect.ownKeys(list).length).toBe(2);
                expect(isLoaded).toBe(true);

                done();
            } catch (err) {
                done.fail(err);
            }
        });
    });
});
