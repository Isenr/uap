import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Topping } from '@uap/products/models';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            multi: true,
            provide: NG_VALUE_ACCESSOR,
            useExisting: PizzaToppingsComponent,
        },
    ],
    selector: 'uap-pizza-toppings',
    styleUrls: ['pizza-toppings.component.scss'],
    templateUrl: 'pizza-toppings.component.html',
})
export class PizzaToppingsComponent implements ControlValueAccessor {
    @Input()
    public toppings: Array<Topping> = [];

    public value: Array<Topping> = [];

    private onTouch: <T = any, U = any>(...args: Array<U>) => T;
    private onModelChange: <T = any, U = any>(...args: Array<U>) => T;

    public registerOnChange(fn: <T = any, U = any>(...args: Array<U>) => T) {
        this.onModelChange = fn;
    }

    public registerOnTouched(fn: <T = any, U = any>(...args: Array<U>) => T) {
        this.onTouch = fn;
    }

    public writeValue(value: Array<Topping>) {
        this.value = value;
    }

    public selectTopping(topping: Topping) {
        if (this.existsInToppings(topping)) {
            this.value = this.value.filter(item => item.id !== topping.id);
        } else {
            this.value = [...this.value, topping];
        }
        this.onTouch();
        this.onModelChange(this.value);
    }

    public existsInToppings(topping: Topping) {
        return this.value.some(val => val.id === topping.id);
    }
}
