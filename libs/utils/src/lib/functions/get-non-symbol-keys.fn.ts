export const getNonSymbolKeys = <T extends Record<string, unknown>>(obj: T) =>
    Reflect.ownKeys(obj).filter((key: unknown): key is string | number => typeof key !== 'symbol');
