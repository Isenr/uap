import { dictionaryToArray } from './dictionaryToArray';

describe('dictionaryToArray', () => {
    const createObject = (id: string, name = '') => ({
        id,
        name: name || `name-${id}`,
    });

    const idA = 'PRODUCT-AAA';
    const idB = 'PRODUCT-BBB';
    const idC = 'PRODUCT-CCC';

    const ids = [idA, idB, idC];

    let dictionary: { [x: string]: { id: string; name?: string } };

    beforeEach(() => {
        dictionary = {
            [idA]: createObject(idA),
            [idB]: createObject(idB),
            [idC]: createObject(idC),
        };
    });

    it('should convert the array to a dictionary', () => {
        const result = dictionaryToArray(dictionary);

        expect(Array.isArray(result)).toBeTruthy();
        expect(Reflect.ownKeys(dictionary).length === result.length).toBeTruthy();
        expect(Reflect.ownKeys(dictionary).every(key => ids.some(id => key === id))).toBeTruthy();
    });
});
