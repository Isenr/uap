import { PizzaState } from './pizza-state.model';

describe('PizzaState', () => {
    it('should compile', () => {
        const model: PizzaState = {
            entities: {},
            ids: [],
            loaded: false,
        };
        expect(model).toBeTruthy();
    });
});
