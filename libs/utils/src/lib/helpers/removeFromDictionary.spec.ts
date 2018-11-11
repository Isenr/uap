import { removeFromDictionary } from './removeFromDictionary';

describe('removeFromDictionary', () => {
    const createObject = (id: string, name = '') => ({
        id,
        name: name || `name-${id}`,
    });

    const idA = 'PRODUCT-AAA';
    const idB = 'PRODUCT-BBB';
    const idC = 'PRODUCT-CCC';

    let dictionary: { [x: string]: { id: string; name?: string } };

    beforeEach(() => {
        dictionary = {
            [idA]: createObject(idA),
            [idB]: createObject(idB),
            [idC]: createObject(idC),
        };
    });

    it('should convert the array to a dictionary', () => {
        const result = removeFromDictionary(dictionary, idC);

        expect(result === dictionary).toBeFalsy();
        expect(result[idC]).toBeFalsy();
        expect(dictionary[idC]).toBeTruthy();
        expect(
            Reflect.ownKeys(dictionary).length - 1 === Reflect.ownKeys(result).length
        ).toBeTruthy();
    });
});
