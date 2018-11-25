import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pizza } from '@uap/products/models';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'uap-pizza-item',
    styleUrls: ['pizza-item.component.scss'],
    templateUrl: 'pizza-item.component.html',
})
export class PizzaItemComponent {
    @Input()
    public pizza: Pizza;
}
