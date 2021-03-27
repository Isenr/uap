describe('products-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pizzaitemcomponent--primary&knob-pizza'));

  it('should render the component', () => {
    cy.get('uap-pizza-item').should('exist');
  });
});
