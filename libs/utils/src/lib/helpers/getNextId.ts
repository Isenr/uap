import { getNonSymbolKeys } from './getNonSymbolKeys';

export const getNextId = <T extends object>(obj: T) =>
    String(
        getNonSymbolKeys(obj)
            .map(id => Number.parseInt(String(id), 10))
            .filter(id => !isNaN(id))
            .find((aId, _, arr) => !arr.some(bId => bId === aId + 1)) + 1
    );
