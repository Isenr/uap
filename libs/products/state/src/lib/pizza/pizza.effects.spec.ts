import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { ActionReducerMap, combineReducers, StoreModule } from '@ngrx/store';
import { DataPersistence, NxModule } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { Backend } from '@uap/backend';
import { ProductPartialState } from '@uap/products/models';
import { Observable, of } from 'rxjs';

import { productInitialState } from '../product/product-initial.state';
import { PRODUCT_FEATURE_KEY } from '../product/product.feature-key';
import { productReducers } from '../product/product.reducer';
import { PizzasLoad, PizzasLoadSuccess } from './pizza.actions';
import { PizzaEffects } from './pizza.effects';

describe('Pizza Effects', () => {
    let actions: Observable<any>;
    let effects: PizzaEffects;

    beforeEach(() => {
        const reducers: ActionReducerMap<ProductPartialState> = {
            [PRODUCT_FEATURE_KEY]: combineReducers(productReducers),
        };
        TestBed.configureTestingModule({
            imports: [
                EffectsModule.forRoot([]),
                NxModule.forRoot(),
                RouterTestingModule,
                StoreModule.forRoot(reducers, {
                    initialState: { [PRODUCT_FEATURE_KEY]: productInitialState },
                }),
            ],
            providers: [
                PizzaEffects,
                DataPersistence,
                provideMockActions(() => actions),
                {
                    provide: Backend,
                    useValue: {
                        collection: () => ({
                            create() {},
                            createId: () => '1',
                            delete() {},
                            get: () =>
                                of([
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
                                ]),
                            update() {},
                        }),
                    },
                },
            ],
        });

        effects = TestBed.get(PizzaEffects);
    });

    describe('loadPizzas$', () => {
        it('should work', () => {
            actions = hot('-a-|', { a: new PizzasLoad() });
            expect(effects.loadPizzas$).toBeObservable(
                hot('-a-|', {
                    a: new PizzasLoadSuccess({
                        pizzas: [
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
                        ],
                    }),
                })
            );
        });
    });
});
