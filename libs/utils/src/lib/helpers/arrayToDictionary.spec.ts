import { arrayToDictionary } from './arrayToDictionary';

describe('arrayToDictionary', () => {
    const createObject = (id: string, name = '') => ({
        id,
        name: name || `name-${id}`,
    });
    const idsToArray = (idArray: string[]) => idArray.map(id => createObject(id));

    const idA = 'PRODUCT-AAA';
    const idB = 'PRODUCT-BBB';
    const idC = 'PRODUCT-CCC';
    const ids = [idA, idB, idC];

    let array: Array<{ id: string; name?: string }>;

    beforeEach(() => {
        array = idsToArray(ids);
    });

    it('should convert the array to a dictionary', () => {
        const result = arrayToDictionary(array);

        expect(Reflect.ownKeys(result).length === array.length).toBeTruthy();
        expect(Reflect.ownKeys(result).every(key => ids.some(id => key === id))).toBeTruthy();
    });
});
