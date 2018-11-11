import { Entity } from '@uap/state';

import { rootCoreQuery } from './root-core.selectors';

describe('RootCore Selectors', () => {
    const ERROR_MSG = 'No Error Available';
    const getRootCoreId = it => it['id'];

    let storeState;

    beforeEach(() => {
        const createRootCore = (id: string, name = ''): Entity => ({
            id,
            name: name || `name-${id}`,
        });
        storeState = {
            rootCore: {
                error: ERROR_MSG,
                list: [
                    createRootCore('PRODUCT-AAA'),
                    createRootCore('PRODUCT-BBB'),
                    createRootCore('PRODUCT-CCC'),
                ],
                loaded: true,
                selectedId: 'PRODUCT-BBB',
            },
        };
    });

    describe('RootCore Selectors', () => {
        it('getLoaded() should return the current loaded status', () => {
            const result = rootCoreQuery.getLoaded(storeState);

            expect(result).toBe(true);
        });

        it('getError() should return the current error storeState', () => {
            const result = rootCoreQuery.getError(storeState);

            expect(result).toBe(ERROR_MSG);
        });
    });
});
