
import { ProductsComponent } from './products.component';

export default {
  title: 'ProductsComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ProductsComponent,
  props: {
  }
})