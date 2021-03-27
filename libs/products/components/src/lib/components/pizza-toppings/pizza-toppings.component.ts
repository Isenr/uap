import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Topping } from '@uap/products/models';

const PIZZA_TOPPINGS_ACCESSOR = {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PizzaToppingsComponent),
};

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PIZZA_TOPPINGS_ACCESSOR],
    selector: 'uap-pizza-toppings',
    styleUrls: ['pizza-toppings.component.scss'],
    templateUrl: 'pizza-toppings.component.html',
})
export class PizzaToppingsComponent implements ControlValueAccessor {
    @Input()
    public toppings: Topping[] = [];

    public value: Topping[] = [];

    private onTouch: <T = unknown, U = unknown>(...args: U[]) => T;
    private onModelChange: <T = unknown, U = unknown>(...args: U[]) => T;

    public registerOnChange(fn: <T = unknown, U = unknown>(...args: U[]) => T) {
        this.onModelChange = fn;
    }

    public registerOnTouched(fn: <T = unknown, U = unknown>(...args: U[]) => T) {
        this.onTouch = fn;
    }

    public writeValue(value: Topping[]) {
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
