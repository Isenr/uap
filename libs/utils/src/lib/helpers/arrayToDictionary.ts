export const arrayToDictionary = <T>(
    arr: T[],
    idField: string = 'id',
    initial: { [K in string | number]: T } = {}
) =>
    arr.reduce(
        (a, b) => ({
            ...a,
            [b[idField]]: b,
        }),
        {
            ...initial,
        }
    );
