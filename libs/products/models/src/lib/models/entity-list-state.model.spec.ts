import { EntityListState } from './entity-list-state.model';

describe('EntityListState', () => {
    it('should compile', () => {
        const model: EntityListState = {
            list: [],
            loaded: false,
        };
        expect(model).toBeTruthy();
    });
});
