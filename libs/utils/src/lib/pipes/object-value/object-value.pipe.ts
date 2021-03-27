import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'objectvalue',
})
export class ObjectValuePipe<U> implements PipeTransform {
    private previous: { value: U } | { value: U }[];
    private value: U | U[];

    public transform<T extends { value: U }>(input: T): U;
    public transform<T extends { value: U }>(input: T[]): U[];
    public transform<T extends { value: U }>(input: T | T[]) {
        if (!input || typeof input !== 'object') return;

        if (input === this.previous) return this.value;

        this.previous = input;

        if (Array.isArray(input)) {
            this.value = input.map(x => x.value);
        } else {
            this.value = input.value;
        }
        return this.value;
    }
}
