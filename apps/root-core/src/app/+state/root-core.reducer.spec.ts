import { Entity } from '@uap/state';

import { rootCoreInitialState } from './root-core.initial-state';
import { rootCoreReducer } from './root-core.reducer';

describe('RootCore Reducer', () => {
    const getRootCoreId = it => it['id'];
    let createRootCore: (id: string, name?: string) => Entity;

    beforeEach(() => {
        createRootCore = (id: string, name = ''): Entity => ({
            id,
            name: name || `name-${id}`,
        });
    });

    describe('unknown action', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const result = rootCoreReducer(rootCoreInitialState, action);

            expect(result).toBe(rootCoreInitialState);
        });
    });
});
