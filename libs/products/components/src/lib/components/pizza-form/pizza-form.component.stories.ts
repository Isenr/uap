import { object } from '@storybook/addon-knobs';

import { PizzaFormComponent } from './pizza-form.component';

export default {
    title: 'PizzaFormComponent',
};

export const primary = () => ({
    moduleMetadata: {
        imports: [],
    },
    component: PizzaFormComponent,
    props: {
        pizza: object('pizza', {}),
        toppings: object('toppings', []),
    },
});
