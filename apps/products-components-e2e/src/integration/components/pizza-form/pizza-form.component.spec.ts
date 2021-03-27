describe('products-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pizzaformcomponent--primary&knob-pizza&knob-toppings'));

  it('should render the component', () => {
    cy.get('uap-pizza-form').should('exist');
  });
});
