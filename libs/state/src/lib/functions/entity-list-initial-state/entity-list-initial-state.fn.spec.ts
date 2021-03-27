import { EntityAdapter, EntityState } from '@ngrx/entity';

import { entityListInitialState } from './entity-list-initial-state.fn';

describe('entityListInitialState', () => {
    it('should return an object with the expected initial properties', () => {
        const result = entityListInitialState({
            getInitialState<S extends Record<string, unknown>>(
                state?: S
            ): EntityState<unknown> & S {
                return {
                    entities: {},
                    ids: [],
                    ...state,
                };
            },
        } as EntityAdapter<unknown>);

        expect(Reflect.has(result, 'entities')).toBeTruthy();
        expect(Reflect.has(result, 'ids')).toBeTruthy();
        expect(Reflect.has(result, 'error')).toBeTruthy();
        expect(Reflect.has(result, 'loaded')).toBeTruthy();
        expect(Reflect.has(result, 'selectedId')).toBeTruthy();
        expect(Reflect.has(result, 'selectedIds')).toBeTruthy();

        expect(typeof result.entities === 'object').toBeTruthy();
        expect(Array.isArray(result.ids)).toBeTruthy();
        expect(result.error === undefined).toBeTruthy();
        expect(result.loaded === false).toBeTruthy();
        expect(result.selectedId === undefined).toBeTruthy();
        expect(Array.isArray(result.selectedIds)).toBeTruthy();
    });
});
