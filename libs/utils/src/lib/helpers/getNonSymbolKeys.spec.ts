import { getNonSymbolKeys } from './getNonSymbolKeys';

describe('getNonSymbolKeys', () => {
    const createObject = (id: string, name = '') => ({
        id,
        name: name || `name-${id}`,
    });

    const idA = '1';
    const idB = '2';
    const idC = Symbol.for('3');

    let dictionary: { [x: string]: { id: string; name?: string } };

    beforeEach(() => {
        dictionary = {
            [idA]: createObject(idA),
            [idB]: createObject(idB),
            [idC]: {
                id: idC,
                name: `name-${idC.toString()}`,
            },
        };
    });

    it('should convert the array to a dictionary', () => {
        const result = getNonSymbolKeys(dictionary);

        expect(result.some((key: any) => key === idC)).toBeFalsy();
    });
});
