import { Entity } from './entity.model';

describe('Entity', () => {
    it('should compile', () => {
        const model: Entity = {};
        expect(model).toBeTruthy();
    });
});
