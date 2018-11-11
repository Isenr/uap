import { getNextId } from './getNextId';

describe('getNextId', () => {
    const createObject = (id: string, name = '') => ({
        id,
        name: name || `name-${id}`,
    });

    const idA = '1';
    const idB = '2';
    const idC = '3';

    let dictionary: { [x: string]: { id: string; name?: string } };

    beforeEach(() => {
        dictionary = {
            [idA]: createObject(idA),
            [idB]: createObject(idB),
            [idC]: createObject(idC),
        };
    });

    it('should convert the array to a dictionary', () => {
        const result = getNextId(dictionary);

        expect(result).toBe('4');
    });
});
