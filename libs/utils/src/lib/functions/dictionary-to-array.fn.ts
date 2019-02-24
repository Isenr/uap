import { getNonSymbolKeys } from './get-non-symbol-keys.fn';

export const dictionaryToArray = <T>(obj: { [K in string | number]: T }) =>
    getNonSymbolKeys(obj).map(key => obj[key]);
