import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pizza } from '@uap/products/models';

export const DROP_ANIMATION = trigger('drop', [
    transition(':enter', [
        style({ transform: 'translateY(-200px)', opacity: 0 }),
        animate(
            '300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
            style({ transform: 'translateY(0)', opacity: 1 })
        ),
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate(
            '200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
            style({ transform: 'translateY(-200px)', opacity: 0 })
        ),
    ]),
]);

@Component({
    animations: [DROP_ANIMATION],
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'uap-pizza-display',
    styleUrls: ['pizza-display.component.scss'],
    templateUrl: 'pizza-display.component.html',
})
export class PizzaDisplayComponent {
    @Input()
    public pizza: Pizza;
}
