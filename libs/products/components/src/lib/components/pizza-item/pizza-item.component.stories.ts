import { object } from '@storybook/addon-knobs';

import { PizzaItemComponent } from './pizza-item.component';

export default {
    title: 'PizzaItemComponent',
};

export const primary = () => ({
    moduleMetadata: {
        imports: [],
    },
    component: PizzaItemComponent,
    props: {
        pizza: object('pizza', {}),
    },
});
