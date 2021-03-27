describe('products-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pizzatoppingscomponent--primary&knob-toppings'));

  it('should render the component', () => {
    cy.get('uap-pizza-toppings').should('exist');
  });
});
