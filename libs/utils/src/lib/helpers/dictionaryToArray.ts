import { getNonSymbolKeys } from './getNonSymbolKeys';

export const dictionaryToArray = <T>(obj: { [K in string | number]: T }) =>
    getNonSymbolKeys(obj).map(key => obj[key]);
