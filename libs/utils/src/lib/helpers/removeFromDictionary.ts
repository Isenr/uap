export const removeFromDictionary = <T>(
    obj: { [K in string | number]: T },
    key: string | number
) => {
    const updated = {
        ...obj,
    };
    delete updated[key];
    return updated;
};
