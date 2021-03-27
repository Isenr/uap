import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { ActionReducerMap, combineReducers, StoreModule } from '@ngrx/store';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { FirestoreService } from '@uap/backend';
import { ProductPartialState } from '@uap/products/models';
import { Observable, of } from 'rxjs';

import { productInitialState } from '../product/product-initial.state';
import { PRODUCT_FEATURE_KEY } from '../product/product.feature-key';
import { productReducers } from '../product/product.reducer';
import { ToppingsLoad, ToppingsLoadSuccess } from './topping.actions';
import { ToppingEffects } from './topping.effects';

describe('Topping Effects', () => {
    let actions: Observable<unknown>;
    let effects: ToppingEffects;

    beforeEach(() => {
        const reducers: ActionReducerMap<ProductPartialState> = {
            [PRODUCT_FEATURE_KEY]: combineReducers(productReducers),
        };
        TestBed.configureTestingModule({
            imports: [
                NxModule.forRoot(),
                StoreModule.forRoot(reducers, {
                    initialState: { [PRODUCT_FEATURE_KEY]: productInitialState },
                }),
                EffectsModule.forRoot([]),
            ],
            providers: [
                ToppingEffects,
                DataPersistence,
                provideMockActions(() => actions),
                {
                    provide: FirestoreService,
                    useValue: {
                        collection: jest.fn(() => ({
                            create: jest.fn(),
                            createId: jest.fn(() => '1'),
                            delete: jest.fn(),
                            get: jest.fn(() =>
                                of([
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
                                ])),
                            update: jest.fn(),
                        })),
                    },
                },
            ],
        });

        effects = TestBed.inject(ToppingEffects);
    });

    describe('loadToppings$', () => {
        it('should work', () => {
            actions = hot('-a-|', { a: new ToppingsLoad() });
            expect(effects.loadToppings$).toBeObservable(
                hot('-a-|', {
                    a: new ToppingsLoadSuccess({
                        toppings: [
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
                        ],
                    }),
                })
            );
        });
    });
});
