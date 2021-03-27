import { object } from '@storybook/addon-knobs';

import { PizzaToppingsComponent } from './pizza-toppings.component';

export default {
    title: 'PizzaToppingsComponent',
};

export const primary = () => ({
    moduleMetadata: {
        imports: [],
    },
    component: PizzaToppingsComponent,
    props: {
        toppings: object('toppings', []),
    },
});
