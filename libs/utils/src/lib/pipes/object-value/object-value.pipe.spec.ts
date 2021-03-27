import { ObjectValuePipe } from './object-value.pipe';

type PipeParam = Parameters<ObjectValuePipe<unknown>['transform']>[0];

describe('ObjectValuePipe', () => {
    it('create an instance', () => {
        const pipe = new ObjectValuePipe();
        expect(pipe).toBeTruthy();
    });

    it('return undefined when passed a non-object', () => {
        const pipe = new ObjectValuePipe();
        expect(pipe.transform(('' as unknown) as PipeParam) === undefined).toBeTruthy();
    });

    it('return undefined when passed an object without a value property', () => {
        const pipe = new ObjectValuePipe();
        expect(pipe.transform(('' as unknown) as PipeParam) === undefined).toBeTruthy();
    });

    it('return a value when passed an object with a value property', () => {
        const pipe = new ObjectValuePipe();
        const value = 'value';
        expect(pipe.transform({ value }) === value).toBeTruthy();
    });
});
