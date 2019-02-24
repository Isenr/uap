export const getNonSymbolKeys = <T extends object>(obj: T) =>
    Reflect.ownKeys(obj).filter((key): key is string | number => typeof key !== 'symbol');
