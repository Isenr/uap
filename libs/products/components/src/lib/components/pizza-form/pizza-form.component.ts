import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza, Topping } from '@uap/products/models';
import { map } from 'rxjs/operators';

@Component({
    selector: 'uap-pizza-form',
    styleUrls: ['pizza-form.component.scss'],
    templateUrl: 'pizza-form.component.html',
})
export class PizzaFormComponent implements OnChanges {
    public exists = false;

    @Input()
    public pizza: Pizza;

    @Input()
    public toppings: Topping[];

    @Output()
    public selected = new EventEmitter<string[]>();

    @Output()
    public create = new EventEmitter<Pizza>();

    @Output()
    public update = new EventEmitter<Pizza>();

    @Output()
    public remove = new EventEmitter<Pizza>();

    public form = this.fb.group({
        name: ['', Validators.required],
        toppings: [[]],
    });

    constructor(private fb: FormBuilder) {}

    public get nameControl() {
        return this.form.get('name') as FormControl;
    }

    public get nameControlInvalid() {
        return this.nameControl.hasError('required') && this.nameControl.touched;
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (this.pizza && this.pizza.id) {
            this.exists = true;
            this.form.patchValue(this.pizza);
        }
        this.form
            .get('toppings')
            .valueChanges.pipe(map(toppings => toppings.map((topping: Topping) => topping.id)))
            .subscribe(value => this.selected.emit(value));
    }

    public createPizza(form: FormGroup) {
        const { value, valid } = form;
        if (valid) {
            this.create.emit(value);
        }
    }

    public updatePizza(form: FormGroup) {
        const { value, valid, touched } = form;
        if (touched && valid) {
            this.update.emit({ ...this.pizza, ...value });
        }
    }

    public removePizza(form: FormGroup) {
        const { value } = form;
        this.remove.emit({ ...this.pizza, ...value });
    }
}
