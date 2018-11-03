import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'uap-pizza-item',
    styleUrls: ['pizza-item.component.scss'],
    templateUrl: 'pizza-item.component.html',
})
export class PizzaItemComponent {
    @Input()
    public pizza: any;
}
