import { object } from '@storybook/addon-knobs';

import { PizzaDisplayComponent } from './pizza-display.component';

export default {
    title: 'PizzaDisplayComponent',
};

export const primary = () => ({
    moduleMetadata: {
        imports: [],
    },
    component: PizzaDisplayComponent,
    props: {
        pizza: object('pizza', {}),
    },
});
